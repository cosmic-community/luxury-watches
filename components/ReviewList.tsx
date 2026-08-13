import { Review } from '@/types'
import ReviewCard from './ReviewCard'
import StarRating from './StarRating'

export default function ReviewList({ reviews }: { reviews: Review[] }) {
  if (!reviews || reviews.length === 0) {
    return (
      <p className="text-sm text-ink/50">
        This timepiece has not yet been reviewed by our collectors.
      </p>
    )
  }

  const rated = reviews.filter((review) => typeof review.metadata?.rating === 'number')
  const average =
    rated.length > 0
      ? rated.reduce((total, review) => total + (review.metadata?.rating ?? 0), 0) / rated.length
      : 0

  return (
    <div>
      {rated.length > 0 && (
        <div className="mb-10 flex flex-wrap items-center gap-4 border-b border-forest/10 pb-6">
          <StarRating rating={average} size="lg" />
          <span className="font-display text-2xl text-forest">{average.toFixed(1)}</span>
          <span className="font-sans text-xs uppercase tracking-widest2 text-ink/50">
            {reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'}
          </span>
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}
