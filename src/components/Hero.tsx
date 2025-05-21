
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-traveler-blue to-traveler-teal overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="md:max-w-2xl lg:max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Business Travel, <span className="text-traveler-orange">Maximized</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
            Discover the perfect 30, 60, or 120-minute walking paths in any city. 
            Make the most of your limited free time on business trips.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-traveler-orange hover:bg-orange-600 text-white text-lg px-8 py-6">
              Find Your Path
            </Button>
            <Button variant="outline" className="border-white text-black hover:bg-white/20 hover:border-white hover:text-black text-lg px-8 py-6 font-medium">
              How It Works
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
