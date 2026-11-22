import React from 'react';
import GoogleReviewsBadge from './GoogleReviewsBadge';

const facultyMembers = [
  {
    name: 'CA Ritu Jain',
    role: 'Founder & Academic Director',
    degree: 'ACA, B.Com • Financial Accounting Specialist',
    bio: 'Demystifies complicated accounting standards and company accounts through first-principles reasoning. Has mentored 800+ CA rankers over 12+ years.',
    image: '/assets/p1-1.jpg',
  },
  {
    name: 'CA Deepak Jain',
    role: 'Co-Founder & Head of Taxation',
    degree: 'FCA, DISA (ICAI) • Direct & Indirect Taxation',
    bio: 'Practicing Fellow Chartered Accountant bringing real income tax tribunal litigation and GST advisory experience straight into the classroom.',
    image: '/assets/p3.jpg',
  },
  {
    name: 'CA Nikita Innani',
    role: 'Ex-Deloitte Advisory',
    degree: 'CA, B.Com • Costing & Financial Management',
    bio: 'Equips students with analytical shortcut frameworks and speed-solving algorithms that make CA Intermediate Costing intuitive and high-scoring.',
    image: '/assets/p4.jpg',
  },
  {
    name: 'CA Vinaya Gundecha',
    role: 'Ex-PwC Senior Auditor',
    degree: 'CA • Auditing & Corporate Governance',
    bio: 'Translates complex statutory audit regulations and professional ethics into memorable corporate fraud detection scenarios for exam retention.',
    image: '/assets/p5.jpg',
  },
  {
    name: 'CA Sushmita Manda',
    role: 'Ex-Disney Corporate Tax',
    degree: 'CA • Corporate Taxation & GST',
    bio: 'Specialist in corporate income tax and GST computation, delivering step-by-step methodologies to handle 14-mark comprehensive exam problems.',
    image: '/assets/p6.jpg',
  },
  {
    name: 'Namrata Gupta',
    role: 'School Foundations Dean',
    degree: 'M.Sc, B.Ed (Gold Medalist) • Mathematics & Science',
    bio: 'Builds deep mathematical problem-solving confidence from Grade 6 to 10 across Cambridge, IB, ICSE, and CBSE board curricula.',
    image: '/assets/p7.jpg',
  },
];

export default function FacultySection() {
  return (
    <section className="py-24 bg-brand-surface border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-3.5 mb-2">
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
            <div className="text-left border-l-2 border-[#0B3D2C]/25 pl-3">
              <span className="block text-base sm:text-lg font-serif font-bold text-[#0B3D2C] leading-none">
                Riitu Institution
              </span>
              <span className="block text-[10px] font-bold text-[#D49A18] uppercase tracking-wider mt-0.5">
                CA Academy
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-3">
            <div className="h-[32px] min-h-[32px] max-h-[32px] box-border leading-none inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 bg-brand-lightgreen border border-emerald-300 text-brand-forest text-xs font-bold uppercase tracking-wider rounded-[3px] shrink-0">
              <span className="w-1.5 h-1.5 bg-brand-forest inline-block shrink-0"></span>
              <span>Senior Mentors &amp; Directors</span>
            </div>
            <GoogleReviewsBadge variant="light" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900">
            Meet Your CA Mentors
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Trusted by 1,200+ students. Every subject at Riitu is taught directly by qualified professionals with Big 4 and corporate litigation experience. Zero junior assistants.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="h-72 bg-slate-100 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-brand-deep text-brand-gold text-[10px] px-2.5 py-1 uppercase font-bold tracking-wider rounded-[2px] shadow-md">
                    {member.role}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-slate-900">{member.name}</h3>
                  <p className="text-xs text-brand-forest font-bold mt-1">{member.degree}</p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed font-sans">{member.bio}</p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">1:1 Doubts Mentor</span>
                <a href="#demo-booking" className="text-brand-forest font-bold hover:text-brand-gold transition-colors">
                  Book Free Demo with {member.name.split(' ')[0]} →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
