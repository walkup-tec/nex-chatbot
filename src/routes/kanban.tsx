import { createFileRoute } from '@tanstack/react-router';
import { Kanban } from '@/components/nex/Kanban';
export const Route = createFileRoute('/kanban')({
 head: () => ({ meta: [{ title: 'Kanban | NEX Atendimento/CRM' }, { name: 'description', content: 'Kanban da operação NEX Atendimento/CRM.' }, { property: 'og:title', content: 'Kanban | NEX' }, { property: 'og:description', content: 'Kanban da operação NEX Atendimento/CRM.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Page,
});
function Page() { return <Kanban/> }
