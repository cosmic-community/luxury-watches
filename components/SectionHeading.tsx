export default function SectionHeading({
  label,
  heading,
  align = 'center',
  light = false,
}: {
  label?: string
  heading: string
  align?: 'center' | 'left'
  light?: boolean
}) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {label && (
        <span className="text-xs sm:text-sm uppercase tracking-widest2 font-sans font-medium text-gold">
          {label}
        </span>
      )}
      <h2 className={`mt-3 font-display text-3xl sm:text-4xl md:text-5xl ${light ? 'text-ivory' : 'text-ink'}`}>
        {heading}
      </h2>
      <span
        className={`inline-block w-16 h-px mt-6 bg-gold ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  )
}