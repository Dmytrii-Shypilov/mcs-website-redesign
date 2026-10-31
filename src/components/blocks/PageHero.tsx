import Image from "next/image";
import Link from "next/link";

import s from "./blocks.module.scss";
import { Container, Eyebrow } from "../ui";
import JsonLd from "../seo/JsonLd";
import { site } from "@/content/site";

type Crumb = { label: string; href: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  imageAlt: string;
  crumbs: Crumb[];
};

export default function PageHero({ eyebrow, title, lead, image, imageAlt, crumbs }: PageHeroProps) {
  const all = [{ label: "Home", href: "/" }, ...crumbs];

  return (
    <section className={s.page_hero}>
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className={s.page_hero_img} />
      <div className={s.page_hero_shade} aria-hidden />
      <Container className={s.page_hero_inner}>
        <nav aria-label="Breadcrumb" className={s.crumbs}>
          <ol>
            {all.map((c, i) => (
              <li key={c.href}>
                {i < all.length - 1 ? (
                  <Link href={c.href}>{c.label}</Link>
                ) : (
                  <span aria-current="page">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className={s.page_hero_title}>{title}</h1>
        {lead && <p className={s.page_hero_lead}>{lead}</p>}
      </Container>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: `${site.url}${c.href === "/" ? "" : c.href}`,
          })),
        }}
      />
    </section>
  );
}
