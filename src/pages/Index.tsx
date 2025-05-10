
import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureSection from '../components/FeatureSection';
import RecommendedFundsSection from '../components/RecommendedFundsSection';
import TestimonialSection from '../components/TestimonialSection';
import BlogSection from '../components/BlogSection';
import CtaSection from '../components/CtaSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroBanner />
        <FeatureSection />
        <RecommendedFundsSection />
        <TestimonialSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
