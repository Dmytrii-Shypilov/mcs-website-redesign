"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import s from "./header.module.scss";
import { Container } from "../ui";
import { IconChevron, IconClose, IconMenu, IconArrow } from "../ui/icons";
import { nav, services, site } from "@/content/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open; close with Escape
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDropOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const solid = scrolled || menuOpen;

  return (
    <header className={[s.header, solid && s.solid].filter(Boolean).join(" ")}>
      <Container className={s.bar}>
        <Link href="/" className={s.logo} aria-label={`${site.name} — home`}>
          <Image
          fill={true}
            src="/images/mcs-logo.svg"
            alt=""
            
            priority
            className={s.logo_light}
          />
          <Image
            src="/images/mcs-logo.webp"
            alt=""
            width={111}
            height={40}
            priority
            className={s.logo_dark}
          />
        </Link>

        <nav aria-label="Main" className={s.nav}>
          <ul className={s.nav_list}>
            {nav.map((item) =>
              item.href === "/services" ? (
                <li
                  key={item.href}
                  ref={dropRef}
                  className={s.has_drop}
                  onMouseEnter={() => setDropOpen(true)}
                  onMouseLeave={() => setDropOpen(false)}
                  onBlur={(e) => {
                    if (!dropRef.current?.contains(e.relatedTarget as Node)) setDropOpen(false);
                  }}
                >
                  <div className={s.drop_trigger}>
                    <Link
                      href={item.href}
                      className={[s.link, isActive(item.href) && s.active].filter(Boolean).join(" ")}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className={s.drop_btn}
                      aria-expanded={dropOpen}
                      aria-controls="services-menu"
                      aria-label="Show services"
                      onClick={() => setDropOpen((v) => !v)}
                    >
                      <IconChevron />
                    </button>
                  </div>
                  <div id="services-menu" className={[s.drop, dropOpen && s.drop_open].filter(Boolean).join(" ")}>
                    <ul>
                      {services.map((sv) => (
                        <li key={sv.slug}>
                          <Link href={`/services/${sv.slug}`} className={s.drop_link}>
                            <span className={s.drop_num}>{sv.number}</span>
                            <span>
                              <span className={s.drop_title}>{sv.title}</span>
                              <span className={s.drop_text}>{sv.summary}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[s.link, isActive(item.href) && s.active].filter(Boolean).join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <Link href="/contact" className={s.cta}>
          Book a consultation
        </Link>

        <button
          type="button"
          className={s.burger}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </Container>

      <div id="mobile-menu" className={[s.mobile, menuOpen && s.mobile_open].filter(Boolean).join(" ")} hidden={!menuOpen}>
        <Container>
          <nav aria-label="Mobile">
            <ul className={s.mobile_list}>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={s.mobile_link}>
                    {item.label}
                    <IconArrow aria-hidden />
                  </Link>
                  {item.href === "/services" && (
                    <ul className={s.mobile_sub}>
                      {services.map((sv) => (
                        <li key={sv.slug}>
                          <Link href={`/services/${sv.slug}`}>{sv.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className={s.mobile_contact}>
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </Container>
      </div>
    </header>
  );
}
