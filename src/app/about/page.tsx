"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <div className="about-page w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-tint/40 to-white w-full">
        <div className="rpm-hero-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-16 animate-rise">
          <nav className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand">Home</Link> / <span className="text-plum">About</span>
          </nav>
          
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
              <span className="h-px w-6 bg-brand"></span>About e-Vitals
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl text-plum">
              We make connected care <span className="text-brand">simple to run</span>.
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              e-Vitals brings remote patient monitoring and chronic care management together in one platform — devices, clinical dashboards, and compliant billing — so any practice can deliver proactive, connected care and be paid fairly for it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link 
                href="/demo" 
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors cursor-pointer"
              >
                Book a demo 
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a 
                href="#team" 
                className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-plum ring-1 ring-slate-300 hover:ring-slate-400 transition-colors"
              >
                Meet the team
              </a>
            </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="about-hero-visual" aria-hidden="true">
                <Image
                  src="/assets/about-connected-care.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="44vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 animate-rise">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
              <span className="h-px w-6 bg-brand"></span>Our mission
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">
              Care that continues between visits.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Most of a patient&apos;s life happens outside the exam room. e-Vitals exists to make monitoring and coordinating care in those in-between moments genuinely turn-key — clinically sound, compliant, and sustainable.
            </p>
            <p className="mt-4 text-slate-600">
              We pair FDA-cleared devices with intuitive clinical dashboards and automated, audit-ready billing — then handle the logistics so your team can focus on patients, not paperwork.
            </p>
          </div>
          
          <div className="rounded-3xl bg-gradient-to-br from-plum to-brand-dark p-8 text-white shadow-xl shadow-plum/20">
            <h3 className="text-lg font-bold">What we do</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li className="flex gap-3">
                <svg className="h-5 w-5 flex-none text-brand-tint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> 
                Turn-key RPM &amp; CCM in one platform
              </li>
              <li className="flex gap-3">
                <svg className="h-5 w-5 flex-none text-brand-tint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> 
                FDA-cleared, cellular devices — no Wi-Fi or apps
              </li>
              <li className="flex gap-3">
                <svg className="h-5 w-5 flex-none text-brand-tint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> 
                Clinical dashboards and smart alerts
              </li>
              <li className="flex gap-3">
                <svg className="h-5 w-5 flex-none text-brand-tint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> 
                Automated, audit-ready Medicare billing
              </li>
              <li className="flex gap-3">
                <svg className="h-5 w-5 flex-none text-brand-tint" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> 
                White-glove onboarding and dedicated support
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-slate-50/70 border-y border-slate-100 w-full">
        <div className="mx-auto max-w-7xl px-6 py-16 animate-rise">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
              <span className="h-px w-6 bg-brand"></span>Our team
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">
              Meet the people behind e-Vitals
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              A clinical, product, and operations team focused on making care programs work for real practices.
            </p>
          </div>
          
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-7 text-center ring-1 ring-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
              <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-brand to-accent p-1">
                <Image src="/assets/team-mohamed.png" alt="Mohamed Rahman" width={112} height={112} className="h-full w-full rounded-full object-cover bg-white" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-plum">Mohamed Rahman</h3>
              <p className="text-sm font-semibold text-brand">Chief Medical Officer</p>
              <p className="mt-3 text-sm text-slate-600">
                Sets e-Vitals&apos; clinical direction — shaping care-program design, monitoring protocols, and quality so every program is grounded in good medicine.
              </p>
            </div>
            
            <div className="rounded-2xl bg-white p-7 text-center ring-1 ring-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
              <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-brand to-accent p-1">
                <Image src="/assets/team-aiman.png" alt="Aiman Rahman" width={112} height={112} className="h-full w-full rounded-full object-cover bg-white" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-plum">Aiman Rahman</h3>
              <p className="text-sm font-semibold text-brand">Chief Product Officer</p>
              <p className="mt-3 text-sm text-slate-600">
                Leads product and platform — turning complex care-management requirements into software that clinical teams actually enjoy using.
              </p>
            </div>
            
            <div className="rounded-2xl bg-white p-7 text-center ring-1 ring-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
              <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-brand to-accent p-1">
                <Image src="/assets/team-summan.png" alt="Summan Rahman" width={112} height={112} className="h-full w-full rounded-full object-cover bg-white" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-plum">Summan Rahman</h3>
              <p className="text-sm font-semibold text-brand">Chief Operations Officer</p>
              <p className="mt-3 text-sm text-slate-600">
                Runs operations — device logistics, onboarding, and support — so launching a program stays genuinely turn-key.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="about-beliefs-section mx-auto max-w-7xl px-6 py-14 animate-rise">
        <div className="about-beliefs-panel">
          <div className="about-beliefs-header">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
            <span className="h-px w-6 bg-brand"></span>What drives us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">
            What we believe
          </h2>
          </div>
        
        <div className="about-beliefs-grid">
          <div className="about-belief-card group">
            <h3 className="text-lg font-semibold text-plum">Patients first</h3>
            <p className="mt-2 text-sm text-slate-600">Every feature traces back to better outcomes and a better experience between visits.</p>
          </div>
          
          <div className="about-belief-card group">
            <h3 className="text-lg font-semibold text-plum">Compliance by default</h3>
            <p className="mt-2 text-sm text-slate-600">Documentation, consent, and audit-ready records are built in — not bolted on.</p>
          </div>
          
          <div className="about-belief-card group">
            <h3 className="text-lg font-semibold text-plum">Sustainable for practices</h3>
            <p className="mt-2 text-sm text-slate-600">Programs should improve care and pay for themselves, without adding admin burden.</p>
          </div>
          
          <div className="about-belief-card group">
            <h3 className="text-lg font-semibold text-plum">Genuinely turn-key</h3>
            <p className="mt-2 text-sm text-slate-600">We handle devices, onboarding, and support so your team can focus on patients.</p>
          </div>
        </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-slate-50/70 border-y border-slate-100 w-full animate-rise">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl bg-brand-tint px-8 py-14 text-center ring-1 ring-brand/15 sm:px-12">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-plum sm:text-4xl">
              Want to see e-Vitals in action?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Tell us about your practice and we will tailor a demo to your patients, workflows, and payers.
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

export default AboutPage;
