import p from "./pages.module.scss";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className={p.notfound}>
      <Container>
        <Eyebrow light>Error 404</Eyebrow>
        <h1>This page could not be found</h1>
        <p>The page may have moved. Continue from our homepage or explore our services.</p>
        <div className={p.notfound_actions}>
          <ButtonLink href="/" variant="gold">
            Go to homepage
          </ButtonLink>
          <ButtonLink href="/services" variant="outline_light" arrow={false}>
            Our services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
