type Stat = {
  value: string;
  label: string;
};

type StatsGridProps = {
  stats: Stat[];
  statsTitle: string;
  className?: string;
};

const StatsGrid = ({ stats, statsTitle, className }: StatsGridProps) => {
  return (
    <dl
      className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto ${className}`}
      aria-label={statsTitle}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <dt className="sr-only">{stat.label}</dt>
          <dd className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.value}</dd>
          <dd className="text-sm text-slate-500">{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
};

export default StatsGrid;
