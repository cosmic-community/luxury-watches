'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { href: '/collections', label: 'Collections' },
  { href: '/heritage', label: 'Heritage' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'bg-forest shadow-lg' : 'bg-gradient-to-b from-ink/50 to-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-display text-2xl tracking-wide text-ivory">Maison Chronos</span>
            <span className="mt-1 font-sans text-[10px] uppercase tracking-widest2 text-gold">
              Fine Timepieces
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-xs uppercase tracking-widest2 text-ivory/90 transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="border border-gold/60 px-5 py-2.5 font-sans text-xs uppercase tracking-widest2 text-gold transition-colors hover:bg-gold hover:text-forest"
            >
              Private Viewing
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className={`h-px w-6 bg-ivory transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-px w-6 bg-ivory transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-px w-6 bg-ivory transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ivory/10 bg-forest md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-sans text-xs uppercase tracking-widest2 text-ivory/90 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-block border border-gold/60 px-5 py-2.5 font-sans text-xs uppercase tracking-widest2 text-gold"
            >
              Private Viewing
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
