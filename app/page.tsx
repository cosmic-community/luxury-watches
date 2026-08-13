import Link from 'next/link'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import CollectionCard from '@/components/CollectionCard'
import FeaturedCarousel from '@/components/FeaturedCarousel'
import CraftsmanshipSection from '@/components/CraftsmanshipSection'
import TestimonialSection from '@/components/TestimonialSection'
import CTABand from '@/components/CTABand'
import { getAllCategories, getFeaturedProducts, getAllReviews } from '@/lib/cosmic'

export default async function HomePage() {
  const [categories, featured, reviews] = await Promise.all([
    getAllCategories(),
    getFeaturedProducts(),
    getAllReviews(),
  ])

  const heroImage = featured[0]?.metadata?.gallery?.[0]?.imgix_url

  return (
    <>
      <Hero
        imageUrl={heroImage ? `${heroImage}?w=2400&h=1600&fit=crop&auto=format,compress` : undefined}
        eyebrow="Maison Chronos"
        heading="Time, Measured By Hand"
        subheading="Mechanical timepieces assembled, adjusted and finished by a single watchmaker."
        ctaLabel="Explore The Collections"
        ctaHref="/collections"
      />

      {categories.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeading label="The Collections" heading="Made For A Lifetime Of Wear" />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {categories.map((category) => (
              <CollectionCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      )}

      {featured.length > 0 && (
        <section className="bg-forest py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading label="Selected Pieces" heading="Currently Available" light />
          </div>
          <div className="mt-14">
            <FeaturedCarousel products={featured} />
          </div>
        </section>
      )}

      <CraftsmanshipSection />

      {reviews.length > 0 && <TestimonialSection reviews={reviews} />}

      <CTABand
        heading="Arrange A Private Viewing"
        subheading="Every timepiece is presented in person, without obligation. Tell us what you are looking for and we will prepare a selection."
        ctaLabel="Make An Enquiry"
        ctaHref="/contact"
      />

      <div className="sr-only">
        <Link href="/heritage">Heritage</Link>
      </div>
    </>
  )
}
