import React from 'react';
import { Link } from 'react-router-dom';

const officialCourses = [
  {
    title: 'CA Foundation Cohort',
    path: '/ca-foundation',
    icon: 'school',
    iconBg: 'bg-emerald-100 text-emerald-800',
    subtitle: 'ICAI Jan & May • 14-Day Science Bridge',
    badge: '15 Seats',
  },
  {
    title: 'CA Intermediate (G1 & G2)',
    path: '/ca-intermediate',
    icon: 'workspace_premium',
    iconBg: 'bg-amber-100 text-amber-800',
    subtitle: '60%+ Pass Record • Big 4 CA Mentors',
    badge: '60%+ Pass',
  },
  {
    title: '11th & 12th Commerce Integrated',
    path: '/commerce-11th-12th',
    icon: 'calculate',
    iconBg: 'bg-blue-100 text-blue-800',
    subtitle: 'Board Exam Mastery + CA Foundation Overlap',
    badge: 'Dual Track',
  },
  {
    title: 'School Foundations (6th to 10th)',
    path: '/school-6th-10th',
    icon: 'auto_stories',
    iconBg: 'bg-rose-100 text-rose-800',
    subtitle: 'Maths & Science by M.Sc Gold Medalist',
    badge: 'Grades 6–10',
  },
  {
    title: 'CS Executive & CMA Prep',
    path: '/cs-cma',
    icon: 'gavel',
    iconBg: 'bg-cyan-100 text-cyan-800',
    subtitle: 'Corporate Law, Governance & Cost Auditing',
    badge: 'AIR 25',
  },
  {
    title: 'College Degree (B.Com / BMS)',
    path: '/college-bcom-bms',
    icon: 'account_balance',
    iconBg: 'bg-purple-100 text-purple-800',
    subtitle: 'Mumbai University Degree Coaching & Exam Prep',
    badge: 'Degree',
  },
];

export default function CourseSelectorGrid() {
  return (
    <section className="py-12 sm:py-16 bg-[#F8FAF9] border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="h-8 box-border inline-flex items-center gap-2 px-3 bg-[#EBF5F0] border border-emerald-300 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px] mb-2">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>Our Academic Programs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              Select Your Learning Cohort
            </h2>
          </div>
          <Link
            to="/courses"
            className="text-xs sm:text-sm font-bold text-[#0B3D2C] hover:text-[#D49A18] flex items-center gap-1 transition-colors shrink-0"
          >
            <span>View All 6 Programs Directory</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        {/* 2-Column Course Grid + Featured Callout Card (No text truncation & crisp borders!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left: 6 Official Courses in 2 Columns × 3 Rows (Clear borders, won't merge with background!) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {officialCourses.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="group bg-white border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] p-4 sm:p-5 flex items-center justify-between shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden"
              >
                <div className="flex items-center gap-3.5 min-w-0 pr-2">
                  <div
                    className={`w-10 h-10 rounded-[4px] ${item.iconBg} flex items-center justify-center shrink-0 shadow-2xs transition-transform group-hover:scale-105`}
                  >
                    <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-[#0B3D2C] transition-colors leading-tight">
                        {item.title}
                      </span>
                      <span className="hidden sm:inline-block text-[9px] font-bold uppercase tracking-wider text-[#D49A18] bg-amber-50 px-1.5 py-0.5 rounded-[2px] border border-amber-200 shrink-0">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 leading-normal">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-[#0B3D2C] group-hover:translate-x-1 transition-all shrink-0 ml-1">
                  chevron_right
                </span>
              </Link>
            ))}
          </div>

          {/* Right: The Featured Callout Card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#0B3D2C] via-[#082E21] to-[#051F16] text-white p-7 sm:p-8 rounded-[4px] shadow-lg border-2 border-[#D49A18]/40 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/10 border border-white/15 text-[#D49A18] text-[10px] font-bold uppercase tracking-wider rounded-[2px] mb-3.5">
                <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block"></span>
                <span>Micro Cohort Model</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                A Dedicated Space <br />
                <span className="text-[#D49A18] italic font-normal">For Your Career</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-3.5 leading-relaxed font-sans">
                Get direct 1-on-1 mentorship by practicing Fellow Chartered Accountants. Strict 15-student micro batches and zero mass auditoriums.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <a
                href="#demo-booking"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-[#FAF7F0] hover:bg-white text-[#0B3D2C] font-bold text-xs sm:text-sm rounded-[4px] shadow-sm hover:shadow transition-all group"
              >
                <span>Book Free Demo</span>
                <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-300 mt-3 font-medium">
                <span className="text-[#D49A18]">★ 4.9/5 Rating</span>
                <span>•</span>
                <span>185+ Verified Google Reviews</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
