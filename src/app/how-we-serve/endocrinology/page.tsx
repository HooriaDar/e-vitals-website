"use client";

import React from "react";
import Link from "next/link";

const EndocrinologyPage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-16 animate-rise">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand">Home</Link> /{" "}
          <Link href="/how-we-serve" className="hover:text-brand">Who We Serve</Link> /{" "}
          <span className="text-plum">Endocrinology</span>
        </nav>
        
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
            <span className="h-px w-6 bg-brand"></span>Who we serve · Endocrinology
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl text-plum">
            Remote care for endocrinology practices.
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Endocrinology runs on what happens between visits. eVitals brings connected glucose and weight readings into a single trend view your team can act on.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link 
              href="/demo" 
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
            >
              Request a demo 
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link 
              href="/ReimbursementCalculator" 
              className="inline-flex items-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-plum ring-1 ring-slate-300 hover:ring-slate-400 transition-colors"
            >
              See reimbursement
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-slate-50/70 border-y border-slate-100 w-full">
        <div className="mx-auto max-w-6xl px-6 py-16 animate-rise">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 ring-1 ring-slate-200 shadow-sm">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-tint text-brand">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 6 4.5 4.5 0 0 0 2 8.5C2 10.7 3.5 12.5 5 14l7 7z"/>
                  </svg>
                </span>
                <h2 className="text-xl font-bold text-plum">Benefits to your patients</h2>
              </div>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-3 text-slate-600">
                  <svg className="h-5 w-5 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Connected glucose and weight monitoring with clear trends</span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <svg className="h-5 w-5 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Tighter glycemic control and fewer hypo- and hyperglycemic events</span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <svg className="h-5 w-5 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Coaching and check-ins that keep them on track</span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <svg className="h-5 w-5 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Less guesswork between appointments</span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-2xl bg-white p-7 ring-1 ring-slate-200 shadow-sm">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-tint text-brand">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>
                  </svg>
                </span>
                <h2 className="text-xl font-bold text-plum">Benefits to your practice</h2>
              </div>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-3 text-slate-600">
                  <svg className="h-5 w-5 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Reimbursable RPM and CCM for diabetes and metabolic care</span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <svg className="h-5 w-5 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Trend analysis that makes each visit more productive</span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <svg className="h-5 w-5 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Fewer no-shows and better A1c outcomes</span>
                </li>
                <li className="flex gap-3 text-slate-600">
                  <svg className="h-5 w-5 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Documentation handled automatically</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            <span className="font-semibold text-plum">Conditions we commonly support:</span> Type 1 &amp; 2 diabetes, obesity, and thyroid &amp; metabolic disorders.
          </p>
        </div>
      </section>

      {/* CTA Box */}
      <section className="mx-auto max-w-6xl px-6 py-20 animate-rise">
        <div className="rounded-3xl bg-brand-tint px-8 py-14 text-center ring-1 ring-brand/15 sm:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-plum sm:text-4xl">
            Bring eVitals to your endocrinology practice.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Tell us about your patients and we’ll tailor a demo to your workflows and payers.
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
      </section>
    </div>
  );
};

export default EndocrinologyPage;
