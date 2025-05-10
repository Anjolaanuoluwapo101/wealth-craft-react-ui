
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CtaSection: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <section className="w3-container w3-theme w3-padding-64">
      <div className="w3-container w3-center">
        <h2 className="w3-xxxlarge">Ready to Start Your Investment Journey?</h2>
        <p className="w3-large w3-opacity w3-padding">
          Join thousands of investors who trust WealthCraft for their financial goals.
        </p>
        <div className="w3-padding-16">
          {!user ? (
            <>
              <Link to="/register">
                <button className="w3-button w3-amber w3-round w3-margin-right">
                  Create Free Account
                </button>
              </Link>
              <Link to="/contact">
                <button className="w3-button w3-border w3-border-white w3-round w3-transparent w3-text-white w3-hover-white w3-hover-text-theme">
                  Talk to an Expert
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/recommended-funds">
                <button className="w3-button w3-amber w3-round w3-margin-right">
                  Explore Investments
                </button>
              </Link>
              <Link to="/dashboard">
                <button className="w3-button w3-border w3-border-white w3-round w3-transparent w3-text-white w3-hover-white w3-hover-text-theme">
                  View Dashboard
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w3-display-bottommiddle" style={{marginBottom: '-8px', width: '100%'}}>
        <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,96C960,107,1056,117,1152,122.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
  );
};

export default CtaSection;
