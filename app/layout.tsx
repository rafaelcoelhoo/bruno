import type { Metadata, Viewport } from 'next'
import { Archivo, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
    default: `${site.name} — Pequenas obras e remodelações em Ovar`,
    template: `%s · ${site.name}`,
  },
  description:
    'Remodelações de casas de banho e cozinhas, pinturas, pavimentos, telhados e pequenas reparações em Ovar, Esmoriz, Feira, Espinho e arredores. Orçamento gratuito.',
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
    title: `${site.name} — Pequenas obras e remodelações em Ovar`,
    description: 'Remodelações e pequenas obras em Ovar e arredores. Orçamento gratuito e sem compromisso.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
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
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
