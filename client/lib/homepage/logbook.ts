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

export const diveStatsHeading: SectionHeading = {
  title: 'Your Stats',
};

export const achievementsCardHeading: SectionHeading = {
  title: 'Recent Achievements',
};

export enum DiveStatLabel {
  DEPTH = 'Depth',
  TIME = 'Time',
  TEMPERATURE = 'Temperature',
  VISIBILITY = 'Visibility',
  BESTTIME = 'Best Time',
}

export enum DiveStatKey {
  DEPTH = 'depth',
  TIME = 'time',
  TEMPERATURE = 'temperature',
  VISIBILITY = 'visibility',
  BESTTIME = 'bestTime',
}

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
