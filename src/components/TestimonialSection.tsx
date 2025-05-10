
import React from 'react';
import { Testimonial } from '../types';
import { testimonials } from '../data/mockData';

const TestimonialSection: React.FC = () => {
  return (
    <section className="w3-container w3-padding-64 w3-theme-light">
      <div className="w3-container">
        <div className="w3-center w3-padding-24">
          <h2 className="w3-xxlarge">What Our Clients Say</h2>
          <p className="w3-large w3-opacity">
            Trusted by thousands of investors across India for reliable financial guidance.
          </p>
        </div>
        
        <div className="w3-row-padding">
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
    <div className="w3-col l4 m6 s12 w3-padding-16">
      <div className="w3-card w3-round-large w3-white w3-hover-shadow">
        <div className="w3-container w3-padding-16">
          <div className="w3-row">
            <div className="w3-col s3">
              <img 
                src={testimonial.imageUrl || "https://www.w3schools.com/w3images/avatar2.png"} 
                className="w3-circle w3-image" 
                style={{ width: '70px', height: '70px' }}
                alt={testimonial.name}
              />
            </div>
            <div className="w3-col s9 w3-padding-left-16">
              <h4 className="w3-margin-top-0">{testimonial.name}</h4>
              <p className="w3-opacity">{testimonial.position}</p>
            </div>
          </div>
          
          <div className="w3-padding-small">
            <div className="w3-padding-small">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="w3-text-amber" style={{ fontSize: '14px' }}>
                  {i < testimonial.rating ? "★" : "☆"}
                </span>
              ))}
            </div>
            <p className="w3-text-grey">"{testimonial.content}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
