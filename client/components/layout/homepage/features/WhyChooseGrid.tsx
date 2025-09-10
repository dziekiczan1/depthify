import WhyChooseCard from './WhyChooseCard';
import { featuresHeadings, whyChooseData } from '@/lib/homepage/features';
import { Heading } from '@/components/ui/heading';
import { Grid } from '@/components/ui/grid';

export default function WhyChooseGrid() {
  const features = featuresHeadings.whychoose;
  return (
    <section className="gradient-cyan-soft rounded-3xl p-8 md:p-12">
      <Heading
        as="h3"
        title={features.title}
        description={features.description}
        className="mb-8"
        size="md"
        descriptionSize="md"
        descriptionClassName="text-blue-100"
        color="text-white"
        center
      />
      <Grid>
        {whyChooseData.map((feature) => (
          <WhyChooseCard key={feature.id} feature={feature} />
        ))}
      </Grid>
    </section>
  );
}
