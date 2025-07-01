
import React from 'react';
import CityCard from './CityCard';

const cities = [
  {
    name: 'New York',
    country: 'United States',
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'new-york',
    pathCount: 24
  },
  {
    name: 'London',
    country: 'United Kingdom',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'london',
    pathCount: 18
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    imageUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'tokyo',
    pathCount: 15
  },
  {
    name: 'Paris',
    country: 'France',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'paris',
    pathCount: 21
  },
  {
    name: 'Singapore',
    country: 'Singapore',
    imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'singapore',
    pathCount: 12
  },
  {
    name: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://images.unsplash.com/photo-1559564426-013d071f49a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'berlin',
    pathCount: 16
  },
  {
    name: 'Amsterdam',
    country: 'Netherlands',
    imageUrl: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'amsterdam',
    pathCount: 14
  },
  {
    name: 'Vienna',
    country: 'Austria',
    imageUrl: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'vienna',
    pathCount: 13
  },
  {
    name: 'Rome',
    country: 'Italy',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'rome',
    pathCount: 19
  },
  {
    name: 'Madrid',
    country: 'Spain',
    imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'madrid',
    pathCount: 17
  },
  {
    name: 'Brussels',
    country: 'Belgium',
    imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'brussels',
    pathCount: 11
  },
  {
    name: 'Stockholm',
    country: 'Sweden',
    imageUrl: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'stockholm',
    pathCount: 10
  },
  {
    name: 'Copenhagen',
    country: 'Denmark',
    imageUrl: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'copenhagen',
    pathCount: 12
  },
  {
    name: 'Prague',
    country: 'Czech Republic',
    imageUrl: 'https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'prague',
    pathCount: 15
  },
  {
    name: 'Zurich',
    country: 'Switzerland',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    slug: 'zurich',
    pathCount: 9
  }
];

const FeaturedCities = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-traveler-blue mb-4">Featured Cities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore business paths in these popular destinations. Perfect for when you have limited time between meetings.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <CityCard
              key={city.slug}
              name={city.name}
              country={city.country}
              imageUrl={city.imageUrl}
              slug={city.slug}
              pathCount={city.pathCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCities;
