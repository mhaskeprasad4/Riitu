import React from 'react';
import { Link } from 'react-router-dom';
import GoogleReviewsBadge from './GoogleReviewsBadge';

const programs = [
  {
    tag: 'Flagship Academic Track',
    name: 'CA Foundation Cohort',
    timing: 'Jan & May 2027 Attempts',
    desc: 'Complete 4-paper syllabus mastery with ICAI step-marking protocols, intensive homework reviews, and the 14-day Science Bridge module.',
    points: [
      'Led by CA Ritu Jain & CA Deepak Jain',
      '10+ Full-Length Proctored Mock Exams',
      'Strict 15-Student Batch Limit',
    ],
    path: '/ca-foundation',
    borderClass: 'border-slate-200',
  },
  {
    tag: '60%+ Verified Pass Record',
    name: 'CA Intermediate Cohort',
    timing: 'Group 1 & Group 2',
    desc: 'Advanced accounting, corporate laws, taxation, costing, and auditing led by senior practitioners from PwC, Deloitte, and Disney.',
    points: [
      'Costing & FM by CA Nikita Innani (Ex-Deloitte)',
      'Audit & Ethics by CA Vinaya Gundecha (Ex-PwC)',
      'Direct & Indirect Tax by CA Deepak Jain (FCA)',
    ],
    path: '/ca-intermediate',
    borderClass: 'border-brand-forest border-2',
    featured: true,
  },
  {
    tag: 'Dual Track Excellence',
    name: '11th & 12th Commerce',
    timing: 'Maharashtra State & CBSE',
    desc: 'Aim for 95%+ in Board exams while laying down 70% direct syllabus overlap for CA Foundation, saving a full academic year.',
    points: [
      'Book-Keeping from First Principles',
      'Weekly Sectional Chapter Evaluations',
      'Integrated CA Foundation Modules',
    ],
    path: '/commerce-11th-12th',
    borderClass: 'border-slate-200',
  },
  {
    tag: 'Foundational Rigor',
    name: 'School (6th to 10th)',
    timing: 'Cambridge, ICSE, CBSE, SSC',
    desc: 'Conceptual mathematics and science problem-solving frameworks that build rock-solid analytical acumen before high school.',
    points: [
      'Directed by Namrata Gupta, M.Sc (Gold Medalist)',
      'Intimate 10 to 12 Student Batches',
      'Weekly Conceptual Mastery Checks',
    ],
    path: '/school-6th-10th',
    borderClass: 'border-slate-200',
  },
  {
    tag: 'AIR 25 Rank Experts',
    name: 'CS & CMA Professional',
    timing: 'Executive & Inter Levels',
    desc: 'Intensive corporate law case drafting, statutory interpretations, cost accounting, and strategic financial management.',
    points: [
      'Corporate Law Interpretation Drills',
      'Cost & Management Accounting Mastery',
      'Direct Guidance by Practicing Professionals',
    ],
    path: '/cs-cma',
    borderClass: 'border-slate-200',
  },
  {
    tag: 'University Academic Track',
    name: 'B.Com & BMS Degree',
    timing: 'Mumbai University Curriculum',
    desc: 'Academic excellence for degree examinations with in-depth accounting, finance, taxation, and company law mentoring.',
    points: [
      'Financial Accounting & Advanced Costing',
      'Semester Exam Past Paper Reviews',
      'Tailored Timings for College Students',
    ],
    path: '/college-bcom-bms',
    borderClass: 'border-slate-200',
  },
];

export default function ProgramsGrid() {
  return (
    <section className="py-20 sm:py-24 bg-[#F8FAF9] border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3.5 mb-3">
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
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-2">
              <div className="h-[32px] min-h-[32px] max-h-[32px] box-border leading-none inline-flex items-center gap-2 px-3 bg-brand-lightgreen border border-emerald-300 text-brand-forest text-xs font-bold uppercase tracking-wider rounded-[3px] shrink-0">
                <span className="w-1.5 h-1.5 bg-brand-forest inline-block shrink-0"></span>
                <span>Academic Programs Directory</span>
              </div>
              <GoogleReviewsBadge variant="light" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900">
              Select Your Learning Cohort
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Trusted by 1,200+ students. Every cohort is capped strictly at 15 seats. Book a Free Demo to experience our classroom experts.
            </p>
          </div>
          <Link to="/courses" className="btn-outline-forest text-xs">
            <span>View All Batch Timings &amp; Schedules</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        {/* 6 Programs Grid with High-Contrast Borders & Architectural Top Accent */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className={`bg-white p-5 sm:p-7 md:p-8 rounded-[4px] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative ${
                prog.featured
                  ? 'border-2 border-[#0B3D2C] border-t-4 border-t-[#D49A18] shadow-md ring-1 ring-[#0B3D2C]/10'
                  : 'border-2 border-slate-200 hover:border-[#0B3D2C] border-t-4 border-t-[#0B3D2C] shadow-xs hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs font-bold">
                  <span
                    className={`px-2.5 py-1 rounded-[2px] uppercase tracking-wider text-[10px] shrink-0 ${
                      prog.featured
                        ? 'bg-brand-gold text-brand-night font-bold'
                        : 'bg-brand-lightgreen text-brand-forest'
                    }`}
                  >
                    {prog.tag}
                  </span>
                  <span className="text-slate-500 font-semibold text-xs shrink-0">{prog.timing}</span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">
                  {prog.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {prog.desc}
                </p>

                <div className="space-y-2.5 border-t border-slate-100 pt-5 text-xs text-slate-700">
                  {prog.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 bg-brand-forest rounded-[1px] inline-block shrink-0"></span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-8 flex items-center justify-between">
                <Link
                  to={prog.path}
                  className="text-xs font-bold text-brand-forest hover:text-brand-gold transition-colors"
                >
                  Curriculum Details →
                </Link>
                <a href="#demo-booking" className="btn-gold text-xs px-4 py-2.5">
                  Book Free Demo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
