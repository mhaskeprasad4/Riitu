import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import CampusSection from '../components/CampusSection';
import GoogleReviewsBadge from '../components/GoogleReviewsBadge';
import LiveCTASection from '../components/LiveCTASection';
import DemoBookingSection from '../components/DemoBookingSection';

export default function NaviMumbaiPage() {
  const naviMumbaiSchema = {
    '@type': 'EducationalOrganization',
    name: 'Riitu Institution - Navi Mumbai Regional CA Academy',
    description:
      'Premier Chartered Accountancy and Commerce coaching academy serving students across Navi Mumbai from Panvel, Kharghar, CBD Belapur, Nerul, Seawoods, to Vashi. Micro-batches of 15 students taught 100% by practicing Fellow CAs.',
    areaServed: [
      'Navi Mumbai',
      'Kharghar',
      'Panvel',
      'CBD Belapur',
      'Nerul',
      'Seawoods',
      'Sanpada',
      'Vashi',
      'Koperkhairane',
      'Airoli',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No. 13 & 14, Landmark CHS, Sector 12',
      addressLocality: 'Kharghar, Navi Mumbai',
      postalCode: '410210',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
  };

  const naviMumbaiFaqSchema = {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which areas in Navi Mumbai are covered by Riitu Institution?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our central campus in Sector 12 Kharghar is easily accessible from Panvel, Kamothe, Kalamboli, CBD Belapur, Nerul, Seawoods, Sanpada, and Vashi via the Navi Mumbai Metro (Central Park Station Gate 2) and Harbour Railway Line.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do students from Panvel to Vashi travel to Riitu Institution?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Because we are the only academy in Navi Mumbai offering strict 15-student micro batches taught 100% by practicing Fellow Chartered Accountants (ex-PwC, Deloitte, Disney), yielding a verified 60%+ CA Intermediate pass rate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer online or livestream backup if students cannot commute daily?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All physical lectures are broadcast live with zero latency and backed up 100% on our high-speed mobile and desktop application with multi-speed playback and test submissions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I reach the center from Vashi or Panvel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'From Panvel: Take a train to Kharghar or Khandeshwar (10 mins) or auto to Sector 12. From Vashi/Nerul: Take the Harbour Line train to Kharghar or hop on the Navi Mumbai Metro to Central Park Station Gate 2.',
        },
      },
    ],
  };

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Navi Mumbai Hub', path: '/ca-classes-navi-mumbai' },
  ];

  return (
    <main className="pt-20 pb-16 bg-white font-sans text-slate-900">
      <SEOHead
        title="Best CA Classes in Navi Mumbai (Panvel to Vashi) | Riitu Institution"
        description="Top CA coaching across Navi Mumbai. 15-student micro batches, 100% Fellow CAs (ex-PwC, Deloitte), verified 60%+ pass rate. Book Free Demo class today!"
        canonicalPath="/ca-classes-navi-mumbai"
        schema={[naviMumbaiSchema, naviMumbaiFaqSchema]}
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
            <li className="text-[#0B3D2C] font-semibold" aria-current="page">Navi Mumbai Regional Hub</li>
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
                <span className="block text-[10px] font-bold text-[#D49A18] uppercase tracking-wider mt-0.5">Navi Mumbai Regional Academy</span>
              </div>
            </div>

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="h-[32px] min-h-[32px] max-h-[32px] box-border leading-none inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 bg-brand-lightgreen border border-emerald-300 text-brand-forest text-xs font-bold uppercase tracking-wider rounded-[3px] max-w-full">
                <span className="w-1.5 h-1.5 bg-brand-forest inline-block shrink-0"></span>
                <span className="truncate">Panvel to Vashi • 15 Students Max</span>
              </div>
              <GoogleReviewsBadge variant="light" />
            </div>
            
            {/* Semantic H1 */}
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Best CA Classes in Navi Mumbai: <br />
              <span className="italic font-normal text-brand-forest">Connecting Panvel to Vashi</span>
            </h1>
            
            {/* Opening Lead Paragraph (First 10% of Content with Focus Keyword) */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              Searching for the <strong className="text-slate-900 font-semibold">best CA classes in Navi Mumbai</strong>? Riitu Institution bridges the entire Harbour and Trans-Harbour belt from Panvel, Belapur, Nerul, Seawoods, to Vashi. We provide strict 15-student micro batch coaching for CA Foundation, CA Intermediate, 11th &amp; 12th Commerce, and CS/CMA taught 100% by practicing Fellow Chartered Accountants.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#demo-booking" className="btn-gold text-xs px-6 py-3 shadow-sm hover:shadow">
                <span>Book Free 1-on-1 Demo Lecture</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
              <a href="tel:+919512112938" className="btn-outline-forest text-xs px-6 py-3">
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Regional Inquiries: +91-9512112938</span>
              </a>
            </div>

            {/* Reassurance Checklist */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium pt-1">
              <span className="flex items-center gap-1.5 font-bold text-slate-900">
                <span className="text-[#D49A18] font-bold">★</span> Trusted by 1,200+ Students
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Direct Metro &amp; Harbour Train Access
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> 60%+ Verified Inter Pass Rate
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Strict 15-Student Batch Ceiling
              </span>
            </div>

          </div>

          {/* Media Item 1: Hero Classroom Photo */}
          <div className="lg:col-span-5">
            <div className="border border-slate-200 rounded-[4px] p-2.5 bg-white shadow-xl">
              <img
                src="/assets/about-us-new-2.jpg"
                alt="Best CA classes in Navi Mumbai - Riitu Institution regional mentorship campus"
                className="w-full h-auto object-cover rounded-[2px]"
              />
              <div className="p-3 bg-slate-50 rounded-[2px] mt-2 border border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-[#0B3D2C]">Navi Mumbai Regional Campus</span>
                <span className="text-slate-500">Sector 12 Kharghar Metro Gate 2</span>
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
            <a href="#regional-network" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Regional Towns
            </a>
            <a href="#programs" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Cohorts Offered
            </a>
            <a href="#micro-batch-advantage" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              15-Seat Formula
            </a>
            <a href="#mentors" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Fellow CA Mentors
            </a>
            <a href="#transit-network" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Transit Route
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
                AEO Verified Facts • Navi Mumbai Regional Hub
              </span>
            </div>
            <span className="text-[11px] text-slate-300">Updated 2026-27</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Coverage Areas</span>
              <span className="text-base font-bold text-white mt-0.5 block">Panvel to Vashi</span>
              <p className="text-slate-300 mt-1 leading-normal">Panvel, Kamothe, Belapur, Nerul, Seawoods, Sanpada, Vashi.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Class Size Limit</span>
              <span className="text-base font-bold text-white mt-0.5 block">Strict 15 Students</span>
              <p className="text-slate-300 mt-1 leading-normal">Zero mass auditorium seating; direct daily doubt solving.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Inter Clearance Record</span>
              <span className="text-base font-bold text-white mt-0.5 block">60%+ Pass Rate</span>
              <p className="text-slate-300 mt-1 leading-normal">3x higher than national ICAI average (~18%).</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Central Transit Access</span>
              <span className="text-base font-bold text-white mt-0.5 block">Central Park Metro</span>
              <p className="text-slate-300 mt-1 leading-normal">Gate 2 exit, 2 minutes walk to Landmark CHS campus.</p>
            </div>
          </div>
        </section>

        {/* SECTION 1: REGIONAL TOWNS NETWORK */}
        <section id="regional-network" className="mb-20 scroll-mt-24 p-8 sm:p-10 bg-[#F8FAF9] border-2 border-slate-200 rounded-[4px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider rounded-[2px] border border-emerald-300">
                <span>Centralized Regional Hub</span>
                <span>•</span>
                <span>Why Navi Mumbai Commutes to Us</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Serving Students from Panvel, Belapur, Nerul &amp; Vashi
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Across Navi Mumbai, students face a dilemma: choose between overcrowded 300-student commercial coaching factories where individual doubts are ignored, or rely on isolated recorded videos without discipline. Riitu Institution offers the ideal solution—a physical, high-accountability 15-student micro cohort easily reachable by metro and train.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-700 font-medium pt-1">
                <div className="bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <strong className="text-[#0B3D2C] block">Panvel &amp; Kamothe:</strong>
                  <span>10 mins by train or auto directly to Sector 12 campus.</span>
                </div>
                <div className="bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <strong className="text-[#0B3D2C] block">CBD Belapur &amp; Nerul:</strong>
                  <span>Direct metro or Harbour Line transit to Kharghar station.</span>
                </div>
                <div className="bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <strong className="text-[#0B3D2C] block">Seawoods &amp; Sanpada:</strong>
                  <span>Direct train link; silent library access all day.</span>
                </div>
                <div className="bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <strong className="text-[#0B3D2C] block">Vashi &amp; Koperkhairane:</strong>
                  <span>Rapid transit via Harbour Line to central Kharghar.</span>
                </div>
              </div>
            </div>

            {/* Media Item 2: Concept Coaching Graphic */}
            <div className="lg:col-span-5">
              <div className="bg-white p-3 border-2 border-slate-200 rounded-[4px] shadow-sm">
                <img
                  src="/assets/Untitled-design-5-1.png"
                  alt="Student diagnostic learning journey across Navi Mumbai at Riitu Institution"
                  className="w-full h-auto object-cover rounded-[2px]"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: COHORTS OFFERED */}
        <section id="programs" className="mb-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>Available Programs</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Navi Mumbai Academic Cohorts
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              All cohorts are capped at 15 students to guarantee individual attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-forest uppercase">ICAI Foundation</span>
                <h3 className="text-lg font-serif font-bold text-slate-900 mt-1">CA Foundation Cohort</h3>
                <p className="text-xs text-slate-600 mt-2">
                  Covers all 4 papers with a dedicated 14-day bridge course for non-commerce and science students.
                </p>
              </div>
              <Link to="/ca-foundation" className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#0B3D2C] hover:underline flex items-center justify-between">
                <span>View Program Details</span>
                <span>→</span>
              </Link>
            </div>

            <div className="bg-white p-6 border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#D49A18] uppercase">ICAI Intermediate</span>
                <h3 className="text-lg font-serif font-bold text-slate-900 mt-1">CA Intermediate G1 &amp; G2</h3>
                <p className="text-xs text-slate-600 mt-2">
                  Delivers a verified 60%+ first-attempt clearance record with weekly step-marked tests.
                </p>
              </div>
              <Link to="/ca-intermediate" className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#0B3D2C] hover:underline flex items-center justify-between">
                <span>View Program Details</span>
                <span>→</span>
              </Link>
            </div>

            <div className="bg-white p-6 border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-800 uppercase">Junior College</span>
                <h3 className="text-lg font-serif font-bold text-slate-900 mt-1">11th &amp; 12th Commerce</h3>
                <p className="text-xs text-slate-600 mt-2">
                  Dual-track syllabus preparation for Board exams and early CA Foundation mastery.
                </p>
              </div>
              <Link to="/commerce-11th-12th" className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#0B3D2C] hover:underline flex items-center justify-between">
                <span>View Program Details</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 3: TRANSIT NETWORK */}
        <section id="transit-network" className="mb-20 scroll-mt-24 p-8 sm:p-10 bg-[#0D1B1E] text-white rounded-[4px] border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#D49A18] text-xs font-bold uppercase tracking-wider rounded-[2px] border border-white/15">
                <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block"></span>
                <span>Central Connectivity Across Navi Mumbai</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                How to Reach from Any Town in Navi Mumbai
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our Kharghar Sector 12 center is situated at the epicenter of Navi Mumbai’s transportation infrastructure:
              </p>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D49A18] text-[18px] shrink-0">train</span>
                  <div>
                    <strong className="text-white block">Navi Mumbai Metro Line 1:</strong>
                    Central Park Station (Gate 2) is just 150 meters from our doorstep. Rapid, AC commute from Belapur and Pendhar.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D49A18] text-[18px] shrink-0">directions_railway</span>
                  <div>
                    <strong className="text-white block">Harbour Railway Line:</strong>
                    Kharghar Railway Station connects directly to Panvel (10 mins) and Vashi/Kurla (20 mins).
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D49A18] text-[18px] shrink-0">pin_drop</span>
                  <div>
                    <strong className="text-white block">Address:</strong>
                    Shop No. 13 &amp; 14, Landmark CHS, Plot No. 22/23, Sector 12, Kharghar, Navi Mumbai 410210.
                  </div>
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
                  <span>Open Location in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Media Item 3: Classroom photo */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-white/10 p-3 rounded-[4px]">
                <img
                  src="/assets/WhatsApp-Image-2026-03-31-at-3.17.05-PM.jpeg"
                  alt="Navi Mumbai students attending CA classroom mentorship at Riitu Institution"
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
              <span>Regional Navi Mumbai FAQs</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Navi Mumbai CA Classes: FAQs
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Frequently asked questions by students and parents across the Navi Mumbai region.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>Where is the center located?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Sector 12 Kharghar</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Shop No. 13 &amp; 14, Landmark CHS, Sector 12, Kharghar, Navi Mumbai 410210. Exactly 2 minutes walking distance from Central Park Metro Station Gate 2.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>Why choose Riitu Institution over classes in Vashi or Thane?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">15-Seat Ceiling</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Unlike mass-commercial brands in Vashi or Thane with 200+ students per batch, we cap every cohort strictly at 15 students. You are taught directly by Fellow CAs with zero junior interns.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>Are weekend batches available for working professionals / college students?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Weekend Batches</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Yes. We run specialized weekend cohorts alongside weekday morning and evening batches for B.Com and working articleship students.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>How can I schedule a Free Demo class?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Call / Online</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Book online through this portal or call our Admissions Helpline directly at <a href="tel:+919512112938" className="text-[#0B3D2C] font-bold hover:underline">+91-9512112938</a>.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Embedded Full Campus Section */}
      <CampusSection />

      {/* Live CTA Section */}
      <LiveCTASection />

      {/* Free Demo Booking Section */}
      <div className="mt-4">
        <DemoBookingSection />
      </div>
    </main>
  );
}
