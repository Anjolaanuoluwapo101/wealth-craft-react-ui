
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect if not logged in
  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Mock portfolio data
  const portfolioData = [
    { name: 'Equity', value: 65 },
    { name: 'Debt', value: 25 },
    { name: 'Gold', value: 10 }
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Mock returns data
  const returnsData = [
    { name: '1M', return: 2.4 },
    { name: '3M', return: 7.3 },
    { name: '6M', return: 14.5 },
    { name: '1Y', return: 21.2 },
    { name: '3Y', return: 48.7 },
    { name: '5Y', return: 87.3 }
  ];

  // Mock recent transactions
  const recentTransactions = [
    { date: '2023-08-15', fund: 'HDFC Top 100 Fund', type: 'Buy', amount: 10000, status: 'Completed' },
    { date: '2023-07-22', fund: 'SBI Blue Chip Fund', type: 'SIP', amount: 5000, status: 'Completed' },
    { date: '2023-07-01', fund: 'Axis Mid Cap Fund', type: 'Sell', amount: 7500, status: 'Completed' },
    { date: '2023-06-15', fund: 'ICICI Prudential Liquid Fund', type: 'Buy', amount: 25000, status: 'Completed' }
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Welcome back, {user.name}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Investment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">₹4,32,500</div>
                <p className="text-sm text-green-600">↑ 15.3% (YTD)</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Current Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">₹5,18,750</div>
                <p className="text-sm text-green-600">↑ ₹86,250 (Gain)</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active SIPs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">₹22,500</div>
                <p className="text-sm text-muted-foreground">Across 4 funds</p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="overview" className="mb-8">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="investments">Investments</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Asset Allocation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={portfolioData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {portfolioData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Returns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={returnsData}>
                          <XAxis dataKey="name" />
                          <YAxis tickFormatter={(value) => `${value}%`} />
                          <Tooltip formatter={(value) => [`${value}%`, 'Return']} />
                          <Bar dataKey="return" fill="#0057a5" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="investments" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Your Investments</CardTitle>
                    <Button variant="outline" size="sm">
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Fund Name</th>
                          <th className="text-right py-3 px-4">Units</th>
                          <th className="text-right py-3 px-4">Purchase Price</th>
                          <th className="text-right py-3 px-4">Current Value</th>
                          <th className="text-right py-3 px-4">Returns (%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">HDFC Top 100 Fund</td>
                          <td className="text-right py-3 px-4">182.456</td>
                          <td className="text-right py-3 px-4">₹120,000</td>
                          <td className="text-right py-3 px-4">₹150,350</td>
                          <td className="text-right py-3 px-4 text-green-600">+25.29%</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">Axis Mid Cap Fund</td>
                          <td className="text-right py-3 px-4">420.878</td>
                          <td className="text-right py-3 px-4">₹86,500</td>
                          <td className="text-right py-3 px-4">₹112,400</td>
                          <td className="text-right py-3 px-4 text-green-600">+29.94%</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">SBI Blue Chip Fund</td>
                          <td className="text-right py-3 px-4">1245.321</td>
                          <td className="text-right py-3 px-4">₹76,000</td>
                          <td className="text-right py-3 px-4">₹83,200</td>
                          <td className="text-right py-3 px-4 text-green-600">+9.47%</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">ICICI Prudential Liquid Fund</td>
                          <td className="text-right py-3 px-4">836.754</td>
                          <td className="text-right py-3 px-4">₹150,000</td>
                          <td className="text-right py-3 px-4">₹172,800</td>
                          <td className="text-right py-3 px-4 text-green-600">+15.2%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="transactions" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Recent Transactions</CardTitle>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Date</th>
                          <th className="text-left py-3 px-4">Fund Name</th>
                          <th className="text-left py-3 px-4">Type</th>
                          <th className="text-right py-3 px-4">Amount</th>
                          <th className="text-right py-3 px-4">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentTransactions.map((transaction, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">{transaction.date}</td>
                            <td className="py-3 px-4">{transaction.fund}</td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                transaction.type === 'Buy' ? 'bg-green-100 text-green-800' : 
                                transaction.type === 'Sell' ? 'bg-red-100 text-red-800' : 
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {transaction.type}
                              </span>
                            </td>
                            <td className="text-right py-3 px-4">₹{transaction.amount.toLocaleString()}</td>
                            <td className="text-right py-3 px-4">
                              <span className="text-green-600">{transaction.status}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reports" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start">
                      Capital Gains Statement
                    </Button>
                    <Button variant="outline" className="justify-start">
                      Transaction History
                    </Button>
                    <Button variant="outline" className="justify-start">
                      Portfolio Summary
                    </Button>
                    <Button variant="outline" className="justify-start">
                      Tax Statement
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming SIP Investments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <div>
                      <p className="font-medium">HDFC Top 100 Fund</p>
                      <p className="text-sm text-muted-foreground">Aug 5, 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹10,000</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <div>
                      <p className="font-medium">SBI Blue Chip Fund</p>
                      <p className="text-sm text-muted-foreground">Aug 10, 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹5,000</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <div>
                      <p className="font-medium">Axis Mid Cap Fund</p>
                      <p className="text-sm text-muted-foreground">Aug 15, 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹7,500</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button>Invest Now</Button>
                  <Button>Start SIP</Button>
                  <Button variant="outline">Add Money</Button>
                  <Button variant="outline">Withdraw</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
