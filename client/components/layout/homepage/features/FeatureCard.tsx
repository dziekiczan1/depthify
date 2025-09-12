import {
  LucideIcon,
  BookOpen,
  BarChart3,
  Camera,
  MapPin,
  Users,
  Shield,
  Smartphone,
  Cloud,
} from 'lucide-react';
import { BaseFeature } from '@/lib/homepage/features';
import { Heading } from '@/components/ui/heading';

const icons: Record<string, LucideIcon> = {
  BookOpen,
  BarChart3,
  Camera,
  MapPin,
  Users,
  Shield,
  Smartphone,
  Cloud,
};

interface FeatureCardProps {
  feature: BaseFeature;
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  const Icon = icons[feature.icon];

  return (
    <div
      className="group p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100/50 focus:outline-none focus:ring focus:ring-blue-200"
      tabIndex={0}>
      <div
        className={`w-12 h-12 bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6 text-white" aria-hidden />
      </div>
      <Heading
        as="h3"
        title={feature.title}
        description={feature.description}
        size="sm"
        descriptionSize="sm"
        color="text-slate-900"
        descriptionClassName="leading-relaxed text-slate-600"
      />
    </div>
  );
};
