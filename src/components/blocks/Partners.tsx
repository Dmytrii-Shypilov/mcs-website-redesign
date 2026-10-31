import Image from "next/image";

import s from "./partners.module.scss";
import { Container, Eyebrow } from "../ui";
import { partners } from "@/content/site";

export default function Partners() {
  return (
    <section className={s.partners} aria-labelledby="partners-title">
      <Container className={s.inner}>
        <div className={s.label}>
          <Eyebrow>Partners</Eyebrow>
          <h2 id="partners-title" className={s.title}>
            Trusted partnerships across the world
          </h2>
        </div>
        <ul className={s.list}>
          {partners.map((p) => (
            <li key={p.name}>
              <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} (opens in a new tab)`}>
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  width={p.width}
                  height={p.height}
                  sizes="200px"
                  className={s.logo}
                />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
