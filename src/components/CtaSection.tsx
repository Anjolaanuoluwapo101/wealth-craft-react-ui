
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CtaSection: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
          Join thousands of investors who trust WealthCraft for their financial goals. Get started today with personalized investment solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {!user ? (
            <>
              <Link to="/register">
                <Button variant="secondary" size="lg">
                  Create Free Account
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" size="lg">
                  Talk to an Expert
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/recommended-funds">
                <Button variant="secondary" size="lg">
                  Explore Investments
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" size="lg">
                  View Dashboard
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
