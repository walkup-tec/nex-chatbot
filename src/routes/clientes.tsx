import { createFileRoute } from '@tanstack/react-router';
import { Management } from '@/components/nex/Management';
export const Route = createFileRoute('/clientes')({
 head: () => ({ meta: [{ title: 'Clientes | NEX Atendimento/CRM' }, { name: 'description', content: 'Clientes da operação NEX Atendimento/CRM.' }, { property: 'og:title', content: 'Clientes | NEX' }, { property: 'og:description', content: 'Clientes da operação NEX Atendimento/CRM.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Page,
});
function Page() { return <Management section="clientes"/> }
