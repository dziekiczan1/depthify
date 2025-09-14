import { diveStatsHeading, statsData, StatsData } from '@/lib/homepage/logbook';
import { Heading } from '@/components/ui/heading';

export const StatsCard = () => {
  return (
    <section
      aria-labelledby="stats-heading"
      className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6">
      <Heading
        as="h3"
        title={diveStatsHeading.title}
        size="sm"
        headingClassName="mb-4 text-slate-900 font-semibold"
      />
      <dl className="space-y-4">
        {statsData.map((stat: StatsData, i: number) => (
          <div key={i} className="flex justify-between items-center">
            <dt className="text-slate-600">{stat.label}</dt>
            <dd className={`text-2xl font-bold ${stat.color}`}>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
