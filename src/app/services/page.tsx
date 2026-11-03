import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import p from "../pages.module.scss";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";
import { Container, Section, SectionHeading } from "@/components/ui";
import Reveal from "@/components/ui/Reveal";
import { IconArrow } from "@/components/ui/icons";
import { countWord, pillars, services, servicesByPillar } from "@/content/site";

export const metadata: Metadata = {
  title: "Advisory Services in the UAE, GCC and Africa",
  description:
    "Market entry, government relations, capital and finance, governance and major-project advisory for international businesses and investors in the Middle East and Africa.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Integrated consultancy for regional growth"
        lead={`${countWord(services.length, true)} services in ${countWord(pillars.length)} practices, taking you from market entry and government access to capital, governance and major projects.`}
        image="/images/skyline.webp"
        imageAlt="Dubai skyline at dusk"
        crumbs={[{ label: "Services", href: "/services" }]}
      />

      <Section labelledBy="practices-title">
        <Container>
          <SectionHeading
            id="practices-title"
            eyebrow="Practices"
            title={`${countWord(pillars.length, true)} practices. One point of contact.`}
            align="split"
            intro="Most clients work across more than one practice. We coordinate everything through a single team."
          />
          <div className={p.rows}>
            {pillars.map((pl, i) => (
              <Reveal
                key={pl.id}
                id={pl.id}
                className={[p.row, i % 2 === 1 && p.row_rev].filter(Boolean).join(" ")}
              >
                <div className={p.row_media}>
                  <Image
                    src={pl.image}
                    alt={pl.imageAlt}
                    width={900}
                    height={675}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className={p.row_img}
                  />
                </div>
                <div className={p.row_copy}>
                  <span className={p.row_num}>{pl.number}</span>
                  <h2 className={p.row_title}>{pl.title}</h2>
                  <p className={p.row_text}>{pl.summary}</p>
                  <ul className={p.pillar_services}>
                    {servicesByPillar(pl.id).map((sv) => (
                      <li key={sv.slug}>
                        <Link href={`/services/${sv.slug}`} className={p.pillar_service}>
                          <span className={p.pillar_service_title}>
                            {sv.title}
                            <IconArrow aria-hidden />
                          </span>
                          <span className={p.pillar_service_text}>{sv.summary}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
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
