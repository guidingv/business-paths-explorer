
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-traveler-blue font-bold text-xl md:text-2xl">Traveler.business</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-traveler-darkgray hover:text-traveler-blue transition-colors font-medium">
            Home
          </Link>
          <Link to="/cities" className="text-traveler-blue font-medium hover:text-traveler-blue/80 transition-colors">
            Cities
          </Link>
          <Link to="/about" className="text-traveler-darkgray hover:text-traveler-blue transition-colors font-medium">
            About
          </Link>
          <Link to="/contact" className="text-traveler-darkgray hover:text-traveler-blue transition-colors font-medium">
            Contact
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:inline-flex border-traveler-blue text-traveler-blue hover:bg-traveler-blue hover:text-white">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
