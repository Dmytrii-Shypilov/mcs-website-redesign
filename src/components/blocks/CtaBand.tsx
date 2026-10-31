import s from "./blocks.module.scss";
import { ButtonLink, Container, Eyebrow } from "../ui";
import { site } from "@/content/site";

type CtaBandProps = {
  title?: string;
  text?: string;
};

export default function CtaBand({
  title = "Ready to expand into the Middle East and Africa?",
  text = "Speak with our team about your objectives. Every enquiry is treated in confidence.",
}: CtaBandProps) {
  return (
    <section className={s.cta} aria-labelledby="cta-title">
      <Container className={s.cta_inner}>
        <div>
          <Eyebrow light>Start a conversation</Eyebrow>
          <h2 id="cta-title" className={s.cta_title}>
            {title}
          </h2>
          <p className={s.cta_text}>{text}</p>
        </div>
        <div className={s.cta_actions}>
          <ButtonLink href="/contact" variant="gold">
            Book a consultation
          </ButtonLink>
          <a href={site.phoneHref} className={s.cta_phone}>
            or call {site.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
