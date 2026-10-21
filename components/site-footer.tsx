import Link from 'next/link'
import { BookOpen, ExternalLink } from 'lucide-react'
import { Logo } from '@/components/logo'
import { legalLinks, navLinks, site } from '@/lib/site'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div aria-hidden="true" className="azulejo azulejo-sm h-7 border-b border-border" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Logo onDark />
          <p className="text-sm leading-relaxed text-background/70">{site.tagline}.</p>
          <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm text-background/70">
            <dt className="font-medium text-background">NIF</dt>
            <dd>{site.nif}</dd>
            <dt className="font-medium text-background">IMPIC</dt>
            <dd>{site.license.replace('Alvará / Certificado IMPIC ', '')}</dd>
          </dl>
        </div>

        <nav aria-label="Rodapé" className="flex flex-col gap-4">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest">Site</h2>
          <ul className="flex flex-col gap-2 text-sm text-background/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-background">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-4">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest">Informação legal</h2>
          <ul className="flex flex-col gap-2 text-sm text-background/70">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-background">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://www.livroreclamacoes.pt/Inicio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-sm border border-background/30 bg-background px-3 py-2 text-sm font-bold text-foreground transition-opacity hover:opacity-90"
          >
            <BookOpen aria-hidden="true" className="size-4 text-destructive" />
            Livro de Reclamações
            <span className="sr-only">(abre numa nova janela)</span>
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest">Resolução de litígios</h2>
          <p className="text-sm leading-relaxed text-background/70">
            Em caso de litígio de consumo, o consumidor pode recorrer a uma Entidade de Resolução Alternativa de
            Litígios de Consumo, nomeadamente o CNIACC — Centro Nacional de Informação e Arbitragem de Conflitos de
            Consumo.
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a
                href="https://www.cniacc.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-background underline underline-offset-4"
              >
                www.cniacc.pt
                <ExternalLink aria-hidden="true" className="size-3" />
              </a>
            </li>
            <li>
              <a
                href="https://www.consumidor.gov.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-background underline underline-offset-4"
              >
                Portal do Consumidor
                <ExternalLink aria-hidden="true" className="size-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-background/60 md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            © {year} {site.legalName}. Todos os direitos reservados.
          </p>
          <p>Informação nos termos da Lei n.º 144/2015 e do Decreto-Lei n.º 156/2005.</p>
        </div>
      </div>
    </footer>
  )
}
