import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate, useParams } from 'react-router-dom';
import { Clock, MapPin } from 'lucide-react';

interface RoutePreference {
  duration: 30 | 60 | 120;
  interests: string[];
  walkingPace: 'leisurely' | 'moderate' | 'brisk';
  startLocation: string;
}

const PathDurationSelector = () => {
  const navigate = useNavigate();
  const { citySlug } = useParams();
  const [selectedDuration, setSelectedDuration] = useState<30 | 60 | 120>(60);
  const [currentStep, setCurrentStep] = useState<'duration' | 'interests' | 'pace' | 'location' | 'results'>('duration');
  const [preferences, setPreferences] = useState<RoutePreference>({
    duration: 60,
    interests: [],
    walkingPace: 'moderate',
    startLocation: ''
  });
  const [routes, setRoutes] = useState<any[]>([]);
  const [selectedRoute, setSelectedRoute] = useState<string>('');

  const interestOptions = [
    'Architecture', 'Food & Dining', 'Shopping', 'Parks & Nature', 
    'Museums', 'Historical Sites', 'Street Art', 'Local Markets'
  ];

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
    if (selectedRoute && citySlug) {
      navigate(`/cities/${citySlug}/route/${selectedRoute}`);
    }
  };

  const resetFlow = () => {
    setCurrentStep('duration');
    setPreferences({
      duration: 60,
      interests: [],
      walkingPace: 'moderate',
      startLocation: ''
    });
    setRoutes([]);
  };

  if (currentStep === 'duration') {
    return (
      <section className="py-16 bg-traveler-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-traveler-blue mb-4">How Much Time Do You Have?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select a duration and we'll create the perfect business path for you to explore the city efficiently.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
              <Button
                variant={selectedDuration === 30 ? "default" : "outline"}
                className={`text-lg py-6 px-8 rounded-lg ${
                  selectedDuration === 30 ? 'bg-traveler-teal hover:bg-teal-700' : 'border-2 border-traveler-teal text-traveler-teal hover:bg-traveler-teal/10'
                }`}
                onClick={() => setSelectedDuration(30)}
              >
                30 Minutes
              </Button>
              
              <Button
                variant={selectedDuration === 60 ? "default" : "outline"} 
                className={`text-lg py-6 px-8 rounded-lg ${
                  selectedDuration === 60 ? 'bg-traveler-teal hover:bg-teal-700' : 'border-2 border-traveler-teal text-traveler-teal hover:bg-traveler-teal/10'
                }`}
                onClick={() => setSelectedDuration(60)}
              >
                60 Minutes
              </Button>
              
              <Button 
                variant={selectedDuration === 120 ? "default" : "outline"}
                className={`text-lg py-6 px-8 rounded-lg ${
                  selectedDuration === 120 ? 'bg-traveler-teal hover:bg-teal-700' : 'border-2 border-traveler-teal text-traveler-teal hover:bg-traveler-teal/10'
                }`}
                onClick={() => setSelectedDuration(120)}
              >
                120 Minutes
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                {selectedDuration === 30 && "Perfect for a quick coffee break between meetings."}
                {selectedDuration === 60 && "Ideal for lunch breaks or early morning explorations."}
                {selectedDuration === 120 && "Great for extended evening walks or weekend explorations."}
              </p>
              
              <Button 
                className="bg-traveler-orange hover:bg-orange-600 text-white text-lg px-8 py-6"
                onClick={handleDurationNext}
              >
                Next: Choose Your Interests
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (currentStep === 'interests') {
    return (
      <section className="py-16 bg-traveler-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-traveler-blue mb-4">What Interests You?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the types of places and experiences you'd like to include in your {preferences.duration}-minute route.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {interestOptions.map((interest) => (
                <Button
                  key={interest}
                  variant={preferences.interests.includes(interest) ? "default" : "outline"}
                  className={`p-4 h-auto text-center ${
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
            
            <div className="text-center">
              <Button 
                className="bg-traveler-orange hover:bg-orange-600 text-white text-lg px-8 py-6 mr-4"
                onClick={() => setCurrentStep('pace')}
                disabled={preferences.interests.length === 0}
              >
                Next: Walking Pace
              </Button>
              <Button 
                variant="outline"
                className="text-lg px-8 py-6"
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
      <section className="py-16 bg-traveler-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-traveler-blue mb-4">What's Your Walking Pace?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This helps us plan the right distance and number of stops for your route.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
              <Button
                variant={preferences.walkingPace === 'leisurely' ? "default" : "outline"}
                className={`text-lg py-6 px-8 rounded-lg ${
                  preferences.walkingPace === 'leisurely' ? 'bg-traveler-teal hover:bg-teal-700' : 'border-2 border-traveler-teal text-traveler-teal hover:bg-traveler-teal/10'
                }`}
                onClick={() => setPreferences(prev => ({ ...prev, walkingPace: 'leisurely' }))}
              >
                Leisurely
                <div className="text-sm opacity-75">Slow & relaxed</div>
              </Button>
              
              <Button
                variant={preferences.walkingPace === 'moderate' ? "default" : "outline"}
                className={`text-lg py-6 px-8 rounded-lg ${
                  preferences.walkingPace === 'moderate' ? 'bg-traveler-teal hover:bg-teal-700' : 'border-2 border-traveler-teal text-traveler-teal hover:bg-traveler-teal/10'
                }`}
                onClick={() => setPreferences(prev => ({ ...prev, walkingPace: 'moderate' }))}
              >
                Moderate
                <div className="text-sm opacity-75">Comfortable pace</div>
              </Button>
              
              <Button
                variant={preferences.walkingPace === 'brisk' ? "default" : "outline"}
                className={`text-lg py-6 px-8 rounded-lg ${
                  preferences.walkingPace === 'brisk' ? 'bg-traveler-teal hover:bg-teal-700' : 'border-2 border-traveler-teal text-traveler-teal hover:bg-traveler-teal/10'
                }`}
                onClick={() => setPreferences(prev => ({ ...prev, walkingPace: 'brisk' }))}
              >
                Brisk
                <div className="text-sm opacity-75">Fast & efficient</div>
              </Button>
            </div>
            
            <div className="text-center">
              <Button 
                className="bg-traveler-orange hover:bg-orange-600 text-white text-lg px-8 py-6 mr-4"
                onClick={handlePaceNext}
              >
                Next: Starting Location
              </Button>
              <Button 
                variant="outline"
                className="text-lg px-8 py-6"
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
      <section className="py-16 bg-traveler-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-traveler-blue mb-4">Where Are You Starting From?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enter your hotel, office, or any landmark to help us create the perfect route.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <div className="mb-8">
              <Label htmlFor="startLocation" className="text-lg font-medium mb-4 block">
                Starting Location
              </Label>
              <Input
                id="startLocation"
                placeholder="e.g., Times Square, Hilton Hotel, Central Station..."
                value={preferences.startLocation}
                onChange={(e) => setPreferences(prev => ({ ...prev, startLocation: e.target.value }))}
                className="text-lg py-4 px-4"
              />
            </div>
            
            <div className="text-center">
              <Button 
                className="bg-traveler-orange hover:bg-orange-600 text-white text-lg px-8 py-6 mr-4"
                onClick={handleLocationNext}
                disabled={preferences.startLocation.trim() === ''}
              >
                Find My Routes
              </Button>
              <Button 
                variant="outline"
                className="text-lg px-8 py-6"
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
    return (
      <section className="py-16 bg-traveler-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-traveler-blue mb-4">Your Personalized Routes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Based on your preferences, here are the perfect {preferences.duration}-minute routes starting from {preferences.startLocation}.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto mb-8">
            <div className="mb-6">
              <Label htmlFor="route-select" className="text-lg font-medium mb-4 block">
                Choose Your Route
              </Label>
              <Select value={selectedRoute} onValueChange={setSelectedRoute}>
                <SelectTrigger className="w-full text-lg py-6">
                  <SelectValue placeholder="Select a route to start your journey" />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  {routes.map((route) => (
                    <SelectItem key={route.id} value={route.id} className="text-lg py-3">
                      <div className="flex flex-col">
                        <span className="font-medium">{route.name}</span>
                        <span className="text-sm text-gray-600">
                          ⏱️ {route.duration} min • 🚶 {route.distance} • 🎯 {preferences.walkingPace} pace
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="text-center">
              <Button 
                className="bg-traveler-orange hover:bg-orange-600 text-white text-lg px-8 py-6 mr-4"
                onClick={handleStartRoute}
                disabled={!selectedRoute}
              >
                Start This Route
              </Button>
              <Button 
                variant="outline"
                className="text-lg px-8 py-6"
                onClick={resetFlow}
              >
                Plan Another Route
              </Button>
            </div>
          </div>
          
          {selectedRoute && (
            <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto">
              {routes
                .filter(route => route.id === selectedRoute)
                .map((route) => (
                  <div key={route.id}>
                    <h3 className="text-2xl font-bold text-traveler-blue mb-4">{route.name}</h3>
                    <div className="flex gap-4 text-gray-600 mb-6">
                      <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {route.duration} minutes</span>
                      <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {route.distance}</span>
                      <span>🎯 {preferences.walkingPace} pace</span>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-lg">Route Highlights:</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {route.highlights.map((highlight: string, index: number) => (
                          <span key={index} className="bg-traveler-lightgray px-3 py-1 rounded-full text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4 text-lg">Route Steps:</h4>
                      <div className="space-y-4">
                        {route.steps.map((step: any, index: number) => (
                          <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 bg-traveler-teal text-white rounded-full flex items-center justify-center font-semibold text-sm">
                                {index + 1}
                              </div>
                            </div>
                            <div className="flex-grow">
                              <h5 className="font-semibold text-traveler-blue mb-1">{step.location}</h5>
                              <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                              {step.duration > 0 && (
                                <span className="inline-flex items-center text-xs text-gray-500">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {step.duration} minutes
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>
    );
  }

  return null;
};

export default PathDurationSelector;
