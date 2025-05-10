
import React from 'react';
import { recommendedFunds } from '../data/mockData';
import MutualFundCard from './MutualFundCard';
import { Link } from 'react-router-dom';

const RecommendedFundsSection: React.FC = () => {
  // Only show up to 3 recommended funds on the home page
  const displayFunds = recommendedFunds.slice(0, 3);
  
  return (
    <section className="w3-container w3-padding-64 w3-white">
      <div className="w3-container">
        <div className="w3-row w3-padding-16">
          <div className="w3-col m8">
            <h2 className="w3-xxlarge">Recommended Funds</h2>
            <p className="w3-text-grey">Handpicked mutual funds with strong performance and growth potential</p>
          </div>
          <div className="w3-col m4 w3-right-align w3-hide-small">
            <Link to="/recommended-funds">
              <button className="w3-button w3-border w3-round w3-hover-light-grey">
                Explore All <i className="fa fa-arrow-right w3-margin-left"></i>
              </button>
            </Link>
          </div>
        </div>
        
        <div className="w3-row-padding">
          {displayFunds.map((fund) => (
            <div key={fund.id} className="w3-col l4 m6 s12 w3-padding-16">
              <MutualFundCard fund={fund} />
            </div>
          ))}
        </div>
        
        <div className="w3-center w3-padding-16 w3-hide-medium w3-hide-large">
          <Link to="/recommended-funds">
            <button className="w3-button w3-border w3-round w3-hover-light-grey">
              Explore All <i className="fa fa-arrow-right w3-margin-left"></i>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecommendedFundsSection;
