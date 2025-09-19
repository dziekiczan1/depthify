import { SectionHeading } from '@/lib/homepage/features';

export interface Review {
  rating: number;
  tag: string;
  text: string;
  avatar: {
    firstname: string;
    surname: string;
    role: string;
    location: string;
  };
}

export const reviewsHeading: SectionHeading = {
  title: 'Divers around the world',
  highlight: 'share their experiences',
  description:
    'Join thousands of happy divers from around the world who have already discovered the benefits Depthify brings to every dive.',
};

export const reviewsHome: Review[] = [
  {
    rating: 5,
    tag: 'Best App for Instructors',
    text: 'Depthify completely changed how I manage my dives. The intuitive interface and detailed analytics help me track my students’ progress effortlessly.',
    avatar: {
      firstname: 'Anna',
      surname: 'Kowalska',
      role: 'PADI Instructor',
      location: 'Warsaw, Poland',
    },
  },
  {
    rating: 5,
    tag: 'Discovering New Spots',
    text: 'Since using Depthify, my dives have become more organized. The map feature has introduced me to several new dive sites I never knew existed.',
    avatar: {
      firstname: 'Marcin',
      surname: 'Nowak',
      role: 'Recreational Diver',
      location: 'Gdansk, Poland',
    },
  },
  {
    rating: 4,
    tag: 'Detailed Analytics',
    text: 'The dive logging and statistics are extremely helpful. I would love a few more customization options, but overall it’s a fantastic tool.',
    avatar: {
      firstname: 'Emily',
      surname: 'Smith',
      role: 'Dive Enthusiast',
      location: 'Miami, USA',
    },
  },
  {
    rating: 5,
    tag: 'Perfect for Beginners',
    text: 'Depthify makes learning to dive fun and stress-free. The tutorials and step-by-step guidance boosted my confidence underwater.',
    avatar: {
      firstname: 'James',
      surname: 'Brown',
      role: 'Beginner Diver',
      location: 'London, UK',
    },
  },
  {
    rating: 4,
    tag: 'Dive Planning Made Easy',
    text: 'Logging dives and sharing experiences with friends has never been simpler. The interface is clean, intuitive, and enjoyable to use.',
    avatar: {
      firstname: 'Sofia',
      surname: 'Garcia',
      role: 'Professional Diver',
      location: 'Barcelona, Spain',
    },
  },
  {
    rating: 5,
    tag: 'Adventure Companion',
    text: 'I take Depthify on every dive trip. It helps me plan dives, log details, and remember the best spots for future adventures.',
    avatar: {
      firstname: 'Liam',
      surname: 'Johnson',
      role: 'Adventure Diver',
      location: 'Sydney, Australia',
    },
  },
];
