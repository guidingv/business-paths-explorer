
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-traveler-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Traveler.business</h3>
            <p className="text-white/80 mb-4">
              Helping business travelers make the most of their limited free time by providing curated walking paths in cities worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Popular Cities</h4>
            <ul className="space-y-2">
              <li><Link to="/cities/new-york" className="text-white/80 hover:text-white transition-colors">New York</Link></li>
              <li><Link to="/cities/london" className="text-white/80 hover:text-white transition-colors">London</Link></li>
              <li><Link to="/cities/tokyo" className="text-white/80 hover:text-white transition-colors">Tokyo</Link></li>
              <li><Link to="/cities/singapore" className="text-white/80 hover:text-white transition-colors">Singapore</Link></li>
              <li><Link to="/cities/berlin" className="text-white/80 hover:text-white transition-colors">Berlin</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/80 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-white/80 mb-4">Subscribe to get updates on new cities and features.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
              />
              <button 
                type="submit" 
                className="bg-traveler-orange px-4 py-2 rounded-r-md hover:bg-orange-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 mt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Traveler.business. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
