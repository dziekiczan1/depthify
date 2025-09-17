import { CalendarIcon, CameraIcon, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DiveStatProps,
  diveStatsConfig,
} from '@/components/layout/homepage/logbook/diveStatsConfig';
import Link from 'next/link';
import { StarRating } from '@/components/features/logbook/StarRating';
import { DiveSpot } from '@/lib/homepage/dives';
import { DiveStatKey } from '@/lib/homepage/logbook';
import { Heading } from '@/components/ui/heading';

export const DiveCard = ({ dive }: { dive: DiveSpot }) => {
  return (
    <article
      className="p-8 hover:bg-slate-50 transition-colors"
      aria-labelledby={`dive-${dive.id}-title`}>
      <header className="flex justify-between items-start mb-4">
        <div>
          <Heading
            id={`dive-${dive.id}-title`}
            as="h3"
            title={`${dive.country} - ${dive.title}`}
            size="sm"
            headingClassName="text-lg font-semibold text-slate-900 !mb-1"
          />
          <div className="flex items-center text-slate-500 text-sm">
            <CalendarIcon className="icon-size-md mr-1" aria-hidden />
            <time dateTime={dive.date}>{dive.date}</time>
          </div>
        </div>

        <StarRating rating={dive.rating} inactiveColor="text-slate-300" />
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {diveStatsConfig
          .filter((stat) => stat.statKey !== DiveStatKey.BESTTIME)
          .map((stat) => (
            <DiveStat
              key={stat.statKey}
              {...stat}
              value={dive.stats[stat.label.toLowerCase() as keyof (typeof dive)['stats']] as string}
            />
          ))}
      </div>

      <p className="text-slate-600 text-sm mb-4 leading-relaxed">{dive.description}</p>

      <ul className="flex flex-wrap gap-2 mb-4" aria-label="Dive tags">
        {dive.attractions?.map((attraction) => (
          <li key={attraction}>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              {attraction}
            </span>
          </li>
        ))}
      </ul>

      <footer className="flex items-center justify-between">
        <div className="flex items-center text-slate-500 text-sm">
          <CameraIcon className="icon-size-md mr-2" aria-hidden />
          <span>{dive.photosCount} photos</span>
        </div>

        <Link
          href={`/dives/${dive.id}`}
          className="link link-default flex items-center gap-2"
          aria-label="Go to dive details">
          View details
          <ArrowRight size={16} aria-hidden />
        </Link>
      </footer>
    </article>
  );
};

export const DiveStat = ({ icon, label, value, bg, iconColor, unit }: DiveStatProps) => {
  return (
    <div className="flex items-center space-x-2 text-sm">
      <div
        className={cn('icon-bg-size-md rounded-lg flex items-center justify-center', bg)}
        aria-hidden>
        <span className={iconColor}>{icon}</span>
      </div>
      <dl>
        <dt className="text-slate-500">{label}</dt>
        <dd className="font-semibold text-slate-900">
          {value} {unit}
        </dd>
      </dl>
    </div>
  );
};
