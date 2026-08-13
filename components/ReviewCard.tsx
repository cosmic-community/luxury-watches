import { Review } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import { formatDate } from '@/lib/utils'
import StarRating from './StarRating'

export default function ReviewCard({ review }: { review: Review }) {
  if (!review) return null

  const reviewerName = getMetafieldValue(review.metadata?.reviewer_name) || 'Valued Client'
  const title = getMetafieldValue(review.metadata?.review_title)
  const body = getMetafieldValue(review.metadata?.review_body)
  const rating = typeof review.metadata?.rating === 'number' ? review.metadata.rating : undefined
  const isVerified = Boolean(review.metadata?.verified_purchase)
  const date = getMetafieldValue(review.metadata?.review_date)

  return (
    <div className="border border-ink/10 p-6 md:p-8">
      <div className="flex items-center justify-between mb-3">
        <StarRating rating={rating} />
        {isVerified && (
          <span className="text-[10px] uppercase tracking-widest2 text-forest border border-forest/30 px-2 py-1">
            Verified Purchase
          </span>
        )}
      </div>
      {title && <h4 className="font-display text-xl text-ink mb-2">{title}</h4>}
      {body && <p className="text-ink/70 leading-relaxed">{body}</p>}
      <div className="mt-4 flex items-center justify-between text-sm text-ink/50">
        <span>{reviewerName}</span>
        {date && <span>{formatDate(date)}</span>}
      </div>
    </div>
  )
}