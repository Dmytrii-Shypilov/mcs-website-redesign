// Central content source for the MCS website.
// Edit texts here; pages and components read from this file.

export const site = {
  name: "MCS Consultancy",
  legalName: "MGI Consultancy LLC",
  brandLong: "Maria Consultancy Services",
  group: "Maria Group International",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mcsconsultant.com",
  tagline: "International Advisory — Government, Capital & Corporate",
  description:
    "Dubai-based advisory firm connecting international businesses and investors with the UAE, GCC and Africa across market entry, government relations, capital and major projects.",
  partnerModel: "Regulated services are delivered through our network of licensed partner firms, coordinated by MCS.",
  phone: "+971 585 949 313",
  phoneHref: "tel:+971585949313",
  email: "info@mcsconsultant.com",
  address: {
    street: "Office 1503, Prism Tower, Business Bay",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
  },
  hours: "Monday – Friday, 9:00 – 18:00 (GST)",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.031001803184!2d55.25886198912654!3d25.185947343595284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d0d69e8d93%3A0x8f0fe5aa20493ae4!2sThe%20Prism!5e1!3m2!1sen!2sae!4v1725656691883!5m2!1sen!2sae",
  social: {
    linkedin: "",
    x: "",
    instagram: "",
  },
};

/* ---------- Types ---------- */

export type Offering = { title: string; text: string };
export type Faq = { q: string; a: string };

export type PillarId = "market-entry" | "capital-finance" | "strategy-governance" | "real-assets";

export type Pillar = {
  id: PillarId;
  number: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
};

export type Service = {
  slug: string;
  number: string;
  pillar: PillarId;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  lead: string;
  partnerNote?: string;
  image: string;
  imageAlt: string;
  ogImage?: string;
  objectPosition?: string;
  offerings: Offering[];
  outcomes: string[];
  audience: string[];
  faqs: Faq[];
  related: string[];
};

export type Industry = {
  id: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  service: string;
  featured?: boolean;
  objectPosition?: string;
};

/* ---------- Pillars ---------- */

export const pillars: Pillar[] = [
  {
    id: "market-entry",
    number: "01",
    title: "Market Entry & Government Access",
    summary: "Set up, gain approvals and build the relationships that let you operate in the region.",
    image: "/images/uae-skyscrapers.webp",
    imageAlt: "UAE business district towers",
  },
  {
    id: "capital-finance",
    number: "02",
    title: "Capital & Finance",
    summary: "Equity, debt and fund solutions that connect you with the right investors and lenders.",
    image: "/images/investment-key.webp",
    imageAlt: "Investment and capital raising concept",
  },
  {
    id: "strategy-governance",
    number: "03",
    title: "Strategy & Governance",
    summary: "Structure, governance and technology that make organisations investor-ready.",
    image: "/images/corporate-office.webp",
    imageAlt: "Modern corporate office interior",
  },
  {
    id: "real-assets",
    number: "04",
    title: "Real Assets & Projects",
    summary: "Land, developments and major projects brought together with partners and financing.",
    image: "/images/downtown.webp",
    imageAlt: "Downtown Dubai skyline at dusk",
  },
];

/* ---------- Services ---------- */

export const services: Service[] = [
  {
    slug: "company-formation",
    number: "01",
    pillar: "market-entry",
    title: "Company Formation",
    shortTitle: "Company Formation",
    metaTitle: "Company Formation in the UAE, GCC and Africa | MCS Consultancy",
    metaDescription:
      "Company set-up across UAE mainland, free zones, the GCC and Africa, with licensing, bank account opening and ongoing compliance support.",
    summary: "Entity set-up, licensing and banking for businesses entering the UAE, GCC and Africa.",
    lead: "We set up the right legal entity in the UAE, GCC, Africa and beyond, then support you through banking, licensing and compliance so you can trade from day one.",
    image: "/images/dubai-business.webp",
    imageAlt: "Business district in Dubai",
    offerings: [
      {
        title: "Structure selection",
        text: "Free zone, mainland, offshore, branch or representative office, chosen for your ownership, tax and licensing needs.",
      },
      {
        title: "Name and licence approval",
        text: "Name reservation, business activity selection and trade licence applications.",
      },
      {
        title: "Incorporation documents",
        text: "Memorandum and Articles of Association, shareholder agreements and filings.",
      },
      { title: "Tax and regulatory registration", text: "Corporate tax, VAT and sector-specific approvals." },
      { title: "Bank account opening", text: "Introductions to banks and preparation of KYC files." },
      { title: "Ongoing compliance", text: "Accounting set-up, licence renewals and annual filings." },
    ],
    outcomes: [
      "An operating entity on a clear timeline",
      "A structure that fits your ownership and tax plans",
      "One point of contact throughout",
    ],
    audience: [
      "International companies entering the region",
      "Founders and family businesses relocating",
      "Groups adding a regional holding or branch",
    ],
    faqs: [
      {
        q: "Which jurisdictions do you cover?",
        a: "UAE mainland and free zones, other GCC states and key African markets, plus further jurisdictions through Maria Group International.",
      },
      {
        q: "Can MCS act as our local representative?",
        a: "Yes. We can represent international businesses locally, managing introductions, meetings and relationships with clients and authorities.",
      },
      {
        q: "How long does set-up take?",
        a: "It depends on the jurisdiction and activity; we confirm a timeline after the first consultation.",
      },
    ],
    related: ["government-relations", "legal-services"],
  },
  {
    slug: "government-relations",
    number: "02",
    pillar: "market-entry",
    title: "Corporate & Government Relations",
    shortTitle: "Government Relations",
    metaTitle: "Government Relations Consultancy in the UAE, GCC and Africa",
    metaDescription:
      "Strategic government and corporate relations: stakeholder engagement, approvals, public–private partnerships and regulatory navigation in the UAE, GCC and Africa.",
    summary:
      "Structured engagement with government entities, regulators and decision-makers across the UAE, GCC and Africa.",
    lead: "We bridge businesses and government entities. With a deep understanding of regional regulation and protocol, we open dialogue, secure approvals and build long-term institutional partnerships.",
    image: "/images/uae-skyscrapers.webp",
    imageAlt: "Government and business district skyline in the UAE",
    offerings: [
      {
        title: "Stakeholder Mapping",
        text: "Identification of the ministries, authorities and decision-makers relevant to your objectives.",
      },
      {
        title: "High-Level Introductions",
        text: "Structured, protocol-aware introductions and meetings with government and corporate leaders.",
      },
      {
        title: "Approvals & Permits",
        text: "Guidance and facilitation through licensing, approvals and procurement processes.",
      },
      {
        title: "Public–Private Partnerships",
        text: "Positioning and support for PPP projects and government tenders.",
      },
      {
        title: "Regulatory Navigation",
        text: "Clear insight into regional frameworks, policy direction and compliance expectations.",
      },
      {
        title: "Delegations & Business Missions",
        text: "End-to-end organisation of official visits, delegations and bilateral programmes.",
      },
    ],
    outcomes: [
      "Access to the right decision-makers",
      "Fewer regulatory delays",
      "Long-term institutional relationships",
    ],
    audience: [
      "Multinationals working with public-sector clients",
      "Companies bidding for government projects",
      "Foreign governments and trade agencies",
    ],
    faqs: [
      {
        q: "Which governments and regions do you work with?",
        a: "Our focus is the UAE, the wider GCC and Africa, connecting them with businesses and institutions from Europe, the Americas and Asia.",
      },
      {
        q: "Do you support government tenders and PPP projects?",
        a: "Yes. We help clients understand requirements, position their offer and build relationships with the relevant entities.",
      },
    ],
    related: ["foreign-investment", "construction"],
  },
  {
    slug: "foreign-investment",
    number: "03",
    pillar: "market-entry",
    title: "Foreign Investment",
    shortTitle: "Foreign Investment",
    metaTitle: "Foreign Investment Advisory for the Middle East and Africa | MCS Consultancy",
    metaDescription:
      "Opportunity screening, project sourcing, investment structuring and approvals for investors entering the UAE, GCC and Africa.",
    summary: "Opportunities, partners and approvals for investors entering the Middle East and Africa.",
    lead: "We help investors and companies put capital to work in the Middle East and Africa, finding the right projects, partners and structures and managing approvals along the way.",
    image: "/images/foreign-investment.webp",
    imageAlt: "Container port at dusk representing cross-border investment",
    offerings: [
      { title: "Opportunity screening", text: "Country and sector assessment to shortlist where your capital fits." },
      { title: "Project sourcing", text: "Introductions to vetted projects, sponsors and joint-venture partners." },
      { title: "Investment structuring", text: "Holding structures and JV terms, with our tax and legal partners." },
      {
        title: "Approvals and incentives",
        text: "Investment licences, free-zone benefits and government incentive programmes.",
      },
      { title: "Risk assessment", text: "Political, currency and counterparty risk reviewed before you commit." },
      {
        title: "Post-investment support",
        text: "Local representation, reporting and stakeholder management.",
      },
    ],
    outcomes: [
      "Qualified opportunities matched to your mandate",
      "A clear view of risk before you commit",
      "Approvals handled through the right channels",
    ],
    audience: [
      "Corporates making direct investments",
      "Institutional and family office investors",
      "Governments and agencies attracting investment",
    ],
    faqs: [
      {
        q: "Which markets do you focus on?",
        a: "The UAE, GCC and Africa, with strong links to India and Asia.",
      },
      {
        q: "How do you assess risk?",
        a: "We combine local partners, government contacts and independent due diligence before any recommendation.",
      },
    ],
    related: ["company-formation", "government-relations"],
  },
  {
    slug: "legal-services",
    number: "04",
    pillar: "market-entry",
    title: "Legal Services",
    shortTitle: "Legal Services",
    metaTitle: "Corporate & Commercial Legal Support in the UAE and Africa | MCS Consultancy",
    metaDescription:
      "Coordinated corporate, M&A, regulatory, real estate, employment and dispute support through licensed partner law firms.",
    summary: "Corporate and commercial legal support coordinated through licensed partner firms.",
    lead: "Through our network of licensed law firms, we coordinate corporate and commercial legal support across every jurisdiction you operate in.",
    partnerNote:
      "Legal advice and representation are provided by licensed partner law firms. MCS selects and coordinates the engagement.",
    image: "/images/legal-services-desk.webp",
    imageAlt: "Contract review at a boardroom desk",
    ogImage: "/images/legal-services-sign.webp",
    offerings: [
      {
        title: "Corporate and commercial",
        text: "Contracts, shareholder and partnership agreements, and governance documents.",
      },
      {
        title: "Mergers and acquisitions",
        text: "Legal due diligence, transaction documents and closing support.",
      },
      { title: "Regulatory compliance", text: "Licensing, sector regulation and reporting obligations." },
      {
        title: "Real estate and projects",
        text: "Purchase, lease and development agreements, and title checks.",
      },
      { title: "Employment", text: "Contracts, workplace policies and labour-law compliance." },
      { title: "Disputes", text: "Commercial disputes, debt recovery, arbitration and mediation." },
    ],
    outcomes: [
      "The right specialist in each jurisdiction",
      "One coordinated view across firms",
      "Legal risk managed early",
    ],
    audience: [
      "Companies entering or operating in the region",
      "Investors in cross-border transactions",
      "Project sponsors and developers",
    ],
    faqs: [
      {
        q: "Are you a law firm?",
        a: "No. Advice and representation come from licensed partner firms; we select and coordinate them.",
      },
      {
        q: "Which jurisdictions do you cover?",
        a: "The UAE and GCC, Africa, and international firms for cross-border matters.",
      },
    ],
    related: ["company-formation", "corporate-advisory"],
  },
  {
    slug: "capital-markets",
    number: "05",
    pillar: "capital-finance",
    title: "Capital Markets",
    shortTitle: "Capital Markets",
    metaTitle: "Capital Markets Advisory & Investor Introductions | Dubai | MCS Consultancy",
    metaDescription:
      "Confidential investor introductions, investment readiness, listing routes and deal structuring for companies, projects and governments.",
    summary: "Investor access, readiness and listing routes for companies, projects and governments.",
    lead: "We connect companies, projects and governments with the investors and capital-market routes that fit them, and prepare them to raise with confidence.",
    image: "/images/investment-key.webp",
    imageAlt: "Investment and capital raising concept",
    offerings: [
      {
        title: "Investor introductions",
        text: "Private equity, venture capital, family offices, institutions and strategic investors.",
      },
      {
        title: "Investment readiness",
        text: "Review of your equity story, financials and governance before you approach investors.",
      },
      {
        title: "Equity and listing routes",
        text: "Pre-IPO rounds, listings and private placements, with licensed arrangers.",
      },
      { title: "Deal structuring", text: "Instruments and terms that suit both sides." },
      {
        title: "Investor materials",
        text: "Teasers, information memoranda, business cases and financial models.",
      },
      { title: "Transaction support", text: "Coordination through due diligence, negotiation and closing." },
    ],
    outcomes: ["A qualified investor pipeline", "A credible equity story", "A confidential, well-run process"],
    audience: [
      "Growth-stage companies raising capital",
      "Project sponsors seeking co-investors",
      "Investors seeking regional deal flow",
    ],
    faqs: [
      {
        q: "What types of investors do you work with?",
        a: "Private equity, venture capital, family offices, institutions and corporate investors across our network.",
      },
      {
        q: "How do you protect confidentiality?",
        a: "Every engagement is under NDA, and information is shared only with qualified, pre-approved parties.",
      },
    ],
    related: ["private-equity", "finance-banking-debt"],
  },
  {
    slug: "finance-banking-debt",
    number: "06",
    pillar: "capital-finance",
    title: "Finance, Banking & Debt Capital",
    shortTitle: "Debt Capital",
    metaTitle: "Finance, Banking & Debt Capital Advisory | MCS Consultancy",
    metaDescription:
      "Bank facilities, bonds, sukuk, project and development finance, refinancing and treasury advisory across the UAE, GCC and Africa.",
    summary: "Bank facilities, bonds, sukuk and project finance on the right terms.",
    lead: "We help businesses and project sponsors secure the right debt on the right terms, from bank facilities to bonds, sukuk and development finance.",
    image: "/images/finance-banking.webp",
    imageAlt: "Financial district towers",
    offerings: [
      {
        title: "Bank facilities",
        text: "Term loans, revolving credit, trade finance and guarantees, structured and negotiated with lenders.",
      },
      {
        title: "Debt capital markets",
        text: "Bonds, sukuk, private placements and MTN programmes, with licensed arrangers.",
      },
      {
        title: "Project and development finance",
        text: "Introductions to development finance institutions, export credit agencies and project lenders.",
      },
      {
        title: "Refinancing and restructuring",
        text: "Refinancing, covenant resets and lender negotiations.",
      },
      { title: "Capital structure", text: "The right mix of debt and equity, and liquidity planning." },
      { title: "Treasury and risk", text: "Interest-rate and currency risk frameworks." },
    ],
    outcomes: [
      "Access to a wider lender base",
      "Better terms and covenant headroom",
      "Funding matched to your business cycle",
    ],
    audience: [
      "Corporates and project sponsors",
      "Financial institutions seeking partners",
      "Businesses refinancing or restructuring",
    ],
    faqs: [
      {
        q: "Which lenders do you work with?",
        a: "Commercial banks, development finance institutions, export credit agencies and capital-market investors.",
      },
      {
        q: "Do you arrange Shariah-compliant finance?",
        a: "Yes, through partner institutions experienced in sukuk and Islamic facilities.",
      },
    ],
    related: ["capital-markets", "corporate-advisory"],
  },
  {
    slug: "private-equity",
    number: "07",
    pillar: "capital-finance",
    title: "Private Equity",
    shortTitle: "Private Equity",
    metaTitle: "Private Equity Deal Origination & Advisory | MCS Consultancy",
    metaDescription:
      "Off-market deal origination, buy-side and sell-side support, co-investment partners and exit planning across the Middle East, Africa and Asia.",
    summary: "Deal origination, co-investors and transaction support for funds and business owners.",
    lead: "We bring together business owners, fund managers and co-investors, sourcing deals, preparing companies and supporting transactions from first meeting to exit.",
    image: "/images/private-equity.webp",
    imageAlt: "Executive meeting in a glass meeting room",
    offerings: [
      { title: "Deal origination", text: "Off-market opportunities across the Middle East, Africa and Asia." },
      {
        title: "Buy-side support",
        text: "Target screening, introductions and initial due diligence for funds and family offices.",
      },
      {
        title: "Growth capital and sell-side",
        text: "Preparing owners for growth rounds, buyouts or partial exits.",
      },
      { title: "Co-investment partners", text: "Introductions to LPs and co-investors for larger tickets." },
      {
        title: "Value creation",
        text: "Market entry, government access and partnerships for portfolio companies.",
      },
      { title: "Exit planning", text: "Strategic sale, secondary sale or listing routes." },
    ],
    outcomes: [
      "Proprietary deal flow",
      "Companies ready for diligence",
      "Regional growth routes for portfolio companies",
    ],
    audience: ["PE and VC funds", "Family offices", "Founder-led businesses seeking capital or an exit"],
    faqs: [
      {
        q: "Which stages do you cover?",
        a: "Venture, growth, buyout and special situations, depending on the investor's mandate.",
      },
      {
        q: "How are introductions handled?",
        a: "Under NDA, with information shared only with pre-qualified parties.",
      },
    ],
    related: ["capital-markets", "corporate-advisory"],
  },
  {
    slug: "funds-management",
    number: "08",
    pillar: "capital-finance",
    title: "Funds Management",
    shortTitle: "Funds Management",
    metaTitle: "Fund Set-Up, Investor Access & Manager Selection | MCS Consultancy",
    metaDescription:
      "Fund structuring, regional investor access, distribution support and manager selection, delivered with licensed partner managers.",
    summary: "Fund set-up, investor access and manager selection with licensed partners.",
    lead: "We help fund managers set up, raise and grow funds in the region, and help investors find managers that fit their mandate.",
    partnerNote:
      "Portfolio management is carried out by licensed partner managers. MCS advises, structures and introduces; we do not manage client money.",
    image: "/images/funds-management.webp",
    imageAlt: "Analyst desk with market data screens",
    offerings: [
      {
        title: "Fund set-up",
        text: "Jurisdiction, vehicle and regulatory route, with legal and fund-administration partners.",
      },
      {
        title: "Investor access",
        text: "Introductions to institutions, family offices and high-net-worth investors in the region.",
      },
      {
        title: "Manager selection",
        text: "For investors: shortlisting managers across equities, fixed income, real estate and alternatives.",
      },
      { title: "Distribution support", text: "Regional marketing and investor relations." },
      { title: "Governance and reporting", text: "Board, compliance and reporting frameworks." },
      { title: "Bespoke mandates", text: "Separate accounts and tailored mandates for larger investors." },
    ],
    outcomes: [
      "A faster route to a regulated fund",
      "A regional investor pipeline",
      "Mandates matched to objectives",
    ],
    audience: [
      "Asset and fund managers entering the region",
      "Pension funds, endowments and institutions",
      "Family offices and high-net-worth individuals",
    ],
    faqs: [
      {
        q: "Does MCS manage client money?",
        a: "No. Licensed managers run portfolios; we advise, structure and introduce.",
      },
      {
        q: "Which fund types do you cover?",
        a: "Equity, fixed income, real estate, private markets and alternatives.",
      },
    ],
    related: ["capital-markets", "private-equity"],
  },
  {
    slug: "corporate-advisory",
    number: "09",
    pillar: "strategy-governance",
    title: "Corporate Advisory & Governance",
    shortTitle: "Corporate Advisory",
    metaTitle: "Corporate Advisory & Governance Consultancy | MCS Consultancy",
    metaDescription:
      "Corporate structuring, M&A advisory, board effectiveness, risk and internal controls, and ESG governance for growing organisations.",
    summary: "Structuring, M&A and governance that investors, lenders and regulators expect.",
    lead: "We help boards and leadership teams structure, govern and grow their organisations, building the governance that investors, lenders and regulators expect.",
    image: "/images/corporate-advisory.webp",
    imageAlt: "Empty boardroom with a city view",
    offerings: [
      { title: "Corporate structuring", text: "Holding structures, restructurings and reorganisations." },
      { title: "M&A advisory", text: "Strategy, target search and transaction coordination." },
      {
        title: "Governance frameworks",
        text: "Board charters, committees, policies and codes of conduct.",
      },
      {
        title: "Board effectiveness",
        text: "Governance reviews, board evaluations and advice on directors' duties.",
      },
      {
        title: "Risk and internal controls",
        text: "Enterprise risk frameworks, internal controls and audit coordination.",
      },
      {
        title: "ESG governance",
        text: "Sustainability oversight and reporting that meets investor expectations.",
      },
    ],
    outcomes: ["Investor-ready governance", "Clear accountability", "Lower regulatory and reputational risk"],
    audience: [
      "Family businesses formalising their structure",
      "Companies preparing for investment or listing",
      "State-owned and public entities",
    ],
    faqs: [
      {
        q: "When should a company review its governance?",
        a: "Before raising capital, entering a new market, listing or planning succession.",
      },
      {
        q: "Do you work with family businesses?",
        a: "Yes, including family charters, succession and the move to professional management.",
      },
    ],
    related: ["capital-markets", "legal-services"],
  },
  {
    slug: "technology",
    number: "10",
    pillar: "strategy-governance",
    title: "Technology, Data, Cyber & AI",
    shortTitle: "Technology & AI",
    metaTitle: "Technology, Data, Cybersecurity & AI Advisory | MCS Consultancy",
    metaDescription:
      "Go-to-market for technology firms and vendor-neutral support for digital transformation, data, cybersecurity and AI adoption.",
    summary: "Go-to-market for technology firms and vetted partners for transformation, cyber and AI.",
    lead: "We help technology companies enter the region and help organisations adopt technology well, by connecting them with the right buyers, partners and specialists.",
    partnerNote:
      "Implementation is delivered by specialist technology partners. MCS leads strategy, selection and introductions.",
    image: "/images/technology.webp",
    imageAlt: "Data centre corridor in blue light",
    offerings: [
      {
        title: "Go-to-market",
        text: "Market entry, distribution partners and public-sector buyers for technology firms.",
      },
      {
        title: "Digital transformation",
        text: "Strategy and vendor selection for cloud, ERP and IoT programmes.",
      },
      { title: "Data and analytics", text: "Data strategy, analytics and reporting partners." },
      {
        title: "Cybersecurity",
        text: "Security assessments, frameworks and managed-security partners.",
      },
      {
        title: "AI adoption",
        text: "Use-case selection and implementation partners for machine learning and automation.",
      },
      { title: "Growth capital", text: "Investor introductions for technology companies." },
    ],
    outcomes: [
      "Faster access to regional buyers",
      "Vetted delivery partners",
      "Technology choices tied to business goals",
    ],
    audience: [
      "Technology companies expanding into the GCC and Africa",
      "Corporates and governments modernising",
      "TMT investors",
    ],
    faqs: [
      {
        q: "Do you build software?",
        a: "No. Delivery is by specialist partners; we lead strategy, selection and introductions.",
      },
      {
        q: "Do you work with the public sector?",
        a: "Yes, connecting suppliers with digital, smart-city and AI programmes across the region.",
      },
    ],
    related: ["company-formation", "capital-markets"],
  },
  {
    slug: "real-estate",
    number: "11",
    pillar: "real-assets",
    title: "Real Estate",
    shortTitle: "Real Estate",
    metaTitle: "Real Estate Investment & Development Advisory in Dubai | MCS Consultancy",
    metaDescription:
      "Investment sourcing, development partnerships, feasibility, project financing and transaction support for developers, funds and investors.",
    summary: "Land, projects and capital for developers, funds and investors.",
    lead: "We connect developers, funds and investors with land, projects and capital across the region, from site selection to financing and exit.",
    partnerNote: "Property brokerage is carried out by licensed real estate partners.",
    image: "/images/real-estate.webp",
    imageAlt: "Modern residential and commercial towers in Dubai",
    offerings: [
      {
        title: "Investment sourcing",
        text: "Residential, commercial, hospitality and logistics assets matched to your mandate.",
      },
      {
        title: "Development partnerships",
        text: "Land, joint ventures and government land programmes.",
      },
      {
        title: "Feasibility and valuation",
        text: "Market studies, feasibility and valuation with independent partners.",
      },
      { title: "Project financing", text: "Bank, fund and co-investor introductions for developments." },
      {
        title: "Site selection and leasing",
        text: "Offices, retail and warehouses for companies entering the region.",
      },
      {
        title: "Transaction support",
        text: "Due diligence, documentation and closing with legal partners.",
      },
    ],
    outcomes: ["Opportunities that meet your return targets", "Funded projects", "Smooth transactions"],
    audience: [
      "Developers",
      "Real estate funds and institutional investors",
      "Companies needing regional premises",
    ],
    faqs: [
      {
        q: "Do you work with individual homebuyers?",
        a: "Our focus is investors, developers and companies; we refer individual buyers to licensed agents.",
      },
      {
        q: "Which markets do you cover?",
        a: "Dubai and the wider UAE, the GCC and selected African cities.",
      },
    ],
    related: ["construction", "finance-banking-debt"],
  },
  {
    slug: "construction",
    number: "12",
    pillar: "real-assets",
    title: "Construction & Major Projects",
    shortTitle: "Major Projects",
    metaTitle: "Construction & Major Projects Facilitation | MCS Consultancy",
    metaDescription:
      "Project origination, contractor and EPC consortia, feasibility, financing and approvals for major projects in the UAE, GCC and Africa.",
    summary: "Contractors, EPC partners and financing brought together for major projects.",
    lead: "We bring major projects together, matching government and private sponsors with qualified contractors, EPC partners and financing, from feasibility to completion.",
    partnerNote:
      "Construction is carried out by qualified contractors and EPC partners. MCS structures the project, assembles the consortium and secures financing.",
    image: "/images/construction.webp",
    imageAlt: "Cranes over a large construction site at sunset",
    offerings: [
      {
        title: "Project origination",
        text: "Access to government tenders, private projects and PPP programmes.",
      },
      {
        title: "Consortium building",
        text: "Introductions to contractors, EPC firms and engineering partners.",
      },
      {
        title: "Feasibility and planning",
        text: "Feasibility studies, site analysis and risk assessment with technical partners.",
      },
      {
        title: "Project financing",
        text: "Lenders, DFIs, export credit agencies and equity partners for capital-intensive projects.",
      },
      {
        title: "Approvals and permits",
        text: "Permits and engagement with government stakeholders.",
      },
      {
        title: "Owner's-side oversight",
        text: "Independent monitoring of cost, schedule and quality, including energy-efficient and green-building compliance.",
      },
    ],
    outcomes: [
      "Funded, well-structured projects",
      "A credible delivery consortium",
      "Fewer delays from approvals",
    ],
    audience: [
      "Governments and public agencies",
      "International contractors and EPC firms entering the region",
      "Developers and project sponsors",
    ],
    faqs: [
      {
        q: "Does MCS build projects itself?",
        a: "No. Contractors build; we structure the project, assemble partners and secure financing.",
      },
      {
        q: "Which project types do you cover?",
        a: "Commercial, residential, industrial and infrastructure, including roads, bridges and utilities.",
      },
    ],
    related: ["finance-banking-debt", "government-relations"],
  },
];

/* ---------- Industries ---------- */

export const industries: Industry[] = [
  {
    id: "agribusiness",
    title: "Agribusiness",
    text: "Land access, food-security partnerships and project finance for producers, processors and agri-investors.",
    image: "/images/ind-agribusiness.webp",
    imageAlt: "Lettuce growing in a large illuminated greenhouse",
    service: "foreign-investment",
  },
  {
    id: "automotive",
    title: "Automotive",
    text: "Market entry, distribution partners and assembly or EV projects across the GCC and Africa.",
    image: "/images/ind-automotive.webp",
    imageAlt: "Robotic arms assembling a car body on a production line",
    service: "company-formation",
  },
  {
    id: "banks",
    title: "Banks & Financial Institutions",
    text: "Licensing, regulator engagement and correspondent partnerships for banks, fintechs and DFIs.",
    image: "/images/ind-banks.webp",
    imageAlt: "Carved stone \"Bank\" sign on a classical building facade",
    service: "finance-banking-debt",
    featured: true,
  },
  {
    id: "water",
    title: "Water",
    text: "Desalination, treatment and utility projects, from government tenders to project financing.",
    image: "/images/ind-water.webp",
    imageAlt: "Coastal desalination and power plant beside the sea",
    service: "construction",
  },
  {
    id: "energy",
    title: "Energy",
    text: "Renewable, conventional and transition projects: offtakers, sponsors and financing partners.",
    image: "/images/ind-energy.webp",
    imageAlt: "Solar panels and wind turbines at sunrise",
    service: "foreign-investment",
    featured: true,
  },
  {
    id: "government",
    title: "Government",
    text: "Advisory and partner introductions for ministries, agencies and state-owned enterprises.",
    image: "/images/ind-government.webp",
    imageAlt: "Row of ceremonial flags in a government building corridor",
    service: "government-relations",
    featured: true,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    text: "Market entry, regulatory approvals and investment for hospitals, pharma and medical suppliers.",
    image: "/images/ind-healthcare.webp",
    imageAlt: "Modern medical research laboratory with microscopes",
    service: "foreign-investment",
    featured: true,
  },
  {
    id: "industrials",
    title: "Industrials",
    text: "Plant set-up, local partners and expansion capital for manufacturers.",
    image: "/images/ind-industrials.webp",
    imageAlt: "Orange industrial robots on a factory floor",
    service: "company-formation",
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Transport",
    text: "PPP positioning, contractor consortia and financing for roads, ports, rail and logistics.",
    image: "/images/ind-infrastructure.webp",
    imageAlt: "Highway interchange in front of the Dubai skyline",
    service: "construction",
    featured: true,
  },
  {
    id: "mining",
    title: "Mining",
    text: "Licensing, government engagement, and offtake and capital partners for mining projects.",
    image: "/images/ind-mining.webp",
    imageAlt: "Mining excavator at a mine site at dusk",
    service: "government-relations",
  },
  {
    id: "private-capital",
    title: "Private Capital",
    text: "Deal flow, co-investors and portfolio expansion for PE, VC and family offices.",
    image: "/images/ind-private-capital.webp",
    imageAlt: "Investor reviewing financial reports with a calculator",
    service: "private-equity",
    featured: true,
  },
  {
    id: "real-estate",
    title: "Real Estate",
    text: "Project partnerships, land and investor introductions for developers and real estate funds.",
    image: "/images/ind-real-estate.webp",
    imageAlt: "Glass high-rise towers in a business district",
    service: "real-estate",
  },
  {
    id: "tmt",
    title: "Technology, Media & Telecommunications",
    text: "Go-to-market, public-sector adoption and growth capital for TMT companies.",
    image: "/images/ind-tmt.webp",
    imageAlt: "Telecommunications towers with antennas and satellite dishes",
    service: "technology",
  },
];

/** Old /industries anchors that may be linked externally → the card they now point to. */
export const legacyIndustryAnchors: Record<string, string[]> = {
  banks: ["finance-banking"],
  "private-capital": ["capital-markets", "private-equity"],
  infrastructure: ["construction"],
  tmt: ["technology"],
};

/* ---------- Other content ---------- */

export const approach = [
  {
    step: "01",
    title: "Understand",
    text: "We define your objectives, constraints and target markets.",
  },
  {
    step: "02",
    title: "Strategise",
    text: "We map stakeholders, structures and the route to market.",
  },
  {
    step: "03",
    title: "Connect",
    text: "We open doors with authorities, partners and investors.",
  },
  {
    step: "04",
    title: "Deliver",
    text: "We manage execution and stay involved for the long term.",
  },
];

export const values = [
  {
    title: "Discretion",
    text: "Confidentiality is built into every engagement.",
  },
  {
    title: "Integrity",
    text: "Transparent advice and full regulatory compliance.",
  },
  {
    title: "Local Insight",
    text: "Deep knowledge of regional markets, culture and protocol.",
  },
  {
    title: "Partnership",
    text: "Long-term relationships over one-off transactions.",
  },
];

export const partners = [
  {
    name: "Ciceres",
    href: "https://ciceres.com/",
    logo: "/images/ciceres-logo.webp",
    width: 957,
    height: 261,
  },
  {
    name: "ADFIAP",
    href: "https://www.adfiap.org/",
    logo: "/images/adfiap-logo.webp",
    width: 529,
    height: 472,
  },
];

export const regions = {
  from: ["Europe", "North America", "East Asia"],
  to: ["United Arab Emirates", "GCC", "Africa"],
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* ---------- Helpers ---------- */

export function getService(slug: string): Service {
  const sv = services.find((x) => x.slug === slug);
  if (!sv) throw new Error(`Unknown service slug: ${slug}`);
  return sv;
}

export function getPillar(id: PillarId): Pillar {
  const pl = pillars.find((x) => x.id === id);
  if (!pl) throw new Error(`Unknown pillar: ${id}`);
  return pl;
}

export function servicesByPillar(id: PillarId): Service[] {
  return services.filter((sv) => sv.pillar === id);
}

export const featuredIndustries = industries.filter((ind) => ind.featured);

const numberWords = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
];

/** Spell out small counts ("twelve"); falls back to digits above twenty. */
export function countWord(n: number, capitalise = false): string {
  const w = numberWords[n] ?? String(n);
  return capitalise ? w.charAt(0).toUpperCase() + w.slice(1) : w;
}

/* ---------- Integrity checks (run at build and in dev) ---------- */

(function validateContent() {
  const errors: string[] = [];
  const slugs = new Set(services.map((sv) => sv.slug));
  if (slugs.size !== services.length) errors.push("Duplicate service slugs");

  services.forEach((sv) => {
    if (!pillars.some((pl) => pl.id === sv.pillar)) errors.push(`${sv.slug}: unknown pillar "${sv.pillar}"`);
    if (sv.offerings.length !== 6) errors.push(`${sv.slug}: expected 6 offerings, got ${sv.offerings.length}`);
    if (sv.outcomes.length !== 3) errors.push(`${sv.slug}: expected 3 outcomes`);
    if (sv.audience.length !== 3) errors.push(`${sv.slug}: expected 3 audience items`);
    if (sv.related.length !== 2) errors.push(`${sv.slug}: expected 2 related services`);
    sv.related.forEach((r) => {
      if (!slugs.has(r)) errors.push(`${sv.slug}: related slug "${r}" does not exist`);
      if (r === sv.slug) errors.push(`${sv.slug}: relates to itself`);
    });
  });

  const ids = new Set(industries.map((ind) => ind.id));
  if (ids.size !== industries.length) errors.push("Duplicate industry ids");
  industries.forEach((ind) => {
    if (!slugs.has(ind.service)) errors.push(`industry ${ind.id}: service "${ind.service}" does not exist`);
  });
  if (featuredIndustries.length !== 6) errors.push(`Expected 6 featured industries, got ${featuredIndustries.length}`);

  Object.entries(legacyIndustryAnchors).forEach(([target, aliases]) => {
    if (!ids.has(target)) errors.push(`legacy anchor target "${target}" does not exist`);
    aliases.forEach((a) => {
      if (ids.has(a)) errors.push(`legacy anchor "${a}" collides with a current industry id`);
    });
  });

  if (errors.length) throw new Error(`Content errors in src/content/site.ts:\n- ${errors.join("\n- ")}`);
})();
