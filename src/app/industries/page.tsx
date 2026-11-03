import type { Metadata } from "next";

import p from "../pages.module.scss";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";
import { Container, Section, SectionHeading, TextLink } from "@/components/ui";
import Reveal from "@/components/ui/Reveal";
import { getService, industries } from "@/content/site";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Consultancy for finance and banking, capital markets, private equity, real estate, construction and technology companies across the UAE, GCC and Africa.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector focus where relationships matter most"
        lead="We work in regulated, relationship-driven sectors where local access and the right capital partners decide success."
        image="/images/dubai-landscape.webp"
        imageAlt="Panoramic view of Dubai"
        crumbs={[{ label: "Industries", href: "/industries" }]}
      />

      <Section labelledBy="sectors-title">
        <Container>
          <SectionHeading
            id="sectors-title"
            eyebrow="Sectors"
            title="Six industries, one regional network"
            align="split"
            intro="Each sector team combines regulatory knowledge with direct access to authorities, partners and investors."
          />
          <ul className={p.sector_list}>
            {industries.map((ind, i) => {
              const rel = getService(ind.service);
              return (
                <Reveal as="li" key={ind.id} className={p.sector}>
                  <div id={ind.id} className={p.anchor} />
                  <span className={p.sector_num}>{String(i + 1).padStart(2, "0")}</span>
                  <h2 className={p.sector_title}>{ind.title}</h2>
                  <p className={p.sector_text}>{ind.text}</p>
                  {rel && (
                    <div className={p.sector_link}>
                      <TextLink href={`/services/${rel.slug}`}>{rel.shortTitle}</TextLink>
                    </div>
                  )}
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>

      <CtaBand title="Working in a sector not listed here?" text="Our network extends further. Tell us about your project and we will connect you with the right expertise." />
    </>
  );
}
