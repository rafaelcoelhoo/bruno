import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { serviceArea } from '@/lib/site'

export function ServiceArea() {
  return (
    <section id="zona" aria-labelledby="zona-title" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div aria-hidden="true" className="azulejo azulejo-invert absolute inset-y-0 right-0 hidden w-1/3 opacity-30 lg:block" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 md:px-6">
        <SectionHeading
          id="zona-title"
          eyebrow="Zona de trabalho"
          title="Ovar e arredores."
          description="Trabalho principalmente no concelho de Ovar e nos concelhos vizinhos. Se não vê a sua localidade, pergunte, se for perto, vamos."
          inverted
        />

        <ul className="flex max-w-3xl flex-wrap gap-2">
          {serviceArea.map((place) => (
            <li
              key={place}
              className="flex items-center gap-1.5 rounded-sm border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-2 text-sm font-medium"
            >
              <MapPin aria-hidden="true" className="size-3.5 text-accent" />
              {place}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
