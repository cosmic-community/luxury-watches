'use client'

import { useRef } from 'react'
import { Product } from '@/types'
import ProductCard from './ProductCard'

export default function FeaturedCarousel({ products }: { products: Product[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return
    const amount = container.clientWidth * 0.8
    container.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  if (!products || products.length === 0) return null

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-6 md:px-12"
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[280px] sm:min-w-[340px] snap-start flex-shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => scroll('left')}
          aria-label="Previous timepieces"
          className="w-12 h-12 flex items-center justify-center border border-ink/20 rounded-full hover:border-gold hover:text-gold transition-colors"
        >
          &#8249;
        </button>
        <button
          onClick={() => scroll('right')}
          aria-label="Next timepieces"
          className="w-12 h-12 flex items-center justify-center border border-ink/20 rounded-full hover:border-gold hover:text-gold transition-colors"
        >
          &#8250;
        </button>
      </div>
    </div>
  )
}