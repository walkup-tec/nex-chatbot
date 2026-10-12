import { createFileRoute } from '@tanstack/react-router';
import { Settings } from '@/components/nex/Settings';
export const Route = createFileRoute('/configuracoes')({
 head: () => ({ meta: [{ title: 'Configurações | NEX Atendimento/CRM' }, { name: 'description', content: 'Configurações da operação NEX Atendimento/CRM.' }, { property: 'og:title', content: 'Configurações | NEX' }, { property: 'og:description', content: 'Configurações da operação NEX Atendimento/CRM.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Page,
});
function Page() { return <Settings/> }
