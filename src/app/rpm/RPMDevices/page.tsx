"use client";

import Image from "next/image";
import Link from "next/link";
import CTASection from '../../../components/home/CTASection';
import { useEffect, useState } from 'react';

const RPMDevices = () => {
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
            src="/assets/eVitals-Devices.png"
            alt="RPM Devices"
            fill
            className="object-contain blur-sm"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-[#2E1065]/70" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="inline-block bg-[#B187E8]/70 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 shadow-lg animate-pulse">
              Remote Patient Monitoring (RPM) Devices
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white text-shadow-lg">
              FDA-Cleared Devices Designed for <span className="text-[#B187E8] animate-pulse">Seamless Remote Care</span>
            </h1>
            <p className="text-xl md:text-1xl mb-8 text-white/90 max-w-3xl mx-auto text-shadow-lg">
              Our RPM devices are built to deliver accurate, real-time patient data directly to your clinic—no complicated setup, no missed readings.
            </p>
            <p className="text-lg text-white/80 max-w-4xl mx-auto">
              From 2-in-1 monitoring devices to high-capacity weight scales, each device integrates with our eVitals RPM platform to ensure providers get the insights they need and patients enjoy a simple, stress-free experience.
            </p>
          </div>
        </div>
      </section>

      {/* 2-in-1 Device Section */}
      <section className="py-20 bg-gradient-to-r from-[#B187E8]/20 to-[#270949]/20 rounded-2xl">
        <div className="max-w-7xl mx-auto px-6">
          {/* Grid Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#2E1065] mb-6">
                2-in-1 Remote Blood Pressure & Blood Glucose Monitor
              </h2>
              <h3 className="text-2xl font-bold text-[#B187E8] mb-6">
                Two Critical Readings. One Smart Device.
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                The ForaCare D40g combines blood pressure and blood glucose
                monitoring in one FDA-cleared device—perfect for patients managing
                multiple chronic conditions.
              </p>

              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#270949] text-white px-6 py-3 rounded-full hover:bg-[#1f0636] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  📄 Download User Guide →
                </Link>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative ">
                <div className="relative min-h-[500px]">
                  <Image
                    src="/assets/bp.png"
                    alt="ForaCare D40g 2-in-1 Monitor"
                    width={400}
                    height={400}
                    className="mx-auto hover:scale-105 transition-transform duration-500 h-auto w-full object-cover"
                  />
                  <div className="text-center mt-2">
                    <h4 className="text-lg font-bold text-[#2E1065]">ForaCare D40g</h4>
                    <p className="text-gray-600">2-in-1 Remote BP & Glucose Monitor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section Full Width */}
          <div className="mt-16">
            <h4 className="text-3xl font-extrabold text-[#2d2d2d] mb-8 text-center">
              Key Features
            </h4>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "2-in-1 Monitoring – BP + glucose readings with a single device",
                "Cellular Connectivity (4G) – Automatic data uploads, no Wi-Fi or smartphone required",
                "Smart Averaging Mode (AVG) – Combines multiple readings for more accurate results",
                "IRB Detection – Identifies irregular rapid heartbeats during BP measurement",
                "Voice Guidance – English & Spanish audio instructions for accessibility",
                "Data Storage – Holds up to 864 measurement records in memory",
                "Cloud Integration – Syncs with eVitals RPM dashboard for clinician review",
                "Backlit LCD Display – Large, easy-to-read screen",
                "Alternative Site Glucose Testing – Less finger discomfort for patients",
                "Dual Power Options – Rechargeable lithium-ion battery or standard AA batteries",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white hover:shadow-lg hover:bg-purple-50 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-[#B187E8] rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  <span className="text-gray-800 text-base leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Weight Scale */}
      <section className="py-20 bg-gradient-to-r from-[#FFFFFF]/20 to-[#efefef]/100 rounded-2xl">
        <div className="max-w-7xl mx-auto px-6">
          {/* Grid Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#2E1065] mb-6">
              High-Capacity Smart Weight Scale
              </h2>
              <h3 className="text-2xl font-bold text-[#B187E8] mb-6">
              Track Weight Trends for Better Chronic Care
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The ForaCare TNG Scale 550 Mobile is ideal for monitoring conditions like 
              CHF, CKD, and obesity, where daily weight changes can signal early complications.
              </p>

              <div className="mt-8">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-[#270949] text-white px-6 py-3 rounded-full hover:bg-[#1f0636] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  📄 Download User Guide →
                </Link>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative ">
                <div className="relative min-h-[500px]">
                  <Image
                    src="/assets/weight.png"
                    alt="ForaCare D40g 2-in-1 Monitor"
                    width={400}
                    height={400}
                    className="mx-auto hover:scale-105 transition-transform duration-500 h-auto w-full object-cover"
                  />
                  <div className="text-center mt-2">
                    <h4 className="text-lg font-bold text-[#2E1065]">ForaCare TNG Scale 550 Mobile</h4>
                    <p className="text-gray-600">High-Capacity Smart Weight Scale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section Full Width */}
          <div className="mt-16">
            <h4 className="text-3xl font-extrabold text-[#2d2d2d] mb-8 text-center">
              Key Features
            </h4>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "High Capacity – Supports up to 550 lb (250 kg)",
                "Bluetooth Connectivity – Syncs readings with eVitals RPM platform",
                "Talking Function – Announces weight in English, Spanish, or French",
                "Backlit LCD Display – Easy-to-read even in low light",
                "Multi-User Memory – Stores data for up to 5 users (135 entries each)",
                "Automatic Step-On & Auto-Off – Convenient and energy-efficient",
                "Low Profile Design – Stable base with tempered glass surface",
                "BMI Display – Automatically calculates Body Mass Index",
                "Multiple Units Supported – Pounds or kilograms",
                "Battery Operated – Uses 4 AAA batteries (easy to replace)"
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg- shadow-sm border border-purple-100 hover:shadow-lg hover:bg-purple-50 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-[#B187E8] rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  <span className="text-gray-800 text-base leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* Why Our Devices Stand Out */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2E1065] mb-6">
              Why Our RPM Devices Stand Out
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏥",
                title: "FDA-Cleared",
                desc: "Meets all regulatory standards for clinical use"
              },
              {
                icon: "🔌",
                title: "Plug-and-Play Setup",
                desc: "No complex pairing or tech skills required"
              },
              {
                icon: "📡",
                title: "Automatic Data Transmission",
                desc: "Ensures providers get timely readings"
              },
              {
                icon: "👥",
                title: "Patient-Friendly Design",
                desc: "Large displays, voice prompts, and simple controls"
              },
              {
                icon: "🌍",
                title: "Multi-Language Support",
                desc: "Accessibility for diverse populations"
              },
              {
                icon: "🔒",
                title: "Secure & Compliant",
                desc: "HIPAA-compliant data transmission and storage"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#2E1065] mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E1065] mb-8">
            Compliance-Ready for RPM Billing
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our devices meet all requirements for successful RPM program implementation and billing.
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100">
            <h3 className="text-2xl font-bold text-[#2E1065] mb-6">Our devices:</h3>
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              {[
                "Meet the FDA definition of a medical device",
                "Automatically upload data to a secure, HIPAA-compliant location",
                "Support the 16-day minimum data collection requirement for CPT reimbursement"
              ].map((requirement, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 bg-[#B187E8] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
};

export default RPMDevices;


