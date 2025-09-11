import { LayoutContainer } from '@/components/layout/LayoutContainer';
import { Heading } from '@/components/ui/heading';
import { FeaturesGrid } from '@/components/layout/homepage/features/FeaturesGrid';
import { WhyChooseGrid } from '@/components/layout/homepage/features/WhyChooseGrid';
import { featuresHeadings } from '@/lib/homepage/features';

export const Features = () => {
  const features = featuresHeadings.heading;
  return (
    <section id="features" className="section-default bg-white">
      <LayoutContainer>
        <Heading
          as="h2"
          title={features.title}
          highlight={features.highlight}
          description={features.description}
          size="lg"
          descriptionSize="lg"
          gradient
          center
        />
        <FeaturesGrid />
        <WhyChooseGrid />
      </LayoutContainer>
    </section>
  );
};
