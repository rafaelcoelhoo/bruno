import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

const principles = [
  {
    title: 'Como se fosse em minha casa',
    description: 'Trabalho com cuidado, respeito o espaço de cada um e deixo tudo limpo no final do trabalho.',
  },
  {
    title: 'Preço claro, sem surpresas',
    description: 'O orçamento é detalhado e por escrito. Se surgir algo imprevisto, falamos antes de avançar.',
  },
]

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 md:px-6 lg:grid-cols-[5fr_6fr] lg:gap-16">
        <figure className="relative">
          <Image
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80"
            alt="O Bruno junto a uma serra de esquadria na oficina"
            width={1000}
            height={1200}
            className="aspect-[5/6] w-full rounded-md object-cover"
          />
          <div
            aria-hidden="true"
            className="azulejo absolute -bottom-5 -left-5 hidden size-28 rounded-md border border-primary/20 md:block"
          />
        </figure>

        <div className="flex flex-col gap-8">
          <SectionHeading
            id="sobre-title"
            eyebrow="Sobre"
            title="Olá, sou o Bruno."
          />
          <div className="flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Sou de Ovar e trabalho em obras desde novo. Com os anos percebi que muitas pessoas ficam sem resposta,
              seja num trabalho pequeno ou numa obra maior.
            </p>
            <p>
              Foi por isso que comecei por conta própria. Sou eu que faço a visita, o orçamento e que estou na obra.
              Quando é preciso, trabalho com uma pequena equipa de confiança, eletricistas e canalizadores da zona.
            </p>
          </div>

          <ul className="flex flex-col gap-5 border-t border-border pt-8">
            {principles.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span aria-hidden="true" className="mt-2 size-2.5 shrink-0 rounded-full bg-green-500" />
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
