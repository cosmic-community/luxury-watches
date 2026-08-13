import Link from 'next/link'
import { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CollectionCard({ category }: { category: Category }) {
  if (!category) return null

  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)
  const image = category.metadata?.image

  return (
    <Link
      href={`/collections/${category.slug}`}
      className="group relative block overflow-hidden aspect-[4/5] md:aspect-[16/10] bg-forest"
    >
      {image && (
        <img
          src={`${image.imgix_url}?w=1600&h=1000&fit=crop&auto=format,compress`}
          alt={name}
          width={800}
          height={500}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-start justify-end p-8 md:p-12">
        <span className="w-10 h-px bg-gold mb-4" />
        <h3 className="font-display text-3xl md:text-4xl text-ivory">{name}</h3>
        {description && <p className="mt-2 max-w-md text-ivory/80 text-sm md:text-base">{description}</p>}
        <span className="mt-4 text-gold text-xs uppercase tracking-widest2 font-sans group-hover:underline">
          Discover the Collection
        </span>
      </div>
    </Link>
  )
}