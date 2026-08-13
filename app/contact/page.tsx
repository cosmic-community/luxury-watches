import type { Metadata } from 'next'
import PageBanner from '@/components/PageBanner'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata: Metadata = {
  title: 'Contact | Maison Chronos',
  description:
    'Request a private viewing or enquire about the availability of a Maison Chronos timepiece.',
}

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Enquiries"
        heading="Request A Private Viewing"
        description="Tell us what you are looking for. We will reply personally, usually within one business day."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="font-display text-3xl text-ink">How It Works</h2>
            <ol className="mt-8 space-y-8">
              <li>
                <span className="font-sans text-[11px] uppercase tracking-widest2 text-gold-dark">
                  One
                </span>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
                  Send us a note with the reference or the kind of watch you have in mind.
                </p>
              </li>
              <li>
                <span className="font-sans text-[11px] uppercase tracking-widest2 text-gold-dark">
                  Two
                </span>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
                  We confirm what is available now and what can be sourced, with honest timelines.
                </p>
              </li>
              <li>
                <span className="font-sans text-[11px] uppercase tracking-widest2 text-gold-dark">
                  Three
                </span>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
                  You see the piece in person, unhurried, with no obligation to purchase.
                </p>
              </li>
            </ol>

            <div className="mt-12 border-t border-forest/10 pt-8">
              <h3 className="font-sans text-[11px] uppercase tracking-widest2 text-ink/50">
                Appointments
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
                Monday to Saturday, by appointment only.
              </p>
            </div>
          </div>

          <div className="border border-forest/10 bg-white p-8 lg:p-12">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}
