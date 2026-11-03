# MCS website — content expansion brief for Claude Code

Repository: `Dmytrii-Shypilov/mcs-website-redesign` (Next.js 14 App Router, TypeScript, SCSS modules, framer-motion).
Goal: expand the site from 3 services / 6 industries to **12 services in 4 pillars** and **13 industries**, using the refined copy below, while keeping the existing design system intact. The result must read as an international, corporate-grade advisory firm.

Read this whole file before writing code. Work in the phases at the end, run `npm run build` and `npm run lint` after each phase, and fix every error before moving on.

---

## 0. Ground rules

**Keep the existing design language. Do not introduce a new one.**

- Colours, fonts, spacing and radii come only from the tokens in `src/styles/globals.scss` (`--navy-*`, `--blue-*`, `--steel-*`, `--gold`, `--mist`, `--font-display` Cormorant, `--font-body` Inter, `--radius: 2px`, `--container: 1240px`, `--section-y`, `--ease`). No new hex values, no new fonts, no rounded-corner "SaaS" cards, no gradients other than the navy shades already used.
- Breakpoints only via the `up()` / `down()` mixins in `src/styles/_mixins.scss`.
- Reuse existing primitives: `Container`, `Section` (tones `white | mist | navy | deep`), `SectionHeading` (`left | center | split`), `Eyebrow`, `ButtonLink`, `TextLink`, `Reveal`, `PageHero`, `CtaBand`, `Faqs`, `JsonLd`. Extend them with new props rather than writing parallel components.
- All copy lives in `src/content/site.ts`. Pages must not hard-code service names, slugs or counts — derive counts from array lengths (e.g. `${services.length}`) or write them in `site.ts`.
- UK English throughout (organisation, strategise, programme). The copy below is final — paste it exactly.
- Accessibility stays at the current level: semantic headings in order, `aria-*` on menus, visible `focus-ring`, alt text on every content image, and every animation disabled under `prefers-reduced-motion` (follow the pattern in `Reveal.tsx`).
- Do not delete existing images. Do not add dependencies.

---

## 1. Content model changes (`src/content/site.ts`)

### 1.1 Types

```ts
export type PillarId = "market-entry" | "capital-finance" | "strategy-governance" | "real-assets";

export type Pillar = {
  id: PillarId;
  number: string;          // "01".."04"
  title: string;
  summary: string;         // one sentence, shown on /services and in the mega menu
  image: string;
  imageAlt: string;
};

export type Service = {
  slug: string;
  number: string;          // "01".."12", global order below
  pillar: PillarId;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;         // one line, used in cards, menu and "Combine with"
  lead: string;            // hero paragraph
  partnerNote?: string;    // only for regulated services (see below)
  image: string;           // hero / card image
  imageAlt: string;
  ogImage?: string;        // defaults to image
  offerings: Offering[];   // exactly 6
  outcomes: string[];      // exactly 3
  audience: string[];      // exactly 3
  faqs: Faq[];             // exactly 2 (Company Formation keeps 3)
  related: string[];       // exactly 2 slugs, rendered in "Combine with"
};

export type Industry = {
  id: string;              // anchor on /industries
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  service: string;         // slug of the most relevant service
  featured?: boolean;      // shown on the homepage (exactly 6)
};
```

Replace the `relatedService` map in `src/app/industries/page.tsx` with `Industry.service` (look up the title from `services`). Replace the "all other services" logic in `services/[slug]/page.tsx` with `sv.related`.

### 1.2 Pillars

| # | id | title | summary | image |
|---|---|---|---|---|
| 01 | market-entry | Market Entry & Government Access | Set up, gain approvals and build the relationships that let you operate in the region. | `/images/uae-skyscrapers.webp` |
| 02 | capital-finance | Capital & Finance | Equity, debt and fund solutions that connect you with the right investors and lenders. | `/images/investment-key.webp` |
| 03 | strategy-governance | Strategy & Governance | Structure, governance and technology that make organisations investor-ready. | `/images/corporate-office.webp` |
| 04 | real-assets | Real Assets & Projects | Land, developments and major projects brought together with partners and financing. | `/images/downtown.webp` |

Alt texts: "UAE business district towers", "Investment and capital raising concept", "Modern corporate office interior", "Downtown Dubai skyline at dusk".

### 1.3 Site-level copy

- `site.tagline`: `International Advisory — Government, Capital & Corporate`
- `site.description`: `Dubai-based advisory firm connecting international businesses and investors with the UAE, GCC and Africa across market entry, government relations, capital and major projects.`
- `site.partnerModel` (new string, used in footer and About): `Regulated services are delivered through our network of licensed partner firms, coordinated by MCS.`

### 1.4 Slug changes and redirects

| Old slug | New slug |
|---|---|
| `corporate-services` | `company-formation` |
| `capital-advisory` | `capital-markets` |

Add to `redirects()` in `next.config.mjs` (keep the existing `/business` rule):

```js
{ source: "/services/corporate-services", destination: "/services/company-formation", permanent: true },
{ source: "/services/capital-advisory", destination: "/services/capital-markets", permanent: true },
```

Update `serviceIcons` in `src/components/ui/icons.tsx`: key it by **pillar id** instead of slug (market-entry → `IconBuilding`, capital-finance → `IconGrowth`, existing government icon → strategy-governance, and add one simple line icon in the same stroke style for real-assets, e.g. a crane or stacked blocks). Fix every import that used the old keys.

---

## 2. Services — final copy

Order in the array = order below. `number` = position. Each block gives every field; `title` doubles as `shortTitle` unless one is given.

### 01 · Company Formation — `company-formation` — pillar `market-entry`
- shortTitle: Company Formation
- metaTitle: Company Formation in the UAE, GCC and Africa | MCS Consultancy
- metaDescription: Company set-up across UAE mainland, free zones, the GCC and Africa, with licensing, bank account opening and ongoing compliance support.
- summary: Entity set-up, licensing and banking for businesses entering the UAE, GCC and Africa.
- lead: We set up the right legal entity in the UAE, GCC, Africa and beyond, then support you through banking, licensing and compliance so you can trade from day one.
- image: `/images/dubai-business.webp` — alt: "Business district in Dubai"
- offerings:
  1. Structure selection — Free zone, mainland, offshore, branch or representative office, chosen for your ownership, tax and licensing needs.
  2. Name and licence approval — Name reservation, business activity selection and trade licence applications.
  3. Incorporation documents — Memorandum and Articles of Association, shareholder agreements and filings.
  4. Tax and regulatory registration — Corporate tax, VAT and sector-specific approvals.
  5. Bank account opening — Introductions to banks and preparation of KYC files.
  6. Ongoing compliance — Accounting set-up, licence renewals and annual filings.
- outcomes: An operating entity on a clear timeline · A structure that fits your ownership and tax plans · One point of contact throughout
- audience: International companies entering the region · Founders and family businesses relocating · Groups adding a regional holding or branch
- faqs:
  - Which jurisdictions do you cover? — UAE mainland and free zones, other GCC states and key African markets, plus further jurisdictions through Maria Group International.
  - Can MCS act as our local representative? — Yes. We can represent international businesses locally, managing introductions, meetings and relationships with clients and authorities.
  - How long does set-up take? — It depends on the jurisdiction and activity; we confirm a timeline after the first consultation.
- related: `government-relations`, `legal-services`

### 02 · Corporate & Government Relations — `government-relations` — pillar `market-entry`
Keep **all existing copy** for this service unchanged (title, shortTitle, meta, summary, lead, image, offerings, outcomes, audience, faqs). Only set:
- related: `foreign-investment`, `construction`

### 03 · Foreign Investment — `foreign-investment` — pillar `market-entry`
- metaTitle: Foreign Investment Advisory for the Middle East and Africa | MCS Consultancy
- metaDescription: Opportunity screening, project sourcing, investment structuring and approvals for investors entering the UAE, GCC and Africa.
- summary: Opportunities, partners and approvals for investors entering the Middle East and Africa.
- lead: We help investors and companies put capital to work in the Middle East and Africa, finding the right projects, partners and structures and managing approvals along the way.
- image: `/images/foreign-investment.webp` — alt: "Container port at dusk representing cross-border investment"
- offerings:
  1. Opportunity screening — Country and sector assessment to shortlist where your capital fits.
  2. Project sourcing — Introductions to vetted projects, sponsors and joint-venture partners.
  3. Investment structuring — Holding structures and JV terms, with our tax and legal partners.
  4. Approvals and incentives — Investment licences, free-zone benefits and government incentive programmes.
  5. Risk assessment — Political, currency and counterparty risk reviewed before you commit.
  6. Post-investment support — Local representation, reporting and stakeholder management.
- outcomes: Qualified opportunities matched to your mandate · A clear view of risk before you commit · Approvals handled through the right channels
- audience: Corporates making direct investments · Institutional and family office investors · Governments and agencies attracting investment
- faqs:
  - Which markets do you focus on? — The UAE, GCC and Africa, with strong links to India and Asia.
  - How do you assess risk? — We combine local partners, government contacts and independent due diligence before any recommendation.
- related: `company-formation`, `government-relations`

### 04 · Legal Services — `legal-services` — pillar `market-entry`
- metaTitle: Corporate & Commercial Legal Support in the UAE and Africa | MCS Consultancy
- metaDescription: Coordinated corporate, M&A, regulatory, real estate, employment and dispute support through licensed partner law firms.
- summary: Corporate and commercial legal support coordinated through licensed partner firms.
- lead: Through our network of licensed law firms, we coordinate corporate and commercial legal support across every jurisdiction you operate in.
- partnerNote: Legal advice and representation are provided by licensed partner law firms. MCS selects and coordinates the engagement.
- image: `/images/legal-services-desk.webp` — alt: "Contract review at a boardroom desk"
- ogImage: `/images/legal-services-sign.webp`
- offerings:
  1. Corporate and commercial — Contracts, shareholder and partnership agreements, and governance documents.
  2. Mergers and acquisitions — Legal due diligence, transaction documents and closing support.
  3. Regulatory compliance — Licensing, sector regulation and reporting obligations.
  4. Real estate and projects — Purchase, lease and development agreements, and title checks.
  5. Employment — Contracts, workplace policies and labour-law compliance.
  6. Disputes — Commercial disputes, debt recovery, arbitration and mediation.
- outcomes: The right specialist in each jurisdiction · One coordinated view across firms · Legal risk managed early
- audience: Companies entering or operating in the region · Investors in cross-border transactions · Project sponsors and developers
- faqs:
  - Are you a law firm? — No. Advice and representation come from licensed partner firms; we select and coordinate them.
  - Which jurisdictions do you cover? — The UAE and GCC, Africa, and international firms for cross-border matters.
- related: `company-formation`, `corporate-advisory`

### 05 · Capital Markets — `capital-markets` — pillar `capital-finance`
- metaTitle: Capital Markets Advisory & Investor Introductions | Dubai | MCS Consultancy
- metaDescription: Confidential investor introductions, investment readiness, listing routes and deal structuring for companies, projects and governments.
- summary: Investor access, readiness and listing routes for companies, projects and governments.
- lead: We connect companies, projects and governments with the investors and capital-market routes that fit them, and prepare them to raise with confidence.
- image: `/images/investment-key.webp` — alt: "Investment and capital raising concept"
- offerings:
  1. Investor introductions — Private equity, venture capital, family offices, institutions and strategic investors.
  2. Investment readiness — Review of your equity story, financials and governance before you approach investors.
  3. Equity and listing routes — Pre-IPO rounds, listings and private placements, with licensed arrangers.
  4. Deal structuring — Instruments and terms that suit both sides.
  5. Investor materials — Teasers, information memoranda, business cases and financial models.
  6. Transaction support — Coordination through due diligence, negotiation and closing.
- outcomes: A qualified investor pipeline · A credible equity story · A confidential, well-run process
- audience: Growth-stage companies raising capital · Project sponsors seeking co-investors · Investors seeking regional deal flow
- faqs:
  - What types of investors do you work with? — Private equity, venture capital, family offices, institutions and corporate investors across our network.
  - How do you protect confidentiality? — Every engagement is under NDA, and information is shared only with qualified, pre-approved parties.
- related: `private-equity`, `finance-banking-debt`

### 06 · Finance, Banking & Debt Capital — `finance-banking-debt` — pillar `capital-finance`
- shortTitle: Debt Capital
- metaTitle: Finance, Banking & Debt Capital Advisory | MCS Consultancy
- metaDescription: Bank facilities, bonds, sukuk, project and development finance, refinancing and treasury advisory across the UAE, GCC and Africa.
- summary: Bank facilities, bonds, sukuk and project finance on the right terms.
- lead: We help businesses and project sponsors secure the right debt on the right terms, from bank facilities to bonds, sukuk and development finance.
- image: `/images/finance-banking.webp` — alt: "Financial district towers"
- offerings:
  1. Bank facilities — Term loans, revolving credit, trade finance and guarantees, structured and negotiated with lenders.
  2. Debt capital markets — Bonds, sukuk, private placements and MTN programmes, with licensed arrangers.
  3. Project and development finance — Introductions to development finance institutions, export credit agencies and project lenders.
  4. Refinancing and restructuring — Refinancing, covenant resets and lender negotiations.
  5. Capital structure — The right mix of debt and equity, and liquidity planning.
  6. Treasury and risk — Interest-rate and currency risk frameworks.
- outcomes: Access to a wider lender base · Better terms and covenant headroom · Funding matched to your business cycle
- audience: Corporates and project sponsors · Financial institutions seeking partners · Businesses refinancing or restructuring
- faqs:
  - Which lenders do you work with? — Commercial banks, development finance institutions, export credit agencies and capital-market investors.
  - Do you arrange Shariah-compliant finance? — Yes, through partner institutions experienced in sukuk and Islamic facilities.
- related: `capital-markets`, `corporate-advisory`

### 07 · Private Equity — `private-equity` — pillar `capital-finance`
- metaTitle: Private Equity Deal Origination & Advisory | MCS Consultancy
- metaDescription: Off-market deal origination, buy-side and sell-side support, co-investment partners and exit planning across the Middle East, Africa and Asia.
- summary: Deal origination, co-investors and transaction support for funds and business owners.
- lead: We bring together business owners, fund managers and co-investors, sourcing deals, preparing companies and supporting transactions from first meeting to exit.
- image: `/images/private-equity.webp` — alt: "Executive meeting in a glass meeting room"
- offerings:
  1. Deal origination — Off-market opportunities across the Middle East, Africa and Asia.
  2. Buy-side support — Target screening, introductions and initial due diligence for funds and family offices.
  3. Growth capital and sell-side — Preparing owners for growth rounds, buyouts or partial exits.
  4. Co-investment partners — Introductions to LPs and co-investors for larger tickets.
  5. Value creation — Market entry, government access and partnerships for portfolio companies.
  6. Exit planning — Strategic sale, secondary sale or listing routes.
- outcomes: Proprietary deal flow · Companies ready for diligence · Regional growth routes for portfolio companies
- audience: PE and VC funds · Family offices · Founder-led businesses seeking capital or an exit
- faqs:
  - Which stages do you cover? — Venture, growth, buyout and special situations, depending on the investor's mandate.
  - How are introductions handled? — Under NDA, with information shared only with pre-qualified parties.
- related: `capital-markets`, `corporate-advisory`

### 08 · Funds Management — `funds-management` — pillar `capital-finance`
- metaTitle: Fund Set-Up, Investor Access & Manager Selection | MCS Consultancy
- metaDescription: Fund structuring, regional investor access, distribution support and manager selection, delivered with licensed partner managers.
- summary: Fund set-up, investor access and manager selection with licensed partners.
- lead: We help fund managers set up, raise and grow funds in the region, and help investors find managers that fit their mandate.
- partnerNote: Portfolio management is carried out by licensed partner managers. MCS advises, structures and introduces; we do not manage client money.
- image: `/images/funds-management.webp` — alt: "Analyst desk with market data screens"
- offerings:
  1. Fund set-up — Jurisdiction, vehicle and regulatory route, with legal and fund-administration partners.
  2. Investor access — Introductions to institutions, family offices and high-net-worth investors in the region.
  3. Manager selection — For investors: shortlisting managers across equities, fixed income, real estate and alternatives.
  4. Distribution support — Regional marketing and investor relations.
  5. Governance and reporting — Board, compliance and reporting frameworks.
  6. Bespoke mandates — Separate accounts and tailored mandates for larger investors.
- outcomes: A faster route to a regulated fund · A regional investor pipeline · Mandates matched to objectives
- audience: Asset and fund managers entering the region · Pension funds, endowments and institutions · Family offices and high-net-worth individuals
- faqs:
  - Does MCS manage client money? — No. Licensed managers run portfolios; we advise, structure and introduce.
  - Which fund types do you cover? — Equity, fixed income, real estate, private markets and alternatives.
- related: `capital-markets`, `private-equity`

### 09 · Corporate Advisory & Governance — `corporate-advisory` — pillar `strategy-governance`
- shortTitle: Corporate Advisory
- metaTitle: Corporate Advisory & Governance Consultancy | MCS Consultancy
- metaDescription: Corporate structuring, M&A advisory, board effectiveness, risk and internal controls, and ESG governance for growing organisations.
- summary: Structuring, M&A and governance that investors, lenders and regulators expect.
- lead: We help boards and leadership teams structure, govern and grow their organisations, building the governance that investors, lenders and regulators expect.
- image: `/images/corporate-advisory.webp` — alt: "Empty boardroom with a city view"
- offerings:
  1. Corporate structuring — Holding structures, restructurings and reorganisations.
  2. M&A advisory — Strategy, target search and transaction coordination.
  3. Governance frameworks — Board charters, committees, policies and codes of conduct.
  4. Board effectiveness — Governance reviews, board evaluations and advice on directors' duties.
  5. Risk and internal controls — Enterprise risk frameworks, internal controls and audit coordination.
  6. ESG governance — Sustainability oversight and reporting that meets investor expectations.
- outcomes: Investor-ready governance · Clear accountability · Lower regulatory and reputational risk
- audience: Family businesses formalising their structure · Companies preparing for investment or listing · State-owned and public entities
- faqs:
  - When should a company review its governance? — Before raising capital, entering a new market, listing or planning succession.
  - Do you work with family businesses? — Yes, including family charters, succession and the move to professional management.
- related: `capital-markets`, `legal-services`

### 10 · Technology, Data, Cyber & AI — `technology` — pillar `strategy-governance`
- shortTitle: Technology & AI
- metaTitle: Technology, Data, Cybersecurity & AI Advisory | MCS Consultancy
- metaDescription: Go-to-market for technology firms and vendor-neutral support for digital transformation, data, cybersecurity and AI adoption.
- summary: Go-to-market for technology firms and vetted partners for transformation, cyber and AI.
- lead: We help technology companies enter the region and help organisations adopt technology well, by connecting them with the right buyers, partners and specialists.
- partnerNote: Implementation is delivered by specialist technology partners. MCS leads strategy, selection and introductions.
- image: `/images/technology.webp` — alt: "Data centre corridor in blue light"
- offerings:
  1. Go-to-market — Market entry, distribution partners and public-sector buyers for technology firms.
  2. Digital transformation — Strategy and vendor selection for cloud, ERP and IoT programmes.
  3. Data and analytics — Data strategy, analytics and reporting partners.
  4. Cybersecurity — Security assessments, frameworks and managed-security partners.
  5. AI adoption — Use-case selection and implementation partners for machine learning and automation.
  6. Growth capital — Investor introductions for technology companies.
- outcomes: Faster access to regional buyers · Vetted delivery partners · Technology choices tied to business goals
- audience: Technology companies expanding into the GCC and Africa · Corporates and governments modernising · TMT investors
- faqs:
  - Do you build software? — No. Delivery is by specialist partners; we lead strategy, selection and introductions.
  - Do you work with the public sector? — Yes, connecting suppliers with digital, smart-city and AI programmes across the region.
- related: `company-formation`, `capital-markets`

### 11 · Real Estate — `real-estate` — pillar `real-assets`
- metaTitle: Real Estate Investment & Development Advisory in Dubai | MCS Consultancy
- metaDescription: Investment sourcing, development partnerships, feasibility, project financing and transaction support for developers, funds and investors.
- summary: Land, projects and capital for developers, funds and investors.
- lead: We connect developers, funds and investors with land, projects and capital across the region, from site selection to financing and exit.
- partnerNote: Property brokerage is carried out by licensed real estate partners.
- image: `/images/real-estate.webp` — alt: "Modern residential and commercial towers in Dubai"
- offerings:
  1. Investment sourcing — Residential, commercial, hospitality and logistics assets matched to your mandate.
  2. Development partnerships — Land, joint ventures and government land programmes.
  3. Feasibility and valuation — Market studies, feasibility and valuation with independent partners.
  4. Project financing — Bank, fund and co-investor introductions for developments.
  5. Site selection and leasing — Offices, retail and warehouses for companies entering the region.
  6. Transaction support — Due diligence, documentation and closing with legal partners.
- outcomes: Opportunities that meet your return targets · Funded projects · Smooth transactions
- audience: Developers · Real estate funds and institutional investors · Companies needing regional premises
- faqs:
  - Do you work with individual homebuyers? — Our focus is investors, developers and companies; we refer individual buyers to licensed agents.
  - Which markets do you cover? — Dubai and the wider UAE, the GCC and selected African cities.
- related: `construction`, `finance-banking-debt`

### 12 · Construction & Major Projects — `construction` — pillar `real-assets`
- shortTitle: Major Projects
- metaTitle: Construction & Major Projects Facilitation | MCS Consultancy
- metaDescription: Project origination, contractor and EPC consortia, feasibility, financing and approvals for major projects in the UAE, GCC and Africa.
- summary: Contractors, EPC partners and financing brought together for major projects.
- lead: We bring major projects together, matching government and private sponsors with qualified contractors, EPC partners and financing, from feasibility to completion.
- partnerNote: Construction is carried out by qualified contractors and EPC partners. MCS structures the project, assembles the consortium and secures financing.
- image: `/images/construction.webp` — alt: "Cranes over a large construction site at sunset"
- offerings:
  1. Project origination — Access to government tenders, private projects and PPP programmes.
  2. Consortium building — Introductions to contractors, EPC firms and engineering partners.
  3. Feasibility and planning — Feasibility studies, site analysis and risk assessment with technical partners.
  4. Project financing — Lenders, DFIs, export credit agencies and equity partners for capital-intensive projects.
  5. Approvals and permits — Permits and engagement with government stakeholders.
  6. Owner's-side oversight — Independent monitoring of cost, schedule and quality, including energy-efficient and green-building compliance.
- outcomes: Funded, well-structured projects · A credible delivery consortium · Fewer delays from approvals
- audience: Governments and public agencies · International contractors and EPC firms entering the region · Developers and project sponsors
- faqs:
  - Does MCS build projects itself? — No. Contractors build; we structure the project, assemble partners and secure financing.
  - Which project types do you cover? — Commercial, residential, industrial and infrastructure, including roads, bridges and utilities.
- related: `finance-banking-debt`, `government-relations`

---

## 3. Industries — final copy (`industries` array, in this order)

| id | title | text | image | service | featured |
|---|---|---|---|---|---|
| agribusiness | Agribusiness | Land access, food-security partnerships and project finance for producers, processors and agri-investors. | ind-agribusiness | foreign-investment | |
| automotive | Automotive | Market entry, distribution partners and assembly or EV projects across the GCC and Africa. | ind-automotive | company-formation | |
| banks | Banks & Financial Institutions | Licensing, regulator engagement and correspondent partnerships for banks, fintechs and DFIs. | ind-banks | finance-banking-debt | ✓ |
| water | Water | Desalination, treatment and utility projects, from government tenders to project financing. | ind-water | construction | |
| energy | Energy | Renewable, conventional and transition projects: offtakers, sponsors and financing partners. | ind-energy | foreign-investment | ✓ |
| government | Government | Advisory and partner introductions for ministries, agencies and state-owned enterprises. | ind-government | government-relations | ✓ |
| healthcare | Healthcare | Market entry, regulatory approvals and investment for hospitals, pharma and medical suppliers. | ind-healthcare | foreign-investment | ✓ |
| industrials | Industrials | Plant set-up, local partners and expansion capital for manufacturers. | ind-industrials | company-formation | |
| infrastructure | Infrastructure & Transport | PPP positioning, contractor consortia and financing for roads, ports, rail and logistics. | ind-infrastructure | construction | ✓ |
| mining | Mining | Licensing, government engagement, and offtake and capital partners for mining projects. | ind-mining | government-relations | |
| private-capital | Private Capital | Deal flow, co-investors and portfolio expansion for PE, VC and family offices. | ind-private-capital | private-equity | ✓ |
| real-estate | Real Estate | Project partnerships, land and investor introductions for developers and real estate funds. | ind-real-estate | real-estate | |
| tmt | Technology, Media & Telecommunications | Go-to-market, public-sector adoption and growth capital for TMT companies. | ind-tmt | technology | |

Image paths are `/images/<name>.webp`. Write a short descriptive alt for each (e.g. "Aerial view of irrigated farmland", "Solar farm in a desert landscape", "Open-pit mine with haul trucks").

Old anchors (`finance-banking`, `capital-markets`, `private-equity`, `construction`, `technology`) may be linked externally: keep an empty `<span id="…">` alias next to the nearest new card (finance-banking → banks, capital-markets and private-equity → private-capital, construction → infrastructure, technology → tmt).

---

## 4. Page and component changes

### 4.1 `PageHero` — add a `split` variant for service pages

The new service images are 800–1500 px wide (≈1.41:1). Stretched to a full-bleed 100vw hero they turn soft on large screens, so service pages must use a split hero. Landing pages (`/`, `/services`, `/industries`, `/about`, `/contact`) keep the current full-bleed hero with their existing large images.

Add `variant?: "full" | "split"` (default `"full"`) to `PageHero`:

- `split` layout: navy-950 background, same top padding, breadcrumbs, eyebrow, title and lead in the left column (≈ 7/12); framed image in the right column (≈ 5/12) with `aspect-ratio: 4 / 3`, `object-fit: cover`, `--radius`, and a thin `--gold` offset frame line (1px border on a pseudo-element offset 14px down-right) as the existing `FramedImage` style suggests.
- `next/image` with `fill` inside a positioned wrapper, `priority`, `sizes="(min-width: 1024px) 40vw, 100vw"`.
- Below `lg`: image stacks under the text at full container width, `aspect-ratio: 16 / 10`, max-height 340px.
- Title size in split mode: `clamp(36px, 4.6vw, 60px)` so long titles ("Technology, Data, Cyber & AI") fit on two lines.
- Eyebrow on service pages: the pillar title (e.g. "Capital & Finance"), not "Practice 03".
- Keep the BreadcrumbList JSON-LD.

### 4.2 Partner note (new, inside `services/[slug]/page.tsx`)

When `sv.partnerNote` is set, render it directly below the hero as a slim band: `Section` tone `mist`, reduced vertical padding (≈ 28px), a 2px `--gold` left rule, a small shield/handshake line icon, text in `--ink-2` at 15px. It must read as a professional disclosure, not a warning — no yellow, no "Note:" label.

### 4.3 Service page body

- "How we support you" offer grid: unchanged structure. Add a stagger (`delay={(i % 3) * 0.08}`) and a hover state: top border animates from `--line` to `--gold` and the number shifts to `--gold`, 300ms `--ease`.
- "What you can expect" navy band: unchanged.
- "Combine with": use `sv.related`. Show each related service as a card with a small image (`aspect-ratio: 16/9`, `sizes="(min-width: 768px) 40vw, 100vw"`), number, title, summary and arrow; image scales to 1.04 on hover (CSS transform, `overflow: hidden` on the wrapper).
- `generateMetadata`: use `sv.ogImage ?? sv.image`.
- Keep both JSON-LD blocks; `Service.provider` unchanged.

### 4.4 Header — mega menu

Replace the 3-item Services dropdown with a 4-column mega menu grouped by pillar:

- Panel spans the container width, white background, 1px `--line` border, soft shadow consistent with the current dropdown.
- Each column: pillar number in `--gold` + pillar title (Cormorant), one-line pillar summary in `--ink-3`, then that pillar's services as text links (title only, no summaries). Final row across the panel: "View all services" `TextLink` to `/services`.
- Open/close with framer-motion: opacity 0→1 and y −8→0 over 0.2s with `--ease`; skip the motion under reduced motion. Keep the existing hover, click, blur and Escape behaviour and `aria-expanded` / `aria-controls`.
- Mobile menu: under "Services", render the 4 pillars as accordions (`button` with `aria-expanded`, chevron rotates 180°), each revealing its service links with a height animation.

### 4.5 Footer

Replace the "Services" column (12 links is too long) with the 4 pillars, each linking to `/services#<pillar-id>`. Add `site.partnerModel` as a small line under the brand paragraph. Update the brand paragraph to: `{brandLong} — a {group} company. International advisory headquartered in Dubai, serving the UAE, GCC and Africa.`

### 4.6 `/services`

- Hero lead: `Twelve services in four practices, taking you from market entry and government access to capital, governance and major projects.` (derive "Twelve"/"four" from counts or keep literal — must match the data).
- Section heading: eyebrow "Practices", title "Four practices. One point of contact.", intro "Most clients work across more than one practice. We coordinate everything through a single team."
- Replace the per-service rows with **4 pillar rows**, alternating as today (`row` / `row_rev`), each with `id={pillar.id}` for the footer anchors: pillar image (existing row styles, `sizes="(min-width: 1024px) 45vw, 100vw"`), number, title, summary, then a 2-column list of that pillar's services, each a link with its one-line `summary` beneath and an arrow that slides 4px right on hover.
- CTA band unchanged.

### 4.7 `/industries`

- Section title: "Thirteen sectors, one regional network". Intro unchanged.
- Replace the text-only list with an **image card grid**: 1 column on mobile, 2 from `md`, 3 from `lg`, 24px gap.
  - Card: image wrapper `aspect-ratio: 3 / 2`, `overflow: hidden`, `next/image` `fill`, `object-fit: cover`, `sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"`, lazy (no `priority`).
  - A bottom navy gradient over the image with the number in `--gold`; under the image: title (Cormorant), text, and a `TextLink` to the related service.
  - Hover/focus-within: image scale 1.05 over 600ms `--ease`, card border to `--steel-200`, subtle lift (`translateY(-4px)`) — disabled under reduced motion.
  - Reveal with stagger `(i % 3) * 0.08`.
  - Each card has `id={ind.id}` and `scroll-margin-top` so `/industries#energy` lands correctly under the fixed header.
- Update `metadata.description` to: `Advisory across agribusiness, energy, water, healthcare, mining, infrastructure, financial services, private capital, real estate and technology in the UAE, GCC and Africa.`

### 4.8 Homepage (`src/app/page.tsx`)

- Hero paragraph: `MCS connects international companies, investors and institutions with the UAE, GCC and Africa — through market entry, government relations, capital and major-project facilitation.`
- Services section: title "Four practices. One integrated partner.", intro "Each practice stands alone; together they cover the full journey, from set-up and approvals to capital and delivery." Render the **4 pillars** as the existing service cards (icon by pillar, number, title, summary, first 3 service titles of that pillar as the list, "Learn more" → `/services#<pillar-id>`).
- Industries section: show only `featured` industries (6) in the existing grid, then a centred `TextLink` "View all 13 sectors" → `/industries`. Add a small 16:9 thumbnail at the top of each card using the same hover zoom as 4.7.
- "Where we work" (`tone="deep"` markets section): use `/images/world-map-blue.webp` as a decorative background — absolutely positioned, `object-fit: contain`, opacity ≈ 0.12, `alt=""`, `aria-hidden`, `sizes="100vw"`, below the content. On reveal, fade it from 0 to 0.12 over 1.2s. Keep the From/To route.
- No other homepage sections change.

### 4.9 Other pages

- `/about`: replace any "three practices" wording with the four-practice framing and add `site.partnerModel` as one sentence in the relevant paragraph.
- `/contact` metadata description: `…to discuss market entry, government relations, capital or major projects.`
- `sitemap.ts`: already derives service URLs from `services` — confirm all 12 appear and nothing points at old slugs.
- Search the repo for `capital-advisory`, `corporate-services`, `Capital Facilitation`, `Three practices`, `Six industries`, `combine all three` and remove every remaining reference.

---

## 5. Animation and effects — allowed set

Keep motion restrained; this is a corporate advisory site, not a product launch.

| Where | Effect | Spec |
|---|---|---|
| All section content | Existing `Reveal` fade-up | unchanged (24px, 0.7s, `--ease`) |
| Grids (offers, industries, related, pillars) | Stagger | 0.06–0.08s per item, reset every row of 3 |
| Page hero image (full and split) | Slow settle | `scale 1.06 → 1` over 1.6s on mount, `--ease`; none under reduced motion |
| Image cards | Hover zoom | `scale 1.04–1.05`, 600ms, wrapper `overflow:hidden` |
| Links with arrows | Arrow nudge | `translateX(4px)`, 250ms |
| Offer cards | Rule colour | top border `--line` → `--gold`, 300ms |
| Mega menu, mobile accordion | Fade/slide, height | 0.2s / 0.3s, framer-motion |
| World map background | Fade-in | 0 → 0.12 over 1.2s |

Not allowed: parallax scrolling, counters with invented numbers, auto-playing carousels, typing effects, scroll-jacking, glow or neon effects.

---

## 6. Image handling

All images are already in `public/images/`. Do not resize or re-encode the files; size them through layout and `sizes`.

| Image | Native size | Used in | Container / ratio | `sizes` |
|---|---|---|---|---|
| Service heroes (9 new + `dubai-business`) | 800–1500 × ~1.41 | split hero right column | 4:3 cover, ≤ ~500px wide | `(min-width:1024px) 40vw, 100vw` |
| Same images | | "Combine with" cards | 16:9 cover | `(min-width:768px) 40vw, 100vw` |
| `ind-*.webp` (13) | 700–1300 × ~1.41 | industry cards | 3:2 cover, ≤ 380px wide | `(min-width:1024px) 380px, (min-width:768px) 50vw, 100vw` |
| Same | | homepage industry thumbs | 16:9 cover | `(min-width:1024px) 380px, 100vw` |
| Pillar images (existing) | | `/services` rows | existing `row_img` | `(min-width:1024px) 45vw, 100vw` |
| `world-map-blue.webp` | 1600×1131 | homepage markets bg | contain, decorative | `100vw` |
| `legal-services-sign.webp` | 1500×1061 | Legal OG image only | — | — |

Rules:
- Every content image has a specific alt from section 2 or 3; decorative images use `alt=""` and `aria-hidden`.
- Only the page hero image gets `priority`. Everything else lazy-loads.
- Use `object-position: center` by default; if a crop cuts the subject (check construction, mining, energy, real-estate at mobile width), add a per-item `objectPosition` field rather than a global rule.
- `ind-real-estate.webp` is only 700px wide — never render it wider than ~420px CSS.

---

## 7. Phases and acceptance checks

**Phase 1 — Data.** Types, pillars, 12 services, 13 industries, site copy, redirects, icon map. `npm run build` passes; `/services/<each slug>` renders with existing templates.

**Phase 2 — Templates.** PageHero split variant, partner note, related cards, offer hover, OG image.

**Phase 3 — Navigation and hubs.** Mega menu (desktop + mobile accordion), footer, `/services`, `/industries`, homepage, about, contact.

**Phase 4 — QA.** Before reporting done, verify each item:

- [ ] `npm run build` and `npm run lint` clean, no TypeScript `any` added.
- [ ] All 12 service pages, `/services`, `/industries`, `/`, `/about`, `/contact` render at 375px, 768px, 1280px and 1920px with no horizontal scroll and no text overlapping images.
- [ ] `/services/corporate-services` and `/services/capital-advisory` return 308 to the new URLs.
- [ ] Every `related` slug and `Industry.service` resolves (add a dev-time check in `site.ts` that throws on an unknown slug).
- [ ] Mega menu: opens on hover and click, closes on Escape, blur and route change; keyboard Tab order is logical.
- [ ] With "reduce motion" enabled in the OS, no element animates.
- [ ] No string in the codebase still mentions three practices, six industries or the old slugs.
- [ ] Lighthouse on `/`, `/industries` and `/services/capital-markets`: Performance ≥ 90, Accessibility ≥ 95, SEO 100. No image warnings about oversized or upscaled images.
- [ ] Each service page has a unique `<title>`, meta description, canonical and OG image.

Commit each phase separately with a clear message (e.g. `content: add 12 services and 13 industries`).
