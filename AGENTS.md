<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application structure
- Shared application navigation and session-scoped workspace state wrap the route outlet in the root route, so all module pages share the same records.
- Domain types and integration adapter contracts live in browser-safe modules; no server connections are implemented because this delivery is frontend-only.
- Operational screens start empty and local changes live only for the current session; external operations must never report success without an integration response.
- The automation editor uses React Flow and Excel imports use SheetJS to avoid custom implementations of graph editing and spreadsheet parsing.
