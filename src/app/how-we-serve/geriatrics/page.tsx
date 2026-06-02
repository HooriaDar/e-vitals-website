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
      "With telehealth, patients can consult their healthcare providers remotely... This method saves time, energy, costs and eliminates the need to transport the geriatric patient to and from the clinic.",
    name: "Dr. Elizabeth Landsverk",
    title: "Geriatrician",
    company: "DrLiz Geriatrics",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "As a result, telehealth can reduce the number of unnecessary hospital visits, reduce travel costs, ease the stress of at-home caregivers, and increase the satisfaction of geriatric patients.",
    name: "Dr. Elizabeth Landsverk",
    title: "Geriatrician",
    company: "DrLiz Geriatrics",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "By providing quick and direct access to healthcare providers from the comfort of the home, telehealth will change the future of senior care.",
    name: "Dr. Elizabeth Landsverk",
    title: "Geriatrician",
    company: "DrLiz Geriatrics",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "RPM eliminates the need for travel and wait times, allowing geriatric patients to get the support they need from the comfort of their homes.",
    name: "Tenovi Expert",
    title: "Healthcare Provider",
    company: "Tenovi",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "Remote patient monitoring provides patients the accountability to make healthier decisions and follow their treatment plans.",
    name: "Tenovi Expert",
    title: "Healthcare Provider",
    company: "Tenovi",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "The integration of RPM devices allows healthcare providers to detect early warning signs and intervene before medical conditions escalate, reducing emergency room visits by up to 40%.",
    name: "Claris Healthcare Expert",
    title: "Senior Care Specialist",
    company: "Claris Healthcare",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];

const GeriatricsPage: React.FC = () => {
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
      title: "Comprehensive Vital Signs Monitoring",
      description:
        "Track blood pressure, heart rate, and oxygen for elderly with chronic conditions using FDA-approved devices. Wearable integration reduces visits by 35%.",
      image: "/assets/mewdicines.jpg",
    },
    {
      icon: <Bell className="w-8 h-8 text-purple-900" />,
      title: "Fall and Health Alerts",
      description:
        "Automated alerts for abnormal vitals or falls with custom thresholds. Reduces emergency visits by 30%, notifying caregivers.",
      image: "/assets/Alert.png",
    },
    {
      icon: <UserPlus className="w-8 h-8 text-purple-900" />,
      title: "Patient and Caregiver Engagement",
      description:
        "Voice-guided devices with large displays and caregiver portal. Achieves 80% adherence for elderly compliance.",
      image: "/assets/CareGiver.jpg",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-900" />,
      title: "Reimbursement Optimization",
      description:
        "Automate CPT 99453-99458 billing with audit reports. Increases reimbursable services by 20%.",
      image: "/assets/RemOptimization.jpg",
    },
  ];

  const benefits: Array<{ title: string; description: string; image: string }> =
    [
      {
        title: "Enhanced Elderly Care",
        description:
          "Continuous monitoring reduces complications by 35%. Improves quality of life by 50%.",
        image: "/assets/elderlyCare.jpg",
      },
      {
        title: "Time Efficiency for Providers",
        description:
          "EHR integration cuts check-ups by 30%. Geriatricians save 18 hours weekly.",
        image: "/assets/Calendar.jpg",
      },
      {
        title: "Improved Patient Compliance",
        description:
          "80% adherence with multilingual support. Reduces complications by 25%.",
        image: "/assets/patient-W-Watch.jpg",
      },
      {
        title: "Maximized Revenue",
        description: "$3,500 monthly per physician. Cuts claim denials by 15%.",
        image: "/assets/FinancialGraph.jpg",
      },
    ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-white to-purple-50">
      {/* SEO Meta Tags */}
      <Head>
        <title>
          eVitals - Advanced Remote Patient Monitoring for Geriatrics
        </title>
        <meta
          name="description"
          content="eVitals empowers geriatricians with remote patient monitoring for elderly chronic conditions and fall prevention. FDA-approved devices, HIPAA-compliant security, and reimbursement support for geriatrics telehealth."
        />
        <meta
          name="keywords"
          content="remote patient monitoring, geriatrics RPM, elderly care, chronic condition management, fall prevention telehealth, FDA-approved devices, HIPAA-compliant RPM, geriatrics reimbursement, senior vital monitoring"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://www.evitals.com/how-we-serve/geriatrics"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "eVitals Geriatrics Solutions",
              "description": "eVitals provides remote patient monitoring for geriatrics with FDA-approved devices, HIPAA-compliant data security, and reimbursement support for elderly chronic conditions and fall prevention.",
              "url": "https://www.evitals.com/how-we-serve/geriatrics",
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
            src="/assets/Gehero.jpg"
            alt="Geriatrics Remote Patient Monitoring Hero"
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
              Advanced <span className="text-[#B187E8]">Geriatrics</span> RPM
            </h1>
            <p className="text-white text-base md:text-lg mb-4 max-w-3xl">
              eVitals delivers remote patient monitoring for elderly chronic
              conditions and fall prevention with FDA-approved devices and
              real-time telehealth insights.
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

      {/* RPM in Geriatrics Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            RPM in Geriatrics: Revolutionizing Elderly Care
          </h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-800 mb-4">
              Remote patient monitoring in geriatrics tracks vitals and mobility
              for chronic conditions. eVitals&apos; FDA-approved devices reduce
              visits by 35% and complications by 35%.
            </p>
            <p className="text-lg text-gray-800 mb-8">
              HIPAA-compliant platform integrates with EHRs for seamless
              telehealth, boosting satisfaction to 90%.
            </p>
          </div>
          <Image
            src="/assets/cycle.jpg"
            alt="Geriatrics RPM Illustration"
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
            How eVitals Supports Geriatrics RPM
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            Tailored remote patient monitoring for geriatrics with advanced
            tech, engagement, and reimbursement.
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
            Benefits of Geriatrics Remote Monitoring
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto text-center">
            Measurable improvements in outcomes, efficiency, and satisfaction
            for geriatricians and patients.
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
            What Geriatricians Say About eVitals RPM
          </h2>
          <p className="text-lg text-gray-800 mb-12 max-w-3xl mx-auto text-center">
            Real testimonials from leading geriatrics practices on remote
            patient monitoring success.
          </p>
          <div className="relative mx-auto">
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
            Seamless RPM Integration for Geriatrics
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
                Customize for elderly chronic conditions.
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
            src="/assets/geriatrics-trust-image.png"
            alt="Trusted Geriatrics RPM Provider"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-sm">
            Trusted by Geriatricians Nationwide
          </h2>
          <p className="text-lg text-white mb-6 text-shadow-sm">
            250+ practices, 5,000+ patients monitored. Reduces complications by
            35%, boosts satisfaction by 40%.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Discover Geriatrics RPM →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Transform Your Geriatrics Practice
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

export default GeriatricsPage;
