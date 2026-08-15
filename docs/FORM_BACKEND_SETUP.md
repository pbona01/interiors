# Benestudio form backend setup

The website is wired to the Benestudio CRM Lite + Form Backend contract. The supplied `04-benestudio-form-backend` package is an implementation guide; it does not contain a deployed Apps Script URL, Google Sheet, or client credentials.

## 1. Create the client-owned Google Sheet

Create a spreadsheet with a `Leads` tab. The backend should create or preserve these headers in order:

```text
Lead ID | Submitted At | Lead Source | Name | Email | Phone | Location | Service | Budget | Timeline | Project Details | Status | Notes | Next Follow-up | Consultation Date | Duplicate Of
```

Keep the spreadsheet owned by the studio/client Google account. Copy its ID from the URL; it is the value between `/d/` and `/edit`.

## 2. Create and configure the Apps Script project

1. Open [script.google.com](https://script.google.com) while signed in to the client-owned account.
2. Create a standalone project and add the backend implementation from `04-benestudio-form-backend`.
3. Set the project timezone to the studio’s real timezone.
4. Add Script Properties using the backend package’s stable names:

```text
SPREADSHEET_ID
LEADS_SHEET_NAME=Leads
DASHBOARD_SHEET_NAME=Dashboard
ENABLE_SHEET=true
ENABLE_DASHBOARD=false
ENABLE_DAILY_REMINDERS=false
INTERNAL_RECIPIENT=REPLACE_WITH_STUDIO_EMAIL
STUDIO_NAME=REPLACE_WITH_STUDIO_NAME
STUDIO_REPLY_TO=REPLACE_WITH_REPLY_TO
STUDIO_WEBSITE_URL=http://localhost:3000
BRAND_COLOR=#e87a24
DEFAULT_LEAD_SOURCE=Website
TIMEZONE=REPLACE_WITH_STUDIO_TIMEZONE
DUPLICATE_WINDOW_HOURS=24
EXPECTED_RESPONSE_TEXT=REPLACE_WITH_FACTUAL_RESPONSE_WINDOW
```

Do not put the Sheet ID, recipient configuration, or other private values in the website code.

## 3. Deploy the web app

Deploy → New deployment → Web app. Execute as the client/owner account and allow access appropriate for an unauthenticated public inquiry form. Copy the production URL ending in `/exec`; do not use a `/dev` URL.

Before launch, run the backend setup function, authorize the requested Google scopes, and test a valid request from the client account.

## 4. Connect the website

Copy `.env.example` to `.env.local` in the project root and replace the placeholder:

```env
NEXT_PUBLIC_FORM_ENDPOINT=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Restart the dev server after changing `.env.local`:

```powershell
pnpm install
pnpm dev
```

The final wizard submission sends `application/x-www-form-urlencoded` fields with `URLSearchParams`: `leadSource`, `name`, `email`, `phone`, `location`, `service`, `budget`, `timeline`, `projectDetails`, `consultationDate`, and the honeypot `website` field.

## 5. Important response limitation

The site uses `mode: "no-cors"` because Apps Script ContentService does not provide a reliably readable cross-origin response. A resolved request means the browser dispatched the submission; it does not prove that every Sheet/email operation succeeded. Verify the `Leads` row, internal email, and acknowledgement email in Apps Script before launch.

## 6. Production handoff checklist

- Use the production `/exec` URL in the deployed site environment.
- Create a new Apps Script version and update the existing deployment after backend changes.
- Test valid, missing-field, invalid-email, oversized-input, honeypot, duplicate, and slow-network cases.
- Confirm the client owns the Sheet, Apps Script project, sender identity, and deployment.
- Record the deployment/version ID, timezone, Sheet URL, recipients, and enabled dashboard/reminder settings.
