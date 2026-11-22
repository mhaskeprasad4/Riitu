import React from 'react';
import GoogleReviewsBadge from './GoogleReviewsBadge';

const facultyMembers = [
  {
    name: 'CA Ritu Jain',
    role: 'Founder & Academic Director',
    degree: 'FCA, M.Com • Accounts & Taxation Specialist',
    bio: 'Qualified Chartered Accountant with a Master’s degree in Commerce. With over 15 years of teaching experience in Accounts and Taxation, she has mentored hundreds of students for academic and professional courses with a strong focus on conceptual clarity, practical application, and exam performance.',
    image: '/assets/p1-1.jpg',
  },
  {
    name: 'CA Deepak Jain',
    role: 'Co-Founder & Director',
    degree: 'FCA • Ex-Global CFO | PwC, Disney & Star India',
    bio: 'Chartered Accountant with over 20 years of corporate leadership at PwC, Disney, and Star India as Head of Strategy and Global CFO. He mentors Economics for CA Foundation, and Cost Accounting & Financial Management for CA Intermediate using real business case studies and corporate frameworks.',
    image: '/assets/dvgjf-1.png',
  },
  {
    name: 'CA Nikita Innani',
    role: 'Commerce & Professional Courses Faculty',
    degree: 'CA • Ex-Ernst & Young (EY) Indirect Tax',
    bio: 'Qualified Chartered Accountant who completed her articleship at Ernst & Young (EY) in Indirect Taxation (GST). With over 5 years of teaching experience, she mentors students preparing for CA and CMA courses with step-by-step problem-solving and exam-focused clarity.',
    image: '/assets/p7.jpg',
  },
  {
    name: 'CA Vinaya Gundecha',
    role: 'Commerce Faculty',
    degree: 'CA • Accounts, Business Studies & Economics',
    bio: 'Qualified Chartered Accountant with over 6 years of teaching experience in commerce subjects including Accounts, Business Studies, and Economics. Focuses on building strong conceptual foundations and logical understanding rather than rote memorization.',
    image: '/assets/p4.jpg',
  },
  {
    name: 'CA Sushmita Manda',
    role: 'CA Intermediate Faculty',
    degree: 'CA • Ex-Big 4 Risk & Compliance / Investment Banking',
    bio: 'Chartered Accountant with over 5 years of experience in risk and compliance services with Big 4 firms, internal audit, IFC and ERM assignments. Teaches GST, Corporate Law, Auditing, and EIS-SM for CA Intermediate students with practical real-world insight.',
    image: '/assets/p5.jpg',
  },
  {
    name: 'Namrata Gupta',
    role: 'Academic Mentor – School Foundations',
    degree: 'B.Sc Computer Science (Mumbai Univ) • Math & Science',
    bio: 'Holds a Bachelor’s degree in Computer Science from Mumbai University with data analysis and academic mentoring experience in India and Canada across State Board, CBSE, ICSE, IB, and Cambridge curricula. Mentors Mathematics, Science, and English for Grades 6–10.',
    image: '/assets/p3.jpg',
  },
  {
    name: 'CA Prerna Gangwal',
    role: 'Commerce Faculty',
    degree: 'CA Inter, B.Com • Business Studies, Economics & Accounts',
    bio: 'Commerce faculty with over 7 years of teaching experience specializing in Business Studies, Economics, and Accounts. Emphasizes structured learning, regular practice, and answer-writing drills to help students perform confidently in examinations.',
    image: '/assets/p6.jpg',
  },
];

export default function FacultySection() {
  return (
    <section className="py-20 sm:py-24 bg-brand-surface border-b border-slate-200 font-sans overflow-hidden">
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
            <div className="h-[32px] min-h-[32px] max-h-[32px] box-border leading-none inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 bg-brand-lightgreen border border-emerald-300 text-brand-forest text-xs font-bold uppercase tracking-wider rounded-[3px] max-w-full">
              <span className="w-1.5 h-1.5 bg-brand-forest inline-block shrink-0"></span>
              <span className="truncate">Senior Mentors &amp; Directors</span>
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
