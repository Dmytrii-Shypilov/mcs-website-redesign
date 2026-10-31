import Link from "next/link";
import Image from "next/image";

import s from "./footer.module.scss";
import { Container } from "../ui";
import { IconMail, IconPhone, IconPin } from "../ui/icons";
import { services, site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.grid}>
          <div className={s.brand}>
            <Image src="/images/mcs-logo.svg" alt={site.name} width={132} height={44} className={s.logo} />
            <p className={s.about}>
              {site.brandLong} — a {site.group} company. Government and corporate relations consultancy
              headquartered in Dubai.
            </p>
          </div>

          <nav aria-label="Services" className={s.col}>
            <h2 className={s.col_title}>Services</h2>
            <ul>
              {services.map((sv) => (
                <li key={sv.slug}>
                  <Link href={`/services/${sv.slug}`}>{sv.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className={s.col}>
            <h2 className={s.col_title}>Company</h2>
            <ul>
              <li>
                <Link href="/about">About MCS</Link>
              </li>
              <li>
                <Link href="/industries">Industries</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </nav>

          <div className={s.col}>
            <h2 className={s.col_title}>Contact</h2>
            <address className={s.contact}>
              <p>
                <IconPin aria-hidden />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.country}
                </span>
              </p>
              <p>
                <IconPhone aria-hidden />
                <a href={site.phoneHref}>{site.phone}</a>
              </p>
              <p>
                <IconMail aria-hidden />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </address>
          </div>
        </div>

        <div className={s.bottom}>
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>Dubai · UAE · GCC · Africa</p>
        </div>
      </Container>
    </footer>
  );
}
