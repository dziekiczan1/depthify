import { LucideIcon, Zap, Award, Globe, Heart } from 'lucide-react';
import { BaseFeature } from '@/lib/homepage/features';
import { Heading } from '@/components/ui/heading';

const icons: Record<string, LucideIcon> = {
  Zap,
  Award,
  Globe,
  Heart,
};

interface WhyChooseCardProps {
  feature: BaseFeature;
}

export default function WhyChooseCard({ feature }: WhyChooseCardProps) {
  const Icon = icons[feature.icon];

  return (
    <div
      className="text-center group p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:shadow-lg hover:border-white/40 focus-ring"
      tabIndex={0}>
      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
        <Icon className="w-6 h-6 text-white" aria-hidden />
      </div>
      <Heading
        as="h4"
        title={feature.title}
        description={feature.description}
        size="xs"
        descriptionSize="sm"
        color="text-white"
        descriptionClassName="text-blue-100 leading-relaxed"
      />
    </div>
  );
}
