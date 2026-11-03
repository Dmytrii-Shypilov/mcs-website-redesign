"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type BackdropProps = {
  src: string;
  className?: string;
  /** Final opacity of the decorative image. */
  opacity?: number;
};

/**
 * Decorative background image that fades in when its section scrolls into view.
 * Under prefers-reduced-motion it is shown at its final opacity straight away.
 */
export default function Backdrop({ src, className, opacity = 0.12 }: BackdropProps) {
  const reduce = useReducedMotion();
  const shown = { opacity };

  return (
    <motion.div
      className={className}
      aria-hidden
      initial={{ opacity: 0 }}
      {...(reduce
        ? { animate: shown, transition: { duration: 0 } }
        : {
            whileInView: shown,
            viewport: { once: true, amount: 0.2 },
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
          })}
    >
      <Image src={src} alt="" fill sizes="100vw" style={{ objectFit: "contain" }} />
    </motion.div>
  );
}
