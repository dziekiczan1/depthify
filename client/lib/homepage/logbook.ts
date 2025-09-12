import { SectionHeading } from '@/lib/homepage/features';

export interface DiveLogEntry {
  id: string;
  title: string;
  date: string;
  rating: number;
  depth: string;
  time: string;
  temperature: string;
  visibility: string;
  description: string;
  tags: string[];
  photosCount: number;
}

export interface StatsData {
  label: string;
  value: string;
  color: string;
}

export interface AchievementsData {
  id: string;
  title: string;
  description: string;
  bgColor: string;
  icon: string;
}

export const logbookHeading: SectionHeading = {
  title: 'Your Digital',
  highlight: 'Dive Logbook',
  description:
    'See what a modern dive logbook looks like. All the details of your dives presented in a clear and intuitive way.',
};

export const logbookSubHeading: SectionHeading = {
  title: 'Recent Dives',
  description: 'Your latest underwater adventures',
};

export enum DiveStatLabel {
  Depth = 'Depth',
  Time = 'Time',
  Temperature = 'Temperature',
  Visibility = 'Visibility',
}

export const demoDives: DiveLogEntry[] = [
  {
    id: '1',
    title: 'Maldives - Banana Reef',
    date: '2024-08-25',
    rating: 5,
    depth: '28m',
    time: '45 min',
    temperature: '28°C',
    visibility: '30m',
    description: 'An amazing dive with whale sharks! Excellent visibility, crystal-clear water.',
    tags: ['Whale Shark', 'Manta', 'Parrotfish', 'Moray Eels'],
    photosCount: 12,
  },
  {
    id: '2',
    title: 'Egipt - Thistlegorm Wreck',
    date: '2024-07-10',
    rating: 4,
    depth: '30m',
    time: '50 min',
    temperature: '26°C',
    visibility: '20m',
    description:
      'A wreck dive full of history and marine life. Motorbikes and motorcycles still visible inside the wreck.',
    tags: ['Wreck', 'Turtles', 'Barracudas'],
    photosCount: 18,
  },
  {
    id: '3',
    title: 'Chorwacja - Blue Cave',
    date: '2024-06-05',
    rating: 3,
    depth: '18m',
    time: '40 min',
    temperature: '24°C',
    visibility: '15m',
    description: 'A calm dive in a beautiful cave illuminated by natural light.',
    tags: ['Cave', 'Octopus', 'Crabs'],
    photosCount: 8,
  },
];

export const statsData: StatsData[] = [
  { label: 'Total Dives', value: '127', color: 'text-blue-600' },
  { label: 'Deepest Dive', value: '42m', color: 'text-cyan-600' },
  { label: 'Total Time Underwater', value: '89h', color: 'text-teal-600' },
  { label: 'Longest Dive', value: '2h 30m', color: 'text-indigo-600' },
];

export const achievementsData: AchievementsData[] = [
  {
    id: 'deep-explorer',
    title: 'Deep Explorer',
    description: 'Dive below 30m',
    bgColor: 'bg-yellow-400',
    icon: 'star',
  },
  {
    id: 'photographer',
    title: 'Photographer',
    description: '100+ underwater photos',
    bgColor: 'bg-blue-400',
    icon: 'camera',
  },
];
