
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useAuth } from '../context/AuthContext';

const HeroBanner: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="relative bg-gradient-to-r from-primary to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Path to Financial <span className="text-secondary">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Expert guidance for your investments, insurance, and financial planning needs with personalized solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              {!user ? (
                <>
                  <Link to="/register">
                    <Button variant="secondary" size="lg">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" size="lg">
                      Contact Us
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard">
                    <Button variant="secondary" size="lg">
                      View Dashboard
                    </Button>
                  </Link>
                  <Link to="/recommended-funds">
                    <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" size="lg">
                      Explore Investments
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-blue-500 rounded-full opacity-20"></div>
            </div>
            <img 
              src="https://source.unsplash.com/random/600x400?finance" 
              alt="Financial Success"
              className="rounded-lg shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-20 w-full text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.44,118.92,150.26,82.66,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroBanner;
