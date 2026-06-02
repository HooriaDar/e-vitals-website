import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How eVitals RPM Works — 4-Step Workflow | eVitals',
  description:
    'How eVitals remote patient monitoring works: enroll eligible patients, connect cellular devices, monitor and intervene, then bill and reconcile.',
};

const steps = [
  {
    num: 1,
    title: 'Enroll eligible patients',
    body: 'We identify and enroll eligible patients, capture consent, and provision the right devices for their conditions.',
  },
  {
    num: 2,
    title: 'Connect the device',
    body: "Cellular devices sync to the patient chart the moment they're switched on — no Wi-Fi, pairing, or apps.",
  },
  {
    num: 3,
    title: 'Monitor & intervene',
    body: 'Your clinical team reviews prioritized data, documents time, and escalates per your triage protocols.',
  },
  {
    num: 4,
    title: 'Bill & reconcile',
    body: 'A monthly, audit-ready RPM & CCM codes report is generated for clean claim submission.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-16">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand">Home</Link>
          {' / '}
          <span className="text-plum">How it works</span>
        </nav>

        <div className="max-w-3xl animate-[riseIn_.7s_cubic-bezier(.2,.7,.2,1)_both]">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
            <span className="h-px w-6 bg-brand" />
            How it works
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl text-plum">
            From enrolling to billing in four easy steps.
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            A turn-key workflow that gets a compliant program up and running — we handle the heavy lifting.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 space-y-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="flex gap-6 rounded-2xl bg-white p-7 ring-1 ring-slate-200 animate-[riseIn_.7s_cubic-bezier(.2,.7,.2,1)_both]"
            >
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
                {s.num}
              </div>
              <div>
                <h3 className="text-xl font-bold text-plum">{s.title}</h3>
                <p className="mt-1 text-slate-600">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50/70 border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl bg-brand/5 px-8 py-14 text-center ring-1 ring-brand/15 sm:px-12">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-plum sm:text-4xl">
              Launch your program with confidence.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              We handle device logistics, onboarding, and billing setup end to end.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Book a demo{' '}
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
    </>
  );
}
