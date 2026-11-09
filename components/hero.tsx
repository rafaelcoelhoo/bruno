import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const assurances = ['Orçamento gratuito', 'Fatura com NIF', 'Trabalho com garantia']

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Ovar · Esmoriz · Feira · Oliveira de Azeméis
          </p>
          <h1
            id="hero-title"
            className="font-display text-5xl font-black leading-none tracking-tight text-balance md:text-6xl lg:text-7xl"
          >
            Obras e remodelações em Ovar, feitas com brio.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Remodelações de casas de banho e cozinhas, pinturas, pavimentos, telhados e aquelas reparações que andam a
            ser adiadas. Trabalho próprio, orçamento sem compromisso e o Bruno sempre presente na obra.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-6 text-base">
              <a href="#contacto">
                Pedir orçamento grátis
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 bg-card px-6 text-base">
              <a href="#trabalhos">Ver trabalhos</a>
            </Button>
          </div>

          {/* <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
            {assurances.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium">
                <Check aria-hidden="true" className="size-4 text-primary" />
                {item}
              </li>
            ))}
          </ul> */}
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="azulejo absolute -right-6 -top-6 hidden h-4/5 w-4/5 rounded-md border border-primary/20 sm:block"
          />
          <figure className="relative overflow-hidden rounded-md border border-border bg-card shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80"
              alt="Profissional em cima de um escadote a trabalhar numa divisão em remodelação"
              width={1200}
              height={1400}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-sm bg-accent px-3 py-1.5 text-sm font-semibold text-accent-foreground">
              Obra em curso — Ovar
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
