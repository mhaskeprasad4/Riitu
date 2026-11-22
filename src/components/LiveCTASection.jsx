import React from 'react';
import GoogleReviewsBadge from './GoogleReviewsBadge';

export default function LiveCTASection() {
  return (
    <section className="bg-[#ECEEEF] border-y border-slate-300 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Column: CA Ritu Jain - Anchored cleanly at the bottom edge with ZERO card boxes or rectangular shadows */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end self-end order-2 lg:order-1 pt-6 sm:pt-8 lg:pt-10">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px] flex justify-center items-end">
              <img
                src="/assets/ritu-pointing-tight.png"
                alt="CA Ritu Jain - Start Your Commerce Journey"
                className="w-full h-auto max-h-[380px] sm:max-h-[440px] lg:max-h-[490px] object-contain object-bottom block"
                onError={(e) => {
                  e.target.src = '/assets/live-cta-banner.png';
                }}
              />
            </div>
          </div>

          {/* Right Column: Prominent Logo, Official Typography & Golden CTA Button */}
          <div className="lg:col-span-7 py-10 sm:py-14 lg:py-16 text-center lg:text-left space-y-5 order-1 lg:order-2">
            
            {/* BIG PROMINENT RIITU INSTITUTION LOGO BRAND HEADER */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="bg-white p-2 rounded-[4px] border border-slate-200/90 shadow-sm flex items-center justify-center shrink-0">
                <img
                  src="/assets/Riitu-Logo-Tight.png"
                  alt="Riitu Institution Official Brand Logo"
                  className="h-14 sm:h-16 md:h-18 w-auto object-contain"
                  onError={(e) => {
                    e.target.src = '/assets/Riitu-Institution-Logo.png';
                  }}
                />
              </div>
              <div className="text-left border-l-2 border-[#0B3D2C]/25 pl-3.5">
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#0B3D2C] leading-none">
                  Riitu Institution
                </span>
                <span className="block text-xs sm:text-sm font-bold text-[#D49A18] uppercase tracking-wider mt-1">
                  CA Academy
                </span>
              </div>
            </div>

            {/* Main Headline: Matched exactly to live website font & colors */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-sans font-extrabold tracking-tight leading-[1.12]">
              <span className="text-[#0B3D2C] block">
                Start Your Journey
              </span>
              <span className="text-[#0B3D2C]">Towards A </span>
              <span className="text-[#D49A18]">Successful</span>
              <span className="text-[#D49A18] block sm:inline">
                {' '}Commerce Career
              </span>
            </h2>

            {/* Description Subtext */}
            <p className="text-slate-700 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Join 1,200+ students who chose personal CA mentorship over mass lecture halls. 100% direct mentorship by practicing Fellow Chartered Accountants, 60%+ first-attempt clearance record, and zero-fee demo lectures.
            </p>

            {/* Golden CTA Button + Google Reviews Trust Badge */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#demo-booking"
                className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 bg-[#D49A18] hover:bg-[#B88210] text-white font-bold text-sm sm:text-base tracking-wide rounded-[4px] shadow-sm hover:shadow transition-all duration-200"
              >
                <span>Book Free Demo Lecture</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <GoogleReviewsBadge variant="light" />
            </div>

            {/* Reassurance Checklist with 1200+ Students Social Proof */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-600 pt-2 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block rounded-[1px]"></span>
                <strong className="text-slate-900 font-bold">Trusted by 1,200+ Students</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block rounded-[1px]"></span>
                Strict 15-Student Micro Batches
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block rounded-[1px]"></span>
                Sector 12 Kharghar (Metro Gate 2)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block rounded-[1px]"></span>
                Zero Commitment Required
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
