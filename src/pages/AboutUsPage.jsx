import React from 'react';
import SEOHead from '../components/SEOHead';
import GoogleReviewsBadge from '../components/GoogleReviewsBadge';
import LiveCTASection from '../components/LiveCTASection';
import DemoBookingSection from '../components/DemoBookingSection';

export default function AboutUsPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
  ];

  return (
    <main className="py-24 bg-white font-sans">
      <SEOHead
        title="About Riitu Institution | Our Mission, Founders & Mentorship Philosophy"
        description="Learn why CA Ritu Jain and CA Deepak Jain founded Riitu Institution to replace 300-student commercial mass factories with intimate 15-student micro cohorts taught by Fellow CAs."
        canonicalPath="/about-us"
        breadcrumbs={breadcrumbs}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            
            {/* Prominent Visible Brand Header with Logo */}
            <div className="flex items-center gap-3.5 mb-2">
              <div className="bg-white p-1.5 rounded-[4px] border border-slate-200/90 shadow-xs flex items-center justify-center shrink-0">
                <img
                  src="/assets/Riitu-Logo-Tight.png"
                  alt="Riitu Institution Official Brand Logo"
                  className="h-10 sm:h-12 w-auto object-contain"
                  onError={(e) => {
                    e.target.src = '/assets/Riitu-Institution-Logo.png';
                  }}
                />
              </div>
              <div className="border-l-2 border-[#0B3D2C]/25 pl-3">
                <span className="block text-lg sm:text-xl font-serif font-bold text-[#0B3D2C] leading-none">
                  Riitu Institution
                </span>
                <span className="block text-[11px] font-bold text-[#D49A18] uppercase tracking-wider mt-0.5">
                  CA Academy
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="h-[32px] min-h-[32px] max-h-[32px] box-border leading-none inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 bg-brand-lightgreen border border-emerald-300 text-brand-forest text-xs font-bold uppercase tracking-wider rounded-[3px] shrink-0">
                <span className="w-1.5 h-1.5 bg-brand-forest inline-block shrink-0"></span>
                <span>Our Founding Story • Trusted by 1,200+ Students</span>
              </div>
              <GoogleReviewsBadge variant="light" />
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.2]">
              "Students Are Human Minds, <br />
              <span className="italic font-normal text-brand-forest">Not Assembly Line Products."</span>
            </h1>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              Riitu Institution was founded by CA Ritu Jain and CA Deepak Jain as a conscious revolt against the impersonal mass coaching industry that packs 300 to 500 students into auditorium halls.
            </p>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              We believe Chartered Accountancy requires rigorous intellectual inquiry, individual diagnostic evaluation, and direct mentorship from experienced professionals. Our strict 15-student cap per batch ensures that every learner receives the personal attention necessary to clear on their first attempt.
            </p>
            
            <div className="pt-2">
              <a href="#demo-booking" className="btn-gold text-xs px-6 py-3">
                <span>Join Our Next Free Demo</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-slate-200 rounded-[4px] p-2 bg-white shadow-xl">
              <img
                src="/assets/about-hero-whatsapp.jpeg"
                alt="Founders & Students at Riitu Institution"
                className="w-full h-auto object-cover rounded-[2px]"
                onError={(e) => {
                  e.target.src = '/assets/WhatsApp-Image-2026-03-31-at-3.17.05-PM.jpeg';
                }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Live CTA Section with Big Logo */}
      <LiveCTASection />

      <div className="mt-4">
        <DemoBookingSection />
      </div>
    </main>
  );
}
