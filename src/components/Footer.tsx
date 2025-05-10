
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Contact Info Section - Blue background */}
      <div className="w3-theme-d5 w3-padding-32">
        <div className="w3-row-padding w3-container">
          <div className="w3-third w3-padding-16">
            <h3>Call Us Now</h3>
            <p>+91 9664245747</p>
            <p>+91 9322231497</p>
          </div>
          
          <div className="w3-third w3-padding-16">
            <h3>Address</h3>
            <p>403, Avior Corporate Park,</p>
            <p>L B S Road, Mulund west,</p>
            <p>Mumbai-400080</p>
          </div>
          
          <div className="w3-third w3-padding-16">
            <h3>Email Us</h3>
            <p>termil@dinvest.in</p>
          </div>
        </div>
      </div>
      
      {/* Additional Info Section - Dark Blue background */}
      <div className="w3-theme-d5 w3-padding-32">
        <div className="w3-row-padding w3-container">
          <div className="w3-third w3-padding-16">
            <h3>About Us</h3>
            <p>Creating Wealth through personalized Financial Planning. Founded 35years back on simple idea of securing family with life Insurance</p>
          </div>
          
          <div className="w3-third w3-padding-16">
            <h3>Working Hours</h3>
            <p>Mon - Sat : 8:00 AM to 7:00 PM</p>
            <p>Sunday : Closed</p>
          </div>
          
          <div className="w3-third w3-padding-16">
            <h3>Follow Us</h3>
            <div className="w3-padding-16">
              <a href="#" className="w3-padding-small">
                <Facebook size={28} className="w3-text-white" />
              </a>
              <a href="#" className="w3-padding-small">
                <Twitter size={28} className="w3-text-white" />
              </a>
              <a href="#" className="w3-padding-small">
                <Linkedin size={28} className="w3-text-white" />
              </a>
              <a href="#" className="w3-padding-small">
                <Youtube size={28} className="w3-text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Disclaimer Section - Black background */}
      <div className="w3-black w3-padding-16 w3-small">
        <div className="w3-container">
          <p className="w3-center">Risk Factors – Investments in Mutual Funds are subject to Market Risks. Read all scheme related documents carefully before investing. Mutual Fund Schemes do not assure or guarantee any returns. Past performances of any Mutual Fund Scheme may or may not be sustained in future. There is no guarantee that the investment objective of any suggested scheme shall be achieved. All existing and prospective investors are advised to check and evaluate the Exit loads and other cost structure (TER) applicable at the time of making the investment before finalizing on any investment decision for Mutual Funds schemes.</p>
          <p className="w3-center">AMFI Registered Mutual Fund Distributor – ARN-262305 | Date of initial registration – 00 APR 0000 | Current validity of ARN – 00 APR 0000</p>
          <p className="w3-center">Grievance Officer: Mr. ABCD | termil@dinvest.in</p>
          <p className="w3-center">Copyright 2024. Daftari Finserv LLP <Link to="/important-links" className="w3-text-amber">Important Links</Link> | <Link to="/disclaimer" className="w3-text-amber">Disclaimer</Link> | <Link to="/disclosure" className="w3-text-amber">Disclosure</Link> | <Link to="/privacy-policy" className="w3-text-amber">Privacy Policy</Link> | <Link to="/sid-sai-kim" className="w3-text-amber">SID/SAI/KIM</Link> | <Link to="/code-of-conduct" className="w3-text-amber">Code of Conduct</Link> | <Link to="/sebi-circulars" className="w3-text-amber">SEBI Circulars</Link> | <Link to="/amfi-risk-factors" className="w3-text-amber">AMFI Risk Factors</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
