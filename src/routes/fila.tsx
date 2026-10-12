import { createFileRoute } from '@tanstack/react-router';
import { Management } from '@/components/nex/Management';
export const Route = createFileRoute('/fila')({
 head: () => ({ meta: [{ title: 'Fila de Atendimento | NEX Atendimento/CRM' }, { name: 'description', content: 'Fila de Atendimento da operação NEX Atendimento/CRM.' }, { property: 'og:title', content: 'Fila de Atendimento | NEX' }, { property: 'og:description', content: 'Fila de Atendimento da operação NEX Atendimento/CRM.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Page,
});
function Page() { return <Management section="fila"/> }
