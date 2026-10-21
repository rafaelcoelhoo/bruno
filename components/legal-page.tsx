import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

type LegalPageProps = {
  title: string
  updated: string
  children: React.ReactNode
}

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-14 md:px-6 md:py-20">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Voltar ao início
          </Link>
          <h1 className="font-display text-4xl font-black tracking-tight text-balance md:text-5xl">{title}</h1>
          <p className="text-sm text-muted-foreground">Última atualização: {updated}</p>
        </div>
        <div className="flex flex-col gap-10">{children}</div>
      </main>
      <SiteFooter />
    </>
  )
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-display text-xl font-bold">{title}</h2>
      <div className="flex flex-col gap-3 leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  )
}
