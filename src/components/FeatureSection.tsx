
import React from 'react';

const features = [
  {
    icon: 'fa fa-shield',
    title: 'Secure Investments',
    description: 'Your investments are protected with bank-grade security protocols and industry-standard compliance.'
  },
  {
    icon: 'fa fa-briefcase',
    title: 'Diversified Portfolio',
    description: 'Access a wide range of investment options across mutual funds, bonds, FDs, and alternative investments.'
  },
  {
    icon: 'fa fa-bar-chart',
    title: 'Expert Analysis',
    description: 'Our team of financial experts provides in-depth analysis and personalized recommendations.'
  },
  {
    icon: 'fa fa-calculator',
    title: 'Financial Planning Tools',
    description: 'Use our calculators and planning tools to set goals and track your financial journey.'
  },
  {
    icon: 'fa fa-user-plus',
    title: 'Dedicated Support',
    description: 'Get personalized assistance from our team of financial advisors whenever you need guidance.'
  },
  {
    icon: 'fa fa-clock-o',
    title: 'Regular Updates',
    description: 'Stay informed with market insights, investment opportunities, and portfolio performance updates.'
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section className="w3-container w3-light-grey w3-padding-64">
      <div className="w3-container">
        <div className="w3-center w3-padding-32">
          <h2 className="w3-xxlarge">Why Choose <span className="w3-text-blue">WealthCraft</span></h2>
          <p className="w3-large w3-text-dark-grey">
            We provide comprehensive financial solutions tailored to your unique needs and goals.
          </p>
        </div>
        
        <div className="w3-row-padding">
          {features.map((feature, index) => (
            <div key={index} className="w3-col l4 m6 s12 w3-padding-16">
              <div className="w3-card w3-round-large w3-padding-24 w3-white w3-hover-shadow" style={{height: '100%'}}>
                <div className="w3-padding-16 w3-center">
                  <div className="w3-circle w3-theme w3-padding-16 w3-center w3-margin-auto" style={{width: '64px', height: '64px', display: 'inline-block'}}>
                    <i className={`${feature.icon} w3-xxlarge`}></i>
                  </div>
                </div>
                <h3 className="w3-large w3-text-dark-grey w3-center">{feature.title}</h3>
                <p className="w3-text-grey">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
