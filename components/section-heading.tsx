import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
  inverted?: boolean
  className?: string
}

export function SectionHeading({ id, eyebrow, title, description, inverted = false, className }: SectionHeadingProps) {
  return (
    <div className={cn('flex max-w-2xl flex-col gap-4', className)}>
      <p
        className={cn(
          'flex items-center gap-3 text-sm font-semibold uppercase tracking-widest',
          inverted ? 'text-accent' : 'text-primary',
        )}
      >
        <span aria-hidden="true" className={cn('h-0.5 w-8', inverted ? 'bg-accent' : 'bg-primary')} />
        {eyebrow}
      </p>
      <h2 id={id} className="font-display text-3xl font-black leading-tight tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'text-lg leading-relaxed text-pretty',
            inverted ? 'text-primary-foreground/80' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
