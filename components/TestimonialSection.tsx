import { Review } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from './StarRating'
import SectionHeading from './SectionHeading'

export default function TestimonialSection({ reviews }: { reviews: Review[] }) {
  if (!reviews || reviews.length === 0) return null

  return (
    <section className="bg-forest py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="In Their Words" heading="Cherished By Collectors" light />
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {reviews.map((review) => {
            if (!review) return null
            const body = getMetafieldValue(review.metadata?.review_body)
            const reviewerName = getMetafieldValue(review.metadata?.reviewer_name) || 'Valued Client'
            const rating = typeof review.metadata?.rating === 'number' ? review.metadata.rating : undefined
            return (
              <figure key={review.id} className="text-center">
                <div className="flex justify-center">
                  <StarRating rating={rating} />
                </div>
                {body && (
                  <blockquote className="mt-4 font-display text-xl text-ivory leading-relaxed">
                    &ldquo;{body}&rdquo;
                  </blockquote>
                )}
                <figcaption className="mt-4 text-gold text-sm uppercase tracking-widest2">
                  {reviewerName}
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}