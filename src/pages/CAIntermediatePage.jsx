import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import GoogleReviewsBadge from '../components/GoogleReviewsBadge';
import LiveCTASection from '../components/LiveCTASection';
import DemoBookingSection from '../components/DemoBookingSection';

export default function CAIntermediatePage() {
  const caInterSchema = {
    '@type': 'Course',
    name: 'CA Intermediate Classes in Navi Mumbai & Kharghar (Group 1 & Group 2)',
    description:
      'Rigorous CA Intermediate coaching in Navi Mumbai delivering a verified 60%+ first-attempt clearance record vs 18% national average. 15-student micro batches taught 100% by practicing senior Chartered Accountants from PwC, Deloitte & Disney.',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Riitu Institution',
      sameAs: 'https://riituinstitution.com/',
    },
    educationalCredentialAwarded: 'ICAI CA Intermediate Examination Preparation',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['onsite', 'online'],
      location: 'Shop No. 13 & 14, Landmark CHS, Sector 12, Kharghar, Navi Mumbai 410210',
    },
  };

  const interFaqSchema = {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Riitu Institution’s pass percentage for CA Intermediate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Riitu Institution consistently produces a verified 60%+ first-attempt clearance rate in CA Intermediate Group 1 and Group 2, compared to the national ICAI average of approximately 15% to 18%.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are batches capped at 15 students for CA Intermediate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every CA Intermediate cohort is capped strictly at 15 students. This ensures that every student’s answers, mock tests, and case-study presentations are evaluated individually by Fellow CAs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you cover both Group 1 and Group 2 under the new ICAI syllabus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We provide complete coaching for all 6 papers under the ICAI New Scheme: Advanced Accounting, Corporate & Other Laws, Taxation (Direct & Indirect), Cost & Management Accounting, Auditing & Ethics, and FM & SM.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is the CA Intermediate coaching campus located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The campus is located at Shop No. 13 & 14, Landmark CHS, Sector 12, Kharghar, Navi Mumbai 410210, just 2 minutes from Central Park Metro Station Gate 2.',
        },
      },
    ],
  };

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Academic Programs', path: '/courses' },
    { name: 'CA Intermediate Cohort', path: '/ca-intermediate' },
  ];

  return (
    <main className="pt-20 pb-16 bg-white font-sans text-slate-900">
      <SEOHead
        title="CA Intermediate Classes in Navi Mumbai & Kharghar | 60%+ Pass Rate | Riitu Institution"
        description="Join Navi Mumbai's #1 CA Intermediate classes in Kharghar Sector 12. Strict 15-student cohorts, 100% Fellow CAs, verified 60%+ pass record. Book Free Demo today!"
        canonicalPath="/ca-intermediate"
        schema={[caInterSchema, interFaqSchema]}
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
            <li className="text-[#0B3D2C] font-semibold" aria-current="page">CA Intermediate Cohort</li>
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
                <span className="truncate">60%+ Pass Record • Group 1 &amp; Group 2</span>
              </div>
              <GoogleReviewsBadge variant="light" />
            </div>
            
            {/* Semantic H1 */}
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
              CA Intermediate Classes in Navi Mumbai &amp; Kharghar: <br />
              <span className="italic font-normal text-brand-forest">The 15-Student Micro Cohort</span>
            </h1>
            
            {/* Opening Lead Paragraph (First 10% of Content with Focus Keyword) */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              Searching for the highest-clearing <strong className="text-slate-900 font-semibold">CA Intermediate classes in Navi Mumbai</strong> and Kharghar? Riitu Institution delivers specialized preparation for ICAI Group 1 and Group 2 examinations. While national clearance drops to ~18%, our intimate 15-student micro batches taught by senior Fellow Chartered Accountants achieve a verified <strong className="text-[#0B3D2C] font-semibold">60%+ first-attempt clearance record</strong>.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#demo-booking" className="btn-gold text-xs px-6 py-3 shadow-sm hover:shadow">
                <span>Book Free 1-on-1 Demo Lecture</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
              <a href="tel:+919512112938" className="btn-outline-forest text-xs px-6 py-3">
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Speak with CA Deepak Jain: +91-9512112938</span>
              </a>
            </div>

            {/* Reassurance Checklist */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium pt-1">
              <span className="flex items-center gap-1.5 font-bold text-slate-900">
                <span className="text-[#D49A18] font-bold">★</span> Trusted by 1,200+ Students
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> 60%+ Verified Inter Pass Rate
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Weekly ICAI Step-Marking Tests
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> 2 Mins Walk from Central Park Metro
              </span>
            </div>

          </div>

          {/* Media Item 1: Hero Classroom Photo */}
          <div className="lg:col-span-5">
            <div className="border border-slate-200 rounded-[4px] p-2.5 bg-white shadow-xl">
              <img
                src="/assets/about-us-new-2.jpg"
                alt="CA Intermediate coaching classes in Navi Mumbai - Riitu Institution Kharghar cohort"
                className="w-full h-auto object-cover rounded-[2px]"
              />
              <div className="p-3 bg-slate-50 rounded-[2px] mt-2 border border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-[#0B3D2C]">Kharghar Sector 12 Center</span>
                <span className="text-slate-500">Shop 13 &amp; 14, Landmark CHS</span>
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
              G1 &amp; G2 Syllabus
            </a>
            <a href="#pass-rate-formula" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              60% Formula
            </a>
            <a href="#micro-batch-comparison" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              15-Seat Model
            </a>
            <a href="#faculty-mentors" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Big 4 Mentors
            </a>
            <a href="#center-logistics" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Transit &amp; Center
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
                AEO Verified Program Facts • ICAI CA Intermediate
              </span>
            </div>
            <span className="text-[11px] text-slate-300">Updated for 2026-27 Exams</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">First-Attempt Clearance</span>
              <span className="text-base font-bold text-white mt-0.5 block">60%+ Pass Rate</span>
              <p className="text-slate-300 mt-1 leading-normal">Compared to national ICAI average of ~15% to 18%.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Batch Size Cap</span>
              <span className="text-base font-bold text-white mt-0.5 block">Strictly 15 Seats</span>
              <p className="text-slate-300 mt-1 leading-normal">No auditorium crowds; intensive individual doubt-solving.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Faculty Background</span>
              <span className="text-base font-bold text-white mt-0.5 block">PwC, Deloitte, EY, Disney</span>
              <p className="text-slate-300 mt-1 leading-normal">100% Fellow Chartered Accountants with zero interns.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Campus Access</span>
              <span className="text-base font-bold text-white mt-0.5 block">Sector 12 Kharghar</span>
              <p className="text-slate-300 mt-1 leading-normal">2 minutes walk from Central Park Metro Gate 2.</p>
            </div>
          </div>
        </section>

        {/* SECTION 1: ICAI 6-PAPER CURRICULUM ARCHITECTURE */}
        <section id="curriculum" className="pt-6 mb-20 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>ICAI New Scheme Architecture 2026-27</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              CA Intermediate 6-Paper Comprehensive Structure
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Fully aligned with the <a href="https://www.icai.org" target="_blank" rel="noopener noreferrer" className="text-[#0B3D2C] font-semibold underline hover:text-[#D49A18]">ICAI New Scheme</a>. Both Group 1 and Group 2 are taught by senior Fellow CAs with corporate practice exposure.
            </p>
          </div>

          {/* Group 1 & Group 2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Group 1 Card */}
            <div className="bg-white border-2 border-slate-200 rounded-[4px] p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B3D2C]">Group 1 Papers</span>
                <span className="text-[10px] font-bold bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-[2px] border border-emerald-200">300 Marks</span>
              </div>
              <div className="space-y-4">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-[3px]">
                  <span className="text-xs font-bold text-brand-forest uppercase">Paper 01</span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">Advanced Accounting (100 Marks)</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Consolidation of accounts, amalgamation, branch accounting, and detailed Accounting Standards (AS) analysis.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-[3px]">
                  <span className="text-xs font-bold text-brand-forest uppercase">Paper 02</span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">Corporate &amp; Other Laws (100 Marks)</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Companies Act 2013, management &amp; administration, declaration of dividend, accounts of companies, audit &amp; auditors, plus FEMA and General Clauses Act.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-[3px]">
                  <span className="text-xs font-bold text-brand-forest uppercase">Paper 03</span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">Taxation (100 Marks)</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Section A: Income-Tax Law (50 Marks) + Section B: Goods and Services Tax (GST) (50 Marks) with practical return case studies.
                  </p>
                </div>
              </div>
            </div>

            {/* Group 2 Card */}
            <div className="bg-white border-2 border-slate-200 rounded-[4px] p-6 sm:p-7 shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D49A18]">Group 2 Papers</span>
                <span className="text-[10px] font-bold bg-amber-50 text-amber-900 px-2.5 py-0.5 rounded-[2px] border border-amber-200">300 Marks</span>
              </div>
              <div className="space-y-4">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-[3px]">
                  <span className="text-xs font-bold text-[#D49A18] uppercase">Paper 04</span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">Cost &amp; Management Accounting (100 Marks)</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Standard costing, marginal costing, budgetary control, activity-based costing (ABC), and process costing techniques.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-[3px]">
                  <span className="text-xs font-bold text-[#D49A18] uppercase">Paper 05</span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">Auditing &amp; Ethics (100 Marks)</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Engagement and quality control standards (SAs), audit documentation, fraud responsibilities, audit report drafting, and professional ethics.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-[3px]">
                  <span className="text-xs font-bold text-[#D49A18] uppercase">Paper 06</span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">Financial Management &amp; Strategic Management (100 Marks)</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    FM: Capital budgeting, cost of capital, capital structure (50 Marks) + SM: Strategic choices, implementation &amp; evaluation (50 Marks).
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: THE 60%+ CLEARANCE FORMULA */}
        <section id="pass-rate-formula" className="mb-20 scroll-mt-24 p-8 sm:p-10 bg-[#F8FAF9] border-2 border-slate-200 rounded-[4px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider rounded-[2px] border border-emerald-300">
                <span>The Diagnostic Testing Engine</span>
                <span>•</span>
                <span>Step-Marking Mastery</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                How We Achieve a 60%+ CA Intermediate Clearance Rate
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                National CA Intermediate pass percentages average between 15% and 18%. The reason most students fail is not lack of intelligence—it is lack of ICAI step-marking discipline and case-law presentation technique.
              </p>
              <div className="space-y-3 text-xs text-slate-700 font-medium pt-1">
                <div className="p-3 bg-white rounded-[2px] border border-slate-200 flex items-start gap-2.5">
                  <span className="text-[#0B3D2C] font-bold text-sm">1.</span>
                  <span><strong className="text-slate-900">Weekly Diagnostic Chapter Tests:</strong> Not just prelims. Every weekend includes a timed chapter assessment graded under strict ICAI suggested answers.</span>
                </div>
                <div className="p-3 bg-white rounded-[2px] border border-slate-200 flex items-start gap-2.5">
                  <span className="text-[#0B3D2C] font-bold text-sm">2.</span>
                  <span><strong className="text-slate-900">Line-by-Line Error Feedback:</strong> Fellow CAs review marked papers directly with the student, identifying where step marks were lost in working notes.</span>
                </div>
                <div className="p-3 bg-white rounded-[2px] border border-slate-200 flex items-start gap-2.5">
                  <span className="text-[#0B3D2C] font-bold text-sm">3.</span>
                  <span><strong className="text-slate-900">Corporate Case-Study Context:</strong> Concepts are explained using actual statutory audits (PwC) and direct tax structures (EY), rendering complex provisions intuitive.</span>
                </div>
              </div>
            </div>

            {/* Media Item 2: Learning Journey Infographic */}
            <div className="lg:col-span-5">
              <div className="bg-white p-3 border-2 border-slate-200 rounded-[4px] shadow-sm">
                <img
                  src="/assets/Untitled-design-5-1.png"
                  alt="CA Intermediate student learning journey and diagnostic evaluation framework at Riitu Institution"
                  className="w-full h-auto object-cover rounded-[2px]"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: 15-STUDENT MICRO COHORT COMPARISON TABLE */}
        <section id="micro-batch-comparison" className="mb-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>Accountability Architecture</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Riitu Institution vs 300-Student Commercial Halls
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              See why individual accountability is the decisive factor between failing and clearing CA Intermediate.
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
                  <th className="py-4 px-5 font-semibold">Evaluation Factor</th>
                  <th className="py-4 px-5 font-bold text-[#D49A18] bg-[#082E21]">Riitu Institution (Kharghar)</th>
                  <th className="py-4 px-5 font-semibold text-slate-200">Commercial Coaching Brands</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Cohort Ceiling</td>
                  <td className="py-3.5 px-5 font-bold text-[#0B3D2C] bg-emerald-50/50">Strict 15 Students Only</td>
                  <td className="py-3.5 px-5 text-slate-600">200 to 350 Students in Packed Halls</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Pass Percentage</td>
                  <td className="py-3.5 px-5 font-bold text-[#0B3D2C] bg-emerald-50/50">60%+ First-Attempt Clearance</td>
                  <td className="py-3.5 px-5 text-slate-600">~15% to 18% National Average</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Teaching Quality</td>
                  <td className="py-3.5 px-5 font-bold text-[#0B3D2C] bg-emerald-50/50">100% Practicing Fellow CAs</td>
                  <td className="py-3.5 px-5 text-slate-600">Junior Tutors &amp; Video Recordings</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Doubt Clarification</td>
                  <td className="py-3.5 px-5 font-bold text-[#0B3D2C] bg-emerald-50/50">Immediate, Daily 1-on-1 Guidance</td>
                  <td className="py-3.5 px-5 text-slate-600">Ignored in Crowds or Outsourced Helpdesk</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Exam Test Series</td>
                  <td className="py-3.5 px-5 font-bold text-[#0B3D2C] bg-emerald-50/50">Weekly Evaluated Tests Included</td>
                  <td className="py-3.5 px-5 text-slate-600">Extra Paid Test Packages with Delayed Reviews</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 4: BIG 4 FACULTY MENTORSHIP */}
        <section id="faculty-mentors" className="mb-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>100% Senior Chartered Accountants</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Learn from Ex-PwC, Deloitte, EY &amp; Disney Mentors
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Our founders personally mentor every single CA Intermediate student in the 15-seat batch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-7 border-2 border-slate-200 rounded-[4px] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <span className="text-xs font-bold text-[#0B3D2C] uppercase tracking-wider">Accounting &amp; Auditing</span>
                  <span className="text-[10px] font-bold bg-[#D49A18]/20 text-amber-900 px-2 py-0.5 rounded-[2px]">EY &amp; Disney Alum</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900">CA Ritu Jain</h3>
                <span className="text-xs font-bold text-slate-500 block mt-0.5">FCA, DISA, Co-Founder</span>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Mentors Paper 1 (Advanced Accounting) and Paper 5 (Auditing &amp; Ethics). CA Ritu Jain leverages deep advisory experience at EY and Disney to train students on auditing standards, ethical reporting, and consolidation mechanics.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                <span>Personal Doubt Clearing: Daily</span>
                <Link to="/our-faculty" className="text-[#0B3D2C] font-bold hover:underline">View Faculty Profile →</Link>
              </div>
            </div>

            <div className="bg-white p-7 border-2 border-slate-200 rounded-[4px] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <span className="text-xs font-bold text-[#0B3D2C] uppercase tracking-wider">Direct Tax &amp; Corporate Law</span>
                  <span className="text-[10px] font-bold bg-[#D49A18]/20 text-amber-900 px-2 py-0.5 rounded-[2px]">PwC &amp; Deloitte Alum</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-900">CA Deepak Jain</h3>
                <span className="text-xs font-bold text-slate-500 block mt-0.5">FCA, Co-Founder</span>
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  Mentors Paper 2 (Corporate &amp; Other Laws) and Paper 3 (Taxation). Having served in senior leadership roles at PwC Statutory Audit and Deloitte, CA Deepak Jain equips students to crack complex computation provisions and legal case studies.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                <span>Personal Doubt Clearing: Daily</span>
                <Link to="/our-faculty" className="text-[#0B3D2C] font-bold hover:underline">View Faculty Profile →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: KHARGHAR CENTER LOGISTICS & METRO CONNECTIVITY */}
        <section id="center-logistics" className="mb-20 scroll-mt-24 p-8 sm:p-10 bg-[#0D1B1E] text-white rounded-[4px] border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#D49A18] text-xs font-bold uppercase tracking-wider rounded-[2px] border border-white/15">
                <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block"></span>
                <span>Navi Mumbai Transit Hub • Kharghar Sector 12</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Sector 12 Kharghar Center: Easy Regional Access
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                CA Intermediate requires rigorous, disciplined daily study. Our campus provides comfortable air-conditioned classrooms, high-speed WiFi, silent revision pods, and direct metro connectivity for students commuting from Panvel, Belapur, Nerul, Seawoods, and Vashi.
              </p>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D49A18] text-[18px] shrink-0">train</span>
                  <span><strong className="text-white">Metro Connection:</strong> 2 minutes walking distance from Central Park Metro Station (Gate 2).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D49A18] text-[18px] shrink-0">subway</span>
                  <span><strong className="text-white">Harbour Railway Line:</strong> Direct auto access from Kharghar Railway Station and Khandeshwar.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D49A18] text-[18px] shrink-0">pin_drop</span>
                  <span><strong className="text-white">Campus Address:</strong> Shop No. 13 &amp; 14, Landmark CHS, Plot No. 22/23, Sector 12, Kharghar, Navi Mumbai 410210.</span>
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

            {/* Media Item 3: Campus Photo */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-white/10 p-3 rounded-[4px]">
                <img
                  src="/assets/WhatsApp-Image-2026-03-31-at-3.17.05-PM.jpeg"
                  alt="CA Intermediate batch attending face-to-face mentorship in Kharghar Sector 12 campus"
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
              <span>Common Intermediate Queries</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              CA Intermediate Coaching: FAQs
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Answers to common queries regarding both groups, test series, faculty access, and batch scheduling.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>What is the batch size for CA Intermediate?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Strictly 15 Seats</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                All CA Intermediate cohorts are strictly limited to 15 students per batch. This allows our Fellow CAs to personally evaluate every mock test and review answer presentation techniques.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>How does Riitu Institution deliver a 60%+ pass rate?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Weekly Tests</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Through weekly timed chapter tests, line-by-line ICAI step-marking error feedback, and direct teaching by practicing Big 4 CAs instead of unverified interns.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>Can I join for Group 1 only or Group 2 only?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Flexible Enrollment</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Yes. Students can enroll for Both Groups (G1 + G2) or individual groups based on their ICAI exam schedule and articleship requirements.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>How do I book a Free Demo class?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Online / Phone</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                You can book your Free 1-on-1 Demo lecture on this page or call our counselor at <a href="tel:+919512112938" className="text-[#0B3D2C] font-bold hover:underline">+91-9512112938</a>.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Live CTA Section */}
      <LiveCTASection />

      {/* Free Demo Booking Section */}
      <div className="mt-4">
        <DemoBookingSection />
      </div>
    </main>
  );
}
