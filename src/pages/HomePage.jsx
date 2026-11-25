import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import ProgramsGrid from '../components/ProgramsGrid';
import PhilosophySection from '../components/PhilosophySection';
import ImageSlider from '../components/ImageSlider';
import BentoGrid from '../components/BentoGrid';
import ExpectationsSection from '../components/ExpectationsSection';
import ModesOfTeachingSection from '../components/ModesOfTeachingSection';
import LearningJourneySection from '../components/LearningJourneySection';
import FacultySection from '../components/FacultySection';
import CampusSection from '../components/CampusSection';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import GoogleReviewsBadge from '../components/GoogleReviewsBadge';
import FaqSection from '../components/FaqSection';
import LiveCTASection from '../components/LiveCTASection';
import DemoBookingSection from '../components/DemoBookingSection';
import RelatedBlogGuides from '../components/RelatedBlogGuides';

const homeFaqSchema = {
  '@type': 'FAQPage',
  '@id': 'https://riituinstitution.com/#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Riitu Institution and where are you located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Riitu Institution is a premier commerce and professional CA coaching academy located at Shop No. 13 & 14, Landmark CHS, Sector 12, Kharghar, Navi Mumbai 410210 (2 minutes from Central Park Metro Gate 2).',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Riitu Institution different from other coaching institutes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strict 15-student micro batches, 100% mentorship by practicing Fellow Chartered Accountants (ex-PwC, Deloitte, Disney), 60%+ CA Intermediate pass rate vs 18% ICAI average, and dedicated 1-on-1 daily doubt solving.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide coaching for CA Foundation and CA Intermediate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, CA coaching is our core specialization covering full 4-paper syllabus for CA Foundation with 14-day Science Bridge, and all 6 papers of CA Intermediate Group 1 and Group 2.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I take admission or book a free demo at Riitu Institution?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book a free demo lecture online on riituinstitution.com or call +91-9512112938 / +91-9512129471. Attend the interactive lecture and 1:1 counseling before the 15-student batch is capped.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <main>
      <SEOHead
        title="Best CA Foundation, Intermediate & Commerce Classes in Kharghar Navi Mumbai | Riitu Institution"
        description="Join Navi Mumbai's premier 15-student micro cohort CA academy in Sector 12 Kharghar. Taught 100% by practicing Fellow Chartered Accountants (ex-PwC, Deloitte, Disney). 60%+ CA Inter pass rate. Book a free demo lecture today."
        canonicalPath="/"
        schema={homeFaqSchema}
        breadcrumbs={null}
      />
      {/* HUMAN-CRAFTED EDITORIAL HERO SECTION WITH FULL-WIDTH PROOF METRICS BAR */}
      <section className="relative pt-12 pb-14 lg:pt-16 lg:pb-20 bg-brand-deep text-white border-b border-white/10 overflow-hidden font-sans">
        {/* Soft Ambient Light Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-brand-emerald/15 blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Top 2-Column Hero: Compact, Perfectly Balanced Left & Right Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Column: Focused Value Proposition (Cleaned up & Optimized - Redundant Logo Removed) */}
            <div className="lg:col-span-7 space-y-5">

              {/* Eyebrow Row: Verified Micro-Cohort Status + Google Reviews Badge (Exact Height Parity h-[32px]) */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <div className="h-[32px] min-h-[32px] max-h-[32px] box-border leading-none inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 bg-brand-night/90 border border-brand-gold/40 text-brand-gold text-xs font-sans font-bold tracking-normal sm:tracking-wider uppercase rounded-[3px] shadow-sm max-w-full">
                  <span className="w-1.5 h-1.5 bg-brand-gold inline-block shrink-0"></span>
                  <span className="truncate">Navi Mumbai • 15-Student CA Cohort</span>
                </div>
                <GoogleReviewsBadge variant="dark" />
              </div>

              {/* High-Impact Playfair Display Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.18] sm:leading-[1.14] break-words">
                Where Future CAs <br />
                Are <span className="italic font-normal text-brand-gold">Forged</span>, Not Mass-Produced.
              </h1>

              {/* Natural Readable Subhead */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans font-normal">
                Skip 300-student commercial auditorium halls where individual doubts are ignored. Experience rigorous, intimate{' '}
                <strong className="text-white font-semibold">15-student micro batches</strong> taught 100% by practicing Fellow Chartered Accountants, producing a verified{' '}
                <strong className="text-brand-gold font-semibold">60%+ first-attempt clearance record</strong>.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 w-full sm:w-auto">
                <a href="#demo-booking" className="btn-gold text-xs sm:text-sm px-6 sm:px-7 py-3.5 shadow-md hover:shadow-lg transition-all text-center justify-center w-full sm:w-auto">
                  <span>Book Free 1-on-1 Demo Lecture</span>
                  <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
                </a>
                <Link to="/courses" className="btn-ghost-dark text-xs sm:text-sm px-5 sm:px-6 py-3.5 text-center justify-center w-full sm:w-auto">
                  <span className="material-symbols-outlined text-[17px]">menu_book</span>
                  <span>Explore 2026-27 Cohorts</span>
                </Link>
              </div>

              {/* High-Converting Social Proof Callout: Trusted by 1,200+ Students */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
                <div className="flex flex-wrap items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-[3px] text-xs font-sans text-slate-200 max-w-full">
                  <span className="flex items-center text-[#D49A18] text-xs leading-none">
                    ★★★★★
                  </span>
                  <span className="font-bold text-white">Trusted by 1,200+ Students</span>
                  <span className="text-slate-400">•</span>
                  <a 
                    href="https://maps.google.com/?q=Riitu+Institution+Sector+12+Kharghar" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-brand-gold font-semibold hover:underline"
                  >
                    185+ Google Reviews (4.9★)
                  </a>
                </div>
                <span className="text-[11px] text-slate-400">
                  Navi Mumbai's Highest Rated CA Mentorship Center
                </span>
              </div>

              {/* Reassurance Checklist */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300 font-medium pt-0.5">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span> Zero Financial Commitment
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span> 1:1 Diagnostic Study Roadmap
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span> Central Park Metro Gate 2
                </span>
              </div>

            </div>

            {/* Right Column: Campus Media Card with Seats Filling Fast Status */}
            <div className="lg:col-span-5">
              <div className="bg-brand-night p-4 border border-white/15 rounded-[4px] shadow-2xl relative">

                {/* Meta Header with Logo & Urgency Badge (PEDAGOGY replaced with EXPERTS) */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-sans">
                  <div className="flex items-center gap-2.5 text-brand-gold font-bold">
                    <div className="bg-white p-1 rounded-[2px] shadow-xs">
                      <img
                        src="/assets/Riitu-Logo-Tight.png"
                        alt="Riitu Logo"
                        className="h-5 w-auto object-contain"
                        onError={(e) => {
                          e.target.src = '/assets/Riitu-Institution-Logo.png';
                        }}
                      />
                    </div>
                    <span>CAMPUS EXPERTS</span>
                  </div>

                  {/* SEATS FILLING FAST BADGE WITH ACTIVE PULSE */}
                  <span className="inline-flex items-center gap-1.5 bg-[#D49A18] text-[#0D1B1E] px-2.5 py-1 font-bold tracking-wider text-[10px] rounded-[2px] shadow-xs">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-none inline-block animate-pulse"></span>
                    <span className="truncate">SEATS FILLING FAST</span>
                  </span>
                </div>

                {/* About-Us Hero Image */}
                <div className="relative overflow-hidden rounded-[2px] border border-white/10">
                  <img
                    src="/assets/about-hero-whatsapp.jpeg"
                    alt="Riitu Institution Classroom Mentoring"
                    className="w-full h-auto object-cover max-h-[340px]"
                    onError={(e) => {
                      e.target.src = '/assets/WhatsApp-Image-2026-03-31-at-3.17.05-PM.jpeg';
                    }}
                  />
                  {/* Subtle Gradient & Quote Overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/85 to-transparent p-5 text-white">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] text-brand-gold uppercase tracking-widest block font-bold">
                        Our Founding Commitment
                      </span>
                      <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded-[2px] border border-emerald-700/60 font-bold">
                        100% CAs
                      </span>
                    </div>
                    <p className="text-sm font-serif italic text-white leading-snug">
                      "Students are not products; their individual first-attempt success is our personal responsibility."
                    </p>
                    <span className="text-[11px] font-sans text-slate-300 block mt-1.5">
                      — CA Ritu Jain &amp; CA Deepak Jain (Founders)
                    </span>
                  </div>
                </div>

                {/* Card Bottom Status */}
                <div className="mt-4 p-3 bg-white/5 border border-white/10 flex items-center justify-between text-xs font-sans">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-none inline-block"></span>
                    <span className="text-slate-300">Strict Cap: 15 Seats Only</span>
                  </div>
                  <span className="text-brand-gold font-bold">Sector 12 Kharghar Campus</span>
                </div>
              </div>
            </div>

          </div>

          {/* FULL-WIDTH HERO PROOF METRICS BAR (ENHANCED WITH 1200+ TRUSTED STUDENTS) */}
          <div className="border-t border-white/10 pt-8 sm:pt-10 mt-10 lg:mt-14">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 sm:gap-6 lg:gap-6 font-sans">
              <div className="border-l-2 border-[#D49A18] pl-3 sm:pl-6 min-w-0">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight">1,200+</div>
                <div className="text-[10px] sm:text-xs uppercase font-bold text-[#D49A18] tracking-wider mt-1.5 truncate">Students Mentored</div>
                <span className="text-[10px] sm:text-[11px] text-slate-400 block mt-0.5 truncate">Trusted across Mumbai</span>
              </div>
              <div className="border-l-2 border-[#D49A18] pl-3 sm:pl-6 min-w-0">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight">15 Max</div>
                <div className="text-[10px] sm:text-xs uppercase font-bold text-[#D49A18] tracking-wider mt-1.5 truncate">Students / Cohort</div>
                <span className="text-[10px] sm:text-[11px] text-slate-400 block mt-0.5 truncate">Strict batch ceiling</span>
              </div>
              <div className="border-l-2 border-[#D49A18] pl-3 sm:pl-6 min-w-0">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight">60%+</div>
                <div className="text-[10px] sm:text-xs uppercase font-bold text-[#D49A18] tracking-wider mt-1.5 truncate">Inter Pass Rate</div>
                <span className="text-[10px] sm:text-[11px] text-slate-400 block mt-0.5 truncate">vs ~18% ICAI avg</span>
              </div>
              <div className="border-l-2 border-[#D49A18] pl-3 sm:pl-6 min-w-0">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight">100%</div>
                <div className="text-[10px] sm:text-xs uppercase font-bold text-[#D49A18] tracking-wider mt-1.5 truncate">CA Mentors</div>
                <span className="text-[10px] sm:text-[11px] text-slate-400 block mt-0.5 truncate">Fellow CAs • 0 interns</span>
              </div>
              <div className="border-l-2 border-[#D49A18] pl-3 sm:pl-6 col-span-2 md:col-span-1 min-w-0">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight">AIR 25</div>
                <div className="text-[10px] sm:text-xs uppercase font-bold text-[#D49A18] tracking-wider mt-1.5 truncate">Rank Experts</div>
                <span className="text-[10px] sm:text-[11px] text-slate-400 block mt-0.5 truncate">Proven methodology</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ACADEMIC PROGRAMS DIRECTORY (SELECT YOUR LEARNING COHORT) */}
      <ProgramsGrid />

      {/* LIVE PHILOSOPHY & CONCEPT COACHING SECTION (FEATURING UNTITLED-DESIGN-4-1.PNG) */}
      <PhilosophySection />

      {/* LIVE IMAGE SLIDER (MATCHED TO LIVE SITE) */}
      <ImageSlider />

      {/* OPTIMIZED INSTITUTIONAL BRANDING & FACULTY PEDIGREE BAR (CLEAN RESPONSIVE BADGES - NO ORPHANED PIPES) */}
      <section className="py-6 sm:py-7 bg-[#0D1B1E] text-slate-300 border-b border-white/10 text-xs font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5">

            {/* Branding Crest with Full Color Logo on White Badge */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="bg-white p-1 rounded-[4px] shadow-xs flex items-center justify-center">
                <img
                  src="/assets/Riitu-Logo-Tight.png"
                  alt="Riitu Institution"
                  className="h-9 w-auto object-contain"
                  onError={(e) => {
                    e.target.src = '/assets/Riitu-Logo-Tight.png';
                  }}
                />
              </div>
              <div className="border-l-2 border-[#D49A18]/40 pl-3">
                <span className="block text-sm font-serif font-bold text-white leading-none">Riitu Institution</span>
                <span className="block text-[10px] font-bold text-[#D49A18] uppercase tracking-wider mt-0.5">Faculty Pedigree</span>
              </div>
            </div>

            {/* Corporate Firms & Rank Experts (Clean badges wrapping gracefully on all screen sizes) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2 sm:gap-3 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-[3px] hover:border-[#D49A18]/40 transition-colors">
                <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block"></span>
                <span>PwC Statutory Audit</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-[3px] hover:border-[#D49A18]/40 transition-colors">
                <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block"></span>
                <span>Deloitte Advisory</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-[3px] hover:border-[#D49A18]/40 transition-colors">
                <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block"></span>
                <span>EY Tax Consulting</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-[3px] hover:border-[#D49A18]/40 transition-colors">
                <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block"></span>
                <span>The Walt Disney Company</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0B3D2C]/80 border border-[#D49A18]/50 rounded-[3px] text-[#D49A18] font-bold shadow-xs">
                <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block"></span>
                <span>AIR 25 Rank Experts</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ARCHITECTURAL BENTO GRID (THE 15-STUDENT FORMULA & EXPERT MENTORSHIP DIFFERENCE) */}
      <BentoGrid />

      {/* WHAT TO EXPECT FROM RIITU INSTITUTION & VERIFIED METRICS */}
      <ExpectationsSection />

      {/* MODES OF TEACHING (CLASSROOM, ONLINE, LIVESTREAM, RECORDED - LIGHT VERSION) */}
      <ModesOfTeachingSection />

      {/* STUDENT LEARNING JOURNEY (FEATURING UNTITLED-DESIGN-5-1.PNG) */}
      <LearningJourneySection />

      {/* GOOGLE REVIEWS TRUST SECTION (WITH OFFICIAL GOOGLE LOGO) */}
      <GoogleReviewsSection />

      {/* MEET THE FACULTY */}
      <FacultySection />

      {/* CAMPUS SHOWCASE */}
      <CampusSection />

      {/* FREQUENTLY ASKED QUESTIONS (ACCORDION WITH 15 QUESTIONS FROM LIVE SITE) */}
      <FaqSection />

      {/* FEATURED BLOG & KNOWLEDGE BASE GUIDES */}
      <RelatedBlogGuides
        slugs={[
          'best-ca-coaching-in-kharghar-navi-mumbai',
          'how-to-prepare-for-ca-foundation-after-12th',
          'how-to-clear-ca-intermediate-first-attempt',
        ]}
        title="Latest Exam Insights & Preparation Blueprints"
        subtitle="Authoritative articles on CA exam strategies, syllabus roadmaps, and career guidance by practicing Chartered Accountants."
        badge="Knowledge Base & Guides"
      />

      {/* LIVE CTA BANNER: Start Your Journey Towards A Successful Commerce Career */}
      <LiveCTASection />

      {/* FREE DEMO BOOKING SECTION */}
      <DemoBookingSection />
    </main>
  );
}
