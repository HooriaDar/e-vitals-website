"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";
import { easePremium } from "./motion";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  breadcrumb?: ReactNode;
  variant?: "light" | "dark";
}

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  imageSrc,
  imageAlt = "",
  breadcrumb,
  variant = "light",
}: PageHeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const isDark = variant === "dark";

  return (
    <section
      className={`relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-plum via-plum-2 to-brand-dark text-white"
          : "bg-gradient-to-b from-brand-tint/60 via-white to-white"
      }`}
      data-rpm-ignore-motion
    >
      <div className="rpm-hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-12 md:pb-20 md:pt-14">
        {breadcrumb}

        <div
          className={`grid items-center gap-12 ${
            imageSrc ? "lg:grid-cols-[1.1fr_0.9fr]" : ""
          }`}
        >
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easePremium }}
          >
            {eyebrow && (
              <p
                className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] ${
                  isDark ? "text-teal-300" : "text-brand"
                }`}
              >
                <span
                  className={`h-px w-6 ${isDark ? "bg-teal-300" : "bg-brand"}`}
                />
                {eyebrow}
              </p>
            )}

            <h1
              className={`mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl ${
                isDark ? "text-white" : "text-plum"
              }`}
            >
              {title}
            </h1>

            {description && (
              <p
                className={`mt-5 max-w-2xl text-lg leading-relaxed ${
                  isDark ? "text-white/80" : "text-slate-600"
                }`}
              >
                {description}
              </p>
            )}

            {children && <div className="mt-8">{children}</div>}
          </motion.div>

          {imageSrc && (
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: 32 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.15, ease: easePremium }}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-2xl shadow-brand/10 ring-1 ring-slate-200/80 backdrop-blur-sm">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div
                className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-brand/15 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-accent/10 blur-2xl"
                aria-hidden="true"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
