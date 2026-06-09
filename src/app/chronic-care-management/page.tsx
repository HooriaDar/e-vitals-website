'use client';

import { useState } from 'react';
import Link from 'next/link';
import CCMMonitor from '@/components/CCMMonitor';

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

const eligibilityItems = [
  'Two or more chronic conditions expected to last at least 12 months, or until the patient\'s death.',
  'Conditions that place the patient at significant risk of death, acute exacerbation or decompensation, or functional decline.',
  'An initiating visit for new patients (or any patient not seen within the past year).',
  'Documented patient consent — verbal or written — captured before billing.',
  'A comprehensive, patient-centered electronic care plan that is shared and maintained.',
];

const conditions = [
  "Alzheimer's & related dementia", 'Arthritis', 'Asthma', 'Atrial fibrillation',
  'Autism spectrum disorders', 'Cancer', 'Cardiovascular disease', 'COPD',
  'Depression', 'Diabetes', 'Glaucoma', 'HIV / AIDS', 'Hypertension', 'Substance use disorders',
];

const serviceCards = [
  {
    iconColor: 'emerald',
    iconPath: <><path d="M7 3h8l4 4v14H7z" /><path d="M15 3v4h4" /><path d="M10 12h6M10 16h4" /></>,
    title: 'Structured health record',
    body: 'Patient demographics, problems, medications, and allergies recorded in a structured electronic format — kept current by eVitals.',
  },
  {
    iconColor: 'amber',
    iconPath: <><rect x="5" y="4" width="14" height="17" rx="2" /><rect x="9" y="2.5" width="6" height="3.5" rx="1" /><path d="M8.5 11h7M8.5 15h5" /></>,
    title: 'Comprehensive care plan',
    body: 'A patient-centered electronic plan: problem list, goals, planned interventions, medication management, and periodic review.',
  },
  {
    iconColor: 'rose',
    iconPath: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    title: '24/7 access & continuity',
    body: 'Around-the-clock access for urgent needs and a designated care team member the patient can reach — supported by secure messaging and scheduling.',
  },
  {
    iconColor: 'emerald',
    iconPath: <path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 6 4.5 4.5 0 0 0 2 8.5C2 10.7 3.5 12.5 5 14l7 7z" />,
    title: 'Comprehensive care management',
    body: 'Assess medical, functional, and psychosocial needs, ensure preventive services, and oversee medication self-management between visits.',
  },
  {
    iconColor: 'brand',
    iconPath: <><path d="M5 20V9a4 4 0 0 1 4-4h7" /><path d="M13 2l3.5 3L13 8" /><circle cx="5" cy="20" r="1.6" /></>,
    title: 'Manage care transitions',
    body: 'Coordinate referrals and follow-up after ED visits or discharges, and exchange continuity-of-care documents with other providers.',
  },
  {
    iconColor: 'amber',
    iconPath: <><path d="M9 15l6-6" /><path d="M11 6l1-1a4 4 0 0 1 6 6l-2 2" /><path d="M13 18l-1 1a4 4 0 0 1-6-6l2-2" /></>,
    title: 'Coordinate & share',
    body: 'Share patient information promptly within and outside the practice — captured once in a shared, audit-ready timeline.',
  },
];

const monthlySteps = [
  { n: '01', t: 'Initiating visit', b: 'Required only for new patients or those not seen in the past year — completed during a comprehensive E/M visit, Annual Wellness Visit, or IPPE. It\'s separately billable.' },
  { n: '02', t: 'Patient consent', b: 'Obtain and document verbal or written consent — covering cost-sharing, that only one practitioner bills per month, and the right to stop anytime.' },
  { n: '03', t: 'Build the care plan', b: 'Establish a patient-centered electronic care plan and share it with the patient, caregiver, and care team.' },
  { n: '04', t: 'Deliver & log care', b: 'Provide care coordination between visits and log the qualifying time — at least 20 minutes of clinical-staff time for the month.' },
  { n: '05', t: 'Document & bill', b: 'Submit the correct CPT code(s) for the time and complexity delivered that calendar month, with audit-ready documentation behind every minute.' },
];

const cptCodes = [
  { code: '99490', desc: 'CCM — first 20 minutes', sub: 'Clinical staff time directed by a physician/QHP; first 20 minutes.', freq: 'Monthly', avg: '$60–62', tag: '' },
  { code: '99439', desc: 'CCM — each additional 20 minutes', sub: 'Add-on to 99490 for each additional 20 minutes (up to 2 units).', freq: 'Monthly (add-on)', avg: '$45–48', tag: 'Add-on' },
  { code: '99491', desc: 'CCM by physician/QHP', sub: '30 minutes provided personally by the physician or QHP.', freq: 'Monthly', avg: '$82–86', tag: '' },
  { code: '99437', desc: 'CCM by physician/QHP — each additional 30 minutes', sub: 'Add-on to 99491 for each additional 30 minutes of physician/QHP time.', freq: 'Monthly (add-on)', avg: '$58–60', tag: 'Add-on' },
  { code: '99487', desc: 'Complex CCM — 60 minutes', sub: 'Complex CCM requiring moderate/high-complexity decision making.', freq: 'Monthly', avg: '$130–134', tag: '' },
  { code: '99489', desc: 'Complex CCM — each additional 30 minutes', sub: 'Add-on to 99487 for each additional 30 minutes.', freq: 'Monthly (add-on)', avg: '$70–72', tag: 'Add-on' },
];

const ccmFaqs = [
  {
    q: 'What is Chronic Care Management (CCM)?',
    a: 'CCM is a Medicare-paid service for managing a patient\'s two or more chronic conditions expected to last at least 12 months (or until death). It covers the largely non-face-to-face care coordination patients need between visits — maintaining a care plan, managing medications, and coordinating with other providers. Medicare has paid for CCM separately under the Physician Fee Schedule since 2015.',
  },
  {
    q: 'Which patients are eligible for CCM?',
    a: 'Patients with two or more chronic conditions expected to last at least 12 months (or until death) that place them at significant risk of death, acute exacerbation or decompensation, or functional decline. About two in three Medicare beneficiaries have two or more chronic conditions, so a large share of a typical panel may qualify.',
  },
  {
    q: 'Who can bill for CCM?',
    a: 'Physicians (MD/DO) and certain non-physician practitioners — nurse practitioners, physician assistants, clinical nurse specialists, and certified nurse-midwives. RHCs, FQHCs, and hospitals (including critical access hospitals) may also bill. Only one practitioner can bill CCM for a given patient in a calendar month.',
  },
  {
    q: 'Is an initiating visit required before starting CCM?',
    a: 'Only for new patients, or patients not seen by the billing practitioner within the previous year. It must be a comprehensive E/M visit, Annual Wellness Visit (AWV), or Initial Preventive Physical Exam (IPPE), and CCM must actually be discussed at that visit.',
  },
  {
    q: 'Is patient consent required, and can it be verbal?',
    a: 'Yes — consent is required before billing, and it may be verbal or written. Inform the patient that cost-sharing may apply, that only one practitioner can bill CCM per month, and that they can stop at any time, then document it.',
  },
  {
    q: "What's the difference between non-complex and complex CCM?",
    a: 'Non-complex CCM (99490, with add-on 99439) covers routine care coordination starting at 20 minutes of clinical-staff time per month. Complex CCM (99487, with add-on 99489) requires at least 60 minutes of clinical-staff time and moderate-to-high-complexity medical decision-making by the billing practitioner. You can\'t bill both for the same patient in the same month.',
  },
  {
    q: 'Can RPM and CCM be billed in the same month?',
    a: 'Yes. For an eligible patient, remote patient monitoring can be billed in the same month as CCM, as long as the time counted toward each service is distinct. e-Vitals tracks each program separately so the documentation holds up.',
  },
  {
    q: 'What services can\'t be billed in the same month as CCM?',
    a: 'CCM can\'t be reported with home-health supervision (G0181), hospice care supervision (G0182), or certain ESRD services (90951–90970). Non-complex and complex CCM are mutually exclusive in a given month, and CCM time can\'t be double-counted toward any other billed code.',
  },
];

const iconColorMap: Record<string, string> = {
  emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600',
  amber: 'bg-amber-50 text-amber-600 group-hover:bg-amber-500',
  rose: 'bg-rose-50 text-rose-500 group-hover:bg-rose-500',
  brand: 'bg-brand/10 text-brand group-hover:bg-brand',
};

export default function CCMPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand/5 to-white">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-16">
          <nav className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand">Home</Link>
            {' / '}
            <span className="text-plum">Chronic Care Management</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.88fr]">
            <div className="max-w-3xl animate-[riseIn_.7s_cubic-bezier(.2,.7,.2,1)_both]">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
                <span className="h-px w-6 bg-brand" />Services · CCM
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl text-plum">
                Chronic Care Management, built to pair with RPM.
              </h1>
              <p className="mt-5 text-lg text-slate-600">
                Reimbursable, largely non-face-to-face care coordination for patients with two or more chronic conditions — billed under Medicare's Physician Fee Schedule and running
                right alongside your RPM program, in the same dashboard. No extra device needed, no separate workflow. Just documented coordination time that pays for itself while keeping
                your highest-risk patients supported between every visit.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/demo" className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-dark">
                  Book a demo <ArrowIcon />
                </Link>
                <a href="#ccm-codes" className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-plum ring-1 ring-slate-300 hover:ring-slate-400">
                  See CCM codes
                </a>
              </div>
            </div>
            <div className="ccm-monitor-hero animate-[riseIn_.85s_cubic-bezier(.2,.7,.2,1)_.12s_both]">
              <CCMMonitor />
            </div>
          </div>
        </div>
      </section>

      {/* What is CCM */}
      <section className="mx-auto w-full px-6 py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
              <span className="h-px w-6 bg-brand" />Overview
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">What is CCM?</h2>
            <p className="mt-4 text-lg text-slate-600">
              CCM is the ongoing coordination and support that patients with multiple chronic conditions need between office visits. 
              It goes beyond the appointment — maintaining personalized care plans, reconciling medications, managing care transitions,
              and keeping patients connected to their care team day to day.
              Unlike RPM, which is driven by device readings, CCM is driven by documented care-coordination time. 
              That means no device is required — and both RPM and CCM can run simultaneously for the same eligible patient, maximizing the quality of care they receive.
              Medicare has recognized CCM as a reimbursable service under the Physician Fee Schedule since 2015, making it a long-established,
              financially sustainable model for practices committed to proactive, continuous care.
            </p>
            <p className="mt-4 text-slate-600">
              Unlike RPM, which is driven by device readings, CCM is driven by documented care-coordination time — so it
              needs no device, and both programs can run for the same eligible patient at once.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-brand/10 px-5 py-3 ring-1 ring-brand/15">
              <span className="text-3xl font-extrabold text-brand">2 in 3</span>
              <span className="text-sm text-slate-600">
                Medicare beneficiaries have two or more chronic conditions
                <span className="block text-xs text-slate-400">Source: CMS</span>
              </span>
            </div>
          </div>

          {/* SVG Care Coordination Diagram */}
          <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200">
            <svg viewBox="0 0 480 400" className="h-auto w-full" role="img" aria-label="CCM care coordination around the patient">
              <g stroke="#D8CBBE" strokeWidth="2">
                <line x1="240" y1="200" x2="240" y2="70" />
                <line x1="240" y1="200" x2="370" y2="160" />
                <line x1="240" y1="200" x2="320" y2="310" />
                <line x1="240" y1="200" x2="160" y2="310" />
                <line x1="240" y1="200" x2="110" y2="160" />
              </g>
              <circle cx="240" cy="200" r="64" fill="#7A1F3D" />
              <text x="240" y="190" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="800" fontFamily="Plus Jakarta Sans, sans-serif">Patient</text>
              <text x="240" y="210" textAnchor="middle" fill="#F5EFE6" fontSize="11" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">2+ chronic</text>
              <text x="240" y="225" textAnchor="middle" fill="#F5EFE6" fontSize="11" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">conditions</text>
              <g fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="600" fill="#1F1F1F" textAnchor="middle">
                <circle cx="240" cy="70" r="30" fill="#ffffff" stroke="#7A1F3D" strokeWidth="2" />
                <text x="240" y="26">Care plan</text>
                <circle cx="370" cy="160" r="30" fill="#ffffff" stroke="#7A1F3D" strokeWidth="2" />
                <text x="370" y="118">24/7 access</text>
                <circle cx="320" cy="310" r="30" fill="#ffffff" stroke="#7A1F3D" strokeWidth="2" />
                <text x="320" y="356">Coordinate</text>
                <circle cx="160" cy="310" r="30" fill="#ffffff" stroke="#7A1F3D" strokeWidth="2" />
                <text x="160" y="356">Health record</text>
                <circle cx="110" cy="160" r="30" fill="#ffffff" stroke="#7A1F3D" strokeWidth="2" />
                <text x="110" y="118">Medications</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-slate-50/70 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
                <span className="h-px w-6 bg-brand" />Eligibility
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">Who qualifies for CCM</h2>
              <ul className="mt-6 space-y-3">
                {eligibilityItems.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-600">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-plum">Example chronic conditions</h3>
              <p className="mt-2 text-sm text-slate-500">
                Not an exhaustive list — any two or more qualifying chronic conditions can make a patient eligible.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {conditions.map((c) => (
                  <span key={c} className="rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-plum ring-1 ring-slate-200">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of service */}
      <section className="mx-auto w-full px-6 py-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
            <span className="h-px w-6 bg-brand" />Scope of service
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">What CCM includes</h2>
          <p className="mt-3 text-lg text-slate-600">
            CMS defines the core elements of a compliant CCM program. eVitals operationalizes every one of them.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((card) => (
            <div key={card.title} className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition group-hover:text-white ${iconColorMap[card.iconColor] ?? 'bg-brand/10 text-brand'}`}>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {card.iconPath}
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-plum">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Monthly workflow */}
      <section className="bg-slate-50/70 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
              <span className="h-px w-6 bg-brand" />How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">How CCM works each month</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            {monthlySteps.map((s) => (
              <div key={s.n}>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand font-bold text-brand">{s.n}</div>
                <h3 className="mt-4 font-semibold text-plum">{s.t}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CPT Codes */}
      <section id="ccm-codes" className="mx-auto w-full px-6 py-16">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
            <span className="h-px w-6 bg-brand" />Billing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">CCM CPT codes</h2>
          <p className="mt-3 text-lg text-slate-600">
            Billed on documented monthly time — no device required. Code by who delivers the care and how long it takes.
          </p>
        </div>
        <div className="mt-8 overflow-x-auto rounded-2xl ring-1 ring-slate-200">
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
                      <span className="ml-2 rounded-md bg-plum/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-plum">
                        {c.tag}
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4">
                    <div className="font-semibold text-plum">{c.desc}</div>
                    <div className="mt-0.5 text-sm text-slate-500">{c.sub}</div>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-slate-600">{c.freq}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-plum">{c.avg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: 'Complex vs. non-complex',
              body: "Complex CCM (99487/99489) needs 60+ minutes and moderate-to-high-complexity decision-making. You can't bill complex and non-complex for the same patient in one month.",
            },
            {
              title: 'Who can bill',
              body: 'Physicians, NPs, PAs, clinical nurse specialists, and certified nurse-midwives — plus RHCs, FQHCs, and hospitals. Only one practitioner bills per patient per month.',
            },
            {
              title: 'Supervision',
              body: "Clinical-staff codes are furnished under general supervision — the billing practitioner directs the care but needn't be physically present.",
            },
          ].map((n) => (
            <div key={n.title} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <h3 className="font-semibold text-plum">{n.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{n.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-400">
          Approximate national averages; actual payment varies by payer, locality, and program mix. Not billing advice — verify against the current Medicare Physician Fee Schedule. CPT© is a registered trademark of the AMA.
        </p>
      </section>

      {/* Concurrent billing */}
      <section className="bg-slate-50/70 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
              <span className="h-px w-6 bg-brand" />Concurrent billing
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl text-plum">
              Billing it right — what runs together, what doesn&apos;t
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              CCM can be combined with several services — and is mutually exclusive with others. eVitals tracks time per
              program so distinct minutes stay distinct.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 ring-1 ring-slate-200">
              <h3 className="flex items-center gap-2 text-lg font-bold text-plum"><CheckIcon /> Can run alongside CCM</h3>
              <ul className="mt-4 space-y-3">
                {[
                  'Remote patient monitoring (RPM) — can be billed in the same month as CCM when the time counted toward each is distinct.',
                  'Transitional care management (TCM) — can be billed concurrently with CCM when medically necessary; the same minutes can\'t count toward both.',
                  'The initiating visit — a comprehensive E/M visit, AWV, or IPPE is separately billable and isn\'t part of CCM time.',
                  'Principal care management (PCM) — allowed when a different practitioner manages a different condition (not the same practitioner for the same patient in the same month).',
                ].map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-slate-600"><CheckIcon /><span>{r}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-7 ring-1 ring-slate-200">
              <h3 className="flex items-center gap-2 text-lg font-bold text-plum"><XIcon /> Can&apos;t be billed together</h3>
              <ul className="mt-4 space-y-3">
                {[
                  'Non-complex and complex CCM together — 99490 / 99439 can\'t be reported in the same month as 99491 / 99437 or 99487 / 99489.',
                  'Home-health supervision (G0181), hospice care supervision (G0182), or certain ESRD services (90951–90970).',
                  'Any time already counted toward another billed code — CCM minutes can never be counted twice.',
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
              <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Bill RPM and CCM together — compliantly.</h3>
              <p className="mt-3 text-white/75">
                For an eligible patient, RPM and CCM may both be billed in the same calendar month as long as the time
                counted toward each is distinct. eVitals tracks each program separately so the documentation holds up to audit.
              </p>
              <Link href="/ReimbursementCalculator" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-plum hover:bg-slate-100">
                Estimate combined revenue <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="rpm-faq-section ccm-faq-section">
        <div className="rpm-faq-panel">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#FAF8F4]/82">
              <span className="h-px w-6 bg-[#FAF8F4]/70" />FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#FAF8F4] sm:text-4xl">Chronic Care Management FAQs</h2>
            <p className="mt-3 text-[#FAF8F4]/72">
              Answers based on current CMS guidance (MLN909188) and the CMS practitioner billing FAQ. This is general
              information, not billing advice — confirm details against current CMS and payer rules.
            </p>
          </div>
          <div className="mt-8 grid gap-3">
            {ccmFaqs.map((faq, i) => (
              <div key={i} className="ccm-faq-card rounded-2xl bg-[#FAF8F4] px-6 py-5 shadow-lg shadow-[#1B1630]/18 ring-1 ring-[#D8CBBE]/80">
                <button
                  className="flex w-full cursor-pointer items-center justify-between gap-4 text-left font-semibold text-plum"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <svg
                    className={`h-5 w-5 flex-none text-brand transition ${openFaq === i ? 'rotate-45' : ''}`}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  >
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
