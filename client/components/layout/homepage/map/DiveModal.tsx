'use client';

import { LucideX } from 'lucide-react';
import React from 'react';
import { DiveModalSpot } from '@/lib/homepage/map';
import { StarRating } from '@/components/features/logbook/StarRating';

interface DiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  spot: DiveModalSpot;
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
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-600 transition-colors"
            aria-label="Close modal">
            <LucideX className="icon-size-md" />
          </button>

          <div className="flex items-start space-x-4">
            <div>
              <h2 id="modal-title" className="text-2xl font-bold text-white mb-1">
                {spot.title}
              </h2>
              {spot.country && <p className="text-slate-400 mb-3">{spot.country}</p>}

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <StarRating rating={spot.rating} />
                  {spot.reviewsCount && (
                    <span className="text-slate-300 ml-2">({spot.reviewsCount} opinii)</span>
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
        </div>

        <div className="p-6">
          <p className="text-slate-300 mb-6 leading-relaxed">{spot.description}</p>

          {spot.stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {spot.stats.temperature && (
                <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                  <div className="text-white font-semibold text-sm">{spot.stats.temperature}</div>
                  <div className="text-slate-400 text-xs">Temperatura</div>
                </div>
              )}
              {spot.stats.visibility && (
                <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                  <div className="text-white font-semibold text-sm">{spot.stats.visibility}</div>
                  <div className="text-slate-400 text-xs">Widoczność</div>
                </div>
              )}
              {spot.stats.maxDepth && (
                <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                  <div className="text-white font-semibold text-sm">{spot.stats.maxDepth}</div>
                  <div className="text-slate-400 text-xs">Maks. głębokość</div>
                </div>
              )}
              {spot.stats.bestTime && (
                <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                  <div className="text-white font-semibold text-sm">{spot.stats.bestTime}</div>
                  <div className="text-slate-400 text-xs">Najlepszy czas</div>
                </div>
              )}
            </div>
          )}

          {spot.attractions && (
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-3">Główne atrakcje</h3>
              <div className="flex flex-wrap gap-2">
                {spot.attractions.map((attr, i) => (
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

          <div className="w-full mt-8">
            <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200">
              Dodaj do planów
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
