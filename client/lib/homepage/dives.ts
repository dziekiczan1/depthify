import { DiveLevel } from '@/lib/homepage/map';

export enum DiveStatUnit {
  METER = 'm',
  CELSIUS = '°C',
  MINUTES = 'min',
}

export interface DiveSpot {
  id: number;
  lat: number;
  lng: number;
  title: string;
  country: string;
  date: string;
  rating: number;
  reviewsCount: number;
  level: string;
  description: string;
  stats: {
    temperature: string;
    visibility: string;
    depth: string;
    time: string;
  };
  bestTime: string;
  attractions?: string[];
  wildlife?: string[];
  photosCount: number;
}

export const diveSpots: DiveSpot[] = [
  {
    id: 1,
    lat: 20.327,
    lng: -87.3843,
    title: 'Cenote Dos Ojos',
    country: 'Mexico',
    date: '2023-08-15',
    rating: 5,
    reviewsCount: 967,
    level: DiveLevel.ADVANCED,
    description:
      'One of the most famous cenotes in the Yucatán Peninsula. Crystal-clear water and stunning cave formations.',
    stats: {
      temperature: '24',
      visibility: '80',
      depth: '10',
      time: '35',
    },
    bestTime: 'Nov–May',
    attractions: ['Stalactites', 'Stalagmites', 'Halocline'],
    wildlife: ['Blind fish', 'Cave shrimp', 'Bats'],
    photosCount: 10,
  },
  {
    id: 2,
    lat: -13.8333,
    lng: -171.7667,
    title: 'To Sua Ocean Trench',
    country: 'Samoa',
    date: '2023-09-10',
    rating: 4.8,
    reviewsCount: 542,
    level: DiveLevel.BEGINNER,
    description:
      'A natural swimming hole connected to the ocean, famous for its turquoise water and volcanic rock walls.',
    stats: {
      temperature: '27',
      visibility: '35',
      depth: '20',
      time: '34',
    },
    bestTime: 'Dec–Feb',
    attractions: ['Volcanic rock formations', 'Natural trench'],
    wildlife: ['Tropical fish'],
    photosCount: 13,
  },
  {
    id: 3,
    lat: -8.45,
    lng: 119.95,
    title: 'Komodo National Park',
    country: 'Indonesia',
    date: '2023-10-05',
    rating: 5,
    reviewsCount: 1345,
    level: DiveLevel.INTERMEDIATE,
    description:
      'World-famous for strong currents, pristine coral reefs, and encounters with manta rays.',
    stats: {
      temperature: '26',
      visibility: '30',
      depth: '35',
      time: '40',
    },
    bestTime: 'Apr–Nov',
    attractions: ['Manta cleaning stations', 'Colorful reefs'],
    wildlife: ['Manta rays', 'Reef sharks', 'Sea turtles'],
    photosCount: 8,
  },
  {
    id: 4,
    lat: 26.358,
    lng: 34.845,
    title: 'SS Thistlegorm Wreck',
    country: 'Egypt',
    date: '2023-11-20',
    rating: 4.9,
    reviewsCount: 876,
    level: DiveLevel.ADVANCED,
    description:
      'A legendary WWII shipwreck in the Red Sea, filled with military cargo and marine life.',
    stats: {
      temperature: '25',
      visibility: '25',
      depth: '30',
      time: '42',
    },
    bestTime: 'Mar–May',
    attractions: ['Motorcycles', 'Trucks', 'Train parts'],
    wildlife: ['Groupers', 'Barracudas', 'Lionfish'],
    photosCount: 15,
  },
  {
    id: 5,
    lat: -17.533,
    lng: 177.05,
    title: 'Great White Wall',
    country: 'Fiji',
    date: '2024-01-15',
    rating: 5,
    reviewsCount: 665,
    level: DiveLevel.INTERMEDIATE,
    description:
      'A vertical drop-off covered in soft white corals, creating a glowing underwater wall.',
    stats: {
      temperature: '27',
      visibility: '30',
      depth: '30',
      time: '45',
    },
    bestTime: 'Apr–Oct',
    attractions: ['White soft corals', 'Deep wall dive'],
    wildlife: ['Reef fish', 'Moray eels'],
    photosCount: 20,
  },
  {
    id: 6,
    lat: -27.0741,
    lng: 153.4175,
    title: 'Moreton Island',
    country: 'Australia',
    date: '2024-02-10',
    rating: 4.7,
    reviewsCount: 490,
    level: DiveLevel.BEGINNER,
    description:
      'Famous for the Tangalooma Wrecks, a cluster of sunken ships that attract rich marine life.',
    stats: {
      temperature: '24',
      visibility: '15',
      depth: '15',
      time: '38',
    },
    bestTime: 'Nov–Apr',
    attractions: ['Shipwrecks', 'Artificial reef'],
    wildlife: ['Wobbegong sharks', 'Dolphins', 'Sea turtles'],
    photosCount: 5,
  },
  {
    id: 7,
    lat: 45.819,
    lng: 13.57,
    title: 'Brijuni Islands',
    country: 'Croatia',
    date: '2024-03-18',
    rating: 4.6,
    reviewsCount: 320,
    level: DiveLevel.BEGINNER,
    description:
      'A Mediterranean dive spot with clear waters, seagrass meadows, and historical underwater ruins.',
    stats: {
      temperature: '22',
      visibility: '20',
      depth: '20',
      time: '36',
    },
    bestTime: 'May–Sep',
    attractions: ['Seagrass meadows', 'Roman ruins'],
    wildlife: ['Octopuses', 'Seahorses', 'Moray eels'],
    photosCount: 7,
  },
  {
    id: 8,
    lat: -17.624,
    lng: 168.215,
    title: 'SS President Coolidge',
    country: 'Vanuatu',
    date: '2024-04-22',
    rating: 5,
    reviewsCount: 410,
    level: DiveLevel.ADVANCED,
    description:
      'One of the largest and most accessible wrecks in the world, a former luxury liner turned troopship.',
    stats: {
      temperature: '27',
      visibility: '30',
      depth: '70',
      time: '50',
    },
    bestTime: 'May–Oct',
    attractions: ['Wreck penetration', 'Cannons', 'Cargo holds'],
    wildlife: ['Napoleon wrasse', 'Moray eels'],
    photosCount: 11,
  },
];
