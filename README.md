# Sharath — Portfolio (Full-Stack)

A dark, terminal-themed portfolio site.

- **Frontend:** React + Vite
- **Backend:** Node.js + Express (powers the contact form via `/api/contact`)

```
sharath-portfolio/
├── client/          React frontend (Vite)
│   ├── public/       static files — put profile.jpg here
│   └── src/
│       ├── components/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
└── server/          Express backend
    ├── routes/contact.js
    ├── index.js
    └── .env.example
```

## 1. Run it locally

You need [Node.js 18+](https://nodejs.org) installed. Open **two terminals** in VS Code.

**Terminal 1 — backend**
```bash
cd server
cp .env.example .env      # then fill in your real values
npm install
npm run dev
```
Backend runs at `http://localhost:4000`. Until you fill in real SMTP values in `.env`,
contact form submissions are just logged to this terminal — useful for testing before
you wire up real email sending.

**Terminal 2 — frontend**
```bash
cd client
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`. Vite is configured to forward `/api/*` calls
to the backend automatically (see `client/vite.config.js`), so the contact form works
out of the box in dev.

## 2. Add your photo

Drop a photo named `profile.jpg` into `client/public/`. The hero section already
references it — no code changes needed.

## 3. Update your real details

- `client/src/components/Contact.jsx` — replace the email/LinkedIn/GitHub placeholders
- `client/src/components/Certifications.jsx` — update cert status as you complete/earn them
- `server/.env` — your real SMTP credentials (see "Sending real emails" below)

## 4. Sending real emails from the contact form

The simplest option: use a **Gmail app password**.
1. Turn on 2-Step Verification on your Google account.
2. Generate an [App Password](https://myaccount.google.com/apppasswords).
3. In `server/.env`, set:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=youremail@gmail.com
   SMTP_PASS=the-16-character-app-password
   ```

For production-scale sending, a transactional provider (Resend, SendGrid, Mailgun) is more
reliable than Gmail SMTP — same `nodemailer` code, just different host/port/credentials.

## 5. Deploying to the internet

### Buy a domain
Namecheap, Google Domains successor (Squarespace Domains), or Cloudflare Registrar all work.
A `.dev` or `.me` domain suits a personal tech portfolio well (e.g. `sharath.dev`).

### Deploy the frontend — Vercel (recommended, free tier)
1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo.
3. Set **Root Directory** to `client`.
4. Framework preset: Vite. Build command: `npm run build`. Output dir: `dist`.
5. Deploy. Vercel gives you a `*.vercel.app` URL immediately.
6. In Vercel → Project → Settings → Domains, add your custom domain and follow the DNS
   instructions (usually a CNAME record pointed at Vercel).

### Deploy the backend — Render (free tier available)
1. Go to [render.com](https://render.com) → New → Web Service → connect the same repo.
2. Set **Root Directory** to `server`.
3. Build command: `npm install`. Start command: `npm start`.
4. Add the environment variables from `.env` in Render's dashboard (never commit `.env`).
5. Render gives you a URL like `https://sharath-api.onrender.com`.

### Connect frontend to backend in production
In `client/vite.config.js`, the `/api` proxy only applies to local dev. For production,
update the `fetch('/api/contact', ...)` call in `Contact.jsx` to point at your deployed
backend URL, e.g.:
```js
fetch('https://sharath-api.onrender.com/api/contact', ...)
```
Then in the backend's environment variables, set:
```
ALLOWED_ORIGINS=https://sharath.dev,https://www.sharath.dev
```
so CORS only allows your real domain to call the API.

### DNS overview
Whichever registrar you buy the domain from, you'll add:
- A **CNAME** (or Vercel's provided A/ALIAS record) pointing your domain to Vercel, for the frontend.
- Nothing extra needed for the backend unless you want a custom API subdomain
  (e.g. `api.sharath.dev` → CNAME to your Render service).

If you manage DNS through Cloudflare (recommended for the free CDN/SSL), just add the same
CNAME records there instead of at the registrar.

## 6. Suggested next steps (SEO phase)
Once live:
- Verify the domain in **Google Search Console**, submit a sitemap.
- Add a proper `sitemap.xml` and `robots.txt` to `client/public/`.
- Set up **GA4** for traffic tracking.
- Add Open Graph meta tags to `client/index.html` for clean link previews when shared.
