
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedCities from '@/components/FeaturedCities';

const Cities = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-traveler-lightgray py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-traveler-blue text-center mb-12">
              Explore Business Paths by City
            </h1>
            <FeaturedCities />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cities;
