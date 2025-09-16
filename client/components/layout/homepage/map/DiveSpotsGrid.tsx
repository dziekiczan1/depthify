import { DiveSpotCard } from '@/components/layout/homepage/map/DiveSpotCard';
import { DiveSpot } from '@/lib/homepage/dives';

export interface DiveSpotsGridProps {
  spots: DiveSpot[];
  onSelect?: (spot: DiveSpot) => void;
}

export const DiveSpotsGrid = ({ spots = [], onSelect }: DiveSpotsGridProps) => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {spots.map((spot, idx) => (
        <DiveSpotCard key={idx} spot={spot} onClick={onSelect} />
      ))}
    </div>
  );
};
