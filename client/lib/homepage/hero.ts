export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroHeading {
  title: string;
  highlight?: string;
  subtitle?: string;
  description?: string;
}

export interface HeroData {
  heading: HeroHeading;
  statsTitle: string;
  stats: HeroStat[];
}

export const hero: HeroData = {
  heading: {
    title: 'Your diving adventures',
    highlight: 'have never been',
    subtitle: 'this organized',
    description:
      'Log your dives, track key statistics, and gain insights into your progress. Depthify helps you organize, analyze, and elevate your underwater experience.',
  },
  statsTitle: 'Application statistics',
  stats: [
    { value: '25k+', label: 'Active Divers' },
    { value: '50k+', label: 'Dive Photos Uploaded' },
    { value: '120k+', label: 'Dives Logged' },
    { value: '200+', label: 'Dive Locations' },
  ],
};
