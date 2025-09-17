import { StarRating } from '@/components/features/logbook/StarRating';
import { DiveSpot } from '@/lib/homepage/dives';
import { Heading } from '@/components/ui/heading';

interface DiveSpotCardProps {
  spot: DiveSpot;
  onClick?: (spot: DiveSpot) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const DiveSpotCard = ({ spot, onClick, onMouseEnter, onMouseLeave }: DiveSpotCardProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.(spot);
    }
  };

  return (
    <li
      tabIndex={0}
      aria-label={`${spot.title}, ${spot.country}. Rated ${spot.rating} out of 5 with ${spot.reviewsCount} reviews.`}
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700
                 hover:border-blue-500 focus-ring transition-all duration-300 cursor-pointer group"
      onClick={() => onClick?.(spot)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={handleKeyDown}>
      <Heading
        as="h3"
        title={spot.title}
        size="xs"
        headingClassName="text-white font-semibold mb-2"
      />
      <p className="text-slate-400 text-sm mb-3">{spot.country}</p>

      <div className="flex items-center justify-between">
        <StarRating rating={spot.rating} />

        <span className="text-slate-400 text-sm" aria-label={`${spot.reviewsCount} reviews`}>
          {spot.reviewsCount} reviews
        </span>
      </div>
    </li>
  );
};
