import { getMetafieldValue } from '@/lib/cosmic'

function getStatusStyles(status: string): string {
  const normalized = status.toLowerCase()
  if (normalized.includes('out')) return 'bg-ink/80 text-ivory'
  if (normalized.includes('pre') || normalized.includes('low')) return 'bg-gold/90 text-ink'
  if (normalized.includes('in stock') || normalized.includes('available')) return 'bg-forest text-ivory'
  return 'bg-ink/60 text-ivory'
}

export default function InventoryBadge({ status }: { status?: unknown }) {
  const label = getMetafieldValue(status)
  if (!label) return null

  return (
    <span
      className={`inline-block px-3 py-1 text-[10px] uppercase tracking-widest2 font-sans font-medium ${getStatusStyles(
        label
      )}`}
    >
      {label}
    </span>
  )
}