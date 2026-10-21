'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { SectionHeading } from '@/components/section-heading'
import { galleryCategories, galleryItems, type GalleryCategory } from '@/lib/gallery'
import { cn } from '@/lib/utils'

type Filter = GalleryCategory | 'Todos'

const filters: Filter[] = ['Todos', ...galleryCategories]

export function Gallery() {
  const [filter, setFilter] = useState<Filter>('Todos')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const items = filter === 'Todos' ? galleryItems : galleryItems.filter((item) => item.category === filter)
  const current = openIndex !== null ? items[openIndex] : null

  const step = (direction: 1 | -1) => {
    setOpenIndex((index) => (index === null ? index : (index + direction + items.length) % items.length))
  }

  return (
    <section id="trabalhos" aria-labelledby="trabalhos-title">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 md:px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="trabalhos-title"
            eyebrow="Trabalhos"
            title="Algumas obras feitas na zona."
            description="Fotografias de trabalhos recentes. Clique numa imagem para ver em grande."
          />

          <div role="group" aria-label="Filtrar trabalhos por tipo" className="flex flex-wrap gap-2">
            {filters.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={filter === option}
                onClick={() => setFilter(option)}
                className={cn(
                  'rounded-sm border px-3 py-1.5 text-sm font-medium transition-colors',
                  filter === option
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-foreground hover:border-primary',
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <ul className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-3 md:gap-4">
          {items.map((item, index) => (
            <li key={item.src} className={cn(index === 0 && 'col-span-2 row-span-2')}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                className="group relative block size-full overflow-hidden rounded-md bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Image
                  src={item.src || '/placeholder.svg'}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-1 bg-foreground/75 p-3 text-left text-background opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
                  <span className="text-sm font-semibold leading-snug">{item.title}</span>
                  <span className="flex items-center gap-1 text-xs text-background/80">
                    <MapPin aria-hidden="true" className="size-3" />
                    {item.location}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={current !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent
          className="max-w-4xl gap-0 overflow-hidden p-0 sm:max-w-4xl"
          onKeyDown={(event) => {
            if (event.key === 'ArrowRight') step(1)
            if (event.key === 'ArrowLeft') step(-1)
          }}
        >
          {current ? (
            <>
              <div className="relative aspect-[4/3] w-full bg-muted">
                <Image
                  src={current.src || '/placeholder.svg'}
                  alt={current.alt}
                  fill
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-4">
                <div className="flex flex-col gap-1">
                  <DialogTitle className="font-display text-lg font-bold">{current.title}</DialogTitle>
                  <DialogDescription className="flex items-center gap-1">
                    <MapPin aria-hidden="true" className="size-3.5" />
                    {current.location} · {current.category}
                  </DialogDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={() => step(-1)} aria-label="Imagem anterior">
                    <ChevronLeft aria-hidden="true" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => step(1)} aria-label="Imagem seguinte">
                    <ChevronRight aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  )
}
