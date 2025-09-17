import { DiveSpotCard } from '@/components/layout/homepage/map/DiveSpotCard';
import { DiveSpot } from '@/lib/homepage/dives';

export interface DiveSpotsGridProps {
  spots: DiveSpot[];
  onSelect?: (spot: DiveSpot) => void;
  onHoverIndex?: (index: number | null) => void;
}

export const DiveSpotsGrid = ({ spots = [], onSelect, onHoverIndex }: DiveSpotsGridProps) => {
  return (
    <ul
      className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      role="list"
      aria-label="Dive spots">
      {spots.map((spot, idx) => (
        <DiveSpotCard
          key={spot.id}
          spot={spot}
          onClick={onSelect}
          onMouseEnter={() => onHoverIndex?.(idx)}
          onMouseLeave={() => onHoverIndex?.(null)}
        />
      ))}
    </ul>
  );
};
