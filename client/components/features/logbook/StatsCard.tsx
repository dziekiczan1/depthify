import { statsData, StatsData } from '@/lib/homepage/logbook';

export const StatsCard = () => {
  return (
    <section
      aria-labelledby="stats-heading"
      className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6">
      <h3 id="stats-heading" className="text-lg font-semibold text-slate-900 mb-4">
        Your Stats
      </h3>
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
