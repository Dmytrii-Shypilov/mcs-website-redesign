import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import p from "../../pages.module.scss";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";
import Faqs from "@/components/blocks/Faqs";
import JsonLd from "@/components/seo/JsonLd";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui";
import Reveal from "@/components/ui/Reveal";
import { IconArrow, IconCheck } from "@/components/ui/icons";
import { getService, services, site } from "@/content/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return services.map((sv) => ({ slug: sv.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: Props): Metadata {
  const sv = services.find((x) => x.slug === params.slug);
  if (!sv) return {};
  return {
    title: sv.metaTitle,
    description: sv.metaDescription,
    alternates: { canonical: `/services/${sv.slug}` },
    openGraph: {
      title: sv.metaTitle,
      description: sv.metaDescription,
      url: `/services/${sv.slug}`,
      images: [{ url: sv.image }],
    },
  };
}

export default function ServicePage({ params }: Props) {
  const sv = services.find((x) => x.slug === params.slug);
  if (!sv) notFound();

  const others = sv.related.map(getService);

  return (
    <>
      <PageHero
        eyebrow={`Practice ${sv.number}`}
        title={sv.title}
        lead={sv.lead}
        image={sv.image}
        imageAlt={sv.imageAlt}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: sv.shortTitle, href: `/services/${sv.slug}` },
        ]}
      />

      {/* What we do */}
      <Section labelledBy="offer-title">
        <Container>
          <SectionHeading id="offer-title" eyebrow="What we do" title="How we support you" align="split" intro={sv.summary} />
          <ul className={p.offer_grid}>
            {sv.offerings.map((o, i) => (
              <Reveal as="li" key={o.title} delay={(i % 3) * 0.06} className={p.offer}>
                <span className={p.offer_num}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={p.offer_title}>{o.title}</h3>
                <p className={p.offer_text}>{o.text}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Outcomes & audience */}
      <Section tone="navy" labelledBy="value-title">
        <Container className={p.value}>
          <div>
            <Eyebrow light>The value</Eyebrow>
            <h2 id="value-title" className={p.value_title}>
              What you can expect
            </h2>
          </div>
          <div className={p.value_cols}>
            <div>
              <h3 className={p.value_label}>Outcomes</h3>
              <ul className={p.value_list}>
                {sv.outcomes.map((o) => (
                  <li key={o}>
                    <IconCheck aria-hidden /> {o}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={p.value_label}>Who it is for</h3>
              <ul className={p.value_list}>
                {sv.audience.map((a) => (
                  <li key={a}>
                    <IconCheck aria-hidden /> {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section labelledBy="faq-title">
        <Container className={p.faq_wrap}>
          <SectionHeading id="faq-title" eyebrow="FAQ" title="Common questions" />
          <Faqs items={sv.faqs} />
        </Container>
      </Section>

      {/* Related */}
      <Section tone="mist" labelledBy="related-title">
        <Container>
          <SectionHeading id="related-title" eyebrow="Related services" title="Combine with" />
          <ul className={p.related}>
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`} className={p.related_link}>
                  <span className={p.row_num}>{o.number}</span>
                  <span className={p.related_title}>{o.title}</span>
                  <span className={p.related_text}>{o.summary}</span>
                  <IconArrow aria-hidden className={p.related_arrow} />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand title={`Discuss ${sv.shortTitle.toLowerCase()} with our team`} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: sv.title,
          description: sv.metaDescription,
          url: `${site.url}/services/${sv.slug}`,
          provider: { "@id": `${site.url}/#organization` },
          areaServed: ["United Arab Emirates", "GCC", "Africa"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: sv.title,
            itemListElement: sv.offerings.map((o) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: o.title, description: o.text },
            })),
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: sv.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </>
  );
}
