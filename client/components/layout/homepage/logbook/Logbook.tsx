import { LayoutContainer } from '@/components/layout/LayoutContainer';
import { Heading } from '@/components/ui/heading';
import { logbookHeading, logbookSubHeading } from '@/lib/homepage/logbook';
import { DiveList } from '@/components/features/logbook/DiveList';
import { StatsCard } from '@/components/features/logbook/StatsCard';
import { AchievementsCard } from '@/components/features/logbook/AchievementsCard';
import { diveSpots } from '@/lib/homepage/dives';

export const Logbook = () => {
  return (
    <section id="logbook" className="section-default">
      <LayoutContainer>
        <Heading
          as="h2"
          title={logbookHeading.title}
          highlight={logbookHeading.highlight}
          description={logbookHeading.description}
          size="lg"
          descriptionSize="lg"
          gradient
          center
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
              <Heading
                as="h3"
                title={logbookSubHeading.title}
                description={logbookSubHeading.description}
                size="base"
                descriptionSize="base"
                className="gradient-cyan-soft p-8"
                headingClassName="text-white"
                descriptionClassName="text-blue-100"
              />
              <DiveList dives={diveSpots} />
            </div>
          </div>
          <div className="space-y-6">
            <StatsCard />
            <AchievementsCard />
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
};
