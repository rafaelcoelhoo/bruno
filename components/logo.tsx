import Link from 'next/link'
import { cn } from '@/lib/utils'
import { site } from '@/lib/site'

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — página inicial`}>
      <span className={cn('flex flex-col leading-none', onDark ? 'text-background' : 'text-foreground')}>
        <span className="font-display text-xl font-black tracking-tight">Bruno</span>
        <span
          className={cn(
            'text-xs font-medium uppercase tracking-widest',
            onDark ? 'text-background/60' : 'text-muted-foreground',
          )}
        >
          Obras & Remodelações
        </span>
      </span>
    </Link>
  )
}
