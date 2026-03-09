# Architecture

Conrad is an operations assistant running inside OpenClaw with skill-based routing and controlled external integrations.

```mermaid
flowchart TD
  A[Conrad Agent] --> B[OpenClaw Runtime]
  B --> C[Skill Router]

  C --> G[MS Graph API]
  G --> G1[Calendar]
  G --> G2[Outlook]
  G --> G3[Teams]

  C --> J[JobTread API]
  C --> O[Operational Outputs\nMorning Brief / Follow-up Queue / Alerts]
```

## Notes
- Skill Router determines whether an action is internal analysis, JobTread read, or Microsoft Graph interaction.
- Microsoft Graph operations are delegated-auth first with least-privilege scopes.
- External write actions are gated behind explicit user confirmation.
