'use client';

import DottedMap from 'dotted-map';
import { MapPin } from 'lucide-react';
import { legendItems } from '@/lib/homepage/map';
import { useMemo, useState } from 'react';
import { DiveModal } from '@/components/layout/homepage/map/DiveModal';
import { Tooltip } from '@/components/ui/tooltip';
import { MapLegend } from '@/components/layout/homepage/map/MapLegend';
import { DiveSpotsGrid } from '@/components/layout/homepage/map/DiveSpotsGrid';
import { DiveSpot } from '@/lib/homepage/dives';

export interface WorldMapProps {
  spots: DiveSpot[];
}

export const WorldMap = ({ spots = [] }: WorldMapProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedSpot, setSelectedSpot] = useState<DiveSpot | null>(null);
  const map = useMemo(() => new DottedMap({ height: 80, grid: 'diagonal' }), []);

  const svgMap = useMemo(
    () =>
      map.getSVG({
        radius: 0.22,
        color: '#475569',
        shape: 'circle',
        backgroundColor: 'transparent',
      }),
    [map]
  );

  const projectPoint = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 100;

    const latRad = (lat * Math.PI) / 180;
    const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
    const y = ((1 - mercN / Math.PI) / 2) * 100;

    return { x, y };
  };

  const handleKeyDown = (e: React.KeyboardEvent, spot: DiveSpot) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedSpot(spot);
    }
  };

  return (
    <>
      <div
        className="w-full aspect-[2/1] relative bg-gradient-to-br from-blue-950 to-slate-950 rounded-2xl border border-slate-600"
        role="region"
        aria-label="World map with dive spots">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="h-full w-full pointer-events-none select-none"
          alt="World map"
          draggable={false}
        />

        {spots.map((spot, i) => {
          const { x, y } = projectPoint(spot.lat, spot.lng);
          const bgColor =
            legendItems.find((item) => item.label === spot.level)?.color || 'bg-gray-700';
          const isHovered = hovered === i;

          return (
            <button
              key={spot.id}
              type="button"
              aria-label={`${spot.title}, ${spot.country}, ${spot.level} dive site`}
              className={`absolute transition-all duration-300 scale-100 rounded-full focus-ring
                ${isHovered ? 'scale-105 cursor-pointer z-30' : ''}`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setSelectedSpot(spot)}
              onKeyDown={(e) => handleKeyDown(e, spot)}>
              <div
                className={`icon-size-lg rounded-full border-2 border-white shadow-lg transition-all duration-300 relative ${bgColor}`}>
                <MapPin className="icon-size-sm text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              {isHovered && <Tooltip title={spot.title} country={spot.country} />}
              <div
                className={`absolute inset-0 rounded-full border-2 ${
                  isHovered ? 'border-violet-400' : 'border-white'
                } animate-slow-ping`}
              />
            </button>
          );
        })}
      </div>
      {selectedSpot && (
        <DiveModal
          isOpen={!!selectedSpot}
          spot={selectedSpot}
          onClose={() => setSelectedSpot(null)}
        />
      )}

      <MapLegend />
      <DiveSpotsGrid spots={spots} onSelect={setSelectedSpot} onHoverIndex={(i) => setHovered(i)} />
    </>
  );
};
