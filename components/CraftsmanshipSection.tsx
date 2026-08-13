import Link from 'next/link'
import SectionHeading from './SectionHeading'

export default function CraftsmanshipSection() {
  return (
    <section className="py-24 px-6 bg-ivory">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading label="Since Generations" heading="The Art of Horology" />
        <p className="mt-8 text-ink/70 leading-relaxed text-lg">
          Every timepiece we offer is the result of centuries of watchmaking heritage — hand-finished movements,
          meticulously selected materials, and an obsession with detail that borders on devotion.
        </p>
        <Link
          href="/heritage"
          className="mt-8 inline-block text-forest border-b border-gold pb-1 text-sm uppercase tracking-widest2 hover:text-gold transition-colors"
        >
          Discover Our Heritage
        </Link>
      </div>
    </section>
  )
}