"use client";
import React from "react";
import Link from "next/link";

const RPMReimbursement = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
          Turn Better Care into Revenue
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg text-slate-700 mb-12 leading-relaxed">
          Our RPM program is fully aligned with Medicare and private payer reimbursement policies, helping providers maximize earnings
          </p>

          {/* CPT Codes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* CPT 99453 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow border-l-4 border-l-brand">
              <h3 className="text-xl font-bold text-slate-900 mb-2">CPT 99453</h3>
              <p className="text-slate-600">Patient Setup & Education</p>
            </div>

            {/* CPT 99454 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow border-l-4 border-l-brand">
              <h3 className="text-xl font-bold text-slate-900 mb-2">CPT 99454</h3>
              <p className="text-slate-600">Device Supply & Data Transmission</p>
            </div>

            {/* CPT 99457 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow border-l-4 border-l-brand">
              <h3 className="text-xl font-bold text-slate-900 mb-2">CPT 99457</h3>
              <p className="text-slate-600">First 20 Minutes of Care Management</p>
            </div>

            {/* CPT 99458 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow border-l-4 border-l-brand">
              <h3 className="text-xl font-bold text-slate-900 mb-2">CPT 99458</h3>
              <p className="text-slate-600">Additional 20 Minutes of Care</p>
            </div>
          </div>

          {/* Reimbursement Info */}
          <div className="p-8 rounded-2xl mb-2 border border-slate-200 bg-white">
            {/* Fist Row - Text */}
            <div className="flex items-center justify-center">
               <p className="text-slate-700 text-lg text-center">
                 With our streamlined workflow, you can increase practice revenue with minimal staff time.
               </p>
             </div>
          </div>
            {/* Second Row - Horizontal Flex */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <h3 className="text-2xl font-bold text-slate-800">
                Potential Monthly Reimbursement:
              </h3>
              <div className="bg-brand-tint p-4 rounded-xl border-2 border-brand/20 sm:flex-row shadow-sm">
                <div className="text-center">
                  <div className="text-3xl font-extrabold text-brand">$120-150+</div>
                  <div className="text-sm text-slate-600 font-medium mt-1">per patient/month</div>
                </div>
              </div>
            </div>
            
            

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              href="/rpm-guide"
              className="bg-brand text-white px-8 py-4 rounded-full hover:bg-brand-dark transition-all duration-300 font-semibold shadow-lg hover:shadow-brand/25 text-lg inline-flex items-center gap-2 hover:-translate-y-1"
            >
              Download Free RPM Reimbursement Guide
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RPMReimbursement; 