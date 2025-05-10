
import React from 'react';
import { MutualFund } from '../types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface MutualFundCardProps {
  fund: MutualFund;
}

const MutualFundCard: React.FC<MutualFundCardProps> = ({ fund }) => {
  return (
    <Card className="h-full transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold">{fund.name}</CardTitle>
          {fund.isRecommended && (
            <Badge variant="secondary">Recommended</Badge>
          )}
          {fund.isNFO && (
            <Badge variant="destructive">NFO</Badge>
          )}
        </div>
        <CardDescription>{fund.amc}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Category</span>
            <span className="font-medium">{fund.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">NAV</span>
            <span className="font-medium">₹{fund.nav.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">1Y Return</span>
            <span className="font-medium text-green-600">{fund.oneYearReturn > 0 ? '+' : ''}{fund.oneYearReturn}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Risk Level</span>
            <span className={`font-medium ${
              fund.riskLevel === 'Low' ? 'text-green-600' : 
              fund.riskLevel === 'Moderate' ? 'text-amber-500' : 
              'text-red-500'
            }`}>
              {fund.riskLevel}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Rating</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  fill={i < fund.rating ? "currentColor" : "none"}
                  stroke={i < fund.rating ? "currentColor" : "currentColor"}
                  className={`w-4 h-4 ${i < fund.rating ? 'text-secondary' : 'text-gray-300'}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Invest Now <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MutualFundCard;
