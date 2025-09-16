'use client';

import { LucideX } from 'lucide-react';
import { StarRating } from '@/components/features/logbook/StarRating';
import { Button } from '@/components/ui/button';
import {
  DiveStatProps,
  diveStatsConfig,
} from '@/components/layout/homepage/logbook/diveStatsConfig';
import { DiveStatKey } from '@/lib/homepage/logbook';
import { DiveSpot } from '@/lib/homepage/dives';
import { cn } from '@/lib/utils';

interface DiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  spot: DiveSpot;
}

export const DiveModal: React.FC<DiveModalProps> = ({ isOpen, onClose, spot }) => {
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
            <LucideX className="icon-size-md" />
          </Button>

          <div className="flex flex-col items-start space-x-4">
            <h2 id="modal-title" className="text-2xl font-bold text-white mb-1">
              {spot.title}
            </h2>
            {spot.country && <p className="text-slate-400 mb-3">{spot.country}</p>}

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <StarRating rating={spot.rating} />
                {spot.reviewsCount && (
                  <span className="text-slate-300 ml-2">{spot.reviewsCount} review(s)</span>
                )}
              </div>
              {spot.level && (
                <div className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
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

          {spot.attractions && (
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-3">Główne atrakcje</h3>
              <div className="flex flex-wrap gap-2">
                {spot.attractions.map((attr: any, i: any) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    {attr}
                  </span>
                ))}
              </div>
            </div>
          )}

          {spot.wildlife && (
            <div>
              <h3 className="text-white font-semibold mb-3">Życie morskie</h3>
              <div className="flex flex-wrap gap-2">
                {spot.wildlife.map((w, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                    {w}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const ModalDiveStat = ({ icon, label, value, bg, iconColor, unit }: DiveStatProps) => {
  return (
    <div className="bg-slate-700/50 rounded-lg p-3 text-center">
      <div className={`flex justify-center mb-2 text-slate-200`}>{icon}</div>
      <div className="text-white font-semibold mb-1 text-sm">
        {value} {unit}
      </div>
      <div className="text-slate-400 text-xs">{label}</div>
    </div>
  );
};
