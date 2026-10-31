// Central content source for the MCS website.
// Edit texts here; pages and components read from this file.

export const site = {
  name: "MCS Consultancy",
  legalName: "MGI Consultancy LLC",
  brandLong: "Maria Consultancy Services",
  group: "Maria Group International",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mcsconsultant.com",
  tagline: "Government & Corporate Relations Consultancy",
  description:
    "Dubai-based consultancy connecting international businesses with the UAE, GCC and Africa through corporate services, government relations and capital facilitation.",
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

export type Offering = { title: string; text: string };
export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  lead: string;
  image: string;
  imageAlt: string;
  offerings: Offering[];
  outcomes: string[];
  audience: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "corporate-services",
    number: "01",
    title: "Corporate Services",
    shortTitle: "Corporate Services",
    metaTitle: "Corporate Services & Company Formation in the UAE, GCC and Africa",
    metaDescription:
      "Company formation, exclusive representation and market entry support for international businesses expanding into the UAE, GCC and Africa.",
    summary:
      "Company formation, representation and market entry for businesses expanding into the Middle East and Africa.",
    lead: "We set up, represent and grow international businesses in the UAE, GCC and Africa, so you can enter new markets with the right structure and the right relationships from day one.",
    image: "/images/corporate-office.webp",
    imageAlt: "Modern corporate office interior in Dubai",
    offerings: [
      {
        title: "Company Representation",
        text: "Exclusive local representation for international firms, from first introductions to ongoing stakeholder management.",
      },
      {
        title: "Company Formation Worldwide",
        text: "Entity selection, licensing and registration across mainland, free zone and offshore jurisdictions.",
      },
      {
        title: "Market & Client Development",
        text: "Targeted introductions to buyers, distributors and partners in new markets and sectors.",
      },
      {
        title: "Private Equity & Venture Capital Introductions",
        text: "Curated access to investors aligned with your growth stage and sector.",
      },
      {
        title: "Corporate Structuring",
        text: "Holding, operating and regional structures designed for efficiency and compliance.",
      },
      {
        title: "Ongoing Compliance Support",
        text: "Licence renewals, regulatory filings and corporate housekeeping handled on your behalf.",
      },
    ],
    outcomes: [
      "Faster, compliant market entry",
      "A trusted local presence",
      "Qualified clients and partners",
    ],
    audience: [
      "International companies entering the region",
      "Family businesses expanding abroad",
      "Investors establishing regional holdings",
    ],
    faqs: [
      {
        q: "Which jurisdictions do you cover for company formation?",
        a: "We support mainland and free zone set-ups across the UAE and wider GCC, as well as selected jurisdictions in Africa, Europe and Asia through our partner network.",
      },
      {
        q: "Can MCS act as our local representative?",
        a: "Yes. We act as an exclusive representative for international businesses, managing introductions, meetings and relationships with clients and authorities.",
      },
      {
        q: "How long does a typical UAE company set-up take?",
        a: "Timelines depend on the jurisdiction and activity. We provide a clear schedule after an initial consultation.",
      },
    ],
  },
  {
    slug: "government-relations",
    number: "02",
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
  },
  {
    slug: "capital-advisory",
    number: "03",
    title: "Capital Acquisition Facilitation",
    shortTitle: "Capital Facilitation",
    metaTitle: "Capital Acquisition Facilitation & Investor Introductions | Dubai",
    metaDescription:
      "Confidential investor introductions to private equity, venture capital and family offices, plus investment readiness and financial structuring support.",
    summary:
      "Confidential introductions to private equity, venture capital and family offices, with investment readiness support.",
    lead: "We connect growing businesses with the right capital. From investment readiness to investor introductions, we handle the process with discretion and a focus on long-term alignment.",
    image: "/images/investment-key.webp",
    imageAlt: "Investment and capital raising concept",
    offerings: [
      {
        title: "Investor Introductions",
        text: "Access to private equity firms, venture capitalists, family offices and strategic corporates.",
      },
      {
        title: "Investment Readiness",
        text: "Review of your equity story, financials and governance before you approach investors.",
      },
      {
        title: "Financial Structuring",
        text: "Advice on deal structure, instruments and terms that suit both sides.",
      },
      {
        title: "Business Case & Materials",
        text: "Investor-grade presentations, teasers and business cases.",
      },
      {
        title: "Market Analysis",
        text: "Market sizing and competitive insight to support valuation and positioning.",
      },
      {
        title: "Transaction Support",
        text: "Coordination through due diligence, negotiation and closing.",
      },
    ],
    outcomes: [
      "Qualified investor pipeline",
      "A compelling, credible equity story",
      "Confidential, well-run process",
    ],
    audience: [
      "Growth-stage companies raising capital",
      "Project sponsors seeking co-investors",
      "Investors seeking regional deal flow",
    ],
    faqs: [
      {
        q: "What types of investors do you work with?",
        a: "Private equity firms, venture capitalists, private family offices and corporate investors across our international network.",
      },
      {
        q: "How do you protect confidentiality?",
        a: "All engagements are covered by NDAs, and sensitive information is shared only with qualified, pre-approved parties.",
      },
    ],
  },
];

export const industries = [
  {
    id: "finance-banking",
    title: "Finance & Banking",
    text: "Licensing, regulator engagement and partnerships for banks, fintechs and financial institutions.",
  },
  {
    id: "capital-markets",
    title: "Capital Markets & Funds",
    text: "Fund set-up, investor access and distribution support for asset and fund managers.",
  },
  {
    id: "private-equity",
    title: "Private Equity & Venture Capital",
    text: "Deal origination, co-investment partners and portfolio expansion into the region.",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    text: "Market entry, project partnerships and investor introductions for developers and funds.",
  },
  {
    id: "construction",
    title: "Construction & Infrastructure",
    text: "Government project access, PPP positioning and local partnerships for contractors.",
  },
  {
    id: "technology",
    title: "Technology",
    text: "Go-to-market, public-sector adoption and growth capital for technology companies.",
  },
];

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
