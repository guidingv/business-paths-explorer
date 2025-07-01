
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
              Your Personal City Guide 🗺️
            </h1>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto">
              Think of us as your friendly local guide who happens to know every amazing city on the planet. We're here to make sure you never waste a precious moment wondering "what should I do next?"
            </p>
          </div>
        </div>

        {/* Mission section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-traveler-blue mb-6">We Get It - You're Busy! 😅</h2>
                <p className="text-gray-700 mb-4">
                  You didn't fly halfway across the world just to stare at your hotel room ceiling. But between meetings, jet lag, and wondering if that street food will make you sick, exploring can feel overwhelming.
                </p>
                <p className="text-gray-700 mb-4">
                  That's where we come in! We've done the hard work of figuring out the perfect routes, timing, and hidden gems so you can just follow along and enjoy the adventure.
                </p>
                <p className="text-gray-700">
                  Whether you've got 30 minutes to grab an authentic coffee or 2 hours to dive into local culture, we'll guide you to experiences that'll make your colleagues jealous back home! ✈️
                </p>
              </div>
              <div className="bg-gradient-to-br from-traveler-teal to-traveler-blue rounded-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Our Promise 🤝</h3>
                <p>
                  No tourist traps, no getting lost, no regrets. Just amazing experiences that make every business trip feel like a mini-adventure. We're your shortcut to becoming a savvy traveler!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Guide section */}
        <section className="py-16 bg-traveler-lightgray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-traveler-blue text-center mb-12">How We Guide You 🧭</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
                <div className="bg-traveler-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-traveler-blue">Smart Timing</h3>
                <p className="text-gray-600">Tell us how much time you have, and we'll craft the perfect route. No rushing, no missing out!</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
                <div className="bg-traveler-teal w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-traveler-blue">Local Secrets</h3>
                <p className="text-gray-600">We know where locals actually go - not just where tour buses stop. Get ready for some Instagram-worthy moments!</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
                <div className="bg-traveler-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-traveler-blue">Step-by-Step</h3>
                <p className="text-gray-600">Crystal clear directions, insider tips, and backup plans. It's like having a local friend in your pocket!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Your Guides section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-traveler-blue text-center mb-6">Meet Your Guides 👋</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We're not just travel enthusiasts - we're fellow business travelers who've been in your shoes!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-traveler-orange to-red-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl">👩‍💼</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Sarah Mitchell</h3>
                <p className="text-traveler-orange font-medium mb-2">Chief Adventure Officer</p>
                <p className="text-gray-600">Former consultant who turned "layover in Tokyo" into "best ramen of my life" - now she helps you do the same!</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-traveler-teal to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl">🌍</span>
                </div>
                <h3 className="font-bold text-xl mb-2">David Chen</h3>
                <p className="text-traveler-orange font-medium mb-2">Master Route Curator</p>
                <p className="text-gray-600">Lives in a different city every few months and somehow always finds the best coffee shops. We're convinced he has superpowers.</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-traveler-blue to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl">⚡</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Maria Rodriguez</h3>
                <p className="text-traveler-orange font-medium mb-2">Experience Designer</p>
                <p className="text-gray-600">Turns complicated city exploration into simple, delightful journeys. She makes getting lost impossible (and fun)!</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 bg-gradient-to-r from-traveler-blue to-traveler-teal text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Next Adventure? 🚀</h2>
            <p className="text-xl mb-8 opacity-90">
              Stop wondering what to do and start exploring! Your next amazing story is just one click away.
            </p>
            <a
              href="/cities"
              className="inline-block bg-traveler-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors transform hover:scale-105"
            >
              Show Me The Cities! 🌆
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
