import { createFileRoute } from '@tanstack/react-router';
import { Management } from '@/components/nex/Management';
export const Route = createFileRoute('/agendamentos')({
 head: () => ({ meta: [{ title: 'Agendamentos | NEX Atendimento/CRM' }, { name: 'description', content: 'Agendamentos da operação NEX Atendimento/CRM.' }, { property: 'og:title', content: 'Agendamentos | NEX' }, { property: 'og:description', content: 'Agendamentos da operação NEX Atendimento/CRM.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Page,
});
function Page() { return <Management section="agendamentos"/> }
