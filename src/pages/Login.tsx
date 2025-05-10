
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [activeTab, setActiveTab] = useState('login');
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Register form state
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail && loginPassword) {
      login(loginEmail, loginPassword);
      navigate('/');
    }
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerName && registerEmail && registerPassword && registerPassword === confirmPassword) {
      register(registerName, registerEmail, registerPassword);
      navigate('/');
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="w-full max-w-md">
          <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Login to your account</CardTitle>
                  <CardDescription>
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="name@example.com" 
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Password</Label>
                          <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input 
                          id="password" 
                          type="password"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Sign In
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <button 
                      onClick={() => setActiveTab('register')} 
                      className="text-primary hover:underline"
                    >
                      Register
                    </button>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle>Create an account</CardTitle>
                  <CardDescription>
                    Enter your details to create your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input 
                          id="name" 
                          type="text" 
                          placeholder="John Doe" 
                          value={registerName}
                          onChange={(e) => setRegisterName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="registerEmail">Email</Label>
                        <Input 
                          id="registerEmail" 
                          type="email" 
                          placeholder="name@example.com" 
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="registerPassword">Password</Label>
                        <Input 
                          id="registerPassword" 
                          type="password"
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input 
                          id="confirmPassword" 
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Create Account
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <button 
                      onClick={() => setActiveTab('login')} 
                      className="text-primary hover:underline"
                    >
                      Login
                    </button>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
