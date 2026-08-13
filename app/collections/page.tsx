import type { Metadata } from 'next'
import PageBanner from '@/components/PageBanner'
import CollectionCard from '@/components/CollectionCard'
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import CTABand from '@/components/CTABand'
import { getAllCategories, getAllProducts } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Collections | Maison Chronos',
  description: 'Explore the dress, dive and chronograph collections of Maison Chronos.',
}

export default async function CollectionsPage() {
  const [categories, products] = await Promise.all([getAllCategories(), getAllProducts()])

  const bannerImage = categories[0]?.metadata?.image?.imgix_url

  return (
    <>
      <PageBanner
        eyebrow="The Collections"
        heading="Four Families, One Standard"
        description="Each collection begins with a movement and ends with a hand-finished case. Choose a family to explore the pieces currently available."
        imageUrl={bannerImage ? `${bannerImage}?w=2400&h=1200&fit=crop&auto=format,compress` : undefined}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {categories.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((category) => (
              <CollectionCard key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-ink/50">Collections are being prepared.</p>
        )}
      </section>

      {products.length > 0 && (
        <section className="border-t border-forest/10 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading label="All Timepieces" heading="The Complete Register" />
            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        heading="Not Sure Where To Begin?"
        subheading="Tell us how you intend to wear it and we will suggest a starting point."
        ctaLabel="Speak With Us"
        ctaHref="/contact"
      />
    </>
  )
}
