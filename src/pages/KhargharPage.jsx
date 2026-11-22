import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import CampusSection from '../components/CampusSection';
import GoogleReviewsBadge from '../components/GoogleReviewsBadge';
import LiveCTASection from '../components/LiveCTASection';
import DemoBookingSection from '../components/DemoBookingSection';

export default function KhargharPage() {
  const khargharSchema = {
    '@type': 'LocalBusiness',
    name: 'Riitu Institution - Best CA Coaching Classes in Kharghar',
    image: 'https://riituinstitution.com/assets/about-hero-whatsapp.jpeg',
    '@id': 'https://riituinstitution.com/ca-coaching-kharghar#localbusiness',
    url: 'https://riituinstitution.com/ca-coaching-kharghar',
    telephone: ['+91-9512112938', '+91-9512129471'],
    email: 'enquiry@riituinstitution.com',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No. 13 & 14, Landmark CHS, Plot No. 22/23, Sector 12',
      addressLocality: 'Kharghar, Navi Mumbai',
      postalCode: '410210',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.0435,
      longitude: 73.0694,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '20:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    hasMap: 'https://maps.google.com/?q=Shop+No.+13+and+14+Landmark+CHS+Sector+12+Kharghar+Navi+Mumbai',
  };

  const khargharFaqSchema = {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Riitu Institution located in Kharghar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Riitu Institution is located at Shop No. 13 & 14, Landmark CHS, Plot No. 22/23, Sector 12, Kharghar, Navi Mumbai 410210. It is located exactly 2 minutes walking distance from Central Park Metro Station Gate 2.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is Riitu Institution regarded as the best CA coaching in Kharghar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unlike commercial mass coaching factories with 200+ students per batch, Riitu Institution strictly limits every cohort to 15 students. All lectures are taught 100% by practicing Fellow Chartered Accountants (ex-PwC, Deloitte, Disney), yielding a verified 60%+ CA Intermediate pass rate.',
        },
      },
      {
        '@type': 'Question',
        name: 'What courses are conducted at the Kharghar campus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide physical classroom coaching for CA Foundation, CA Intermediate (Group 1 & 2), 11th & 12th Commerce (CBSE/State Board), CS Executive, CMA Prep, and School Foundations (Classes 6–10).',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I reach the Kharghar center by metro or train?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'By Metro: Take the Navi Mumbai Metro Line 1 to Central Park Station and exit from Gate 2 (2 min walk). By Train: Get down at Kharghar Railway Station (Harbour Line) and take a 7-minute auto directly to Landmark CHS Sector 12.',
        },
      },
    ],
  };

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Kharghar Center', path: '/ca-coaching-kharghar' },
  ];

  return (
    <main className="pt-20 pb-16 bg-white font-sans text-slate-900">
      <SEOHead
        title="Best CA Coaching in Kharghar Sector 12 | 15-Student Micro Batches | Riitu Institution"
        description="Top CA coaching classes in Sector 12 Kharghar near Central Park Metro. 15-student micro batches taught 100% by Fellow CAs. 60%+ pass rate. Book Free Demo today!"
        canonicalPath="/ca-coaching-kharghar"
        schema={[khargharSchema, khargharFaqSchema]}
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
            <li className="text-[#0B3D2C] font-semibold" aria-current="page">Kharghar Sector 12 Campus</li>
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
                <span className="block text-[10px] font-bold text-[#D49A18] uppercase tracking-wider mt-0.5">Kharghar Center One</span>
              </div>
            </div>

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="h-[32px] min-h-[32px] max-h-[32px] box-border leading-none inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 bg-brand-lightgreen border border-emerald-300 text-brand-forest text-xs font-bold uppercase tracking-wider rounded-[3px] shrink-0">
                <span className="w-1.5 h-1.5 bg-brand-forest inline-block shrink-0"></span>
                <span>Sector 12 Kharghar • 15 Seats Only</span>
              </div>
              <GoogleReviewsBadge variant="light" />
            </div>
            
            {/* Semantic H1 */}
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Best CA Coaching in Kharghar Sector 12: <br />
              <span className="italic font-normal text-brand-forest">15-Student Micro Batches</span>
            </h1>
            
            {/* Opening Lead Paragraph (First 10% of Content with Focus Keyword) */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              Welcome to Riitu Institution, Navi Mumbai’s highest-rated center for <strong className="text-slate-900 font-semibold">CA coaching in Kharghar</strong>. Located in Landmark CHS Sector 12, just 2 minutes from Central Park Metro Station Gate 2, we provide specialized coaching for CA Foundation, CA Intermediate, 11th &amp; 12th Commerce, and CS/CMA in strict 15-student micro batches taught 100% by practicing Fellow Chartered Accountants.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#demo-booking" className="btn-gold text-xs px-6 py-3 shadow-sm hover:shadow">
                <span>Book Free 1-on-1 Demo Lecture</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
              <a href="tel:+919512112938" className="btn-outline-forest text-xs px-6 py-3">
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Speak with Admissions: +91-9512112938</span>
              </a>
            </div>

            {/* Reassurance Checklist */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium pt-1">
              <span className="flex items-center gap-1.5 font-bold text-slate-900">
                <span className="text-[#D49A18] font-bold">★</span> Trusted by 1,200+ Students
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Metro Gate 2 Walking Distance
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> 100% Senior Fellow CA Mentors
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> Silent Study Pods &amp; ICAI Library
              </span>
            </div>

          </div>

          {/* Media Item 1: Hero Classroom Photo */}
          <div className="lg:col-span-5">
            <div className="border border-slate-200 rounded-[4px] p-2.5 bg-white shadow-xl">
              <img
                src="/assets/about-us-new-1.jpg"
                alt="CA coaching classes in Sector 12 Kharghar Navi Mumbai - Riitu Institution campus"
                className="w-full h-auto object-cover rounded-[2px]"
              />
              <div className="p-3 bg-slate-50 rounded-[2px] mt-2 border border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-[#0B3D2C]">Landmark CHS Campus</span>
                <span className="text-slate-500">Sector 12, Kharghar</span>
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
            <a href="#center-overview" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Campus Tour
            </a>
            <a href="#programs" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Programs Offered
            </a>
            <a href="#micro-batch-advantage" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              15-Seat Ceiling
            </a>
            <a href="#mentors" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Faculty Mentors
            </a>
            <a href="#transit-directions" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Transit &amp; Metro
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
                AEO Verified Campus Facts • Riitu Institution Kharghar
              </span>
            </div>
            <span className="text-[11px] text-slate-300">Updated 2026-27</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Physical Address</span>
              <span className="text-base font-bold text-white mt-0.5 block">Shop 13 &amp; 14 Landmark CHS</span>
              <p className="text-slate-300 mt-1 leading-normal">Plot 22/23, Sector 12, Kharghar, Navi Mumbai 410210.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Transit Proximity</span>
              <span className="text-base font-bold text-white mt-0.5 block">2 Min Walk to Metro</span>
              <p className="text-slate-300 mt-1 leading-normal">Directly opposite Central Park Metro Station Gate 2.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Batch Size Rule</span>
              <span className="text-base font-bold text-white mt-0.5 block">Strictly 15 Students</span>
              <p className="text-slate-300 mt-1 leading-normal">Zero mass auditoriums; 100% individual accountability.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Direct Counselor Contact</span>
              <span className="text-base font-bold text-white mt-0.5 block">+91-9512112938</span>
              <p className="text-slate-300 mt-1 leading-normal">Available Mon–Sat 8:00 AM – 8:30 PM for inquiries.</p>
            </div>
          </div>
        </section>

        {/* SECTION 1: HYPER-LOCAL CENTER OVERVIEW */}
        <section id="center-overview" className="mb-20 scroll-mt-24 p-8 sm:p-10 bg-[#F8FAF9] border-2 border-slate-200 rounded-[4px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider rounded-[2px] border border-emerald-300">
                <span>The Kharghar Campus Moat</span>
                <span>•</span>
                <span>Built for Serious CA Aspirants</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                A Purpose-Built Physical Mentorship Center in Sector 12
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Clearing Chartered Accountancy examinations requires disciplined physical focus, daily routine, and immediate faculty interaction. At our Kharghar campus, students do not just attend lectures—they belong to an intimate study ecosystem equipped with:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium pt-1">
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> Silent Air-Conditioned Study Pods
                </li>
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> ICAI Reference Library &amp; RTP Archives
                </li>
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> Daily 1-on-1 Doubt-Clearing Desks
                </li>
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> High-Speed WiFi &amp; Video App Backup
                </li>
              </ul>
            </div>

            {/* Media Item 2: Concept Coaching Graphic */}
            <div className="lg:col-span-5">
              <div className="bg-white p-3 border-2 border-slate-200 rounded-[4px] shadow-sm">
                <img
                  src="/assets/Untitled-design-4-1.png"
                  alt="Physical mentorship environment at Riitu Institution Sector 12 Kharghar"
                  className="w-full h-auto object-cover rounded-[2px]"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: PROGRAMS OFFERED AT KHARGHAR */}
        <section id="programs" className="mb-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>Academic Programs</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Cohorts Conducted at Kharghar Campus
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              All programs follow strict 15-student micro batches with flexible morning and evening timings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-forest uppercase">Foundation</span>
                <h3 className="text-lg font-serif font-bold text-slate-900 mt-1">CA Foundation</h3>
                <p className="text-xs text-slate-600 mt-2">
                  Complete coaching for ICAI Jan &amp; May exams with 14-Day Science &amp; Non-Maths Bridge.
                </p>
              </div>
              <Link to="/ca-foundation" className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#0B3D2C] hover:underline flex items-center justify-between">
                <span>View Foundation Details</span>
                <span>→</span>
              </Link>
            </div>

            <div className="bg-white p-6 border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#D49A18] uppercase">Intermediate</span>
                <h3 className="text-lg font-serif font-bold text-slate-900 mt-1">CA Intermediate</h3>
                <p className="text-xs text-slate-600 mt-2">
                  Group 1 &amp; Group 2 coaching with verified 60%+ first-attempt clearance record.
                </p>
              </div>
              <Link to="/ca-intermediate" className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#0B3D2C] hover:underline flex items-center justify-between">
                <span>View Intermediate Details</span>
                <span>→</span>
              </Link>
            </div>

            <div className="bg-white p-6 border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-800 uppercase">Commerce</span>
                <h3 className="text-lg font-serif font-bold text-slate-900 mt-1">11th &amp; 12th Commerce</h3>
                <p className="text-xs text-slate-600 mt-2">
                  Integrated dual-track batch combining State/CBSE boards with early CA Foundation prep.
                </p>
              </div>
              <Link to="/commerce-11th-12th" className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#0B3D2C] hover:underline flex items-center justify-between">
                <span>View Commerce Details</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 3: METRO TRANSIT & DIRECTIONS */}
        <section id="transit-directions" className="mb-20 scroll-mt-24 p-8 sm:p-10 bg-[#0D1B1E] text-white rounded-[4px] border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-[#D49A18] text-xs font-bold uppercase tracking-wider rounded-[2px] border border-white/15">
                <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block"></span>
                <span>Kharghar Sector 12 Landmark CHS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                How to Reach Riitu Institution Kharghar
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our center is strategically located opposite Sector 12, directly adjacent to major transit hubs in Navi Mumbai:
              </p>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D49A18] text-[18px] shrink-0">train</span>
                  <div>
                    <strong className="text-white block">By Metro (Fastest):</strong>
                    Take the Navi Mumbai Metro to Central Park Station. Exit from Gate 2. Walk 150 meters straight towards Landmark CHS (2 minutes).
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D49A18] text-[18px] shrink-0">directions_railway</span>
                  <div>
                    <strong className="text-white block">By Local Train (Harbour Line):</strong>
                    Alight at Kharghar Railway Station. Take an auto from the station auto stand to Landmark CHS Sector 12 (approx. 7 minutes).
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D49A18] text-[18px] shrink-0">pin_drop</span>
                  <div>
                    <strong className="text-white block">GPS Coordinates &amp; Map:</strong>
                    Latitude 19.0435, Longitude 73.0694. Shop No. 13 &amp; 14, Landmark CHS, Plot 22/23, Sector 12, Kharghar.
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
                  <span>Navigate in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Media Item 3: Classroom photo */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 border border-white/10 p-3 rounded-[4px]">
                <img
                  src="/assets/WhatsApp-Image-2026-03-31-at-3.17.05-PM.jpeg"
                  alt="Faculty mentoring students in Kharghar campus"
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
              <span>Kharghar Campus FAQs</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              Kharghar Center: Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Everything you need to know about visiting our Sector 12 campus, attending demo sessions, and enrolling.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>Where is the center located?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Sector 12 Kharghar</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Shop No. 13 &amp; 14, Landmark CHS, Plot No. 22/23, Sector 12, Kharghar, Navi Mumbai 410210, just 2 minutes walk from Central Park Metro Gate 2.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>Can I meet the faculty before taking admission?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Yes, 1-on-1</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Yes. Parents and students can schedule a direct 1-on-1 counseling session with CA Deepak Jain or CA Ritu Jain to review academic history and study roadmaps.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>What are the campus operating hours?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Mon-Sat 8AM-8:30PM</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                The center is open Monday through Saturday from 8:00 AM to 8:30 PM, and on Sundays from 9:00 AM to 2:00 PM for scheduled tests and mock paper evaluations.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>How do I book a Free Demo lecture at the center?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Online / Phone</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                You can book directly on this website or call our Senior Counselor at <a href="tel:+919512112938" className="text-[#0B3D2C] font-bold hover:underline">+91-9512112938</a>.
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
