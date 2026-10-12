import { createFileRoute } from '@tanstack/react-router';
import { Management } from '@/components/nex/Management';
export const Route = createFileRoute('/equipes')({
 head: () => ({ meta: [{ title: 'Equipes e Atendentes | NEX Atendimento/CRM' }, { name: 'description', content: 'Equipes e Atendentes da operação NEX Atendimento/CRM.' }, { property: 'og:title', content: 'Equipes e Atendentes | NEX' }, { property: 'og:description', content: 'Equipes e Atendentes da operação NEX Atendimento/CRM.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Page,
});
function Page() { return <Management section="equipes"/> }
