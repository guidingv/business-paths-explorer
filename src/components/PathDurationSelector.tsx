
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const PathDurationSelector = () => {
  const [selectedDuration, setSelectedDuration] = useState<30 | 60 | 120>(60);
  
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
              asChild
            >
              <Link to="/cities">Find Paths</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathDurationSelector;
