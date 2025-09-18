import { SectionHeading } from '@/lib/homepage/features';

export enum DiveLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
}

export interface MapLegendItem {
  color: string;
  darkBg: string;
  textColor?: string;
  label: string;
}

export interface TagListHeading {
  attractions: string;
  sealife: string;
}

export const mapHeading: SectionHeading = {
  title: 'Discover the best',
  highlight: 'dive sites in the world',
  description:
    'An interactive map with the most beautiful dive sites across the globe. Click on a pin to explore details of each location.',
};

export const tagListHeadings: TagListHeading = {
  attractions: 'Main attractions',
  sealife: 'Sea life',
};

export const mapLegendAriaLabel: string = 'Diver skill levels';

export const legendItems: MapLegendItem[] = [
  {
    color: 'bg-green-600',
    darkBg: 'bg-green-600/20',
    textColor: 'text-green-500',
    label: DiveLevel.BEGINNER,
  },
  {
    color: 'bg-yellow-600',
    darkBg: 'bg-yellow-600/20',
    textColor: 'text-yellow-500',
    label: DiveLevel.INTERMEDIATE,
  },
  {
    color: 'bg-red-600',
    darkBg: 'bg-red-600/20',
    textColor: 'text-red-500',
    label: DiveLevel.ADVANCED,
  },
];
