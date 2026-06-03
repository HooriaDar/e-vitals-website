"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [whyUsDropdownOpen, setWhyUsDropdownOpen] = useState(false);

  return (
    <>
      {/* HIPAA compliancy top banner */}
      <div className="bg-deep text-white no-print w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-0.5">
          <div className="flex items-center gap-3 text-[15px] leading-none">
            <Image
              src="/assets/stars.png"
              alt="Stars icon"
              width={34}
              height={34}
              className="h-8.5 w-8.5 object-contain"
            />
            <span>Turn-key Remote Patient Monitoring for clinics of any size.</span>
          </div>
          <div className="hidden items-center sm:flex">
            <Image
              src="/assets/hipa-logo.png"
              alt="HIPAA Compliant"
              width={680}
              height={280}
              className="h-[5rem] w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur no-print w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center" aria-label="e-Vitals home">
            <Image 
              src="/assets/logo.png" 
              alt="e-Vitals — Remote Patient Monitoring" 
              width={364}
              height={72}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>
          
          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            {/* Solutions Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 px-1 py-2 text-plum/75 transition hover:text-brand cursor-pointer">
                Solutions 
                <svg 
                  className={`h-4 w-4 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`absolute left-0 top-full z-50 pt-3 transition-all duration-200 ${solutionsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="w-[250px] rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/70">
                  <div className="p-2">
                    <Link 
                      href="/remote-patient-monitoring" 
                      className="block rounded-lg px-3 py-2 text-sm text-plum/80 transition hover:bg-brand/5 hover:text-brand"
                    >
                      Remote Patient Monitoring (RPM)
                    </Link>
                    <Link 
                      href="/chronic-care-management" 
                      className="block rounded-lg px-3 py-2 text-sm text-plum/80 transition hover:bg-brand/5 hover:text-brand"
                    >
                      Chronic Care Management
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/how-we-serve" className="px-1 py-2 text-plum/75 transition hover:text-brand">
              Who We Serve
            </Link>
            
            <Link href="/about" className="px-1 py-2 text-plum/75 transition hover:text-brand">
              About
            </Link>
            
            {/* Why Us Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setWhyUsDropdownOpen(true)}
              onMouseLeave={() => setWhyUsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 px-1 py-2 text-plum/75 transition hover:text-brand cursor-pointer">
                Why us 
                <svg 
                  className={`h-4 w-4 transition-transform duration-200 ${whyUsDropdownOpen ? 'rotate-180' : ''}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`absolute left-0 top-full z-50 pt-3 transition-all duration-200 ${whyUsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="w-[250px] rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/70">
                  <div className="p-2">
                    <Link 
                      href="/how-it-works" 
                      className="block rounded-lg px-3 py-2 text-sm text-plum/80 transition hover:bg-brand/5 hover:text-brand"
                    >
                      How it works
                    </Link>
                    <Link 
                      href="/ReimbursementCalculator" 
                      className="block rounded-lg px-3 py-2 text-sm text-plum/80 transition hover:bg-brand/5 hover:text-brand"
                    >
                      Reimbursement calculator
                    </Link>
                    <Link 
                      href="/support/resources" 
                      className="block rounded-lg px-3 py-2 text-sm text-plum/80 transition hover:bg-brand/5 hover:text-brand"
                    >
                      Resources
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/support/resources" className="px-1 py-2 text-plum/75 transition hover:text-brand">
              Resources
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link href="#" className="hidden text-sm font-medium text-plum/75 transition hover:text-brand sm:inline-block">
              Login
            </Link>
            <Link 
              href="/demo" 
              className="hidden rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark sm:inline-block"
            >
              Request a Demo
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden p-2 rounded-lg text-plum transition hover:bg-slate-50 cursor-pointer" 
              aria-label="Menu"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`border-t border-slate-100 bg-white px-6 py-3 lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="border-b border-slate-100 py-2">
            <div className="font-semibold text-plum mb-1">Solutions</div>
            <Link 
              href="/remote-patient-monitoring" 
              className="block py-1.5 pl-3 text-sm text-plum/75 hover:text-brand"
              onClick={() => setMobileMenuOpen(false)}
            >
              Remote Patient Monitoring (RPM)
            </Link>
            <Link 
              href="/chronic-care-management" 
              className="block py-1.5 pl-3 text-sm text-plum/75 hover:text-brand"
              onClick={() => setMobileMenuOpen(false)}
            >
              Chronic Care Management
            </Link>
          </div>
          
          <Link 
            href="/how-we-serve" 
            className="block py-2.5 font-medium text-plum border-b border-slate-50 hover:text-brand"
            onClick={() => setMobileMenuOpen(false)}
          >
            Who We Serve
          </Link>
          
          <Link 
            href="/about" 
            className="block py-2.5 font-medium text-plum border-b border-slate-50 hover:text-brand"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          
          <div className="border-b border-slate-100 py-2">
            <div className="font-semibold text-plum mb-1">Why us</div>
            <Link 
              href="/how-it-works" 
              className="block py-1.5 pl-3 text-sm text-plum/75 hover:text-brand"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it works
            </Link>
            <Link 
              href="/ReimbursementCalculator" 
              className="block py-1.5 pl-3 text-sm text-plum/75 hover:text-brand"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reimbursement calculator
            </Link>
            <Link 
              href="/support/resources" 
              className="block py-1.5 pl-3 text-sm text-plum/75 hover:text-brand"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
          </div>
          
          <Link 
            href="/support/resources" 
            className="block py-2.5 font-medium text-plum border-b border-slate-50 hover:text-brand"
            onClick={() => setMobileMenuOpen(false)}
          >
            Resources
          </Link>
          
          <Link 
            href="/demo" 
            className="mt-3 block rounded-lg bg-brand px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-dark"
            onClick={() => setMobileMenuOpen(false)}
          >
            Request a Demo
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
