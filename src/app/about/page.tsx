import type { Metadata } from "next";
import Image from "next/image";

import p from "../pages.module.scss";
import PageHero from "@/components/blocks/PageHero";
import CtaBand from "@/components/blocks/CtaBand";
import Partners from "@/components/blocks/Partners";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui";
import Reveal from "@/components/ui/Reveal";
import { site, values } from "@/content/site";

export const metadata: Metadata = {
  title: "About MCS — Maria Consultancy Services",
  description:
    "MCS is a Dubai-based government and corporate relations consultancy within Maria Group International, serving clients across the UAE, GCC and Africa.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MCS"
        title="Experts in strategic government and corporate consultancy"
        lead="A Dubai-based consultancy that helps international organisations build a lasting presence in the Middle East and Africa."
        image="/images/talking-persons-2.webp"
        imageAlt="Consultants in discussion"
        crumbs={[{ label: "About", href: "/about" }]}
      />

      <Section labelledBy="story-title">
        <Container className={p.story}>
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <h2 id="story-title" className={p.h2}>
              From in-house advisor to international consultancy
            </h2>
          </Reveal>
          <Reveal delay={0.1} className={p.story_text}>
            <p>
              MCS — {site.brandLong} — began within {site.group} to serve the group&apos;s own companies. Demand
              grew, and MCS opened its expertise to external corporate and governmental clients.
            </p>
            <p>
              Today MCS is a cluster of companies in several jurisdictions, each with a specialised focus. Our clients
              are at the centre of every engagement, and our solutions follow their goals.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="mist" labelledBy="values-title">
        <Container>
          <SectionHeading id="values-title" eyebrow="Our values" title="What guides every engagement" align="center" />
          <ul className={p.values}>
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 0.06} className={p.value_card}>
                <span className={p.value_num}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={p.value_card_title}>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section labelledBy="vm-title">
        <Container className={p.vm}>
          <Reveal className={p.vm_media}>
            <Image
              src="/images/uae-skyscrapers.webp"
              alt="Skyscrapers in the United Arab Emirates"
              width={575}
              height={862}
              sizes="(min-width: 1024px) 35vw, 100vw"
              className={p.vm_img}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Vision &amp; mission</Eyebrow>
            <h2 id="vm-title" className={p.h2}>
              Bridging cultures, building partnerships
            </h2>
            <div className={p.vm_block}>
              <h3>Vision</h3>
              <p>
                To bridge cultural divides and streamline government and corporate interactions, so our clients thrive in
                the complex and diverse markets of the Middle East and Africa.
              </p>
            </div>
            <div className={p.vm_block}>
              <h3>Mission</h3>
              <p>
                To connect Western and East Asian businesses with the UAE, GCC and African markets, using our expertise
                in government and corporate relations to create lasting, mutually beneficial partnerships.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Partners />
      <CtaBand />
    </>
  );
}
