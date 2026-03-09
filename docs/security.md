# Security

## Secrets and Configuration
- No secrets are hardcoded in source files.
- Secrets are loaded from environment variables (e.g., `.env` in local dev only).
- `.gitignore` excludes env/token/local-secret paths.

## MSAL Token Handling
- Delegated auth tokens are acquired via MSAL.
- Tokens are stored locally for runtime continuity only.
- Tokens are never committed to Git.

## Permission Model
- Read-only scopes first.
- Write scopes are added only for explicit, documented workflow needs.
- Prefer delegated permissions over application permissions where possible.

## JobTread Access Posture
- Read-only integration preferred by default.
- No destructive operations in baseline design.

## PII and Data Minimization
- No full mailbox archival.
- No unnecessary PII persistence.
- Store only minimal operational metadata (IDs, timestamps, status pointers).

## Retention
- Session/working data is short-lived.
- Exported logs are redacted.
- Persistent records are periodically pruned based on operational need.

## External Action Controls
- External writes/sends require explicit user confirmation.
- Each mutating action should have a corresponding audit entry.
