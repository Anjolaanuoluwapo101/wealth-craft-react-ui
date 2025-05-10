
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DummyPage: React.FC = () => {
  const { pageName } = useParams<{ pageName: string }>();
  
  const getPageContent = () => {
    const title = pageName?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Page';
    
    return (
      <>
        <h1 className="w3-xxxlarge w3-center w3-padding-32">{title}</h1>
        <div className="w3-container w3-padding-32">
          <p className="w3-large">
            This is a placeholder page for demonstration purposes. In a production environment, this would contain actual content related to {title.toLowerCase()}.
          </p>
          <p className="w3-large">
            Thank you for visiting WealthCraft. Please explore our other sections for more information about our services.
          </p>
        </div>
      </>
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w3-theme-light">
        <div className="w3-container w3-content" style={{ maxWidth: "1200px" }}>
          {getPageContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DummyPage;
