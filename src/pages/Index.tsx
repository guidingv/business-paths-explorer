
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCities from '@/components/FeaturedCities';
import PathDurationSelector from '@/components/PathDurationSelector';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* How it works section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-traveler-blue mb-4">How It Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Three simple steps to discover the perfect business path for your limited free time.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-traveler-lightgray rounded-lg p-6 text-center">
                <div className="bg-traveler-blue w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-2 text-traveler-blue">Select Your City</h3>
                <p className="text-gray-600">Choose from our growing list of business travel destinations worldwide.</p>
              </div>
              
              <div className="bg-traveler-lightgray rounded-lg p-6 text-center">
                <div className="bg-traveler-blue w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-2 text-traveler-blue">Choose Your Duration</h3>
                <p className="text-gray-600">Select how much time you have: 30, 60, or 120 minutes between meetings.</p>
              </div>
              
              <div className="bg-traveler-lightgray rounded-lg p-6 text-center">
                <div className="bg-traveler-blue w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-2 text-traveler-blue">Follow Your Path</h3>
                <p className="text-gray-600">Get a custom route with points of interest tailored to your available time.</p>
              </div>
            </div>
          </div>
        </section>
        
        <FeaturedCities />
        <PathDurationSelector />
        
        {/* Testimonials section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-traveler-blue mb-4">What Business Travelers Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what business travelers love about our paths.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">Marketing Director</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The 60-minute path in Tokyo was perfect for my lunch break. I discovered a beautiful garden and amazing street food I would have never found on my own."
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I had 2 hours before my evening flight from Berlin. The 120-minute path took me through fascinating neighborhoods and historical sites at the perfect pace."
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Emma Rodriguez</h4>
                    <p className="text-sm text-gray-500">Financial Analyst</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The 30-minute New York path was a lifesaver between back-to-back meetings. A quick but meaningful taste of the city that energized me for my afternoon."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
