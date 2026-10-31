import type { Metadata } from "next";

import p from "../pages.module.scss";
import { Container, Section } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legalName} collects and uses personal information submitted through this website.`,
  alternates: { canonical: "/privacy" },
};

// NOTE: Template text — review with your legal advisor before publishing.
export default function PrivacyPage() {
  return (
    <Section className={p.legal}>
      <Container>
        <div className={p.legal_body}>
          <h1>Privacy Policy</h1>
          <p className={p.legal_meta}>Last updated: October 2026</p>

          <h2>Who we are</h2>
          <p>
            This website is operated by {site.legalName} ({site.name}), {site.address.street}, {site.address.city},{" "}
            {site.address.country}.
          </p>

          <h2>Information we collect</h2>
          <p>
            We collect the details you send us through our enquiry form or by email — such as your name, company, email
            address, phone number and message. We do not use this information for any other purpose.
          </p>

          <h2>How we use it</h2>
          <p>
            We use your information only to respond to your enquiry and, where relevant, to provide our services. We do
            not sell or rent personal data to third parties.
          </p>

          <h2>Retention and security</h2>
          <p>
            We keep enquiry data only as long as needed for the purpose it was collected, and protect it with appropriate
            technical and organisational measures.
          </p>

          <h2>Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal data at any time by writing to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </Container>
    </Section>
  );
}
