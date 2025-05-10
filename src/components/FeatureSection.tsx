
import React from 'react';
import { Shield, Briefcase, BarChart2, Calculator, UserCheck, Clock } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: 'Secure Investments',
    description: 'Your investments are protected with bank-grade security protocols and industry-standard compliance.'
  },
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: 'Diversified Portfolio',
    description: 'Access a wide range of investment options across mutual funds, bonds, FDs, and alternative investments.'
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-primary" />,
    title: 'Expert Analysis',
    description: 'Our team of financial experts provides in-depth analysis and personalized recommendations.'
  },
  {
    icon: <Calculator className="w-10 h-10 text-primary" />,
    title: 'Financial Planning Tools',
    description: 'Use our calculators and planning tools to set goals and track your financial journey.'
  },
  {
    icon: <UserCheck className="w-10 h-10 text-primary" />,
    title: 'Dedicated Support',
    description: 'Get personalized assistance from our team of financial advisors whenever you need guidance.'
  },
  {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: 'Regular Updates',
    description: 'Stay informed with market insights, investment opportunities, and portfolio performance updates.'
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose <span className="text-primary">WealthCraft</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive financial solutions tailored to your unique needs and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
