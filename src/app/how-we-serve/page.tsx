import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Who We Serve — RPM & CCM for Any Practice | eVitals',
  description:
    'eVitals supports practices of any specialty caring for patients with chronic conditions — primary care, cardiology, endocrinology, and beyond — with turn-key RPM and CCM.',
};

const specialties = [
  {
    href: '/how-we-serve/primary-care',
    title: 'Primary Care',
    desc: 'Manage hypertension, diabetes, and more across your whole panel — without adding to your visit load.',
  },
  {
    href: '/how-we-serve/cardiology',
    title: 'Cardiology',
    desc: 'Daily BP, heart-rate, and weight data to catch decompensation early and cut readmissions.',
  },
  {
    href: '/how-we-serve/endocrinology',
    title: 'Endocrinology',
    desc: 'Connected glucose and weight trends for tighter glycemic control between visits.',
  },
  {
    href: '/how-we-serve/pulmonology',
    title: 'Pulmonology',
    desc: 'Remote SpO₂ and pulse monitoring to intervene before an exacerbation.',
  },
  {
    href: '/how-we-serve/nephrology',
    title: 'Nephrology',
    desc: 'Continuous weight and blood-pressure tracking for CKD and fluid management.',
  },
  {
    href: '/how-we-serve/internal-medicine',
    title: 'Internal Medicine',
    desc: 'One platform to monitor and coordinate complex, multi-condition patients.',
  },
];

const ArrowIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function WhoWeServePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-16">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand">Home</Link>
          {' / '}
          <span className="text-plum">Who We Serve</span>
        </nav>

        <div className="max-w-3xl animate-[riseIn_.7s_cubic-bezier(.2,.7,.2,1)_both]">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
            <span className="h-px w-6 bg-brand" />
            Who we serve
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl text-plum">
            Built for your practice — whatever your specialty.
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            If you care for patients with chronic conditions, eVitals fits your practice. The specialties below are a few we
            commonly support — it&apos;s far from an exhaustive list.
          </p>
        </div>

        {/* Specialty cards grid */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {specialties.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-2xl bg-white p-7 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-plum">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                See how we help <ArrowIcon />
              </span>
            </Link>
          ))}

          {/* Dark CTA card */}
          <Link
            href="/demo"
            className="group flex flex-col rounded-2xl bg-plum p-7 text-white transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold">Don&apos;t see your specialty?</h3>
            <p className="mt-2 text-sm text-white/75">
              eVitals supports any practice caring for patients with chronic conditions. If remote monitoring or care
              coordination fits your patients, it fits your practice.
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-tint/90">
              Let&apos;s talk <ArrowIcon />
            </span>
          </Link>
        </div>
      </section>

      {/* Bottom banner */}
      <section className="bg-slate-50/70 border-y border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl text-plum">Empowering every practice with smart monitoring</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Whether you run a small clinic or a large multi-specialty group, eVitals provides an end-to-end solution —
            HIPAA-compliant device logistics, automated patient engagement, and comprehensive reimbursement support.
          </p>
          <Link
            href="/demo"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Get started <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
