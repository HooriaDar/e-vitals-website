"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

const REVEAL_SELECTOR =
  "main section, main [class*='grid'] > div, main [class*='grid'] > a, main article, main form";

const CARD_SELECTOR =
  "main a[class*='rounded'], main div[class*='rounded'], main article[class*='rounded'], main form[class*='rounded']";

const CTA_SELECTOR =
  "main a[href], main button, header a[href], header button";

export default function VisualEffects() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const reduceMotion =
      prefersReducedMotion ?? window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.add("rpm-visual-system");

    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
      (element) => !element.closest("[data-rpm-ignore-motion]"),
    );

    revealTargets.forEach((element, index) => {
      element.dataset.rpmReveal = "true";
      element.style.setProperty("--rpm-reveal-delay", `${Math.min(index % 8, 7) * 55}ms`);
      if (reduceMotion || index === 0) {
        element.dataset.rpmVisible = "true";
      }
    });

    const cards = Array.from(document.querySelectorAll<HTMLElement>(CARD_SELECTOR));
    const cardCleanups: Array<() => void> = [];
    cards.forEach((element) => {
      const className = element.className.toString();
      const isCompactControl =
        element.tagName === "BUTTON" ||
        className.includes("inline-flex") ||
        className.includes(" h-") ||
        className.includes(" w-") ||
        className.includes("rounded-full");
      const hasCardContent =
        element.matches("form") ||
        Boolean(element.querySelector("h1,h2,h3,p,form,ul,img"));

      if (!element.closest("header") && !element.closest("footer") && !isCompactControl && hasCardContent) {
        element.dataset.rpmCard = "true";
        const updateCardPointer = (event: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          element.style.setProperty("--rpm-card-x", `${event.clientX - rect.left}px`);
          element.style.setProperty("--rpm-card-y", `${event.clientY - rect.top}px`);
        };
        element.addEventListener("mousemove", updateCardPointer, { passive: true });
        cardCleanups.push(() => element.removeEventListener("mousemove", updateCardPointer));
      }
    });

    const ctas = Array.from(document.querySelectorAll<HTMLElement>(CTA_SELECTOR));
    ctas.forEach((element) => {
      if (!element.closest("footer")) {
        element.dataset.rpmCta = "true";
      }
    });

    if (reduceMotion) {
      return () => {
        cardCleanups.forEach((cleanup) => cleanup());
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.dataset.rpmVisible = "true";
            target.dataset.rpmPast = "false";
            return;
          }

          const rect = target.getBoundingClientRect();
          if (rect.bottom < window.innerHeight * 0.22) {
            target.dataset.rpmPast = "true";
          } else {
            target.dataset.rpmPast = "false";
          }
        });
      },
      {
        rootMargin: "-8% 0px -12% 0px",
        threshold: [0.08, 0.25],
      },
    );

    revealTargets.forEach((element) => observer.observe(element));

    let frame = 0;
    const updateScrollVars = () => {
      frame = 0;
      const scrollProgress =
        window.scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      document.documentElement.style.setProperty("--rpm-scroll", scrollProgress.toFixed(4));
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateScrollVars);
      }
    };

    updateScrollVars();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      cardCleanups.forEach((cleanup) => cleanup());
      window.removeEventListener("scroll", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [pathname, prefersReducedMotion]);

  return (
    <motion.div
      className="rpm-ambient"
      aria-hidden="true"
      initial={prefersReducedMotion ? false : { opacity: 1 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <div className="rpm-ambient__grid" />
      <div className="rpm-ambient__pulse" />
    </motion.div>
  );
}
