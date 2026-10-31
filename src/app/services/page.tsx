import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import p from "../pages.module.scss";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";
import { Container, Section, SectionHeading } from "@/components/ui";
import Reveal from "@/components/ui/Reveal";
import { IconArrow } from "@/components/ui/icons";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Consultancy Services in the UAE, GCC and Africa",
  description:
    "Corporate services, government relations and capital acquisition facilitation for international businesses expanding into the Middle East and Africa.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Integrated consultancy for regional growth"
        lead="Three specialised practices that take you from market entry and government access to growth capital."
        image="/images/skyline.webp"
        imageAlt="Dubai skyline at dusk"
        crumbs={[{ label: "Services", href: "/services" }]}
      />

      <Section labelledBy="practices-title">
        <Container>
          <SectionHeading
            id="practices-title"
            eyebrow="Practices"
            title="Choose a starting point — or combine all three"
            align="split"
            intro="Most clients work with more than one practice. We coordinate everything through a single point of contact."
          />
          <div className={p.rows}>
            {services.map((sv, i) => (
              <Reveal key={sv.slug} className={[p.row, i % 2 === 1 && p.row_rev].filter(Boolean).join(" ")}>
                <div className={p.row_media}>
                  <Image
                    src={sv.image}
                    alt={sv.imageAlt}
                    width={900}
                    height={640}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className={p.row_img}
                  />
                </div>
                <div className={p.row_copy}>
                  <span className={p.row_num}>{sv.number}</span>
                  <h2 className={p.row_title}>{sv.title}</h2>
                  <p className={p.row_text}>{sv.lead}</p>
                  <ul className={p.tags}>
                    {sv.offerings.map((o) => (
                      <li key={o.title}>{o.title}</li>
                    ))}
                  </ul>
                  <Link href={`/services/${sv.slug}`} className={p.row_link}>
                    Explore {sv.shortTitle} <IconArrow aria-hidden />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand title="Not sure where to start?" text="Tell us your objective. We will recommend the right combination of services." />
    </>
  );
}
