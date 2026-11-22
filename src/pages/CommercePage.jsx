import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import GoogleReviewsBadge from '../components/GoogleReviewsBadge';
import LiveCTASection from '../components/LiveCTASection';
import DemoBookingSection from '../components/DemoBookingSection';

export default function CommercePage() {
  const commerceSchema = {
    '@type': 'Course',
    name: '11th & 12th Commerce Integrated Coaching Classes in Kharghar',
    description:
      'Dual-track higher secondary commerce coaching for 11th and 12th standard (CBSE, ISC, Maharashtra State Board) integrated with early CA Foundation preparation in Kharghar Navi Mumbai.',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Riitu Institution',
      sameAs: 'https://riituinstitution.com/',
    },
    educationalCredentialAwarded: 'Higher Secondary Commerce Board Examination Excellence',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['onsite', 'online'],
      location: 'Shop No. 13 & 14, Landmark CHS, Sector 12, Kharghar, Navi Mumbai 410210',
    },
  };

  const commerceFaqSchema = {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which boards are covered in 11th & 12th Commerce classes at Riitu Institution?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide specialized coaching for Maharashtra State Board (HSC), CBSE, and ISC boards in Sector 12 Kharghar.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the dual-track CA Foundation advantage for commerce students?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our dual-track curriculum synchronizes Class 11 and 12 Accountancy, Economics, and Math with CA Foundation concepts, allowing students to clear CA Foundation on their very first attempt right after their 12th Board examinations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the batch size for 11th and 12th Commerce?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every batch is strictly capped at 15 students to ensure individual homework evaluation, weekly chapter tests, and personalized doubt resolution.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where are the commerce classes held in Kharghar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Classes are conducted at Shop No. 13 & 14, Landmark CHS, Sector 12, Kharghar, Navi Mumbai 410210, just 2 minutes from Central Park Metro Station Gate 2.',
        },
      },
    ],
  };

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Academic Programs', path: '/courses' },
    { name: '11th & 12th Commerce Integrated', path: '/commerce-11th-12th' },
  ];

  return (
    <main className="pt-20 pb-16 bg-white font-sans text-slate-900">
      <SEOHead
        title="11th & 12th Commerce Classes in Kharghar Navi Mumbai | Board + CA Integrated"
        description="Top 11th & 12th Commerce classes in Sector 12 Kharghar. Dual-track syllabus covering Maharashtra Board & CBSE with early CA Foundation mastery. Book Free Demo."
        canonicalPath="/commerce-11th-12th"
        schema={[commerceSchema, commerceFaqSchema]}
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
            <li className="text-[#0B3D2C] font-semibold" aria-current="page">11th &amp; 12th Commerce</li>
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
                <span className="block text-[10px] font-bold text-[#D49A18] uppercase tracking-wider mt-0.5">Commerce Academy</span>
              </div>
            </div>

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-brand-lightgreen border border-emerald-300 text-brand-forest text-xs font-bold uppercase tracking-wider rounded-[3px] shrink-0">
                <span className="w-1.5 h-1.5 bg-brand-forest inline-block"></span>
                <span>Dual Track Advantage • 11th &amp; 12th</span>
              </div>
              <GoogleReviewsBadge variant="light" />
            </div>
            
            {/* Semantic H1 */}
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
              11th &amp; 12th Commerce Classes in Kharghar, Navi Mumbai: <br />
              <span className="italic font-normal text-brand-forest">Board + CA Integrated Track</span>
            </h1>
            
            {/* Opening Lead Paragraph (First 10% of Content with Focus Keyword) */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              Looking for top-tier <strong className="text-slate-900 font-semibold">11th and 12th Commerce classes in Kharghar</strong>? Riitu Institution bridges board exam preparation (CBSE, ISC, Maharashtra Board) with early professional CA Foundation foundations. Our strict 15-student micro batches taught by senior Fellow Chartered Accountants ensure conceptual clarity, board score excellence, and zero commercial rote memorization.
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
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> 90%+ Board Exam Record
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Integrated CA Foundation Overlap
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
                src="/assets/about-us-new-3.jpg"
                alt="11th and 12th commerce coaching classes in Kharghar Navi Mumbai - Riitu Institution"
                className="w-full h-auto object-cover rounded-[2px]"
              />
              <div className="p-3 bg-slate-50 rounded-[2px] mt-2 border border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-[#0B3D2C]">Kharghar Sector 12 Center</span>
                <span className="text-slate-500">Shop 13 &amp; 14, Landmark CHS</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAST-TRACK TABLE OF CONTENTS */}
        <section className="mb-14 p-5 bg-[#F8FAF9] border-2 border-slate-200 rounded-[4px]">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-[#0B3D2C] text-[20px]">format_list_bulleted</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Quick Page Navigation</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs font-semibold">
            <a href="#subjects" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              4 Core Subjects
            </a>
            <a href="#dual-track" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Dual-Track Edge
            </a>
            <a href="#micro-batch-comparison" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              15-Seat Formula
            </a>
            <a href="#faculty" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              CA Faculty
            </a>
            <a href="#location" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Kharghar Center
            </a>
            <a href="#faqs" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              FAQs &amp; Doubts
            </a>
          </div>
        </section>

        {/* AEO / AI CITATION FACT BOX */}
        <section className="mb-16 bg-brand-deep text-white p-7 sm:p-8 rounded-[4px] border border-brand-gold/30 shadow-lg">
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D49A18] inline-block"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D49A18]">
                AEO Verified Program Facts • 11th &amp; 12th Commerce
              </span>
            </div>
            <span className="text-[11px] text-slate-300">Updated for 2026-27 Academic Year</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Boards Supported</span>
              <span className="text-base font-bold text-white mt-0.5 block">State Board, CBSE, ISC</span>
              <p className="text-slate-300 mt-1 leading-normal">Comprehensive chapter coverage aligned with board patterns.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Batch Size Cap</span>
              <span className="text-base font-bold text-white mt-0.5 block">Strictly 15 Students</span>
              <p className="text-slate-300 mt-1 leading-normal">Zero crowded auditoriums; personalized doubt resolution.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Dual-Track Advantage</span>
              <span className="text-base font-bold text-white mt-0.5 block">CA Foundation Overlap</span>
              <p className="text-slate-300 mt-1 leading-normal">Prepares students to clear CA Foundation on first attempt.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Campus Location</span>
              <span className="text-base font-bold text-white mt-0.5 block">Sector 12 Kharghar</span>
              <p className="text-slate-300 mt-1 leading-normal">Landmark CHS, 2 min walk from Central Park Metro Gate 2.</p>
            </div>
          </div>
        </section>

        {/* SECTION 1: 4 CORE COMMERCE SUBJECTS */}
        <section id="subjects" className="pt-6 mb-20 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>Core Academic Curriculum</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              11th &amp; 12th Commerce Comprehensive Subject Mastery
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every subject is taught with clear conceptual reasoning to build permanent memory and prepare students for both 90%+ board results and subsequent CA/CS competitive exams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all">
              <span className="text-xs font-bold text-brand-forest uppercase tracking-wider block">Subject 01</span>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">Book Keeping &amp; Accountancy</h3>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Led by CA Ritu Jain. Journal entries, ledger posting, trial balance, depreciation, partnership final accounts, and company accounts with balance sheet presentation.
              </p>
            </div>

            <div className="bg-white p-7 border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all">
              <span className="text-xs font-bold text-brand-forest uppercase tracking-wider block">Subject 02</span>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">Economics</h3>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Micro &amp; Macro economic foundations, utility analysis, demand elasticity, market forms, national income, public finance, and Reserve Bank of India monetary policy.
              </p>
            </div>

            <div className="bg-white p-7 border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all">
              <span className="text-xs font-bold text-brand-forest uppercase tracking-wider block">Subject 03</span>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">Organization of Commerce (OCM)</h3>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Business organizations, corporate forms, banking and insurance services, consumer protection, social responsibility, and modern principles of management.
              </p>
            </div>

            <div className="bg-white p-7 border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all">
              <span className="text-xs font-bold text-brand-forest uppercase tracking-wider block">Subject 04</span>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">Mathematics &amp; Statistics / SP</h3>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Matrices, linear inequalities, derivatives, commercial mathematics, correlation analysis, or Secretarial Practice (SP) corporate document drafting.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: DUAL-TRACK ADVANTAGE */}
        <section id="dual-track" className="mb-20 scroll-mt-24 p-8 sm:p-10 bg-[#F8FAF9] border-2 border-slate-200 rounded-[4px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider rounded-[2px] border border-amber-300">
                <span>Integrated Advantage</span>
                <span>•</span>
                <span>Save 1 Full Year</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                The Dual-Track Edge: 12th Board + CA Foundation
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Over 70% of the CA Foundation syllabus overlaps directly with Class 11 &amp; 12 Accountancy, Economics, and Quantitative Aptitude. By synchronizing both streams, students eliminate duplicate tuition fees and appear for CA Foundation immediately following their 12th board exams with total confidence.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium pt-1">
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> Integrated Syllabus Scheduling
                </li>
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> Zero Overlap Confusion
                </li>
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> Direct Mentorship by Fellow CAs
                </li>
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> 90%+ Board Score Record
                </li>
              </ul>
            </div>

            {/* Media Item 2: Concept Coaching Graphic */}
            <div className="lg:col-span-5">
              <div className="bg-white p-3 border-2 border-slate-200 rounded-[4px] shadow-sm">
                <img
                  src="/assets/Untitled-design-4-1.png"
                  alt="Concept coaching methodology for 11th and 12th commerce at Riitu Institution Kharghar"
                  className="w-full h-auto object-cover rounded-[2px]"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: 15-STUDENT MICRO COHORT FORMULA */}
        <section id="micro-batch-comparison" className="mb-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>Accountability</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Why 15-Student Micro Batches Make the Difference
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              In junior college, commerce students frequently form bad habits of rote memorization. Our 15-student micro batches force active question-asking and real mastery.
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
                  <th className="py-4 px-5 font-semibold">Comparison Aspect</th>
                  <th className="py-4 px-5 font-bold text-[#D49A18] bg-[#082E21]">Riitu Institution (Kharghar)</th>
                  <th className="py-4 px-5 font-semibold text-slate-200">Mass Coaching Classes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Batch Size Limit</td>
                  <td className="py-3.5 px-5 font-bold text-[#0B3D2C] bg-emerald-50/50">Strictly 15 Seats Capped</td>
                  <td className="py-3.5 px-5 text-slate-600">80 to 150 Students Crowded into Rooms</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Faculty Mentors</td>
                  <td className="py-3.5 px-5 font-bold text-[#0B3D2C] bg-emerald-50/50">Practicing Chartered Accountants</td>
                  <td className="py-3.5 px-5 text-slate-600">College Tutors &amp; Part-Time Graduates</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Doubt Clearing</td>
                  <td className="py-3.5 px-5 font-bold text-[#0B3D2C] bg-emerald-50/50">Daily Direct Face-to-Face Assistance</td>
                  <td className="py-3.5 px-5 text-slate-600">Ignored in Crowds or Left Unchecked</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-bold text-slate-900">Test Series</td>
                  <td className="py-3.5 px-5 font-bold text-[#0B3D2C] bg-emerald-50/50">Weekly Evaluated Board Mock Tests</td>
                  <td className="py-3.5 px-5 text-slate-600">Only 1–2 Prelims at Year End</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 4: KHARGHAR CENTER LOGISTICS */}
        <section id="location" className="mb-20 scroll-mt-24 p-8 sm:p-10 bg-[#0D1B1E] text-white rounded-[4px] border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#D49A18] text-xs font-bold uppercase tracking-wider rounded-[2px] border border-white/15">
                <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block"></span>
                <span>Sector 12 Kharghar Campus</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Convenient Transit for Navi Mumbai Commerce Students
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Located opposite Sector 12 and just 2 minutes walk from Central Park Metro Station Gate 2, our center is easily accessible for students from DAV Public School, Bal Bharati, Apeejay, Ryan International, and colleges across Navi Mumbai.
              </p>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D49A18] text-[18px] shrink-0">train</span>
                  <span><strong className="text-white">Metro Station:</strong> 2 minutes walking distance from Central Park Metro Station (Gate 2).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D49A18] text-[18px] shrink-0">location_on</span>
                  <span><strong className="text-white">Center Address:</strong> Shop No. 13 &amp; 14, Landmark CHS, Sector 12, Kharghar, Navi Mumbai 410210.</span>
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

            {/* Media Item 3: Classroom photo */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-white/10 p-3 rounded-[4px]">
                <img
                  src="/assets/WhatsApp-Image-2026-03-31-at-3.17.05-PM.jpeg"
                  alt="11th and 12th commerce students attending coaching session in Kharghar campus"
                  className="w-full h-auto object-cover rounded-[2px]"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 5: FREQUENTLY ASKED QUESTIONS */}
        <section id="faqs" className="mb-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>Commerce FAQs</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              11th &amp; 12th Commerce: FAQs
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Answers regarding batch schedules, board exam prep, and the CA Foundation overlap.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>Which boards do you teach in 11th &amp; 12th Commerce?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">State / CBSE / ISC</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                We offer separate, structured batches for Maharashtra State Board (HSC), CBSE, and ISC curricula in Sector 12 Kharghar.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>What is the batch size?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Strictly 15 Seats</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Every batch is strictly capped at 15 students to guarantee individual attention and daily homework checks.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>How does the dual-track CA Foundation coaching work?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Integrated</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Our curriculum aligns Class 11 &amp; 12 Accountancy, Economics, and Math with CA Foundation topics, allowing students to clear CA Foundation on their first attempt after 12th boards.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>How do I book a Free Demo class?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Free Demo</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                You can book a Free 1-on-1 Demo lecture on this page or call our counselor at <a href="tel:+919512112938" className="text-[#0B3D2C] font-bold hover:underline">+91-9512112938</a>.
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
