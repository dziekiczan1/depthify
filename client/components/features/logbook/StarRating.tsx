import { Star } from 'lucide-react';
import cn from 'clsx';

interface StarRatingProps {
  rating: number;
  max?: number;
  className?: string;
  inactiveColor?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  max = 5,
  className,
  inactiveColor = 'text-slate-600',
}) => {
  return (
    <div className={className}>
      <meter
        min={0}
        max={max}
        value={rating}
        aria-label={`Rating: ${rating} out of ${max} stars`}
        className="hidden"
      />

      <div className="flex items-center space-x-1">
        {Array.from({ length: max }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'icon-size-sm',
              i < rating ? 'text-yellow-400 fill-current' : inactiveColor
            )}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
};
