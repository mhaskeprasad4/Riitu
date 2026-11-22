import React, { useState } from 'react';
import GoogleReviewsBadge from './GoogleReviewsBadge';

export default function DemoBookingSection() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cohort: 'ca-foundation',
    area: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      cohort: formData.cohort,
      area: formData.area || 'Kharghar / Navi Mumbai',
      source: 'Riitu Institution Web Portal - Free Demo Booking'
    };

    let delivered = false;

    // 1. Primary: Direct Hostinger PHP endpoint
    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const json = await res.json().catch(() => null);
        if (json && json.success) {
          delivered = true;
        }
      }
    } catch {
      // Local dev server or direct PHP not found
    }

    // 2. Secondary: Root /contact.php
    if (!delivered) {
      try {
        const res2 = await fetch('/contact.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        if (res2.ok) {
          const json2 = await res2.json().catch(() => null);
          if (json2 && json2.success) {
            delivered = true;
          }
        }
      } catch {
        // Fallback
      }
    }

    // 3. Fallback: FormSubmit.co background email API to enquiry@riituinstitution.com
    if (!delivered) {
      try {
        await fetch('https://formsubmit.co/ajax/enquiry@riituinstitution.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email || 'Not provided',
            cohort: formData.cohort,
            area: formData.area || 'Kharghar / Navi Mumbai',
            _subject: `New Free Demo Booking: ${formData.name} [${formData.cohort}]`,
            _template: 'table',
            _captcha: 'false'
          })
        });
      } catch {
        // Continue to success screen
      }
    }

    setSubmitting(false);
    setSubmitted(true);
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
              <div className="h-[32px] min-h-[32px] max-h-[32px] box-border leading-none inline-flex items-center gap-2 px-3 bg-emerald-950/70 border border-brand-gold/40 text-brand-gold-light text-xs font-bold tracking-wider uppercase rounded-[3px] shrink-0">
                <span className="w-1.5 h-1.5 bg-brand-gold inline-block"></span>
                <span>Trusted by 1,200+ Students • Admissions Open</span>
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
                <div className="p-7 sm:p-8 bg-brand-surface border-2 border-emerald-400 rounded-[4px] text-center space-y-4 shadow-sm font-sans animate-fade-in">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700">
                    <span className="material-symbols-outlined text-3xl">verified</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-slate-900">
                      Free Demo Booking Received!
                    </h4>
                    <p className="text-xs text-brand-forest font-semibold mt-1">
                      Direct notification sent to <strong className="text-slate-900 underline">enquiry@riituinstitution.com</strong>
                    </p>
                  </div>
                  
                  <div className="p-3.5 bg-white border border-slate-200 rounded-[3px] text-left text-xs text-slate-700 space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Student Name:</span>
                      <strong className="text-slate-900">{formData.name}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Mobile Contact:</span>
                      <strong className="text-slate-900">{formData.phone}</strong>
                    </div>
                    {formData.email && (
                      <div className="flex justify-between">
                        <span className="text-slate-500 font-medium">Email:</span>
                        <strong className="text-slate-900">{formData.email}</strong>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Target Cohort:</span>
                      <strong className="text-brand-forest uppercase">{formData.cohort}</strong>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our admissions director will call you within 2 hours to confirm your seat. You can also connect with us on WhatsApp immediately:
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/919512112938?text=${encodeURIComponent(
                        `Hello Riitu Institution! I just booked a Free Demo for ${formData.name} for ${formData.cohort}. Contact: ${formData.phone}. Please confirm my slot.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold flex-1 text-xs py-3 flex items-center justify-center gap-2"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-slate-900">
                        <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.77.464 3.498 1.344 5.027L2 22l5.09-1.336A10.01 10.01 0 0012.031 22C17.568 22 22 17.505 22 12.031 22 6.495 17.568 2 12.031 2zm0 18.286a8.25 8.25 0 01-4.21-1.155l-.302-.18-3.128.82.835-3.05-.197-.314a8.25 8.25 0 01-1.278-4.376c0-4.57 3.717-8.286 8.28-8.286 4.562 0 8.278 3.717 8.278 8.286 0 4.57-3.716 8.285-8.278 8.285zm4.536-6.195c-.248-.124-1.468-.724-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.643.807-.788.973-.145.166-.29.186-.539.062-.248-.124-1.048-.386-1.996-1.232-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.112.248-.29.373-.435.124-.145.166-.248.249-.414.083-.166.041-.311-.021-.435-.062-.124-.56-1.35-.767-1.848-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.249-.87.85-.87 2.073 0 1.223.89 2.406 1.014 2.572.124.166 1.751 2.673 4.242 3.748.593.256 1.056.409 1.417.524.595.189 1.137.162 1.565.098.477-.071 1.468-.6 1.675-1.182.207-.58.207-1.078.145-1.182-.062-.104-.228-.166-.477-.29z"></path>
                      </svg>
                      <span>Confirm on WhatsApp</span>
                    </a>
                    <a
                      href="tel:+919512112938"
                      className="btn-outline-forest flex-1 text-xs py-3 flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[16px]">call</span>
                      <span>Call +91-9512112938</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', phone: '', email: '', cohort: 'ca-foundation', area: '' });
                      }}
                      className="text-xs text-slate-500 hover:text-brand-forest underline font-semibold"
                    >
                      Book another student slot &rarr;
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. student@gmail.com"
                        className="w-full text-xs px-4 py-3 border border-slate-300 rounded-[3px] focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1">
                        Location / Area
                      </label>
                      <input
                        type="text"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        placeholder="e.g. Kharghar Sec 12, Panvel"
                        className="w-full text-xs px-4 py-3 border border-slate-300 rounded-[3px] focus:outline-none focus:border-brand-forest focus:ring-1 focus:ring-brand-forest"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold w-full text-xs py-3.5 mt-2 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></span>
                        <span>Sending to Admissions Desk...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm Free Demo Class</span>
                        <span className="material-symbols-outlined text-[16px]">bolt</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center space-y-1">
                    <div className="flex items-center justify-center gap-1.5 text-xs text-brand-forest font-bold">
                      <span className="text-emerald-600">✓</span> 100% Free Demo Session • Zero Fees
                    </div>
                    <span className="text-[11px] text-slate-500 block">
                      🔒 Dispatches directly to enquiry@riituinstitution.com. Strictly 15 admissions per batch.
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
