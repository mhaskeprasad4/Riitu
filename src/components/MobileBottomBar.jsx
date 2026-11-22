import React from 'react';

/**
 * MobileBottomBar
 * High-conversion sticky bottom action bar for mobile devices (< 1024px).
 * Gives prospective students & parents instant 1-tap access to:
 * 1. Direct Phone Call (+91-9512112938)
 * 2. WhatsApp Admissions Desk
 * 3. Book Free Demo Lecture Jump Link
 */
export default function MobileBottomBar() {
  return (
    <aside
      aria-label="Mobile Quick Contact Bar"
      className="fixed bottom-0 inset-x-0 z-40 bg-white/98 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_24px_rgba(0,0,0,0.12)] px-2.5 py-2 flex items-center justify-between gap-2 lg:hidden font-sans"
    >
      {/* 1. Direct Call Button */}
      <a
        href="tel:+919512112938"
        className="flex-1 min-w-0 h-11 px-2 bg-slate-100 hover:bg-slate-200 text-[#0B3D2C] font-bold text-xs rounded-[3px] border border-slate-300 flex items-center justify-center gap-1.5 transition-colors active:scale-98"
        title="Call Senior CA Mentors"
      >
        <span className="material-symbols-outlined text-[18px] text-[#0B3D2C] shrink-0">
          phone_in_talk
        </span>
        <span className="truncate">Call CA</span>
      </a>

      {/* 2. WhatsApp Admissions Chat */}
      <a
        href="https://wa.me/919512112938?text=Hello%20Riitu%20Institution,%20I%20would%20like%20to%20enquire%20about%20CA%20and%20Commerce%20admissions."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 min-w-0 h-11 px-2 bg-[#EBF5F0] hover:bg-[#DCEDE4] text-[#0B3D2C] font-bold text-xs rounded-[3px] border border-emerald-300 flex items-center justify-center gap-1.5 transition-colors active:scale-98"
        title="Chat on WhatsApp with Admissions Counselor"
      >
        {/* Official WhatsApp SVG Logo */}
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#25D366] shrink-0">
          <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.77.464 3.498 1.344 5.027L2 22l5.09-1.336A10.01 10.01 0 0012.031 22C17.568 22 22 17.505 22 12.031 22 6.495 17.568 2 12.031 2zm0 18.286a8.25 8.25 0 01-4.21-1.155l-.302-.18-3.128.82.835-3.05-.197-.314a8.25 8.25 0 01-1.278-4.376c0-4.57 3.717-8.286 8.28-8.286 4.562 0 8.278 3.717 8.278 8.286 0 4.57-3.716 8.285-8.278 8.285zm4.536-6.195c-.248-.124-1.468-.724-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.643.807-.788.973-.145.166-.29.186-.539.062-.248-.124-1.048-.386-1.996-1.232-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.112.248-.29.373-.435.124-.145.166-.248.249-.414.083-.166.041-.311-.021-.435-.062-.124-.56-1.35-.767-1.848-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.249-.87 85-.87 2.073 0 1.223.89 2.406 1.014 2.572.124.166 1.751 2.673 4.242 3.748.593.256 1.056.409 1.417.524.595.189 1.137.162 1.565.098.477-.071 1.468-.6 1.675-1.182.207-.58.207-1.078.145-1.182-.062-.104-.228-.166-.477-.29z" />
        </svg>
        <span className="truncate">WhatsApp</span>
      </a>

      {/* 3. Book Free Demo Button */}
      <a
        href="#demo-booking"
        className="flex-[1.3] min-w-0 h-11 px-3 bg-[#D49A18] hover:bg-[#B88210] text-white font-bold text-xs rounded-[3px] shadow-sm flex items-center justify-center gap-1.5 transition-colors active:scale-98"
        title="Book Free Demo Lecture Slot"
      >
        <span className="truncate">Free Demo</span>
        <span className="material-symbols-outlined text-[16px] shrink-0">
          arrow_forward
        </span>
      </a>
    </aside>
  );
}
