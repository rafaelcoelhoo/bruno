import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-archivo',
})
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Obras e remodelações em Ovar`,
    template: `%s · ${site.name}`,
  },
  description:
    'Remodelações de casas de banho e cozinhas, pinturas, pavimentos, telhados e reparações em Ovar, Esmoriz, Feira, Espinho e arredores. Orçamento gratuito e sem compromisso.',
  keywords: [
    'obras Ovar',
    'remodelações Ovar',
    'pequenas obras',
    'remodelação casa de banho',
    'pinturas Ovar',
    'Esmoriz',
    'Santa Maria da Feira',
    'Espinho',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    siteName: site.name,
    url: '/',
    title: `${site.name} — Obras e remodelações em Ovar`,
    description: 'Obras e remodelações em Ovar e arredores. Orçamento gratuito e sem compromisso.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Obras e remodelações em Ovar`,
    description: 'Obras e remodelações em Ovar e arredores. Orçamento gratuito e sem compromisso.',
  },
  robots: { index: true, follow: true },
  referrer: 'strict-origin-when-cross-origin',
}

export const viewport: Viewport = {
  themeColor: '#2a4aa8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={`${archivo.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
