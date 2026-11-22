import React from 'react';

const expectations = [
  {
    icon: 'school',
    title: 'Experienced Faculty',
    description:
      'Learn from highly qualified and experienced teachers who bring both academic expertise and real industry knowledge to help students understand concepts clearly.',
    badge: '100% Qualified Professionals',
  },
  {
    icon: 'quiz',
    title: 'Regular Tests & Assessments',
    description:
      'Frequent tests, quizzes, and assessments help students track their progress, strengthen their preparation, and stay confident for upcoming examinations.',
    badge: 'Weekly Chapter Diagnostics',
  },
  {
    icon: 'devices',
    title: 'Classroom & Online Learning',
    description:
      'Students can choose between classroom sessions or online classes, making quality education accessible and convenient from anywhere.',
    badge: 'Hybrid Model Flexibility',
  },
  {
    icon: 'lightbulb',
    title: 'Concept-Based Learning',
    description:
      'Our teaching approach focuses on building strong fundamentals and conceptual clarity to help students perform better in exams and in their future careers.',
    badge: 'Zero Rote Learning',
  },
  {
    icon: 'group_work',
    title: 'Small Batch Sizes',
    description:
      'We maintain limited batch sizes to ensure every student receives individual attention, better interaction with teachers, and a more focused learning environment.',
    badge: 'Strict 15-Student Ceiling',
  },
  {
    icon: 'support_agent',
    title: 'Personal Mentorship',
    description:
      'We provide continuous guidance, doubt-solving sessions, and motivation to support students throughout their academic journey.',
    badge: 'Direct 1-on-1 Access',
  },
];

const impactStats = [
  { value: '1,200+', label: 'Students Mentored', sub: 'Across Navi Mumbai & Mumbai' },
  { value: '60%+', label: 'CA Inter Pass Rate', sub: 'vs ~18% ICAI National Average' },
  { value: '10+', label: 'Years of Excellence', sub: 'Founding Legacy in Kharghar' },
  { value: 'AIR 25', label: 'All India CS Rank', sub: 'Proven Ranker Framework' },
  { value: '100%', label: 'CA Expert Faculty', sub: 'Taught by Practicing CAs' },
];

export default function ExpectationsSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#F8FAF9] border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
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

          <div className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-brand-lightgreen border border-emerald-300 text-brand-forest text-xs font-bold uppercase tracking-wider rounded-[3px]">
            <span className="w-1.5 h-1.5 bg-brand-forest inline-block"></span>
            <span>Our Approach to Teaching and Learning</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
            What to Expect from <span className="text-[#0B3D2C]">Riitu Institution?</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Education designed around the student &ndash; built on rigorous academic standards, direct senior faculty access, and personalized progress tracking.
          </p>
        </div>

        {/* 6 Expectation Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {expectations.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 border-2 border-slate-200 hover:border-[#0B3D2C] border-t-4 border-t-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-200 text-[#0B3D2C] group-hover:bg-[#0B3D2C] group-hover:text-[#D49A18] rounded-[3px] flex items-center justify-center transition-colors shadow-2xs">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#0B3D2C] uppercase tracking-wider bg-[#0B3D2C]/10 px-2 py-0.5 rounded-[2px]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-[#0B3D2C] transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-[#D49A18] font-bold">
                <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block"></span>
                <span>The Riitu Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Impact Metrics Bar */}
        <div className="mt-14 bg-[#0B3D2C] text-white p-6 sm:p-8 rounded-[4px] shadow-lg border border-[#0B3D2C]">
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D49A18]">
              Measurable Academic Track Record
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
              Proven Numbers That Speak For Themselves
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 pt-4 border-t border-white/10 text-center">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#D49A18] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-300">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
