'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { Mail, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { site } from '@/lib/site'

const workTypes = [
  'Casa de banho',
  'Cozinha',
  'Pintura',
  'Pavimentos / azulejos',
  'Pladur / tetos falsos',
  'Telhado',
  'Infiltrações',
  'Muros / exteriores',
  'Pequena reparação',
  'Outro',
]

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [workType, setWorkType] = useState('')
  const [consent, setConsent] = useState(false)
  const [consentError, setConsentError] = useState(false)

  const buildMessage = () => {
    const form = formRef.current
    if (!form || !form.reportValidity()) return null
    if (!consent) {
      setConsentError(true)
      return null
    }
    const data = new FormData(form)
    return [
      `Olá Bruno, o meu nome é ${String(data.get('name')).trim()}.`,
      workType ? `Tipo de obra: ${workType}` : null,
      `Localidade: ${String(data.get('location')).trim()}`,
      `Contacto: ${String(data.get('phone')).trim()}`,
      '',
      String(data.get('message')).trim(),
    ]
      .filter((line) => line !== null)
      .join('\n')
  }

  const sendWhatsApp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = buildMessage()
    if (!message) return
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  const sendEmail = () => {
    const message = buildMessage()
    if (!message) return
    const subject = encodeURIComponent(`Pedido de orçamento${workType ? ` — ${workType}` : ''}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(message)}`
  }

  return (
    <form
      ref={formRef}
      onSubmit={sendWhatsApp}
      className="flex flex-col gap-6 rounded-md border border-border bg-background p-6 md:p-8"
      noValidate={false}
    >
      <FieldGroup>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="name">Nome</FieldLabel>
            <Input id="name" name="name" autoComplete="name" required className="bg-card" />
          </Field>
          <Field>
            <FieldLabel htmlFor="phone">Telemóvel</FieldLabel>
            <Input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="9xx xxx xxx"
              required
              className="bg-card"
            />
          </Field>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="location">Localidade</FieldLabel>
            <Input id="location" name="location" autoComplete="address-level2" placeholder="Ex.: Esmoriz" required className="bg-card" />
          </Field>
          <Field>
            <FieldLabel htmlFor="work-type">Tipo de obra</FieldLabel>
            <Select value={workType} onValueChange={setWorkType}>
              <SelectTrigger id="work-type" className="w-full bg-card">
                <SelectValue placeholder="Escolha uma opção" />
              </SelectTrigger>
              <SelectContent>
                {workTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="message">O que precisa?</FieldLabel>
          <Textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Descreva o trabalho, medidas aproximadas e quando gostaria de começar."
            className="bg-card"
          />
          <FieldDescription>Depois de enviar, pode juntar fotografias na conversa.</FieldDescription>
        </Field>

        <Field orientation="horizontal" data-invalid={consentError || undefined}>
          <Checkbox
            id="consent"
            checked={consent}
            aria-invalid={consentError || undefined}
            onCheckedChange={(checked) => {
              setConsent(checked === true)
              if (checked === true) setConsentError(false)
            }}
          />
          <div className="flex flex-col gap-1">
            <FieldLabel htmlFor="consent" className="font-normal leading-relaxed">
              <span>
                Aceito que os meus dados sejam usados para responder a este pedido, nos termos da{' '}
                <Link href="/politica-de-privacidade" className="font-medium text-primary underline underline-offset-4">
                  Política de Privacidade
                </Link>
                .
              </span>
            </FieldLabel>
            {consentError ? <FieldError>Precisa de aceitar para podermos responder.</FieldError> : null}
          </div>
        </Field>
      </FieldGroup>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" size="lg" className="h-12 flex-1 text-base">
          <MessageCircle aria-hidden="true" />
          Enviar por WhatsApp
        </Button>
        <Button type="button" size="lg" variant="outline" className="h-12 flex-1 bg-card text-base" onClick={sendEmail}>
          <Mail aria-hidden="true" />
          Enviar por email
        </Button>
      </div>
    </form>
  )
}
