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
  /** "full": full-bleed background image (landing pages). "split": text left, framed image right (service pages). */
  variant?: "full" | "split";
  /**
   * Full variant only: a different photo for phones, shown uncropped below the copy (the full-bleed
   * `image` is then used from tablet width up). Use when the desktop photo would hide the subject on a phone.
   */
  mobileImage?: { src: string; alt: string };
  objectPosition?: string;
};

export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  crumbs,
  variant = "full",
  mobileImage,
  objectPosition,
}: PageHeroProps) {
  const all = [{ label: "Home", href: "/" }, ...crumbs];
  const split = variant === "split";
  const stacked = !split && Boolean(mobileImage);

  const breadcrumbs = (
    <nav aria-label="Breadcrumb" className={s.crumbs}>
      <ol>
        {all.map((c, i) => (
          <li key={c.href}>
            {i < all.length - 1 ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );

  const copy = (
    <>
      {breadcrumbs}
      <Eyebrow light>{eyebrow}</Eyebrow>
      <h1 className={[s.page_hero_title, split && s.page_hero_title_split].filter(Boolean).join(" ")}>{title}</h1>
      {lead && <p className={s.page_hero_lead}>{lead}</p>}
    </>
  );

  return (
    <section
      className={[s.page_hero, split && s.page_hero_split, stacked && s.page_hero_stacked].filter(Boolean).join(" ")}
    >
      {split ? (
        <Container className={s.split_inner}>
          <div className={s.split_copy}>{copy}</div>
          <div className={s.split_media}>
            <div className={s.split_frame}>
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className={s.hero_settle}
                style={{ objectFit: "cover", objectPosition }}
              />
            </div>
          </div>
        </Container>
      ) : (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            // with a phone image, phones only fetch a tiny placeholder of the desktop photo
            sizes={mobileImage ? "(min-width: 768px) 100vw, 16px" : "100vw"}
            className={[s.page_hero_img, s.hero_settle].join(" ")}
            style={objectPosition ? { objectPosition } : undefined}
          />
          <div className={s.page_hero_shade} aria-hidden />
          <Container className={s.page_hero_inner}>{copy}</Container>
          {mobileImage && (
            <div className={s.mobile_media}>
              <Image
                src={mobileImage.src}
                alt={mobileImage.alt}
                fill
                priority
                sizes="(min-width: 768px) 16px, 100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </>
      )}

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
