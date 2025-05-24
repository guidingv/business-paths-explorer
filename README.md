
# Business Traveler Route Planner

A modern web application that helps business travelers discover personalized walking routes in cities around the world. Perfect for exploring during lunch breaks, coffee runs, or extended evening walks.

## Features

- **Personalized Route Planning**: Select your available time (30, 60, or 120 minutes) and get customized walking routes
- **Interest-Based Recommendations**: Choose from various interests like Architecture, Food & Dining, Shopping, Parks & Nature, Museums, Historical Sites, Street Art, and Local Markets
- **Walking Pace Customization**: Select your preferred pace (leisurely, moderate, or brisk) for optimal route planning
- **Starting Location Flexibility**: Enter any hotel, office, or landmark as your starting point
- **Detailed Route Information**: Get step-by-step directions with highlights, tips, costs, and best visiting times
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom color scheme
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React icons
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Charts**: Recharts library

## Getting Started

### Prerequisites

- Node.js (recommended: use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── PathDurationSelector.tsx  # Main route planning component
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main application component
```

## Usage

1. **Select Duration**: Choose how much time you have available (30, 60, or 120 minutes)
2. **Choose Interests**: Select the types of places and experiences you'd like to include
3. **Set Walking Pace**: Pick your preferred walking speed (leisurely, moderate, or brisk)
4. **Enter Starting Location**: Specify your hotel, office, or any landmark
5. **Browse Routes**: Review personalized route recommendations
6. **Start Walking**: Select a route and begin your adventure with detailed step-by-step directions

## Available Routes

The application currently includes routes for major business travel destinations. Each route includes:

- Estimated walking time and distance
- Key highlights and attractions
- Detailed step-by-step directions
- Pro tips for the best experience
- Cost estimates and optimal visiting times
- Photo-worthy spots and local recommendations

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reloading
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

### Color Scheme

The application uses a custom "traveler" color palette:
- **Blue**: `#1E3A8A` (Primary brand color)
- **Teal**: `#0D9488` (Accent color)
- **Orange**: `#F97316` (Call-to-action buttons)
- **Light Gray**: `#F3F4F6` (Background)
- **Dark Gray**: `#374151` (Text)

## Deployment

This project can be deployed to any static hosting service:

### Using Lovable (Recommended)
1. Open your [Lovable project](https://lovable.dev/projects/fcabb2ed-a80b-4a76-944d-2c9feccfba3c)
2. Click "Share" → "Publish"
3. Your app will be available at a Lovable subdomain

### Using Netlify, Vercel, or similar
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your preferred hosting service

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Future Enhancements

- Integration with real mapping APIs (Google Maps, Mapbox)
- User accounts and saved routes
- Real-time weather integration
- Offline route caching
- Social sharing features
- Route reviews and ratings
- Multi-language support

## License

This project is built with [Lovable](https://lovable.dev) and is available under the MIT License.

## Support

For questions and support, visit the [Lovable Discord community](https://discord.com/channels/1119885301872070706/1280461670979993613) or check out the [documentation](https://docs.lovable.dev/).
