"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CTASection from "@/components/home/CTASection";

import {
  Stethoscope,
  Bell,
  Headset,
  AlertCircle,
  Repeat,
  FileText,
  Eye,
  ClipboardList,
  UserPlus,
} from "lucide-react";


const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8 text-brand" />,
      title: "Patient Education on Device Usage",
      description:
        "We guide each patient through device setup with clear instructions, ensuring they can start tracking their health right away.",
    },
    {
      icon: <Bell className="w-8 h-8 text-brand" />,
      title: "Monitoring & Compliance Reminders",
      description:
        "We track patient usage and send timely reminders to keep them compliant with CMS guidelines.",
    },
    {
      icon: <Headset className="w-8 h-8 text-brand" />,
      title: "Technical Support & Assistance",
      description:
        "Our support team is ready to resolve device pairing issues, reading errors, and more via phone, email, or remote help.",
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-brand" />,
      title: "Physician Notifications",
      description:
        "We alert the physician or care team immediately when readings cross predefined thresholds.",
    },
    {
      icon: <Repeat className="w-8 h-8 text-brand" />,
      title: "Troubleshooting & Device Replacement",
      description:
        "If a device is faulty, we coordinate a quick replacement to minimize downtime.",
    },
    {
      icon: <FileText className="w-8 h-8 text-brand" />,
      title: "Monthly & On-Demand Patient Reports",
      description:
        "We deliver detailed reports to support clinical decision-making, monthly or on request.",
    },
    {
      icon: <Eye className="w-8 h-8 text-brand" />,
      title: "Data Monitoring per Physician Criteria",
      description:
        "Our clinical monitoring team flags critical values based on parameters you define.",
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-brand" />,
      title: "Monthly Billing & Coding Documentation",
      description:
        "We prepare accurate billing and coding documents for seamless reimbursement.",
    },
    {
      icon: <UserPlus className="w-8 h-8 text-brand" />,
      title: "Optional: Patient Screening & Enrollment",
      description:
        "We assist with patient eligibility screening and enrollment if requested.",
    },
  ];

  const reasons = [
    {
      title: "Better Patient Engagement",
      description:
        "Regular follow-up keeps patients actively involved in their care journey.",
    },
    {
      title: "Time Savings for Providers",
      description:
        "We handle operational tasks so you can focus on clinical care.",
    },
    {
      title: "Improved Compliance & Outcomes",
      description:
        "Consistent monitoring reduces complications and avoids unnecessary hospital visits.",
    },
    {
      title: "Maximized Reimbursement",
      description:
        "Accurate coding and documentation ensure you capture every eligible dollar.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/eVitals-bgrpmsw.png"
            alt="RPM Software"
            fill
            className="object-cover blur-sm"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-[#2E1065]/70" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div
            className={`max-w-4xl transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="inline-block bg-brand/80 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 shadow-lg animate-pulse">
              Services We Offer
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white text-shadow-lg">
              Smart, Secure, and Clinician-Friendly{" "}
              <span className="text-brand animate-pulse">RPM Software</span>
            </h1>
            
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-4 mt-16 mb-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl text-gray-900 py-16 max-w-5xl mx-auto"
        >
          We provide end-to-end services to ensure your RPM program runs
          smoothly — from device setup to billing support. Our team works
          closely with your patients and practice to improve engagement, ensure
          compliance, and maximize reimbursement potential.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="max-w-full mx-auto px-24 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-brand mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Trust Section */}
      <section className="relative py-20 min-h-[550px] flex justify-center items-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/eVitals-trust.png" // replace with your image
            alt="US Hospitals"
            fill
            className="object-cover"
          />
          {/* Purple Overlay */}
          <div className="absolute inset-0 bg-gray-900/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-sm">
            Trusted by hundreds of clinicians and practices
          </h2>
          <p className="text-lg text-white mb-6 text-shadow-sm">
            Learn how eVitals can help you navigate remote monitoring for your practice
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-white text-brand px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Learn More About Who We Serve →
          </Link>
        </div>
      </section>



      {/* Why Choose Us */}
      <section className="bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brand mb-8">
            Why Choose Our Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-brand mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-700">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-brand mb-6"
        >
          Lets Make Care Easier — Together
        </motion.h2>
        <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
          Want to see how e-Vitals can simplify patient monitoring, reduce staff
          load, and grow your practice?
        </p>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default ServicesPage;
