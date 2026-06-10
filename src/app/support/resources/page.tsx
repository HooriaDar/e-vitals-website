"use client";

import React from "react";
import Link from "next/link";

const ResourcesPage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="w-full animate-rise">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-16">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand">Home</Link> / <span className="text-plum">Resources</span>
        </nav>
        
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
            <span className="h-px w-6 bg-brand"></span>Resources
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl text-plum">
            Guides for building your program.
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Practical, current guidance on Remote Patient Monitoring and Chronic Care Management.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Link 
            href="/chronic-care-management" 
            className="group rounded-2xl bg-white p-7 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/30"
          >
            <h3 className="text-xl font-bold text-plum group-hover:text-brand transition-colors">
              RPM vs CCM: what&apos;s the difference?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              How the two programs differ in eligibility and codes — and how to bill both.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 font-semibold text-brand">
              Read more 
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>

          <Link 
            href="/ReimbursementCalculator" 
            className="group rounded-2xl bg-white p-7 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/30"
          >
            <h3 className="text-xl font-bold text-plum group-hover:text-brand transition-colors">
              2026 RPM CPT code guide
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              The full code set including the new 99445 and 99470, with rates.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 font-semibold text-brand">
              Read more 
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>

          <Link 
            href="/how-it-works" 
            className="group rounded-2xl bg-white p-7 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/30"
          >
            <h3 className="text-xl font-bold text-plum group-hover:text-brand transition-colors">
              Device setup &amp; onboarding
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              How cellular devices reach your patients ready to use.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 font-semibold text-brand">
              Read more 
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>

          <Link 
            href="/who-we-serve" 
            className="group rounded-2xl bg-white p-7 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/30"
          >
            <h3 className="text-xl font-bold text-plum group-hover:text-brand transition-colors">
              Specialty playbooks
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              RPM workflows tailored to your specialty.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 font-semibold text-brand">
              Read more 
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-slate-50/70 border-y border-slate-100 w-full animate-rise">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl bg-brand-tint px-8 py-14 text-center ring-1 ring-brand/15 sm:px-12">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-plum sm:text-4xl">
              Have a question we didn’t cover?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Our team is happy to walk you through anything — book a quick call.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link 
                href="/demo" 
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark cursor-pointer"
              >
                Book a demo 
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link 
                href="/ReimbursementCalculator" 
                className="inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-plum ring-1 ring-slate-300 transition hover:ring-slate-400"
              >
                Estimate revenue
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
