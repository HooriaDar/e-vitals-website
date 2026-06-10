"use client";
import React from "react";
import Image from "next/image";
// import Button from "./Button";
// import Link from "next/link";

const Compliance = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Column 1 - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-[#270949] mb-6">
              HIPAA-Compliant, Secure & Reliable
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Your patients’ health data is encrypted end-to-end. We sign
              Business Associate Agreements (BAA) to ensure full HIPAA
              compliance and maintain 99.99% platform uptime.
            </p>
          </div>

          {/* Column 2 - Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/HIPAA.avif"
              alt="Security and Compliance"
              width={500}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
