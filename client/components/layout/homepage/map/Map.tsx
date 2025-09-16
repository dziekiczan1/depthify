import { LayoutContainer } from '@/components/layout/LayoutContainer';
import { Heading } from '@/components/ui/heading';
import { WorldMap } from '@/components/layout/homepage/map/WorldMap';
import { mapHeading } from '@/lib/homepage/map';
import { diveSpots } from '@/lib/homepage/dives';

export const Map = () => {
  return (
    <section id="map" className="section-default gradient-dark-cyan">
      <LayoutContainer>
        <Heading
          as="h2"
          title={mapHeading.title}
          highlight={mapHeading.highlight}
          description={mapHeading.description}
          size="lg"
          descriptionSize="lg"
          headingClassName="text-white"
          gradientVariant="cyanLight"
          descriptionClassName="text-blue-100"
          gradient
          center
        />
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700">
          <WorldMap spots={diveSpots} />
        </div>
      </LayoutContainer>
    </section>
  );
};
