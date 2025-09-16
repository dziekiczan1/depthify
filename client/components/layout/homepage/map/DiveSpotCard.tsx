import { StarRating } from '@/components/features/logbook/StarRating';
import { DiveSpot } from '@/lib/homepage/dives';

interface DiveSpotCardProps {
  spot: DiveSpot;
  onClick?: (spot: DiveSpot) => void;
}

export const DiveSpotCard = ({ spot, onClick }: DiveSpotCardProps) => {
  return (
    <article
      role="listitem"
      aria-label={`${spot.title}, ${spot.country}, rated ${spot.rating} out of 5 with ${spot.reviewsCount} reviews`}
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700
                 hover:border-blue-500 transition-all duration-300 cursor-pointer group"
      onClick={() => onClick?.(spot)}>
      <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">
        {spot.title}
      </h3>
      <p className="text-slate-400 text-sm mb-3">{spot.country}</p>

      <div className="flex items-center justify-between">
        <StarRating rating={spot.rating} />

        <span className="text-slate-400 text-sm" aria-label={`${spot.reviewsCount} reviews`}>
          {spot.reviewsCount} reviews
        </span>
      </div>
    </article>
  );
};
