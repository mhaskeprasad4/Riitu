import React from 'react';

const modes = [
  {
    id: 'classroom',
    title: 'CLASSROOM',
    modeType: 'Face-to-Face Physical Mentorship',
    badge: 'Kharghar Campus',
    icon: 'meeting_room',
    tagColor: 'bg-[#0B3D2C] text-white',
    description:
      'Class Program offers live interaction with expert faculty, real-time doubt-solving, personalized guidance, and a structured learning environment - plus all the benefits of the Recorded Mode.',
    features: [
      'Strict 15-student micro batches for individual focus',
      'Direct face-to-face interaction with Fellow CAs',
      'Daily dedicated doubt-solving & assessment sessions',
      'Access to ICAI Reference Library & silent study pods',
      'Includes 100% recorded video backup on mobile app',
    ],
  },
  {
    id: 'online',
    title: 'ONLINE',
    modeType: 'Live Interactive 2-Way Virtual Batch',
    badge: 'Anywhere In India',
    icon: 'laptop_mac',
    tagColor: 'bg-[#D49A18] text-[#0D1B1E] font-bold',
    description:
      'Online offer real-time learning with expert faculty and interactive doubt-solving, ensuring an engaging classroom like experience from anywhere, with all the benefits of Recorded Mode.',
    features: [
      'Interactive 2-way audio & video class participation',
      'Live digital whiteboard & screen-sharing problem solving',
      'Direct faculty question answering during sessions',
      'Online weekly diagnostic tests with ranked reports',
      'Full recorded archive with speed controls enabled',
    ],
  },
  {
    id: 'livestream',
    title: 'LIVESTREAM',
    modeType: 'Real-Time Hybrid Classroom Stream',
    badge: 'Real-Time Broadcast',
    icon: 'sensors',
    tagColor: 'bg-[#0B3D2C] text-white',
    description:
      'Live Classes offer real-time learning with expert faculty and interactive doubt-solving, ensuring an engaging classroom like experience from anywhere, with all the benefits of Recorded Mode.',
    features: [
      'Direct broadcast from Kharghar lecture studio',
      'Zero latency live chat stream for prompt queries',
      'Synchronous test schedules matching physical cohort',
      'Seamless transition between classroom and livestream',
      'Includes complete cloud backup of all sessions',
    ],
  },
  {
    id: 'recorded',
    title: 'RECORDED',
    modeType: 'Self-Paced Flexible Video On-Demand',
    badge: 'Mobile & Laptop App',
    icon: 'play_circle',
    tagColor: 'bg-slate-800 text-white',
    description:
      'Recorded Program offers flexible, anytime-anywhere learning via the app. Access lectures on mobile/laptop, get doubt-solving support, test series, colorful notes, and much more!',
    features: [
      'Unlimited lecture playback anytime, anywhere',
      'Multi-speed controls (1.25x, 1.5x, 2.0x) for rapid revision',
      'Structured chapter-wise test series & evaluation',
      'Color-coded PDF study notes & summary charts',
      'Dedicated WhatsApp & app doubt-solving helpdesk',
    ],
  },
];

export default function ModesOfTeachingSection() {
  return (
    <section className="py-20 sm:py-24 bg-brand-surface border-b border-slate-200 font-sans">
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

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lightgreen border border-emerald-300 text-brand-forest text-xs font-bold uppercase tracking-wider rounded-[3px]">
            <span className="w-1.5 h-1.5 bg-brand-forest inline-block"></span>
            <span>Flexible Learning Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Modes of <span className="text-[#0B3D2C]">Teaching</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Explore flexible learning options &ndash; <strong className="text-slate-900">Classroom, Online, Livestream, and Recorded</strong> &ndash; designed to suit every student&rsquo;s needs with expert guidance, interactive learning, and complete support anytime, anywhere.
          </p>
        </div>

        {/* 4 Cards Grid - Light Version */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modes.map((mode) => (
            <div
              key={mode.id}
              className="bg-white border-2 border-slate-200 rounded-[4px] p-6 flex flex-col justify-between hover:border-[#0B3D2C] hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Mode Top Badge & Icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-[2px] ${mode.tagColor}`}>
                    {mode.badge}
                  </span>
                  <div className="w-9 h-9 bg-slate-50 border border-slate-200 rounded-[3px] flex items-center justify-center text-[#0B3D2C] group-hover:bg-[#0B3D2C] group-hover:text-[#D49A18] transition-colors shadow-2xs">
                    <span className="material-symbols-outlined text-xl">
                      {mode.icon}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-bold text-slate-900 tracking-wide mb-1 group-hover:text-[#0B3D2C] transition-colors">
                  {mode.title}
                </h3>
                <span className="text-[11px] font-sans text-[#D49A18] block font-bold mb-3">
                  {mode.modeType}
                </span>

                {/* Description from live website */}
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {mode.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                  {mode.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="text-[#0B3D2C] font-bold text-[13px] leading-tight shrink-0">✓</span>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#demo-booking"
                className="w-full text-center py-2.5 px-4 bg-slate-50 hover:bg-[#0B3D2C] text-[#0B3D2C] hover:text-white text-xs font-bold uppercase tracking-wider rounded-[2px] border border-slate-300 hover:border-[#0B3D2C] transition-all flex items-center justify-center gap-1.5 shadow-2xs group-hover:shadow-xs"
              >
                <span>Choose {mode.title}</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Banner Reassurance */}
        <div className="mt-10 p-4 sm:p-5 bg-white border border-slate-200 rounded-[3px] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans">
          <div className="flex items-center gap-2.5 text-slate-700">
            <span className="w-2 h-2 bg-emerald-500 inline-block"></span>
            <span>Switch between Classroom, Online, or Recorded at any point during your academic session.</span>
          </div>
          <a
            href="tel:+919512112938"
            className="text-[#0B3D2C] hover:text-[#D49A18] font-bold flex items-center gap-1 shrink-0 transition-colors"
          >
            <span>Need advice on which mode suits you? Call +91-9512112938</span>
            <span className="material-symbols-outlined text-[15px]">phone_forwarded</span>
          </a>
        </div>

      </div>
    </section>
  );
}
