import LayoutContainer from '@/components/layout/LayoutContainer';
import { hero } from '@/lib/homepage/hero';
import StatsGrid from '@/components/layout/homepage/hero/StatsGrid';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';
import HeroCTA from '@/components/layout/homepage/hero/HeroCTA';

export const HeroSection = () => {
  const heroHeading = hero.heading;
  return (
    <section id="hero" className="section-default py-20">
      <LayoutContainer>
        <div className="text-center">
          <Badge text="Nowa era cyfrowych logbooków nurkowych" color="blue" showPulse />
          <Heading
            title={heroHeading.title}
            highlight={heroHeading.highlight}
            subtitle={heroHeading.subtitle}
            description={heroHeading.description}
            size="xl"
            descriptionSize="xl"
            gradient
            center
          />
          <HeroCTA />
          <StatsGrid stats={hero.stats} statsTitle={hero.statsTitle} />
        </div>
      </LayoutContainer>
    </section>
  );
};
