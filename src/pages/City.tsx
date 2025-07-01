
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PathDurationSelector from '@/components/PathDurationSelector';
import { Button } from "@/components/ui/button";

// This will be expanded with real data in a future implementation
const cityData = {
  'new-york': {
    name: 'New York',
    country: 'United States',
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'The city that never sleeps offers countless opportunities for business travelers to explore between meetings.',
    pathCount: 24
  },
  'london': {
    name: 'London',
    country: 'United Kingdom',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Discover historic landmarks and modern attractions in one of the world\'s most visited cities.',
    pathCount: 18
  },
  'tokyo': {
    name: 'Tokyo',
    country: 'Japan',
    imageUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Experience the perfect blend of tradition and innovation in Japan\'s bustling capital.',
    pathCount: 15
  },
  'paris': {
    name: 'Paris',
    country: 'France',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'The City of Light offers timeless charm and elegant streets perfect for short business travel explorations.',
    pathCount: 21
  },
  'singapore': {
    name: 'Singapore',
    country: 'Singapore',
    imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'A perfect blend of urban innovation and natural beauty in Southeast Asia\'s business hub.',
    pathCount: 12
  },
  'berlin': {
    name: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://images.unsplash.com/photo-1559564426-013d071f49a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Explore the rich history and vibrant culture of Germany\'s cosmopolitan capital.',
    pathCount: 16
  },
  'amsterdam': {
    name: 'Amsterdam',
    country: 'Netherlands',
    imageUrl: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Navigate the charming canals and discover Amsterdam\'s unique business districts and cultural gems.',
    pathCount: 14
  },
  'vienna': {
    name: 'Vienna',
    country: 'Austria',
    imageUrl: 'https://images.unsplash.com/photo-1516550893923-42d407bd4ac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Experience imperial elegance mixed with modern business efficiency in Austria\'s capital.',
    pathCount: 13
  },
  'rome': {
    name: 'Rome',
    country: 'Italy',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Walk through millennia of history while exploring Rome\'s bustling business quarters.',
    pathCount: 19
  },
  'madrid': {
    name: 'Madrid',
    country: 'Spain',
    imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Discover Madrid\'s vibrant business scene and rich cultural heritage in perfectly timed walks.',
    pathCount: 17
  },
  'brussels': {
    name: 'Brussels',
    country: 'Belgium',
    imageUrl: 'https://images.unsplash.com/photo-1559564484-0c01ede06e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Explore the heart of European politics and business with Brussels\' efficient walking routes.',
    pathCount: 11
  },
  'stockholm': {
    name: 'Stockholm',
    country: 'Sweden',
    imageUrl: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Navigate Stockholm\'s innovative tech districts and stunning archipelago views during business breaks.',
    pathCount: 10
  },
  'copenhagen': {
    name: 'Copenhagen',
    country: 'Denmark',
    imageUrl: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Experience Danish design culture and sustainable business practices in Copenhagen\'s walkable districts.',
    pathCount: 12
  },
  'prague': {
    name: 'Prague',
    country: 'Czech Republic',
    imageUrl: 'https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Discover Prague\'s fairytale architecture and emerging business scene through curated walking paths.',
    pathCount: 15
  },
  'zurich': {
    name: 'Zurich',
    country: 'Switzerland',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Explore Switzerland\'s financial capital with precision-timed routes perfect for busy business schedules.',
    pathCount: 9
  }
};

const City = () => {
  const { citySlug } = useParams();
  const [city, setCity] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);
  
  useEffect(() => {
    if (citySlug && cityData[citySlug as keyof typeof cityData]) {
      setCity(cityData[citySlug as keyof typeof cityData]);
    } else {
      setNotFound(true);
    }
  }, [citySlug]);

  if (notFound) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">City Not Found</h1>
            <p className="text-lg mb-6">We couldn't find the city you're looking for.</p>
            <Button asChild>
              <a href="/cities">Back to All Cities</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!city) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section with city image */}
        <div className="relative h-96">
          <div className="absolute inset-0">
            <img 
              src={city.imageUrl} 
              alt={`${city.name}, ${city.country}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{city.name}</h1>
              <p className="text-xl text-white/90 mb-4">{city.country}</p>
              <span className="bg-traveler-orange text-white px-3 py-1 rounded-full font-medium">
                {city.pathCount} paths available
              </span>
            </div>
          </div>
        </div>
        
        {/* City description */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 mb-6">{city.description}</p>
              <h2 className="text-2xl font-bold mb-4 text-traveler-blue">Available Business Paths</h2>
              <p className="mb-6">
                Choose how much time you have available between meetings, and we'll show you the perfect path to explore {city.name}.
              </p>
            </div>
          </div>
        </div>
        
        <PathDurationSelector />
        
        {/* Paths will be displayed here in a future implementation */}
      </main>
      <Footer />
    </div>
  );
};

export default City;
