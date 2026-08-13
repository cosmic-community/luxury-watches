import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProductGallery from '@/components/ProductGallery'
import VariantSelector from '@/components/VariantSelector'
import InventoryBadge from '@/components/InventoryBadge'
import ReviewList from '@/components/ReviewList'
import EnquiryForm from '@/components/EnquiryForm'
import SectionHeading from '@/components/SectionHeading'
import { getProductBySlug, getReviewsByProduct, getMetafieldValue } from '@/lib/cosmic'
import { formatPrice } from '@/lib/utils'

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const reviews = await getReviewsByProduct(product.id)

  const name = getMetafieldValue(product.metadata?.name) || product.title
  const description = getMetafieldValue(product.metadata?.description)
  const sku = getMetafieldValue(product.metadata?.sku)
  const gallery = product.metadata?.gallery ?? []
  const variants = product.metadata?.variants ?? []
  const category = product.metadata?.category

  return (
    <>
      <div className="bg-forest pt-20" />

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
        <nav className="mb-10 font-sans text-[11px] uppercase tracking-widest2 text-ink/40">
          <Link href="/collections" className="hover:text-gold-dark">
            Collections
          </Link>
          {category && (
            <>
              <span className="mx-2">/</span>
              <Link href={`/collections/${category.slug}`} className="hover:text-gold-dark">
                {getMetafieldValue(category.metadata?.name) || category.title}
              </Link>
            </>
          )}
          <span className="mx-2">/</span>
          <span className="text-ink/70">{name}</span>
        </nav>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            {gallery.length > 0 ? (
              <ProductGallery images={gallery} name={name} />
            ) : (
              <div className="flex aspect-[3/4] items-center justify-center bg-forest/5 text-sm text-ink/40">
                Photography to follow
              </div>
            )}
          </div>

          <div>
            <InventoryBadge status={product.metadata?.inventory_status} />
            <h1 className="mt-5 font-display text-4xl leading-tight text-ink lg:text-5xl">{name}</h1>
            <p className="mt-4 font-sans text-lg text-forest">
              From {formatPrice(product.metadata?.base_price)}
            </p>
            {sku && (
              <p className="mt-2 font-sans text-[11px] uppercase tracking-widest2 text-ink/40">
                Reference {sku}
              </p>
            )}

            {description && (
              <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-ink/70">
                {description.split('\n').map((paragraph, index) =>
                  paragraph.trim() ? <p key={index}>{paragraph}</p> : null
                )}
              </div>
            )}

            {variants.length > 0 && (
              <div className="mt-10 border-t border-forest/10 pt-10">
                <VariantSelector variants={variants} basePrice={product.metadata?.base_price} />
              </div>
            )}

            <div className="mt-10 border-t border-forest/10 pt-10">
              <Link
                href="/contact"
                className="block w-full bg-forest px-8 py-4 text-center font-sans text-xs uppercase tracking-widest2 text-ivory transition-colors hover:bg-gold hover:text-forest"
              >
                Enquire About This Timepiece
              </Link>
              <p className="mt-4 text-center text-xs leading-relaxed text-ink/40">
                Presented by private appointment. No obligation to purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-forest/10 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <SectionHeading label="Collector Notes" heading="What Owners Say" align="left" />
          <div className="mt-12">
            <ReviewList reviews={reviews} />
          </div>
        </div>
      </section>

      <section className="bg-ivory border-t border-forest/10 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <SectionHeading label="Enquiry" heading={`Register Interest In The ${name}`} />
          <div className="mt-12">
            <EnquiryForm timepiece={name} />
          </div>
        </div>
      </section>
    </>
  )
}
