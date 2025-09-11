import { HeroSection } from '@/components/layout/homepage/hero/Hero';
import { Features } from '@/components/layout/homepage/features/Features';
import { Logbook } from '@/components/layout/homepage/logbook/Logbook';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Logbook />
    </>
  );
}
