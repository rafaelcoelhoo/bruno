import type { Metadata } from 'next'
import { LegalPage, LegalSection } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: `Informação sobre a utilização de cookies no site da ${site.name}.`,
}

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Política de Cookies" updated="outubro de 2026">
      <LegalSection title="1. O que são cookies">
        <p>
          Cookies são pequenos ficheiros de texto guardados no seu dispositivo quando visita um site. Servem, por
          exemplo, para memorizar preferências ou recolher estatísticas de utilização.
        </p>
      </LegalSection>

      <LegalSection title="2. Que cookies usamos">
        <p>
          Este site <strong>não utiliza cookies de publicidade, de perfil ou de redes sociais</strong>. Por esse motivo
          não lhe pedimos consentimento através de um aviso de cookies.
        </p>
        <p>
          Para conhecer o número de visitas, utilizamos estatísticas anónimas e agregadas que não recorrem a cookies
          nem identificam o visitante. Podem ser usados apenas cookies estritamente necessários ao funcionamento técnico
          do site, isentos de consentimento nos termos da Lei n.º 41/2004, de 18 de agosto, na sua redação atual.
        </p>
      </LegalSection>

      <LegalSection title="3. Ligações externas">
        <p>
          Ao clicar em ligações para serviços externos (por exemplo, WhatsApp, Livro de Reclamações Eletrónico ou
          Portal do Consumidor), passa a estar sujeito às políticas de cookies desses sites.
        </p>
      </LegalSection>

      <LegalSection title="4. Como gerir cookies">
        <p>
          Pode, a qualquer momento, apagar ou bloquear cookies nas definições do seu navegador. Consulte a ajuda do seu
          navegador (Chrome, Safari, Firefox, Edge) para saber como.
        </p>
      </LegalSection>

      <LegalSection title="5. Contacto">
        <p>
          Para qualquer questão sobre esta política, contacte-nos através de{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
