
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RoutePreference {
  duration: 30 | 60 | 120;
  interests: string[];
  walkingPace: 'leisurely' | 'moderate' | 'brisk';
  startLocation: string;
}

const PathDurationSelector = () => {
  const [selectedDuration, setSelectedDuration] = useState<30 | 60 | 120>(60);
  const [currentStep, setCurrentStep] = useState<'duration' | 'interests' | 'pace' | 'location' | 'results'>('duration');
  const [preferences, setPreferences] = useState<RoutePreference>({
    duration: 60,
    interests: [],
    walkingPace: 'moderate',
    startLocation: ''
  });
  const [routes, setRoutes] = useState<any[]>([]);

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
        id: 1,
        name: 'Historic Downtown Walk',
        duration: preferences.duration,
        distance: '2.5 km',
        highlights: ['City Hall', 'Historic District', 'Local Café']
      },
      {
        id: 2,
        name: 'Food & Culture Trail',
        duration: preferences.duration,
        distance: '1.8 km',
        highlights: ['Street Food Market', 'Art Gallery', 'Central Park']
      },
      {
        id: 3,
        name: 'Business District Explorer',
        duration: preferences.duration,
        distance: '3.2 km',
        highlights: ['Financial Center', 'Rooftop Views', 'Coffee District']
      }
    ];
    setRoutes(mockRoutes);
    setCurrentStep('results');
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
          
          <div className="space-y-6 mb-8">
            {routes.map((route) => (
              <div key={route.id} className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-traveler-blue mb-2">{route.name}</h3>
                    <div className="flex gap-4 text-gray-600 mb-4">
                      <span>⏱️ {route.duration} minutes</span>
                      <span>🚶 {route.distance}</span>
                      <span>🎯 {preferences.walkingPace} pace</span>
                    </div>
                  </div>
                  <Button className="bg-traveler-orange hover:bg-orange-600 text-white">
                    Start This Route
                  </Button>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Route Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {route.highlights.map((highlight: string, index: number) => (
                      <span key={index} className="bg-traveler-lightgray px-3 py-1 rounded-full text-sm">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={resetFlow}
            >
              Plan Another Route
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default PathDurationSelector;
