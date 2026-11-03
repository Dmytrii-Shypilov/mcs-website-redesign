import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@/styles/globals.scss";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { services, site } from "@/content/site";

// Self-hosted fonts (SIL Open Font License) — no third-party font requests.
const display = localFont({
  src: [
    { path: "../fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-500-italic.woff2", weight: "500", style: "italic" },
    { path: "../fonts/cormorant-garamond-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-600-italic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const body = localFont({
  src: "../fonts/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "international advisory Dubai",
    "government relations consultancy Dubai",
    "company formation UAE",
    "market entry GCC",
    "foreign investment advisory Africa",
    "capital markets advisory Dubai",
    "debt capital and project finance",
    "private equity deal origination",
    "corporate governance consultancy",
    "real estate and major projects advisory",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [{ url: "/images/dubai-landscape.webp", width: 1920, height: 1080, alt: "Dubai skyline" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: ["/images/dubai-landscape.webp"],
  },
  icons: { icon: "/images/favicon.ico" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#00274d",
  width: "device-width",
  initialScale: 1,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: site.brandLong,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/images/mcs-logo.webp`,
  image: `${site.url}/images/dubai-landscape.webp`,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  parentOrganization: { "@type": "Organization", name: site.group },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressCountry: site.address.countryCode,
  },
  areaServed: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman", "Africa"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Advisory services",
    itemListElement: services.map((sv) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: sv.title, url: `${site.url}/services/${sv.slug}` },
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={orgSchema} />
      </body>
    </html>
  );
}
