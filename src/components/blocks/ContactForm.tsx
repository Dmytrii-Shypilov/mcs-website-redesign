"use client";

import { useState } from "react";
import Link from "next/link";

import s from "./form.module.scss";
import { IconArrow } from "../ui/icons";
import { services, site } from "@/content/site";

/**
 * Enquiry form.
 * Currently opens the visitor's email app with the enquiry pre-filled.
 * To send directly, connect a form/email service (e.g. Resend, Formspree)
 * in handleSubmit — the markup and validation stay the same.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const d = new FormData(form);
    const subject = `Enquiry: ${d.get("topic")} — ${d.get("name")}`;
    const body = [
      `Name: ${d.get("name")}`,
      `Company: ${d.get("company") || "—"}`,
      `Email: ${d.get("email")}`,
      `Phone: ${d.get("phone") || "—"}`,
      `Topic: ${d.get("topic")}`,
      "",
      String(d.get("message")),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className={s.form} onSubmit={handleSubmit} noValidate={false}>
      <div className={s.grid}>
        <label className={s.field}>
          <span>Full name *</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className={s.field}>
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" />
        </label>
        <label className={s.field}>
          <span>Email *</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className={s.field}>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className={[s.field, s.full].join(" ")}>
          <span>I am interested in *</span>
          <select name="topic" required defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((sv) => (
              <option key={sv.slug}>{sv.title}</option>
            ))}
            <option>Other</option>
          </select>
        </label>
        <label className={[s.field, s.full].join(" ")}>
          <span>How can we help? *</span>
          <textarea name="message" rows={5} required />
        </label>
      </div>

      <label className={s.consent}>
        <input type="checkbox" name="consent" required />
        <span>
          I agree to MCS processing my details to respond to this enquiry, as described in the{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </span>
      </label>

      <button type="submit" className={s.submit}>
        Send enquiry <IconArrow aria-hidden />
      </button>

      <p className={s.status} role="status" aria-live="polite">
        {sent && "Your email app should now open with your enquiry. If it doesn't, write to us at " + site.email + "."}
      </p>
    </form>
  );
}
