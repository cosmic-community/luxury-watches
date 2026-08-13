import Link from 'next/link'
import { Product } from '@/types'
import { formatPrice } from '@/lib/utils'
import { getMetafieldValue } from '@/lib/cosmic'
import InventoryBadge from './InventoryBadge'

export default function ProductCard({ product }: { product: Product }) {
  if (!product) return null

  const image = product.metadata?.gallery?.[0]
  const name = getMetafieldValue(product.metadata?.name) || product.title

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-forest/5">
        {image && (
          <img
            src={`${image.imgix_url}?w=800&h=1067&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={533}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute top-4 left-4">
          <InventoryBadge status={product.metadata?.inventory_status} />
        </div>
      </div>
      <div className="pt-5 text-center">
        <h3 className="font-display text-2xl text-ink group-hover:text-forest transition-colors">{name}</h3>
        <p className="mt-1 text-sm text-ink/60 tracking-wide">From {formatPrice(product.metadata?.base_price)}</p>
      </div>
    </Link>
  )
}