'use client'

import { useState } from 'react'
import { Variant } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import { formatPrice } from '@/lib/utils'

export default function VariantSelector({
  variants,
  basePrice,
}: {
  variants: Variant[]
  basePrice?: number
}) {
  const [selected, setSelected] = useState(0)

  if (!variants || variants.length === 0) return null

  const activeVariant = variants[selected]
  if (!activeVariant) return null

  const adjustment =
    typeof activeVariant.metadata?.price_adjustment === 'number' ? activeVariant.metadata.price_adjustment : 0
  const total = (basePrice || 0) + adjustment

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      setSelected((index + 1) % variants.length)
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      setSelected((index - 1 + variants.length) % variants.length)
    }
  }

  const caseMaterial = getMetafieldValue(activeVariant.metadata?.case_material)
  const strapType = getMetafieldValue(activeVariant.metadata?.strap_type)
  const dialColor = getMetafieldValue(activeVariant.metadata?.dial_color)
  const sku = getMetafieldValue(activeVariant.metadata?.sku)

  return (
    <div>
      <h3 className="font-display text-xl text-ink mb-4">Select a Variant</h3>
      <div role="radiogroup" aria-label="Watch variants" className="flex flex-wrap gap-3">
        {variants.map((variant, index) => {
          const variantName = getMetafieldValue(variant.metadata?.variant_name) || `Option ${index + 1}`
          const isSelected = index === selected
          return (
            <button
              key={variant.id}
              role="radio"
              aria-checked={isSelected}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`px-4 py-2 border text-sm transition-colors ${
                isSelected ? 'border-gold bg-forest text-ivory' : 'border-ink/20 text-ink hover:border-gold'
              }`}
            >
              {variantName}
            </button>
          )
        })}
      </div>
      <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
        {caseMaterial && (
          <div>
            <dt className="text-ink/50 uppercase text-xs tracking-wide">Case Material</dt>
            <dd className="mt-1 text-ink">{caseMaterial}</dd>
          </div>
        )}
        {strapType && (
          <div>
            <dt className="text-ink/50 uppercase text-xs tracking-wide">Strap Type</dt>
            <dd className="mt-1 text-ink">{strapType}</dd>
          </div>
        )}
        {dialColor && (
          <div>
            <dt className="text-ink/50 uppercase text-xs tracking-wide">Dial Color</dt>
            <dd className="mt-1 text-ink">{dialColor}</dd>
          </div>
        )}
        {sku && (
          <div>
            <dt className="text-ink/50 uppercase text-xs tracking-wide">Reference</dt>
            <dd className="mt-1 text-ink">{sku}</dd>
          </div>
        )}
      </dl>
      <p className="mt-6 text-lg text-forest font-display">From {formatPrice(total)}</p>
    </div>
  )
}