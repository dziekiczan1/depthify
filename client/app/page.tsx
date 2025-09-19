import { HeroSection } from '@/components/layout/homepage/hero/Hero';
import { Features } from '@/components/layout/homepage/features/Features';
import { Logbook } from '@/components/layout/homepage/logbook/Logbook';
import { Map } from '@/components/layout/homepage/map/Map';
import { Reviews } from '@/components/layout/homepage/reviews/Reviews';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Logbook />
      <Map />
      <Reviews />
    </>
  );
}
