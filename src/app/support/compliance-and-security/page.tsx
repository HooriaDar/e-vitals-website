"use client";

import { ShieldCheck, Lock, Server, FileCheck } from "lucide-react";
import CTASection from "@/components/home/CTASection";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ComplianceSecurity() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/compliance-and-security.avif"
            alt="Compliance & Security"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-[#2E1065]/70" />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div
            className={`max-w-4xl transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Compliance & Security
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              At eVitals, compliance and security are not just features — they are the foundation of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="container mx-auto px-4 max-w-5xl text-center py-24">
        <p className="text-2xl text-gray-600 leading-relaxed">
          Patient data is one of the most valuable and sensitive assets in healthcare. 
          Therfore we ensure our Remote Patient Monitoring (RPM) ecosystem — from devices to software — meets 
          the highest standards of protection, privacy, and regulatory compliance.
        </p>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <ShieldCheck className="w-8 h-8 text-purple-700" />,
            title: "HIPAA Compliance",
            text: "Fully aligned with HIPAA requirements to safeguard PHI, with encryption in transit and at rest."
          },
          {
            icon: <Lock className="w-8 h-8 text-purple-700" />,
            title: "Secure Infrastructure",
            text: "End-to-end AES-256 encryption, role-based access control, and continuous monitoring to prevent threats."
          },
          {
            icon: <Server className="w-8 h-8 text-purple-700" />,
            title: "FHIR-Compliant Data",
            text: "Seamless, secure integration with EHRs following FHIR standards for interoperability."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="group relative bg-white/80 backdrop-blur-lg rounded-2xl border border-purple-100 shadow-lg p-16 text-center transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2"

            style={{
              animation: `fadeInUp 0.6s ease ${i * 0.15}s both`
            }}
          >
            {/* Icon Glow */}
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 shadow-inner group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h3>
            <p className="text-gray-600 text-md leading-relaxed">{item.text}</p>
          </div>
        ))}
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>


      {/* Details Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-full grid md:grid-cols-2 gap-12 items-center px-24 py-16">
          <div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#2E1065] to-[#B187E8] bg-clip-text text-transparent">Regular Audits & Monitoring</h2>

            <p className="text-gray-600 mb-4 text-xl">
              We conduct periodic security audits and compliance checks to stay ahead of threats and ensure readiness.
            </p>
            <ul className="list-disc list-inside text-black space-y-2 text-xl font-semibold">
              <li>End-to-end encryption (AES-256)</li>
              <li>Role-based access control</li>
              <li>Continuous monitoring & intrusion detection</li>
            </ul>
          </div>
          <div className="bg-[#f9f5ff] rounded-xl p-8 shadow-inner">
            <FileCheck className="w-14 h-14 text-[#c092e8] mb-4" />
            <p className="text-gray-700">
              Security and compliance are critical to patient trust, clinical accuracy, and operational reliability. 
              With eVitals, every reading, record, and reimbursement process is backed by uncompromising protection.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
