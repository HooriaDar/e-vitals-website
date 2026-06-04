"use client";
import React from "react";
import Image from "next/image";
// import Button from "./Button";
import Link from "next/link";

const DeviceSection = () => {
  return (
    <section className="bg-white py-24">
      <div
        className="bg-brand-tint container mx-auto px-4 py-24 shadow-sm border border-brand/5"
        style={{ borderRadius: "45px" }}
      >
        {/* Section Heading */}
        <h2 className="text-center text-brand text-3xl md:text-5xl font-extrabold mb-16 tracking-tight">
          Learn about our RPM Devices
        </h2>

        {/* 2-in-1 Device */}
        <div className="w-full relative rounded-3xl overflow-hidden p-8 md:p-16 mb-20 duration-300 min-h-[350px] flex">
          {/* Text on the left */}
          <div className="relative z-10 max-w-xl flex-1">
            <span className="inline-block bg-brand rounded-full px-4 py-1 text-sm font-semibold text-white shadow-sm mb-2">
              New
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-2 tracking-tight">
              Blood Pressure & Glucose Monitoring System
            </h3>
            <p className="text-slate-700 mb-6 leading-relaxed text-lg">
              Remotely monitor and adjust treatment plans to keep chronic
              diseases under control. Patients can easily monitor their blood
              glucose and pressure themselves or with a caregiver — anytime,
              anywhere. Device data is automatically transmitted to the eVitals
              RPM Telehealth System via built-in cellular connectivity.
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 text-base">
              <li>2-in-1 blood glucose and blood pressure measurements</li>
              <li>Audible results in English/Spanish</li>
              <li>Alternative site testing approved</li>
              <li>Smart Averaging Technology (AVG Mode)</li>
              <li>Irregular Rapid Beat (IRB) technology</li>
              <li>Built-in 4G network SIM card</li>
            </ul>
          </div>

          {/* Image on the right */}
          <div className="relative flex-1 flex justify-end items-center">
            <Image
              src="/assets/bp.png"
              alt="2-in-1 Blood Pressure and Glucose Monitor"
              width={500}
              height={500}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Dashed Line */}
        <div className="w-full flex justify-center my-8">
          <span className="w-full border-t-3 border-dashed border-gray-300"></span>
        </div>

        <div className="w-full relative rounded-3xl overflow-hidden p-8 md:p-16 mb-20 duration-300 min-h-[700px] flex">
          {/* Text on the left */}
          <div className="relative z-10 max-w-xl flex-1">
            <span className="inline-block bg-brand rounded-full px-4 py-1 text-sm font-semibold text-white shadow-sm mb-2">
              New
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-2 tracking-tight">
              Weight Scale
            </h3>

            <ul className="list-disc pl-6 text-slate-700 space-y-2 text-base">
              <li>Supports up to 550 lbs</li>
              <li>Low profile, wide platform</li>
              <li>Large backlit LCD display</li>
              <li>Audible results in English, Spanish & French</li>
            </ul>
          </div>

          {/* Image on the right */}
          <div className="relative flex-1 flex justify-end items-center">
            <Image
              src="/assets/weight.png"
              alt="Weight Scale"
              width={500}
              height={500}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-20 flex justify-center">
          <Link
            href="/for-organizations"
            className="bg-brand text-white px-8 py-4 rounded-full hover:bg-brand-dark transition-all duration-300 font-semibold shadow-lg hover:shadow-brand/25 hover:-translate-y-1"
          >
            Become our Technology Partner
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DeviceSection;
