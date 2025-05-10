
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">WealthCraft</h3>
            <p className="mb-4">
              Your trusted partner for wealth management and financial planning services.
            </p>
            <div className="flex items-center mb-2">
              <Phone size={16} className="mr-2" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={16} className="mr-2" />
              <span>info@wealthcraft.com</span>
            </div>
            <div className="flex items-start mb-2">
              <MapPin size={16} className="mr-2 mt-1" />
              <span>123 Financial District, Mumbai 400001, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary">About Us</Link></li>
              <li><Link to="/mutual-fund" className="hover:text-secondary">Mutual Funds</Link></li>
              <li><Link to="/insurance" className="hover:text-secondary">Insurance</Link></li>
              <li><Link to="/blog" className="hover:text-secondary">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-secondary">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/mutual-fund" className="hover:text-secondary">Mutual Fund Investments</Link></li>
              <li><Link to="/bonds" className="hover:text-secondary">Bonds & Fixed Income</Link></li>
              <li><Link to="/insurance" className="hover:text-secondary">Insurance Solutions</Link></li>
              <li><Link to="/pms" className="hover:text-secondary">Portfolio Management</Link></li>
              <li><Link to="/tools" className="hover:text-secondary">Financial Calculators</Link></li>
              <li><Link to="/unlisted-shares" className="hover:text-secondary">Unlisted Shares</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
            <p className="mb-4">Stay updated with the latest investment insights and opportunities.</p>
            <div className="flex">
              <input 
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full rounded-l-md text-gray-800"
              />
              <button className="bg-secondary text-white px-4 py-2 rounded-r-md hover:bg-secondary-hover">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-3 mt-6">
              <a href="#" className="hover:text-secondary"><Facebook size={20} /></a>
              <a href="#" className="hover:text-secondary"><Twitter size={20} /></a>
              <a href="#" className="hover:text-secondary"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-secondary"><Youtube size={20} /></a>
              <a href="#" className="hover:text-secondary"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} WealthCraft. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/terms" className="hover:text-secondary">Terms of Service</Link>
              <Link to="/privacy" className="hover:text-secondary">Privacy Policy</Link>
              <Link to="/disclaimer" className="hover:text-secondary">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
