import { createFileRoute } from '@tanstack/react-router';
import { Inbox } from '@/components/nex/Inbox';
export const Route = createFileRoute('/')({
 head: () => ({ meta: [{ title: 'Caixa de Entrada | NEX Atendimento/CRM' }, { name: 'description', content: 'Central de conversas e atendimento NEX.' }, { property: 'og:title', content: 'Caixa de Entrada | NEX' }, { property: 'og:description', content: 'Central de conversas e atendimento NEX.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Inbox,
});
