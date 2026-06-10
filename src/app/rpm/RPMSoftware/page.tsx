"use client";

import Image from "next/image";
// import Link from "next/link";
import CTASection from "../../../components/home/CTASection";
import { FaHeartbeat, FaDollarSign, FaClock, FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const RPMSoftware = () => {
  const [isVisible, setIsVisible] = useState(false);

  const compliancePoints = [
    "Devices are FDA-cleared medical devices.",
    "Data is collected for at least 16 days every 30 days.",
    "All transmissions are encrypted and securely stored.",
    "Patient consent is documented and stored for audit readiness.",
  ];

  const features = [
    "Real-Time Patient Data Access",
    "Role Based Access",
    "Color-Coded Alerts for Abnormal Readings",
    "Multi-Device RPM Integration",
    "Automated Compliance Tracking",
    "Seamless Integration with EHRs",
    "HIPAA-Compliant & Secure",
    "Multi-Language Patient Support",
    "Scalable Remote Patient Monitoring",
    "Customizable RPM Reporting",
  ];

  const TypewriterFeatures = () => {
    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const currentText = features[index];
      const typingSpeed = isDeleting ? 20 : 50;

      const handleTyping = () => {
        if (!isDeleting && displayedText.length < currentText.length) {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        } else if (isDeleting && displayedText.length > 0) {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        } else if (!isDeleting && displayedText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        } else if (isDeleting && displayedText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % features.length);
        }
      };

      const timeout = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, index]);

    return (
      <h2 className="text-2xl font-semibold text-[#a18adb] mt-4">
        {displayedText}
        <span className="animate-pulse">|</span>
      </h2>
    );
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="bg-white text-black">
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
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="inline-block bg-[#B187E8]/70 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 shadow-lg animate-pulse">
              Remote Patient Monitoring (RPM) Software - eVitals Platform
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white text-shadow-lg">
              Smart, Secure, and Clinician-Friendly{" "}
              <span className="text-[#B187E8] animate-pulse">RPM Software</span>
            </h1>
            <p className="text-xl md:text-1xl mb-8 text-white/90 max-w-3xl mx-auto text-shadow-lg">
              Our eVitals RPM platform empowers healthcare providers to remotely
              track patients vitals in real time, detect early warning signs,
              and intervene before conditions worsen—all while meeting Medicare
              and private payer requirements for reimbursement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-3xl font-bold text-[#2E1065] mb-4">
                What is RPM Software?
              </h2>
              <p className="text-gray-700 mb-6">
                Remote Patient Monitoring (RPM) software collects, transmits,
                and displays patients physiologic data from FDA-cleared devices,
                giving providers continuous visibility between office visits.
              </p>
              <div className="bg-[#F9F5FF] p-6 rounded-xl border-l-4 border-[#B187E8]">
                <h3 className="text-xl font-semibold text-[#2E1065] mb-3">
                  With eVitals, you can:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1">
                      <svg
                        className="w-5 h-5 text-[#B187E8]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>Monitor patients 24/7 with automated alerts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">
                      <svg
                        className="w-5 h-5 text-[#B187E8]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>Access a secure, HIPAA-compliant dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">
                      <svg
                        className="w-5 h-5 text-[#B187E8]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span>
                      Integrate data with your EHR for streamlined workflows
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`relative min-h-[320px] rounded-2xl overflow-hidden transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <Image
                src="/assets/eVitals-RPMDashboard.png"
                alt="eVitals RPM Dashboard"
                fill
                className="object-cover"
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F9F5FF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065]">
              Key Features of eVitals RPM Software include
            </h2>
            <TypewriterFeatures />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real-Time Data Access",
                points: [
                  "View patient vitals instantly - heart rate, blood pressure, glucose, and weight.",
                  "Color-coded alerts for abnormal readings.",
                ],
              },
              {
                title: "Multi-Device Integration",
                points: [
                  "Works with our FDA-cleared 2-in-1 BP + Glucose Monitor and High-Capacity Weight Scale.",
                  "Supports Bluetooth, Wi-Fi, and 4G cellular-enabled devices.",
                ],
              },
              {
                title: "Automated Compliance Tracking",
                points: [
                  "Built-in RPM compliance rules (16-day minimum data requirement per 30 days).",
                  "Patient adherence reports for billing audits.",
                ],
              },
              {
                title: "Integration",
                points: [
                  "Compatible with Epic, Cerner, Athenahealth, and more.",
                  "Avoid duplicate data entry and save staff time.",
                ],
              },
              {
                title: "Secure & HIPAA-Compliant",
                points: [
                  "End-to-end encryption.",
                  "Business Associate Agreement (BAA) provided.",
                ],
              },
              {
                title: "Multi-Language Patient Support",
                points: [
                  "English, Spanish, and more—ensuring accessibility for diverse patient populations.",
                ],
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100"
              >
                <h3 className="text-xl font-bold text-[#2E1065] mb-3">
                  {feature.title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {feature.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1">
                        <svg
                          className="w-5 h-5 text-[#B187E8]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065]">
              How It Works
            </h2>
          </div>
          <div
            className={`relative min-h-[500px] rounded-2xl overflow-hidden transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <Image
              src="/assets/eVitals-works.png"
              alt="eVitals RPM Dashboard"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F9F5FF] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2E1065]">
              Benefits for Providers
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Discover how eVitals RPM empowers healthcare practices to deliver
              better care, save time, and boost revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Improve Patient Outcomes",
                desc: "With eVitals RPM, providers can track vitals in real time, detect issues early, and prevent costly hospitalizations while boosting long-term health outcomes.",
                icon: <FaHeartbeat className="text-white text-2xl" />,
                color: "bg-purple-600",
              },
              {
                title: "Increase Practice Revenue",
                desc: "Generate $120–$150+ per patient/month through RPM reimbursements, creating scalable recurring revenue while delivering quality care.",
                icon: <FaDollarSign className="text-white text-2xl" />,
                color: "bg-green-600",
              },
              {
                title: "Save Time",
                desc: "eVitals RPM automates alerts, reports, and dashboards—reducing manual workload and freeing staff to focus on direct patient care.",
                icon: <FaClock className="text-white text-2xl" />,
                color: "bg-blue-600",
              },
              {
                title: "Boost Patient Engagement",
                desc: "Patients stay motivated with real-time feedback, reminders, and continuous support, strengthening trust and compliance with care plans.",
                icon: <FaUsers className="text-white text-2xl" />,
                color: "bg-pink-600",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full ${b.color} shadow-lg mb-4`}
                >
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2E1065] mb-3">
                  {b.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F9F5FF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065]">
              Compliance-Ready by Design
            </h2>
          </div>

          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 20,
              }}
            >
              {[...compliancePoints, ...compliancePoints].map((line, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white border border-purple-100 px-6 py-6 rounded-xl transition-all duration-300 min-w-[350px]"
                >
                  <span>
                    <svg
                      className="w-5 h-5 text-[#B187E8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{line}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default RPMSoftware;
