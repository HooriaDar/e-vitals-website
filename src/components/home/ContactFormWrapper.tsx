// ContactFormWrapper.tsx
'use client';
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaEnvelopeOpenText, FaHandshake } from "react-icons/fa";

export default function ContactFormWrapper() {
  const formRef = useRef<HTMLDivElement>(null);
  const [subject, setSubject] = useState("");
  const [showCalendly, setShowCalendly] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    const booking = searchParams.get("booking");
    if (booking === "demo") {
      setShowCalendly(true);
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (booking === "inquiry") {
      setShowCalendly(false);
      setSubject("General Inquiry");
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (booking === "partnership") {
      setShowCalendly(false);
      setSubject("Partnership Opportunity");
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (booking === "technical-support") {
      setShowCalendly(false);
      setSubject("Technical Support");
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  const scrollToForm = (subjectValue?: string) => {
    if (subjectValue) setSubject(subjectValue);
    setShowCalendly(false);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-white text-gray-800">
      {/* Options Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#270949] mb-10">
            How can we help you?
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {/* Book a FREE Demo */}
            <button
              onClick={() => {
                setShowCalendly(true);
                formRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200"
            >
              <FaCalendarAlt className="text-[#c092e8] w-10 h-10 mb-4" />
              <span className="font-semibold text-lg text-gray-800">
                Book a FREE Demo
              </span>
            </button>

            {/* Send Inquiry */}
            <button
              onClick={() => scrollToForm("General Inquiry")}
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200"
            >
              <FaEnvelopeOpenText className="text-[#c092e8] w-10 h-10 mb-4" />
              <span className="font-semibold text-lg text-gray-800">
                Send Inquiry
              </span>
            </button>

            {/* Explore Partnership */}
            <button
              onClick={() => scrollToForm("Partnership Opportunity")}
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200"
            >
              <FaHandshake className="text-[#c092e8] w-10 h-10 mb-4" />
              <span className="font-semibold text-lg text-gray-800">
                Explore Partnership
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form / Calendly Section */}
      <section
        ref={formRef}
        className="py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-purple-50 to-white"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#270949] mb-6">
              {showCalendly ? (
                <>
                  Book a <span className="text-[#b187e8]">Demo</span>
                </>
              ) : (
                <>
                  Send Us a <span className="text-[#b187e8]">Message</span>
                </>
              )}
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {showCalendly
                ? "Pick a time that works for you using our scheduling tool below."
                : "Have questions about our services or want to learn more? Fill out the form and our team will get back to you as soon as possible."}
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            {showCalendly ? (
              <iframe
                src="https://calendly.com/rsaiyed-evitalsrpm/30min?embed_domain=yourdomain.com&embed_type=Inline"
                width="100%"
                height="650"
                frameBorder="0"
              ></iframe>
            ) : (
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg text-lg font-medium text-white bg-[#c092e8] hover:bg-[#270949] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
