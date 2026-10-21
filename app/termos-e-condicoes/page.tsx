import type { Metadata } from 'next'
import { LegalPage, LegalSection } from '@/components/legal-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Termos e Condições',
  description: `Termos e condições dos serviços e do site da ${site.name}.`,
}

export default function TermsPage() {
  return (
    <LegalPage title="Termos e Condições" updated="outubro de 2026">
      <LegalSection title="1. Identificação do prestador">
        <ul>
          <li>
            <strong>Designação:</strong> {site.legalName}
          </li>
          <li>
            <strong>NIF:</strong> {site.nif}
          </li>
          <li>
            <strong>Morada:</strong> {site.address}
          </li>
          <li>
            <strong>Título de habilitação:</strong> {site.license}, emitido pelo IMPIC — Instituto dos Mercados
            Públicos, do Imobiliário e da Construção, I.P.
          </li>
          <li>
            <strong>Contactos:</strong> {site.phone} · <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Utilização do site">
        <p>
          Este site tem caráter informativo. As fotografias e descrições são ilustrativas dos trabalhos realizados e
          não constituem proposta contratual. Os conteúdos (textos, imagens e logótipo) não podem ser reproduzidos sem
          autorização.
        </p>
      </LegalSection>

      <LegalSection title="3. Orçamentos">
        <p>
          A visita e o orçamento são gratuitos e sem compromisso na zona de trabalho habitual. Cada orçamento é
          entregue por escrito, discrimina mão de obra e materiais, indica o prazo estimado e é válido por 30 dias,
          salvo indicação em contrário.
        </p>
        <p>
          Todos os preços apresentados incluem IVA à taxa legal em vigor, exceto quando expressamente indicado. Trabalhos
          adicionais não previstos no orçamento só são realizados após acordo prévio com o cliente.
        </p>
      </LegalSection>

      <LegalSection title="4. Pagamentos">
        <p>
          As condições de pagamento (por exemplo, adjudicação, pagamentos intermédios e pagamento final) são acordadas
          no orçamento. Todos os pagamentos são acompanhados da respetiva fatura emitida com o NIF do cliente.
        </p>
      </LegalSection>

      <LegalSection title="5. Garantia">
        <p>
          Os trabalhos realizados beneficiam das garantias previstas na lei, nomeadamente no regime do contrato de
          empreitada do Código Civil e, quando aplicável, no Decreto-Lei n.º 84/2021, de 18 de outubro. Os materiais
          fornecidos beneficiam ainda da garantia do respetivo fabricante.
        </p>
      </LegalSection>

      <LegalSection title="6. Livro de Reclamações">
        <p>
          Nos termos do Decreto-Lei n.º 156/2005, de 15 de setembro, na redação dada pelo Decreto-Lei n.º 74/2017,
          dispomos de Livro de Reclamações em formato físico e eletrónico. Pode apresentar a sua reclamação online em{' '}
          <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noopener noreferrer">
            www.livroreclamacoes.pt
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="7. Resolução alternativa de litígios">
        <p>
          Em caso de litígio de consumo, nos termos da Lei n.º 144/2015, de 8 de setembro, o consumidor pode recorrer a
          uma Entidade de Resolução Alternativa de Litígios de Consumo:
        </p>
        <ul>
          <li>
            <strong>CNIACC</strong> — Centro Nacional de Informação e Arbitragem de Conflitos de Consumo ·{' '}
            <a href="https://www.cniacc.pt" target="_blank" rel="noopener noreferrer">
              www.cniacc.pt
            </a>
          </li>
        </ul>
        <p>
          A lista completa das entidades de RAL está disponível no Portal do Consumidor em{' '}
          <a href="https://www.consumidor.gov.pt" target="_blank" rel="noopener noreferrer">
            www.consumidor.gov.pt
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="8. Lei aplicável e foro">
        <p>
          Estes termos regem-se pela lei portuguesa. Sem prejuízo do recurso aos meios de resolução alternativa de
          litígios, é competente o foro da Comarca de Aveiro, salvo disposição legal imperativa em contrário.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
