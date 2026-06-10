"use client";

import React, { useState } from "react";
import Link from "next/link";

const DemoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceName: "",
    website: "",
    specialty: "Primary Care",
    providersCount: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full">
      <section className="mx-auto w-full px-6 pt-12 pb-20">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand">Home</Link> / <span className="text-plum">Request a demo</span>
        </nav>
        
        <div className="grid gap-12 md:grid-cols-2">
          <div className="animate-rise">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand">
              <span className="h-px w-6 bg-brand"></span>Request a demo
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl text-plum">
              See eVitals in action.
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Tell us about your practice and we&apos;ll tailor a demo to your patient population, workflows, and payers.
            </p>
            <ul className="mt-8 space-y-3 text-slate-600">
              <li className="flex gap-3">
                <svg className="h-5 w-5 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> 
                A 20-minute tailored walkthrough
              </li>
              <li className="flex gap-3">
                <svg className="h-5 w-5 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> 
                Reimbursement modeled for your payer mix
              </li>
              <li className="flex gap-3">
                <svg className="h-5 w-5 flex-none text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> 
                Device &amp; EHR-integration overview
              </li>
            </ul>
          </div>
          
          <form
            action="https://formsubmit.co/info@evitalsrpm.com"
            method="POST"
            className="rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-200 shadow-sm animate-rise"
          >
            <input type="hidden" name="_subject" value="New eVitals demo request" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.evitalsrpm.com/demo" />
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">First name</span>
                <input 
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-brand focus:ring-1 focus:ring-brand" 
                  required 
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">Last name</span>
                <input 
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-brand focus:ring-1 focus:ring-brand" 
                  required 
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">Email</span>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-brand focus:ring-1 focus:ring-brand" 
                  required 
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">Phone</span>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-brand focus:ring-1 focus:ring-brand" 
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">Practice name</span>
                <input 
                  type="text"
                  name="practiceName"
                  value={formData.practiceName}
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-brand focus:ring-1 focus:ring-brand" 
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">Website</span>
                <input 
                  type="url" 
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-brand focus:ring-1 focus:ring-brand" 
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">Specialty</span>
                <select 
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 bg-white outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                >
                  <option>Primary Care</option>
                  <option>Cardiology</option>
                  <option>Endocrinology</option>
                  <option>Pulmonology</option>
                  <option>Nephrology</option>
                  <option>Internal Medicine</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600"># of providers</span>
                <input 
                  type="number" 
                  name="providersCount"
                  value={formData.providersCount}
                  onChange={handleInputChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-brand focus:ring-1 focus:ring-brand" 
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold text-slate-600">Message</span>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3} 
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                ></textarea>
              </label>
            </div>
            
            <button type="submit" className="mt-5 w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark cursor-pointer transition-colors">
              Submit
            </button>

            <p className="mt-3 text-xs text-slate-400">
              By submitting, you agree to be contacted about eVitals. You can opt out at any time.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;
