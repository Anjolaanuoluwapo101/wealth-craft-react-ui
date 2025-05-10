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
    <div className="w3-container w3-light-grey" style={{ minHeight: "100vh" }}>
      <Header  />
      <main className="w3-padding-large w3-center">
        <div className="w3-card w3-white w3-round-large w3-margin-auto" style={{ maxWidth: "400px", width: "100%" }}>
          <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w3-bar w3-border w3-round-large">
              <TabsTrigger value="login" className="w3-bar-item w3-button w3-hover-light-grey">Login</TabsTrigger>
              <TabsTrigger value="register" className="w3-bar-item w3-button w3-hover-light-grey">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle className="w3-large">Login to your account</CardTitle>
                  <CardDescription className="w3-small">
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin}>
                    <div className="w3-container">
                      <div className="w3-margin-bottom">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          className="w3-input w3-border w3-round"
                          placeholder="name@example.com" 
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="w3-margin-bottom">
                        <div className="w3-row">
                          <Label htmlFor="password" className="w3-col s6">Password</Label>
                          <Link to="/forgot-password" className="w3-col s6 w3-right-align w3-small w3-text-blue">
                            Forgot password?
                          </Link>
                        </div>
                        <Input 
                          id="password" 
                          type="password"
                          className="w3-input w3-border w3-round"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" className="w3-button w3-blue w3-round w3-block">
                        Sign In
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="w3-center">
                  <p className="w3-small">
                    Don't have an account?{" "}
                    <button 
                      onClick={() => setActiveTab('register')} 
                      className="w3-text-blue w3-hover-text-light-blue"
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
                  <CardTitle className="w3-large">Create an account</CardTitle>
                  <CardDescription className="w3-small">
                    Enter your details to create your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister}>
                    <div className="w3-container">
                      <div className="w3-margin-bottom">
                        <Label htmlFor="name">Name</Label>
                        <Input 
                          id="name" 
                          type="text" 
                          className="w3-input w3-border w3-round"
                          placeholder="John Doe" 
                          value={registerName}
                          onChange={(e) => setRegisterName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="w3-margin-bottom">
                        <Label htmlFor="registerEmail">Email</Label>
                        <Input 
                          id="registerEmail" 
                          type="email" 
                          className="w3-input w3-border w3-round"
                          placeholder="name@example.com" 
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="w3-margin-bottom">
                        <Label htmlFor="registerPassword">Password</Label>
                        <Input 
                          id="registerPassword" 
                          type="password"
                          className="w3-input w3-border w3-round"
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="w3-margin-bottom">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input 
                          id="confirmPassword" 
                          type="password"
                          className="w3-input w3-border w3-round"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                      <Button type="submit" className="w3-button w3-blue w3-round w3-block">
                        Create Account
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="w3-center">
                  <p className="w3-small">
                    Already have an account?{" "}
                    <button 
                      onClick={() => setActiveTab('login')} 
                      className="w3-text-blue w3-hover-text-light-blue"
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
