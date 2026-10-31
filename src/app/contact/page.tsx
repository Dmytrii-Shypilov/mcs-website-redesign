import type { Metadata } from "next";

import p from "../pages.module.scss";
import PageHero from "@/components/blocks/PageHero";
import ContactForm from "@/components/blocks/ContactForm";
import { Container, Eyebrow, Section } from "@/components/ui";
import { IconClock, IconMail, IconPhone, IconPin } from "@/components/ui/icons";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us — Book a Consultation in Dubai",
  description: `Contact MCS in Business Bay, Dubai. Call ${site.phone} or email ${site.email} to discuss corporate services, government relations or capital facilitation.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your objectives"
        lead="Tell us about your plans. Our team will respond promptly, and every enquiry is treated in confidence."
        image="/images/uae-flag.webp"
        imageAlt="Flag of the United Arab Emirates"
        crumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <Section labelledBy="contact-title">
        <Container className={p.contact}>
          <div className={p.contact_info}>
            <Eyebrow>Get in touch</Eyebrow>
            <h2 id="contact-title" className={p.h2}>
              {site.legalName}
            </h2>
            <ul className={p.contact_list}>
              <li>
                <IconPin aria-hidden />
                <div>
                  <span className={p.contact_label}>Office</span>
                  <address>
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.country}
                  </address>
                </div>
              </li>
              <li>
                <IconPhone aria-hidden />
                <div>
                  <span className={p.contact_label}>Phone</span>
                  <a href={site.phoneHref}>{site.phone}</a>
                </div>
              </li>
              <li>
                <IconMail aria-hidden />
                <div>
                  <span className={p.contact_label}>Email</span>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </li>
              <li>
                <IconClock aria-hidden />
                <div>
                  <span className={p.contact_label}>Office hours</span>
                  {site.hours}
                </div>
              </li>
            </ul>
          </div>

          <div className={p.form_card}>
            <h2 className={p.form_title}>Send an enquiry</h2>
            <ContactForm />
          </div>
        </Container>
      </Section>

      <section aria-label="Office location map" className={p.map}>
        <iframe
          src={site.mapEmbed}
          title="MCS office location — Prism Tower, Business Bay, Dubai"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}
