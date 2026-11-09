import type { Metadata } from 'next'
import { LegalPage, LegalSection } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: `Como a ${site.name} recolhe e trata os seus dados pessoais, nos termos do RGPD.`,
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Política de Privacidade" updated="outubro de 2026">
      <LegalSection title="1. Responsável pelo tratamento">
        <p>
          O responsável pelo tratamento dos dados pessoais recolhidos através deste site é{' '}
          <strong>{site.legalName}</strong>, com o NIF {site.nif}, com sede em {site.address}. Pode contactar-nos
          através do email <a href={`mailto:${site.email}`}>{site.email}</a> ou do telefone {site.phone}.
        </p>
        <p>
          Esta política cumpre o Regulamento (UE) 2016/679 (Regulamento Geral sobre a Proteção de Dados — RGPD) e a Lei
          n.º 58/2019, de 8 de agosto.
        </p>
      </LegalSection>

      <LegalSection title="2. Que dados recolhemos">
        <p>Apenas os dados que nos fornece voluntariamente no formulário de contacto ou por telefone, WhatsApp ou email:</p>
        <ul>
          <li>Nome;</li>
          <li>Número de telemóvel e/ou endereço de email;</li>
          <li>Localidade da obra;</li>
          <li>Descrição do trabalho pretendido e eventuais fotografias que nos envie.</li>
        </ul>
        <p>
          Este site não utiliza cookies de publicidade, de perfil ou de redes sociais, nem ferramentas de análise de
          visitas.
        </p>
      </LegalSection>

      <LegalSection title="3. Para que usamos os dados">
        <p>
          Os dados são utilizados exclusivamente para responder ao seu pedido, agendar visitas, elaborar orçamentos e,
          caso avance, executar e faturar a obra. Não enviamos publicidade nem cedemos os seus dados a terceiros para
          fins comerciais.
        </p>
        <p>
          O fundamento jurídico é o seu consentimento (artigo 6.º, n.º 1, alínea a) do RGPD) e a realização de
          diligências pré-contratuais a seu pedido (alínea b)). Os dados de faturação são tratados para cumprimento de
          obrigações legais (alínea c)).
        </p>
      </LegalSection>

      <LegalSection title="4. Envio através do WhatsApp">
        <p>
          O formulário deste site não guarda dados num servidor. Ao carregar em &quot;Enviar por WhatsApp&quot;, a sua
          mensagem é aberta na aplicação WhatsApp, serviço da WhatsApp Ireland Limited, sujeito à respetiva política de
          privacidade. Se preferir, pode usar a opção de email ou ligar-nos diretamente.
        </p>
      </LegalSection>

      <LegalSection title="5. Durante quanto tempo guardamos os dados">
        <p>
          Os pedidos de orçamento que não resultem em obra são apagados até 12 meses após o último contacto. Os dados
          associados a obras realizadas são conservados pelo período legalmente exigido para efeitos fiscais e de
          garantia.
        </p>
      </LegalSection>

      <LegalSection title="6. Os seus direitos">
        <p>Em qualquer momento pode exercer, gratuitamente, os seguintes direitos:</p>
        <ul>
          <li>Acesso aos seus dados;</li>
          <li>Retificação de dados incorretos;</li>
          <li>Apagamento (&quot;direito a ser esquecido&quot;);</li>
          <li>Limitação e oposição ao tratamento;</li>
          <li>Portabilidade dos dados;</li>
          <li>Retirada do consentimento, sem afetar a licitude do tratamento já efetuado.</li>
        </ul>
        <p>
          Para exercer estes direitos, envie um email para <a href={`mailto:${site.email}`}>{site.email}</a>. Tem
          também o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD) em{' '}
          <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer">
            www.cnpd.pt
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="7. Segurança">
        <p>
          Adotamos medidas técnicas e organizativas adequadas para proteger os seus dados contra perda, acesso não
          autorizado ou divulgação. O site é servido exclusivamente através de ligação segura (HTTPS).
        </p>
      </LegalSection>
    </LegalPage>
  )
}
