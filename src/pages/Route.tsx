
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, MapPin, Clock } from 'lucide-react';

// Mock route data - in real app this would come from API
const routeData = {
  '1': {
    id: '1',
    name: 'Historic Downtown Walk',
    duration: 60,
    distance: '2.5 km',
    startLocation: 'Times Square, New York',
    steps: [
      { 
        location: 'Times Square', 
        description: 'Begin your journey at the iconic Times Square', 
        duration: 0,
        coordinates: '40.7580,-73.9855'
      },
      { 
        location: 'Bryant Park', 
        description: 'Visit the beautiful Bryant Park and library', 
        duration: 15,
        coordinates: '40.7536,-73.9832'
      },
      { 
        location: 'Grand Central Terminal', 
        description: 'Explore the historic Grand Central Terminal', 
        duration: 20,
        coordinates: '40.7527,-73.9772'
      },
      { 
        location: 'Chrysler Building', 
        description: 'Admire the Art Deco Chrysler Building', 
        duration: 15,
        coordinates: '40.7516,-73.9755'
      },
      { 
        location: 'Times Square', 
        description: 'Return to your starting point', 
        duration: 10,
        coordinates: '40.7580,-73.9855'
      }
    ]
  },
  '2': {
    id: '2',
    name: 'Food & Culture Trail',
    duration: 60,
    distance: '1.8 km',
    startLocation: 'Times Square, New York',
    steps: [
      { 
        location: 'Times Square', 
        description: 'Begin your culinary adventure', 
        duration: 0,
        coordinates: '40.7580,-73.9855'
      },
      { 
        location: 'Koreatown', 
        description: 'Sample authentic Korean cuisine', 
        duration: 20,
        coordinates: '40.7505,-73.9852'
      },
      { 
        location: 'High Line Park', 
        description: 'Walk the elevated park with city views', 
        duration: 25,
        coordinates: '40.7480,-74.0048'
      },
      { 
        location: 'Chelsea Market', 
        description: 'Explore the famous food hall', 
        duration: 15,
        coordinates: '40.7420,-74.0063'
      }
    ]
  },
  '3': {
    id: '3',
    name: 'Business District Explorer',
    duration: 60,
    distance: '3.2 km',
    startLocation: 'Times Square, New York',
    steps: [
      { 
        location: 'Times Square', 
        description: 'Start exploring the business district', 
        duration: 0,
        coordinates: '40.7580,-73.9855'
      },
      { 
        location: 'Wall Street', 
        description: 'See the heart of American finance', 
        duration: 25,
        coordinates: '40.7074,-74.0113'
      },
      { 
        location: 'One World Observatory', 
        description: 'Enjoy panoramic city views', 
        duration: 20,
        coordinates: '40.7127,-74.0134'
      },
      { 
        location: 'Stone Street', 
        description: 'Experience historic cobblestone dining', 
        duration: 15,
        coordinates: '40.7041,-74.0124'
      }
    ]
  }
};

const Route = () => {
  const { citySlug, routeId } = useParams();
  const navigate = useNavigate();
  const [route, setRoute] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (routeId && routeData[routeId as keyof typeof routeData]) {
      setRoute(routeData[routeId as keyof typeof routeData]);
    } else {
      setNotFound(true);
    }
  }, [routeId]);

  const generateGoogleMapsUrl = () => {
    if (!route) return '';
    
    const waypoints = route.steps
      .slice(1, -1) // Remove first and last step
      .map((step: any) => step.coordinates)
      .join('|');
    
    const origin = route.steps[0].coordinates;
    const destination = route.steps[route.steps.length - 1].coordinates;
    
    return `https://www.google.com/maps/dir/${origin}/${destination}${waypoints ? `/${waypoints}` : ''}`;
  };

  const openInGoogleMaps = () => {
    const url = generateGoogleMapsUrl();
    window.open(url, '_blank');
  };

  if (notFound) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Route Not Found</h1>
            <p className="text-lg mb-6">We couldn't find the route you're looking for.</p>
            <Button onClick={() => navigate(`/cities/${citySlug}`)}>
              Back to City
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!route) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg">Loading route...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-traveler-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate(`/cities/${citySlug}`)}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to City
            </Button>
            
            <div className="bg-white rounded-xl shadow-md p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-traveler-blue mb-4">{route.name}</h1>
              <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{route.duration} minutes</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{route.distance}</span>
                </div>
                <div className="flex items-center">
                  <span>📍 Starting from: {route.startLocation}</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  className="bg-traveler-orange hover:bg-orange-600 text-white text-lg px-6 py-3"
                  onClick={openInGoogleMaps}
                >
                  Open in Google Maps
                </Button>
                <Button 
                  variant="outline"
                  className="text-lg px-6 py-3"
                >
                  Download Route
                </Button>
              </div>
            </div>
          </div>

          {/* Route Steps */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-traveler-blue mb-6">Route Steps</h2>
            <div className="space-y-4">
              {route.steps.map((step: any, index: number) => (
                <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-traveler-teal text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg text-traveler-blue">{step.location}</h3>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    {step.duration > 0 && (
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {step.duration} minutes
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Embedded Google Maps */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-traveler-blue mb-6">Route Map</h2>
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed/v1/directions?key=YOUR_GOOGLE_MAPS_API_KEY&origin=${route.steps[0].coordinates}&destination=${route.steps[route.steps.length - 1].coordinates}&waypoints=${route.steps.slice(1, -1).map((step: any) => step.coordinates).join('|')}&mode=walking`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Note: You'll need to add your Google Maps API key to view the embedded map.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Route;
