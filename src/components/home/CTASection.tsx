"use client";
import React from 'react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-plum via-plum-2 to-brand-dark py-24">
      <div className="rpm-hero-glow absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to see it in action?
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
          Start improving outcomes and growing your practice today with our eVitals RPM platform, 
          FDA-cleared devices, and dedicated support team, you can deliver higher-quality care while 
          generating new revenue streams.
          </p>

                     {/* Contact Information */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
             {/* Phone */}
             <div className="flex items-center justify-center gap-4">
               <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                 </svg>
               </div>
               <div className="text-left">
                 <p className="text-white/80 text-sm font-medium">Call us at</p>
                 <p className="text-white text-lg font-semibold">+1 (800) 123-4567</p>
               </div>
             </div>

             {/* Email */}
             <div className="flex items-center justify-center gap-4">
               <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
               </div>
               <div className="text-left">
                 <p className="text-white/80 text-sm font-medium">Email us at</p>
                 <p className="text-white text-lg font-semibold">support@evitals.com</p>
               </div>
             </div>
           </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center justify-center gap-6">
            <Link
              href="/contact?booking=demo"
              className="group bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-3"
            >
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Schedule a Free Demo
            </Link>
            
            {/* Additional Info */}
            <p className="text-white/80 text-sm">
              No commitment required • 30-minute consultation
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>FDA-Cleared Devices</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
