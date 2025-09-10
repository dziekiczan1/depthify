import WhyChooseCard from './WhyChooseCard';
import { featuresHeadings, whyChooseData } from '@/lib/homepage/features';
import { Heading } from '@/components/ui/heading';
import { Grid } from '@/components/ui/grid';

export default function WhyChooseGrid() {
  const features = featuresHeadings.whychoose;
  return (
    <section className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 md:p-12">
      <div className="text-center mb-8">
        <Heading
          as="h3"
          title={features.title}
          description={features.description}
          size="md"
          descriptionSize="md"
          descriptionClassName="text-blue-100"
          color="text-white"
          center
        />
      </div>

      <Grid>
        {whyChooseData.map((feature) => (
          <WhyChooseCard key={feature.id} feature={feature} />
        ))}
      </Grid>
    </section>
  );
}
