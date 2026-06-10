"use client";

// import Button from "@/components/home/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ForIndividuals = () => {
  const features = [
    {
      title: "Personal Health Tracking",
      description:
        "Monitor your vital signs and health metrics in real-time with our intuitive dashboard",
      icon: (
        <svg
          className="w-12 h-12 text-[#B187E8]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Mobile Accessibility",
      description:
        "Access your health data anytime, anywhere through our mobile app",
      icon: (
        <svg
          className="w-12 h-12 text-[#B187E8]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Trend Analysis",
      description:
        "Get personalized insights and trends about your health patterns",
      icon: (
        <svg
          className="w-12 h-12 text-[#B187E8]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "Emergency Alerts",
      description:
        "Automatic notifications sent to your emergency contacts when critical changes are detected",
      icon: (
        <svg
          className="w-12 h-12 text-[#B187E8]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: "95%", label: "User satisfaction score", trend: "" },
    { value: "24/7", label: "Health monitoring", trend: "" },
    { value: "50%", label: "Faster health insights", trend: "" },
    { value: "10K+", label: "Active users", trend: "" },
  ];

  const testimonials = [
    {
      quote:
        "Since using e-Vitals, I've been able to track my blood pressure trends and share them with my doctor. It's given me peace of mind and better control over my health.",
      author: "Sarah Johnson",
      role: "e-Vitals User Since 2022",
    },
    {
      quote:
        "The mobile app makes it so easy to check my health metrics anytime. The emergency alert system gives my family peace of mind knowing I'm being monitored.",
      author: "Michael Chen",
      role: "e-Vitals Premium Member",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/for-individial-hero.png"
            alt="Health Monitoring for Individuals"
            fill
            className="object-cover"
            priority
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#2E1065]/80 to-[#B187E8]/80"></div> */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
              Your Health <span className="text-[#B187E8]">Simplified</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Take control of your wellbeing with personalized remote monitoring
              designed for individuals
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#2E1065] hover:bg-purple-100 px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
                How It Works
              </button>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-white to-[#F9F5FF]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065] mb-6">
              Designed for{" "}
              <span className="text-[#B187E8]">Your Wellbeing</span>
            </h2>
            <div className="w-24 h-1 bg-[#B187E8] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools that put you in control of your health journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#B187E8]"
              >
                <div className="flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065] mb-6">
              Trusted by <span className="text-[#B187E8]">Thousands</span>
            </h2>
            <div className="w-24 h-1 bg-[#B187E8] mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200"
              >
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold text-[#2E1065] mr-2">
                    {stat.value}
                  </span>
                  {stat.trend && (
                    <span className="text-2xl text-[#B187E8]">
                      {stat.trend}
                    </span>
                  )}
                </div>
                <p className="text-lg text-center text-gray-700">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#F9F5FF]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E1065] mb-6">
              Loved by <span className="text-[#B187E8]">Our Users</span>
            </h2>
            <div className="w-24 h-1 bg-[#B187E8] mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#B187E8]"
              >
                <svg
                  className="w-8 h-8 text-[#B187E8] mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-lg text-gray-700 mb-6">
                  &rsquo;{testimonial.quote}&rsquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-[#2E1065]">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative text-center px-4 mb-20 py-16 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-100 rounded-3xl shadow-xl overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 600 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-10"
          >
            <circle cx="100" cy="100" r="80" fill="#a78bfa" />
            <circle cx="500" cy="80" r="60" fill="#7c3aed" />
            <circle cx="300" cy="180" r="40" fill="#c4b5fd" />
          </svg>
        </div>

        {/* CTA Content */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
            Let’s Make Care Easier — Together
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Want to see how E-Vitals can simplify patient monitoring, reduce
            staff load, and grow your practice?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-[#270949] hover:bg-[#1e0635] text-white px-6 py-3 rounded-full hover:opacity-90 transition font-semibold shadow-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ForIndividuals;
