"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-deep text-white/80 no-print w-full mt-auto">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <span className="inline-flex rounded-lg bg-white px-3 py-2">
            <Image src="/assets/logo.png" alt="e-Vitals" width={144} height={36} className="h-9 w-auto" />
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Turn-key Remote Patient Monitoring and Chronic Care Management — devices, clinical dashboards, and compliant billing for practices of any size.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white">Product</h4>
          <Link href="/remote-patient-monitoring" className="block py-1 text-sm hover:text-white transition-colors">
            RPM
          </Link>
          <Link href="/chronic-care-management" className="block py-1 text-sm hover:text-white transition-colors">
            Chronic Care Management
          </Link>
          <Link href="/how-it-works" className="block py-1 text-sm hover:text-white transition-colors">
            How it works
          </Link>
          <Link href="/ReimbursementCalculator" className="block py-1 text-sm hover:text-white transition-colors">
            Reimbursement
          </Link>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white">Company</h4>
          <Link href="/about" className="block py-1 text-sm hover:text-white transition-colors">
            About
          </Link>
          <Link href="/how-we-serve" className="block py-1 text-sm hover:text-white transition-colors">
            Who we serve
          </Link>
          <Link href="/support/resources" className="block py-1 text-sm hover:text-white transition-colors">
            Resources
          </Link>
          <Link href="/demo" className="block py-1 text-sm hover:text-white transition-colors">
            Request a demo
          </Link>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white">Contact</h4>
          <a href="mailto:info@evitalsrpm.com" className="block py-1 text-sm hover:text-white transition-colors">
            info@evitalsrpm.com
          </a>
          <div className="mt-3 flex gap-2">
            <span className="rounded border border-white/25 px-2 py-1 text-[10px] mono">HIPAA</span>
            <span className="rounded border border-white/25 px-2 py-1 text-[10px] mono">SOC 2</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 w-full">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-white/55">
          <p>&copy; {new Date().getFullYear()} eVitals. All rights reserved.</p>
          <p className="mt-2 max-w-3xl leading-relaxed">
            Reimbursement figures are approximate national averages for educational purposes only and are not billing, legal, or financial advice. CPT codes and Medicare rates change annually and vary by payer and locality — verify against the current Medicare Physician Fee Schedule before billing. CPT® is a registered trademark of the American Medical Association.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
