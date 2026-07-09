# Vantage AI — Next.js site

Converted from your `agency.html` into Next.js 14 (App Router) + TypeScript + Tailwind CSS +
Framer Motion. This README is deliberately honest about what's done vs. what still needs your
own accounts — see "What's not done yet" below.

## What's done

- **Full conversion to React components** — every section (Nav, Hero, chat demo, Services,
  Industries, Case Studies, Custom Automation, Testimonials, FAQ, Contact, Footer) is its own
  component in `/components`.
- **Content pulled into `/data`** — services, industries, case studies, testimonials, and FAQ are
  plain TypeScript arrays, not hardcoded in markup. This is what makes it "CMS-ready": swap the
  array export for a `fetch()` and nothing else changes.
- **Animations with Framer Motion** — scroll reveals, the animated counters, the floating chat
  demo, and the FAQ accordion are all rebuilt with Framer Motion instead of the original vanilla
  JS + IntersectionObserver.
- **Working contact form** — built with `react-hook-form`, posts to a real API route at
  `app/api/contact/route.ts`. It validates input server-side and will send you an email via
  Resend the moment you add an API key (details below). Until then it logs submissions server-side
  so nothing is silently lost.
- **SEO basics** — proper `<title>`/meta description/Open Graph/Twitter card via Next's Metadata
  API, plus `robots.ts` and `sitemap.ts`.
- **Responsive & accessible** — this is a straight port of your original Tailwind classes, which
  were already responsive; focus-visible states and `prefers-reduced-motion` are preserved.

I ran `npm install`, `tsc --noEmit`, and a full `next build` to confirm the project actually
compiles (the only failure in this sandbox was Google Fonts being unreachable behind its network
restrictions — that will not happen on your machine or on Vercel, which both have normal internet
access).

## What's *not* done yet, and why

I can't create accounts or deploy on your behalf — those require your own logins, payment details,
and decisions about which vendor you want. Here's exactly what's left and how long each takes:

### 1. Deploy to Vercel (~5 min)
```
npm install -g vercel
vercel
```
Or push this folder to a GitHub repo and import it at vercel.com/new. No config changes needed.

### 2. Wire up the contact form to Resend (~5 min)
1. Create a free account at resend.com and grab an API key.
2. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`.
3. Redeploy (or restart `npm run dev`). Submissions will start emailing you — the code path is
   already written in `app/api/contact/route.ts`.

### 3. Connect a CMS (Sanity / Strapi / Payload) (~1–2 hrs)
Right now content lives in `/data/*.ts`. To make it editable without a code deploy:
- **Sanity** (fastest to set up, generous free tier): create a project, define schemas matching
  the shapes in `/data` (`Service`, `CaseStudy`, `Testimonial`, `FaqItem`), then replace each
  static array with a `client.fetch(...)` call in the corresponding component.
- **Strapi / Payload** (self-hosted, more control): same idea — stand up the CMS, define
  collections, fetch from your Next.js components or via `getStaticProps`-equivalent server
  components.
I didn't pick one for you since it's a real product decision (hosting cost, who edits content,
self-hosted vs. managed).

### 4. Database (Supabase / Postgres) — only if you need one
The current site is stateless (no logins, no stored leads beyond the emailed contact form). Add a
database only if you want to, e.g., store leads in a table instead of just emailing them, or build
a client login/dashboard. Supabase is the fastest path: create a project, add `DATABASE_URL` to
`.env.local`, and use their JS client or an ORM like Prisma/Drizzle.

### 5. Analytics
Add `NEXT_PUBLIC_GA_ID` (Google Analytics) and/or `NEXT_PUBLIC_CLARITY_ID` (Microsoft Clarity) to
`.env.local`, then drop their standard snippets into `app/layout.tsx`. I left the env vars stubbed
in `.env.example` but didn't hardcode a tracking ID since it's tied to your own GA/Clarity account.

### 6. Booking (Calendly), WhatsApp, CRM (HubSpot/GoHighLevel)
These are all "paste an embed/webhook once you have the account" integrations:
- **Calendly**: swap the "Book a free strategy call" links for a Calendly popup widget or embed.
- **WhatsApp**: add a `wa.me` link or the WhatsApp Business API widget.
- **CRM**: on successful form submit, POST the lead to HubSpot's or GoHighLevel's API (both have
  simple REST endpoints) in `app/api/contact/route.ts`, right where the email currently sends.

## Local development

```
npm install
cp .env.example .env.local   # fill in what you have; everything works without any of it
npm run dev
```

## Project structure

```
app/
  layout.tsx        SEO metadata, fonts
  page.tsx           assembles all sections
  globals.css         converted custom CSS (glass, grid-bg, grad-text, etc.)
  api/contact/route.ts  form submission handler
  robots.ts / sitemap.ts
components/           one file per section
data/                 content — swap for CMS fetches later
```
