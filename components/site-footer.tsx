import Link from 'next/link'
import { Logo } from '@/components/logo'
import { legalLinks, navLinks, site } from '@/lib/site'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div aria-hidden="true" className="azulejo azulejo-sm h-7 border-b border-border" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-3">
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
            <li>
              <a
                href="https://www.livroreclamacoes.pt/Inicio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background"
              >
                Livro de Reclamações
                <span className="sr-only">(abre numa nova janela)</span>
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
        </div>
      </div>
    </footer>
  )
}
