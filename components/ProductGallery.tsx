'use client'

import { useState } from 'react'
import { CosmicFile } from '@/types'

export default function ProductGallery({ images, name }: { images: CosmicFile[]; name: string }) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-forest/5 flex items-center justify-center text-ink/40">
        No image available
      </div>
    )
  }

  const activeImage = images[activeIndex]
  if (!activeImage) return null

  return (
    <div>
      <div className="aspect-square overflow-hidden bg-forest/5 mb-4">
        <img
          src={`${activeImage.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
          alt={name}
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`View image ${index + 1} of ${name}`}
              aria-pressed={activeIndex === index}
              className={`w-20 h-20 flex-shrink-0 overflow-hidden border-2 transition-colors ${
                activeIndex === index ? 'border-gold' : 'border-transparent'
              }`}
            >
              <img
                src={`${image.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                alt=""
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}