import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    title: 'Contacto',
    description: 'Ligue, mande mensagem ou preencha o formulário. Fotografias ajudam a perceber o trabalho.',
  },
  {
    title: 'Visita e orçamento',
    description: 'Vou ao local sem custos, tiro medidas e envio um orçamento detalhado em poucos dias.',
  },
  {
    title: 'Obra',
    description: 'Combinamos a data de início. Mantenho-o a par de tudo durante o trabalho.',
  },
  {
    title: 'Entrega',
    description: 'Revemos juntos o resultado, limpo o espaço e entrego a fatura com a garantia.',
  },
]

export function Process() {
  return (
    <section aria-labelledby="processo-title">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 md:px-6">
        <SectionHeading id="processo-title" eyebrow="Como funciona" title="Do primeiro telefonema à obra entregue." />

        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-3 border-t-2 border-primary pt-5">
              <span className="font-display text-sm font-bold text-primary">Passo {index + 1}</span>
              <h3 className="font-display text-xl font-bold">{step.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
