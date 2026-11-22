import React, { useState } from 'react';

const faqs = [
  {
    category: 'General',
    q: 'What is Riitu Institution and where are you located?',
    a: 'Riitu Institution is a premier commerce and professional coaching academy in Navi Mumbai, dedicated to mentoring students across school programs (Classes 6–10, Maths & Science, English across all boards), commerce streams (11th–12th), and professional courses (CA Foundation, CA Intermediate, CS, CMA, B.Com, BMS, BAF). We are located at Shop No. 13 & 14, Landmark CHS, Plot No. 22/23, Sector 12, Kharghar, Navi Mumbai 410210 (2 minutes from Central Park Metro Gate 2).',
  },
  {
    category: 'Advantage',
    q: 'What makes Riitu Institution different from other coaching institutes?',
    a: 'Several key factors set us apart: (1) Strict 15-student micro batches where every single student receives individual attention; (2) 100% direct mentorship from practicing Fellow Chartered Accountants, not junior tutors or unverified interns; (3) Proven results including a 60%+ CA Intermediate pass rate (vs ~18% ICAI average) and All India Rank 25 in CS; (4) Flexible learning modes (Classroom, Online, Livestream, Recorded); (5) Weekly chapter-wise diagnostic tests with personalized evaluation feedback.',
  },
  {
    category: 'Admissions',
    q: 'How Do I Take Admission at Riitu Institution?',
    a: 'The admission process is straightforward and transparent: 1. Book a Free Demo Lecture online or call +91-9512112938. 2. Attend an interactive classroom or online lecture to experience our concept-based methodology. 3. Have a 1-on-1 counseling session with CA Deepak Jain or CA Ritu Jain to review your academic diagnostic roadmap. 4. Complete admission enrollment before batch seats reach the strict 15-student ceiling.',
  },
  {
    category: 'Professional',
    q: 'Do you provide coaching for CA Foundation and CA Intermediate?',
    a: 'Yes, CA coaching is our core specialization. For CA Foundation, we cover Accounting, Business Laws, Quantitative Aptitude, and Business Economics. For CA Intermediate, we cover all Group 1 and Group 2 papers: Advanced Accounting, Corporate Laws, Taxation (Direct & GST), Cost & Management Accounting, Auditing & Ethics, and Financial Management & Strategic Management.',
  },
  {
    category: 'Professional',
    q: 'What professional courses are offered for aspiring Chartered Accountants and Company Secretaries?',
    a: 'We offer comprehensive coaching for CA Foundation, CA Intermediate, CS Executive, CS CSEET, and CMA Intermediate. All programs feature rigorous mock exam series, ICAI/ICSI study material alignment, corporate case study discussions, and personalized paper presentation workshops.',
  },
  {
    category: 'School',
    q: 'What school-level programs are available at Riitu Institution?',
    a: 'We provide specialized coaching for Classes 6 to 10 in Mathematics, Science, and English across CBSE, ICSE, SSC, and International Boards (IB / Cambridge). Led by Namrata Gupta (M.Sc Gold Medalist with IB curriculum exposure in Canada), our school programs focus on foundational conceptual clarity, analytical thinking, and school examination excellence.',
  },
  {
    category: 'Commerce',
    q: 'What commerce courses do you provide for higher grades?',
    a: 'We offer comprehensive coaching for 11th & 12th Commerce across CBSE, ISC, and Maharashtra State Board. Subjects include Book Keeping & Accountancy, Economics, Business Studies / Organization of Commerce, and Mathematics. Our curriculum aligns board exam preparation with early foundational seeds for CA Foundation.',
  },
  {
    category: 'College',
    q: 'Do you provide college-level courses (B.Com, BMS, BAF, BBA)?',
    a: 'Yes, we conduct dedicated classes for B.Com, BMS, BAF, and BBA across FY, SY, and TY semesters. We help college students master Financial Accounting, Cost Accounting, Direct & Indirect Taxes, Financial Management, and Auditing with corporate clarity.',
  },
  {
    category: 'Batches',
    q: 'How are batches conducted at Riitu Institution?',
    a: 'We maintain strict small batch sizes (capped at 15 students) to guarantee individual attention. Each lecture is carefully structured to include: Concept teaching for strong fundamentals; Live practice sessions to reinforce learning; Dedicated doubt-solving for 100% clarity; Structured revision modules for retention; Regular timed tests to track exam readiness.',
  },
  {
    category: 'Admissions',
    q: 'Do you offer demo lectures before admission?',
    a: 'Yes! We offer 100% Free Demo Lectures with zero financial commitment. Students and parents can experience our teaching methodology, inspect our classroom environment and reference library, and interact directly with our CA faculty before enrolling.',
  },
  {
    category: 'Tuition',
    q: 'Do you offer private / individual 1-on-1 tuition?',
    a: 'Yes, customized private tuition is available for CA Foundation, CA Intermediate, 11th & 12th Commerce, and Classes 6 to 10 (Maths & Science, English across all boards). Private sessions can be conducted at our Kharghar center or online, with timings customized to the student’s schedule.',
  },
  {
    category: 'Batches',
    q: 'Do you conduct tests and performance tracking?',
    a: 'Yes, regular testing is a core pillar of our academic system. We conduct weekly chapter-wise tests, periodic cumulative tests, and full-length exam-style preliminary examinations. Papers are evaluated with detailed commentary on presentation and step-marking, and progress reports are shared with parents.',
  },
  {
    category: 'Advantage',
    q: 'What makes Riitu Institution’s courses unique?',
    a: 'Our courses are led by CA-qualified practitioners with real corporate experience at Big 4 firms (PwC, Deloitte, EY, Disney). We provide dedicated doubt-solving, small cohorts, library facilities, and an educational philosophy summarized by our motto: "Think Beyond Books, Learn For Life".',
  },
  {
    category: 'Batches',
    q: 'Are there any short-term or crash courses available?',
    a: 'Yes. We offer specially designed fast-track crash courses and pre-exam booster batches for students needing rapid revision, formula consolidation, and intensive mock test practice before university or ICAI exams.',
  },
  {
    category: 'School',
    q: 'Do you provide coaching for all subjects for 6th to 10th?',
    a: 'Yes, we provide coaching for all core subjects including Mathematics, Science (Physics, Chemistry, Biology), English, and Social Studies for 6th to 10th standard students across all boards with experienced faculty.',
  },
];

const categories = ['All', 'General', 'Professional', 'School', 'Commerce', 'Admissions', 'Batches'];

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = activeCategory === 'All'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 sm:py-24 bg-brand-surface border-b border-slate-200 font-sans" id="faqs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
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

          <div className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-[10.5px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-wider rounded-[3px]">
            <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block shrink-0"></span>
            <span>Parent &amp; Student Questions Answered</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Frequently Asked <span className="text-[#0B3D2C]">Questions</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            Still have questions? Get quick guidance on CA coaching, course structures, schedules, and everything you need to start your journey.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-3 py-2 sm:px-3.5 sm:py-2 text-xs font-semibold rounded-[3px] transition-all min-h-[38px] flex items-center ${
                activeCategory === cat
                  ? 'bg-[#0B3D2C] text-white shadow-xs font-bold'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-[#0B3D2C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block shrink-0"></span>
                    <span className="text-sm sm:text-base font-serif font-bold text-slate-900">
                      {faq.q}
                    </span>
                  </div>
                  <span
                    className={`material-symbols-outlined text-slate-400 text-xl shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#0B3D2C]' : ''
                    }`}
                  >
                    keyboard_arrow_down
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help Card */}
        <div className="mt-12 p-6 sm:p-8 bg-[#0D1B1E] text-white rounded-[4px] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-serif font-bold text-white">
              Have a specific question not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with CA Deepak Jain or CA Ritu Jain at our Kharghar center.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:+919512112938"
              className="btn-gold text-xs px-5 py-3 shadow-xs"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              <span>+91-9512112938</span>
            </a>
            <a
              href="mailto:enquiry@riituinstitution.com"
              className="btn-ghost-dark text-xs px-5 py-3"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>enquiry@riituinstitution.com</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
