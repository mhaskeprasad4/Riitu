import React from 'react';
import { Link } from 'react-router-dom';
import GoogleReviewsBadge from './GoogleReviewsBadge';

export default function PhilosophySection() {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mission, Academic Philosophy & Proof Points */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header Badge */}
            <div className="flex items-center gap-3.5 mb-2">
              <div className="bg-white p-1 rounded-[4px] border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
                <img
                  src="/assets/Riitu-Logo-Tight.png"
                  alt="Riitu Institution Official Brand Logo"
                  className="h-10 sm:h-11 w-auto object-contain"
                  onError={(e) => {
                    e.target.src = '/assets/Riitu-Institution-Logo.png';
                  }}
                />
              </div>
              <div className="border-l-2 border-[#0B3D2C]/25 pl-3">
                <span className="block text-base sm:text-lg font-serif font-bold text-[#0B3D2C] leading-none">
                  Riitu Institution
                </span>
                <span className="block text-[10px] font-bold text-[#D49A18] uppercase tracking-wider mt-0.5">
                  CA Academy
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="h-[32px] min-h-[32px] max-h-[32px] box-border leading-none inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px] shrink-0">
                <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
                <span>Academic Philosophy &amp; Concept Coaching</span>
              </div>
              <GoogleReviewsBadge variant="light" />
            </div>

            {/* Live Website Exact Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
              &ldquo;Think <span className="text-[#0B3D2C] underline decoration-[#D49A18] decoration-2 underline-offset-4">Beyond</span> Books,{' '}
              <span className="text-[#D49A18] italic font-normal">Learn For Life</span>&rdquo;
            </h2>

            <p className="text-lg font-serif font-semibold text-[#0B3D2C]">
              Concept Based Coaching for Academic Excellence
            </p>

            {/* Live Website Body Copy */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              We don&rsquo;t just teach &ndash; we mentor. Riitu Institution has been shaping careers in Navi Mumbai since our founding, helping students clear CA Foundation, Intermediate, CS, CMA exams and score distinctions in 11th&ndash;12th Commerce and B.Com through personal attention and expert guidance.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Expanding beyond commerce, we also provide Maths &amp; Science and English coaching for Classes 6 to 10 across all boards (CBSE, ICSE, and International Board). With experienced faculty and international exposure to IB curriculum in Canada, our school programs emphasize concept clarity, regular practice, doubt-solving, and scholarship opportunities to make learning both competitive and supportive.
            </p>

            {/* 4 Feature Cards with Distinct Borders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B3D2C] uppercase tracking-wider mb-1">
                  <span className="material-symbols-outlined text-base text-[#D49A18]">psychology</span>
                  <span>100% Concept First</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  First-principles reasoning instead of rote memorization, creating long-term analytical retention.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B3D2C] uppercase tracking-wider mb-1">
                  <span className="material-symbols-outlined text-base text-[#D49A18]">public</span>
                  <span>Global IB Exposure</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Faculty with international teaching experience in Canada bringing global rigor to school foundations.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B3D2C] uppercase tracking-wider mb-1">
                  <span className="material-symbols-outlined text-base text-[#D49A18]">groups</span>
                  <span>Strict 15-Seat Batches</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every student gets individual attention, daily doubt clarification, and custom study tracking.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B3D2C] uppercase tracking-wider mb-1">
                  <span className="material-symbols-outlined text-base text-[#D49A18]">verified</span>
                  <span>60%+ Pass Rate</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verified 3x national average clearance in CA Intermediate with All India Rank 25 benchmark.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a href="#demo-booking" className="btn-gold text-xs sm:text-sm px-6 py-3.5 shadow-sm">
                <span>Apply for Admission</span>
                <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
              </a>
              <Link to="/courses" className="btn-outline-forest text-xs sm:text-sm px-6 py-3.5">
                <span className="material-symbols-outlined text-[17px]">school</span>
                <span>View All Courses</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Visual Frame with Untitled-design-4-1.png */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Background Geometric Accent */}
              <div className="absolute -top-3 -right-3 w-full h-full bg-[#D49A18]/15 rounded-[4px] -z-10"></div>
              
              {/* Image Container Card */}
              <div className="bg-[#0D1B1E] p-4 sm:p-5 border-2 border-[#0B3D2C] rounded-[4px] shadow-xl text-white">
                
                {/* Card Top Label */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#D49A18] inline-block"></span>
                    <span className="font-serif font-bold text-[#D49A18] uppercase tracking-wider text-[11px]">
                      Riitu Institution
                    </span>
                  </div>
                  <span className="text-[10px] bg-white/10 text-slate-300 px-2 py-0.5 rounded-[2px] font-sans">
                    Concept Based Coaching
                  </span>
                </div>

                {/* The Featured Image: Untitled-design-4-1.png */}
                <div className="relative overflow-hidden rounded-[3px] bg-white border border-white/15">
                  <img
                    src="/assets/Untitled-design-4-1.png"
                    alt="Riitu Institution Concept Based Coaching"
                    className="w-full h-auto object-cover max-h-[460px] mx-auto block"
                    loading="lazy"
                  />
                  {/* Subtle caption banner */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0D1B1E] via-[#0D1B1E]/90 to-transparent p-4 text-white">
                    <p className="text-xs font-serif italic text-[#D49A18]">
                      &ldquo;Think Beyond Books, Learn For Life&rdquo;
                    </p>
                    <span className="text-[11px] text-slate-300 block mt-0.5 font-sans">
                      Mentoring CA, CS, CMA, Commerce &amp; Classes 6&ndash;10
                    </span>
                  </div>
                </div>

                {/* Card Footnote */}
                <div className="mt-4 p-3 bg-white/5 border border-white/10 rounded-[2px] flex items-center justify-between text-xs">
                  <span className="text-slate-300">Sector 12 Kharghar Center</span>
                  <span className="text-[#D49A18] font-bold">1:1 Mentorship Guaranteed</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
