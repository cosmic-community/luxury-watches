import { notFound } from 'next/navigation'
import PageBanner from '@/components/PageBanner'
import ProductCard from '@/components/ProductCard'
import CTABand from '@/components/CTABand'
import { getCategoryBySlug, getProductsByCategory, getMetafieldValue } from '@/lib/cosmic'

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const products = await getProductsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)
  const image = category.metadata?.image?.imgix_url

  return (
    <>
      <PageBanner
        eyebrow="Collection"
        heading={name}
        description={description || undefined}
        imageUrl={image ? `${image}?w=2400&h=1200&fit=crop&auto=format,compress` : undefined}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {products.length > 0 ? (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-ink/50">
            No timepieces from this collection are currently available. Enquire to be notified.
          </p>
        )}
      </section>

      <CTABand
        heading={`Enquire About The ${name}`}
        subheading="Availability changes frequently. We will tell you honestly what can be sourced and when."
        ctaLabel="Make An Enquiry"
        ctaHref="/contact"
      />
    </>
  )
}
