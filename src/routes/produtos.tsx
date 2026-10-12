import { createFileRoute } from '@tanstack/react-router';
import { Management } from '@/components/nex/Management';
export const Route = createFileRoute('/produtos')({
 head: () => ({ meta: [{ title: 'Produtos e Serviços | NEX Atendimento/CRM' }, { name: 'description', content: 'Produtos e Serviços da operação NEX Atendimento/CRM.' }, { property: 'og:title', content: 'Produtos e Serviços | NEX' }, { property: 'og:description', content: 'Produtos e Serviços da operação NEX Atendimento/CRM.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Page,
});
function Page() { return <Management section="produtos"/> }
