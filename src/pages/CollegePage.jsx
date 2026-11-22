import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import GoogleReviewsBadge from '../components/GoogleReviewsBadge';
import LiveCTASection from '../components/LiveCTASection';
import DemoBookingSection from '../components/DemoBookingSection';

export default function CollegePage() {
  const collegeSchema = {
    '@type': 'Course',
    name: 'College Degree Coaching (B.Com, BMS, BAF) - Mumbai University',
    description:
      'Semester-wise degree coaching for B.Com, BMS, and BAF under Mumbai University syllabus. Expert mentoring in Financial Accounting, Cost Accounting, Direct Tax, and Corporate Law in Kharghar.',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Riitu Institution',
      sameAs: 'https://riituinstitution.com/',
    },
    educationalCredentialAwarded: 'Mumbai University Bachelor of Commerce Degree Examination Preparation',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['onsite', 'online'],
      location: 'Shop No. 13 & 14, Landmark CHS, Sector 12, Kharghar, Navi Mumbai 410210',
    },
  };

  const collegeFaqSchema = {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which college commerce degrees are covered at Riitu Institution?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide specialized semester-wise coaching for B.Com, BMS, BAF, and BBA degrees under the Mumbai University curriculum.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which subjects are taught for B.Com and BMS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Key subjects include Financial Accounting, Cost Accounting, Management Accounting, Direct & Indirect Taxes (GST), Financial Management, and Business Law.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the batch size for college degree coaching?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All college batches are capped at 15 students to ensure individual homework evaluations, university past-paper solutions, and personal doubt resolution.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where are the degree classes held in Kharghar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At Shop No. 13 & 14, Landmark CHS, Sector 12, Kharghar, Navi Mumbai 410210, just 2 minutes walk from Central Park Metro Station Gate 2.',
        },
      },
    ],
  };

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Academic Programs', path: '/courses' },
    { name: 'College Degree Coaching', path: '/college-bcom-bms' },
  ];

  return (
    <main className="pt-20 pb-16 bg-white font-sans text-slate-900">
      <SEOHead
        title="B.Com, BMS & BAF Coaching in Kharghar Navi Mumbai | Mumbai University Commerce"
        description="Top B.Com & BMS coaching classes in Sector 12 Kharghar. Master Financial Accounting, Direct Tax & Costing under senior CAs. Book Free Demo today!"
        canonicalPath="/college-bcom-bms"
        schema={[collegeSchema, collegeFaqSchema]}
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
            <li className="text-[#0B3D2C] font-semibold" aria-current="page">College Degree (B.Com / BMS)</li>
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
                  alt="Riitu Institution Official Brand Logo"
                  className="h-9 w-auto object-contain"
                  onError={(e) => { e.target.src = '/assets/Riitu-Institution-Logo.png'; }}
                />
              </div>
              <div className="border-l-2 border-[#0B3D2C]/25 pl-3">
                <span className="block text-base font-serif font-bold text-[#0B3D2C] leading-none">Riitu Institution</span>
                <span className="block text-[10px] font-bold text-[#D49A18] uppercase tracking-wider mt-0.5">Mumbai University Degree Academy</span>
              </div>
            </div>

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 bg-brand-lightgreen border border-emerald-300 text-brand-forest text-[10.5px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-wider rounded-[3px] shrink-0 max-w-full">
                <span className="w-1.5 h-1.5 bg-brand-forest inline-block shrink-0"></span>
                <span className="truncate">B.Com &amp; BMS • Mumbai University</span>
              </div>
              <GoogleReviewsBadge variant="light" />
            </div>
            
            {/* Semantic H1 */}
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
              B.Com, BMS &amp; BAF Coaching in Kharghar, Navi Mumbai: <br />
              <span className="italic font-normal text-brand-forest">Mumbai University Degree Track</span>
            </h1>
            
            {/* Opening Lead Paragraph (First 10% of Content with Focus Keyword) */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              Searching for premier <strong className="text-slate-900 font-semibold">B.Com, BMS, and BAF classes in Kharghar</strong>? Riitu Institution provides semester-wise coaching for Mumbai University commerce degree students. Taught by practicing senior Chartered Accountants, our 15-student micro batches master Financial Accounting, Costing, Direct Tax, and Financial Management for distinction scores.
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
                <span className="text-emerald-600 font-bold">✓</span> Mumbai University Syllabus Mastery
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> 100% Practicing Senior CA Mentors
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
                src="/assets/about-us-new-1.jpg"
                alt="B.Com and BMS degree coaching in Sector 12 Kharghar Navi Mumbai"
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
            <a href="#curriculum" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Degrees Covered
            </a>
            <a href="#subjects" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Core Subjects
            </a>
            <a href="#micro-batch" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              15-Seat Ceiling
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
                AEO Verified Program Facts • College Degrees
              </span>
            </div>
            <span className="text-[11px] text-slate-300">Updated 2026-27</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">University Pattern</span>
              <span className="text-base font-bold text-white mt-0.5 block">Mumbai University (MU)</span>
              <p className="text-slate-300 mt-1 leading-normal">FY, SY, and TY semester-wise examination alignment.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Degrees Coached</span>
              <span className="text-base font-bold text-white mt-0.5 block">B.Com, BMS, BAF, BBA</span>
              <p className="text-slate-300 mt-1 leading-normal">Accounting, Taxation, Costing, Law, and Finance.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Batch Size Rule</span>
              <span className="text-base font-bold text-white mt-0.5 block">Strictly 15 Students</span>
              <p className="text-slate-300 mt-1 leading-normal">No auditorium crowds; individual doubt clearing.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Center Location</span>
              <span className="text-base font-bold text-white mt-0.5 block">Sector 12 Kharghar</span>
              <p className="text-slate-300 mt-1 leading-normal">Landmark CHS, 2 min walk from Central Park Metro Gate 2.</p>
            </div>
          </div>
        </section>

        {/* SECTION 1: DEGREES COVERED */}
        <section id="curriculum" className="pt-6 mb-20 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>Mumbai University Degree Curriculum</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Undergraduate Commerce Degree Programs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We align our coaching with <a href="https://mu.ac.in" target="_blank" rel="noopener noreferrer" className="text-[#0B3D2C] font-semibold underline hover:text-[#D49A18]">Mumbai University semester patterns</a>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 border-2 border-slate-200 rounded-[4px] shadow-xs">
              <span className="text-xs font-bold text-brand-forest uppercase tracking-wider block">Degree 01</span>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">B.Com (Bachelor of Commerce)</h3>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Semester 1 to Semester 6 coverage: Financial Accounting, Cost Accounting, Direct &amp; Indirect Taxes, Commerce, Business Economics, and Business Law.
              </p>
            </div>

            <div className="bg-white p-7 border-2 border-slate-200 rounded-[4px] shadow-xs">
              <span className="text-xs font-bold text-brand-forest uppercase tracking-wider block">Degree 02</span>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">BMS (Management Studies)</h3>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Finance and Marketing specializations: Strategic Cost Management, Financial Markets, Business Statistics, Marketing Management, and Corporate Law.
              </p>
            </div>

            <div className="bg-white p-7 border-2 border-slate-200 rounded-[4px] shadow-xs">
              <span className="text-xs font-bold text-brand-forest uppercase tracking-wider block">Degree 03</span>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">BAF (Accounting &amp; Finance)</h3>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Specialized accounting modules: Financial Accounting, Auditing Standards, Cost Accounting, Taxation, Management Accounting, and International Finance.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: KHARGHAR CENTER LOGISTICS */}
        <section id="location" className="mb-20 scroll-mt-24 p-8 sm:p-10 bg-[#0D1B1E] text-white rounded-[4px] border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#D49A18] text-xs font-bold uppercase tracking-wider rounded-[2px] border border-white/15">
                <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block"></span>
                <span>Kharghar Sector 12 Center</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Transit Hub for Navi Mumbai College Students
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our center offers AC study spaces, high-speed WiFi, silent revision pods, and direct metro connectivity for students commuting from colleges across Kharghar, Belapur, Panvel, and Nerul.
              </p>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D49A18] text-[18px] shrink-0">train</span>
                  <span><strong className="text-white">Metro Proximity:</strong> 2 minutes walking distance from Central Park Metro Station (Gate 2).</span>
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

            {/* Media Item 2: Classroom photo */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-white/10 p-3 rounded-[4px]">
                <img
                  src="/assets/WhatsApp-Image-2026-03-31-at-3.17.05-PM.jpeg"
                  alt="College students attending degree lecture at Riitu Institution Kharghar campus"
                  className="w-full h-auto object-cover rounded-[2px]"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: FREQUENTLY ASKED QUESTIONS */}
        <section id="faqs" className="mb-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>Degree Coaching FAQs</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              College Degrees: FAQs
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Common questions on semester schedules, past paper solutions, and Free Demo registration.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>What is the batch size for college degree coaching?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Strictly 15 Seats</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                All degree batches are capped strictly at 15 students to guarantee individual attention, test evaluation, and answer presentation feedback.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>Who teaches the Accounting and Tax subjects?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Practicing CAs</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                All accounting and taxation subjects are taught by practicing senior Chartered Accountants with Big 4 corporate backgrounds.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>Are weekend batches available?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Flexible Timings</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Yes. We run specialized weekend cohorts alongside weekday morning and evening sessions for college students and working trainees.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>How can I book a Free Demo class?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Free Demo</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Book online through this portal or call our Admissions Helpline directly at <a href="tel:+919512112938" className="text-[#0B3D2C] font-bold hover:underline">+91-9512112938</a>.
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
