"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import s from "./header.module.scss";
import { Container, TextLink } from "../ui";
import { IconChevron, IconClose, IconMenu, IconArrow } from "../ui/icons";
import { nav, pillars, servicesByPillar, site, type PillarId } from "@/content/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [openPillar, setOpenPillar] = useState<PillarId | null>(null);
  const dropRef = useRef<HTMLLIElement>(null);
  const dropBtnRef = useRef<HTMLButtonElement>(null);

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
    setOpenPillar(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open; close with Escape
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      // Return focus to the trigger if it was inside the mega menu
      if (dropRef.current?.contains(document.activeElement)) dropBtnRef.current?.focus();
      setMenuOpen(false);
      setDropOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const solid = scrolled || menuOpen || dropOpen;
  const fade = reduce ? { duration: 0 } : { duration: 0.2, ease: EASE };
  const slide = reduce ? { duration: 0 } : { duration: 0.3, ease: EASE };

  return (
    <header className={[s.header, solid && s.solid].filter(Boolean).join(" ")}>
      <Container className={s.bar}>
        <Link href="/" className={s.logo} aria-label={`${site.name} — home`}>
          <Image src="/images/mcs-logo.svg" alt="" width={111} height={40} priority className={s.logo_light} />
          <Image src="/images/mcs-logo.webp" alt="" width={111} height={40} priority className={s.logo_dark} />
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
                      ref={dropBtnRef}
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

                  <div id="services-menu" className={s.mega}>
                    <AnimatePresence>
                      {dropOpen && (
                        <motion.div
                          key="mega"
                          className={s.mega_bridge}
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={fade}
                        >
                          <Container>
                            <div className={s.mega_panel}>
                              <div className={s.mega_cols}>
                                {pillars.map((pl) => (
                                  <div key={pl.id} className={s.mega_col}>
                                    <Link href={`/services#${pl.id}`} className={s.mega_head}>
                                      <span className={s.mega_num}>{pl.number}</span>
                                      <span className={s.mega_title}>{pl.title}</span>
                                    </Link>
                                    <p className={s.mega_summary}>{pl.summary}</p>
                                    <ul className={s.mega_links}>
                                      {servicesByPillar(pl.id).map((sv) => (
                                        <li key={sv.slug}>
                                          <Link
                                            href={`/services/${sv.slug}`}
                                            className={s.mega_link}
                                            aria-current={pathname === `/services/${sv.slug}` ? "page" : undefined}
                                          >
                                            {sv.title}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                              <div className={s.mega_foot}>
                                <TextLink href="/services">View all services</TextLink>
                              </div>
                            </div>
                          </Container>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
                      {pillars.map((pl) => {
                        const open = openPillar === pl.id;
                        const panelId = `mobile-pillar-${pl.id}`;
                        return (
                          <li key={pl.id}>
                            <button
                              type="button"
                              className={s.acc_btn}
                              aria-expanded={open}
                              aria-controls={panelId}
                              onClick={() => setOpenPillar(open ? null : pl.id)}
                            >
                              <span className={s.acc_num}>{pl.number}</span>
                              <span className={s.acc_title}>{pl.title}</span>
                              <IconChevron aria-hidden className={s.acc_icon} />
                            </button>
                            <div id={panelId}>
                              <AnimatePresence initial={false}>
                                {open && (
                                  <motion.ul
                                    key="list"
                                    className={s.acc_list}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={slide}
                                  >
                                    {servicesByPillar(pl.id).map((sv) => (
                                      <li key={sv.slug}>
                                        <Link href={`/services/${sv.slug}`}>{sv.title}</Link>
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </div>
                          </li>
                        );
                      })}
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
