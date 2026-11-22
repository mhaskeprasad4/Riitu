import React from 'react';
import { Link } from 'react-router-dom';

export default function BentoGrid() {
  return (
    <section className="py-24 bg-brand-surface border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-brand-lightgreen border border-emerald-300 text-brand-forest text-xs font-bold uppercase tracking-wider rounded-[3px]">
            <span className="w-1.5 h-1.5 bg-brand-forest inline-block"></span>
            <span>The Expert Mentorship Difference</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Engineered for First-Attempt Clearance. <br />
            <span className="italic font-normal text-brand-forest">The 15-Student Micro-Cohort Model.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            We rebuilt CA coaching from first principles. Here is why our cohorts consistently clear ICAI examinations at 3x the national benchmark.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Bento Card 1: 15-Student Ceiling */}
          <div className="md:col-span-8 bg-white p-5 sm:p-8 md:p-10 border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-brand-forest uppercase tracking-wider">
                  Cohort Density &amp; Accountability
                </span>
                <span className="text-xs font-bold bg-brand-lightgreen text-brand-forest px-2.5 py-1 rounded-[2px] border border-emerald-300">
                  Strict 15-Student Cap
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-3">
                The 15-Student Ceiling: Every Single Doubt Answered
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mb-8">
                In commercial 300-student auditorium halls, weak conceptual grasp remains hidden until the final ICAI marksheet arrives. In our 15-student cohorts, faculty monitor every student's journal entries, calculator habits, and homework mistakes daily in real time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100 text-xs">
              <div className="bg-brand-surface p-4 border border-slate-200 rounded-[3px]">
                <span className="text-slate-400 block text-[11px] font-bold uppercase tracking-wider">Faculty Ratio</span>
                <strong className="text-brand-forest text-base font-bold block mt-1">1 : 15 Direct</strong>
                <span className="text-slate-500 text-[11px] mt-0.5 block">No outsourced teaching</span>
              </div>
              <div className="bg-brand-surface p-4 border border-slate-200 rounded-[3px]">
                <span className="text-slate-400 block text-[11px] font-bold uppercase tracking-wider">Daily Corrections</span>
                <strong className="text-brand-forest text-base font-bold block mt-1">100% Verified</strong>
                <span className="text-slate-500 text-[11px] mt-0.5 block">Hand-graded homework</span>
              </div>
              <div className="bg-brand-surface p-4 border border-slate-200 rounded-[3px]">
                <span className="text-slate-400 block text-[11px] font-bold uppercase tracking-wider">Doubt Resolution</span>
                <strong className="text-brand-forest text-base font-bold block mt-1">Instant Daily</strong>
                <span className="text-slate-500 text-[11px] mt-0.5 block">Before leaving campus</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: 60%+ Pass Rate */}
          <div className="md:col-span-4 bg-brand-night text-white p-5 sm:p-8 md:p-10 border-2 border-[#D49A18]/40 rounded-[4px] shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block mb-4">
                Verified Clearance Record
              </span>
              <div className="text-5xl sm:text-6xl font-serif font-bold text-brand-gold leading-none">60%+</div>
              <h4 className="text-xl font-serif font-bold text-white mt-3">CA Intermediate Clearance</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                Consistently clearing at 3x higher than ICAI’s national pass average (~18%) across consecutive examination cycles.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 mt-6 text-xs text-slate-300">
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span>ICAI National Average:</span>
                <span className="text-slate-400 font-semibold">~18.2%</span>
              </div>
              <div className="flex justify-between py-1.5 text-brand-gold font-bold">
                <span>Riitu Institution Cohort:</span>
                <span>60.4%</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: 100% CA Faculty */}
          <div className="md:col-span-4 bg-white p-5 sm:p-7 md:p-8 border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-brand-forest uppercase tracking-wider block mb-3">
                Practitioner Experts
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Zero Junior Assistants</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every lecture, revision session, and paper correction is conducted solely by practicing Fellow CAs and senior educators. No interns, no fresh graduates.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-6">
              <span className="text-[11px] text-brand-gold-dark font-bold uppercase tracking-wider block">Pedigree Background</span>
              <span className="text-xs font-bold text-slate-800 mt-0.5 block">Ex-PwC • Ex-Deloitte • Ex-Disney</span>
            </div>
          </div>

          {/* Bento Card 4: 14-Day Bridge */}
          <div className="md:col-span-8 bg-white p-5 sm:p-7 md:p-8 border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-brand-forest uppercase tracking-wider">
                  Science-to-Commerce Transition
                </span>
                <span className="text-[11px] bg-amber-50 text-amber-900 px-2.5 py-0.5 border border-amber-200 font-bold rounded-[2px]">
                  14-Day Bootcamp
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-2">
                The 14-Day Science Bridge Engine
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Completed 12th in Science? You do not have to feel left behind. Our intensive 14-day pre-session bootcamp demystifies the rules of debit and credit from first mathematical principles.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 mt-6 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-500">30%+ of our CA rankers started originally with a Science background</span>
              <Link to="/ca-foundation" className="text-brand-forest font-bold hover:text-brand-gold transition-colors">
                View Bridge Curriculum →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
