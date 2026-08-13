import Link from 'next/link'
import NewsletterSignup from './NewsletterSignup'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest text-ivory">
      <NewsletterSignup />

      <div className="border-t border-ivory/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
          <div className="lg:col-span-2">
            <span className="font-display text-3xl tracking-wide">Maison Chronos</span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">
              Fine mechanical timepieces, assembled by hand and finished to the standards of
              traditional haute horlogerie. Each watch is offered by private appointment.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest2 text-gold">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              <li>
                <Link href="/collections" className="transition-colors hover:text-gold">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/heritage" className="transition-colors hover:text-gold">
                  Heritage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest2 text-gold">Enquiries</h4>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              <li>By appointment only</li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-gold">
                  Request a private viewing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-ivory/40 sm:flex-row lg:px-10">
          <p>&copy; {year} Maison Chronos. All rights reserved.</p>
          <p className="font-sans uppercase tracking-widest2">Swiss Made</p>
        </div>
      </div>
    </footer>
  )
}
