export default function StarRating({
  rating,
  size = 'md',
}: {
  rating?: number
  size?: 'sm' | 'md' | 'lg'
}) {
  const value = typeof rating === 'number' ? rating : 0
  const sizes: Record<string, string> = { sm: 'w-3 h-3', md: 'w-4 h-4', lg: 'w-5 h-5' }
  const sizeClass = sizes[size] || sizes.md

  return (
    <div className="flex items-center gap-1" role="img" aria-label={`Rated ${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => {
        const filled = index < Math.round(value)
        return (
          <svg
            key={index}
            className={`${sizeClass} ${filled ? 'text-gold' : 'text-ink/20'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        )
      })}
    </div>
  )
}