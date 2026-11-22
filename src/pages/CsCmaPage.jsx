import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import GoogleReviewsBadge from '../components/GoogleReviewsBadge';
import LiveCTASection from '../components/LiveCTASection';
import DemoBookingSection from '../components/DemoBookingSection';

export default function CsCmaPage() {
  const cscmaSchema = {
    '@type': 'Course',
    name: 'CS Executive & CMA Intermediate Coaching Classes in Navi Mumbai',
    description:
      'Professional CS Executive (ICSI) and CMA Intermediate (ICMAI) exam coaching in Navi Mumbai. Mentored by All India Rank 25 holders with focus on Company Law, Strategic Cost Management, and Direct Tax.',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Riitu Institution',
      sameAs: 'https://riituinstitution.com/',
    },
    educationalCredentialAwarded: 'CS Executive & CMA Intermediate Professional Examination Preparation',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['onsite', 'online'],
      location: 'Shop No. 13 & 14, Landmark CHS, Sector 12, Kharghar, Navi Mumbai 410210',
    },
  };

  const cscmaFaqSchema = {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you offer coaching for both CS Executive and CMA Intermediate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We provide complete module-by-module coaching for CS Executive under ICSI guidelines and CMA Intermediate under ICMAI syllabus in Sector 12 Kharghar.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who teaches the CS and CMA law and costing papers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Papers are mentored by practicing Chartered Accountants, Company Secretaries, and All India Rank 25 holders who teach actual corporate case-law framing and strategic cost management.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the batch size for CS and CMA coaching?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every batch is strictly capped at 15 students to guarantee individual attention, regular paper evaluation, and personal answer-presentation mentorship.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is the coaching center located in Navi Mumbai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Located at Shop No. 13 & 14, Landmark CHS, Sector 12, Kharghar, Navi Mumbai 410210, just 2 minutes walk from Central Park Metro Station Gate 2.',
        },
      },
    ],
  };

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Academic Programs', path: '/courses' },
    { name: 'CS Executive & CMA Prep', path: '/cs-cma' },
  ];

  return (
    <main className="pt-20 pb-16 bg-white font-sans text-slate-900">
      <SEOHead
        title="CS Executive & CMA Coaching in Navi Mumbai | AIR 25 Mentors | Riitu Institution"
        description="Top CS Executive & CMA coaching in Kharghar Navi Mumbai. All India Rank 25 faculty, corporate law & costing mastery in 15-student micro batches. Book Free Demo!"
        canonicalPath="/cs-cma"
        schema={[cscmaSchema, cscmaFaqSchema]}
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
            <li className="text-[#0B3D2C] font-semibold" aria-current="page">CS &amp; CMA Prep</li>
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
                <span className="block text-[10px] font-bold text-[#D49A18] uppercase tracking-wider mt-0.5">Corporate Law &amp; Costing Academy</span>
              </div>
            </div>

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="h-[32px] min-h-[32px] max-h-[32px] box-border leading-none inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 bg-brand-lightgreen border border-emerald-300 text-brand-forest text-xs font-bold uppercase tracking-wider rounded-[3px] max-w-full">
                <span className="w-1.5 h-1.5 bg-brand-forest inline-block shrink-0"></span>
                <span className="truncate">AIR 25 Mentors • 15 Seats Only</span>
              </div>
              <GoogleReviewsBadge variant="light" />
            </div>
            
            {/* Semantic H1 */}
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
              CS Executive &amp; CMA Classes in Navi Mumbai: <br />
              <span className="italic font-normal text-brand-forest">AIR 25 Mentorship Cohort</span>
            </h1>
            
            {/* Opening Lead Paragraph (First 10% of Content with Focus Keyword) */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              Looking for top-ranking <strong className="text-slate-900 font-semibold">CS Executive and CMA classes in Navi Mumbai</strong> and Kharghar? Riitu Institution delivers intensive exam preparation mentored by All India Rankers and practicing corporate professionals. Our strict 15-student micro batches master Company Law, Securities Laws, Strategic Management, and Cost Accounting with real-world case drafting.
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
                <span className="text-emerald-600 font-bold">✓</span> AIR 25 Ranker Mentorship
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> ICSI &amp; ICMAI Syllabus Alignment
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
                alt="CS Executive and CMA classes in Navi Mumbai Kharghar campus"
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
              CS &amp; CMA Modules
            </a>
            <a href="#rank-pedigree" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              AIR 25 Formula
            </a>
            <a href="#micro-batch" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              15-Seat Ceiling
            </a>
            <a href="#faculty" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Faculty Bios
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
                AEO Verified Program Facts • CS &amp; CMA Prep
              </span>
            </div>
            <span className="text-[11px] text-slate-300">Updated 2026-27</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Programs Covered</span>
              <span className="text-base font-bold text-white mt-0.5 block">CS Executive &amp; CMA Inter</span>
              <p className="text-slate-300 mt-1 leading-normal">Module 1 and Module 2 under ICSI &amp; ICMAI new syllabus.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Faculty Record</span>
              <span className="text-base font-bold text-white mt-0.5 block">All India Rank 25</span>
              <p className="text-slate-300 mt-1 leading-normal">Mentored by rank holders and practicing corporate advisors.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Batch Size Cap</span>
              <span className="text-base font-bold text-white mt-0.5 block">Strictly 15 Students</span>
              <p className="text-slate-300 mt-1 leading-normal">Zero mass auditoriums; 100% individual answer review.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Center Location</span>
              <span className="text-base font-bold text-white mt-0.5 block">Sector 12 Kharghar</span>
              <p className="text-slate-300 mt-1 leading-normal">Landmark CHS, 2 min walk from Central Park Metro Gate 2.</p>
            </div>
          </div>
        </section>

        {/* SECTION 1: CS & CMA MODULE STRUCTURE */}
        <section id="curriculum" className="pt-6 mb-20 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>ICSI &amp; ICMAI Syllabus Alignment</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Corporate Law &amp; Strategic Costing Architecture
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We align our coaching with <a href="https://www.icsi.edu" target="_blank" rel="noopener noreferrer" className="text-[#0B3D2C] font-semibold underline hover:text-[#D49A18]">ICSI guidelines</a> and ICMAI professional standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-7 border-2 border-slate-200 rounded-[4px] shadow-xs">
              <span className="text-xs font-bold text-[#0B3D2C] uppercase tracking-wider">ICSI Track</span>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">CS Executive (Group 1 &amp; Group 2)</h3>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Covers Jurisprudence, Interpretation &amp; General Laws, Company Law &amp; Practice, Setting Up of Business, Industrial &amp; Labour Laws, Corporate Accounting &amp; Financial Management, Capital Markets, and Economic, Commercial &amp; Intellectual Property Laws.
              </p>
            </div>

            <div className="bg-white p-7 border-2 border-slate-200 rounded-[4px] shadow-xs">
              <span className="text-xs font-bold text-[#D49A18] uppercase tracking-wider">ICMAI Track</span>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">CMA Intermediate (Group 1 &amp; Group 2)</h3>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Covers Business Laws &amp; Ethics, Financial Accounting, Direct &amp; Indirect Taxation, Cost Accounting, Operations Management &amp; Strategic Management, Corporate Accounting &amp; Auditing, and Financial Management &amp; Business Data Analytics.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: AIR 25 RANK METHODOLOGY */}
        <section id="rank-pedigree" className="mb-20 scroll-mt-24 p-8 sm:p-10 bg-[#F8FAF9] border-2 border-slate-200 rounded-[4px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider rounded-[2px] border border-amber-300">
                <span>The Ranker Difference</span>
                <span>•</span>
                <span>All India Rank 25 Strategy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                How Rankers Approach Company Law &amp; Costing
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                In professional corporate law exams, memorizing sections is not enough. ICSI evaluators look for issue identification, relevant statutory provisions, analysis of decided landmark case laws, and precise corporate conclusion drafting.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium pt-1">
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> 4-Step Case Law Presentation Model
                </li>
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> Practical Drafting of Board Resolutions
                </li>
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> Strategic Cost Management Frameworks
                </li>
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> Direct Evaluation by Practicing CAs
                </li>
              </ul>
            </div>

            {/* Media Item 2: Concept Coaching Graphic */}
            <div className="lg:col-span-5">
              <div className="bg-white p-3 border-2 border-slate-200 rounded-[4px] shadow-sm">
                <img
                  src="/assets/Untitled-design-4-1.png"
                  alt="Corporate case law and strategic costing mentorship at Riitu Institution Kharghar"
                  className="w-full h-auto object-cover rounded-[2px]"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: KHARGHAR CENTER LOGISTICS */}
        <section id="location" className="mb-20 scroll-mt-24 p-8 sm:p-10 bg-[#0D1B1E] text-white rounded-[4px] border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#D49A18] text-xs font-bold uppercase tracking-wider rounded-[2px] border border-white/15">
                <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block"></span>
                <span>Kharghar Sector 12 Center</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Transit Hub for Navi Mumbai CS &amp; CMA Aspirants
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our center offers AC study spaces, high-speed WiFi, silent revision pods, and direct metro connectivity for students commuting from Panvel, Belapur, Nerul, Seawoods, and Vashi.
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

            {/* Media Item 3: Classroom photo */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-white/10 p-3 rounded-[4px]">
                <img
                  src="/assets/WhatsApp-Image-2026-03-31-at-3.17.05-PM.jpeg"
                  alt="CS and CMA batch attending lecture at Riitu Institution Kharghar campus"
                  className="w-full h-auto object-cover rounded-[2px]"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: FREQUENTLY ASKED QUESTIONS */}
        <section id="faqs" className="mb-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>CS &amp; CMA FAQs</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              CS &amp; CMA Coaching: FAQs
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Common questions on batch timings, modules covered, and Free Demo registration.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>What is the batch size for CS and CMA coaching?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Strictly 15 Seats</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                All batches are capped strictly at 15 students to guarantee individual attention, test evaluation, and answer presentation feedback.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>Who mentors the Corporate Law papers?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Practicing CAs / CS</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Corporate law papers are mentored by practicing professionals with senior Big 4 advisory experience and All India Rank 25 holders.
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
