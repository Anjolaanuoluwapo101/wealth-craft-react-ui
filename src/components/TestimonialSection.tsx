
import React from 'react';
import { Testimonial } from '../types';
import { testimonials } from '../data/mockData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of investors across India for reliable financial guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <Card className="h-full transition-shadow hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{testimonial.name}</div>
            <CardDescription>{testimonial.position}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="inline-block">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
                fill={i < testimonial.rating ? "currentColor" : "none"}
                stroke={i < testimonial.rating ? "currentColor" : "currentColor"}
                className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
            </span>
          ))}
        </div>
        <blockquote className="italic text-gray-700">
          "{testimonial.content}"
        </blockquote>
      </CardContent>
    </Card>
  );
};

export default TestimonialSection;
