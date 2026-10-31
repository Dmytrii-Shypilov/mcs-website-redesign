import s from "./faqs.module.scss";
import { IconPlus } from "../ui/icons";
import type { Faq } from "@/content/site";

/** Accessible FAQ list using native <details> — works without JavaScript. */
export default function Faqs({ items }: { items: Faq[] }) {
  return (
    <div className={s.list}>
      {items.map((f, i) => (
        <details key={f.q} className={s.item} open={i === 0}>
          <summary className={s.q}>
            <span>{f.q}</span>
            <IconPlus aria-hidden className={s.icon} />
          </summary>
          <p className={s.a}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
