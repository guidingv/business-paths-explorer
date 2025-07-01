import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, MapPin, Clock, Info, Star, Camera } from 'lucide-react';

// City-specific route data
const cityRouteData = {
  'new-york': {
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
  },
  'london': {
    '1': {
      id: '1',
      name: 'Thames & Tower Walk',
      duration: 60,
      distance: '2.8 km',
      startLocation: 'London Bridge, London',
      steps: [
        { 
          location: 'London Bridge', 
          description: 'Start at the historic London Bridge with views of the Thames', 
          duration: 0,
          coordinates: [51.5074, -0.0877],
          details: 'Begin at one of London\'s most famous bridges, offering stunning views of the Thames and the city skyline.',
          tips: 'Early morning offers the best light for photography and fewer crowds',
          highlights: ['Thames views', 'Historic bridge', 'City skyline'],
          estimatedCost: '£0',
          bestTimeToVisit: 'Early morning'
        },
        { 
          location: 'Borough Market', 
          description: 'Explore one of London\'s oldest and largest food markets', 
          duration: 20,
          coordinates: [51.5055, -0.0909],
          details: 'A thousand-year-old market offering the finest British and international foods, from artisan breads to exotic spices.',
          tips: 'Try the famous grilled cheese sandwich and fresh pastries, arrive early for best selection',
          highlights: ['Artisan foods', 'Historic market', 'Local specialties'],
          estimatedCost: '£10-20 for samples',
          bestTimeToVisit: 'Mid-morning'
        },
        { 
          location: 'Tower Bridge', 
          description: 'Visit London\'s most iconic bridge with Victorian engine rooms', 
          duration: 25,
          coordinates: [51.5055, -0.0754],
          details: 'This iconic Victorian Gothic bridge offers spectacular views from its high-level walkways and fascinating exhibits in the engine rooms.',
          tips: 'Book tickets online for the glass walkway experience, check bridge lifting times',
          highlights: ['Glass walkway', 'Victorian engineering', 'Thames panorama'],
          estimatedCost: '£12-15 for bridge exhibition',
          bestTimeToVisit: 'Afternoon for best lighting'
        },
        { 
          location: 'Tower of London', 
          description: 'Explore nearly 1000 years of royal history', 
          duration: 15,
          coordinates: [51.5081, -0.0759],
          details: 'Historic castle and fortress, home to the Crown Jewels, with fascinating tales of royal prisoners and executions.',
          tips: 'Join a Yeoman Warder tour for the best stories, see the Crown Jewels early to avoid crowds',
          highlights: ['Crown Jewels', 'Historic fortress', 'Yeoman Warders'],
          estimatedCost: '£30+ for full access',
          bestTimeToVisit: 'Late afternoon'
        }
      ]
    },
    '2': {
      id: '2',
      name: 'Royal Westminster Circuit',
      duration: 60,
      distance: '2.2 km',
      startLocation: 'Westminster Abbey, London',
      steps: [
        { 
          location: 'Westminster Abbey', 
          description: 'Begin at the coronation church of British monarchs', 
          duration: 0,
          coordinates: [51.4994, -0.1273],
          details: 'Gothic abbey church where British monarchs have been crowned for nearly 1000 years, also the resting place of many famous figures.',
          tips: 'Audio guide is highly recommended, look for Poets\' Corner and royal tombs',
          highlights: ['Gothic architecture', 'Royal coronations', 'Poets\' Corner'],
          estimatedCost: '£25+ for entry',
          bestTimeToVisit: 'Morning opening'
        },
        { 
          location: 'Houses of Parliament', 
          description: 'See the seat of British democracy and Big Ben', 
          duration: 15,
          coordinates: [51.4995, -0.1248],
          details: 'The Palace of Westminster houses both chambers of Parliament, with the iconic Big Ben clock tower currently under restoration.',
          tips: 'Tours available when Parliament is not sitting, great photo opportunities from Westminster Bridge',
          highlights: ['Big Ben', 'Gothic Revival architecture', 'Political history'],
          estimatedCost: '£28+ for tours',
          bestTimeToVisit: 'Any time for exterior'
        },
        { 
          location: 'Buckingham Palace', 
          description: 'Visit the official residence of the British monarch', 
          duration: 20,
          coordinates: [51.5014, -0.1419],
          details: 'The working headquarters of the monarchy, famous for the Changing of the Guard ceremony and state rooms open in summer.',
          tips: 'Check guard changing times, state rooms open July-September, arrive early for good viewing spots',
          highlights: ['Royal residence', 'Changing of the Guard', 'State rooms'],
          estimatedCost: '£30+ for state rooms',
          bestTimeToVisit: 'Guard changing times'
        },
        { 
          location: 'St. James\'s Park', 
          description: 'Stroll through London\'s most royal park', 
          duration: 25,
          coordinates: [51.5027, -0.1347],
          details: 'The oldest Royal Park with beautiful lake views, pelicans, and excellent views back to Buckingham Palace.',
          tips: 'Watch the pelican feeding at 2:30pm daily, great views of palace from the bridge',
          highlights: ['Royal park', 'Pelican feeding', 'Palace views'],
          estimatedCost: '£0',
          bestTimeToVisit: 'Early afternoon'
        }
      ]
    },
    '3': {
      id: '3',
      name: 'City Financial District',
      duration: 60,
      distance: '2.5 km',
      startLocation: 'Bank Station, London',
      steps: [
        { 
          location: 'Bank Junction', 
          description: 'Start at the heart of London\'s financial district', 
          duration: 0,
          coordinates: [51.5134, -0.0889],
          details: 'The intersection of eight streets at the heart of the City of London, surrounded by historic banking buildings.',
          tips: 'Look up at the impressive Victorian and modern architecture, busy during weekday rush hours',
          highlights: ['Financial architecture', 'Historic banking', 'City atmosphere'],
          estimatedCost: '£0',
          bestTimeToVisit: 'Weekday morning'
        },
        { 
          location: 'Leadenhall Market', 
          description: 'Explore the beautiful Victorian covered market', 
          duration: 15,
          coordinates: [51.5130, -0.0832],
          details: 'Stunning Victorian market with ornate roof and cobblestone floors, featured in Harry Potter films as Diagon Alley.',
          tips: 'Visit the Lamb Tavern for traditional British pub experience, great for photos',
          highlights: ['Victorian architecture', 'Harry Potter filming location', 'Traditional pubs'],
          estimatedCost: '£15-25 for pub meal',
          bestTimeToVisit: 'Lunch time'
        },
        { 
          location: 'Lloyd\'s Building', 
          description: 'See the futuristic Lloyd\'s of London building', 
          duration: 10,
          coordinates: [51.5135, -0.0820],
          details: 'Revolutionary inside-out architecture by Richard Rogers, with all services on the exterior creating a unique sci-fi appearance.',
          tips: 'Best viewed from Leadenhall Street, striking contrast with historic surroundings',
          highlights: ['Modern architecture', 'Inside-out design', 'Sci-fi appearance'],
          estimatedCost: '£0',
          bestTimeToVisit: 'Any time'
        },
        { 
          location: 'Sky Garden', 
          description: 'End with panoramic views from London\'s highest garden', 
          duration: 35,
          coordinates: [51.5107, -0.0843],
          details: 'Free public garden on the 35th floor offering 360-degree views of London, with restaurants and bars.',
          tips: 'Book free tickets in advance online, sunset visits are most popular',
          highlights: ['360-degree views', 'Rooftop garden', 'Free admission'],
          estimatedCost: '£0 (book in advance)',
          bestTimeToVisit: 'Sunset'
        }
      ]
    }
  },
  'tokyo': {
    '1': {
      id: '1',
      name: 'Traditional Asakusa Walk',
      duration: 60,
      distance: '2.0 km',
      startLocation: 'Sensoji Temple, Tokyo',
      steps: [
        { 
          location: 'Sensoji Temple', 
          description: 'Start at Tokyo\'s oldest Buddhist temple', 
          duration: 0,
          coordinates: [35.7148, 139.7967],
          details: 'Tokyo\'s oldest temple, founded in 628 AD, featuring the iconic Thunder Gate and traditional architecture.',
          tips: 'Visit early morning for fewer crowds, participate in the incense ritual for good luck',
          highlights: ['Ancient temple', 'Thunder Gate', 'Traditional rituals'],
          estimatedCost: '¥0',
          bestTimeToVisit: 'Early morning'
        },
        { 
          location: 'Nakamise Shopping Street', 
          description: 'Walk through traditional shopping street to the temple', 
          duration: 20,
          coordinates: [35.7142, 139.7961],
          details: 'Traditional shopping street leading to Sensoji Temple, lined with shops selling traditional snacks and souvenirs.',
          tips: 'Try ningyo-yaki (doll-shaped cakes) and agemanju (fried sweet buns)',
          highlights: ['Traditional snacks', 'Souvenir shops', 'Historic atmosphere'],
          estimatedCost: '¥500-1000 for snacks',
          bestTimeToVisit: 'Mid-morning'
        },
        { 
          location: 'Sumida River', 
          description: 'Walk along the historic Sumida River', 
          duration: 25,
          coordinates: [35.7136, 139.8014],
          details: 'Historic river running through Tokyo, offering beautiful views of traditional boats and modern skyscrapers.',
          tips: 'Consider a river cruise for different perspective, great views of Tokyo Skytree',
          highlights: ['River views', 'Traditional boats', 'Tokyo Skytree views'],
          estimatedCost: '¥0-1000 for cruise',
          bestTimeToVisit: 'Afternoon'
        },
        { 
          location: 'Asakusa Culture Center', 
          description: 'End with panoramic views of traditional Tokyo', 
          duration: 15,
          coordinates: [35.7123, 139.7943],
          details: 'Modern cultural center with free observation deck offering views over traditional Asakusa and modern Tokyo.',
          tips: 'Free elevator to 8th floor observation deck, great sunset views',
          highlights: ['Free observation deck', 'Traditional Tokyo views', 'Modern architecture'],
          estimatedCost: '¥0',
          bestTimeToVisit: 'Sunset'
        }
      ]
    },
    '2': {
      id: '2',
      name: 'Modern Shibuya Experience',
      duration: 60,
      distance: '1.5 km',
      startLocation: 'Shibuya Crossing, Tokyo',
      steps: [
        { 
          location: 'Shibuya Crossing', 
          description: 'Experience the world\'s busiest pedestrian crossing', 
          duration: 0,
          coordinates: [35.6598, 139.7006],
          details: 'The iconic scramble crossing where up to 3,000 people cross at once, surrounded by massive digital screens.',
          tips: 'Visit Starbucks overlooking the crossing for aerial views, busiest during rush hours',
          highlights: ['Busiest crossing', 'Neon lights', 'Urban energy'],
          estimatedCost: '¥0',
          bestTimeToVisit: 'Evening rush hour'
        },
        { 
          location: 'Hachiko Statue', 
          description: 'Visit the famous loyal dog statue', 
          duration: 10,
          coordinates: [35.6590, 139.7005],
          details: 'Statue commemorating Hachiko, the loyal dog who waited for his owner for 10 years after his death.',
          tips: 'Popular meeting spot, touching story of loyalty, can get very crowded',
          highlights: ['Touching story', 'Popular meeting spot', 'Japanese loyalty culture'],
          estimatedCost: '¥0',
          bestTimeToVisit: 'Any time'
        },
        { 
          location: 'Center Gai', 
          description: 'Explore Tokyo\'s youth culture street', 
          duration: 30,
          coordinates: [35.6603, 139.6985],
          details: 'Vibrant pedestrian street full of shops, cafes, and entertainment venues popular with Tokyo\'s youth.',
          tips: 'Great for people watching, try purikura (photo booths), many unique cafes',
          highlights: ['Youth culture', 'Unique shops', 'Purikura photo booths'],
          estimatedCost: '¥1000-3000 for shopping',
          bestTimeToVisit: 'Evening'
        },
        { 
          location: 'Shibuya Sky Observatory', 
          description: 'End with breathtaking views of Tokyo', 
          duration: 20,
          coordinates: [35.6579, 139.7016],
          details: 'Open-air observation deck offering 360-degree views of Tokyo, including Mount Fuji on clear days.',
          tips: 'Book timed entry tickets online, sunset and night views are spectacular',
          highlights: ['360-degree views', 'Mount Fuji views', 'Open-air deck'],
          estimatedCost: '¥1800 for adults',
          bestTimeToVisit: 'Sunset'
        }
      ]
    },
    '3': {
      id: '3',
      name: 'Business District Ginza',
      duration: 60,
      distance: '2.3 km',
      startLocation: 'Ginza Station, Tokyo',
      steps: [
        { 
          location: 'Ginza Main Street', 
          description: 'Start at Tokyo\'s most prestigious shopping district', 
          duration: 0,
          coordinates: [35.6717, 139.7640],
          details: 'One of the world\'s most expensive shopping districts, featuring luxury brands and department stores.',
          tips: 'Window shopping is free, visit department store food floors for high-quality samples',
          highlights: ['Luxury shopping', 'Premium brands', 'Elegant architecture'],
          estimatedCost: '¥0 for browsing',
          bestTimeToVisit: 'Weekend afternoons'
        },
        { 
          location: 'Kabuki-za Theatre', 
          description: 'See the premier kabuki theatre of Japan', 
          duration: 15,
          coordinates: [35.6691, 139.7693],
          details: 'The principal theater for traditional kabuki drama, with its distinctive traditional architecture.',
          tips: 'Single-act tickets available for shorter experiences, English audio guides available',
          highlights: ['Traditional architecture', 'Kabuki performances', 'Cultural experience'],
          estimatedCost: '¥1000-15000 depending on seats',
          bestTimeToVisit: 'Performance times'
        },
        { 
          location: 'Tsukiji Outer Market', 
          description: 'Explore the famous fish market area', 
          duration: 30,
          coordinates: [35.6654, 139.7707],
          details: 'While the inner market moved, the outer market remains with fresh sushi, street food, and cooking supplies.',
          tips: 'Try fresh sushi at small stalls, arrive early for best selection, bring cash',
          highlights: ['Fresh sushi', 'Street food', 'Cooking supplies'],
          estimatedCost: '¥2000-4000 for meals',
          bestTimeToVisit: 'Morning'
        },
        { 
          location: 'Hamarikyu Gardens', 
          description: 'End in peaceful traditional gardens', 
          duration: 15,
          coordinates: [35.6596, 139.7635],
          details: 'Traditional Japanese garden with tidal ponds, tea house, and views of modern Tokyo skyline.',
          tips: 'Try matcha tea at the traditional tea house, great contrast with surrounding skyscrapers',
          highlights: ['Traditional gardens', 'Tidal ponds', 'Tea ceremony'],
          estimatedCost: '¥300 entry + ¥500 for tea',
          bestTimeToVisit: 'Afternoon'
        }
      ]
    }
  },
  'paris': {
    '1': {
      id: '1',
      name: 'Classic Paris Walk',
      duration: 60,
      distance: '2.8 km',
      startLocation: 'Notre-Dame Cathedral, Paris',
      steps: [
        { 
          location: 'Notre-Dame Cathedral', 
          description: 'Start at the heart of Paris at this Gothic masterpiece', 
          duration: 0,
          coordinates: [48.8530, 2.3499],
          details: 'Gothic cathedral and masterpiece of French architecture, currently under restoration after the 2019 fire.',
          tips: 'Exterior viewing during restoration, visit Sainte-Chapelle nearby for Gothic architecture',
          highlights: ['Gothic architecture', 'Historic significance', 'Restoration progress'],
          estimatedCost: '€0 for exterior',
          bestTimeToVisit: 'Morning'
        },
        { 
          location: 'Latin Quarter', 
          description: 'Explore the intellectual heart of Paris', 
          duration: 20,
          coordinates: [48.8503, 2.3447],
          details: 'Historic area known for its student life, bookshops, and bistros, home to the Sorbonne University.',
          tips: 'Browse Shakespeare and Company bookstore, try traditional bistros for lunch',
          highlights: ['Student atmosphere', 'Historic bookshops', 'Traditional bistros'],
          estimatedCost: '€15-25 for bistro meal',
          bestTimeToVisit: 'Late morning'
        },
        { 
          location: 'Panthéon', 
          description: 'Visit the mausoleum of France\'s great figures', 
          duration: 20,
          coordinates: [48.8462, 2.3464],
          details: 'Neoclassical building containing the remains of distinguished French citizens including Voltaire, Rousseau, and Marie Curie.',
          tips: 'Climb to the dome for panoramic views, learn about Foucault\'s Pendulum experiment',
          highlights: ['Neoclassical architecture', 'Great figures of France', 'Panoramic views'],
          estimatedCost: '€11.50 for entry',
          bestTimeToVisit: 'Midday'
        },
        { 
          location: 'Luxembourg Gardens', 
          description: 'End in Paris\'s most beautiful public garden', 
          duration: 20,
          coordinates: [48.8462, 2.3370],
          details: 'Formal French garden with palace, fountains, and tree-lined promenades, perfect for relaxation.',
          tips: 'Watch children sailing model boats in the pond, grab a crepe from nearby vendors',
          highlights: ['Formal French gardens', 'Model boat pond', 'Palace architecture'],
          estimatedCost: '€0',
          bestTimeToVisit: 'Afternoon'
        }
      ]
    },
    '2': {
      id: '2',
      name: 'Artistic Montmartre',
      duration: 60,
      distance: '2.0 km',
      startLocation: 'Sacré-Cœur Basilica, Paris',
      steps: [
        { 
          location: 'Sacré-Cœur Basilica', 
          description: 'Begin at the iconic white basilica overlooking Paris', 
          duration: 0,
          coordinates: [48.8867, 2.3431],
          details: 'Romano-Byzantine basilica offering panoramic views over Paris from the highest point in the city.',
          tips: 'Free entry to basilica, climb the dome for even better views, beware of pickpockets',
          highlights: ['Panoramic views', 'Romano-Byzantine architecture', 'Highest point in Paris'],
          estimatedCost: '€0 basilica, €7 dome',
          bestTimeToVisit: 'Early morning'
        },
        { 
          location: 'Place du Tertre', 
          description: 'Experience the artist\'s square of Montmartre', 
          duration: 25,
          coordinates: [48.8865, 2.3407],
          details: 'Historic square where artists like Picasso and Renoir worked, now filled with portrait artists and cafes.',
          tips: 'Get your portrait drawn by local artists, visit original artist studios now turned into museums',
          highlights: ['Artist portraits', 'Historic artist square', 'Bohemian atmosphere'],
          estimatedCost: '€20-50 for portraits',
          bestTimeToVisit: 'Mid-morning'
        },
        { 
          location: 'Moulin Rouge', 
          description: 'See the world-famous cabaret venue', 
          duration: 10,
          coordinates: [48.8841, 2.3322],
          details: 'The original cabaret, birthplace of the modern can-can dance, with its iconic red windmill.',
          tips: 'Shows are expensive but exterior is iconic for photos, visit nearby Pigalle district',
          highlights: ['Iconic red windmill', 'Cabaret history', 'Can-can birthplace'],
          estimatedCost: '€0 for photos, €100+ for shows',
          bestTimeToVisit: 'Evening for atmosphere'
        },
        { 
          location: 'Amélie\'s Café', 
          description: 'End at the famous café from the movie Amélie', 
          duration: 25,
          coordinates: [48.8853, 2.3348],
          details: 'Café des Deux Moulins, the workplace of Amélie Poulain in the beloved French film.',
          tips: 'Try traditional French coffee and pastries, great spot for people watching',
          highlights: ['Movie location', 'Traditional French café', 'Montmartre atmosphere'],
          estimatedCost: '€8-15 for coffee and pastry',
          bestTimeToVisit: 'Afternoon'
        }
      ]
    },
    '3': {
      id: '3',
      name: 'Business Champs-Élysées',
      duration: 60,
      distance: '3.0 km',
      startLocation: 'Arc de Triomphe, Paris',
      steps: [
        { 
          location: 'Arc de Triomphe', 
          description: 'Start at Napoleon\'s triumphal arch', 
          duration: 0,
          coordinates: [48.8738, 2.2950],
          details: 'Iconic triumphal arch at the center of Place Charles de Gaulle, honoring those who fought for France.',
          tips: 'Climb to the top for views down the Champs-Élysées, use underground passage to reach it safely',
          highlights: ['Triumphal architecture', 'Views of Champs-Élysées', 'Military honors'],
          estimatedCost: '€13 to climb',
          bestTimeToVisit: 'Morning'
        },
        { 
          location: 'Champs-Élysées', 
          description: 'Walk down the world\'s most famous avenue', 
          duration: 25,
          coordinates: [48.8698, 2.3076],
          details: 'The most famous avenue in the world, lined with luxury shops, cafes, and theaters.',
          tips: 'Window shopping is free, try macarons at Ladurée, avoid tourist trap restaurants',
          highlights: ['Luxury shopping', 'Famous avenue', 'Café culture'],
          estimatedCost: '€0 for walking, €20+ for macarons',
          bestTimeToVisit: 'Late morning'
        },
        { 
          location: 'Place de la Concorde', 
          description: 'Visit the largest square in Paris', 
          duration: 15,
          coordinates: [48.8656, 2.3212],
          details: 'Largest public square in Paris, site of many executions during French Revolution, now featuring Egyptian obelisk.',
          tips: 'Great views of the Louvre and Tuileries, be careful crossing the busy square',
          highlights: ['Egyptian obelisk', 'Revolutionary history', 'Grand urban planning'],
          estimatedCost: '€0',
          bestTimeToVisit: 'Midday'
        },
        { 
          location: 'Tuileries Garden', 
          description: 'End in the formal gardens between Louvre and Place de la Concorde', 
          duration: 20,
          coordinates: [48.8634, 2.3277],
          details: 'Historic formal garden created for Tuileries Palace, now a public garden leading to the Louvre.',
          tips: 'Perfect for a rest, outdoor art exhibitions often held here, good views of the Louvre',
          highlights: ['Formal French gardens', 'Outdoor sculptures', 'Louvre approach'],
          estimatedCost: '€0',
          bestTimeToVisit: 'Afternoon'
        }
      ]
    }
  },
  'singapore': {
    '1': {
      id: '1',
      name: 'Marina Bay Circuit',
      duration: 60,
      distance: '2.5 km',
      startLocation: 'Marina Bay Sands, Singapore',
      steps: [
        { 
          location: 'Marina Bay Sands', 
          description: 'Start at Singapore\'s iconic integrated resort', 
          duration: 0,
          coordinates: [1.2836, 103.8607],
          details: 'Iconic hotel and casino complex with distinctive architecture and infinity pool, symbol of modern Singapore.',
          tips: 'SkyPark observation deck offers great views, expensive but worth it for sunset',
          highlights: ['Iconic architecture', 'Infinity pool views', 'Modern Singapore symbol'],
          estimatedCost: 'S$26 for SkyPark',
          bestTimeToVisit: 'Evening for lights'
        },
        { 
          location: 'Gardens by the Bay', 
          description: 'Explore the futuristic botanical gardens', 
          duration: 25,
          coordinates: [1.2816, 103.8636],
          details: 'Futuristic botanical garden featuring giant Supertrees, conservatories, and innovative garden design.',
          tips: 'Free to walk around Supertrees, light show at 7:45pm and 8:45pm daily',
          highlights: ['Supertree Grove', 'Light and sound show', 'Futuristic design'],
          estimatedCost: 'S$0 outdoor areas',
          bestTimeToVisit: 'Evening for light show'
        },
        { 
          location: 'Merlion Park', 
          description: 'Visit Singapore\'s national symbol', 
          duration: 15,
          coordinates: [1.2868, 103.8545],
          details: 'Home to the iconic Merlion statue, half-lion half-fish, Singapore\'s national personification.',
          tips: 'Great photo opportunities with Marina Bay Sands backdrop, best views across the bay',
          highlights: ['National symbol', 'Photo opportunities', 'Bay views'],
          estimatedCost: 'S$0',
          bestTimeToVisit: 'Golden hour'
        },
        { 
          location: 'Helix Bridge', 
          description: 'Walk across the architectural marvel bridge', 
          duration: 20,
          coordinates: [1.2859, 103.8580],
          details: 'Double helix-inspired pedestrian bridge offering stunning views of Marina Bay and city skyline.',
          tips: 'Beautiful LED lighting at night, great for photography, connects Marina Centre to Marina South',
          highlights: ['Unique architecture', 'LED lighting', 'Marina Bay views'],
          estimatedCost: 'S$0',
          bestTimeToVisit: 'Night for LED lights'
        }
      ]
    },
    '2': {
      id: '2',
      name: 'Cultural Chinatown',
      duration: 60,
      distance: '1.8 km',
      startLocation: 'Buddha Tooth Relic Temple, Singapore',
      steps: [
        { 
          location: 'Buddha Tooth Relic Temple', 
          description: 'Begin at this magnificent Buddhist temple', 
          duration: 0,
          coordinates: [1.2815, 103.8439],
          details: 'Stunning Buddhist temple housing what is believed to be Buddha\'s tooth relic, with intricate architecture and cultural exhibitions.',
          tips: 'Free entry, remove shoes before entering, visit the rooftop garden',
          highlights: ['Buddhist architecture', 'Cultural exhibitions', 'Rooftop garden'],
          estimatedCost: 'S$0',
          bestTimeToVisit: 'Morning'
        },
        { 
          location: 'Chinatown Heritage Centre', 
          description: 'Learn about Chinese immigrant history', 
          duration: 20,
          coordinates: [1.2821, 103.8443],
          details: 'Museum showcasing the history and living conditions of Chinese immigrants in Singapore.',
          tips: 'Interactive exhibits, audio guides available, tells important Singapore history',
          highlights: ['Immigration history', 'Interactive exhibits', 'Cultural heritage'],
          estimatedCost: 'S$15 for adults',
          bestTimeToVisit: 'Mid-morning'
        },
        { 
          location: 'Chinatown Street Market', 
          description: 'Shop for souvenirs and local crafts', 
          duration: 25,
          coordinates: [1.2831, 103.8446],
          details: 'Bustling street market with traditional crafts, souvenirs, and local products at bargain prices.',
          tips: 'Bargaining is expected, cash preferred, great for unique Singapore souvenirs',
          highlights: ['Traditional crafts', 'Bargain shopping', 'Local products'],
          estimatedCost: 'S$10-50 for souvenirs',
          bestTimeToVisit: 'Afternoon'
        },
        { 
          location: 'Maxwell Food Centre', 
          description: 'End with authentic Singapore street food', 
          duration: 15,
          coordinates: [1.2803, 103.8440],
          details: 'Famous hawker center known for authentic Singaporean dishes including the famous Tian Tian chicken rice.',
          tips: 'Try Tian Tian chicken rice, cash only, can get crowded during meal times',
          highlights: ['Authentic street food', 'Famous chicken rice', 'Local hawker culture'],
          estimatedCost: 'S$5-15 per meal',
          bestTimeToVisit: 'Lunch time'
        }
      ]
    },
    '3': {
      id: '3',
      name: 'Business District Walk',
      duration: 60,
      distance: '2.2 km',
      startLocation: 'Raffles Place, Singapore',
      steps: [
        { 
          location: 'Raffles Place', 
          description: 'Start at Singapore\'s central business district', 
          duration: 0,
          coordinates: [1.2844, 103.8512],
          details: 'Heart of Singapore\'s financial district, surrounded by skyscrapers and major banks.',
          tips: 'Best experienced during weekday business hours, great architecture photography',
          highlights: ['Financial center', 'Skyscrapers', 'Business atmosphere'],
          estimatedCost: 'S$0',
          bestTimeToVisit: 'Weekday morning'
        },
        { 
          location: 'Boat Quay', 
          description: 'Walk along the historic riverside dining area', 
          duration: 20,
          coordinates: [1.2871, 103.8498],
          details: 'Historic quay along Singapore River, now lined with restaurants, bars, and cafes in restored shophouses.',
          tips: 'Great for lunch or happy hour, many cuisine options, riverside views',
          highlights: ['Historic shophouses', 'Riverside dining', 'Singapore River views'],
          estimatedCost: 'S$20-40 for meals',
          bestTimeToVisit: 'Lunch or happy hour'
        },
        { 
          location: 'Clarke Quay', 
          description: 'Experience Singapore\'s premier entertainment hub', 
          duration: 25,
          coordinates: [1.2886, 103.8467],
          details: 'Vibrant entertainment and dining district with colorful buildings, restaurants, and nightlife.',
          tips: 'Active day and night, river cruise departures, many international restaurants',
          highlights: ['Colorful architecture', 'Entertainment district', 'River cruises'],
          estimatedCost: 'S$30+ for dining',
          bestTimeToVisit: 'Evening'
        },
        { 
          location: 'Asian Civilisations Museum', 
          description: 'End with Singapore\'s cultural heritage', 
          duration: 15,
          coordinates: [1.2874, 103.8519],
          details: 'Museum showcasing the diverse cultural heritage of Singapore and Southeast Asia.',
          tips: 'Great views of Marina Bay from museum, focuses on trade and cultural exchange',
          highlights: ['Cultural heritage', 'Southeast Asian artifacts', 'Marina Bay views'],
          estimatedCost: 'S$12 for adults',
          bestTimeToVisit: 'Late afternoon'
        }
      ]
    }
  },
  'berlin': {
    '1': {
      id: '1',
      name: 'Historical Berlin Walk',
      duration: 60,
      distance: '3.0 km',
      startLocation: 'Brandenburg Gate, Berlin',
      steps: [
        { 
          location: 'Brandenburg Gate', 
          description: 'Start at Berlin\'s most famous landmark', 
          duration: 0,
          coordinates: [52.5163, 13.3777],
          details: 'Iconic neoclassical monument and symbol of German reunification, once divided East and West Berlin.',
          tips: 'Free to visit, great photo opportunities, especially beautiful at sunset',
          highlights: ['German reunification symbol', 'Neoclassical architecture', 'Historic significance'],
          estimatedCost: '€0',
          bestTimeToVisit: 'Early morning or sunset'
        },
        { 
          location: 'Holocaust Memorial', 
          description: 'Reflect at the Memorial to the Murdered Jews of Europe', 
          duration: 20,
          coordinates: [52.5139, 13.3784],
          details: 'Moving memorial consisting of 2,711 concrete slabs of varying heights, creating a somber maze.',
          tips: 'Free entry, underground information center provides context, respectful behavior required',
          highlights: ['Memorial design', 'Historical remembrance', 'Information center'],
          estimatedCost: '€0',
          bestTimeToVisit: 'Any time for reflection'
        },
        { 
          location: 'Checkpoint Charlie', 
          description: 'Visit the famous Cold War crossing point', 
          duration: 15,
          coordinates: [52.5075, 13.3904],
          details: 'Famous border crossing point between East and West Berlin during the Cold War, now a tourist attraction.',
          tips: 'Photo opportunities with guards, nearby museum tells Cold War history',
          highlights: ['Cold War history', 'Border crossing replica', 'Historical significance'],
          estimatedCost: '€0 for photos, €14.50 for museum',
          bestTimeToVisit: 'Mid-morning'
        },
        { 
          location: 'Berlin Wall East Side Gallery', 
          description: 'End at the longest remaining section of Berlin Wall', 
          duration: 25,
          coordinates: [52.5052, 13.4394],
          details: '1.3km section of Berlin Wall featuring murals by international artists, world\'s longest open-air gallery.',
          tips: 'Free to visit, famous murals include "My God, Help Me to Survive" and fraternal kiss',
          highlights: ['Street art murals', 'Berlin Wall remains', 'Open-air gallery'],
          estimatedCost: '€0',
          bestTimeToVisit: 'Afternoon for photography'
        }
      ]
    },
    '2': {
      id: '2',
      name: 'Cultural Museum Island',
      duration: 60,
      distance: '1.5 km',
      startLocation: 'Berlin Cathedral, Berlin',
      steps: [
        { 
          location: 'Berlin Cathedral', 
          description: 'Begin at the impressive Protestant cathedral', 
          duration: 0,
          coordinates: [52.5192, 13.4013],
          details: 'Magnificent Protestant cathedral with impressive dome and panoramic views from the top.',
          tips: 'Climb the dome for city views, beautiful interior with royal tombs',
          highlights: ['Baroque architecture', 'Dome views', 'Royal tombs'],
          estimatedCost: '€9 for entry',
          bestTimeToVisit: 'Morning'
        },
        { 
          location: 'Pergamon Museum', 
          description: 'Explore world-famous ancient artifacts', 
          duration: 30,
          coordinates: [52.5211, 13.3966],
          details: 'World-renowned museum housing monumental architecture from ancient civilizations including Pergamon Altar.',
          tips: 'Book timed tickets in advance, allow plenty of time, audio guide recommended',
          highlights: ['Pergamon Altar', 'Ancient architecture', 'World-class artifacts'],
          estimatedCost: '€12 for entry',
          bestTimeToVisit: 'Mid-morning'
        },
        { 
          location: 'Museum Island Gardens', 
          description: 'Stroll through the peaceful museum gardens', 
          duration: 15,
          coordinates: [52.5186, 13.4000],
          details: 'Beautiful gardens surrounding the museum complex, perfect for relaxation between museum visits.',
          tips: 'Free to walk through, great views of the Spree River, peaceful atmosphere',
          highlights: ['Peaceful gardens', 'River views', 'Museum architecture'],
          estimatedCost: '€0',
          bestTimeToVisit: 'After museum visits'
        },
        { 
          location: 'Hackescher Markt', 
          description: 'End in the trendy cultural district', 
          duration: 15,
          coordinates: [52.5225, 13.4015],
          details: 'Trendy area with art galleries, boutiques, cafes, and restaurants in historic courtyards.',
          tips: 'Explore the Hackescher Höfe courtyards, great for shopping and dining',
          highlights: ['Historic courtyards', 'Art galleries', 'Trendy cafes'],
          estimatedCost: '€15-30 for cafe/meal',
          bestTimeToVisit: 'Afternoon/evening'
        }
      ]
    },
    '3': {
      id: '3',
      name: 'Modern Business Potsdamer Platz',
      duration: 60,
      distance: '2.0 km',
      startLocation: 'Potsdamer Platz, Berlin',
      steps: [
        { 
          location: 'Potsdamer Platz', 
          description: 'Start at Berlin\'s modern commercial center', 
          duration: 0,
          coordinates: [52.5096, 13.3759],
          details: 'Modern square rebuilt after reunification, showcasing contemporary architecture and commercial development.',
          tips: 'Great example of post-reunification development, modern shopping and dining',
          highlights: ['Modern architecture', 'Commercial center', 'Urban development'],
          estimatedCost: '€0',
          bestTimeToVisit: 'Business hours'
        },
        { 
          location: 'Sony Center', 
          description: 'Explore the futuristic entertainment complex', 
          duration: 20,
          coordinates: [52.5100, 13.3747],
          details: 'Futuristic complex with unique tent-like roof structure, housing cinemas, restaurants, and offices.',
          tips: 'Impressive architecture, good for photos, various dining options',
          highlights: ['Futuristic design', 'Tent-like roof', 'Entertainment complex'],
          estimatedCost: '€0 to walk around',
          bestTimeToVisit: 'Any time'
        },
        { 
          location: 'Topography of Terror', 
          description: 'Learn about Nazi history at this important museum', 
          duration: 25,
          coordinates: [52.5061, 13.3836],
          details: 'Museum on the site of former Nazi institutions, documenting the terror apparatus of the Third Reich.',
          tips: 'Free entry, powerful and educational, includes section of Berlin Wall',
          highlights: ['Historical education', 'Nazi history', 'Berlin Wall section'],
          estimatedCost: '€0',
          bestTimeToVisit: 'Mid-morning'
        },
        { 
          location: 'Martin-Gropius-Bau', 
          description: 'End at this prestigious exhibition hall', 
          duration: 15,
          coordinates: [52.5048, 13.3826],
          details: 'Beautiful historic building hosting world-class temporary exhibitions of art, culture, and history.',
          tips: 'Check current exhibitions, beautiful Renaissance Revival architecture',
          highlights: ['Temporary exhibitions', 'Historic architecture', 'Cultural venue'],
          estimatedCost: '€10-15 for exhibitions',
          bestTimeToVisit: 'Afternoon'
        }
      ]
    }
  }
};

const Route = () => {
  const { citySlug, routeId } = useParams();
  const navigate = useNavigate();
  const [route, setRoute] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (citySlug && routeId && cityRouteData[citySlug as keyof typeof cityRouteData]) {
      const cityRoutes = cityRouteData[citySlug as keyof typeof cityRouteData];
      if (cityRoutes[routeId as keyof typeof cityRoutes]) {
        setRoute(cityRoutes[routeId as keyof typeof cityRoutes]);
      } else {
        setNotFound(true);
      }
    } else {
      setNotFound(true);
    }
  }, [citySlug, routeId]);

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
