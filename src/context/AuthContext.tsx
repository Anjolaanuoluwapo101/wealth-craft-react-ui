
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User } from '../types';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (name: string, email: string, password: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();

  const login = (email: string, password: string) => {
    // Simulate login with dummy data
    if (email && password) {
      const role = email.includes('admin') 
        ? 'admin' 
        : email.includes('master') 
          ? 'master' 
          : 'user';
      
      setUser({
        id: '1',
        name: email.split('@')[0],
        email,
        role: role as 'user' | 'admin' | 'master',
        isLoggedIn: true
      });
      
      toast({
        title: "Login successful",
        description: `Welcome back, ${email.split('@')[0]}!`
      });
    }
  };

  const logout = () => {
    setUser(null);
    toast({
      title: "Logout successful",
      description: "You have been logged out."
    });
  };

  const register = (name: string, email: string, password: string) => {
    // Simulate registration
    if (name && email && password) {
      setUser({
        id: '1',
        name,
        email,
        role: 'user',
        isLoggedIn: true
      });
      
      toast({
        title: "Registration successful",
        description: `Welcome, ${name}!`
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
