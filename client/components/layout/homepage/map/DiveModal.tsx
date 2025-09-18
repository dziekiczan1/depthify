'use client';

import { Camera, Fish, LucideX } from 'lucide-react';
import { StarRating } from '@/components/features/logbook/StarRating';
import { Button } from '@/components/ui/button';
import {
  DiveStatProps,
  diveStatsConfig,
} from '@/components/layout/homepage/logbook/diveStatsConfig';
import { DiveStatKey } from '@/lib/homepage/logbook';
import { DiveSpot } from '@/lib/homepage/dives';
import { Heading } from '@/components/ui/heading';
import { legendItems, tagListHeadings } from '@/lib/homepage/map';
import { TagList } from '@/components/features/logbook/TagList';

interface DiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  spot: DiveSpot;
}

export const DiveModal: React.FC<DiveModalProps> = ({ isOpen, onClose, spot }) => {
  const legend = legendItems.find((item) => item.label === spot.level);
  const levelClass = `${legend?.darkBg ?? 'bg-gray-600/20'} ${legend?.textColor ?? 'text-white'}`;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title">
      <div className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
        <div className="relative p-6 border-b border-slate-700">
          <Button
            onClick={onClose}
            variant="plain"
            size="sm"
            className="absolute top-4 right-4 icon-bg-size-md rounded-full bg-slate-700 text-slate-400 hover:text-white hover:bg-slate-600"
            aria-label="Close modal">
            <LucideX className="icon-size-sm" />
          </Button>

          <div className="flex flex-col items-start space-x-4">
            <Heading
              id="modal-title"
              as="h2"
              title={spot.title}
              size="sm"
              className="!w-fit"
              headingClassName="!text-2xl font-bold text-white"
            />
            {spot.country && <p className="text-slate-400 mb-3">{spot.country}</p>}

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <StarRating rating={spot.rating} />
                {spot.reviewsCount && (
                  <span className="text-slate-300 ml-2">{spot.reviewsCount} review(s)</span>
                )}
              </div>
              {spot.level && (
                <div
                  className={`px-3 py-1 rounded-full text-xs font-medium ${levelClass}`}
                  aria-label={`Dive level: ${spot.level}`}>
                  {spot.level}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-slate-300 mb-6 leading-relaxed">{spot.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {diveStatsConfig
              .filter((stat) => stat.statKey !== DiveStatKey.TIME)
              .map((stat) => (
                <ModalDiveStat
                  key={stat.statKey}
                  {...stat}
                  value={
                    stat.statKey === DiveStatKey.BESTTIME
                      ? (spot.bestTime as string)
                      : (spot.stats[stat.statKey as keyof typeof spot.stats] as string)
                  }
                />
              ))}
          </div>
          <TagList
            icon={<Camera className="icon-size-md text-blue-400" />}
            items={spot.attractions}
            color="blue"
            title={tagListHeadings.attractions}
            className="mb-6"
          />
          <TagList
            icon={<Fish className="icon-size-md text-cyan-400" />}
            items={spot.wildlife}
            color="cyan"
            title={tagListHeadings.sealife}
          />
        </div>
      </div>
    </div>
  );
};

export const ModalDiveStat = ({ icon, label, value, unit }: DiveStatProps) => {
  return (
    <div className="bg-slate-700/50 rounded-lg p-3 text-center">
      <div className="flex justify-center mb-2 text-slate-400" aria-hidden="true">
        {icon}
      </div>
      <dl>
        <dt className="sr-only">{label}</dt>
        <dd className="text-white font-semibold mb-1 text-sm">
          {value}
          {unit}
        </dd>
      </dl>
      <div className="text-slate-400 text-xs">{label}</div>
    </div>
  );
};
