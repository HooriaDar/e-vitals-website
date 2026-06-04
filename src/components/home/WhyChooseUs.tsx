"use client";
import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "FDA-Cleared Devices",
      description: "Including our 2-in-1 Blood Pressure & Glucose Monitor and High-Capacity Smart Weight Scale.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    },
    {
      title: "HIPAA-Compliant Platform",
      description: "End-to-end encryption, secure data storage, and BAA support.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      title: "No Wi-Fi? No Problem.",
      description: "Cellular-enabled devices transmit data automatically.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      )
    },
    {
      title: "Full Reimbursement Support",
      description: "From coding to claim submission.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Clinician-First Design",
      description: "Real-time dashboard, alerts, and EHR integration.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0020.75 3H3.75A2.25 2.25 0 001.5 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      )
    },
    {
      title: "Patient-Friendly Devices",
      description: "Simple setup, voice guidance, and multi-language support.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
                         <div className="inline-block bg-gradient-to-r from-teal-500 to-brand bg-clip-text text-transparent">
               <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                 Why Choose Us
               </h1>
             </div>
             <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4 tracking-tight">
               Your Trusted Partner for RPM Success
             </h2>
             <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-brand mx-auto rounded-full"></div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                                 {/* Background gradient on hover */}
                 <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 
                 {/* Icon container */}
                 <div className="relative z-10 flex justify-center mb-6">
                   <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-500 to-brand text-white group-hover:scale-110 transition-transform duration-500 shadow-lg hover:shadow-brand/20">
                     {feature.icon}
                   </div>
                 </div>

                 {/* Content */}
                 <div className="relative z-10 text-center">
                   <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand transition-colors duration-300">
                     {feature.title}
                   </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>

                                 {/* Bottom accent line */}
                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-brand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
