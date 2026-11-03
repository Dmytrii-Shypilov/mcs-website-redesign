import type { Metadata } from "next";
import Image from "next/image";

import p from "../pages.module.scss";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";
import { Container, Section, SectionHeading, TextLink } from "@/components/ui";
import Reveal from "@/components/ui/Reveal";
import { countWord, getService, industries, legacyIndustryAnchors } from "@/content/site";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Advisory across agribusiness, energy, water, healthcare, mining, infrastructure, financial services, private capital, real estate and technology in the UAE, GCC and Africa.",
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
            title={`${countWord(industries.length, true)} sectors, one regional network`}
            align="split"
            intro="Each sector team combines regulatory knowledge with direct access to authorities, partners and investors."
          />
          <ul className={p.ind_grid}>
            {industries.map((ind, i) => {
              const sv = getService(ind.service);
              return (
                <Reveal as="li" key={ind.id} id={ind.id} delay={(i % 3) * 0.08} className={p.ind_item}>
                  {/* Old anchors (e.g. /industries#technology) keep working */}
                  {legacyIndustryAnchors[ind.id]?.map((alias) => (
                    <span key={alias} id={alias} className={p.ind_anchor} aria-hidden />
                  ))}
                  {/* Card styles live on an inner element: Reveal owns the li's inline transform */}
                  <article className={p.ind_card}>
                    <div className={p.ind_media}>
                      <Image
                        src={ind.image}
                        alt={ind.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                        className={p.ind_img}
                        style={ind.objectPosition ? { objectPosition: ind.objectPosition } : undefined}
                      />
                      <span className={p.ind_num} aria-hidden>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className={p.ind_body}>
                      <h2 className={p.ind_title}>{ind.title}</h2>
                      <p className={p.ind_text}>{ind.text}</p>
                      <div className={p.ind_link}>
                        <TextLink href={`/services/${sv.slug}`}>{sv.shortTitle}</TextLink>
                      </div>
                    </div>
                  </article>
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
