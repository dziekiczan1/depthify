import { LayoutContainer } from '@/components/layout/LayoutContainer';
import { Heading } from '@/components/ui/heading';
import { reviewsHeading, reviewsHome } from '@/lib/homepage/reviews';
import { ReviewsGrid } from '@/components/layout/homepage/reviews/ReviewsGrid';

export const Reviews = () => {
  return (
    <section id="features" className="section-default bg-white">
      <LayoutContainer>
        <Heading
          as="h2"
          title={reviewsHeading.title}
          highlight={reviewsHeading.highlight}
          description={reviewsHeading.description}
          size="lg"
          descriptionSize="lg"
          gradient
          center
        />
        <ReviewsGrid reviews={reviewsHome} />
      </LayoutContainer>
    </section>
  );
};
