'use client';

import LayoutContainer from '@/components/layout/LayoutContainer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';
import { useRouter } from 'next/navigation';
import { hero } from '@/lib/homepage/hero';
import StatsGrid from '@/components/layout/homepage/hero/StatsGrid';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';

export const HeroSection = () => {
  const router = useRouter();

  return (
    <section id="hero" className="section-default py-20">
      <LayoutContainer>
        <div className="text-center">
          <Badge text="Nowa era cyfrowych logbooków nurkowych" color="blue" showPulse />
          <Heading
            title={hero.heading.title}
            highlight={hero.heading.highlight}
            subtitle={hero.heading.subtitle}
            description={hero.heading.description}
            size="xl"
            descriptionSize="xl"
            gradient
            center
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => router.push(ROUTES.LOGIN)}
              className="flex justify-center items-center gap-2"
              size="lg"
              aria-label={`Register account`}>
              Register for free
              <ArrowRight
                size={24}
                className="text-white transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Button>
          </div>
          <StatsGrid stats={hero.stats} statsTitle={hero.statsTitle} />
        </div>
      </LayoutContainer>
    </section>
  );
};
