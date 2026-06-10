import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Primary Care — RPM & CCM | eVitals',
  description:
    'How eVitals remote patient monitoring and chronic care management benefits primary care practices and their patients with chronic conditions.',
};

const patientBenefits = [
  'Earlier detection of issues like rising blood pressure or weight gain between visits',
  'Fewer urgent visits and hospitalizations through proactive outreach',
  'Cellular devices that work out of the box — no apps, Wi-Fi, or setup',
  'More consistent contact and support from their care team',
];

const practiceBenefits = [
  'Recurring RPM and CCM reimbursement across a large panel',
  'A population view that surfaces the patients who need attention first',
  'Less manual follow-up with automated alerts and time tracking',
  'Stronger quality metrics, adherence, and patient retention',
];

const CheckIcon = () => (
  <svg className="h-5 w-5 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function PrimaryCarePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-16 md:pb-16 md:pt-8 animate-rise">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand">Home</Link>
          {' / '}
          <Link href="/who-we-serve" className="hover:text-brand">Who We Serve</Link>
          {' / '}
          <span className="text-plum">Primary Care</span>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-3xl animate-[riseIn_.7s_cubic-bezier(.2,.7,.2,1)_both]">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
              <span className="h-px w-6 bg-brand" />
              Who we serve · Primary Care
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl text-plum">
              Remote care for primary care practices.
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Primary care teams manage the widest range of chronic conditions. eVitals helps you monitor patients and
              coordinate care across your entire panel between visits — proactively, and without more time in the exam room.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-dark"
              >
                Request a demo <ArrowIcon />
              </Link>
              <Link
                href="/ReimbursementCalculator"
                className="inline-flex items-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-plum ring-1 ring-slate-300 hover:ring-slate-400"
              >
                See reimbursement
              </Link>
            </div>
          </div>
          <div className="specialty-hero-image-panel" aria-hidden="true">
            <Image src="/assets/specialty-hero-primary-care-new.png" alt="" fill sizes="(min-width: 1024px) 42vw, 100vw" className="specialty-hero-image" priority />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50/70 border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Patient benefits */}
            <div className="rounded-2xl bg-white p-7 ring-1 ring-slate-200">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 6 4.5 4.5 0 0 0 2 8.5C2 10.7 3.5 12.5 5 14l7 7z" />
                  </svg>
                </span>
                <h2 className="text-xl font-bold text-plum">Benefits to your patients</h2>
              </div>
              <ul className="mt-4 space-y-3">
                {patientBenefits.map((b) => (
                  <li key={b} className="flex gap-3 text-slate-600">
                    <CheckIcon />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice benefits */}
            <div className="rounded-2xl bg-white p-7 ring-1 ring-slate-200">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand/10 text-brand">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 17l6-6 4 4 8-8" />
                    <path d="M15 7h6v6" />
                  </svg>
                </span>
                <h2 className="text-xl font-bold text-plum">Benefits to your practice</h2>
              </div>
              <ul className="mt-4 space-y-3">
                {practiceBenefits.map((b) => (
                  <li key={b} className="flex gap-3 text-slate-600">
                    <CheckIcon />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-sm text-plum-500">
            <span className="font-semibold text-plum">Conditions we commonly support:</span>{' '}
            Hypertension, type 2 diabetes, obesity, and other common chronic conditions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-brand/5 px-8 py-14 text-center ring-1 ring-brand/15 sm:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-plum sm:text-4xl">
            Bring eVitals to your primary care practice.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Tell us about your patients and we&apos;ll tailor a demo to your workflows and payers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Book a demo <ArrowIcon />
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
    </>
  );
}
