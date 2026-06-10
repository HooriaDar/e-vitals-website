"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const testimonials = [
  {
    quote:
      "eVitals has completely transformed our patient monitoring. The intuitive interface reduced our training time by 60% and improved data accuracy significantly.",
    name: "Dr. Monica Delgado",
    title: "Chief of Cardiology, Mayo Clinic",
    image: "/assets/testimonials/a1.jpg",
  },
  {
    quote:
      "Since implementing eVitals, our nursing staff reports 45% fewer documentation errors. The automated alerts have helped us catch critical changes much earlier.",
    name: "Sarah Kensington",
    title: "Nursing Director, Johns Hopkins",
    image: "/assets/testimonials/g1.jpg",
  },
  {
    quote:
      "The integration with our existing EHR was seamless. We've seen a 30% improvement in clinical workflow efficiency since going live with eVitals.",
    name: "Robert Langford",
    title: "CIO, Massachusetts General",
    image: "/assets/testimonials/a2.jpg",
  },
  {
    quote:
      "Our patient satisfaction scores improved by 22 points after implementing eVitals. Families appreciate the real-time monitoring transparency.",
    name: "Jennifer Morales",
    title: "Patient Experience Officer",
    image: "/assets/testimonials/a3.jpg",
  },
  {
    quote:
      "As a rural hospital with limited IT staff, we needed a solution that just works. eVitals delivered with zero downtime in the first 6 months.",
    name: "Dr. James Wilson",
    title: "Medical Director, Regional Hospital",
    image: "/assets/testimonials/a4.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Healthcare Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of medical professionals who transformed their patient care with eVitals
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-20 max-w-7xl mx-auto h-[300px] md:h-[400px]">
          <Image
            src="/assets/testimonial.jpg"
            alt="Hospital corridor"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 backdrop-blur-[2px] bg-black/10 z-0"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 md:p-12 text-center">
            <h3 className="text-xl md:text-3xl font-bold text-white mb-6 drop-shadow-md">
              You&rsquo;ll find us in more than 600 U.S hospitals too
            </h3>
          </div>
        </div>
        */}

        {/* ✅ Testimonials Carousel */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none"></div>

          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            className="py-8"
          />
        </div>

        {/*
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "98%", label: "Satisfaction Rate" },
            { value: "600+", label: "Hospitals" },
            { value: "45%", label: "Error Reduction" },
            { value: "4.9/5", label: "Average Rating" },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-3xl font-bold text-[#411C6B] mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
};

export default TestimonialSection;
