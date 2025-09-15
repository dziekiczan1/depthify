import { SectionHeading } from '@/lib/homepage/features';

export enum DiveLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
}

export interface MapLegendItem {
  color: string;
  label: string;
}

export interface DiveModalSpot {
  lat: number;
  lng: number;
  title: string;
  country?: string;
  rating: number;
  reviewsCount?: number;
  level?: string;
  description: string;
  stats?: {
    temperature?: string;
    visibility?: string;
    maxDepth?: string;
    bestTime?: string;
  };
  attractions?: string[];
  wildlife?: string[];
}

export const mapHeading: SectionHeading = {
  title: 'Discover the best',
  highlight: 'dive sites in the world',
  description:
    'An interactive map with the most beautiful dive sites across the globe. Click on a pin to explore details of each location.',
};

export const mapLegendAriaLabel: string = 'Diver skill levels';

export const legendItems: MapLegendItem[] = [
  { color: 'bg-green-600', label: DiveLevel.BEGINNER },
  { color: 'bg-yellow-600', label: DiveLevel.INTERMEDIATE },
  { color: 'bg-red-600', label: DiveLevel.ADVANCED },
];

export const diveModalSpots: DiveModalSpot[] = [
  {
    lat: 20.327,
    lng: -87.3843,
    title: 'Cenote Dos Ojos',
    country: 'Mexico',
    rating: 5,
    reviewsCount: 967,
    level: DiveLevel.ADVANCED,
    description:
      'One of the most famous cenotes in the Yucatán Peninsula. Crystal-clear water and stunning cave formations.',
    stats: {
      temperature: '24-25°C',
      visibility: '80-100m',
      maxDepth: '10m',
      bestTime: 'Year-round',
    },
    attractions: ['Stalactites', 'Stalagmites', 'Halocline'],
    wildlife: ['Blind fish', 'Cave shrimp', 'Bats'],
  },
  {
    lat: -13.8333,
    lng: -171.7667,
    title: 'To Sua Ocean Trench',
    country: 'Samoa',
    rating: 4.8,
    reviewsCount: 542,
    level: DiveLevel.BEGINNER,
    description:
      'A natural swimming hole connected to the ocean, famous for its turquoise water and volcanic rock walls.',
    stats: {
      temperature: '26-28°C',
      visibility: '30-40m',
      maxDepth: '20m',
      bestTime: 'May–October',
    },
    attractions: ['Volcanic rock formations', 'Natural trench'],
    wildlife: ['Tropical fish'],
  },
  {
    lat: -8.45,
    lng: 119.95,
    title: 'Komodo National Park',
    country: 'Indonesia',
    rating: 5,
    reviewsCount: 1345,
    level: DiveLevel.INTERMEDIATE,
    description:
      'World-famous for strong currents, pristine coral reefs, and encounters with manta rays.',
    stats: {
      temperature: '25-28°C',
      visibility: '30m',
      maxDepth: '35m',
      bestTime: 'April–November',
    },
    attractions: ['Manta cleaning stations', 'Colorful reefs'],
    wildlife: ['Manta rays', 'Reef sharks', 'Sea turtles'],
  },
  {
    lat: 26.358,
    lng: 34.845,
    title: 'SS Thistlegorm Wreck',
    country: 'Egypt',
    rating: 4.9,
    reviewsCount: 876,
    level: DiveLevel.ADVANCED,
    description:
      'A legendary WWII shipwreck in the Red Sea, filled with military cargo and marine life.',
    stats: {
      temperature: '22-28°C',
      visibility: '20-30m',
      maxDepth: '30m',
      bestTime: 'March–May, September–November',
    },
    attractions: ['Motorcycles', 'Trucks', 'Train parts'],
    wildlife: ['Groupers', 'Barracudas', 'Lionfish'],
  },
  {
    lat: -17.533,
    lng: 177.05,
    title: 'Great White Wall',
    country: 'Fiji',
    rating: 5,
    reviewsCount: 665,
    level: DiveLevel.INTERMEDIATE,
    description:
      'A vertical drop-off covered in soft white corals, creating a glowing underwater wall.',
    stats: {
      temperature: '26-29°C',
      visibility: '25-40m',
      maxDepth: '30m',
      bestTime: 'April–October',
    },
    attractions: ['White soft corals', 'Deep wall dive'],
    wildlife: ['Reef fish', 'Moray eels'],
  },
  {
    lat: -27.0741,
    lng: 153.4175,
    title: 'Moreton Island',
    country: 'Australia',
    rating: 4.7,
    reviewsCount: 490,
    level: DiveLevel.BEGINNER,
    description:
      'Famous for the Tangalooma Wrecks, a cluster of sunken ships that attract rich marine life.',
    stats: {
      temperature: '21-26°C',
      visibility: '10-20m',
      maxDepth: '15m',
      bestTime: 'November–April',
    },
    attractions: ['Shipwrecks', 'Artificial reef'],
    wildlife: ['Wobbegong sharks', 'Dolphins', 'Sea turtles'],
  },
  {
    lat: 45.819,
    lng: 13.57,
    title: 'Brijuni Islands',
    country: 'Croatia',
    rating: 4.6,
    reviewsCount: 320,
    level: DiveLevel.BEGINNER,
    description:
      'A Mediterranean dive spot with clear waters, seagrass meadows, and historical underwater ruins.',
    stats: {
      temperature: '18-26°C',
      visibility: '10-30m',
      maxDepth: '20m',
      bestTime: 'May–September',
    },
    attractions: ['Seagrass meadows', 'Roman ruins'],
    wildlife: ['Octopuses', 'Seahorses', 'Moray eels'],
  },
  {
    lat: -17.624,
    lng: 168.215,
    title: 'SS President Coolidge',
    country: 'Vanuatu',
    rating: 5,
    reviewsCount: 410,
    level: DiveLevel.ADVANCED,
    description:
      'One of the largest and most accessible wrecks in the world, a former luxury liner turned troopship.',
    stats: {
      temperature: '26-28°C',
      visibility: '15-40m',
      maxDepth: '70m',
      bestTime: 'May–October',
    },
    attractions: ['Wreck penetration', 'Cannons', 'Cargo holds'],
    wildlife: ['Napoleon wrasse', 'Moray eels'],
  },
];
