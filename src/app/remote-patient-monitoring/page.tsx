'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CheckIcon = () => (
  <svg className="h-5 w-5 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const XIcon = () => (
  <svg className="h-5 w-5 flex-none text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
  </svg>
);
const ArrowIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const rpmFaqs = [
  {
    q: 'What is remote patient monitoring (RPM)?',
    a: 'RPM lets a patient capture their own health data with a connected medical device that automatically transmits it to the care team, who use it to manage an acute or chronic condition between visits. Medicare pays for it under the Physician Fee Schedule.',
  },
  {
    q: 'Which physiologic data can RPM capture?',
    a: 'CMS lists examples such as oxygen saturation, blood pressure, blood sugar or blood oxygen levels, and weight loss or gain. The data must be tied to managing the patient\'s condition.',
  },
  {
    q: 'Do I need an established relationship with the patient?',
    a: 'Yes — remote physiologic monitoring requires an established patient relationship.',
  },
  {
    q: 'Who can bill for RPM?',
    a: 'Only physicians and qualified non-physician practitioners who are eligible to provide and bill evaluation and management services. Auxiliary clinical staff can furnish the work under the billing practitioner\'s general supervision.',
  },
  {
    q: 'What kind of device qualifies?',
    a: 'The device must meet the FDA\'s definition of a medical device, and it must electronically collect physiologic data and automatically upload it to a secure location for the billing practitioner to analyze. e-Vitals devices are FDA-cleared and cellular — they transmit on their own with no Wi-Fi, app, or pairing.',
  },
  {
    q: 'How many days of readings are required?',
    a: 'For the device-supply code (99454), at least 16 days of readings within a 30-day period. A newer 2026 code (99445) covers periods with 2–15 days of data. The 16-day requirement does not apply to the time-based treatment-management codes (99457, 99458).',
  },
  {
    q: 'Is patient consent required?',
    a: 'Yes — consent is required at the time RPM is furnished. It can be obtained when services begin, and auxiliary staff under the practitioner\'s general supervision may obtain it. e-Vitals captures and documents consent during onboarding.',
  },
  {
    q: 'Can RPM and CCM be billed in the same month?',
    a: 'Yes. For an eligible patient, remote patient monitoring can be billed in the same month as CCM, as long as the time counted toward each service is distinct. The same is true for TCM, BHI, PCM, and chronic pain management.',
  },
];

const cptCodes = [
  { code: '99453', desc: 'Setup & patient education', sub: 'Initial setup and education on the monitoring device(s).', freq: 'Once per episode', avg: '$20', tag: '' },
  { code: '99454', desc: 'Device supply + data (16+ days)', sub: 'Device supply with daily recordings; requires ≥16 days of readings.', freq: 'Each 30 days', avg: '$45–50', tag: '' },
  { code: '99445', desc: 'Device supply + data (2–15 days)', sub: 'Device supply when only 2–15 days of readings are collected.', freq: 'Each 30 days', avg: 'varies', tag: 'New 2026' },
  { code: '99470', desc: 'First 10 minutes of management', sub: 'Management with interactive communication; 10–19 total minutes.', freq: 'Monthly', avg: '$10–26', tag: 'New 2026' },
  { code: '99457', desc: 'First 20 minutes of management', sub: 'Treatment management requiring interactive communication.', freq: 'Monthly', avg: '$48–52', tag: '' },
  { code: '99458', desc: 'Each additional 20 minutes', sub: 'Add-on to 99457 for each additional 20 minutes.', freq: 'Monthly (add-on)', avg: '$41', tag: 'Add-on' },
  { code: '99091', desc: 'Physician data interpretation', sub: 'Collection & interpretation of physiologic data by a physician/QHP.', freq: 'Each 30 days', avg: '$50–56', tag: '' },
];

const platformFeatures = [
  { color: 'brand', title: 'Real-time data dashboard', body: 'Vitals — BP, heart rate, glucose, weight, SpO2 — in one intuitive interface.' },
  { color: 'emerald', title: 'Automatic device sync', body: 'Cellular devices post readings straight to the chart with no patient setup.' },
  { color: 'blue', title: 'Smart alerts & triage', body: 'Thresholds learn each patient\'s baseline and escalate only what matters.' },
  { color: 'rose', title: 'EHR integration', body: 'Bi-directional sync with major EHR systems.' },
  { color: 'amber', title: 'Audit-ready billing', body: 'Device-days and time logged for CPT 99453, 99454, 99457, 99458, and 99091 — audit-ready.' },
  { color: 'blue', title: 'Population health', body: 'Segment patients by condition, risk, and adherence.' },
];

export default function RPMPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand/5 to-white">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-16">
          <nav className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand">Home</Link>
            {' / '}
            <span className="text-plum">Remote Patient Monitoring</span>
          </nav>
          <div className="max-w-3xl animate-[riseIn_.7s_cubic-bezier(.2,.7,.2,1)_both]">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
              <span className="h-px w-6 bg-brand" />Services · RPM
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl text-plum">
              Remote Patient Monitoring built for outcomes and reimbursement.
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              e-Vitals collects, transmits, and displays physiologic data from FDA-cleared devices — giving providers
              continuous visibility between visits, with the documentation and billing automation to make it sustainable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/demo" className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-dark">
                Book a demo <ArrowIcon />
              </Link>
              <Link href="/chronic-care-management" className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-plum ring-1 ring-slate-300 hover:ring-slate-400">
                Add CCM
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is RPM */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
              <span className="h-px w-6 bg-brand" />Overview
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">What is remote patient monitoring?</h2>
            <p className="mt-4 text-lg text-slate-600">
              RPM lets a patient capture their own health data with a connected medical device that automatically transmits
              it to your team — who use it to manage an acute or chronic condition between visits. Medicare pays for it
              under the Physician Fee Schedule.
            </p>
            <p className="mt-5 text-sm font-semibold text-plum">Physiologic data RPM can capture includes:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Blood pressure', 'Blood glucose', 'Blood oxygen (SpO2)', 'Weight'].map((d) => (
                <span key={d} className="rounded-full bg-brand/10 px-3.5 py-1.5 text-sm font-medium text-brand ring-1 ring-brand/15">
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Data flow card */}
          <div className="rounded-3xl bg-gradient-to-br from-brand to-accent p-7 text-white shadow-xl shadow-brand/20">
            <h3 className="text-lg font-bold">Data flows automatically</h3>
            <p className="mt-2 text-sm text-white/85">
              A connected, cellular device captures a reading and uploads it straight to your secure dashboard — no Wi-Fi,
              app, or manual entry.
            </p>
            <svg viewBox="0 0 320 96" className="mt-6 h-auto w-full" role="img" aria-label="Device transmits to secure cloud to provider dashboard">
              <g fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="14" y="30" width="34" height="50" rx="6" /><line x1="22" y1="72" x2="40" y2="72" />
                <path d="M120 56 a16 16 0 0 1 4 -31 a20 20 0 0 1 38 4 a14 14 0 0 1 -2 27 z" />
                <rect x="244" y="28" width="58" height="40" rx="5" />
                <path d="M252 60l8-10 7 6 9-13 8 9" /><line x1="262" y1="68" x2="284" y2="68" /><line x1="273" y1="68" x2="273" y2="74" />
              </g>
              <g stroke="#BEE3E3" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="3 6">
                <line x1="56" y1="55" x2="108" y2="48" /><line x1="170" y1="46" x2="238" y2="48" />
              </g>
            </svg>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Blood pressure', 'Blood glucose', 'Blood oxygen (SpO2)', 'Weight'].map((d) => (
                <span key={d} className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/25">{d}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-slate-50/70 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
              <span className="h-px w-6 bg-brand" />Requirements
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">What Medicare requires for RPM</h2>
            <p className="mt-3 text-lg text-slate-600">
              The rules below come straight from current CMS and HHS guidance. e-Vitals is built so your program meets every one.
            </p>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <ul className="space-y-3">
              {[
                'Only physicians and qualified practitioners who can bill evaluation & management (E/M) services may bill RPM.',
                'Remote physiologic monitoring requires an established patient relationship.',
                'Monitoring must address an acute or chronic condition and be medically reasonable and necessary.',
                'The device must meet the FDA\'s definition of a medical device.',
                'Physiologic data is collected electronically and automatically uploaded to a secure location for the billing practitioner to review.',
                'Patient consent is required at the time RPM is furnished — auxiliary staff under general supervision may obtain it.',
                'Auxiliary personnel may furnish RPM under the general supervision of the billing practitioner.',
              ].map((r) => (
                <li key={r} className="flex gap-3 text-slate-600"><CheckIcon /><span>{r}</span></li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: '16+ days', label: 'of readings in 30 days for the device-supply code' },
                { stat: '1', label: 'practitioner bills RPM per 30-day period' },
                { stat: 'FDA', label: 'device definition must be met' },
                { stat: 'General', label: 'supervision — your team can deliver it' },
              ].map((s) => (
                <div key={s.stat} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                  <div className="text-2xl font-extrabold text-brand">{s.stat}</div>
                  <div className="mt-1 text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-step workflow */}
      <section className="rpm-workflow-card-section mx-auto max-w-7xl px-6 py-10">
        <div className="p-7 md:p-9">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#F5EFE6]/80">
              <span className="h-px w-6 bg-[#F5EFE6]/70" />How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#FAF8F4] sm:text-4xl">From enrolling to billing in 4 steps</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {[
              { n: '01', t: 'Enroll eligible patients', b: 'We identify and enroll eligible patients and provision the device.' },
              { n: '02', t: 'Connect device', b: 'Cellular devices sync to patient charts the moment they\'re switched on.' },
              { n: '03', t: 'Monitor & intervene', b: 'Your clinical team reviews data, documents time, and escalates when needed.' },
              { n: '04', t: 'Bill & reconcile', b: 'A monthly, audit-ready RPM & CCM codes report is generated.' },
            ].map((s) => (
              <div key={s.n}>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#F5EFE6]/65 bg-white/10 font-bold text-[#FAF8F4]">{s.n}</div>
                <h3 className="mt-4 text-lg font-semibold text-[#FAF8F4]">{s.t}</h3>
                <p className="mt-1 text-sm text-[#FAF8F4]/76">{s.b}</p>
              </div>
            ))}
          </div>
          <Link href="/how-it-works" className="mt-7 inline-flex items-center gap-2 font-semibold text-[#FAF8F4] hover:text-white">
            See the full workflow <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* Platform features */}
      <section className="bg-slate-50/70 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
              <span className="h-px w-6 bg-brand" />Platform
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">Core platform features</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((f) => (
              <div key={f.title} className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-${f.color === 'brand' ? 'brand/10' : f.color === 'emerald' ? 'emerald-50' : f.color === 'blue' ? 'blue-50' : f.color === 'rose' ? 'rose-50' : 'amber-50'} text-${f.color === 'brand' ? 'brand' : f.color === 'emerald' ? 'emerald-600' : f.color === 'blue' ? 'blue-600' : f.color === 'rose' ? 'rose-500' : 'amber-600'}`}>
                  <CheckIcon />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-plum">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devices */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
            <span className="h-px w-6 bg-brand" />Devices
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">FDA-cleared monitoring devices</h2>
          <p className="mt-3 text-lg text-slate-600">Cellular, ready out of the box — no Wi-Fi, pairing, or apps for patients.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {/* BP + Glucose Monitor */}
          <div className="rpm-device-card">
            <div className="rpm-device-card__copy">
              <h3 className="text-lg font-bold text-plum">2-in-1 Blood Pressure & Glucose Monitor</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {['Audible results in English & Spanish', 'Atrial Fibrillation detection (AFib)', 'Automatic BP averaging per AHA/ACC', 'Built-in 4G cellular SIM'].map((f) => (
                  <li key={f} className="flex gap-2"><CheckIcon /> {f}</li>
                ))}
              </ul>
            </div>
            <div className="rpm-device-card__image" aria-hidden="true">
              <Image
                src="/assets/rpm-bp-glucose-monitor.png"
                alt=""
                fill
                className="rpm-device-card__photo rpm-device-card__photo--monitor"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>
          {/* Weight Scale */}
          <div className="rpm-device-card">
            <div className="rpm-device-card__copy">
              <h3 className="text-lg font-bold text-plum">Cellular Weight Scale</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {['Supports up to 550 lbs', 'Large backlit, high-contrast LCD', 'Results in English, Spanish & French', 'Automatic step-on, auto-off'].map((f) => (
                  <li key={f} className="flex gap-2"><CheckIcon /> {f}</li>
                ))}
              </ul>
            </div>
            <div className="rpm-device-card__image" aria-hidden="true">
              <Image
                src="/assets/rpm-cellular-weight-scale.png"
                alt=""
                fill
                className="rpm-device-card__photo rpm-device-card__photo--scale"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CPT Codes */}
      <section className="bg-slate-50/70 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
              <span className="h-px w-6 bg-brand" />Reimbursement
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">How RPM is billed</h2>
            <p className="mt-3 text-lg text-slate-600">RPM has three components that build on each other — each with its own CPT codes.</p>
          </div>
          <div className="mt-10 overflow-x-auto rounded-2xl ring-1 ring-slate-200">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-plum text-xs uppercase tracking-wide text-white/85">
                  <th className="px-5 py-3.5 font-semibold">CPT</th>
                  <th className="px-5 py-3.5 font-semibold">What it covers</th>
                  <th className="px-5 py-3.5 font-semibold">Frequency</th>
                  <th className="px-5 py-3.5 text-right font-semibold">Approx. avg*</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {cptCodes.map((c) => (
                  <tr key={c.code} className="align-top transition-colors hover:bg-slate-50">
                    <td className="whitespace-nowrap px-5 py-4">
                      <span className="font-mono text-sm font-semibold text-brand">{c.code}</span>
                      {c.tag && (
                        <span className={`ml-2 rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${c.tag === 'Add-on' ? 'bg-plum/10 text-plum' : 'bg-brand/10 text-brand ring-1 ring-inset ring-brand/20'}`}>
                          {c.tag}
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      <div className="font-semibold text-plum">{c.desc}</div>
                      <div className="mt-0.5 text-sm text-slate-500">{c.sub}</div>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{c.freq}</td>
                    <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-plum">{c.avg === 'varies' ? <span className="font-normal text-slate-400">varies</span> : c.avg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-white p-5 ring-1 ring-slate-200 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600">Want to see what RPM could mean for your panel? Model patients, codes, and rates in the live calculator.</p>
            <Link href="/ReimbursementCalculator" className="inline-flex flex-none items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">
              Estimate revenue <ArrowIcon />
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Approximate national averages; actual payment varies by payer, locality, and program mix. Not billing advice — verify against the current Medicare Physician Fee Schedule. CPT© is a registered trademark of the AMA.
          </p>
        </div>
      </section>

      {/* Concurrent billing */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
            <span className="h-px w-6 bg-brand" />Concurrent billing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">What RPM can run alongside</h2>
          <p className="mt-3 text-lg text-slate-600">RPM pairs with most care-management programs. e-Vitals keeps time per program distinct so claims hold up.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-7 ring-1 ring-slate-200">
            <h3 className="flex items-center gap-2 text-lg font-bold text-plum"><CheckIcon /> Can run alongside RPM</h3>
            <ul className="mt-4 space-y-3">
              {[
                'Chronic care management (CCM) — bill RPM and CCM together for an eligible patient when the time counted toward each is distinct.',
                'Transitional care management (TCM), behavioral health integration (BHI), principal care management (PCM), and chronic pain management (CPM) — RPM may run concurrently with each, without double-counting time.',
                'During a global surgery period — a practitioner not receiving the global payment may bill RPM for an unrelated underlying condition.',
              ].map((r) => (
                <li key={r} className="flex gap-3 text-sm text-slate-600"><CheckIcon /><span>{r}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-7 ring-1 ring-slate-200">
            <h3 className="flex items-center gap-2 text-lg font-bold text-plum"><XIcon /> Can&apos;t be billed together</h3>
            <ul className="mt-4 space-y-3">
              {[
                'More than one practitioner billing RPM for the same patient in a 30-day period.',
                'Any time already counted toward another billed service — RPM minutes can\'t be counted twice.',
              ].map((r) => (
                <li key={r} className="flex gap-3 text-sm text-slate-600"><XIcon /><span>{r}</span></li>
              ))}
            </ul>
          </div>
        </div>
        {/* Combined opportunity CTA */}
        <div className="mt-8 overflow-hidden rounded-3xl bg-plum px-8 py-10 text-white sm:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand-tint/90">The combined opportunity</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Run RPM and CCM together — compliantly.</h3>
            <p className="mt-3 text-white/75">
              For an eligible patient, RPM and chronic care management can both be billed in the same month when the time
              counted toward each is distinct. e-Vitals tracks both programs in one dashboard.
            </p>
            <Link href="/chronic-care-management" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-plum hover:bg-slate-100">
              Explore CCM <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rpm-faq-panel">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#FAF8F4]/82">
              <span className="h-px w-6 bg-[#FAF8F4]/70" />FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#FAF8F4] sm:text-4xl">Remote Patient Monitoring FAQs</h2>
            <p className="mt-3 text-[#FAF8F4]/72">
              Answers based on current CMS guidance (MLN901705) and HHS telehealth.hhs.gov RPM billing guidance. General
              information, not billing advice — confirm details against current CMS and payer rules.
            </p>
          </div>
          <div className="mt-8 grid gap-3">
            {rpmFaqs.map((faq, i) => (
              <div key={i} className="rounded-2xl bg-[#FAF8F4] px-6 py-5 shadow-lg shadow-[#1B1630]/18 ring-1 ring-[#D8CBBE]/80">
                <button
                  className="flex w-full cursor-pointer items-center justify-between gap-4 text-left font-semibold text-plum"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <svg className={`h-5 w-5 flex-none text-brand transition ${openFaq === i ? 'rotate-45' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </button>
                {openFaq === i && <p className="mt-3 leading-relaxed text-slate-600">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
