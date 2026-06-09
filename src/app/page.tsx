"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerChild } from "@/components/ui/motion";
import DashboardPreview from "@/components/home/DashboardPreview";
import PulseMonitor from "@/components/home/PulseMonitor";

const Home: React.FC = () => {
  const [heartRate, setHeartRate] = useState(78);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(74 + Math.floor(Math.random() * 9));
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="home-hero-section relative overflow-hidden" data-rpm-ignore-motion>
        <div className="homepage-hero-bg" aria-hidden="true" />
        <PulseMonitor className="homepage-pulse-monitor" />

        <div className="home-hero-content relative z-10 mx-auto max-w-7xl px-6 pb-14 pt-6 md:pb-16 md:pt-8">
          <div className="home-hero-grid grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl text-plum">
                <span className="hero-keyword">Turn-key</span> care programs for chronic conditions.
              </h1>
              <p className="mt-5 max-w-lg text-lg text-slate-600">
                eVitals equips your practice to launch, run, and bill Medicare care programs — from Remote Patient Monitoring to Chronic Care Management — with devices, onboarding, clinical dashboards, and billing support in one platform.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/demo" className="btn-primary">
                  Request a demo
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <a href="#programs" className="btn-secondary">
                  Explore care programs
                </a>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="home-hero-media relative w-full max-w-xl">
                <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
                <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-full bg-highlight/50 blur-2xl" aria-hidden="true" />
                <div className="home-hero-image-frame relative overflow-hidden rounded-[2rem] shadow-2xl shadow-secondary/15 ring-1 ring-highlight/60 floaty">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/assets/home-hero-laptop-phone.png"
                      alt="eVitals clinical monitoring dashboard"
                      fill
                      className="home-hero-image object-cover object-center"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Programs Section */}
      <section id="programs" className="mx-auto w-full px-6 py-16">
        <Reveal className="max-w-2xl">
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">
            Care programs, delivered turn-key
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Run one program or several side by side. eVitals handles the devices, workflows, and compliant billing for each — so you can grow reimbursable services as your practice does.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-5 md:grid-cols-2">
          <StaggerChild>
            <Link href="/remote-patient-monitoring" className="card-feature program-card-horizontal group p-8 rounded-3xl">
              <div className="program-card-copy">
                <h3 className="text-xl font-bold text-plum group-hover:text-brand transition-colors">Remote Patient Monitoring</h3>
                <p className="mt-2 text-sm text-slate-600">Device-based monitoring of vitals between visits — blood pressure, glucose, weight, and more.</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Explore RPM
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className="program-card-graphic program-card-graphic--side">
                <Image
                  src="/assets/rpm-card-photo.png"
                  alt=""
                  width={940}
                  height={768}
                  className="program-card-graphic__image program-card-graphic__image--side"
                />
              </div>
            </Link>
          </StaggerChild>
          <StaggerChild>
            <Link href="/chronic-care-management" className="card-feature program-card-horizontal group p-8 rounded-3xl">
              <div className="program-card-copy">
                <h3 className="text-xl font-bold text-plum group-hover:text-brand transition-colors">Chronic Care Management</h3>
                <p className="mt-2 text-sm text-slate-600">Reimbursable care coordination for patients with two or more chronic conditions — billable alongside RPM.</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Explore CCM
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <div className="program-card-graphic program-card-graphic--side">
                <Image
                  src="/assets/ccm-card-photo.png"
                  alt=""
                  width={1200}
                  height={850}
                  className="program-card-graphic__image program-card-graphic__image--side program-card-graphic__image--ccm"
                />
              </div>
            </Link>
          </StaggerChild>
        </Stagger>
      </section>

      {/* Platform Section */}
      <section className="bg-highlight/20 border-y border-highlight/40 w-full">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Reveal className="max-w-2xl">
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              One platform for every care program
            </h2>
            <p className="mt-3 text-lg text-slate-600">Everything you need to run a compliant, profitable monitoring program.</p>
          </Reveal>

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
            <DashboardPreview heartRate={heartRate} className="floaty lg:sticky lg:top-24" />
            <Stagger className="platform-feature-grid grid gap-4 sm:grid-cols-2">
            {[
              { iconBg: "bg-brand-tint text-brand", hoverBg: "group-hover:bg-brand group-hover:text-white", title: "FDA-cleared medical devices", desc: "Clinically validated BP, glucose, and weight devices.", icon: (<><circle cx="12" cy="10" r="7" /><path d="M9 10l2 2 4-4" /><path d="M8.5 15.5 7 22l5-2.5L17 22l-1.5-6.5" /></>) },
              { iconBg: "bg-blue-50 text-accent", hoverBg: "group-hover:bg-accent group-hover:text-white", title: "Device provisioning & setup", desc: "We enroll patients and ship ready-to-use devices directly to their doors.", icon: (<><rect x="5" y="2.5" width="14" height="19" rx="2.5" /><line x1="10" y1="18.5" x2="14" y2="18.5" /></>) },
              { iconBg: "bg-amber-50 text-amber-600", hoverBg: "group-hover:bg-amber-500 group-hover:text-white", title: "Patient Onboarding", desc: "White-glove enrollment and education for your patients.", icon: (<><circle cx="9" cy="8" r="3.5" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M18 8v6M21 11h-6" /></>) },
              { iconBg: "bg-amber-50 text-amber-600", hoverBg: "group-hover:bg-amber-500 group-hover:text-white", title: "Clinical monitoring dashboards", desc: "Real-time vitals in one intuitive interface for the whole care team.", icon: (<><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></>) },
              { iconBg: "bg-rose-50 text-rose-500", hoverBg: "group-hover:bg-rose-500 group-hover:text-white", title: "Automated billing workflows", desc: "Time and activity logged for the correct CPT codes, audit-ready.", icon: (<><path d="M6 3v18l2-1.2L10 21l2-1.2L14 21l2-1.2L18 21V3l-2 1.2L14 3l-2 1.2L10 3 8 4.2z" /><path d="M9 8.5h6M9 12.5h6" /></>) },
              { iconBg: "bg-sky-50 text-sky-600", hoverBg: "group-hover:bg-sky-500 group-hover:text-white", title: "Reimbursement optimization", desc: "Capture every billable program component without manual tracking.", icon: (<><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>) },
              { iconBg: "bg-sky-50 text-sky-600", hoverBg: "group-hover:bg-sky-500 group-hover:text-white", title: "Technical assistance", desc: "US-based support for your staff and patients.", icon: (<><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="2.5" y="13" width="4.5" height="6" rx="2" /><rect x="17" y="13" width="4.5" height="6" rx="2" /><path d="M20 19a4 4 0 0 1-4 3h-2" /></>) },
              { iconBg: "bg-rose-50 text-rose-500", hoverBg: "group-hover:bg-rose-500 group-hover:text-white", title: "HIPAA compliance management", desc: "Encryption, access controls, and audit logging built in.", icon: (<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></>) },
            ].map((item) => (
              <StaggerChild key={item.title}>
                <div className="card-feature group">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${item.iconBg} ${item.hoverBg}`}>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-plum">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                </div>
              </StaggerChild>
            ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Provider Benefits Section */}
      <section className="mx-auto w-full px-6 py-16">
        <Reveal className="max-w-2xl">
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">
            Better care and a stronger bottom line
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            e-Vitals helps your practice deliver proactive, continuous care while opening a sustainable, reimbursable revenue stream — without adding administrative burden.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { iconBg: "bg-blue-50 text-accent", hoverBg: "group-hover:bg-accent group-hover:text-white", title: "Increase practice revenue", desc: "Recurring, reimbursable income from RPM and CCM — roughly $100–$150 per enrolled patient each month — with no added overhead.", icon: (<><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>) },
            { iconBg: "bg-amber-50 text-amber-600", hoverBg: "group-hover:bg-amber-500 group-hover:text-white", title: "Improve patient outcomes", desc: "Continuous data and early alerts enable timely intervention, helping reduce avoidable hospitalizations and ER visits.", icon: (<path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 6 4.5 4.5 0 0 0 2 8.5C2 10.7 3.5 12.5 5 14l7 7z" />) },
            { iconBg: "bg-blue-50 text-accent", hoverBg: "group-hover:bg-accent group-hover:text-white", title: "Save your staff time", desc: "Automated alerts, dashboards, and billing reports cut manual work so your team can focus on patients, not paperwork.", icon: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>) },
            { iconBg: "bg-sky-50 text-sky-600", hoverBg: "group-hover:bg-sky-500 group-hover:text-white", title: "Boost engagement & retention", desc: "Between-visit monitoring and check-ins keep patients adherent and strengthen the patient–provider relationship.", icon: (<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />) },
          ].map((item) => (
            <StaggerChild key={item.title} className="h-full">
              <div className="card-feature group">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${item.iconBg} ${item.hoverBg}`}>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-plum">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            </StaggerChild>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-10">
          <div className="stat-banner">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-highlight">$100–150</div>
              <div className="mt-1 text-xs text-white/70">avg. reimbursement / patient / mo*</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-highlight">2-in-1</div>
              <div className="mt-1 text-xs text-white/70">blood pressure + glucose device</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-highlight">16+ days</div>
              <div className="mt-1 text-xs text-white/70">of readings captured each month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-highlight">No Wi-Fi</div>
              <div className="mt-1 text-xs text-white/70">cellular devices — no app or pairing</div>
            </div>
          </div>
          <p className="mt-3 text-xs text-[#1B1630]">*Approximate; varies by payer, locality, and program mix. Not billing advice.</p>
        </Reveal>
      </section>

      {/* Conditions Managed Section */}
      <section className="bg-slate-50/70 border-y border-slate-100 w-full">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">
                Conditions we help you manage
              </h2>
              <Stagger className="mt-10 grid gap-5">
                {[
                  { title: "Hypertension", desc: "Daily blood-pressure monitoring with trend alerts to keep patients in range." },
                  { title: "Congestive Heart Failure", desc: "Daily weights and BP flag fluid retention before an ED visit." },
                  { title: "Diabetes", desc: "Connected glucose and weight tracking for tighter glycemic control." },
                ].map((item) => (
                  <StaggerChild key={item.title}>
                    <div className="card-premium">
                      <h3 className="text-xl font-bold text-plum">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </StaggerChild>
                ))}
              </Stagger>
              <Link href="/who-we-serve" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand">
                See who we serve
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Reveal>

            <Reveal delay={0.15} className="relative hidden lg:block">
              <div className="condition-visual" aria-hidden="true">
                <div className="condition-visual__image">
                  <Image
                    src="/assets/medical-stats.jpg"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="44vw"
                  />
                </div>
                <div className="condition-visual__panel condition-visual__panel--top">
                  <svg viewBox="0 0 180 54" preserveAspectRatio="none">
                    <path className="condition-wave" d="M0,30 H34 l8,-17 l9,34 l10,-24 l8,7 H98 l8,-15 l9,30 l11,-21 l8,6 H180" fill="none" />
                  </svg>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reimbursement Section */}
      <section className="mx-auto w-full px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">
              Maximize reimbursement across programs
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              eVitals captures time and activity for the right CPT codes automatically — and RPM and CCM can be billed together for the same eligible patient.
            </p>
            <ul className="mt-5 space-y-2 text-slate-600">
              {[
                "Audit-ready documentation for every program",
                "RPM + CCM billable in the same month",
                "A live calculator to estimate your revenue",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <svg className="h-5 w-5 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/ReimbursementCalculator" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand">
              See codes &amp; estimate revenue
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-premium p-7">
              <div className="text-sm font-semibold text-slate-500">Estimated monthly reimbursement</div>
              <div className="mt-1 text-4xl font-extrabold text-plum">
                $100–150<span className="text-base font-medium text-slate-500"> / patient*</span>
              </div>
              <div className="mt-5 space-y-3">
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">RPM</span>
                    <span className="font-semibold text-plum">99453–99458 · 99091</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-slate-200">
                    <div className="h-1.5 rounded-full bg-brand" style={{ width: "70%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">CCM</span>
                    <span className="font-semibold text-plum">99490 · 99439 · 99491</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-slate-200">
                    <div className="h-1.5 rounded-full bg-accent" style={{ width: "55%" }} />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#1B1630]">*Approximate; varies by payer and locality. Not billing advice.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ready to Launch CTA Section */}
      <section className="bg-slate-50/70 border-y border-slate-100 w-full">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <div className="cta-panel">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-plum sm:text-4xl">
                Ready to launch your care programs the easy way?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-600">
                Tell us about your practice and we&apos;ll tailor a demo to your patient population, workflows, and payers.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/demo" className="btn-primary">
                  Book a demo
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/ReimbursementCalculator" className="btn-secondary">
                  Estimate revenue
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
