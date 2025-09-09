export interface SectionHeading {
  title: string;
  highlight?: string;
  description?: string;
}

export interface FeaturesHeadings {
  heading: SectionHeading;
  whychoose: SectionHeading;
}

export interface BaseFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export const featuresHeadings: FeaturesHeadings = {
  heading: {
    title: 'Everything you need',
    highlight: 'in one app',
    description:
      'Depthify offers a complete set of tools to manage your dives. From a simple logbook to advanced analytics.',
  },
  whychoose: {
    title: 'Why divers choose Depthify?',
    description: 'Over 10,000 divers worldwide already use our platform',
  },
};

export const featuresData: BaseFeature[] = [
  {
    id: 1,
    title: 'Digital Logbook',
    description: 'Record all your dives in one place. Add details, photos, and notes.',
    icon: 'BookOpen',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-600',
  },
  {
    id: 2,
    title: 'Analytics & Statistics',
    description: 'Track your progress, analyze depths, dive times, and more.',
    icon: 'BarChart3',
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-cyan-600',
  },
  {
    id: 3,
    title: 'Photo Gallery',
    description: 'Store and organize your dive photos. Create beautiful underwater albums.',
    icon: 'Camera',
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-indigo-600',
  },
  {
    id: 4,
    title: 'Dive Map',
    description: 'Mark dive spots on an interactive map. Discover new locations.',
    icon: 'MapPin',
    gradientFrom: 'from-teal-500',
    gradientTo: 'to-teal-600',
  },
  {
    id: 5,
    title: 'Community',
    description: 'Share experiences with other divers. Find dive buddies.',
    icon: 'Users',
    gradientFrom: 'from-indigo-500',
    gradientTo: 'to-indigo-600',
  },
  {
    id: 6,
    title: 'Security',
    description: 'Your data is safe thanks to encrypted cloud storage.',
    icon: 'Shield',
    gradientFrom: 'from-slate-500',
    gradientTo: 'to-slate-600',
  },
  {
    id: 7,
    title: 'Mobile App',
    description: 'Access your logbook anywhere. Sync across all your devices.',
    icon: 'Smartphone',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-emerald-600',
  },
  {
    id: 8,
    title: 'Cloud Backup',
    description: 'Automatic backups. Never lose your memories.',
    icon: 'Cloud',
    gradientFrom: 'from-sky-500',
    gradientTo: 'to-sky-600',
  },
];

export const whyChooseData: BaseFeature[] = [
  {
    id: 1,
    title: 'Quick Logging',
    description: 'Add a dive in less than 2 minutes',
    icon: 'Zap',
  },
  {
    id: 2,
    title: 'Certificates',
    description: 'Track your certifications and courses',
    icon: 'Award',
  },
  {
    id: 3,
    title: 'Offline Mode',
    description: 'Work without internet and sync later',
    icon: 'Globe',
  },
  {
    id: 4,
    title: 'Favorite Spots',
    description: 'Mark and revisit your favorite dive locations',
    icon: 'Heart',
  },
];
