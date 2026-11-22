import React from 'react';

export default function CampusSection() {
  return (
    <section className="py-24 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3.5 mb-3">
            <div className="bg-white p-1 rounded-[4px] border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
              <img
                src="/assets/Riitu-Logo-Tight.png"
                alt="Riitu Institution Official Brand Logo"
                className="h-10 sm:h-11 w-auto object-contain"
                onError={(e) => {
                  e.target.src = '/assets/Riitu-Institution-Logo.png';
                }}
              />
            </div>
            <div className="border-l-2 border-[#0B3D2C]/25 pl-3">
              <span className="block text-base sm:text-lg font-serif font-bold text-[#0B3D2C] leading-none">
                Riitu Institution
              </span>
              <span className="block text-[10px] font-bold text-[#D49A18] uppercase tracking-wider mt-0.5">
                CA Academy
              </span>
            </div>
          </div>
          <div className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 bg-brand-lightgreen border border-emerald-300 text-brand-forest text-[10.5px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-wider rounded-[3px] mb-3">
            <span className="w-1.5 h-1.5 bg-brand-forest inline-block shrink-0"></span>
            <span>Physical Learning Center • Kharghar</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Visit Our Kharghar Center
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Parents and students are welcome to visit our campus, inspect our ICAI reference library, and meet CA Deepak Jain before making an enrollment decision.
          </p>
        </div>

        {/* Two-Column Grid: Campus Information + Live Google Map */}
        <div className="bg-[#F8FAF9] border-2 border-slate-200 rounded-[4px] p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Details & Contact */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Address Card */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3.5 p-4 bg-white border-2 border-slate-200 rounded-[4px] shadow-xs hover:border-[#0B3D2C] transition-all">
                <span className="material-symbols-outlined text-brand-forest text-xl mt-0.5 shrink-0">location_on</span>
                <div>
                  <strong className="text-slate-900 block text-sm font-bold">Campus Location</strong>
                  <span className="text-slate-600 mt-0.5 block leading-relaxed">
                    Shop No. 13 &amp; 14, Landmark CHS, Plot No. 22/23, Sector 12, Kharghar, Navi Mumbai 410210
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-white border-2 border-slate-200 rounded-[4px] shadow-xs hover:border-[#0B3D2C] transition-all">
                <span className="material-symbols-outlined text-brand-forest text-xl mt-0.5 shrink-0">directions_subway</span>
                <div>
                  <strong className="text-slate-900 block text-sm font-bold">Transit Connectivity</strong>
                  <span className="text-slate-600 mt-0.5 block leading-relaxed">
                    2 minutes walk from Central Park Metro Gate 2 • 7 minutes from Kharghar Railway Station
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 bg-white border-2 border-slate-200 rounded-[4px] shadow-xs hover:border-[#0B3D2C] transition-all">
                <span className="material-symbols-outlined text-brand-forest text-xl mt-0.5 shrink-0">schedule</span>
                <div>
                  <strong className="text-slate-900 block text-sm font-bold">Admissions Office Hours</strong>
                  <span className="text-slate-600 mt-0.5 block leading-relaxed">
                    Monday – Saturday: 8:00 AM – 8:30 PM <br />
                    Sunday: 9:00 AM – 5:00 PM (Counseling Available)
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="https://maps.google.com/?q=Riitu+Institution+Sector+12+Kharghar"
                target="_blank"
                rel="noreferrer"
                className="btn-gold text-xs px-5 py-3"
              >
                <span className="material-symbols-outlined text-[16px]">directions</span>
                <span>Get Directions</span>
              </a>
              <a href="tel:+919512112938" className="btn-outline-forest text-xs px-5 py-3">
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>+91-9512112938</span>
              </a>
            </div>

            {/* Campus Facilities Checklist */}
            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-brand-forest inline-block rounded-[1px]"></span>
                AC 15-Seat Classrooms
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-brand-forest inline-block rounded-[1px]"></span>
                Self-Study Pods
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-brand-forest inline-block rounded-[1px]"></span>
                ICAI Library Access
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-brand-forest inline-block rounded-[1px]"></span>
                High-Speed Wi-Fi
              </span>
            </div>

          </div>

          {/* Right Column: Live Interactive Google Map Embed */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-slate-300 rounded-[4px] shadow-lg overflow-hidden relative group">
              
              {/* Map Header Status Bar */}
              <div className="bg-brand-night text-white px-4 py-2.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-none inline-block"></span>
                  <span className="font-serif font-bold text-brand-gold-light">Riitu Institution</span>
                  <span className="text-slate-400 hidden sm:inline">• Landmark CHS, Sector 12 Kharghar</span>
                </div>
                <span className="text-[11px] text-slate-300 bg-white/10 px-2 py-0.5 rounded-[2px]">
                  Central Park Metro
                </span>
              </div>

              {/* The Live Google Map Iframe */}
              <div className="w-full h-[380px] sm:h-[430px] bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5295130701134!2d73.0615716793457!3d19.0404428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c26a65555555%3A0x176fc1b6fe9d8abe!2sRiitu%20Institution!5e0!3m2!1sen!2sin!4v1795281768472!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Riitu Institution Kharghar Google Map"
                  className="w-full h-full"
                ></iframe>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
