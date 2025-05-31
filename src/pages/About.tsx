
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-traveler-lightgray py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-traveler-blue text-center mb-8">
              About Traveler.business
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              We're passionate about helping business travelers make the most of their limited free time by providing curated walking paths in cities worldwide.
            </p>
          </div>
        </div>

        {/* Mission section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-traveler-blue mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  Business travel doesn't have to mean being stuck in conference rooms and hotel lobbies. We believe that even with limited time, you can experience the essence of a city and create meaningful memories.
                </p>
                <p className="text-gray-700 mb-4">
                  Our carefully curated paths are designed specifically for busy professionals who want to explore local culture, cuisine, and landmarks during short breaks between meetings.
                </p>
                <p className="text-gray-700">
                  Whether you have 30 minutes for a quick coffee walk or 2 hours before your flight, we'll guide you to authentic experiences that make your business trip memorable.
                </p>
              </div>
              <div className="bg-traveler-lightgray rounded-lg p-8">
                <h3 className="text-xl font-bold text-traveler-blue mb-4">Why We Started</h3>
                <p className="text-gray-700">
                  Founded by frequent business travelers who were tired of missing out on amazing cities due to packed schedules, Traveler.business was born from the frustration of seeing only airports and office buildings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values section */}
        <section className="py-16 bg-traveler-lightgray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-traveler-blue text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="bg-traveler-teal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-traveler-blue">Time Respect</h3>
                <p className="text-gray-600">We understand your time is precious. Every path is optimized for maximum experience in minimum time.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="bg-traveler-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-traveler-blue">Local Authenticity</h3>
                <p className="text-gray-600">We partner with local experts to ensure you experience genuine culture, not just tourist traps.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="bg-traveler-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-traveler-blue">Professional Focus</h3>
                <p className="text-gray-600">Designed specifically for business travelers, with practical considerations like proximity to business districts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-traveler-blue text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-xl mb-2">Sarah Mitchell</h3>
                <p className="text-traveler-orange font-medium mb-2">Founder & CEO</p>
                <p className="text-gray-600">Former management consultant with 10+ years of business travel experience across 40+ countries.</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-xl mb-2">David Chen</h3>
                <p className="text-traveler-orange font-medium mb-2">Head of Curation</p>
                <p className="text-gray-600">Travel writer and local culture expert who has lived in 8 different cities worldwide.</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-xl mb-2">Maria Rodriguez</h3>
                <p className="text-traveler-orange font-medium mb-2">Product Director</p>
                <p className="text-gray-600">Former tech executive passionate about creating seamless user experiences for busy professionals.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
