import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate, useParams } from 'react-router-dom';
import { Clock, MapPin, Info, Star, Camera } from 'lucide-react';

interface RoutePreference {
  city: string;
  duration: 30 | 60 | 120;
  interests: string[];
  walkingPace: 'leisurely' | 'moderate' | 'brisk';
  startLocation: string;
}

const PathDurationSelector = () => {
  const navigate = useNavigate();
  const { citySlug } = useParams();
  const [selectedDuration, setSelectedDuration] = useState<30 | 60 | 120>(60);
  const [currentStep, setCurrentStep] = useState<'city' | 'duration' | 'interests' | 'pace' | 'location' | 'results'>('city');
  const [preferences, setPreferences] = useState<RoutePreference>({
    city: citySlug || '',
    duration: 60,
    interests: [],
    walkingPace: 'moderate',
    startLocation: ''
  });
  const [routes, setRoutes] = useState<any[]>([]);
  const [selectedRoute, setSelectedRoute] = useState<string>('');

  const cities = [
    { name: 'New York', slug: 'new-york' },
    { name: 'London', slug: 'london' },
    { name: 'Tokyo', slug: 'tokyo' },
    { name: 'Paris', slug: 'paris' },
    { name: 'Singapore', slug: 'singapore' },
    { name: 'Berlin', slug: 'berlin' }
  ];

  const interestOptions = [
    'Architecture', 'Food & Dining', 'Shopping', 'Parks & Nature', 
    'Museums', 'Historical Sites', 'Street Art', 'Local Markets'
  ];

  React.useEffect(() => {
    if (citySlug) {
      setPreferences(prev => ({ ...prev, city: citySlug }));
      setCurrentStep('duration');
    }
  }, [citySlug]);

  const handleCityNext = () => {
    setCurrentStep('duration');
  };

  const handleDurationNext = () => {
    setPreferences(prev => ({ ...prev, duration: selectedDuration }));
    setCurrentStep('interests');
  };

  const handleInterestToggle = (interest: string) => {
    setPreferences(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handlePaceNext = () => {
    setCurrentStep('location');
  };

  const handleLocationNext = () => {
    // Simulate generating routes based on preferences
    const mockRoutes = [
      {
        id: '1',
        name: 'Historic Downtown Walk',
        duration: preferences.duration,
        distance: '2.5 km',
        highlights: ['City Hall', 'Historic District', 'Local Café'],
        description: 'Explore the heart of the city with historic landmarks and charming cafés',
        steps: [
          { location: 'Starting Point', description: 'Begin your journey at the specified location', duration: 0 },
          { location: 'City Hall', description: 'Visit the historic City Hall building', duration: 15 },
          { location: 'Historic District', description: 'Explore the charming historic district', duration: 25 },
          { location: 'Local Café', description: 'Stop for refreshments at a popular local café', duration: 15 },
          { location: 'Return to Start', description: 'Head back to your starting point', duration: 5 }
        ]
      },
      {
        id: '2',
        name: 'Food & Culture Trail',
        duration: preferences.duration,
        distance: '1.8 km',
        highlights: ['Street Food Market', 'Art Gallery', 'Central Park'],
        description: 'A culinary journey through local flavors and cultural sites',
        steps: [
          { location: 'Starting Point', description: 'Begin your culinary adventure', duration: 0 },
          { location: 'Street Food Market', description: 'Sample local street food delicacies', duration: 20 },
          { location: 'Art Gallery', description: 'Browse contemporary local art', duration: 20 },
          { location: 'Central Park', description: 'Relax in the beautiful central park', duration: 15 },
          { location: 'Return to Start', description: 'Complete your loop back to start', duration: 5 }
        ]
      },
      {
        id: '3',
        name: 'Business District Explorer',
        duration: preferences.duration,
        distance: '3.2 km',
        highlights: ['Financial Center', 'Rooftop Views', 'Coffee District'],
        description: 'Discover the modern business heart with impressive architecture',
        steps: [
          { location: 'Starting Point', description: 'Start exploring the business district', duration: 0 },
          { location: 'Financial Center', description: 'See the impressive financial buildings', duration: 25 },
          { location: 'Rooftop Views', description: 'Enjoy panoramic city views from a rooftop', duration: 20 },
          { location: 'Coffee District', description: 'Experience the trendy coffee culture', duration: 15 },
          { location: 'Return to Start', description: 'End your business district tour', duration: 5 }
        ]
      }
    ];
    setRoutes(mockRoutes);
    setCurrentStep('results');
  };

  const handleStartRoute = () => {
    if (selectedRoute && preferences.city) {
      navigate(`/cities/${preferences.city}/route/${selectedRoute}`);
    }
  };

  const resetFlow = () => {
    setCurrentStep(citySlug ? 'duration' : 'city');
    setPreferences({
      city: citySlug || '',
      duration: 60,
      interests: [],
      walkingPace: 'moderate',
      startLocation: ''
    });
    setRoutes([]);
    setSelectedRoute('');
  };

  const getSelectedRouteData = () => {
    return routes.find(route => route.id === selectedRoute);
  };

  if (currentStep === 'city') {
    return (
      <section className="py-8 sm:py-12 lg:py-16 bg-traveler-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-traveler-blue mb-4">Choose Your City</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Select the city where you want to explore business paths during your free time.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <Label htmlFor="city-select" className="text-base sm:text-lg font-medium mb-3 sm:mb-4 block">
                Select City
              </Label>
              <Select value={preferences.city} onValueChange={(value) => setPreferences(prev => ({ ...prev, city: value }))}>
                <SelectTrigger className="w-full text-sm sm:text-base py-4 sm:py-6">
                  <SelectValue placeholder="Choose your destination city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city.slug} value={city.slug}>
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="text-center">
              <Button 
                className="bg-traveler-orange hover:bg-orange-600 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                onClick={handleCityNext}
                disabled={!preferences.city}
              >
                Next: Choose Duration
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (currentStep === 'duration') {
    return (
      <section className="py-8 sm:py-12 lg:py-16 bg-traveler-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-traveler-blue mb-4">How Much Time Do You Have?</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Select a duration and we'll create the perfect business path for you to explore {cities.find(c => c.slug === preferences.city)?.name} efficiently.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button
                variant={selectedDuration === 30 ? "default" : "outline"}
                className={`text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-lg w-full sm:w-auto ${
                  selectedDuration === 30 ? 'bg-traveler-teal hover:bg-teal-700' : 'border-2 border-traveler-teal text-traveler-teal hover:bg-traveler-teal/10'
                }`}
                onClick={() => setSelectedDuration(30)}
              >
                30 Minutes
              </Button>
              
              <Button
                variant={selectedDuration === 60 ? "default" : "outline"} 
                className={`text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-lg w-full sm:w-auto ${
                  selectedDuration === 60 ? 'bg-traveler-teal hover:bg-teal-700' : 'border-2 border-traveler-teal text-traveler-teal hover:bg-traveler-teal/10'
                }`}
                onClick={() => setSelectedDuration(60)}
              >
                60 Minutes
              </Button>
              
              <Button 
                variant={selectedDuration === 120 ? "default" : "outline"}
                className={`text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-8 rounded-lg w-full sm:w-auto ${
                  selectedDuration === 120 ? 'bg-traveler-teal hover:bg-teal-700' : 'border-2 border-traveler-teal text-traveler-teal hover:bg-traveler-teal/10'
                }`}
                onClick={() => setSelectedDuration(120)}
              >
                120 Minutes
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-4">
                {selectedDuration === 30 && "Perfect for a quick coffee break between meetings."}
                {selectedDuration === 60 && "Ideal for lunch breaks or early morning explorations."}
                {selectedDuration === 120 && "Great for extended evening walks or weekend explorations."}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button 
                  className="bg-traveler-orange hover:bg-orange-600 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                  onClick={handleDurationNext}
                >
                  Next: Choose Your Interests
                </Button>
                {!citySlug && (
                  <Button 
                    variant="outline"
                    className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                    onClick={() => setCurrentStep('city')}
                  >
                    Back
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (currentStep === 'interests') {
    return (
      <section className="py-8 sm:py-12 lg:py-16 bg-traveler-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-traveler-blue mb-4">What Interests You?</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Select the types of places and experiences you'd like to include in your {preferences.duration}-minute route.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {interestOptions.map((interest) => (
                <Button
                  key={interest}
                  variant={preferences.interests.includes(interest) ? "default" : "outline"}
                  className={`p-3 sm:p-4 h-auto text-center text-sm sm:text-base ${
                    preferences.interests.includes(interest) 
                      ? 'bg-traveler-teal hover:bg-teal-700' 
                      : 'border-2 border-traveler-teal text-traveler-teal hover:bg-traveler-teal/10'
                  }`}
                  onClick={() => handleInterestToggle(interest)}
                >
                  {interest}
                </Button>
              ))}
            </div>
            
            <div className="text-center flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                className="bg-traveler-orange hover:bg-orange-600 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                onClick={() => setCurrentStep('pace')}
                disabled={preferences.interests.length === 0}
              >
                Next: Walking Pace
              </Button>
              <Button 
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                onClick={() => setCurrentStep('duration')}
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (currentStep === 'pace') {
    return (
      <section className="py-8 sm:py-12 lg:py-16 bg-traveler-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-traveler-blue mb-4">What's Your Walking Pace?</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              This helps us plan the right distance and number of stops for your route.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto">
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center mb-6 sm:mb-8">
              <Button
                variant={preferences.walkingPace === 'leisurely' ? "default" : "outline"}
                className={`text-base sm:text-lg py-6 px-6 sm:px-8 rounded-lg flex flex-col items-center justify-center h-auto min-h-[4rem] w-full sm:w-auto sm:min-w-[140px] ${
                  preferences.walkingPace === 'leisurely' ? 'bg-traveler-teal hover:bg-teal-700' : 'border-2 border-traveler-teal text-traveler-teal hover:bg-traveler-teal/10'
                }`}
                onClick={() => setPreferences(prev => ({ ...prev, walkingPace: 'leisurely' }))}
              >
                <span className="font-semibold">Leisurely</span>
                <span className="text-xs sm:text-sm opacity-75 mt-1">Slow & relaxed</span>
              </Button>
              
              <Button
                variant={preferences.walkingPace === 'moderate' ? "default" : "outline"}
                className={`text-base sm:text-lg py-6 px-6 sm:px-8 rounded-lg flex flex-col items-center justify-center h-auto min-h-[4rem] w-full sm:w-auto sm:min-w-[140px] ${
                  preferences.walkingPace === 'moderate' ? 'bg-traveler-teal hover:bg-teal-700' : 'border-2 border-traveler-teal text-traveler-teal hover:bg-traveler-teal/10'
                }`}
                onClick={() => setPreferences(prev => ({ ...prev, walkingPace: 'moderate' }))}
              >
                <span className="font-semibold">Moderate</span>
                <span className="text-xs sm:text-sm opacity-75 mt-1">Comfortable pace</span>
              </Button>
              
              <Button
                variant={preferences.walkingPace === 'brisk' ? "default" : "outline"}
                className={`text-base sm:text-lg py-6 px-6 sm:px-8 rounded-lg flex flex-col items-center justify-center h-auto min-h-[4rem] w-full sm:w-auto sm:min-w-[140px] ${
                  preferences.walkingPace === 'brisk' ? 'bg-traveler-teal hover:bg-teal-700' : 'border-2 border-traveler-teal text-traveler-teal hover:bg-traveler-teal/10'
                }`}
                onClick={() => setPreferences(prev => ({ ...prev, walkingPace: 'brisk' }))}
              >
                <span className="font-semibold">Brisk</span>
                <span className="text-xs sm:text-sm opacity-75 mt-1">Fast & efficient</span>
              </Button>
            </div>
            
            <div className="text-center flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                className="bg-traveler-orange hover:bg-orange-600 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                onClick={handlePaceNext}
              >
                Next: Starting Location
              </Button>
              <Button 
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                onClick={() => setCurrentStep('interests')}
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (currentStep === 'location') {
    return (
      <section className="py-8 sm:py-12 lg:py-16 bg-traveler-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-traveler-blue mb-4">Where Are You Starting From?</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Enter your hotel, office, or any landmark to help us create the perfect route.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <Label htmlFor="startLocation" className="text-base sm:text-lg font-medium mb-3 sm:mb-4 block">
                Starting Location
              </Label>
              <Input
                id="startLocation"
                placeholder="e.g., Times Square, Hilton Hotel, Central Station..."
                value={preferences.startLocation}
                onChange={(e) => setPreferences(prev => ({ ...prev, startLocation: e.target.value }))}
                className="text-base sm:text-lg py-3 sm:py-4 px-3 sm:px-4"
              />
            </div>
            
            <div className="text-center flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                className="bg-traveler-orange hover:bg-orange-600 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                onClick={handleLocationNext}
                disabled={preferences.startLocation.trim() === ''}
              >
                Find My Routes
              </Button>
              <Button 
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                onClick={() => setCurrentStep('pace')}
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (currentStep === 'results') {
    const selectedRouteData = getSelectedRouteData();

    return (
      <section className="py-8 sm:py-12 lg:py-16 bg-traveler-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-traveler-blue mb-4">Your Personalized Routes</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Based on your preferences, here are the perfect {preferences.duration}-minute routes starting from {preferences.startLocation}.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-3 sm:p-4 lg:p-6 max-w-6xl mx-auto mb-8">
            <div className="mb-4 sm:mb-6">
              <Label htmlFor="route-select" className="text-base sm:text-lg font-medium mb-3 sm:mb-4 block">
                Choose Your Route
              </Label>
              <Select value={selectedRoute} onValueChange={setSelectedRoute}>
                <SelectTrigger className="w-full text-sm sm:text-base py-3 sm:py-4 bg-white border-2 border-gray-300 shadow-sm hover:border-traveler-teal focus:border-traveler-teal focus:ring-2 focus:ring-traveler-teal/20">
                  <SelectValue placeholder="Select a route to start your journey" />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-gray-200 shadow-2xl z-[99999] max-h-[60vh] overflow-y-auto rounded-lg w-full max-w-[95vw]">
                  {routes.map((route) => (
                    <SelectItem 
                      key={route.id} 
                      value={route.id} 
                      className="p-0 hover:bg-gray-50 cursor-pointer focus:bg-gray-50 data-[highlighted]:bg-gray-50 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="w-full max-w-full p-2 sm:p-3 space-y-2">
                        <div className="flex flex-col space-y-2">
                          <div className="flex flex-col gap-2">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="font-bold text-sm sm:text-base text-gray-900 leading-tight line-clamp-2 flex-1 min-w-0">
                                {route.name}
                              </h3>
                              <div className="flex gap-1 flex-shrink-0">
                                <span className="flex items-center bg-blue-50 px-1.5 py-0.5 rounded text-xs whitespace-nowrap">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {route.duration}m
                                </span>
                                <span className="flex items-center bg-green-50 px-1.5 py-0.5 rounded text-xs whitespace-nowrap">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {route.distance}
                                </span>
                              </div>
                            </div>
                            
                            <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">{route.description}</p>
                            
                            <div className="flex items-center gap-1">
                              <span className="bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded text-xs whitespace-nowrap">
                                🚶‍♂️ {preferences.walkingPace}
                              </span>
                            </div>
                            
                            <div>
                              <span className="text-xs font-semibold text-gray-700 block mb-1">Highlights:</span>
                              <div className="flex flex-wrap gap-1">
                                {route.highlights.slice(0, 2).map((highlight: string, index: number) => (
                                  <span key={index} className="bg-traveler-teal/10 text-traveler-teal px-1.5 py-0.5 rounded text-xs font-medium border border-traveler-teal/20 line-clamp-1">
                                    {highlight}
                                  </span>
                                ))}
                                {route.highlights.length > 2 && (
                                  <span className="text-xs text-gray-500">+{route.highlights.length - 2} more</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="text-center flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                className="bg-traveler-orange hover:bg-orange-600 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                onClick={handleStartRoute}
                disabled={!selectedRoute}
              >
                Start This Route
              </Button>
              <Button 
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
                onClick={resetFlow}
              >
                Plan Another Route
              </Button>
            </div>
          </div>
          
          {selectedRouteData && (
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 max-w-6xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-traveler-blue mb-4">{selectedRouteData.name}</h3>
              <div className="flex flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-gray-600 mb-6">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {selectedRouteData.duration} minutes</span>
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {selectedRouteData.distance}</span>
                <span>🎯 {preferences.walkingPace} pace</span>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-base sm:text-lg">Route Highlights:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedRouteData.highlights.map((highlight: string, index: number) => (
                    <span key={index} className="bg-traveler-lightgray px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-base sm:text-lg">Detailed Route Steps:</h4>
                <div className="space-y-4 sm:space-y-6">
                  {selectedRouteData.steps.map((step: any, index: number) => (
                    <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 border border-gray-200 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-traveler-teal text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                          <h5 className="font-bold text-base sm:text-xl text-traveler-blue break-words">{step.location}</h5>
                          {step.duration > 0 && (
                            <span className="inline-flex items-center text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded flex-shrink-0">
                              <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                              {step.duration} min
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-lg break-words">{step.description}</p>
                        
                        {/* Detailed Information */}
                        <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                          <div className="flex items-start gap-2">
                            <Info className="w-4 h-4 sm:w-5 sm:h-5 text-traveler-teal mt-0.5 flex-shrink-0" />
                            <div className="min-w-0">
                              <h6 className="font-semibold text-traveler-blue mb-1 text-sm sm:text-base">Details</h6>
                              <p className="text-gray-600 text-xs sm:text-sm break-words">Explore the heart of the city with historic landmarks and charming cafés. This area offers a perfect blend of modern business district vibes with classic architecture.</p>
                            </div>
                          </div>
                        </div>

                        {/* Tips */}
                        <div className="bg-blue-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                          <div className="flex items-start gap-2">
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <div className="min-w-0">
                              <h6 className="font-semibold text-blue-800 mb-1 text-sm sm:text-base">Pro Tips</h6>
                              <p className="text-blue-700 text-xs sm:text-sm break-words">Best visited during lunch hours for the full business district atmosphere. Don't forget to look up at the impressive architecture while walking.</p>
                            </div>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="mb-3 sm:mb-4">
                          <h6 className="font-semibold text-gray-800 mb-2 flex items-center gap-1 text-sm sm:text-base">
                            <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
                            Highlights
                          </h6>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {selectedRouteData.highlights.slice(0, 3).map((highlight: string, idx: number) => (
                              <span key={idx} className="bg-traveler-teal/10 text-traveler-teal px-2 sm:px-3 py-1 rounded-full text-xs font-medium break-words">
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Cost and Best Time */}
                        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                          <div>
                            <span className="font-medium">💰 Cost: </span>
                            <span>$5-15 per person</span>
                          </div>
                          <div>
                            <span className="font-medium">⏰ Best time: </span>
                            <span>Weekday lunch hours</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  return null;
};

export default PathDurationSelector;
