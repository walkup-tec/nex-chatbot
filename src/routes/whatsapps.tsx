import { createFileRoute } from '@tanstack/react-router';
import { Management } from '@/components/nex/Management';
export const Route = createFileRoute('/whatsapps')({
 head: () => ({ meta: [{ title: 'WhatsApps Conectados | NEX Atendimento/CRM' }, { name: 'description', content: 'WhatsApps Conectados da operação NEX Atendimento/CRM.' }, { property: 'og:title', content: 'WhatsApps Conectados | NEX' }, { property: 'og:description', content: 'WhatsApps Conectados da operação NEX Atendimento/CRM.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Page,
});
function Page() { return <Management section="whatsapps"/> }
