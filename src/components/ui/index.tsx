import Link from "next/link";
import s from "./ui.module.scss";
import { IconArrow } from "./icons";

type WithChildren = { children: React.ReactNode; className?: string };

export function Container({ children, className }: WithChildren) {
  return <div className={[s.container, className].filter(Boolean).join(" ")}>{children}</div>;
}

type SectionProps = WithChildren & {
  tone?: "white" | "mist" | "navy" | "deep";
  id?: string;
  labelledBy?: string;
};

export function Section({ children, className, tone = "white", id, labelledBy }: SectionProps) {
  const toneClass = tone === "white" ? "" : s[`tone_${tone}`];
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={[s.section, toneClass, className].filter(Boolean).join(" ")}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return <p className={[s.eyebrow, light && s.eyebrow_light].filter(Boolean).join(" ")}>{children}</p>;
}

type HeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  id?: string;
  align?: "left" | "center" | "split";
  dark?: boolean;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  align = "left",
  dark,
  as: Tag = "h2",
}: HeadingProps) {
  const cls = [
    s.heading,
    align === "center" && s.heading_center,
    align === "split" && s.heading_split,
    dark && s.on_dark,
  ]
    .filter(Boolean)
    .join(" ");

  if (align === "split") {
    return (
      <header className={cls}>
        <div>
          {eyebrow && <Eyebrow light={dark}>{eyebrow}</Eyebrow>}
          <Tag id={id} className={s.title}>
            {title}
          </Tag>
        </div>
        {intro && <p className={s.intro}>{intro}</p>}
      </header>
    );
  }

  return (
    <header className={cls}>
      {eyebrow && <Eyebrow light={dark}>{eyebrow}</Eyebrow>}
      <Tag id={id} className={s.title}>
        {title}
      </Tag>
      {intro && <p className={s.intro}>{intro}</p>}
    </header>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "gold" | "outline" | "outline_light";
  arrow?: boolean;
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", arrow = true, className }: ButtonProps) {
  return (
    <Link href={href} className={[s.btn, s[`btn_${variant}`], className].filter(Boolean).join(" ")}>
      {children}
      {arrow && <IconArrow aria-hidden />}
    </Link>
  );
}

export function TextLink({ href, children, label }: { href: string; children: React.ReactNode; label?: string }) {
  return (
    <Link href={href} className={s.textlink} aria-label={label}>
      {children}
      <IconArrow aria-hidden />
    </Link>
  );
}

export const uiStyles = s;
