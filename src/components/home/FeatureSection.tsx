"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import RpmOverviewSection from "./Crisis";
import MedicalIllustration from "./MedicalIllustration";

const FeatureSection = () => {
  const scrollVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] as const }
    }
  };

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden pb-32">
      {/* Decorative Background element */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      <div className="container-lg mx-auto px-4 relative z-10">
        {/* Heading Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariants}
          className="text-center mb-24 max-w-4xl mx-auto pt-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Superior <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent">patient management</span> is continuous.
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            The HIPAA-compliant eVitals Remote Patient Monitoring (RPM) platform empowers US providers to streamline chronic care, secure Medicare reimbursement, and deliver better patient outcomes beyond the clinic.
          </p>
        </motion.div>
        
        <RpmOverviewSection />

        {/* Feature Highlights with Generated Image */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="w-full aspect-square relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100 floaty ring-1 ring-highlight/50">
              <MedicalIllustration className="h-full w-full" />
            </div>
            {/* Floating decoration */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center floaty" style={{ animationDelay: '1s' }}>
              <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="group">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">Smart RPM Dashboard</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Our platform delivers real-time monitoring, automated alerts, and an intuitive interface designed for both clinicians and patients.</p>
            </div>
            <div className="group">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">FDA-Approved Devices</h3>
              <p className="text-slate-600 text-lg leading-relaxed">We provide top-tier, FDA-approved devices for accurate vitals tracking - from blood pressure and glucose monitors to cellular weight scales.</p>
            </div>
            <div className="group">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">Reimbursement Support</h3>
              <p className="text-slate-600 text-lg leading-relaxed">We handle the complexity of RPM billing so your team can focus on care, covering Medicare and most private payers.</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-lg mx-auto px-4 pt-32">
        {/* Specialties We Serve */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Specialties We Serve
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
            Delivering condition-specific monitoring and actionable insights across multiple specialties.
          </p>
          <Link
            href="/for-organizations"
            className="inline-flex items-center text-brand font-bold px-8 py-4 rounded-full border border-brand hover:bg-brand hover:text-white transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            Learn More <span className="ml-2">→</span>
          </Link>
        </motion.div>

        <div className="relative overflow-hidden mt-12">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

          <div className="marquee">
            <ul className="shrink-0 flex gap-6 md:gap-8 py-4 pr-6">
              {[
                "Family & Internal Medicine",
                "Cardiology",
                "Nephrology",
                "Endocrinology",
                "Pulmonology",
                "Geriatrics",
                "Rural Health Clinics",
              ].map((item) => (
                <li
                  key={item}
                  className="shrink-0 rounded-2xl px-8 py-4 bg-white border border-slate-100 shadow-md font-bold text-slate-700 hover:text-brand hover:border-brand/30 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
            <ul className="shrink-0 flex gap-6 md:gap-8 py-4 pr-6" aria-hidden="true">
              {[
                "Family & Internal Medicine",
                "Cardiology",
                "Nephrology",
                "Endocrinology",
                "Pulmonology",
                "Geriatrics",
                "Rural Health Clinics",
              ].map((item, idx) => (
                <li
                  key={`${item}-${idx}`}
                  className="shrink-0 rounded-2xl px-8 py-4 bg-white border border-slate-100 shadow-md font-bold text-slate-700 hover:text-brand hover:border-brand/30 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <style jsx>{`
            .marquee {
              display: flex;
              width: max-content;
              animation: scrollLeft 35s linear infinite;
            }
            @keyframes scrollLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
