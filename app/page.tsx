import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Gallery } from '@/components/gallery'
import { About } from '@/components/about'
import { Process } from '@/components/process'
import { ServiceArea } from '@/components/service-area'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { serviceArea, site } from '@/lib/site'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: site.name,
  description: site.tagline,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ovar',
    addressRegion: 'Aveiro',
    addressCountry: 'PT',
  },
  areaServed: serviceArea.map((name) => ({ '@type': 'City', name })),
  openingHours: 'Mo-Fr 08:00-18:00',
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Process />
        <About />
        <ServiceArea />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
