'use client';

import DottedMap from 'dotted-map';
import { MapPin } from 'lucide-react';
import { DiveModalSpot, legendItems } from '@/lib/homepage/map';
import { useMemo, useState } from 'react';
import { DiveModal } from '@/components/layout/homepage/map/DiveModal';
import { Tooltip } from '@/components/ui/tooltip';
import { MapLegend } from '@/components/layout/homepage/map/MapLegend';
import { DiveSpotsGrid } from '@/components/layout/homepage/map/DiveSpotsGrid';

export interface WorldMapProps {
  spots: DiveModalSpot[];
}

export const WorldMap = ({ spots = [] }: WorldMapProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedSpot, setSelectedSpot] = useState<DiveModalSpot | null>(null);
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

  return (
    <>
      <div className="w-full aspect-[2/1] relative bg-gradient-to-br from-blue-950 to-slate-950 rounded-2xl border border-slate-600">
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

          return (
            <div
              key={i}
              className="absolute transition-all duration-300 scale-100 hover:cursor-pointer hover:z-50"
              style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setSelectedSpot(spot)}>
              <div
                className={`icon-size-lg rounded-full border-2 border-white shadow-lg transition-all duration-300 relative ${bgColor}`}>
                <MapPin className="icon-size-md text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              {hovered === i && <Tooltip title={spot.title} country={spot.country} />}
              <div className="absolute inset-0 rounded-full border-2 border-white animate-slow-ping"></div>
            </div>
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
      <DiveSpotsGrid spots={spots} onSelect={setSelectedSpot} />
    </>
  );
};
