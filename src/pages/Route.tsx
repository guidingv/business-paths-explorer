import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, MapPin, Clock, Info, Star, Camera } from 'lucide-react';

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
        description: 'Begin your journey at the iconic Times Square - the crossroads of the world', 
        duration: 0,
        coordinates: '40.7580,-73.9855',
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
        coordinates: '40.7536,-73.9832',
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
        coordinates: '40.7527,-73.9772',
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
        coordinates: '40.7516,-73.9755',
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
        coordinates: '40.7580,-73.9855',
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
    startLocation: 'Times Square, New York',
    steps: [
      { 
        location: 'Times Square', 
        description: 'Begin your culinary adventure in the heart of NYC', 
        duration: 0,
        coordinates: '40.7580,-73.9855',
        details: 'Start your food journey surrounded by countless dining options, from food trucks to world-class restaurants.',
        tips: 'Skip the tourist trap restaurants and head straight to your first authentic stop',
        highlights: ['Food diversity', 'Cultural melting pot', 'Energy of the city'],
        estimatedCost: '$0',
        bestTimeToVisit: 'Before meal times'
      },
      { 
        location: 'Koreatown', 
        description: 'Sample authentic Korean cuisine and experience Korean culture', 
        duration: 20,
        coordinates: '40.7505,-73.9852',
        details: 'Experience authentic Korean culture through food, karaoke, and traditional establishments. Try Korean BBQ, hotpot, or grab some Korean fried chicken.',
        tips: 'Try the Korean BBQ at Kang Ho Dong Baekjeong or get Korean fried chicken at Turntable Chicken Jazz',
        highlights: ['Korean BBQ', 'Karaoke bars', 'Authentic culture', 'Korean fried chicken'],
        estimatedCost: '$15-30 per person',
        bestTimeToVisit: 'Lunch or dinner time'
      },
      { 
        location: 'High Line Park', 
        description: 'Walk the elevated park with stunning city views and art installations', 
        duration: 25,
        coordinates: '40.7480,-74.0048',
        details: 'This elevated linear park built on former railway tracks offers unique perspectives of the city, contemporary art installations, and great photo opportunities.',
        tips: 'Enter at Gansevoort Street for the full experience, and look out for seasonal art installations',
        highlights: ['Elevated city views', 'Art installations', 'Unique architecture', 'Photo opportunities'],
        estimatedCost: '$0',
        bestTimeToVisit: 'Afternoon for best lighting'
      },
      { 
        location: 'Chelsea Market', 
        description: 'Explore the famous indoor food hall with diverse culinary options', 
        duration: 15,
        coordinates: '40.7420,-74.0063',
        details: 'A food lover\'s paradise housed in a former cookie factory, featuring dozens of vendors offering everything from tacos to lobster rolls.',
        tips: 'Try the lobster roll at Lobster Place, tacos at Los Tacos No. 1, or browse unique artisanal products',
        highlights: ['Diverse food vendors', 'Historic building', 'Artisanal products', 'Lobster rolls'],
        estimatedCost: '$10-25 per item',
        bestTimeToVisit: 'Lunch time or early dinner'
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
        description: 'Start your business district exploration from the commercial heart', 
        duration: 0,
        coordinates: '40.7580,-73.9855',
        details: 'Begin your journey into NYC\'s financial and business world from this commercial epicenter.',
        tips: 'Take the subway (4,5,6 trains) to save time getting to Wall Street',
        highlights: ['Commercial energy', 'Starting point', 'Transit connections'],
        estimatedCost: '$2.90 for subway',
        bestTimeToVisit: 'Business hours'
      },
      { 
        location: 'Wall Street', 
        description: 'Experience the heart of American finance and global economics', 
        duration: 25,
        coordinates: '40.7074,-74.0113',
        details: 'Walk among the historic buildings where global finance happens daily. See the famous Charging Bull statue and the New York Stock Exchange.',
        tips: 'Visit the Charging Bull early to avoid crowds, and take photos with Federal Hall where George Washington was inaugurated',
        highlights: ['NYSE building', 'Charging Bull statue', 'Federal Hall', 'Financial history'],
        estimatedCost: '$0',
        bestTimeToVisit: 'Weekday morning for business atmosphere'
      },
      { 
        location: 'One World Observatory', 
        description: 'Enjoy breathtaking panoramic views from the top of One World Trade Center', 
        duration: 20,
        coordinates: '40.7127,-74.0134',
        details: 'Experience stunning 360-degree views of NYC from the tallest building in the Western Hemisphere. The observatory offers interactive exhibits about the city.',
        tips: 'Book tickets in advance, go during clear weather, and time your visit for sunset if possible',
        highlights: ['360-degree city views', 'Interactive exhibits', 'Tallest building in Western Hemisphere', 'Sunset views'],
        estimatedCost: '$35-45 for tickets',
        bestTimeToVisit: 'Clear weather, sunset time'
      },
      { 
        location: 'Stone Street', 
        description: 'Experience historic cobblestone dining and nightlife', 
        duration: 15,
        coordinates: '40.7041,-74.0124',
        details: 'Walk on actual 17th-century cobblestones while enjoying outdoor dining and historic pubs. This area comes alive after work hours with financial district workers.',
        tips: 'Best visited for happy hour or dinner, try the historic pubs like Stone Street Tavern',
        highlights: ['17th-century cobblestones', 'Historic pubs', 'Outdoor dining', 'After-work atmosphere'],
        estimatedCost: '$15-30 for drinks/food',
        bestTimeToVisit: 'Happy hour (5-7 PM)'
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
