"use client";

import { motion } from "framer-motion";

const TermsOfService = () => {
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
              Terms of <span className="text-purple-300">Service</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
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
            <h2 className="text-3xl font-bold text-purple-900 mb-6">Effective Date: January 1, 2023</h2>
            <p className="text-lg text-gray-700 mb-6">
              These Terms of Service (&rsquo;Terms&rsquo;) govern your access to and use of e-Vitals&rsquo; website, products, and services (&rsquo;Services&rsquo;). By accessing or using our Services, you agree to be bound by these Terms.
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                title: "Account Registration",
                content: (
                  <>
                    <p>To use certain features, you must register for an account. You agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide accurate and complete information</li>
                      <li>Maintain the security of your credentials</li>
                      <li>Be responsible for all activities under your account</li>
                      <li>Notify us immediately of unauthorized use</li>
                    </ul>
                  </>
                )
              },
              {
                title: "User Responsibilities",
                content: (
                  <>
                    <p>You agree not to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use the Services for unlawful purposes</li>
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe intellectual property rights</li>
                      <li>Transmit harmful or malicious content</li>
                      <li>Interfere with the Services&rsquo; operation</li>
                    </ul>
                  </>
                )
              },
              {
                title: "Intellectual Property",
                content: (
                  <>
                    <p>All content and materials available through our Services, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Text</li>
                      <li>Graphics</li>
                      <li>Logos</li>
                      <li>Software</li>
                    </ul>
                    <p className="mt-4">are the property of e-Vitals or its licensors and protected by intellectual property laws.</p>
                  </>
                )
              },
              {
                title: "Limitation of Liability",
                content: (
                  <>
                    <p>To the maximum extent permitted by law, e-Vitals shall not be liable for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Indirect, incidental, or consequential damages</li>
                      <li>Loss of profits or data</li>
                      <li>Service interruptions</li>
                    </ul>
                    <p className="mt-4">This does not affect liability for death or personal injury resulting from negligence.</p>
                  </>
                )
              },
              {
                title: "Termination",
                content: (
                  <p>
                    We may terminate or suspend your access to our Services immediately, without prior notice, for any reason, including breach of these Terms. All provisions that by their nature should survive termination shall survive.
                  </p>
                )
              },
              {
                title: "Governing Law",
                content: (
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
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
            <h3 className="text-xl font-bold text-purple-900 mb-4">Contact Information</h3>
            <p className="text-gray-700">
              For questions about these Terms, please contact us at <span className="text-purple-600">legal@evitals.com</span>.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default TermsOfService;