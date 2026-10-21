import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ContactForm } from '@/components/contact-form'
import { site } from '@/lib/site'

const channels = [
  { icon: Phone, label: 'Telefone', value: site.phone, href: site.phoneHref, note: 'Chamada para a rede móvel nacional' },
  { icon: MessageCircle, label: 'WhatsApp', value: site.phone, href: `https://wa.me/${site.whatsapp}` },
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
]

export function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading
            id="contacto-title"
            eyebrow="Contacto"
            title="Peça o seu orçamento."
            description="Diga-nos o que precisa. Respondemos normalmente no próprio dia útil."
          />

          <ul className="flex flex-col gap-5">
            {channels.map(({ icon: Icon, label, value, href, note }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-secondary text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">{label}</span>
                  <a
                    href={href}
                    className="font-display text-lg font-bold hover:text-primary"
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {value}
                  </a>
                  {note ? <span className="text-xs text-muted-foreground">{note}</span> : null}
                </div>
              </li>
            ))}
            <li className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-secondary text-primary">
                <Clock aria-hidden="true" className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Horário</span>
                <span className="font-medium">{site.hours}</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-secondary text-primary">
                <MapPin aria-hidden="true" className="size-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Base</span>
                <span className="font-medium">{site.address}</span>
              </div>
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
