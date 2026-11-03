import Image, { getImageProps } from "next/image";
import Link from "next/link";

import s from "./home.module.scss";
import { ButtonLink, Container, Eyebrow, Section, SectionHeading, TextLink } from "@/components/ui";
import Reveal from "@/components/ui/Reveal";
import Backdrop from "@/components/ui/Backdrop";
import { IconArrow, IconCheck, pillarIcons } from "@/components/ui/icons";
import CtaBand from "@/components/blocks/CtaBand";
import Partners from "@/components/blocks/Partners";
import {
  approach,
  countWord,
  featuredIndustries,
  industries,
  pillars,
  regions,
  servicesByPillar,
  site,
} from "@/content/site";

const heroAlt = "Business leaders walking together in Dubai's financial district";

// Art direction: wide photo (mirrored) on tablet/desktop, portrait crop with the people centred on phones.
function HeroPicture({
  className,
  imgClassName,
  decorative,
}: {
  className: string;
  imgClassName: string;
  decorative?: boolean;
}) {
  const common = { alt: decorative ? "" : heroAlt, fill: true, priority: true, sizes: "100vw" };
  const {
    props: { srcSet: wide },
  } = getImageProps({ ...common, src: "/images/walking-persons.webp" });
  const {
    props: { srcSet: portrait, ...img },
  } = getImageProps({ ...common, src: "/images/walking-persons-mob.webp" });

  return (
    <picture className={className}>
      <source media="(min-width: 768px)" srcSet={wide} />
      {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
      <img {...img} srcSet={portrait} className={imgClassName} />
    </picture>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className={s.hero} aria-labelledby="hero-title">
        <div className={s.hero_media}>
          {/* Phones only: blurred copy of the photo extends it behind the copy (same file, no extra download) */}
          <div className={s.hero_backdrop} aria-hidden>
            <HeroPicture className={s.hero_picture} imgClassName={s.hero_backdrop_img} decorative />
          </div>
          <HeroPicture className={[s.hero_picture, s.hero_sharp].join(" ")} imgClassName={s.hero_img} />
          <div className={s.hero_shade} aria-hidden />
        </div>
        <Container className={s.hero_inner}>
          <div className={s.hero_copy}>
            <Eyebrow light>Government &amp; Corporate Relations · Dubai</Eyebrow>
            <h1 id="hero-title" className={s.hero_title}>
              Opening doors to business across the <em>Middle East and Africa</em>
            </h1>
            <p className={s.hero_lead}>
              MCS connects international companies, investors and institutions with the UAE, GCC and Africa — through
              market entry, government relations, capital and major-project facilitation.
            </p>
            <div className={s.hero_actions}>
              <ButtonLink href="/contact" variant="gold">
                Book a consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="outline_light" arrow={false}>
                Explore our services
              </ButtonLink>
            </div>
          </div>
        </Container>
        <div className={s.hero_facts}>
          <Container>
            <ul>
              <li>
                <span>Headquarters</span>
                Business Bay, Dubai
              </li>
              <li>
                <span>Regional focus</span>
                UAE · GCC · Africa
              </li>
              <li>
                <span>Group</span>
                {site.group}
              </li>
            </ul>
          </Container>
        </div>
      </section>

      {/* INTRO */}
      <Section labelledBy="intro-title">
        <Container className={s.intro}>
          <Reveal className={s.intro_media}>
            <Image
              src="/images/talking-persons.webp"
              alt="MCS consultants meeting with regional business partners"
              width={717}
              height={860}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className={s.intro_img}
            />
          </Reveal>
          <Reveal delay={0.1} className={s.intro_copy}>
            <Eyebrow>About MCS</Eyebrow>
            <h2 id="intro-title" className={s.h2}>
              A trusted bridge between global business and regional decision-makers
            </h2>
            <p className={s.body}>
              Maria Consultancy Services is a consultancy cluster within {site.group}, with companies in several
              jurisdictions. We advise corporate and governmental clients on entering, operating and growing in the
              region.
            </p>
            <ul className={s.checks}>
              <li>
                <IconCheck aria-hidden /> Direct access to government and corporate stakeholders
              </li>
              <li>
                <IconCheck aria-hidden /> Multi-jurisdiction structuring and set-up
              </li>
              <li>
                <IconCheck aria-hidden /> Confidential, partner-led engagements
              </li>
            </ul>
            <TextLink href="/about">More about MCS</TextLink>
          </Reveal>
        </Container>
      </Section>

      {/* SERVICES */}
      <Section tone="mist" labelledBy="services-title">
        <Container>
          <SectionHeading
            id="services-title"
            eyebrow="Our expertise"
            title={`${countWord(pillars.length, true)} practices. One integrated partner.`}
            intro="Each practice stands alone; together they cover the full journey, from set-up and approvals to capital and delivery."
            align="split"
          />
          <ul className={s.services}>
            {pillars.map((pl, i) => {
              const Icon = pillarIcons[pl.id];
              return (
                <Reveal as="li" key={pl.id} delay={i * 0.08} className={s.service}>
                  <Link href={`/services#${pl.id}`} className={s.service_link}>
                    <div className={s.service_top}>
                      <span className={s.service_num}>{pl.number}</span>
                      <Icon className={s.service_icon} aria-hidden />
                    </div>
                    <h3 className={s.service_title}>{pl.title}</h3>
                    <p className={s.service_text}>{pl.summary}</p>
                    <ul className={s.service_list}>
                      {servicesByPillar(pl.id)
                        .slice(0, 3)
                        .map((sv) => (
                          <li key={sv.slug}>{sv.title}</li>
                        ))}
                    </ul>
                    <span className={s.service_more}>
                      Learn more <IconArrow aria-hidden />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* MARKETS */}
      <Section tone="deep" className={s.markets} labelledBy="markets-title">
        <Backdrop src="/images/world-map-blue.webp" className={s.markets_map} />
        <Container>
          <SectionHeading
            id="markets-title"
            eyebrow="Where we work"
            title="Connecting global markets with regional opportunity"
            intro="We link Western and East Asian businesses with the fastest-growing markets of the Middle East and Africa."
            align="center"
            dark
          />
          <Reveal className={s.route}>
            <div className={s.route_col}>
              <p className={s.route_label}>From</p>
              <ul>
                {regions.from.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
            <div className={s.route_line} aria-hidden>
              <span />
              <Image src="/images/mcs-logo.svg" alt="" width={84} height={28} className={s.route_logo} />
              <span />
            </div>
            <div className={s.route_col}>
              <p className={s.route_label}>To</p>
              <ul>
                {regions.to.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* INDUSTRIES */}
      <Section labelledBy="industries-title">
        <Container>
          <SectionHeading
            id="industries-title"
            eyebrow="Industries"
            title="Sector experience that opens the right doors"
            intro="We focus on sectors where regulation, relationships and capital decide success."
            align="split"
          />
          <ul className={s.industries}>
            {featuredIndustries.map((ind, i) => (
              <Reveal as="li" key={ind.id} delay={(i % 3) * 0.08} className={s.industry}>
                <Link href={`/industries#${ind.id}`}>
                  <div className={s.industry_media}>
                    <Image
                      src={ind.image}
                      alt={ind.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 380px, 100vw"
                      className={s.industry_img}
                      style={ind.objectPosition ? { objectPosition: ind.objectPosition } : undefined}
                    />
                  </div>
                  <span className={s.industry_num}>{String(industries.indexOf(ind) + 1).padStart(2, "0")}</span>
                  <h3 className={s.industry_title}>{ind.title}</h3>
                  <p className={s.industry_text}>{ind.text}</p>
                </Link>
              </Reveal>
            ))}
          </ul>
          <div className={s.industries_more}>
            <TextLink href="/industries">{`View all ${industries.length} sectors`}</TextLink>
          </div>
        </Container>
      </Section>

      {/* APPROACH */}
      <Section tone="mist" labelledBy="approach-title">
        <Container>
          <SectionHeading
            id="approach-title"
            eyebrow="Our approach"
            title="A clear process from first meeting to lasting results"
            align="center"
          />
          <ol className={s.steps}>
            {approach.map((st, i) => (
              <Reveal as="li" key={st.step} delay={i * 0.08} className={s.step}>
                <span className={s.step_num}>{st.step}</span>
                <h3 className={s.step_title}>{st.title}</h3>
                <p className={s.step_text}>{st.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* VISION & MISSION */}
      <Section labelledBy="purpose-title">
        <Container className={s.purpose}>
          <Reveal className={s.purpose_copy}>
            <Eyebrow>Our purpose</Eyebrow>
            <h2 id="purpose-title" className={s.h2}>
              Grounded in best practice and proven results
            </h2>
            <dl className={s.purpose_list}>
              <div>
                <dt>Vision</dt>
                <dd>
                  To bridge cultures and simplify government and corporate interactions, so our clients thrive in the
                  Middle East and Africa.
                </dd>
              </div>
              <div>
                <dt>Mission</dt>
                <dd>
                  To connect Western and East Asian businesses with the UAE, GCC and Africa, building lasting,
                  mutually beneficial partnerships.
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={0.1} className={s.purpose_media}>
            <Image
              src="/images/downtown.webp"
              alt="Downtown Dubai skyline at dusk"
              width={772}
              height={849}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className={s.purpose_img}
            />
          </Reveal>
        </Container>
      </Section>

      <Partners />
      <CtaBand />
    </>
  );
}
