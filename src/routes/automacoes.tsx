import { createFileRoute } from '@tanstack/react-router';
import { Automations } from '@/components/nex/Automations';
export const Route = createFileRoute('/automacoes')({
 head: () => ({ meta: [{ title: 'Automações | NEX Atendimento/CRM' }, { name: 'description', content: 'Automações da operação NEX Atendimento/CRM.' }, { property: 'og:title', content: 'Automações | NEX' }, { property: 'og:description', content: 'Automações da operação NEX Atendimento/CRM.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Page,
});
function Page() { return <Automations/> }
