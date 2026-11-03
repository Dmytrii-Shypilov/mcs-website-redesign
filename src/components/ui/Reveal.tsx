"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
  id?: string;
};

const hidden = { opacity: 0, y: 24 };
const shown = { opacity: 1, y: 0 };

/**
 * Subtle fade-up on scroll. Under prefers-reduced-motion the content is shown at once, with no movement.
 *
 * The same motion element is always rendered so server and client markup match. (Swapping to a plain
 * element under reduced motion left the server's inline `opacity:0` in place after hydration.)
 */
export default function Reveal({ children, delay = 0, className, as = "div", id }: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = as === "li" ? motion.li : motion.div;

  return (
    <Comp
      id={id}
      className={className}
      initial={hidden}
      {...(reduce
        ? { animate: shown, transition: { duration: 0 } }
        : {
            whileInView: shown,
            viewport: { once: true, margin: "0px 0px -60px 0px" },
            transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
          })}
    >
      {children}
    </Comp>
  );
}
