import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Who We Serve — RPM & CCM for Any Practice | eVitals',
  description:
    'eVitals supports practices of any specialty caring for patients with chronic conditions — primary care, cardiology, endocrinology, and beyond — with turn-key RPM and CCM.',
};

const specialties = [
  {
    href: '/who-we-serve/primary-care',
    title: 'Primary Care',
    desc: 'Manage hypertension, diabetes, and more across your whole panel — without adding to your visit load.',
    image: '/assets/specialty-primary-care.png',
  },
  {
    href: '/who-we-serve/cardiology',
    title: 'Cardiology',
    desc: 'Daily BP, heart-rate, and weight data to catch decompensation early and cut readmissions.',
    image: '/assets/specialty-cardiology.png',
  },
  {
    href: '/who-we-serve/endocrinology',
    title: 'Endocrinology',
    desc: 'Connected glucose and weight trends for tighter glycemic control between visits.',
    image: '/assets/specialty-endocrinology.png',
  },
  {
    href: '/who-we-serve/pulmonology',
    title: 'Pulmonology',
    desc: 'Remote pulse, blood pressure, and weight monitoring to intervene before an exacerbation.',
    image: '/assets/specialty-pulmonology.png',
  },
  {
    href: '/who-we-serve/nephrology',
    title: 'Nephrology',
    desc: 'Continuous weight and blood-pressure tracking for CKD and fluid management.',
    image: '/assets/specialty-nephrology.png',
  },
  {
    href: '/who-we-serve/internal-medicine',
    title: 'Internal Medicine',
    desc: 'One platform to monitor and coordinate complex, multi-condition patients.',
    image: '/assets/specialty-internal-medicine.png',
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
      <section className="who-we-serve-hero relative overflow-hidden bg-gradient-to-b from-brand-tint/40 to-white w-full">
        <div className="rpm-hero-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-16 md:pb-16 md:pt-8 animate-rise">
          <nav className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand">Home</Link>
            {' / '}
            <span className="text-plum">Who We Serve</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
                <span className="h-px w-6 bg-brand" />
                Who we serve
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl text-plum">
                Built for your practice <span className="text-brand">whatever your specialty</span>.
              </h1>
              <p className="mt-5 text-lg text-slate-600">
                If you care for patients with chronic conditions, eVitals fits into your
                existing workflow without friction. The specialties below are just a few 
                we commonly support — whether you're a solo practitioner or a large multi-specialty group,
                if chronic care is part of what you do, we're built for you.
              </p>
            </div>

            <div className="relative hidden lg:block">
              <div className="about-hero-visual who-we-serve-hero-orbit" aria-hidden="true">
                <Image
                  src="/assets/specialty-orbit-static.svg"
                  alt=""
                  fill
                  priority
                  sizes="44vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="who-we-serve-specialties">
        {/* Specialty cards grid */}
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-16 lg:grid-cols-2">
          {specialties.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="specialty-card group"
              data-specialty={s.title.toLowerCase().replaceAll(' ', '-')}
            >
              <div className="specialty-card__image" aria-hidden="true">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="specialty-card__photo"
                />
              </div>
              <div className="specialty-card__copy">
                <h3 className="text-xl font-bold text-plum">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  See how we help <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}

          {/* Dark CTA card */}
          <Link
            href="/demo"
            className="group flex flex-col rounded-2xl bg-plum p-7 text-white transition hover:-translate-y-1 hover:shadow-xl lg:col-span-2"
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
      <section className="who-we-serve-bottom border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center">
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
