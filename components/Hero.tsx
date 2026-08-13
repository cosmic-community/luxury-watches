import Link from 'next/link'

export default function Hero({
  imageUrl,
  eyebrow = 'Luxury Watches',
  heading,
  subheading,
  ctaLabel = 'Explore The Collection',
  ctaHref = '/collections',
}: {
  imageUrl?: string
  eyebrow?: string
  heading: string
  subheading?: string
  ctaLabel?: string
  ctaHref?: string
}) {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-ink">
      {imageUrl ? (
        <img
          src={`${imageUrl}?w=2400&h=1600&fit=crop&auto=format,compress`}
          alt={heading}
          className="absolute inset-0 w-full h-full object-cover animate-kenburns"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-light to-ink" />
      )}
      <div className="absolute inset-0 bg-ink/40" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <span className="text-gold text-xs sm:text-sm uppercase tracking-widest2 font-sans mb-6 animate-fadeIn">
          {eyebrow}
        </span>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-ivory leading-tight max-w-4xl animate-fadeInUp">
          {heading}
        </h1>
        {subheading && (
          <p className="mt-6 text-ivory/80 max-w-xl text-base sm:text-lg animate-fadeInUp">{subheading}</p>
        )}
        <Link
          href={ctaHref}
          className="mt-10 inline-block border border-gold text-gold px-8 py-4 text-xs uppercase tracking-widest2 hover:bg-gold hover:text-ink transition-colors duration-300"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  )
}