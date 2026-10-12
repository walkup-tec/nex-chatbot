import { createFileRoute } from '@tanstack/react-router';
import { Overview } from '@/components/nex/Overview';
export const Route = createFileRoute('/relatorios')({
 head: () => ({ meta: [{ title: 'Relatórios | NEX Atendimento/CRM' }, { name: 'description', content: 'Relatórios da operação NEX Atendimento/CRM.' }, { property: 'og:title', content: 'Relatórios | NEX' }, { property: 'og:description', content: 'Relatórios da operação NEX Atendimento/CRM.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Page,
});
function Page() { return <Overview reports/> }
