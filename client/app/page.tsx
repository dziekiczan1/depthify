import { HeroSection } from '@/components/layout/homepage/hero/Hero';
import { Features } from '@/components/layout/homepage/features/Features';
import { Logbook } from '@/components/layout/homepage/logbook/Logbook';
import { Map } from '@/components/layout/homepage/map/Map';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Logbook />
      <Map />
    </>
  );
}
