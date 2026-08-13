import Link from 'next/link'

export default function CTABand({
  heading,
  subheading,
  ctaLabel,
  ctaHref,
}: {
  heading: string
  subheading?: string
  ctaLabel: string
  ctaHref: string
}) {
  return (
    <section className="bg-ink py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ivory">{heading}</h2>
        {subheading && <p className="mt-4 text-ivory/70 text-lg">{subheading}</p>}
        <Link
          href={ctaHref}
          className="mt-10 inline-block border border-gold text-gold px-10 py-4 text-xs uppercase tracking-widest2 hover:bg-gold hover:text-ink transition-colors duration-300"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  )
}