# NEX Atendimento/CRM — Frontend integration

## Scope
This delivery contains browser UI and session-scoped state only. There is no authentication, database, Evolution API connection, webhook receiver, message dispatch, invitation email, automation engine, or scheduled worker. No API credentials are collected or embedded. Refresh clears local records.

## Main integration seams
- `src/lib/nex/model.ts`: browser-safe entity types and `IntegrationAdapter` contract.
- `src/lib/nex/store.tsx`: shared state for contacts, conversations, messages, products, opportunities, schedules, connections, agents, funnel/stage definitions and custom field names. Replace local mutations with the team's authenticated repository and realtime subscriptions.
- `src/components/nex/Management.tsx`: management forms and Excel parsing/mapping. Backend must validate and batch imports, provide durable progress and audit results.
- `src/components/nex/Inbox.tsx`: conversation management. Prepared messages use `pending`, never delivery success. Retrieve QR codes from a verified Evolution 2.4.0 adapter, never generate dummy codes.
- `src/components/nex/Automations.tsx`: React Flow nodes/edges and properties. Save graph and versions through a backend; activation is only UI preparation, and test is a structural preview, not execution.
- `src/components/nex/Settings.tsx`: configuration controls; replace local values with company-scoped settings.

## Required server-side guarantees
The frontend helpers are not a security boundary. Apply company isolation, permissions, atomic conversation claiming, idempotency, consent, timezone conversion, scheduling, retry safety, message status acknowledgements and audit history on the server. QR, message, invitation and schedule actions must resolve from a real backend response before displaying success.

Manual claiming pauses the bot. Closing requires a reason and keeps the bot paused. Explicit reactivation is required. Offline agents cannot receive direct transfers. Transfers to the queue remain available.

## Remaining detailed UI work
Advanced per-number/team filters, typed custom field definitions and validation, editable import duplicate-update policies, per-funnel stage configuration, full opportunity history, persisted transfer notes, media/quick reply previews, rich charts and graph execution/branch simulation are not implemented as complete production features.

## Verification
Model tests cover bot pause/close, required closure reason, already-claimed conversation guard, offline transfer rejection and Excel-only formats. Browser checks cover contact creation, opportunity creation and movement, graph validation, all content pages and mobile overflow. Real integration flows are intentionally unverified and disconnected.
