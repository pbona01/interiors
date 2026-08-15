# Benestudio form backend setup

The website is already wired to the Benestudio CRM Lite + Form Backend contract. You do not need to write backend code: the ready-to-paste Google Apps Script is in [`backend/Code.gs`](../backend/Code.gs). The supplied `04-benestudio-form-backend` package is the implementation specification; it does not contain a deployed Apps Script URL, Google Sheet, or client credentials.

## 1. Create the client-owned Google Sheet

Create a spreadsheet with a `Leads` tab. The backend should create or preserve these headers in order:

```text
Lead ID | Submitted At | Lead Source | Name | Email | Phone | Location | Service | Budget | Timeline | Project Details | Status | Notes | Next Follow-up | Consultation Date | Duplicate Of
```

Keep the spreadsheet owned by the studio/client Google account. Copy its ID from the URL; it is the value between `/d/` and `/edit`.

## 2. Create and configure the Apps Script project

1. Open [script.google.com](https://script.google.com) while signed in to the studio-owned account.
2. Click **New project**.
3. Open [`backend/Code.gs`](../backend/Code.gs) from this repository, copy the entire file, and paste it into the Apps Script editor, replacing the starter code.
4. Click the **Save** icon and give the project a name such as `Benestudio Form Backend`.
5. Open **Project Settings** and set the project timezone to the studio’s real timezone.
6. In **Project Settings → Script Properties**, add these properties. Replace every `REPLACE_...` value:

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

Do not put the Sheet ID, recipient configuration, or other private values in the website code. `INTERNAL_RECIPIENT` is required for studio notification emails, but the Sheet can still receive submissions if that property is temporarily blank.

Return to the editor, choose `setupBackend` in the function dropdown, and click **Run** once. Google will ask for permission; review it, choose the studio account, open **Advanced**, then choose **Go to Benestudio Form Backend** and **Allow**. Confirm that the spreadsheet now has a `Leads` tab with the headers shown above. If earlier submissions were written before the header row existed, the setup detects the existing `LEAD-...` rows and inserts the missing title row above them without deleting data. The same repair also runs automatically before future submissions. It also adds header notes, readable column widths, a filter row, frozen headers, status dropdowns, and date formatting so each lead is easy to scan.

## 3. Deploy the web app

In Apps Script, click **Deploy → New deployment**, choose **Web app**, set **Execute as** the owner account, set **Who has access** to **Anyone**, and click **Deploy**. Copy the production URL ending in `/exec`; do not use a `/dev` URL. Opening that `/exec` URL in a browser should now show a small JSON health response. If it still says `Script function not found: doGet`, the deployment is using older code: open **Deploy → Manage deployments**, click the pencil icon, choose **New version**, and deploy again.

Before launch, run the backend setup function, authorize the requested Google scopes, and test a valid request from the client account.

## 4. Connect the website

In the project root, make a copy of `.env.example` named `.env.local`, then replace the placeholder:

```env
NEXT_PUBLIC_FORM_ENDPOINT=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

The current public Apps Script URL is also kept as a frontend fallback, so the form can still submit if a hosting provider environment variable is accidentally omitted. Set the environment variable in Vercel anyway so a future backend deployment can be changed without editing the site.

Restart the dev server after changing `.env.local`:

```powershell
pnpm install
pnpm dev
```

If you are using the existing server, stop it with `Ctrl+C` first, then run `pnpm dev` again. Open `http://localhost:3000/inquire`, complete the wizard, and submit a test inquiry. Because the browser cannot read the Apps Script response directly, verify the new row in `Leads` and the two emails.

The final wizard submission sends `application/x-www-form-urlencoded` fields with `URLSearchParams`: `leadSource`, `name`, `email`, `phone`, `location`, `service`, `budget`, `timeline`, `projectDetails`, `consultationDate`, and the honeypot `website` field.

## 5. Important response limitation

The site uses `mode: "no-cors"` because Apps Script ContentService does not provide a reliably readable cross-origin response. A resolved request means the browser dispatched the submission; it does not prove that every Sheet/email operation succeeded. Verify the `Leads` row, internal email, and acknowledgement email in Apps Script before launch.

## 6. Production handoff checklist

- Use the production `/exec` URL in the deployed site environment.
- Create a new Apps Script version and update the existing deployment after backend changes. The code in this repository is the source to paste into Apps Script; changing this repository does not automatically change the deployed Google script.
- Test valid, missing-field, invalid-email, oversized-input, honeypot, duplicate, and slow-network cases.
- Confirm the client owns the Sheet, Apps Script project, sender identity, and deployment.
- Record the deployment/version ID, timezone, Sheet URL, recipients, and enabled dashboard/reminder settings.
