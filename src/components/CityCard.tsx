
import React from 'react';
import { Link } from 'react-router-dom';

interface CityCardProps {
  name: string;
  country: string;
  imageUrl: string;
  slug: string;
  pathCount?: number;
}

const CityCard = ({ name, country, imageUrl, slug, pathCount }: CityCardProps) => {
  return (
    <Link to={`/cities/${slug}`} className="group">
      <div className="relative rounded-lg overflow-hidden shadow-md h-64 transition-all duration-300 group-hover:shadow-xl transform group-hover:-translate-y-1">
        <div className="absolute inset-0">
          <img 
            src={imageUrl} 
            alt={`${name}, ${country}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-white/80 mb-2">{country}</p>
          {pathCount && (
            <span className="bg-traveler-orange/80 text-white text-sm px-2 py-1 rounded-full">
              {pathCount} paths available
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CityCard;
