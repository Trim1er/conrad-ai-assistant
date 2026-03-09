# Microsoft Integrations

## Planned Microsoft Graph Endpoints

- `GET /me/calendar/events` (or `GET /me/calendarView` for bounded windows)
- `GET /me/messages` (focused inbox triage)
- `GET /me/joinedTeams` (team membership/context)

## Why Each Integration Matters

- **Calendar access**
  - Lets Conrad protect crew scheduling windows once jobs are confirmed in JobTread.
  - Prevents collisions between field commitments and meetings.

- **Outlook/messages access**
  - Surfaces urgent vendor/client threads and converts them into follow-up actions.
  - Reduces missed replies and aging open loops.

- **Teams context access**
  - Enables channel/team-aware notifications for crew coordination.
  - Keeps communication aligned to the right team context.

## Authentication Approach

- MSAL-based delegated auth flow
- Prefer delegated permissions over application permissions wherever possible
- Read-first rollout, writes only after explicit user-confirmed use cases

## Data Handling Policy

### What Conrad stores
- Minimal operational metadata needed for workflow state:
  - task/action pointers
  - message/event IDs
  - timestamps/status markers

### What Conrad does **not** store
- Raw mailbox archives
- Full calendar history outside short planning windows
- Unnecessary PII payloads

### Retention
- Session-level working data is short-lived
- Logs are redacted when exported
- Persistent records are purpose-limited and periodically pruned

## Scope Strategy (Phased)

### Phase 1 (Read-only)
- `User.Read`
- `Calendars.Read`
- `Mail.Read`
- `Team.ReadBasic.All` (or equivalent least-privilege team read)

### Phase 2 (Controlled writes, only if needed)
- `Calendars.ReadWrite`
- `Mail.Send`
- Team/channel write scopes only with explicit documented justification
