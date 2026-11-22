import React from 'react';

const journeyStages = [
  {
    step: '01',
    stage: '6th – 10th School Foundations',
    subtitle: 'Build Strong Fundamentals & Analytical Logic',
    description:
      'Maths, Science, and English coaching across CBSE, ICSE, and International boards. Incorporates international IB curriculum exposure to develop critical thinking, problem-solving, and regular doubt clearance.',
    icon: 'menu_book',
    highlight: 'CBSE • ICSE • IB Exposure',
  },
  {
    step: '02',
    stage: '11th – 12th Commerce Integrated',
    subtitle: 'Develop Core Commerce Concepts & Board Mastery',
    description:
      'Master Accountancy, Economics, Business Studies, and Mathematics. Coordinated roadmap prepares students simultaneously for 95%+ board examination scores and early CA Foundation readiness.',
    icon: 'bar_chart',
    highlight: 'Target 95%+ Boards & Early CA Seed',
  },
  {
    step: '03',
    stage: 'CA / CS / CMA Professional Track',
    subtitle: 'Concept Clarity, High Clearance & Test Series',
    description:
      'Rigorous preparation led 100% by Fellow Chartered Accountants. Comprehensive ICAI study module coverage, daily mock questions, paper presentation mastery, and weekly diagnostic test series.',
    icon: 'workspace_premium',
    highlight: '60%+ Inter Pass • AIR 25 Benchmark',
  },
  {
    step: '04',
    stage: 'Career Success & Articleship',
    subtitle: 'Confidence, Discipline & Big 4 Placement',
    description:
      'One-on-one articleship interview guidance, resume mentoring, and corporate professional readiness that positions students for lucrative careers at PwC, Deloitte, EY, Disney, and leading institutions.',
    icon: 'military_tech',
    highlight: 'PwC • Deloitte • EY Readiness',
  },
];

export default function LearningJourneySection() {
  return (
    <section className="py-20 sm:py-24 bg-brand-surface border-b border-slate-200 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-3.5 mb-2">
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
            <div className="text-left border-l-2 border-[#0B3D2C]/25 pl-3">
              <span className="block text-base sm:text-lg font-serif font-bold text-[#0B3D2C] leading-none">
                Riitu Institution
              </span>
              <span className="block text-[10px] font-bold text-[#D49A18] uppercase tracking-wider mt-0.5">
                CA Academy
              </span>
            </div>
          </div>

          <div className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px] max-w-full">
            <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block shrink-0"></span>
            <span className="truncate">Comprehensive Student Pathway</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Student Learning Journey at <span className="text-[#0B3D2C]">Riitu Institution</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            We guide students step by step from school education to professional success &ndash; fostering deep conceptual clarity, academic discipline, and unwavering confidence.
          </p>
        </div>

        {/* 2-Column Grid: Featured Untitled-design-5-1.png Image + 4-Stage Pathway */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: The Live Journey Graphic (Untitled-design-5-1.png) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative overflow-hidden sm:overflow-visible">
              {/* Gold Offset Accent */}
              <div className="absolute -bottom-3 left-0 sm:-left-3 w-full h-full bg-[#0B3D2C]/10 rounded-[4px] -z-10"></div>
              
              <div className="bg-white p-4 sm:p-5 border-2 border-slate-200 rounded-[4px] shadow-lg">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs">
                  <span className="font-serif font-bold text-[#0B3D2C] uppercase tracking-wider text-[11px]">
                    The Riitu Roadmap
                  </span>
                  <span className="text-[10px] bg-[#D49A18]/20 text-[#0D1B1E] font-bold px-2 py-0.5 rounded-[2px]">
                    Step-by-Step Mentorship
                  </span>
                </div>

                {/* The Image: Untitled-design-5-1.png */}
                <div className="overflow-hidden rounded-[3px] border border-slate-200 bg-slate-50">
                  <img
                    src="/assets/Untitled-design-5-1.png"
                    alt="Student Learning Journey at Riitu Institution"
                    className="w-full h-auto object-cover max-h-[460px] mx-auto block hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-[2px] text-center">
                  <p className="text-xs text-slate-700 italic font-serif">
                    &ldquo;From fundamental school foundations to premier corporate Chartered Accountancy.&rdquo;
                  </p>
                  <a
                    href="#demo-booking"
                    className="mt-3 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 btn-gold text-xs font-bold"
                  >
                    <span>Book Free Demo Class</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Step-by-Step Journey Breakdown Cards */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            {journeyStages.map((stg) => (
              <div
                key={stg.step}
                className="p-5 sm:p-6 bg-white border-2 border-slate-200 rounded-[4px] shadow-xs hover:border-[#0B3D2C] hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  {/* Step Number Badge */}
                  <div className="w-12 h-12 bg-[#0B3D2C] text-[#D49A18] font-serif font-bold text-lg flex items-center justify-center rounded-[3px] shrink-0 group-hover:bg-[#D49A18] group-hover:text-[#0D1B1E] transition-colors">
                    {stg.step}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 group-hover:text-[#0B3D2C] transition-colors">
                        {stg.stage}
                      </h3>
                      <span className="inline-block text-[10px] font-bold text-[#D49A18] uppercase tracking-wider bg-[#D49A18]/10 px-2 py-0.5 rounded-[2px] w-fit">
                        {stg.highlight}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-[#0B3D2C] mb-2">
                      {stg.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {stg.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
