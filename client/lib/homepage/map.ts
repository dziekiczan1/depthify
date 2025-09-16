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
