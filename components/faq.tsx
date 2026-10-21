import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SectionHeading } from '@/components/section-heading'

const questions = [
  {
    q: 'O orçamento é mesmo gratuito?',
    a: 'Sim. A visita ao local e o orçamento são gratuitos e sem compromisso dentro da zona de trabalho habitual.',
  },
  {
    q: 'Fazem trabalhos muito pequenos?',
    a: 'Fazemos. Trocar meia dúzia de azulejos, reparar uma infiltração ou pintar uma divisão são trabalhos tão importantes como uma remodelação completa.',
  },
  {
    q: 'O material está incluído no preço?',
    a: 'Pode escolher. Indicamos no orçamento o valor da mão de obra e do material separadamente, e ajudamos a escolher materiais com boa relação qualidade/preço.',
  },
  {
    q: 'Passam fatura?',
    a: 'Sempre. Todos os trabalhos são faturados com o seu NIF, o que também conta para as suas despesas no IRS quando aplicável.',
  },
  {
    q: 'Quanto tempo demora uma remodelação de casa de banho?',
    a: 'Depende do tamanho e dos materiais, mas uma casa de banho completa costuma demorar entre uma e duas semanas. O prazo fica sempre indicado no orçamento.',
  },
  {
    q: 'A empresa está licenciada?',
    a: 'Sim. Trabalhamos com título de habilitação emitido pelo IMPIC (Instituto dos Mercados Públicos, do Imobiliário e da Construção) e seguro de responsabilidade civil.',
  },
]

export function Faq() {
  return (
    <section id="perguntas" aria-labelledby="perguntas-title">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:px-6 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <SectionHeading
          id="perguntas-title"
          eyebrow="Perguntas frequentes"
          title="Antes de ligar, talvez queira saber."
        />
        <Accordion type="single" collapsible className="w-full">
          {questions.map((item, index) => (
            <AccordionItem key={item.q} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-display text-lg font-bold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
