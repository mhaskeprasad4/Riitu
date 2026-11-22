import React from 'react';

const googleReviews = [
  {
    name: 'Aditi Deshmukh',
    role: 'CA Intermediate (Both Groups Cleared)',
    date: '2 weeks ago',
    stars: 5,
    text: 'I cleared CA Inter in my very first attempt thanks to Deepak Sir and Ritu Ma’am! Unlike mass coaching institutes in Dadar with 300 students where nobody knows your name, here each batch has strictly 15 students. Deepak Sir checked my tax computation and journal entries every single day.',
    verified: 'Google Verified Student',
    initials: 'AD',
    bg: 'bg-emerald-700',
  },
  {
    name: 'Kunal Sharma',
    role: 'CA Foundation (Scored 318 / 400)',
    date: '1 month ago',
    stars: 5,
    text: 'I did 12th in Science and was terrified of accounting debit/credit rules. The 14-Day Science Bridge course by Ritu Ma’am completely transformed my conceptual understanding. The Kharghar Sector 12 center is just a 2-minute walk from Central Park Metro Gate 2.',
    verified: 'Local Guide • 24 reviews',
    initials: 'KS',
    bg: 'bg-blue-700',
  },
  {
    name: 'Pooja Iyer',
    role: 'Parent of 11th & 12th Commerce Student',
    date: '3 weeks ago',
    stars: 5,
    text: 'Best decision we made for our daughter. The faculty are real practicing CAs from Deloitte and PwC, not fresh college graduates or interns. Weekly mock test marks are shared transparently with parents and personal doubts are cleared immediately.',
    verified: 'Google Verified Parent',
    initials: 'PI',
    bg: 'bg-purple-700',
  },
  {
    name: 'Rohan Patil',
    role: 'CA Intermediate Group 1',
    date: '1 month ago',
    stars: 5,
    text: 'Costing by CA Nikita Innani (Ex-Deloitte) is phenomenal. Her formula shortcut methods and time-management algorithms saved me at least 40 minutes in the exam hall. Best CA coaching institute in Navi Mumbai hands down.',
    verified: 'Google Verified Student',
    initials: 'RP',
    bg: 'bg-amber-700',
  },
  {
    name: 'Sneha Kulkarni',
    role: '12th Board 96.2% + CA Foundation Aspirant',
    date: '2 months ago',
    stars: 5,
    text: 'The dual-track synergy between 12th State Board syllabus and CA Foundation is seamless. Saved me a full year after 12th. The teachers treat every student with immense care and patience. Zero exam stress, pure clarity.',
    verified: 'Google Verified Student',
    initials: 'SK',
    bg: 'bg-rose-700',
  },
  {
    name: 'Amitabh Sengupta',
    role: 'Parent (Kharghar Sector 20)',
    date: '2 months ago',
    stars: 5,
    text: 'We visited 4 different coaching institutes before meeting CA Deepak Jain at Landmark CHS Sector 12. His transparency regarding the 15-student ceiling convinced us immediately. Highly disciplined environment with air-conditioned study pods.',
    verified: 'Local Guide • 18 reviews',
    initials: 'AS',
    bg: 'bg-indigo-700',
  },
];

export default function GoogleReviewsSection() {
  return (
    <section className="py-24 bg-brand-surface border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Logo & Trust Banner */}
        <div className="bg-white border border-slate-200 rounded-[4px] p-8 sm:p-10 shadow-sm mb-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left: Google Trust Badging */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              
              {/* Official Google Icon */}
              <div className="w-16 h-16 bg-white border border-slate-200 rounded-[4px] shadow-sm p-3 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 48 48" className="w-10 h-10">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
              </div>

              {/* Trust Text */}
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">4.9</span>
                  <div className="flex items-center text-amber-500 text-lg">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-xs font-bold bg-amber-50 text-amber-900 px-2.5 py-0.5 rounded-[2px] border border-amber-200">
                    185+ Google Reviews
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                  Rated #1 CA &amp; Commerce Academy in Kharghar
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Verified feedback from students and parents at our Landmark CHS Sector 12 Kharghar Center.
                </p>
              </div>

            </div>

            {/* Right: Branding Logo & Maps CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <div className="hidden md:flex items-center gap-3 border-r border-slate-200 pr-5">
                <div className="bg-white p-1 rounded-[3px] border border-slate-200 shadow-2xs">
                  <img
                    src="/assets/Riitu-Logo-Tight.png"
                    alt="Riitu Institution Official Seal"
                    className="h-12 w-auto object-contain"
                    onError={(e) => {
                      e.target.src = '/assets/Riitu-Institution-Logo.png';
                    }}
                  />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-serif font-bold text-brand-forest">Riitu Institution</span>
                  <span className="block text-[11px] text-brand-gold-dark font-bold uppercase">CA Academy</span>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Riitu+Institution+Sector+12+Kharghar"
                target="_blank"
                rel="noreferrer"
                className="btn-gold text-xs px-5 py-3 flex items-center gap-2"
              >
                <span>Read All Reviews on Google Maps</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>

          </div>
        </div>

        {/* 6 Google Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {googleReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-slate-200 rounded-[4px] p-7 shadow-xs hover:border-[#0B3D2C] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${rev.bg} text-white font-bold text-sm rounded-[3px] flex items-center justify-center shrink-0`}>
                      {rev.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">{rev.name}</h4>
                      <span className="text-[11px] text-slate-500 block">{rev.role}</span>
                    </div>
                  </div>

                  {/* Google G small */}
                  <svg viewBox="0 0 48 48" className="w-5 h-5 shrink-0 opacity-80">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  </svg>
                </div>

                {/* Stars and Date */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-amber-500 text-sm tracking-widest">
                    {'★'.repeat(rev.stars)}
                  </div>
                  <span className="text-[11px] text-slate-400">• {rev.date}</span>
                </div>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                  "{rev.text}"
                </p>
              </div>

              {/* Card Footer Badge */}
              <div className="pt-4 border-t border-slate-100 mt-6 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  <span>{rev.verified}</span>
                </span>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Posted on Google</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
