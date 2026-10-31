# MCS Consultancy — website

Next.js 14 (App Router) · TypeScript · SCSS modules · Framer Motion.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

| What | Where |
| --- | --- |
| All texts, services, industries, contacts | `src/content/site.ts` |
| Colours, fonts, spacing (design tokens) | `src/styles/globals.scss` |
| Pages | `src/app/*` (`/`, `/services`, `/services/[slug]`, `/industries`, `/about`, `/contact`, `/privacy`) |
| Header, footer | `src/components/layout` |
| Reusable sections (page hero, CTA, FAQ, partners, form) | `src/components/blocks` |

## SEO

- Per-page titles, descriptions and canonical URLs
- `sitemap.xml` and `robots.txt` generated automatically
- Structured data: ProfessionalService, Service, FAQPage, BreadcrumbList
- Set `NEXT_PUBLIC_SITE_URL` in Vercel if the domain differs from `https://www.mcsconsultant.com`

## Contact form

The form currently opens the visitor's email app with the enquiry pre-filled.
To deliver enquiries directly, connect an email service (e.g. Resend or Formspree) in
`src/components/blocks/ContactForm.tsx`.
