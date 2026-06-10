"use client";

import Image from "next/image";
// import Link from "next/link";
import CTASection from "../../../components/home/CTASection";
import { useEffect, useState } from "react";
import {
  DollarSign,
  Shield,
  Users,
  FileText,
  Lightbulb,
  Zap,
  CheckCircle,
  RotateCcw,
} from "lucide-react";

const ReimbursementBilling = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/eVitals-bg2.png"
            alt="Reimbursement & Billing"
            fill
            className="object-cover blur-sm"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-[#2E1065]/70" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div
            className={`max-w-4xl transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="inline-block bg-[#B187E8]/70 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 shadow-lg animate-pulse">
              Reimbursement & Billing
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white text-shadow-lg">
              Maximizing Your Revenue,{" "}
              <span className="text-[#B187E8] animate-pulse">
                Minimizing Your Hassle
              </span>
            </h1>
            <p className="text-xl md:text-1xl mb-8 text-white/90 max-w-4xl mx-auto text-shadow-lg">
              In todays healthcare landscape, accurate and efficient
              reimbursement is critical for sustaining care quality and business
              growth. Our Reimbursement & Billing solutions are designed to help
              providers, clinics, and hospitals seamlessly navigate complex
              payer requirements while ensuring maximum reimbursement for RPM,
              CCM, and other eligible care programs.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E1065] mb-6">
              Why It Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the critical importance of proper reimbursement and
              billing in todays healthcare landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Avoid Revenue Leakage",
                desc: "Many practices lose thousands each year due to coding errors and incomplete documentation.",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: Shield,
                title: "Stay Compliant",
                desc: "Payer rules and CMS guidelines change frequently — we keep you up-to-date.",
                color: "from-blue-500 to-indigo-600",
              },
              {
                icon: Users,
                title: "Focus on Patients, Not Paperwork",
                desc: "Spend your time delivering care, not chasing claims.",
                color: "from-purple-500 to-violet-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-purple-100 group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2E1065] mb-4 text-center group-hover:text-[#B187E8] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E1065] mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive billing and reimbursement solutions designed to
              maximize your revenue and minimize your workload
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                number: "01",
                title: "Comprehensive Billing Support",
                desc: "From claim submission to payment posting, our billing team ensures every eligible service is accurately documented, coded, and billed — whether for Medicare, Medicaid, or commercial payers.",
                icon: FileText,
                gradient: "from-blue-500 to-cyan-600",
              },
              {
                number: "02",
                title: "RPM-Specific Reimbursement Expertise",
                desc: "We understand the CPT codes that drive RPM revenue — such as 99453, 99454, 99457, and 99458 — and ensure you capture all qualifying billable events.",
                icon: Lightbulb,
                gradient: "from-purple-500 to-pink-600",
              },
              {
                number: "03",
                title: "Real-Time Eligibility Checks",
                desc: "Our system verifies patient insurance details instantly, preventing denials due to coverage issues.",
                icon: Zap,
                gradient: "from-green-500 to-emerald-600",
              },
              {
                number: "04",
                title: "Audit-Ready Documentation",
                desc: "All patient activity data, device usage logs, and care notes are stored in compliance with HIPAA and CMS audit requirements.",
                icon: CheckCircle,
                gradient: "from-orange-500 to-red-600",
              },
              {
                number: "05",
                title: "Denial Management & Appeals",
                desc: "If a claim is denied, we act fast to identify the cause, correct it, and resubmit — reducing revenue loss and improving cash flow.",
                icon: RotateCcw,
                gradient: "from-indigo-500 to-purple-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="flex flex-col lg:flex-row items-center p-8">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 mb-6 lg:mb-0 lg:mr-8 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
                  >
                    {item.number}
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-3">
                      <item.icon className="w-6 h-6 mr-3 text-[#B187E8]" />
                      <h3 className="text-2xl font-bold text-[#2E1065] group-hover:text-[#B187E8] transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E1065] mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures maximum efficiency and accuracy in
              your billing workflow
            </p>
          </div>

          <div
            className={`relative min-h-[500px] rounded-2xl overflow-hidden transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <Image
              src="/assets/eVitals-works.png"
              alt="eVitals RPM Dashboard"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E1065] mb-6">
              Key Benefits
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📈",
                title: "Increase Revenue by 20–40%",
                desc: "with optimized coding and reduced denials.",
              },
              {
                icon: "⚡",
                title: "Faster Payments",
                desc: "through automated claim submission and payer follow-ups.",
              },
              {
                icon: "🛡️",
                title: "Peace of Mind",
                desc: "knowing every claim meets CMS and payer requirements.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 transition-all duration-1000 delay-${
                  (index + 1) * 200
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="text-4xl mb-4 text-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[#2E1065] mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-center">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Programs Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E1065] mb-6">
              Supported Programs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🏥",
                title: "Remote Patient Monitoring (RPM)",
                desc: "Comprehensive billing for all RPM services and devices.",
              },
              {
                icon: "🩺",
                title: "Chronic Care Management (CCM)",
                desc: "Monthly care coordination and management services.",
              },
              {
                icon: "🔄",
                title: "Transitional Care Management (TCM)",
                desc: "Post-discharge care coordination and follow-up.",
              },
              {
                icon: "🧠",
                title: "Behavioral Health Integration (BHI)",
                desc: "Mental health services integrated with primary care.",
              },
            ].map((program, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100 text-center transition-all duration-1000 delay-${
                  (index + 1) * 200
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="text-3xl mb-4">{program.icon}</div>
                <h3 className="text-lg font-bold text-[#2E1065] mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-700 text-sm">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tip Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className={`bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl shadow-xl border border-purple-200 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-[#2E1065] mb-4">
                Pro Tip for Providers:
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                If you are already offering RPM but not capturing all eligible
                codes, you could be leaving thousands in annual revenue per
                patient on the table. Our billing service ensures you get every
                dollar you deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
};

export default ReimbursementBilling;
