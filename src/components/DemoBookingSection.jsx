import React, { useState } from 'react';
import GoogleReviewsBadge from './GoogleReviewsBadge';

export default function DemoBookingSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cohort: 'ca-foundation',
    area: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Automatically route form submission to official live website email: enquiry@riituinstitution.com
    const subject = encodeURIComponent(`Free Demo Class Booking: ${formData.name} [${formData.cohort}]`);
    const body = encodeURIComponent(
      `New Free Demo Lecture Booking Request:\n\n` +
      `Student Name: ${formData.name}\n` +
      `Mobile Contact: ${formData.phone}\n` +
      `Target Cohort: ${formData.cohort}\n` +
      `Location / Commute Area: ${formData.area || 'Kharghar / Navi Mumbai'}\n\n` +
      `Submitted through Riitu Institution Web Portal (Admissions AY 2026-27)\n` +
      `Recipient: enquiry@riituinstitution.com`
    );
    
    try {
      window.location.href = `mailto:enquiry@riituinstitution.com?subject=${subject}&body=${body}`;
    } catch {
      // Fallback if mail client protocol is not bound
    }
  };

  return (
    <section
      id="demo-booking"
      className="py-24 bg-brand-night text-white relative overflow-hidden border-t border-white/10 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3.5 mb-2">
              <div className="bg-white p-1 rounded-[4px] border border-white/20 shadow-sm flex items-center justify-center shrink-0">
                <img
                  src="/assets/Riitu-Logo-Tight.png"
                  alt="Riitu Institution Official Brand Logo"
                  className="h-10 sm:h-11 w-auto object-contain"
                  onError={(e) => {
                    e.target.src = '/assets/Riitu-Institution-Logo.png';
                  }}
                />
              </div>
              <div className="border-l-2 border-white/20 pl-3">
                <span className="block text-base sm:text-lg font-serif font-bold text-white leading-none">
                  Riitu Institution
                </span>
                <span className="block text-[10px] font-bold text-[#D49A18] uppercase tracking-wider mt-0.5">
                  CA Academy
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4">
              <div className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-emerald-950/70 border border-brand-gold/40 text-brand-gold-light text-xs font-bold tracking-wider uppercase rounded-[3px] shrink-0">
                <span className="w-1.5 h-1.5 bg-brand-gold inline-block"></span>
                <span>Admissions Desk • Sector 12 Kharghar</span>
              </div>
              <GoogleReviewsBadge variant="dark" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-[1.18]">
              Experience The 15-Student Cohort. <br />
              <span className="italic font-normal text-brand-gold">Attend A Zero-Fee Free Demo Class.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
              Don't commit blindly to another commercial mass-lecture auditorium. Sit inside an actual 15-student classroom in Kharghar, experience how CA Deepak Jain and CA Ritu Jain dissect concepts, and decide for yourself.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-brand-deep/80 p-6 border border-white/10 rounded-[3px]">
                <span className="text-xs text-brand-gold font-bold uppercase tracking-wider block mb-1">Genuine Classroom Demo</span>
                <h4 className="text-base font-serif font-bold text-white">Full 2-Hour Lecture</h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-sans">
                  Sit in on a live chapter lecture with current students, not a rehearsed sales pitch.
                </p>
              </div>
              <div className="bg-brand-deep/80 p-6 border border-white/10 rounded-[3px]">
                <span className="text-xs text-brand-gold font-bold uppercase tracking-wider block mb-1">Diagnostic Consultation</span>
                <h4 className="text-base font-serif font-bold text-white">1:1 Academic Assessment</h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-sans">
                  Personal consultation with a CA to assess your foundation and map your study timeline.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-sans">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold inline-block"></span> STRICT 15 SEATS CAP
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold inline-block"></span> 100% SENIOR CA FACULTY
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold inline-block"></span> 2 MINS FROM METRO
              </span>
            </div>
          </div>

          {/* Right Column Booking Form with Institution Logo Header */}
          <div className="lg:col-span-5">
            <div className="bg-white text-brand-charcoal p-5 sm:p-8 md:p-10 shadow-2xl rounded-[4px] border-2 border-slate-200">
              
              {/* Institution Seal in Form Header */}
              <div className="border-b border-slate-200 pb-5 mb-6 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-brand-forest uppercase tracking-widest font-sans">
                      Enrollment AY 2026-27
                    </span>
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-[2px]">
                      LIMITED SEATS
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 tracking-tight">Reserve Free Demo</h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-sans">
                    Senior CA Counselor will confirm within 2 hours.
                  </p>
                </div>
                
                <div className="bg-white p-1 rounded-[3px] border border-slate-200 shadow-2xs shrink-0 flex items-center justify-center">
                  <img
                    src="/assets/Riitu-Logo-Tight.png"
                    alt="Riitu Institution Seal"
                    className="h-14 sm:h-16 w-auto object-contain"
                    onError={(e) => {
                      e.target.src = '/assets/Riitu-Institution-Logo.png';
                    }}
                  />
                </div>
              </div>

              {submitted ? (
                <div className="p-8 bg-brand-surface border border-emerald-300 rounded-[3px] text-center space-y-3">
                  <span className="material-symbols-outlined text-5xl text-emerald-600">verified</span>
                  <h4 className="text-lg font-serif font-bold text-slate-900">Free Demo Slot Reserved!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Thank you! Our senior counselor will call your mobile within 2 hours to confirm your subject slot and provide directions to our Sector 12 Kharghar campus.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-brand-forest font-bold underline hover:text-brand-gold"
                    >
                      Book another slot
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">Student Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Atharva Kulkarni"
                      className="w-full text-xs px-4 py-3 border border-slate-300 rounded-[3px] focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Mobile Contact *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit number"
                        className="w-full text-xs px-4 py-3 border border-slate-300 rounded-[3px] focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">Target Cohort *</label>
                      <select
                        required
                        value={formData.cohort}
                        onChange={(e) => setFormData({ ...formData, cohort: e.target.value })}
                        className="w-full text-xs px-4 py-3 border border-slate-300 rounded-[3px] focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest bg-white"
                      >
                        <option value="ca-foundation">CA Foundation</option>
                        <option value="ca-inter">CA Intermediate</option>
                        <option value="commerce-11-12">11th &amp; 12th Commerce</option>
                        <option value="school-6-10">6th - 10th School</option>
                        <option value="cs-cma">CS / CMA</option>
                        <option value="college">B.Com / BMS Degree</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Your Location / Commute Area
                    </label>
                    <input
                      type="text"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      placeholder="e.g. Kharghar Sec 12, Panvel, Nerul, Belapur, Vashi"
                      className="w-full text-xs px-4 py-3 border border-slate-300 rounded-[3px] focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest"
                    />
                  </div>

                  <button type="submit" className="btn-gold w-full text-xs py-3.5 mt-2">
                    <span>Confirm Free Demo Class</span>
                    <span className="material-symbols-outlined text-[16px]">bolt</span>
                  </button>

                  <div className="pt-2 text-center">
                    <span className="text-[11px] text-slate-400">
                      🔒 Zero spam. Strictly 15 admissions accepted per batch.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
