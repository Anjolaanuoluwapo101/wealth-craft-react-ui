
import React from 'react';
import { MutualFund } from '../types';

interface MutualFundCardProps {
  fund: MutualFund;
}

const MutualFundCard: React.FC<MutualFundCardProps> = ({ fund }) => {
  return (
    <div className="w3-card w3-round w3-white w3-hover-shadow" style={{height: '100%'}}>
      <div className="w3-container w3-padding">
        <div className="w3-row">
          <div className="w3-col m8">
            <h3 className="w3-large w3-text-dark-grey">{fund.name}</h3>
          </div>
          <div className="w3-col m4 w3-right-align">
            {fund.isRecommended && (
              <span className="w3-tag w3-amber w3-round">Recommended</span>
            )}
            {fund.isNFO && (
              <span className="w3-tag w3-red w3-round">NFO</span>
            )}
          </div>
        </div>
        <p className="w3-text-grey">{fund.amc}</p>
      </div>
      
      <div className="w3-container w3-padding-small">
        <div className="w3-row w3-padding-small">
          <div className="w3-col m6 w3-text-grey">Category</div>
          <div className="w3-col m6 w3-right-align">{fund.category}</div>
        </div>
        
        <div className="w3-row w3-padding-small">
          <div className="w3-col m6 w3-text-grey">NAV</div>
          <div className="w3-col m6 w3-right-align">₹{fund.nav.toFixed(2)}</div>
        </div>
        
        <div className="w3-row w3-padding-small">
          <div className="w3-col m6 w3-text-grey">1Y Return</div>
          <div className={`w3-col m6 w3-right-align ${fund.oneYearReturn > 0 ? 'w3-text-green' : 'w3-text-red'}`}>
            {fund.oneYearReturn > 0 ? '+' : ''}{fund.oneYearReturn}%
          </div>
        </div>
        
        <div className="w3-row w3-padding-small">
          <div className="w3-col m6 w3-text-grey">Risk Level</div>
          <div className={`w3-col m6 w3-right-align ${
            fund.riskLevel === 'Low' ? 'w3-text-green' : 
            fund.riskLevel === 'Moderate' ? 'w3-text-amber' : 
            'w3-text-red'
          }`}>
            {fund.riskLevel}
          </div>
        </div>
        
        <div className="w3-row w3-padding-small">
          <div className="w3-col m6 w3-text-grey">Rating</div>
          <div className="w3-col m6 w3-right-align">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i}
                className={`fa fa-star ${i < fund.rating ? 'w3-text-amber' : 'w3-text-grey'}`}
              ></i>
            ))}
          </div>
        </div>
      </div>
      
      <div className="w3-container w3-padding-16">
        <button className="w3-button w3-theme w3-round w3-block">
          Invest Now <i className="fa fa-arrow-right w3-small w3-margin-left"></i>
        </button>
      </div>
    </div>
  );
};

export default MutualFundCard;
