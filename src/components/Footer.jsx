import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-slate-300 pt-20 pb-12 border-t border-emerald-950 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Story & Big Visible Logo */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="bg-white p-2 rounded-[4px] shadow-sm flex items-center justify-center shrink-0">
                <img
                  src="/assets/Riitu-Logo-Tight.png"
                  alt="Riitu Institution Official Brand Logo"
                  className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = '/assets/Riitu-Institution-Logo.png';
                  }}
                />
              </div>
              <div className="border-l border-white/20 pl-3">
                <span className="block text-xl font-serif font-bold text-white tracking-tight leading-none">
                  Riitu Institution
                </span>
                <span className="block text-xs font-bold text-brand-gold uppercase tracking-wider mt-1">
                  CA Academy
                </span>
              </div>
            </Link>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Founded by Fellow Chartered Accountants on an uncompromising standard: no mass commercial factories, no outsourced teaching, and personal accountability for every student’s clearance.
            </p>

            {/* Google Rating Badge in Footer */}
            <a
              href="https://maps.google.com/?q=Riitu+Institution+Sector+12+Kharghar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 hover:border-[#D49A18] rounded-[3px] inline-flex items-center gap-3 transition-colors group"
            >
              <svg viewBox="0 0 48 48" className="w-6 h-6 shrink-0">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <div>
                <div className="flex items-center gap-1.5 text-xs text-white font-bold">
                  <span>4.9 / 5.0</span>
                  <span className="text-amber-400">★★★★★</span>
                  <span className="text-[10px] text-brand-gold font-normal">• 185+ Reviews</span>
                </div>
                <span className="text-[10px] text-slate-300 block mt-0.5">Trusted by 1,200+ Students • Google Verified</span>
              </div>
            </a>
          </div>

          {/* Column 2: Academic Cohorts */}
          <div className="lg:col-span-3 space-y-3 text-xs sm:text-sm">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2.5 font-sans">
              Academic Cohorts
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <Link to="/ca-foundation" className="hover:text-brand-gold transition-colors">
                  CA Foundation Cohort
                </Link>
              </li>
              <li>
                <Link to="/ca-intermediate" className="hover:text-brand-gold transition-colors">
                  CA Intermediate (Group 1 &amp; 2)
                </Link>
              </li>
              <li>
                <Link to="/commerce-11th-12th" className="hover:text-brand-gold transition-colors">
                  11th &amp; 12th Commerce Integrated
                </Link>
              </li>
              <li>
                <Link to="/school-6th-10th" className="hover:text-brand-gold transition-colors">
                  School Foundations (6th to 10th)
                </Link>
              </li>
              <li>
                <Link to="/cs-cma" className="hover:text-brand-gold transition-colors">
                  CS Executive &amp; CMA Prep
                </Link>
              </li>
              <li>
                <Link to="/college-bcom-bms" className="hover:text-brand-gold transition-colors">
                  B.Com &amp; BMS Degree Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Institution & About Submenu */}
          <div className="lg:col-span-2 space-y-3 text-xs sm:text-sm">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2.5 font-sans">
              About Riitu
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <Link to="/about-us" className="hover:text-brand-gold transition-colors">
                  Our Story &amp; Philosophy
                </Link>
              </li>
              <li>
                <Link to="/our-faculty" className="hover:text-brand-gold transition-colors">
                  Our Faculty Mentors
                </Link>
              </li>
              <li>
                <Link to="/ca-coaching-kharghar" className="hover:text-brand-gold transition-colors">
                  Kharghar Center One
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-brand-gold transition-colors">
                  Courses Directory
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-gold transition-colors">
                  Contact Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Campus Location (From Live Website) */}
          <div className="lg:col-span-3 space-y-3 text-xs sm:text-sm">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2.5 font-sans">
              Contact &amp; Location
            </h4>
            <address className="not-italic text-slate-300 space-y-2.5 leading-relaxed">
              <p className="font-bold text-white">Shop No. 13 &amp; 14, Landmark CHS,</p>
              <p>Plot No. 22/23, Sector 12, Kharghar,</p>
              <p>Navi Mumbai, Maharashtra 410210</p>
              <p className="text-xs text-brand-gold-light">
                2 Mins Walk From Central Park Metro Station Gate 2
              </p>
              
              <div className="pt-2 space-y-1.5 border-t border-white/10">
                <a
                  href="mailto:enquiry@riituinstitution.com"
                  className="text-[#D49A18] hover:text-white font-bold flex items-center gap-2 text-xs sm:text-sm transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  <span>enquiry@riituinstitution.com</span>
                </a>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm pt-1">
                  <a
                    href="tel:+919512112938"
                    className="text-white hover:text-brand-gold font-bold flex items-center gap-1 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[15px] text-[#D49A18]">call</span>
                    <span>+91-9512112938</span>
                  </a>
                  <span className="text-white/20">|</span>
                  <a
                    href="tel:+919512129471"
                    className="text-white hover:text-brand-gold font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>+91-9512129471</span>
                  </a>
                </div>
              </div>
            </address>
          </div>

        </div>

        {/* Footer Sub-Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Riitu Institution. All Rights Reserved. Mentored by Fellow Chartered Accountants.</p>
          <div className="flex items-center gap-4">
            <span>Kharghar Sector 12</span>
            <span>•</span>
            <span>Navi Mumbai</span>
            <span>•</span>
            <span>Google Rating 4.9 ★★★★★</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
