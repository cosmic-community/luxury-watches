import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-sans text-[11px] uppercase tracking-widest2 text-gold-dark">
        Error 404
      </span>
      <h1 className="mt-4 font-display text-4xl text-ink lg:text-5xl">Page Not Found</h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/60">
        The page you were looking for is no longer here. The collections remain where you left them.
      </p>
      <Link
        href="/"
        className="mt-8 border border-forest px-8 py-3.5 font-sans text-xs uppercase tracking-widest2 text-forest transition-colors hover:bg-forest hover:text-ivory"
      >
        Return Home
      </Link>
    </section>
  )
}
