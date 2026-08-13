export default function PageBanner({
  eyebrow,
  heading,
  description,
  imageUrl,
}: {
  eyebrow?: string
  heading: string
  description?: string
  imageUrl?: string
}) {
  return (
    <section className="relative bg-forest text-ivory overflow-hidden">
      {imageUrl && (
        <img
          src={`${imageUrl}?w=2000&h=1200&fit=crop&auto=format,compress`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      )}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-40 pb-24 text-center">
        {eyebrow && <span className="text-gold text-xs uppercase tracking-widest2">{eyebrow}</span>}
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">{heading}</h1>
        {description && <p className="mt-6 text-ivory/70 text-lg max-w-2xl mx-auto">{description}</p>}
      </div>
    </section>
  )
}