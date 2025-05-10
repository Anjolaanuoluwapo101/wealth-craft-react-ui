
import React from 'react';
import { recommendedFunds } from '../data/mockData';
import MutualFundCard from './MutualFundCard';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const RecommendedFundsSection: React.FC = () => {
  // Only show up to 3 recommended funds on the home page
  const displayFunds = recommendedFunds.slice(0, 3);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Recommended Funds</h2>
            <p className="text-gray-600">Handpicked mutual funds with strong performance and growth potential</p>
          </div>
          <Link to="/recommended-funds">
            <Button variant="outline" className="hidden md:flex">
              Explore All <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayFunds.map((fund) => (
            <MutualFundCard key={fund.id} fund={fund} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/recommended-funds">
            <Button variant="outline">
              Explore All <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecommendedFundsSection;
