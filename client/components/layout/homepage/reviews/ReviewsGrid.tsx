import { ReviewCard, ReviewCardProps } from '@/components/layout/homepage/reviews/ReviewCard';

export type ReviewsGridProps = {
  reviews: ReviewCardProps[];
};

export const ReviewsGrid: React.FC<ReviewsGridProps> = ({ reviews }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {reviews.map((review, i) => (
      <ReviewCard key={i} {...review} />
    ))}
  </div>
);
