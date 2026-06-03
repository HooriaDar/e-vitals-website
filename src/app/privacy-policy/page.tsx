"use client";

import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      {/* <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
              Privacy <span className="text-purple-300">Policy</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your privacy matters to us. Learn how we protect your information.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Content Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none"
        >
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">Last Updated: January 1, 2023</h2>
            <p className="text-lg text-gray-700 mb-6">
              At e-Vitals, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                title: "Information We Collect",
                content: (
                  <>
                    <p>We may collect personal information including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Contact details (name, email, phone number)</li>
                      <li>Demographic information</li>
                      <li>Health-related data for service provision</li>
                      <li>Device and usage information</li>
                      <li>Payment information for transactions</li>
                    </ul>
                  </>
                )
              },
              {
                title: "How We Use Your Information",
                content: (
                  <>
                    <p>Your information helps us to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide and maintain our services</li>
                      <li>Improve user experience</li>
                      <li>Communicate with you</li>
                      <li>Process transactions</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </>
                )
              },
              {
                title: "Data Security",
                content: (
                  <>
                    <p>We implement industry-standard security measures including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Encryption of sensitive data</li>
                      <li>Secure servers and networks</li>
                      <li>Regular security audits</li>
                      <li>Access controls</li>
                    </ul>
                    <p className="mt-4">Despite these measures, no method of transmission over the Internet is 100% secure.</p>
                  </>
                )
              },
              {
                title: "Your Rights",
                content: (
                  <>
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access your personal data</li>
                      <li>Request correction of inaccurate data</li>
                      <li>Request deletion of your data</li>
                      <li>Object to processing of your data</li>
                      <li>Request data portability</li>
                    </ul>
                  </>
                )
              },
              {
                title: "Changes to This Policy",
                content: (
                  <p>
                    We may update this Privacy Policy periodically. We will notify you of any changes by posting the new policy on this page and updating the &rsquo;Last Updated&rsquo; date.
                  </p>
                )
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-purple-900 mb-4">{section.title}</h3>
                <div className="text-gray-700 space-y-4">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-purple-50 p-8 rounded-xl border-l-4 border-purple-600">
            <h3 className="text-xl font-bold text-purple-900 mb-4">Contact Us</h3>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us at <span className="text-purple-600">privacy@evitals.com</span>.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;