"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [whyUsDropdownOpen, setWhyUsDropdownOpen] = useState(false);

  return (
    <>
      {/* HIPAA compliancy top banner */}
      <div className="bg-gradient-to-r from-[#1B1630] via-[#2A1830] to-[#7A1F3D] text-white no-print w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
          <div className="flex items-center gap-3 text-[14px] leading-snug text-white/90">
            <Image
              src="/assets/stars.png"
              alt="Stars icon"
              width={34}
              height={34}
              className="h-8 w-8 object-contain"
            />
            <span>Turn-key Remote Patient Monitoring for clinics of any size.</span>
          </div>
          <div className="hidden items-center sm:flex">
            <Image
              src="/assets/hipa-logo.png"
              alt="HIPAA Compliant"
              width={680}
              height={280}
              className="h-[4.5rem] w-auto object-contain brightness-110"
            />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md no-print w-full shadow-sm shadow-slate-200/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-90" aria-label="e-Vitals home">
            <Image
              src="/assets/logo.png"
              alt="e-Vitals — Remote Patient Monitoring"
              width={364}
              height={72}
              className="h-12 w-auto object-contain md:h-14"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-10 text-sm font-medium lg:flex">
            <div
              className="relative group"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-1 py-2 text-plum/75 transition hover:text-brand hover:underline hover:underline-offset-8 cursor-pointer">
                Solutions
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${solutionsDropdownOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <AnimatePresence>
                {solutionsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full z-50 pt-3"
                  >
                    <div className="w-[260px] space-y-1 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-300/30">
                      <Link
                        href="/remote-patient-monitoring"
                        className="block rounded-xl px-3 py-2.5 text-sm text-plum/80 transition hover:bg-brand-tint hover:text-brand"
                      >
                        Remote Patient Monitoring (RPM)
                      </Link>
                      <Link
                        href="/chronic-care-management"
                        className="block rounded-xl px-3 py-2.5 text-sm text-plum/80 transition hover:bg-brand-tint hover:text-brand"
                      >
                        Chronic Care Management
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/who-we-serve" className="px-1 py-2 text-plum/75 transition hover:text-brand hover:underline hover:underline-offset-8">
              Who We Serve
            </Link>

            <Link href="/about" className="px-1 py-2 text-plum/75 transition hover:text-brand hover:underline hover:underline-offset-8">
              About
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setWhyUsDropdownOpen(true)}
              onMouseLeave={() => setWhyUsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-1 py-2 text-plum/75 transition hover:text-brand hover:underline hover:underline-offset-8 cursor-pointer">
                Why us
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${whyUsDropdownOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <AnimatePresence>
                {whyUsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full z-50 pt-3"
                  >
                    <div className="w-[260px] space-y-1 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-300/30">
                      <Link href="/how-it-works" className="block rounded-xl px-3 py-2.5 text-sm text-plum/80 transition hover:bg-brand-tint hover:text-brand">
                        How it works
                      </Link>
                      <Link href="/ReimbursementCalculator" className="block rounded-xl px-3 py-2.5 text-sm text-plum/80 transition hover:bg-brand-tint hover:text-brand">
                        Reimbursement calculator
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/support/resources" className="px-1 py-2 text-plum/75 transition hover:text-brand hover:underline hover:underline-offset-8">
              Resources
            </Link>
          </nav>

          <div className="flex items-center gap-6">
            <Link href="https://www.evitals.life/login" target="_blank" rel="noopener noreferrer" className="hidden text-sm font-medium text-plum/75 transition hover:text-brand hover:underline hover:underline-offset-8 sm:inline-block">
              Login
            </Link>
            <Link
              href="/demo"
              className="hidden rounded-full bg-[#7A1F3D] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#7A1F3D]/20 transition hover:-translate-y-0.5 hover:bg-[#5A1530] hover:shadow-md hover:shadow-[#7A1F3D]/24 sm:inline-block"
            >
              Request a Demo
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-plum transition hover:bg-slate-50 cursor-pointer"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-slate-100 bg-white px-6 lg:hidden"
            >
              <div className="space-y-2 py-4">
                <div className="space-y-1 border-b border-slate-100 pb-3">
                  <div className="font-semibold text-plum mb-1">Solutions</div>
                  <Link href="/remote-patient-monitoring" className="block py-1.5 pl-3 text-sm text-plum/75 hover:text-brand" onClick={() => setMobileMenuOpen(false)}>
                    Remote Patient Monitoring (RPM)
                  </Link>
                  <Link href="/chronic-care-management" className="block py-1.5 pl-3 text-sm text-plum/75 hover:text-brand" onClick={() => setMobileMenuOpen(false)}>
                    Chronic Care Management
                  </Link>
                </div>

                <Link href="/who-we-serve" className="block border-b border-slate-50 py-3 font-medium text-plum hover:text-brand" onClick={() => setMobileMenuOpen(false)}>
                  Who We Serve
                </Link>
                <Link href="/about" className="block border-b border-slate-50 py-3 font-medium text-plum hover:text-brand" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>

                <div className="space-y-1 border-b border-slate-100 py-3">
                  <div className="font-semibold text-plum mb-1">Why us</div>
                  <Link href="/how-it-works" className="block py-1.5 pl-3 text-sm text-plum/75 hover:text-brand" onClick={() => setMobileMenuOpen(false)}>
                    How it works
                  </Link>
                  <Link href="/ReimbursementCalculator" className="block py-1.5 pl-3 text-sm text-plum/75 hover:text-brand" onClick={() => setMobileMenuOpen(false)}>
                    Reimbursement calculator
                  </Link>
                </div>

                <Link href="/support/resources" className="block border-b border-slate-50 py-3 font-medium text-plum hover:text-brand" onClick={() => setMobileMenuOpen(false)}>
                  Resources
                </Link>

                <Link href="/demo" className="block py-3 text-sm font-semibold text-plum transition hover:text-brand hover:underline hover:underline-offset-8" onClick={() => setMobileMenuOpen(false)}>
                  Request a Demo
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
