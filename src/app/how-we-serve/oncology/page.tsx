"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { JSX, useEffect, useState, useCallback } from "react";
import {
  Stethoscope,
  Bell,
  UserPlus,
  FileText,
  Heart,
  Clock,
  Quote,
} from "lucide-react";
import Head from "next/head";

const testimonials = [
  {
    quote:
      "It's our job to take care of our patients, whether they're in clinic or at home. The only way to take care of them is to understand what they go through on a daily basis, and we need tools to help us do that.",
    name: "Pr Ethan Basch",
    title: "Oncologist and Director of Research",
    company: "University of North Carolina",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "It provides us with continuous feedback and a way to focus our actions, including for those of our Advanced Practice Nurse, for specific patients in demand.",
    name: "Dr Thomas Grellety",
    title: "Oncologist and Head of Department",
    company: "Centre Hospitalier de la Côte Basque",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "I see remote monitoring as a tool that will enable us to be more efficient and to have a vision of a continuum of care for patients.",
    name: "Dr Antoine Lemaire",
    title: "Head of Oncology and Medical Specialties",
    company: "Centre Hospitalier de Valenciennes",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "The idea is that we can have a vision of the patient's progression of care, even outside of hospital walls, and anticipate problems as they come.",
    name: "Dr Antoine Lemaire",
    title: "Head of Oncology and Medical Specialties",
    company: "Centre Hospitalier de Valenciennes",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "Remote monitoring has greatly improved the quality of care here (...) It's a win for patients and a win for us.",
    name: "Dr Joana Ribiero",
    title: "Medical oncologist",
    company: "Gustave Roussy",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "Resilience is an easy tool to understand and is greatly endorsed by patients. It is therefore a very interesting to monitor my patients.",
    name: "Dr Laura Polastro",
    title: "Medical oncologist in gynecology and senology",
    company: "Institut Jules Bordet",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];

const OncologyPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const features: Array<{
    icon: JSX.Element;
    title: string;
    description: string;
    image: string;
  }> = [
    {
      icon: <Stethoscope className="w-8 h-8 text-purple-900" />,
      title: "Vital Signs & Weight Monitoring",
      description:
        "Track vitals and weight for cancer patients with FDA-approved devices, including smart scales up to 550 lbs. Wearable integration reduces visits by 35%.",
      image: "/assets/Cancer.jpg",
    },
    {
      icon: <Bell className="w-8 h-8 text-purple-900" />,
      title: "Early Warning Alerts",
      description:
        "Automated alerts for abnormal vitals or weight changes. Reduces complications by 40%, notifying caregivers.",
      image: "/assets/Alert.png",
    },
    {
      icon: <UserPlus className="w-8 h-8 text-purple-900" />,
      title: "Patient and Caregiver Engagement",
      description:
        "Voice-guided devices and patient portal with resources. Achieves 80% adherence during treatment.",
      image: "/assets/CareGiver.jpg",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-900" />,
      title: "Reimbursement Optimization",
      description:
        "Automate CPT 99453-99458 billing with audit reports. Increases reimbursable services by 22%.",
      image: "/assets/RemOptimization.jpg",
    },
  ];

  const benefits: Array<{ title: string; description: string; image: string }> =
    [
      {
        title: "Enhanced Cancer Care",
        description:
          "Continuous monitoring reduces complications by 40%. Improves survival and quality of life by 50%.",
        image: "/assets/cancerCare.jpg",
      },
      {
        title: "Time Efficiency for Providers",
        description:
          "EHR integration cuts check-ups by 30%. Oncologists save 20 hours weekly.",
        image: "/assets/Calendar.jpg",
      },
      {
        title: "Improved Patient Compliance",
        description:
          "75% adherence with multilingual support. Reduces complications by 25%.",
        image: "/assets/patient-W-Watch.jpg",
      },
      {
        title: "Maximized Revenue",
        description: "$4,500 monthly per physician. Cuts claim denials by 20%.",
        image: "/assets/FinancialGraph.jpg",
      },
    ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-white to-purple-50">
      {/* SEO Meta Tags */}
      <Head>
        <title>eVitals - Advanced Remote Patient Monitoring for Oncology</title>
        <meta
          name="description"
          content="eVitals empowers oncologists with remote patient monitoring for cancer care, chemotherapy. FDA-approved devices, HIPAA-compliant security, and reimbursement support for oncology telehealth."
        />
        <meta
          name="keywords"
          content="remote patient monitoring, oncology RPM, cancer management, chemotherapy monitoring telehealth, FDA-approved devices, HIPAA-compliant RPM, oncology reimbursement, vital signs weight monitoring"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://www.evitals.com/how-we-serve/oncology"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "eVitals Oncology Solutions",
              "description": "eVitals provides remote patient monitoring for oncology with FDA-approved devices, HIPAA-compliant data security, and reimbursement support for cancer and chemotherapy management.",
              "url": "https://www.evitals.com/how-we-serve/oncology",
              "logo": "https://www.evitals.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-123-4567",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.linkedin.com/company/evitals",
                "https://twitter.com/evitals_health"
              ]
            }
          `}
        </script>
      </Head>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/oncologyHero.jpg"
            alt="Oncology Remote Patient Monitoring Hero"
            fill
            className="object-cover kenburns"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 w-full text-left pl-6 md:pl-12 lg:pl-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Advanced <span className="text-[#B187E8]">Oncology</span> RPM
            </h1>
            <p className="text-white text-base md:text-lg mb-4 max-w-3xl">
              eVitals delivers remote patient monitoring for cancer and
              chemotherapy with FDA-approved devices and real-time telehealth
              insights.
            </p>
            <Link
              href="/contact"
              className="bg-[#36036B] hover:bg-[#4b0d8d] text-white text-base font-semibold px-6 py-3 rounded-md shadow-md transition duration-300 inline-block"
            >
              Schedule a FREE Demo →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* RPM in Oncology Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            RPM in Oncology: Revolutionizing Cancer Care
          </h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-800 mb-4">
              Remote patient monitoring in oncology tracks vitals and weight for
              cancer treatment. eVitals&apos; FDA-approved devices reduce visits by
              35% and complications by 40%.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              HIPAA-compliant platform integrates with EHRs for seamless
              telehealth, boosting satisfaction to 90%.
            </p>
          </div>
          <Image
            src="/assets/cancer.jpg"
            alt="Oncology RPM Illustration"
            width={800}
            height={400}
            className="mx-auto rounded-lg shadow-md mb-8"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            How eVitals Supports Oncology RPM
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            Tailored remote patient monitoring for oncology with advanced tech,
            engagement, and reimbursement.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            Benefits of Oncology Remote Monitoring
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            Measurable improvements in outcomes, efficiency, and satisfaction
            for oncologists and patients.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            What Oncologists Say About eVitals RPM
          </h2>
          <p className="text-lg text-gray-800 mb-12 max-w-3xl mx-auto text-center">
            Real testimonials from leading oncology practices on remote patient
            monitoring success.
          </p>
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-b from-purple-900 to-purple-800 text-white rounded-xl p-8 shadow-2xl"
            >
              <div className="flex items-start mb-6">
                <Quote className="w-8 h-8 mr-4 mt-1 flex-shrink-0 text-purple-200" />
                <p className="text-xl italic leading-relaxed">
                  &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center">
                <div className="relative w-20 h-20 mr-6 overflow-hidden rounded-full">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={`${testimonials[currentTestimonial].name} - ${testimonials[currentTestimonial].company}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-purple-200">
                    {testimonials[currentTestimonial].title}
                  </p>
                  <p className="text-purple-100">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? "bg-purple-900"
                      : "bg-purple-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            Seamless RPM Integration for Oncology
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            Easy setup with dedicated support for telehealth adoption.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Heart className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                Step 1: Assessment
              </h3>
              <p className="text-gray-700">
                Customize for cancer treatment needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Clock className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                Step 2: Implementation
              </h3>
              <p className="text-gray-700">
                Devices, training, and EHR setup in 2 weeks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <UserPlus className="w-8 h-8 text-purple-900 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                Step 3: Support
              </h3>
              <p className="text-gray-700">
                Ongoing billing and 99.9% uptime assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative py-20 min-h-[600px] flex justify-center items-center text-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/oncology-trust-image.png"
            alt="Trusted Oncology RPM Provider"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-sm">
            Trusted by Oncologists Nationwide
          </h2>
          <p className="text-lg text-white mb-6 text-shadow-sm">
            300+ practices, 6,000+ patients monitored. Reduces complications by
            40%, boosts satisfaction by 45%.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Discover Oncology RPM →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Transform Your Oncology Practice
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            Enhance outcomes and revenue with eVitals remote patient monitoring.
            Schedule a demo today.
          </p>
          <Link
            href="/contact"
            className="bg-[#36036B] hover:bg-[#4b0d8d] text-white text-base font-semibold px-6 py-3 rounded-md shadow-md transition duration-300 inline-block"
          >
            Schedule a FREE Demo →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OncologyPage;
