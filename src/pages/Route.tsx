
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, MapPin, Clock, Info, Star, Camera } from 'lucide-react';

// Real route data for New York City
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
        description: 'Begin your journey at the iconic Times Square - the crossroads of the world', 
        duration: 0,
        coordinates: [40.7580, -73.9855],
        details: 'Start your walk at the famous red steps overlooking Times Square. Take in the massive digital billboards and bustling energy.',
        tips: 'Best photo spots are from the red steps or the TKTS booth area',
        highlights: ['Iconic billboards', 'Street performers', 'TKTS red steps'],
        estimatedCost: '$0',
        bestTimeToVisit: 'Any time'
      },
      { 
        location: 'Bryant Park', 
        description: 'Visit the beautiful Bryant Park and the New York Public Library', 
        duration: 15,
        coordinates: [40.7536, -73.9832],
        details: 'A green oasis in midtown Manhattan, Bryant Park offers seasonal activities and is home to the iconic New York Public Library with its famous lion statues.',
        tips: 'Check out the library\'s Rose Main Reading Room if open, and grab a coffee from one of the park kiosks',
        highlights: ['NY Public Library', 'Seasonal activities', 'Green space in the city'],
        estimatedCost: '$5-10 for refreshments',
        bestTimeToVisit: 'Morning or afternoon'
      },
      { 
        location: 'Grand Central Terminal', 
        description: 'Explore the historic Grand Central Terminal with its celestial ceiling', 
        duration: 20,
        coordinates: [40.7527, -73.9772],
        details: 'This Beaux-Arts masterpiece features a stunning astronomical ceiling mural, luxury shopping, and gourmet food options in the lower level.',
        tips: 'Look up at the constellation ceiling, visit the food court downstairs, and check out the whispering gallery',
        highlights: ['Celestial ceiling', 'Architecture', 'Food court', 'Whispering gallery'],
        estimatedCost: '$10-20 for food',
        bestTimeToVisit: 'Rush hours for atmosphere'
      },
      { 
        location: 'Chrysler Building', 
        description: 'Admire the Art Deco masterpiece - the Chrysler Building', 
        duration: 15,
        coordinates: [40.7516, -73.9755],
        details: 'One of NYC\'s most beautiful skyscrapers, this Art Deco icon features stunning metalwork and is best viewed from street level and nearby buildings.',
        tips: 'Best viewing spots are from the corner of 42nd and Lexington, or from the nearby buildings for aerial views',
        highlights: ['Art Deco architecture', 'Metalwork details', 'Historic significance'],
        estimatedCost: '$0',
        bestTimeToVisit: 'Golden hour for photography'
      },
      { 
        location: 'Times Square', 
        description: 'Return to your starting point and reflect on your journey', 
        duration: 10,
        coordinates: [40.7580, -73.9855],
        details: 'Complete your loop back at Times Square. Notice how the energy and lights feel different after your historic walk through Manhattan.',
        tips: 'Great time to grab dinner at one of the many restaurants or catch a Broadway show',
        highlights: ['Full circle completion', 'Dinner options', 'Broadway theaters nearby'],
        estimatedCost: '$20+ for dinner',
        bestTimeToVisit: 'Evening for the full Times Square experience'
      }
    ]
  },
  '2': {
    id: '2',
    name: 'Food & Culture Trail',
    duration: 60,
    distance: '1.8 km',
    startLocation: 'Little Italy, New York',
    steps: [
      { 
        location: 'Little Italy', 
        description: 'Begin your culinary adventure in historic Little Italy', 
        duration: 0,
        coordinates: [40.7189, -73.9973],
        details: 'Start your food journey in one of NYC\'s most iconic neighborhoods, known for authentic Italian cuisine and rich cultural heritage.',
        tips: 'Try the fresh mozzarella at Alleva Dairy, the oldest cheese shop in America',
        highlights: ['Historic neighborhood', 'Authentic Italian food', 'Street festivals'],
        estimatedCost: '$0',
        bestTimeToVisit: 'Morning or early afternoon'
      },
      { 
        location: 'Chinatown', 
        description: 'Explore the vibrant streets and authentic cuisine of Chinatown', 
        duration: 25,
        coordinates: [40.7158, -73.9970],
        details: 'One of the largest and oldest Chinatowns in the US, offering authentic dim sum, traditional markets, and cultural experiences.',
        tips: 'Visit Joe\'s Shanghai for soup dumplings and explore the fish markets on Mott Street',
        highlights: ['Dim sum restaurants', 'Traditional markets', 'Cultural temples'],
        estimatedCost: '$15-25 per person',
        bestTimeToVisit: 'Lunch time for best dim sum'
      },
      { 
        location: 'Stone Street Historic District', 
        description: 'Walk through cobblestone streets with outdoor dining', 
        duration: 20,
        coordinates: [40.7041, -74.0124],
        details: 'Historic cobblestone street dating back to the 1600s, now lined with restaurants and bars offering outdoor dining.',
        tips: 'Great for happy hour and dinner, try Adrienne\'s Pizza Bar for authentic NYC pizza',
        highlights: ['Historic cobblestones', 'Outdoor dining', 'Colonial architecture'],
        estimatedCost: '$20-35 for meal',
        bestTimeToVisit: 'Happy hour (5-7 PM)'
      },
      { 
        location: 'South Street Seaport', 
        description: 'End at the waterfront with views of Brooklyn Bridge', 
        duration: 15,
        coordinates: [40.7063, -74.0030],
        details: 'Historic seaport with stunning views of the Brooklyn Bridge, East River, and Brooklyn skyline. Great shops and restaurants.',
        tips: 'Perfect spot for photos of Brooklyn Bridge and to enjoy a drink with river views',
        highlights: ['Brooklyn Bridge views', 'Waterfront dining', 'Historic ships'],
        estimatedCost: '$15-30 for drinks',
        bestTimeToVisit: 'Sunset for best photos'
      }
    ]
  },
  '3': {
    id: '3',
    name: 'Business District Explorer',
    duration: 60,
    distance: '3.2 km',
    startLocation: 'Wall Street, New York',
    steps: [
      { 
        location: 'Wall Street', 
        description: 'Start at the heart of American finance', 
        duration: 0,
        coordinates: [40.7074, -74.0113],
        details: 'Begin your journey at the most famous financial street in the world, home to the New York Stock Exchange.',
        tips: 'Visit early morning to see the business atmosphere, take photos with the Charging Bull',
        highlights: ['NYSE building', 'Federal Hall', 'Historic significance'],
        estimatedCost: '$0',
        bestTimeToVisit: 'Weekday morning'
      },
      { 
        location: 'Charging Bull Statue', 
        description: 'Visit the iconic symbol of Wall Street optimism', 
        duration: 10,
        coordinates: [40.7056, -74.0134],
        details: 'This bronze sculpture has become a symbol of aggressive financial optimism and prosperity. A must-see photo opportunity.',
        tips: 'Early morning or late evening for fewer crowds, touch the nose for good luck',
        highlights: ['Iconic photo spot', 'Symbol of prosperity', 'Bronze sculpture'],
        estimatedCost: '$0',
        bestTimeToVisit: 'Early morning'
      },
      { 
        location: 'One World Trade Center', 
        description: 'Experience the rebuilt Freedom Tower and 9/11 Memorial', 
        duration: 30,
        coordinates: [40.7127, -74.0134],
        details: 'The tallest building in the Western Hemisphere, built as a symbol of resilience. The 9/11 Memorial features reflecting pools in the footprints of the original towers.',
        tips: 'Book observatory tickets in advance, allow time for security screening, visit the memorial pools',
        highlights: ['Tallest building in Western Hemisphere', '9/11 Memorial', 'Observatory views'],
        estimatedCost: '$35-45 for observatory',
        bestTimeToVisit: 'Clear weather for views'
      },
      { 
        location: 'Battery Park', 
        description: 'End at the waterfront park with Statue of Liberty views', 
        duration: 20,
        coordinates: [40.7033, -74.0170],
        details: 'Historic park at the southern tip of Manhattan offering stunning views of New York Harbor and the Statue of Liberty.',
        tips: 'Great spot for Statue of Liberty photos, catch the Staten Island Ferry for free harbor views',
        highlights: ['Statue of Liberty views', 'Harbor views', 'Historic fort'],
        estimatedCost: '$0 (free ferry available)',
        bestTimeToVisit: 'Sunset for golden hour photos'
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
      .slice(1, -1)
      .map((step: any) => `${step.coordinates[0]},${step.coordinates[1]}`)
      .join('|');
    
    const origin = `${route.steps[0].coordinates[0]},${route.steps[0].coordinates[1]}`;
    const destination = `${route.steps[route.steps.length - 1].coordinates[0]},${route.steps[route.steps.length - 1].coordinates[1]}`;
    
    return `https://www.google.com/maps/dir/${origin}/${destination}${waypoints ? `/${waypoints}` : ''}`;
  };

  const openInGoogleMaps = () => {
    const url = generateGoogleMapsUrl();
    window.open(url, '_blank');
  };

  const generateOpenStreetMapUrl = () => {
    if (!route) return '';
    
    const center = route.steps[0].coordinates;
    const markers = route.steps
      .map((step: any, index: number) => `pin-s-${index + 1}+ff0000(${step.coordinates[1]},${step.coordinates[0]})`)
      .join(',');
    
    return `https://www.openstreetmap.org/?mlat=${center[0]}&mlon=${center[1]}&zoom=14#map=14/${center[0]}/${center[1]}`;
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
                  onClick={() => window.open(generateOpenStreetMapUrl(), '_blank')}
                >
                  View on OpenStreetMap
                </Button>
              </div>
            </div>
          </div>

          {/* Route Steps */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-traveler-blue mb-6">Detailed Route Steps</h2>
            <div className="space-y-6">
              {route.steps.map((step: any, index: number) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-traveler-teal text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-xl text-traveler-blue">{step.location}</h3>
                        {step.duration > 0 && (
                          <span className="inline-flex items-center text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            <Clock className="w-4 h-4 mr-1" />
                            {step.duration} min
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-700 mb-4 text-lg">{step.description}</p>
                      
                      {/* Detailed Information */}
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <div className="flex items-start gap-2 mb-2">
                          <Info className="w-5 h-5 text-traveler-teal mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-traveler-blue mb-1">Details</h4>
                            <p className="text-gray-600 text-sm">{step.details}</p>
                          </div>
                        </div>
                      </div>

                      {/* Tips */}
                      <div className="bg-blue-50 rounded-lg p-4 mb-4">
                        <div className="flex items-start gap-2">
                          <Star className="w-5 h-5 text-blue-600 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-blue-800 mb-1">Pro Tips</h4>
                            <p className="text-blue-700 text-sm">{step.tips}</p>
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1">
                          <Camera className="w-4 h-4" />
                          Highlights
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {step.highlights?.map((highlight: string, idx: number) => (
                            <span key={idx} className="bg-traveler-teal/10 text-traveler-teal px-3 py-1 rounded-full text-xs font-medium">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Cost and Best Time */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">💰 Cost: </span>
                          <span>{step.estimatedCost}</span>
                        </div>
                        <div>
                          <span className="font-medium">⏰ Best time: </span>
                          <span>{step.bestTimeToVisit}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* OpenStreetMap Preview */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-traveler-blue mb-6">Route Map</h2>
            <div className="relative w-full h-96 rounded-lg overflow-hidden border">
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${route.steps[0].coordinates[1] - 0.01},${route.steps[0].coordinates[0] - 0.01},${route.steps[0].coordinates[1] + 0.01},${route.steps[0].coordinates[0] + 0.01}&layer=mapnik&marker=${route.steps[0].coordinates[0]},${route.steps[0].coordinates[1]}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 flex gap-4">
              <Button 
                variant="outline"
                onClick={() => window.open(generateOpenStreetMapUrl(), '_blank')}
                className="text-sm"
              >
                View Full Map on OpenStreetMap
              </Button>
              <Button 
                variant="outline"
                onClick={openInGoogleMaps}
                className="text-sm"
              >
                Open Route in Google Maps
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Route;
