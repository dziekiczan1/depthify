import { FeatureCard } from './FeatureCard';
import { featuresData } from '@/lib/homepage/features';
import { Grid } from '@/components/ui/grid';

export const FeaturesGrid = () => {
  return (
    <Grid className="mb-16">
      {featuresData.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </Grid>
  );
};
