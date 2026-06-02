"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-tint/50 to-white"></div>
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 animate-rise">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl text-plum">
                Turn-key <span className="text-accent">care programs</span> for chronic conditions.
              </h1>
              <p className="mt-5 max-w-lg text-lg text-slate-600">
                eVitals equips your practice to launch, run, and bill Medicare care programs — from Remote Patient Monitoring to Chronic Care Management — with devices, onboarding, clinical dashboards, and billing support in one platform.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
                >
                  Request a demo
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <a
                  href="#programs"
                  className="inline-flex items-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-plum ring-1 ring-slate-300 transition hover:ring-slate-400"
                >
                  Explore care programs
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="blob absolute -right-8 -top-10 -z-10 h-56 w-56 rounded-full bg-brand/15 blur-3xl"></div>
              <div className="blob absolute -bottom-10 -left-6 -z-10 h-48 w-48 rounded-full bg-accent/15 blur-3xl" style={{ animationDelay: "-4s" }}></div>
              <div className="rounded-3xl bg-white p-5 ring-1 ring-slate-200 shadow-2xl shadow-slate-300/40">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand/10 text-brand">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 12h4l2-7 4 14 2-7h8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-plum">Connected Care Dashboard</span>
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-accent to-brand text-sm font-bold text-white">JD</span>
                  <div>
                    <div className="text-sm font-semibold text-plum">John Doe</div>
                    <div className="text-xs text-slate-500">PT-4471 · CHF</div>
                  </div>
                </div>
                <div className="mt-3 rounded-xl bg-rose-50 p-4 ring-1 ring-rose-100">
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-rose-500">Heart Rate</div>
                  <div className="text-2xl font-bold text-plum">
                    <span>{heartRate}</span>
                    <span className="text-sm font-normal text-slate-500"> bpm</span>
                  </div>
                  <svg className="mt-1 h-9 w-full" viewBox="0 0 300 36" preserveAspectRatio="none">
                    <path className="ecg-line" d="M0,18 H52 l7,-12 l7,24 l8,-20 l6,8 H150 l7,-12 l7,24 l8,-20 l6,8 H300" fill="none" stroke="#f43f5e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  <div className="rounded-xl bg-blue-50 p-3 ring-1 ring-blue-100">
                    <div className="text-[11px] font-medium text-blue-500">Blood Pressure</div>
                    <div className="mt-0.5 text-lg font-bold text-plum">128/82</div>
                  </div>
                  <div className="rounded-xl bg-amber-50 p-3 ring-1 ring-amber-100">
                    <div className="text-[11px] font-medium text-amber-600">Weight</div>
                    <div className="mt-0.5 text-lg font-bold text-plum">
                      165<span className="text-xs font-normal text-slate-500"> lb</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
                  <div className="mb-2.5 flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">This month</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">Billing-ready</span>
                  </div>
                  <div className="space-y-2.5">
                    <div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600">RPM · device days</span>
                        <span className="font-semibold text-plum">22 / 16</span>
                      </div>
                      <div className="mt-1 h-1.5 w-full rounded-full bg-slate-200">
                        <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600">CCM · care time</span>
                        <span className="font-semibold text-plum">18 / 20 min</span>
                      </div>
                      <div className="mt-1 h-1.5 w-full rounded-full bg-slate-200">
                        <div className="h-1.5 rounded-full bg-amber-400" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Care Programs Section */}
      <section id="programs" className="mx-auto max-w-6xl px-6 py-16 animate-rise">
        <div className="max-w-2xl">

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">
            Care programs, delivered turn-key
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Run one program or several side by side. eVitals handles the devices, workflows, and compliant billing for each — so you can grow reimbursable services as your practice does.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Link
            href="/remote-patient-monitoring"
            className="group rounded-3xl bg-white p-8 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-tint text-brand">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6z" />
              </svg>
            </div>
            <h3 className="mt-5 text-xl font-bold text-plum group-hover:text-brand transition-colors">Remote Patient Monitoring</h3>
            <p className="mt-2 text-sm text-slate-600">Device-based monitoring of vitals between visits — blood pressure, glucose, weight, and more.</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              Explore RPM
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
          <Link
            href="/chronic-care-management"
            className="group rounded-3xl bg-white p-8 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-300/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-tint text-brand">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 6 4.5 4.5 0 0 0 2 8.5C2 10.7 3.5 12.5 5 14l7 7z" />
              </svg>
            </div>
            <h3 className="mt-5 text-xl font-bold text-plum group-hover:text-brand transition-colors">Chronic Care Management</h3>
            <p className="mt-2 text-sm text-slate-600">Reimbursable care coordination for patients with two or more chronic conditions — billable alongside RPM.</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              Explore CCM
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* Platform Section */}
      <section className="bg-slate-50/70 border-y border-slate-100 w-full">
        <div className="mx-auto max-w-6xl px-6 py-16 animate-rise">
          <div className="max-w-2xl">
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">
              One platform for every care program
            </h2>
            <p className="mt-3 text-lg text-slate-600">Everything you need to run a compliant, profitable monitoring program.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint text-brand transition group-hover:bg-brand group-hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="10" r="7" /><path d="M9 10l2 2 4-4" /><path d="M8.5 15.5 7 22l5-2.5L17 22l-1.5-6.5" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-plum">FDA-cleared medical devices</h3>
              <p className="mt-2 text-sm text-slate-600">Clinically validated BP, glucose, and weight devices.</p>
            </div>

            <div className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-accent transition group-hover:bg-accent group-hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2.5" width="14" height="19" rx="2.5" /><line x1="10" y1="18.5" x2="14" y2="18.5" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-plum">Device provisioning &amp; setup</h3>
              <p className="mt-2 text-sm text-slate-600">We enroll patients and ship ready-to-use devices directly to their doors.</p>
            </div>

            <div className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3.5" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M18 8v6M21 11h-6" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-plum">Patient Onboarding</h3>
              <p className="mt-2 text-sm text-slate-600">White-glove enrollment and education for your patients.</p>
            </div>

            <div className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-plum">Clinical monitoring dashboards</h3>
              <p className="mt-2 text-sm text-slate-600">Real-time vitals in one intuitive interface for the whole care team.</p>
            </div>

            <div className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-500 transition group-hover:bg-rose-500 group-hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3v18l2-1.2L10 21l2-1.2L14 21l2-1.2L18 21V3l-2 1.2L14 3l-2 1.2L10 3 8 4.2z" /><path d="M9 8.5h6M9 12.5h6" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-plum">Automated billing workflows</h3>
              <p className="mt-2 text-sm text-slate-600">Time and activity logged for the correct CPT codes, audit-ready.</p>
            </div>

            <div className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-plum">Reimbursement optimization</h3>
              <p className="mt-2 text-sm text-slate-600">Capture every billable program component without manual tracking.</p>
            </div>

            <div className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="2.5" y="13" width="4.5" height="6" rx="2" /><rect x="17" y="13" width="4.5" height="6" rx="2" /><path d="M20 19a4 4 0 0 1-4 3h-2" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-plum">Technical assistance</h3>
              <p className="mt-2 text-sm text-slate-600">US-based support for your staff and patients.</p>
            </div>

            <div className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-500 transition group-hover:bg-rose-500 group-hover:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-plum">HIPAA compliance management</h3>
              <p className="mt-2 text-sm text-slate-600">Encryption, access controls, and audit logging built in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Benefits Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 animate-rise">
        <div className="max-w-2xl">

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">
            Better care and a stronger bottom line
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            e-Vitals helps your practice deliver proactive, continuous care while opening a sustainable, reimbursable revenue stream — without adding administrative burden.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-accent transition group-hover:bg-accent group-hover:text-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-plum">Increase practice revenue</h3>
            <p className="mt-2 text-sm text-slate-600">Recurring, reimbursable income from RPM and CCM — roughly $100–$150 per enrolled patient each month — with no added overhead.</p>
          </div>

          <div className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 6 4.5 4.5 0 0 0 2 8.5C2 10.7 3.5 12.5 5 14l7 7z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-plum">Improve patient outcomes</h3>
            <p className="mt-2 text-sm text-slate-600">Continuous data and early alerts enable timely intervention, helping reduce avoidable hospitalizations and ER visits.</p>
          </div>

          <div className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-accent transition group-hover:bg-accent group-hover:text-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-plum">Save your staff time</h3>
            <p className="mt-2 text-sm text-slate-600">Automated alerts, dashboards, and billing reports cut manual work so your team can focus on patients, not paperwork.</p>
          </div>

          <div className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition group-hover:bg-sky-500 group-hover:text-white">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-plum">Boost engagement &amp; retention</h3>
            <p className="mt-2 text-sm text-slate-600">Between-visit monitoring and check-ins keep patients adherent and strengthen the patient–provider relationship.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 rounded-2xl bg-deep px-6 py-9 text-white sm:grid-cols-4">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-brand-tint">$100–150</div>
            <div className="mt-1 text-xs text-white/70">avg. reimbursement / patient / mo*</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-brand-tint">2-in-1</div>
            <div className="mt-1 text-xs text-white/70">blood pressure + glucose device</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-brand-tint">16+ days</div>
            <div className="mt-1 text-xs text-white/70">of readings captured each month</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-brand-tint">No Wi-Fi</div>
            <div className="mt-1 text-xs text-white/70">cellular devices — no app or pairing</div>
          </div>
        </div>
        <p className="mt-3 text-xs text-slate-400">*Approximate; varies by payer, locality, and program mix. Not billing advice.</p>
      </section>

      {/* Conditions Managed Section */}
      <section className="bg-slate-50/70 border-y border-slate-100 w-full">
        <div className="mx-auto max-w-6xl px-6 py-16 animate-rise">
          <div className="max-w-2xl">

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">
              Conditions we help you manage
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <h3 className="text-xl font-bold text-plum">Hypertension</h3>
              <p className="mt-2 text-sm text-slate-600">Daily blood-pressure monitoring with trend alerts to keep patients in range.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <h3 className="text-xl font-bold text-plum">Congestive Heart Failure</h3>
              <p className="mt-2 text-sm text-slate-600">Daily weights and BP flag fluid retention before an ED visit.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
              <h3 className="text-xl font-bold text-plum">Diabetes</h3>
              <p className="mt-2 text-sm text-slate-600">Connected glucose and weight tracking for tighter glycemic control.</p>
            </div>
          </div>
          <Link href="/how-we-serve" className="mt-8 inline-flex items-center gap-2 font-semibold text-brand">
            See who we serve
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Reimbursement Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 animate-rise">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">
              Maximize reimbursement across programs
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              eVitals captures time and activity for the right CPT codes automatically — and RPM and CCM can be billed together for the same eligible patient.
            </p>
            <ul className="mt-5 space-y-2 text-slate-600">
              <li className="flex gap-2">
                <svg className="h-5 w-5 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Audit-ready documentation for every program
              </li>
              <li className="flex gap-2">
                <svg className="h-5 w-5 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                RPM + CCM billable in the same month
              </li>
              <li className="flex gap-2">
                <svg className="h-5 w-5 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                A live calculator to estimate your revenue
              </li>
            </ul>
            <Link href="/ReimbursementCalculator" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand">
              See codes &amp; estimate revenue
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="rounded-2xl bg-white p-7 ring-1 ring-slate-200">
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
                  <div className="h-1.5 rounded-full bg-brand" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">CCM</span>
                  <span className="font-semibold text-plum">99490 · 99439 · 99491</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-slate-200">
                  <div className="h-1.5 rounded-full bg-accent" style={{ width: "55%" }}></div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">*Approximate; varies by payer and locality. Not billing advice.</p>
          </div>
        </div>
      </section>

      {/* Ready to Launch CTA Section */}
      <section className="bg-slate-50/70 border-y border-slate-100 w-full">
        <div className="mx-auto max-w-6xl px-6 py-20 animate-rise">
          <div className="rounded-3xl bg-brand-tint px-8 py-14 text-center ring-1 ring-brand/15 sm:px-12">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-plum sm:text-4xl">
              Ready to launch your care programs the easy way?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Tell us about your practice and we’ll tailor a demo to your patient population, workflows, and payers.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Book a demo
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
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

export default Home;
