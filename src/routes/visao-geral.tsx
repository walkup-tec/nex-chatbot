import { createFileRoute } from '@tanstack/react-router';
import { Overview } from '@/components/nex/Overview';
export const Route = createFileRoute('/visao-geral')({
 head: () => ({ meta: [{ title: 'Visão Geral | NEX Atendimento/CRM' }, { name: 'description', content: 'Visão Geral da operação NEX Atendimento/CRM.' }, { property: 'og:title', content: 'Visão Geral | NEX' }, { property: 'og:description', content: 'Visão Geral da operação NEX Atendimento/CRM.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Page,
});
function Page() { return <Overview/> }
