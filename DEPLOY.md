# Deploying to Hostinger (shared/business hosting)

This site is configured as a static export (`output: "export"` in
`next.config.ts`) — there is no Node.js server to run. Every page is
plain HTML/CSS/JS, which is what Hostinger's shared/business hosting
(Apache, no Node.js runtime) can serve.

## 1. Build

```bash
npm install
npm run build
```

This produces a static site in the `out/` folder. That folder is what
gets uploaded — nothing else from the repo needs to go on the server.

## 2. Upload to Hostinger

1. Log in to **hPanel** → **Files** → **File Manager** (or use an FTP
   client with the credentials from hPanel → **Files** → **FTP Accounts**).
2. Open `public_html` (or the subdomain's document root if deploying
   to a subdomain).
3. Delete any existing placeholder files (e.g. Hostinger's default
   `index.html`).
4. Upload the **contents** of the local `out/` folder (not the `out`
   folder itself) into `public_html`, preserving the folder structure
   (`_next/`, `ai-agents/`, `contact/`, etc. all go directly inside
   `public_html`).

## 3. Confirm `.htaccess` was included

`public/.htaccess` is copied into `out/` on every build and handles:
- Serving the site's own 404 page instead of Apache's default
- Long-term caching for the hashed `_next/static` build assets

Make sure hidden files are shown in File Manager / your FTP client so
`.htaccess` actually gets uploaded (it's easy to miss since it starts
with a dot).

## 4. Point the domain

If `buildmarket-ai-website` is the primary domain on the hosting
account, no extra step is needed once files are in `public_html`. If
it's an add-on domain or subdomain, make sure it's pointed at the
directory you uploaded to (hPanel → **Domains**).

## Re-deploying after a content change

Every time content or design changes:

```bash
npm run build
```

then re-upload the new contents of `out/` (overwrite existing files).

## Known limitation: contact form

There is no backend on shared hosting, so the contact form does not
POST anywhere — it opens the visitor's email app with a pre-filled
message to `sharletproject@gmail.com` (see `src/components/ContactForm.tsx`).
The WhatsApp and "Email Us" buttons work the same way everywhere on
the site (`https://wa.me/919561273979` and `mailto:sharletproject@gmail.com`).

If a real backend contact form is wanted later (server-side email
delivery, a CRM webhook, etc.), that requires either:
- Hostinger's Node.js app hosting or a VPS (removing `output: "export"`
  and running `next start`), or
- A third-party form endpoint (e.g. Formspree) wired into the existing
  form fields.

## Updating the Shop link

`src/lib/content.ts` → `shopLink` currently points to the internal
`/shop` "coming soon" page. Once a real Shopify store URL exists,
update that value (and decide whether `/shop` should redirect or be
removed) — no other code needs to change.
