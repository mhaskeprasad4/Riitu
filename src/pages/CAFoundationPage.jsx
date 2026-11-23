import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import GoogleReviewsBadge from '../components/GoogleReviewsBadge';
import LiveCTASection from '../components/LiveCTASection';
import DemoBookingSection from '../components/DemoBookingSection';
import RelatedBlogGuides from '../components/RelatedBlogGuides';

export default function CAFoundationPage() {
  const caFoundationSchema = {
    '@type': 'Course',
    name: 'CA Foundation Coaching Classes in Kharghar Navi Mumbai',
    description:
      'Comprehensive coaching for ICAI CA Foundation examination cycles with a specialized 14-day bridge course for non-commerce and non-maths students. Strict 15-student micro batches taught 100% by practicing Fellow Chartered Accountants.',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Riitu Institution',
      sameAs: 'https://riituinstitution.com/',
    },
    educationalCredentialAwarded: 'ICAI CA Foundation Examination Qualification',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['onsite', 'online'],
      location: 'Shop No. 13 & 14, Landmark CHS, Sector 12, Kharghar, Navi Mumbai 410210',
    },
  };

  const foundationFaqSchema = {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the batch size for CA Foundation coaching at Riitu Institution?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every CA Foundation batch at Riitu Institution in Kharghar is strictly capped at 15 students to guarantee that every learner receives individual doubt-solving and personal faculty mentorship from practicing Chartered Accountants.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can science or non-maths students clear CA Foundation at Riitu Institution?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We run a dedicated 14-Day Science & Non-Maths Bridge Course before regular syllabus classes begin. Non-commerce students master double-entry bookkeeping, debit-credit logic, and foundational business math without exam anxiety.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who teaches the CA Foundation subjects at Riitu Institution?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All subjects are taught 100% by qualified senior Fellow Chartered Accountants (including CA Deepak Jain ex-PwC/Deloitte and CA Ritu Jain ex-EY/Disney). We do not employ junior tutors, trainee interns, or unverified guest speakers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is the CA Foundation coaching center located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our campus is located at Shop No. 13 & 14, Landmark CHS, Sector 12, Kharghar, Navi Mumbai 410210. It is just 2 minutes walking distance from Central Park Metro Station Gate 2.',
        },
      },
    ],
  };

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Academic Programs', path: '/courses' },
    { name: 'CA Foundation Cohort', path: '/ca-foundation' },
  ];

  return (
    <main className="pt-20 pb-16 bg-white font-sans text-slate-900">
      <SEOHead
        title="CA Foundation Coaching in Kharghar Navi Mumbai | 15-Student Micro Batch | Riitu Institution"
        description="Join Navi Mumbai's premier 15-student CA Foundation coaching in Kharghar Sector 12. Covers Accounting, Law & Math under Fellow CAs. Free Demo lecture!"
        canonicalPath="/ca-foundation"
        schema={[caFoundationSchema, foundationFaqSchema]}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation Bar */}
        <nav aria-label="Breadcrumb" className="py-4 text-xs font-medium text-slate-500">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="hover:text-[#0B3D2C] transition-colors">Home</Link>
            </li>
            <li><span className="text-slate-400">/</span></li>
            <li>
              <Link to="/courses" className="hover:text-[#0B3D2C] transition-colors">Academic Programs</Link>
            </li>
            <li><span className="text-slate-400">/</span></li>
            <li className="text-[#0B3D2C] font-semibold" aria-current="page">CA Foundation Cohort</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            
            {/* Brand Header */}
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-[3px] border border-slate-200 shadow-2xs">
                <img
                  src="/assets/Riitu-Logo-Tight.png"
                  alt="Riitu Institution CA Academy Logo"
                  className="h-9 w-auto object-contain"
                  onError={(e) => { e.target.src = '/assets/Riitu-Institution-Logo.png'; }}
                />
              </div>
              <div className="border-l-2 border-[#0B3D2C]/25 pl-3">
                <span className="block text-base font-serif font-bold text-[#0B3D2C] leading-none">Riitu Institution</span>
                <span className="block text-[10px] font-bold text-[#D49A18] uppercase tracking-wider mt-0.5">CA Academy</span>
              </div>
            </div>

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="h-[32px] min-h-[32px] max-h-[32px] box-border leading-none inline-flex items-center gap-2 px-3 bg-brand-lightgreen border border-emerald-300 text-brand-forest text-xs font-bold uppercase tracking-wider rounded-[3px] max-w-full">
                <span className="w-1.5 h-1.5 bg-brand-forest inline-block shrink-0"></span>
                <span className="truncate">ICAI Foundation • 15 Students Max</span>
              </div>
              <GoogleReviewsBadge variant="light" />
            </div>
            
            {/* Semantic H1 */}
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
              CA Foundation Coaching in Kharghar, Navi Mumbai: <br />
              <span className="italic font-normal text-brand-forest">Exclusive 15-Student Micro Cohort</span>
            </h1>
            
            {/* Opening Lead Paragraph (First 10% of Content with Focus Keyword) */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              Looking for premier <strong className="text-slate-900 font-semibold">CA Foundation coaching in Kharghar</strong> with individualized attention? Riitu Institution delivers complete coaching for the ICAI January and May examination cycles. We reject 300-student commercial auditorium halls in favor of intimate 15-student micro batches taught 100% by practicing senior Chartered Accountants, backed by a dedicated 14-day bridge course for non-commerce students.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#demo-booking" className="btn-gold text-xs px-6 py-3 shadow-sm hover:shadow">
                <span>Book Free 1-on-1 Demo Lecture</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
              <a href="tel:+919512112938" className="btn-outline-forest text-xs px-6 py-3">
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Call Admissions: +91-9512112938</span>
              </a>
            </div>

            {/* Reassurance Checklist */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium pt-1">
              <span className="flex items-center gap-1.5 font-bold text-slate-900">
                <span className="text-[#D49A18] font-bold">★</span> Trusted by 1,200+ Students
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Zero Financial Commitment Demo
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> 100% ICAI Study Material Alignment
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> 2 Min Walk from Central Park Metro
              </span>
            </div>

          </div>

          {/* Media Item 1: Hero Classroom Photo */}
          <div className="lg:col-span-5">
            <div className="border border-slate-200 rounded-[4px] p-2.5 bg-white shadow-xl">
              <img
                src="/assets/about-us-new-1.jpg"
                alt="CA Foundation coaching classes in Kharghar Navi Mumbai - Riitu Institution micro cohort"
                className="w-full h-auto object-cover rounded-[2px]"
              />
              <div className="p-3 bg-slate-50 rounded-[2px] mt-2 border border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-[#0B3D2C]">Classroom Kharghar Campus</span>
                <span className="text-slate-500">Shop 13 &amp; 14, Landmark CHS, Sec 12</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAST-TRACK TABLE OF CONTENTS (QUICK JUMP ANCHORS) */}
        <section className="mb-14 p-5 bg-[#F8FAF9] border-2 border-slate-200 rounded-[4px]">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-[#0B3D2C] text-[20px]">format_list_bulleted</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Quick Page Navigation</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs font-semibold">
            <a href="#curriculum" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              4 Papers Syllabus
            </a>
            <a href="#science-bridge" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              14-Day Bridge
            </a>
            <a href="#micro-batch-comparison" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              15-Student Model
            </a>
            <a href="#faculty-mentors" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Faculty Mentors
            </a>
            <a href="#center-logistics" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Kharghar Center
            </a>
            <a href="#faqs" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              FAQs &amp; Doubts
            </a>
          </div>
        </section>

        {/* AEO / AI CITATION FACT BOX (SEARCH ENGINE & AI OVERVIEW READY) */}
        <section className="mb-16 bg-brand-deep text-white p-7 sm:p-8 rounded-[4px] border border-brand-gold/30 shadow-lg">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D49A18] inline-block"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D49A18]">
                AEO Verified Program Facts • ICAI CA Foundation
              </span>
            </div>
            <span className="text-[11px] text-slate-300">Updated for 2026-27 Exams</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Class Size Cap</span>
              <span className="text-base font-bold text-white mt-0.5 block">Strict 15 Students Max</span>
              <p className="text-slate-300 mt-1 leading-normal">Zero mass auditoriums; every student doubt is addressed directly.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Mentorship Pedigree</span>
              <span className="text-base font-bold text-white mt-0.5 block">100% Fellow CAs</span>
              <p className="text-slate-300 mt-1 leading-normal">Mentored by CA Deepak Jain (ex-PwC) &amp; CA Ritu Jain (ex-EY, Disney).</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Subsequent Clearance</span>
              <span className="text-base font-bold text-white mt-0.5 block">60%+ CA Inter Record</span>
              <p className="text-slate-300 mt-1 leading-normal">Strong conceptual foundation yields 3x higher intermediate clearance.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Campus Location</span>
              <span className="text-base font-bold text-white mt-0.5 block">Sector 12 Kharghar</span>
              <p className="text-slate-300 mt-1 leading-normal">Landmark CHS, 2 min walk from Central Park Metro Station Gate 2.</p>
            </div>
          </div>
        </section>

        {/* SECTION 1: ICAI 4-PAPER CURRICULUM ARCHITECTURE */}
        <section id="curriculum" className="pt-6 mb-20 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>ICAI Syllabus Architecture 2026-27</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              ICAI CA Foundation 4-Paper Comprehensive Structure
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every paper is taught by qualified senior Chartered Accountants according to the latest <a href="https://www.icai.org" target="_blank" rel="noopener noreferrer" className="text-[#0B3D2C] font-semibold underline hover:text-[#D49A18]">ICAI New Scheme of Education and Training</a>, featuring exhaustive chapter notes, past RTPs, and ICAI step-marking drills.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-brand-forest uppercase tracking-wider">Paper 01</span>
                <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-[2px] border border-emerald-200">100 Marks</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">Accounting</h3>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Led personally by CA Ritu Jain. In-depth mastery of double entry bookkeeping, journal entries, ledger balancing, partnership accounts, inventory valuation, depreciation accounting, and preparation of final company financial statements.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <strong className="text-slate-700">Exam Mode:</strong> Descriptive Subjective (3 Hours)
              </div>
            </div>
            
            <div className="bg-white p-7 border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-brand-forest uppercase tracking-wider">Paper 02</span>
                <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-[2px] border border-emerald-200">100 Marks</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">Business Laws</h3>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Taught with structured case-law writing frameworks. Covers the Indian Regulatory Framework, Indian Contract Act 1872, Sale of Goods Act 1930, Indian Partnership Act 1932, Limited Liability Partnership Act 2008, and Companies Act 2013 fundamentals.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <strong className="text-slate-700">Exam Mode:</strong> Descriptive Case Studies (3 Hours)
              </div>
            </div>

            <div className="bg-white p-7 border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-brand-forest uppercase tracking-wider">Paper 03</span>
                <span className="text-[10px] font-bold bg-amber-50 text-amber-900 px-2 py-0.5 rounded-[2px] border border-amber-200">100 Marks (MCQ)</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">Quantitative Aptitude</h3>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Business Mathematics, Logical Reasoning, and Statistics. Includes speed-solving calculator hacks, time value of money, linear inequalities, probability distributions, index numbers, and correlation regression.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <strong className="text-slate-700">Exam Mode:</strong> Objective OMR with Negative Marking (2 Hours)
              </div>
            </div>

            <div className="bg-white p-7 border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-brand-forest uppercase tracking-wider">Paper 04</span>
                <span className="text-[10px] font-bold bg-amber-50 text-amber-900 px-2 py-0.5 rounded-[2px] border border-amber-200">100 Marks (MCQ)</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">Business Economics</h3>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Comprehensive micro and macro economics. Covers demand and supply analysis, consumer behavior, theory of production and cost, market structures, determination of national income, public finance, and international trade dynamics.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <strong className="text-slate-700">Exam Mode:</strong> Objective OMR with Negative Marking (2 Hours)
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: 14-DAY SCIENCE & NON-COMMERCE BRIDGE */}
        <section id="science-bridge" className="mb-20 scroll-mt-24 p-8 sm:p-10 bg-[#F8FAF9] border-2 border-slate-200 rounded-[4px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider rounded-[2px] border border-amber-300">
                <span>Unique Innovation</span>
                <span>•</span>
                <span>For 12th Science &amp; Non-Maths Students</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                The 14-Day Science &amp; Non-Maths Foundational Bridge Module
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Over 35% of aspiring Chartered Accountants come from a non-commerce or 12th Science background. In large 300-student commercial institutes, these students fall behind within week one because faculty assume everyone already knows debit, credit, and journal entries.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                At Riitu Institution, our 14-Day Bridge Module provides non-commerce entrants with intensive, zero-pressure foundational grounding:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium pt-1">
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> Double-Entry Logic from Ground Zero
                </li>
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> Real-World Business Transaction Mapping
                </li>
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> Calculator Speed-Solving Shortcuts
                </li>
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> Elimination of Commerce Math Phobia
                </li>
              </ul>
            </div>

            {/* Media Item 2: Concept Coaching Graphic */}
            <div className="lg:col-span-5">
              <div className="bg-white p-3 border-2 border-slate-200 rounded-[4px] shadow-sm">
                <img
                  src="/assets/Untitled-design-4-1.png"
                  alt="14-Day Science Bridge Concept Coaching for CA Foundation at Riitu Institution Kharghar"
                  className="w-full h-auto object-cover rounded-[2px]"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: 15-STUDENT MICRO COHORT FORMULA VS COMMERCIAL AUDITORIUMS (COMPARISON TABLE) */}
        <section id="micro-batch-comparison" className="mb-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>The Accountability Difference</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Why 15-Student Micro Batches Produce Higher Pass Rates
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              A transparent comparison between Riitu Institution's micro cohort and commercial mass coaching classes in Mumbai.
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-2 sm:hidden">
            <span className="material-symbols-outlined text-[15px] text-[#0B3D2C]">swap_horiz</span>
            <span>Scroll horizontally to view full comparison</span>
          </div>

          <div className="overflow-x-auto border-2 border-slate-200 rounded-[4px] shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm font-sans min-w-[560px]">
              <thead className="bg-[#0B3D2C] text-white">
                <tr>
                  <th className="py-4 px-5 font-semibold">Evaluation Parameter</th>
                  <th className="py-4 px-5 font-bold text-[#D49A18] bg-[#082E21]">Riitu Institution (Kharghar)</th>
                  <th className="py-4 px-5 font-semibold text-slate-200">Commercial Coaching Brands</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Batch Size Limit</td>
                  <td className="py-3.5 px-5 font-bold text-[#0B3D2C] bg-emerald-50/50">Strictly 15 Students Maximum</td>
                  <td className="py-3.5 px-5 text-slate-600">200 to 350 Students in Packed Halls</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Teaching Faculty</td>
                  <td className="py-3.5 px-5 font-bold text-[#0B3D2C] bg-emerald-50/50">100% Senior Fellow CAs (Ex-PwC/Deloitte)</td>
                  <td className="py-3.5 px-5 text-slate-600">Junior Tutors &amp; Semi-Qualified Interns</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Doubt Solving</td>
                  <td className="py-3.5 px-5 font-bold text-[#0B3D2C] bg-emerald-50/50">Daily 1-on-1 Direct Face-to-Face</td>
                  <td className="py-3.5 px-5 text-slate-600">Outsourced WhatsApp Groups / Unanswered</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Diagnostic Mock Tests</td>
                  <td className="py-3.5 px-5 font-bold text-[#0B3D2C] bg-emerald-50/50">Weekly Step-Marked with Error Feedback</td>
                  <td className="py-3.5 px-5 text-slate-600">Only 1–2 Prelims near Final Exams</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Non-Commerce Support</td>
                  <td className="py-3.5 px-5 font-bold text-[#0B3D2C] bg-emerald-50/50">Included 14-Day Bridge Module</td>
                  <td className="py-3.5 px-5 text-slate-600">No Bridge; Assumes Commerce Background</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Classroom Environment</td>
                  <td className="py-3.5 px-5 font-bold text-[#0B3D2C] bg-emerald-50/50">AC Mentorship Pods &amp; ICAI Reference Library</td>
                  <td className="py-3.5 px-5 text-slate-600">Cramped Benches &amp; Projector Screens</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 4: FACULTY MENTORS SPOTLIGHT */}
        <section id="faculty-mentors" className="mb-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>100% Chartered Accountant Mentors</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Meet Your CA Foundation Mentors
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Direct access to practicing Fellow Chartered Accountants with Big 4 corporate backgrounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-7 border-2 border-slate-200 rounded-[4px] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <span className="text-xs font-bold text-[#0B3D2C] uppercase tracking-wider">Accounting Specialist</span>
                  <span className="text-[10px] font-bold bg-[#D49A18]/20 text-amber-900 px-2 py-0.5 rounded-[2px]">EY &amp; Disney Alum</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900">CA Ritu Jain</h3>
                <span className="text-xs font-bold text-slate-500 block mt-0.5">FCA, DISA, Co-Founder</span>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  CA Ritu Jain leads Paper 1 (Accounting) and conceptual ledger logic. With over a decade of executive financial advisory experience at EY Tax Consulting and The Walt Disney Company, she transforms accounting from mechanical balance sheets into practical corporate reasoning.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                <span>Personal Doubt Clearing: Daily</span>
                <Link to="/our-faculty" className="text-[#0B3D2C] font-bold hover:underline">View Bio →</Link>
              </div>
            </div>

            <div className="bg-white p-7 border-2 border-slate-200 rounded-[4px] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <span className="text-xs font-bold text-[#0B3D2C] uppercase tracking-wider">Corporate Advisory &amp; Laws</span>
                  <span className="text-[10px] font-bold bg-[#D49A18]/20 text-amber-900 px-2 py-0.5 rounded-[2px]">PwC &amp; Deloitte Alum</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900">CA Deepak Jain</h3>
                <span className="text-xs font-bold text-slate-500 block mt-0.5">FCA, Co-Founder</span>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  CA Deepak Jain mentors Paper 2 (Business Laws) and regulatory frameworks. Drawing on senior leadership stints at PwC Statutory Audit and Deloitte Advisory, he equips students with structured case-law presentation formats required to score 70+ in ICAI evaluations.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                <span>Personal Doubt Clearing: Daily</span>
                <Link to="/our-faculty" className="text-[#0B3D2C] font-bold hover:underline">View Bio →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: KHARGHAR CENTER LOGISTICS & TRANSIT */}
        <section id="center-logistics" className="mb-20 scroll-mt-24 p-8 sm:p-10 bg-[#0D1B1E] text-white rounded-[4px] border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#D49A18] text-xs font-bold uppercase tracking-wider rounded-[2px] border border-white/15">
                <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block"></span>
                <span>Hyper-Local Accessibility • Sector 12 Kharghar</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Kharghar Sector 12 Campus: Prime Transit Hub
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Located in Landmark CHS, our physical coaching campus offers peaceful, air-conditioned study pods, a dedicated reference library, and silent revision zones away from highway noise.
              </p>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D49A18] text-[18px] shrink-0">train</span>
                  <span><strong className="text-white">Navi Mumbai Metro:</strong> Exactly 2 minutes walking distance from Central Park Metro Station (Gate 2).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D49A18] text-[18px] shrink-0">directions_bus</span>
                  <span><strong className="text-white">Bus &amp; Auto Connectivity:</strong> Direct auto stands from Utsav Chowk, Shilp Chowk, and Kharghar Railway Station (Harbour Line).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D49A18] text-[18px] shrink-0">location_on</span>
                  <span><strong className="text-white">Exact Address:</strong> Shop No. 13 &amp; 14, Landmark CHS, Plot No. 22/23, Sector 12, Kharghar, Navi Mumbai 410210.</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Shop+No.+13+and+14+Landmark+CHS+Sector+12+Kharghar+Navi+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0B3D2C] font-bold text-xs rounded-[3px] hover:bg-[#D49A18] hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">map</span>
                  <span>Open Campus in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Media Item 3: Media photo / student learning journey */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-white/10 p-3 rounded-[4px]">
                <img
                  src="/assets/WhatsApp-Image-2026-03-31-at-3.17.05-PM.jpeg"
                  alt="Students attending CA Foundation mentorship session in Kharghar Sector 12 campus"
                  className="w-full h-auto object-cover rounded-[2px]"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 6: FREQUENTLY ASKED QUESTIONS */}
        <section id="faqs" className="mb-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>Common Student Queries</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              CA Foundation Coaching: FAQs
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Direct answers to student and parent queries regarding batches, fees, and syllabus preparation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>What is the batch size for CA Foundation coaching at Riitu Institution?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">15 Max</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Every cohort is capped strictly at 15 students. This ensures no student gets lost in the crowd and faculty can monitor individual test progression weekly.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>Can science or non-maths students clear CA Foundation here?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">14-Day Bridge</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Yes. We run a dedicated 14-Day Science &amp; Non-Maths Bridge Course before regular syllabus classes begin, establishing debit/credit fundamentals and basic business math.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>Who teaches the CA Foundation subjects?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">100% CAs</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                All subjects are taught 100% by qualified Fellow Chartered Accountants with Big 4 corporate backgrounds. We never outsource to junior interns or college tutors.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>How can I book a Free Demo lecture?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Online / Call</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                You can book a Free 1-on-1 Demo lecture directly on this page or call our Senior Counselor at <a href="tel:+919512112938" className="text-[#0B3D2C] font-bold hover:underline">+91-9512112938</a> with zero financial commitment.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Related Academic Guides for CA Foundation */}
      <RelatedBlogGuides
        slugs={[
          'how-to-prepare-for-ca-foundation-after-12th',
          'science-to-ca-foundation-bridge-strategy',
          'best-ca-coaching-in-kharghar-navi-mumbai',
        ]}
        title="Recommended CA Foundation Study Guides & Strategies"
        subtitle="In-depth roadmap articles, study timetables, and science-bridge tips written by CA Ritu Jain and CA Deepak Jain."
        badge="Foundation Prep Insights"
      />

      {/* Live CTA Section */}
      <LiveCTASection />

      {/* Free Demo Booking Section */}
      <div className="mt-4">
        <DemoBookingSection />
      </div>
    </main>
  );
}
