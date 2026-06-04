"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-24 pb-20">
      {/* Soft Animated Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand/10 rounded-full blur-[120px] mix-blend-multiply animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            className="text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-tint border border-brand/20 text-brand font-medium text-sm mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              Next-Gen Medical Platform
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-slate-900 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight"
            >
              Elevating Patient <br />
              Care with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent">Advanced RPM</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed font-light max-w-xl"
            >
              eVitals delivers comprehensive Remote Patient Monitoring to US healthcare facilities. 
              Enhance outcomes, maximize reimbursement, and optimize practice efficiency with zero friction.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/for-organizations"
                className="bg-brand hover:bg-brand-dark text-white text-lg font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-brand/30 transition-all duration-300 inline-flex items-center justify-center gap-2 group hover:-translate-y-1"
              >
                Schedule a FREE demo 
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              
              <Link
                href="/how-it-works"
                className="bg-white text-slate-700 hover:text-brand border border-slate-200 text-lg font-semibold px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 inline-flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                See how it works
              </Link>
            </motion.div>
            
            {/* Social Proof */}
            <motion.div variants={itemVariants} className="mt-12 flex items-center gap-4 text-sm font-medium text-slate-500">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-200 shadow-sm z-[${10-i}] overflow-hidden`}>
                     <Image src={`/assets/testimonials/a${i}.jpg`} alt="User" width={40} height={40} className="object-cover" />
                  </div>
                ))}
              </div>
              <p>Trusted by <span className="text-slate-900 font-bold">500+</span> healthcare providers</p>
            </motion.div>

          </motion.div>

          {/* Right Column: Floating Graphics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative lg:h-[600px] flex justify-center items-center"
          >
            {/* Main Mockup */}
            <div className="relative w-full max-w-lg aspect-square floaty z-10">
              <Image 
                src="/assets/hero_dashboard.png" 
                alt="Modern Medical Dashboard" 
                fill 
                className="object-contain drop-shadow-2xl rounded-3xl"
                priority
              />
            </div>

            {/* Floating metric chips */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute top-10 -left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 z-20 flex items-center gap-4 floaty"
              style={{ animationDelay: '1s' }}
            >
              <div className="w-12 h-12 rounded-full bg-brand-tint flex items-center justify-center text-brand">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Reimbursement</p>
                <p className="text-xl font-bold text-slate-900">+45%</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute bottom-10 -right-5 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 z-20 flex items-center gap-4 floaty"
              style={{ animationDelay: '2s' }}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">FDA-Cleared</p>
                <p className="text-xl font-bold text-slate-900">Devices</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;


