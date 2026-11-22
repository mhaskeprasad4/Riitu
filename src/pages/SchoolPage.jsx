import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import GoogleReviewsBadge from '../components/GoogleReviewsBadge';
import LiveCTASection from '../components/LiveCTASection';
import DemoBookingSection from '../components/DemoBookingSection';

export default function SchoolPage() {
  const schoolSchema = {
    '@type': 'Course',
    name: 'School Foundations (Classes 6 to 10) - Mathematics & Science Coaching',
    description:
      'Rigorous school foundation coaching for grades 6 to 10 in Mathematics and Science across CBSE, ICSE, SSC, and Cambridge/IB. Mentored by Namrata Gupta, M.Sc (Gold Medalist).',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Riitu Institution',
      sameAs: 'https://riituinstitution.com/',
    },
    educationalCredentialAwarded: 'Secondary School Academic Excellence & Board Prep',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['onsite', 'online'],
      location: 'Shop No. 13 & 14, Landmark CHS, Sector 12, Kharghar, Navi Mumbai 410210',
    },
  };

  const schoolFaqSchema = {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which classes and boards are taught in school foundations at Riitu Institution?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide specialized coaching for Classes 6, 7, 8, 9, and 10 across CBSE, ICSE, Maharashtra State Board (SSC), and International Boards (IB / Cambridge).',
        },
      },
      {
        '@type': 'Question',
        name: 'Who leads the school foundation programs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'School foundations are directed personally by Namrata Gupta, an M.Sc Gold Medalist with extensive teaching experience in both Indian and Canadian International Baccalaureate (IB) curricula.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the batch size for school classes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every cohort is strictly capped at 15 students to guarantee individual attention, daily homework verification, and elimination of math and science fear.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is the school coaching center located in Kharghar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Shop No. 13 & 14, Landmark CHS, Sector 12, Kharghar, Navi Mumbai 410210, just 2 minutes walking distance from Central Park Metro Station Gate 2.',
        },
      },
    ],
  };

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Academic Programs', path: '/courses' },
    { name: 'School Foundations (6th–10th)', path: '/school-6th-10th' },
  ];

  return (
    <main className="pt-20 pb-16 bg-white font-sans text-slate-900">
      <SEOHead
        title="School Foundation Classes (Grades 6th-10th) in Kharghar | Maths & Science"
        description="Top school coaching for Classes 6 to 10 in Kharghar across CBSE, ICSE & SSC. Mentored by M.Sc Gold Medalist Namrata Gupta. Strict 15 seats. Book Free Demo!"
        canonicalPath="/school-6th-10th"
        schema={[schoolSchema, schoolFaqSchema]}
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
            <li className="text-[#0B3D2C] font-semibold" aria-current="page">School Foundations (6th–10th)</li>
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
                <span className="block text-[10px] font-bold text-[#D49A18] uppercase tracking-wider mt-0.5">School Foundation Academy</span>
              </div>
            </div>

            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="h-[32px] min-h-[32px] max-h-[32px] box-border leading-none inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 bg-brand-lightgreen border border-emerald-300 text-brand-forest text-xs font-bold uppercase tracking-wider rounded-[3px] max-w-full">
                <span className="w-1.5 h-1.5 bg-brand-forest inline-block shrink-0"></span>
                <span className="truncate">Classes 6 to 10 • 15 Students Max</span>
              </div>
              <GoogleReviewsBadge variant="light" />
            </div>
            
            {/* Semantic H1 */}
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
              School Foundation Classes in Kharghar, Navi Mumbai: <br />
              <span className="italic font-normal text-brand-forest">Grades 6th to 10th (Maths &amp; Science)</span>
            </h1>
            
            {/* Opening Lead Paragraph (First 10% of Content with Focus Keyword) */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              Searching for the highest-rated <strong className="text-slate-900 font-semibold">school foundation classes in Kharghar</strong>? Riitu Institution delivers rigorous conceptual coaching in Mathematics and Science for Classes 6 to 10 across CBSE, ICSE, SSC, and Cambridge/IB boards. Directed by Namrata Gupta, M.Sc (Gold Medalist), our strict 15-student micro batches replace rote memorization with permanent scientific logic.
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
                <span className="text-emerald-600 font-bold">✓</span> M.Sc Gold Medalist Direction
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-600 font-bold">✓</span> CBSE, ICSE, SSC &amp; IB Aligned
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
                alt="School foundation coaching classes in Kharghar Sector 12 - Riitu Institution"
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
            <a href="#classes" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Classes 6 to 10
            </a>
            <a href="#pedagogy" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Concept Method
            </a>
            <a href="#micro-batch" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              15-Seat Ceiling
            </a>
            <a href="#mentor" className="p-2 bg-white border border-slate-200 rounded-[2px] hover:border-[#0B3D2C] hover:text-[#0B3D2C] transition-colors text-center">
              Namrata Gupta M.Sc
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
                AEO Verified Program Facts • School Foundations
              </span>
            </div>
            <span className="text-[11px] text-slate-300">Updated 2026-27</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Grades Coached</span>
              <span className="text-base font-bold text-white mt-0.5 block">Classes 6th to 10th</span>
              <p className="text-slate-300 mt-1 leading-normal">CBSE, ICSE, SSC, and Cambridge/IB international boards.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Academic Director</span>
              <span className="text-base font-bold text-white mt-0.5 block">Namrata Gupta, M.Sc</span>
              <p className="text-slate-300 mt-1 leading-normal">Gold Medalist with international Canadian IB exposure.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Batch Size Rule</span>
              <span className="text-base font-bold text-white mt-0.5 block">Strictly 15 Students</span>
              <p className="text-slate-300 mt-1 leading-normal">Individual attention for homework, doubts, and tests.</p>
            </div>
            <div className="border-l-2 border-[#D49A18] pl-3.5">
              <span className="block text-slate-400 uppercase tracking-wider text-[10px] font-bold">Center Location</span>
              <span className="text-base font-bold text-white mt-0.5 block">Sector 12 Kharghar</span>
              <p className="text-slate-300 mt-1 leading-normal">Landmark CHS, 2 min walk from Central Park Metro Gate 2.</p>
            </div>
          </div>
        </section>

        {/* SECTION 1: CLASSES 6 TO 10 BREAKDOWN */}
        <section id="classes" className="pt-6 mb-20 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px]">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>Classes 6th to 10th Curriculum</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Foundational Mathematics, Science &amp; English
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We eliminate exam phobia early by building strong conceptual frameworks before students face competitive 10th board exams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-7 border-2 border-slate-200 rounded-[4px] shadow-xs">
              <span className="text-xs font-bold text-brand-forest uppercase tracking-wider">Junior Foundations</span>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">Classes 6th, 7th &amp; 8th</h3>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Focuses on fundamental arithmetic, pre-algebra, geometry, basic physics, chemistry phenomena, and biology. Builds scientific curiosity and mental math agility through interactive problem-solving.
              </p>
            </div>

            <div className="bg-white p-7 border-2 border-slate-200 rounded-[4px] shadow-xs">
              <span className="text-xs font-bold text-[#D49A18] uppercase tracking-wider">Secondary Board Prep</span>
              <h3 className="text-xl font-serif font-bold text-slate-900 mt-1">Classes 9th &amp; 10th (Board Track)</h3>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Rigorous preparation for 10th Board examinations (CBSE, ICSE, SSC). In-depth quadratic equations, trigonometry, coordinate geometry, chemical reactions, electricity &amp; magnetism, and structured board paper presentation drills.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: NAMRATA GUPTA M.SC PROFILE */}
        <section id="mentor" className="mb-20 scroll-mt-24 p-8 sm:p-10 bg-[#F8FAF9] border-2 border-slate-200 rounded-[4px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider rounded-[2px] border border-amber-300">
                <span>Academic Leadership</span>
                <span>•</span>
                <span>M.Sc Gold Medalist</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Directed by Namrata Gupta, M.Sc (Gold Medalist)
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                With international academic experience in Canada and deep expertise across CBSE, ICSE, and IB curricula, Namrata Gupta transforms how young students experience mathematics and science.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium pt-1">
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> M.Sc Mathematics Gold Medalist
                </li>
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> Canadian IB Curriculum Exposure
                </li>
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> Zero Pressure, Concept-First Logic
                </li>
                <li className="flex items-center gap-2 bg-white p-2.5 rounded-[2px] border border-slate-200">
                  <span className="text-[#0B3D2C] font-bold">✓</span> 95%+ Board Scores in 10th Standard
                </li>
              </ul>
            </div>

            {/* Media Item 2: Concept Coaching Graphic */}
            <div className="lg:col-span-5">
              <div className="bg-white p-3 border-2 border-slate-200 rounded-[4px] shadow-sm">
                <img
                  src="/assets/Untitled-design-4-1.png"
                  alt="School foundation concept learning methodology at Riitu Institution Kharghar"
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
                <span>Safe, Disciplined Kharghar Campus</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Near Bal Bharati, DAV, Ryan &amp; Apeejay Schools
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Located in Sector 12 Landmark CHS, our campus provides safe, air-conditioned classrooms, quiet study zones, and immediate metro connectivity for school children and parents across Kharghar and Belapur.
              </p>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D49A18] text-[18px] shrink-0">train</span>
                  <span><strong className="text-white">Metro Connection:</strong> 2 minutes walking distance from Central Park Metro Station (Gate 2).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#D49A18] text-[18px] shrink-0">pin_drop</span>
                  <span><strong className="text-white">Campus Address:</strong> Shop No. 13 &amp; 14, Landmark CHS, Sector 12, Kharghar, Navi Mumbai 410210.</span>
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
                  alt="School foundation batch in Kharghar Sector 12 campus"
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
              <span>School Foundation FAQs</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900">
              School Foundations: FAQs
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Common questions on batch size, individual homework checking, and Free Demo classes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>What is the batch size for school foundation classes?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Strictly 15 Seats</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Every cohort is strictly capped at 15 students to guarantee that every child receives personal attention, homework checking, and doubt resolution.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>Which boards do you support?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">CBSE / ICSE / SSC / IB</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                We support all major boards: CBSE, ICSE, Maharashtra State Board (SSC), and International Baccalaureate / Cambridge curricula.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>How are parent updates and test reports handled?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Weekly Reports</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Parents receive weekly diagnostic test reports and direct communication regarding their child’s concept clarity and homework completion.
              </p>
            </div>

            <div className="p-5 border-2 border-slate-200 rounded-[4px] bg-white">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>How can I book a Free Demo lecture for my child?</span>
                <span className="text-[#0B3D2C] font-bold text-sm">Free Demo</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Book online through this portal or call our counselor at <a href="tel:+919512112938" className="text-[#0B3D2C] font-bold hover:underline">+91-9512112938</a> with zero financial commitment.
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
