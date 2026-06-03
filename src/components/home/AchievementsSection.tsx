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
        <h1 className="text-4xl font-bold text-[#270949] mb-4">
          A high-quality care experience—anywhere, anytime
        </h1>
        <p className="text-base md:text-lg text-black/80 mb-4">
          It started with a simple yet revolutionary idea. That everyone should
          have access to the best healthcare anywhere in the world on their
          terms. That includes you.
        </p>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065]">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className="bg-[#F9F5FF] p-6 rounded-xl border border-purple-100"
              >
                <div className="text-[#B187E8] font-semibold mb-2">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#2E1065] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
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
          <div className="bg-gray-50 p-6 rounded-2xl shadow ">
            <h3 className="text-[#32a852] text-3xl font-bold">
              <AnimatedCounter value={88} suffix="%" start={inView} />
            </h3>
            <p className="text-sm text-gray-800">
              of patients stick to care plans with eVitals continuous
              monitoring, improving clinical outcomes.
            </p>
            {/* <p className="text-sm text-[#270949] underline cursor-pointer mt-1">
              See reviews
            </p> */}
          </div>

          {/* <div className="relative flex-grow rounded-2xl overflow-hidden shadow group min-h-[300px]">
            <Image
              src="/assets/medical-stats.jpg"
              alt="Trustpilot and Speaker"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div> */}
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col space-y-6 h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[150px]">
            <div className="bg-gray-50 p-2 rounded-2xl shadow text-left justify-center flex flex-col">
              <h3 className="text-[#d156bd] text-3xl font-bold">
                <AnimatedCounter value={100} suffix="k+" start={inView} />
              </h3>
              <p className="text-sm text-gray-700">
                Patients adhere better to care plans with continuous monitoring.
              </p>
              {/* <p className="text-xs text-[#270949] underline cursor-pointer mt-1">
                Learn more
              </p> */}
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow text-left flex justify-center flex-col">
              <h3 className="text-[#48c3c7] text-3xl font-bold">
                <AnimatedCounter value={5} suffix="+" start={inView} />
              </h3>
              <p className="text-sm text-gray-700">
                Years of remote patient monitoring services.
              </p>
            </div>
          </div>

          {/* <div className="bg-gray-50 p-2 rounded-2xl shadow flex flex-col md:flex-row items-center  gap-4 min-h-[200px]">
        ?
            <div className="text-center md:text-left">
              <h3 className="text-[#270949] text-2xl font-bold mb-2">
                100 million+
              </h3>
              <p className="text-sm text-gray-700">
                Members served across the U.S. through connected care.
              </p>
            </div>
          </div> */}

          {/* <div className="grid grid-cols-1 gap-4 min-h-[220px]">
            <div className="bg-gray-50 p-6 rounded-2xl shadow flex flex-col justify-center text-left">
              <h3 className="text-[#d156bd] text-4xl font-bold">40k+</h3>
              <p className="text-sm text-gray-700">
                Providers, therapists & coaches
              </p>
            </div>
          </div> */}
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col space-y-6 h-full">
          {/* <div className="relative rounded-2xl overflow-hidden shadow group min-h-[200px]">
            <Image
              src="/assets/video-1.png"
              alt="Therapy session"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div> */}

          <div className="bg-gray-50 p-6 rounded-2xl shadow text-center flex flex-col justify-center min-h-[150px]">
            <p className="text-1xl text-gray-700 leading-tight mb-1">
              Top-Notch{" "}
              <span className="text-[#45a5bf] font-semibold">
                FDA-Approved{" "}
              </span>{" "}
              vital monitoring devices.
            </p>
            {/* <p className="text-xs text-[#270949] underline cursor-pointer">
              See reviews
            </p> */}
          </div>

          {/* <div className="relative bg-gray-50 rounded-2xl shadow overflow-hidden min-h-[265px]">
            <Image
              src="/assets/video-call1.png"
              alt="Remote provider call"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-3xl font-bold">eVitals RPM</h3>
              <p className="text-sm">Stay connected to your patients and elevate the quality of care.</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
