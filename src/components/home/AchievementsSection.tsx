"use client";
import React, { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix: string;
  start: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix,
  start,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);

    return () => {};
  }, [value, start]);

  return (
    <span>
      {count.toLocaleString() || 0}
      {suffix}
    </span>
  );
};

interface Step {
  step: string;
  title: string;
  desc: string;
}

const StatsGrid: React.FC = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const steps: Step[] = [
    {
      step: "Step 1",
      title: "Enroll Patients",
      desc: "Our team assists with onboarding and obtaining patient consent.",
    },
    {
      step: "Step 2",
      title: "Monitor in Real-Time",
      desc: "Vitals automatically upload to the eVitals dashboard without patient intervention.",
    },
    {
      step: "Step 3",
      title: "Intervene Early",
      desc: "Clinicians receive alerts for readings outside set thresholds.",
    },
    {
      step: "Step 4",
      title: "Get Reimbursed",
      desc: "Automated reports help you bill CPT 99453, 99454, 99457, and 99458 accurately.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-white py-5 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center px-4 py-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          A high-quality care experience—anywhere, anytime
        </h1>
        <p className="text-base md:text-lg text-slate-700 mb-4 leading-relaxed">
          It started with a simple yet revolutionary idea. That everyone should
          have access to the best healthcare anywhere in the world on their
          terms. That includes you.
        </p>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand/20 transition-all duration-300 group"
              >
                <div className="text-brand font-semibold mb-2 group-hover:text-brand-dark transition-colors">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        ref={ref}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        {/* COLUMN 1 */}
        <div className="flex flex-col space-y-6 h-full">
          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300">
            <h3 className="text-brand text-4xl font-bold mb-4">
              <AnimatedCounter value={88} suffix="%" start={inView} />
            </h3>
            <p className="text-base text-slate-700 leading-relaxed">
              of patients stick to care plans with eVitals continuous
              monitoring, improving clinical outcomes.
            </p>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col space-y-6 h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[150px]">
            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center hover:shadow-lg transition-all duration-300">
              <h3 className="text-accent text-3xl font-bold mb-2">
                <AnimatedCounter value={100} suffix="k+" start={inView} />
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Patients adhere better to care plans with continuous monitoring.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100 flex justify-center flex-col hover:shadow-lg transition-all duration-300">
              <h3 className="text-brand text-3xl font-bold mb-2">
                <AnimatedCounter value={5} suffix="+" start={inView} />
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Years of remote patient monitoring services.
              </p>
            </div>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col space-y-6 h-full">
          <div className="bg-brand text-white p-8 rounded-2xl shadow-lg text-center flex flex-col justify-center min-h-[150px] transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-lg leading-relaxed mb-1">
              Top-Notch{" "}
              <span className="font-extrabold text-teal-100 tracking-wide">
                FDA-APPROVED
              </span>{" "}
              <br />
              vital monitoring devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
