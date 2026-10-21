import { Bath, BrickWall, ChefHat, Droplets, Grid3x3, Hammer, Home, Layers, PaintRoller } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    icon: Bath,
    title: 'Casas de banho',
    description: 'Remodelação total ou parcial: troca de banheira por base de duche, louças, azulejo e canalização.',
  },
  {
    icon: ChefHat,
    title: 'Cozinhas',
    description: 'Revestimentos, bancadas, pontos de água e luz, e montagem de móveis à medida.',
  },
  {
    icon: PaintRoller,
    title: 'Pinturas',
    description: 'Interiores e fachadas, tratamento de humidades e acabamentos limpos, sem manchas nem pingos.',
  },
  {
    icon: Grid3x3,
    title: 'Pavimentos e azulejos',
    description: 'Cerâmico, vinílico, flutuante ou mosaico hidráulico. Assentamento e reparação de azulejo antigo.',
  },
  {
    icon: Layers,
    title: 'Pladur e tetos falsos',
    description: 'Divisórias, sancas, tetos falsos com iluminação embutida e isolamento térmico e acústico.',
  },
  {
    icon: Home,
    title: 'Telhados',
    description: 'Substituição de telhas partidas, limpeza, caleiras e revisão antes do inverno.',
  },
  {
    icon: Droplets,
    title: 'Infiltrações',
    description: 'Impermeabilização de terraços, varandas e paredes. Descobrimos de onde vem a água.',
  },
  {
    icon: BrickWall,
    title: 'Muros e exteriores',
    description: 'Muros, calçadas, rampas, churrasqueiras e pequenos anexos no logradouro.',
  },
  {
    icon: Hammer,
    title: 'Pequenas reparações',
    description: 'Aquela porta que não fecha, o azulejo que caiu, a tomada solta. Nenhum trabalho é pequeno demais.',
  },
]

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 md:px-6">
        <SectionHeading
          id="servicos-title"
          eyebrow="Serviços"
          title="Tudo o que a sua casa precisa, sem precisar de uma construtora grande."
          description="Trabalhamos com obras pequenas e médias: rápidas, bem feitas e com um só responsável do início ao fim."
        />

        <ul className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary">
              <span className="flex size-11 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl font-bold">{title}</h3>
                <p className="leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
