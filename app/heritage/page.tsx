import type { Metadata } from 'next'
import PageBanner from '@/components/PageBanner'
import SectionHeading from '@/components/SectionHeading'
import CraftsmanshipSection from '@/components/CraftsmanshipSection'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  title: 'Heritage | Maison Chronos',
  description:
    'The workshop, the movements and the standards behind every Maison Chronos timepiece.',
}

const milestones = [
  {
    year: '1912',
    title: 'A Workshop Above The Lake',
    body: 'Founded in a single room in the Vallée de Joux, the workshop began by regulating movements for other houses before signing its own dials.',
  },
  {
    year: '1948',
    title: 'The First Calibre',
    body: 'A hand-wound calibre of thirty-one jewels, still the architectural basis of the movements fitted to the dress collection today.',
  },
  {
    year: '1969',
    title: 'Into The Water',
    body: 'Commissioned by a diving school, the first Marlin case was tested to two hundred metres and returned without a trace of moisture.',
  },
  {
    year: 'Today',
    title: 'One Watchmaker, One Watch',
    body: 'Every timepiece is assembled, adjusted and cased by a single watchmaker, whose mark is recorded on the certificate accompanying it.',
  },
]

export default function HeritagePage() {
  return (
    <>
      <PageBanner
        eyebrow="Heritage"
        heading="A Century Of Small Decisions"
        description="No shortcuts, no outsourced finishing, and no more watches per year than can be made properly."
      />

      <section className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
        <p className="font-display text-2xl leading-relaxed text-forest lg:text-3xl">
          &ldquo;A movement is finished when there is nothing left to remove, not when there is
          nothing left to add.&rdquo;
        </p>
        <span className="mx-auto mt-8 block h-px w-12 bg-gold" />
        <p className="mt-4 font-sans text-[11px] uppercase tracking-widest2 text-ink/50">
          Workshop Doctrine
        </p>
      </section>

      <CraftsmanshipSection />

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading label="Milestones" heading="The Long Way Round" />
        <div className="mt-16 space-y-12">
          {milestones.map((milestone) => (
            <div
              key={milestone.year}
              className="grid gap-4 border-b border-forest/10 pb-12 last:border-0 sm:grid-cols-[140px_1fr] sm:gap-10"
            >
              <span className="font-display text-3xl text-gold-dark">{milestone.year}</span>
              <div>
                <h3 className="font-display text-2xl text-ink">{milestone.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{milestone.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        heading="See The Work In Person"
        subheading="Viewings are held privately, with the movement open and the finishing there to inspect."
        ctaLabel="Request A Viewing"
        ctaHref="/contact"
      />
    </>
  )
}
