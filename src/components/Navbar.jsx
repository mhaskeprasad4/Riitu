import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GoogleReviewsBadge from './GoogleReviewsBadge';

const coursesList = [
  {
    name: 'CA Foundation Cohort',
    path: '/ca-foundation',
    desc: 'ICAI Jan & May • 14-Day Science Bridge',
    badge: '15 Seats',
    icon: 'school',
    iconBg: 'bg-emerald-100 text-emerald-800',
  },
  {
    name: 'CA Intermediate (G1 & G2)',
    path: '/ca-intermediate',
    desc: '60%+ Pass Record • Big 4 CA Mentors',
    badge: '60%+ Pass',
    icon: 'workspace_premium',
    iconBg: 'bg-amber-100 text-amber-800',
  },
  {
    name: '11th & 12th Commerce Integrated',
    path: '/commerce-11th-12th',
    desc: 'Board Exam Mastery + CA Foundation Overlap',
    badge: 'Dual Track',
    icon: 'calculate',
    iconBg: 'bg-blue-100 text-blue-800',
  },
  {
    name: 'School Foundations (6th to 10th)',
    path: '/school-6th-10th',
    desc: 'Maths & Science by M.Sc Gold Medalist',
    badge: 'Grades 6–10',
    icon: 'auto_stories',
    iconBg: 'bg-rose-100 text-rose-800',
  },
  {
    name: 'CS Executive & CMA Prep',
    path: '/cs-cma',
    desc: 'Corporate Law, Governance & Cost Auditing',
    badge: 'AIR 25',
    icon: 'gavel',
    iconBg: 'bg-cyan-100 text-cyan-800',
  },
  {
    name: 'College Degree (B.Com / BMS)',
    path: '/college-bcom-bms',
    desc: 'Mumbai University Degree Coaching & Exam Prep',
    badge: 'Degree',
    icon: 'account_balance',
    iconBg: 'bg-purple-100 text-purple-800',
  },
];

const aboutList = [
  {
    name: 'Our Story & Philosophy',
    path: '/about-us',
    desc: 'Why we rebelled against 300-student mass factories',
    badge: 'Our Mission',
    icon: 'history_edu',
    iconBg: 'bg-emerald-100 text-emerald-800',
  },
  {
    name: 'Our Faculty Mentors',
    path: '/our-faculty',
    desc: 'Fellow CAs from PwC, Deloitte & Disney (Zero interns)',
    badge: '100% CAs',
    icon: 'supervisor_account',
    iconBg: 'bg-amber-100 text-amber-800',
  },
  {
    name: 'Kharghar Center One',
    path: '/ca-coaching-kharghar',
    desc: 'Shop 13 & 14, Landmark CHS, Sec 12 (Central Park Metro)',
    badge: 'Sector 12',
    icon: 'location_city',
    iconBg: 'bg-blue-100 text-blue-800',
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setCoursesDropdown(false);
    setAboutDropdown(false);
  };

  const isActive = (path) => location.pathname === path;
  const isAboutActive = ['/about-us', '/our-faculty', '/ca-coaching-kharghar'].includes(location.pathname);
  const isCoursesActive = [
    '/courses',
    '/ca-foundation',
    '/ca-intermediate',
    '/commerce-11th-12th',
    '/school-6th-10th',
    '/cs-cma',
    '/college-bcom-bms',
  ].includes(location.pathname);

  return (
    <header className="sticky top-0 z-50 w-full font-sans bg-white shadow-sm">
      {/* Top Admissions & Trust Bar - Responsive & Optimized for Mobile */}
      <div className="bg-[#0D1B1E] text-slate-300 border-b border-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Trust Highlights */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#D49A18] rounded-[1px] inline-block shrink-0 animate-pulse"></span>
            <span className="text-slate-200 tracking-wide text-[10.5px] sm:text-xs truncate">
              <strong className="text-[#FDF8ED] font-bold">AY 2026-27:</strong> Trusted by 1,200+ Students • Strictly 15 Seats • 60%+ CA Clearance
            </span>
          </div>

          {/* Location, Google Reviews & Direct Phone */}
          <div className="flex items-center gap-3 sm:gap-4 text-slate-300 text-xs shrink-0">
            <Link
              to="/ca-coaching-kharghar"
              className="hidden md:flex items-center gap-1.5 hover:text-[#D49A18] transition-colors"
            >
              <span className="material-symbols-outlined text-[15px] text-[#D49A18]">location_on</span>
              <span>Shop 13 &amp; 14, Landmark CHS, Sec 12, Kharghar</span>
            </Link>
            <span className="hidden md:inline-block text-white/20">|</span>
            <div className="hidden lg:inline-flex">
              <GoogleReviewsBadge variant="dark" className="py-1 text-[11px]" />
            </div>
            <span className="hidden lg:inline-block text-white/20">|</span>
            <a
              href="tel:+919512112938"
              className="text-white hover:text-[#D49A18] font-bold transition-colors inline-flex items-center gap-1 text-[11px] sm:text-xs tracking-wide shrink-0 whitespace-nowrap bg-white/10 sm:bg-transparent px-2 py-0.5 sm:px-0 sm:py-0 rounded-[2px]"
            >
              <span className="material-symbols-outlined text-[13px] sm:text-[15px] text-[#D49A18]">call</span>
              <span>+91-9512112938</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Header with PROMINENT LOGO & Navigation */}
      <nav
        className={`relative bg-white/98 backdrop-blur-md border-b border-slate-200 transition-all duration-200 ${
          scrolled ? 'py-2 sm:py-2.5 shadow-md' : 'py-2.5 sm:py-3.5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-4 sm:gap-6">
          
          {/* PROMINENT VISIBLE LOGO & CA ACADEMY SUBTITLE (VISIBLE ON MOBILE & DESKTOP) */}
          <Link to="/" onClick={closeAllMenus} className="flex items-center gap-2 sm:gap-4 group min-w-0 max-w-[calc(100%-88px)] lg:max-w-none">
            <div className="bg-white p-1 rounded-[4px] border border-slate-200/80 shadow-xs flex items-center justify-center shrink-0">
              <img
                src="/assets/Riitu-Logo-Tight.png"
                alt="Riitu Institution Official Brand Logo"
                className="h-9 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
                onError={(e) => {
                  e.target.src = '/assets/Riitu-Institution-Logo.png';
                }}
              />
            </div>
            <div className="border-l-2 border-[#0B3D2C]/25 pl-2 sm:pl-3.5 min-w-0">
              <span className="block text-sm sm:text-2xl md:text-3xl font-serif font-bold tracking-tight text-[#0B3D2C] leading-none truncate">
                Riitu Institution
              </span>
              <span className="block text-[8.5px] sm:text-xs md:text-sm font-bold text-[#D49A18] mt-0.5 sm:mt-1 uppercase tracking-wider truncate">
                CA Academy
              </span>
            </div>
          </Link>

          {/* CENTERED PROPERLY ALIGNED NAVIGATION */}
          <div className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-slate-700">
            
            {/* Home */}
            <Link
              to="/"
              onClick={closeAllMenus}
              onMouseEnter={() => {
                setCoursesDropdown(false);
                setAboutDropdown(false);
              }}
              className={`py-2 transition-colors ${
                isActive('/')
                  ? 'text-[#0B3D2C] font-bold border-b-2 border-[#0B3D2C]'
                  : 'hover:text-[#0B3D2C]'
              }`}
            >
              Home
            </Link>

            {/* Courses Menu Trigger */}
            <div
              className="py-2"
              onMouseEnter={() => {
                setCoursesDropdown(true);
                setAboutDropdown(false);
              }}
            >
              <button
                onClick={() => setCoursesDropdown(!coursesDropdown)}
                className={`flex items-center gap-1 transition-colors ${
                  isCoursesActive || coursesDropdown
                    ? 'text-[#0B3D2C] font-bold border-b-2 border-[#0B3D2C] pb-0.5'
                    : 'hover:text-[#0B3D2C]'
                }`}
                aria-expanded={coursesDropdown}
              >
                <span>Courses</span>
                <span className={`material-symbols-outlined text-[18px] text-slate-400 transition-transform ${coursesDropdown ? 'rotate-180 text-[#0B3D2C]' : ''}`}>
                  expand_more
                </span>
              </button>
            </div>

            {/* About Menu Trigger */}
            <div
              className="py-2"
              onMouseEnter={() => {
                setAboutDropdown(true);
                setCoursesDropdown(false);
              }}
            >
              <button
                onClick={() => setAboutDropdown(!aboutDropdown)}
                className={`flex items-center gap-1 transition-colors ${
                  isAboutActive || aboutDropdown
                    ? 'text-[#0B3D2C] font-bold border-b-2 border-[#0B3D2C] pb-0.5'
                    : 'hover:text-[#0B3D2C]'
                }`}
                aria-expanded={aboutDropdown}
              >
                <span>About</span>
                <span className={`material-symbols-outlined text-[18px] text-slate-400 transition-transform ${aboutDropdown ? 'rotate-180 text-[#0B3D2C]' : ''}`}>
                  expand_more
                </span>
              </button>
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={closeAllMenus}
              onMouseEnter={() => {
                setCoursesDropdown(false);
                setAboutDropdown(false);
              }}
              className={`py-2 transition-colors ${
                isActive('/contact')
                  ? 'text-[#0B3D2C] font-bold border-b-2 border-[#0B3D2C]'
                  : 'hover:text-[#0B3D2C]'
              }`}
            >
              Contact
            </Link>

          </div>

          {/* RIGHT ACTION BUTTONS */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href="tel:+919512112938"
              className="text-slate-700 hover:text-[#0B3D2C] text-xs font-semibold px-2 py-1 flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px] text-[#0B3D2C]">phone_in_talk</span>
              <span>+91-9512112938</span>
            </a>
            <a
              href="#demo-booking"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D49A18] hover:bg-[#B88210] text-white text-xs font-bold rounded-[4px] shadow-sm transition-all"
            >
              <span>Book Free Demo</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>

          {/* MOBILE CALL & MENU TOGGLE */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <a
              href="tel:+919512112938"
              className="w-9 h-9 flex items-center justify-center text-[#0B3D2C] bg-emerald-50 border border-emerald-200 rounded-[3px] hover:bg-emerald-100 transition-colors"
              aria-label="Direct Phone Call"
            >
              <span className="material-symbols-outlined text-[19px]">call</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 flex items-center justify-center text-slate-800 bg-slate-100 hover:text-[#0B3D2C] rounded-[3px] border border-slate-200 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-2xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>

        </div>

        {/* FULL-WIDTH COURSES MEGA MENU DROPDOWN */}
        {coursesDropdown && (
          <div
            className="absolute top-full inset-x-0 w-full bg-white border-b-2 border-slate-200/90 shadow-2xl z-50 transition-all duration-200 animate-fadeIn"
            onMouseEnter={() => setCoursesDropdown(true)}
            onMouseLeave={() => setCoursesDropdown(false)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-12 gap-8 items-stretch">
                
                {/* Left Column: 6 Official Courses (8 cols - 2 Columns × 3 Rows - No Truncation!) */}
                <div className="col-span-8 pr-6 border-r border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          Academic Cohorts &amp; Programs
                        </span>
                      </div>
                      <span className="text-xs font-bold text-[#0B3D2C] bg-[#EBF5F0] px-2.5 py-0.5 rounded-[2px] border border-emerald-200">
                        Strictly 15 Seats Cap
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {coursesList.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={closeAllMenus}
                          className="group/course p-3.5 rounded-[4px] border border-slate-200 hover:border-[#0B3D2C]/40 hover:bg-[#F9FBFA] shadow-2xs hover:shadow-sm transition-all flex items-center justify-between gap-3"
                        >
                          <div className="flex items-center gap-3.5 min-w-0 pr-1">
                            <div
                              className={`w-10 h-10 rounded-[4px] ${item.iconBg} flex items-center justify-center shrink-0 shadow-2xs transition-transform group-hover/course:scale-105`}
                            >
                              <span className="material-symbols-outlined text-[21px]">{item.icon}</span>
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="block text-sm font-bold text-slate-900 group-hover/course:text-[#0B3D2C] leading-snug transition-colors">
                                  {item.name}
                                </span>
                                <span className="text-[9px] font-bold uppercase tracking-wider text-[#D49A18] bg-amber-50 px-1.5 py-0.5 rounded-[2px] border border-amber-200 shrink-0">
                                  {item.badge}
                                </span>
                              </div>
                              <span className="block text-xs text-slate-500 mt-0.5 leading-tight">
                                {item.desc}
                              </span>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover/course:text-[#0B3D2C] group-hover/course:translate-x-1 transition-all shrink-0">
                            chevron_right
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Bar inside Mega Menu */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <Link
                      to="/courses"
                      onClick={closeAllMenus}
                      className="text-[#0B3D2C] font-bold hover:text-[#D49A18] flex items-center gap-1.5 transition-colors"
                    >
                      <span>View All 6 Programs Directory</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                    <span className="text-xs text-slate-500">
                      Questions? Call Senior Counselor: <a href="tel:+919512112938" className="text-slate-900 font-bold hover:text-[#0B3D2C]">+91-9512112938</a>
                    </span>
                  </div>
                </div>

                {/* Right Column: Featured Callout Card */}
                <div className="col-span-4 bg-gradient-to-br from-[#0B3D2C] via-[#082E21] to-[#051F16] text-white p-6 rounded-[4px] shadow-lg border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/10 border border-white/15 text-[#D49A18] text-[10px] font-bold uppercase tracking-wider rounded-[2px] mb-3">
                      <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block"></span>
                      <span>Micro Cohort Model</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                      A Dedicated Space <br />
                      <span className="text-[#D49A18] italic font-normal">For Your Career</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed font-sans">
                      Get direct 1-on-1 mentorship by practicing Fellow Chartered Accountants in strict 15-student micro batches.
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-white/10">
                    <a
                      href="#demo-booking"
                      onClick={closeAllMenus}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#FAF7F0] hover:bg-white text-[#0B3D2C] text-center text-xs sm:text-sm font-bold rounded-[3px] shadow-sm hover:shadow transition-all group"
                    >
                      <span>Book Free Demo</span>
                      <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </a>
                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-300 mt-2.5 font-medium">
                      <span className="text-[#D49A18]">★ 4.9/5 Rating</span>
                      <span>•</span>
                      <span>185+ Google Reviews</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* FULL-WIDTH ABOUT DROPDOWN */}
        {aboutDropdown && (
          <div
            className="absolute top-full inset-x-0 w-full bg-white border-b-2 border-slate-200/90 shadow-2xl z-50 transition-all duration-200 animate-fadeIn"
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-12 gap-8 items-stretch">
                
                {/* Left Column: 3 About Links */}
                <div className="col-span-8 pr-6 border-r border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          About Riitu Institution
                        </span>
                      </div>
                      <span className="text-xs font-bold text-[#0B3D2C] bg-[#EBF5F0] px-2.5 py-0.5 rounded-[2px] border border-emerald-200">
                        Founded 2012
                      </span>
                    </div>

                    <div className="space-y-3">
                      {aboutList.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          onClick={closeAllMenus}
                          className="group/about p-3.5 rounded-[4px] border border-slate-200 hover:border-[#0B3D2C]/40 hover:bg-[#F9FBFA] shadow-2xs hover:shadow-sm transition-all flex items-center justify-between gap-3"
                        >
                          <div className="flex items-center gap-3.5 min-w-0 pr-1">
                            <div
                              className={`w-10 h-10 rounded-[4px] ${item.iconBg} flex items-center justify-center shrink-0 shadow-2xs transition-transform group-hover/about:scale-105`}
                            >
                              <span className="material-symbols-outlined text-[21px]">{item.icon}</span>
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="block text-sm font-bold text-slate-900 group-hover/about:text-[#0B3D2C] leading-snug transition-colors">
                                  {item.name}
                                </span>
                                <span className="text-[9px] font-bold uppercase tracking-wider text-[#0B3D2C] bg-[#EBF5F0] px-1.5 py-0.5 rounded-[2px]">
                                  {item.badge}
                                </span>
                              </div>
                              <span className="block text-xs text-slate-500 mt-0.5 leading-tight">
                                {item.desc}
                              </span>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover/about:text-[#0B3D2C] group-hover/about:translate-x-1 transition-all shrink-0">
                            chevron_right
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Physical Learning Campus: Landmark CHS, Sector 12 Kharghar</span>
                    <a href="tel:+919512112938" className="text-[#0B3D2C] font-bold hover:text-[#D49A18]">+91-9512112938</a>
                  </div>
                </div>

                {/* Right Column: Featured Campus Card */}
                <div className="col-span-4 bg-gradient-to-br from-[#0B3D2C] via-[#082E21] to-[#051F16] text-white p-6 rounded-[4px] shadow-lg border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/10 border border-white/15 text-[#D49A18] text-[10px] font-bold uppercase tracking-wider rounded-[2px] mb-3">
                      <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block"></span>
                      <span>Physical Campus</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                      Visit Kharghar <br />
                      <span className="text-[#D49A18] italic font-normal">Center One</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed font-sans">
                      Shop 13 &amp; 14, Landmark CHS. 2 mins walk from Central Park Metro Gate 2. AC smart rooms, doubt desk &amp; ICAI library.
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-white/10">
                    <Link
                      to="/ca-coaching-kharghar"
                      onClick={closeAllMenus}
                      className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#FAF7F0] hover:bg-white text-[#0B3D2C] text-center text-xs sm:text-sm font-bold rounded-[3px] shadow-sm hover:shadow transition-all group"
                    >
                      <span>Campus &amp; Directions</span>
                      <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* MOBILE NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-5 py-4 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl">
            
            {/* Mobile Navigation Drawer Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D49A18] inline-block"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B3D2C]">
                  Directory Menu
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-800 rounded-[2px]"
                aria-label="Close Menu"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <Link
              to="/"
              onClick={closeAllMenus}
              className="block py-2 text-sm font-bold text-[#0B3D2C] border-b border-slate-100"
            >
              Home
            </Link>

            {/* Courses List - Fully Visible Names, No Truncation */}
            <div>
              <div className="py-2 text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Courses &amp; Cohorts</span>
                <span className="text-[10px] text-[#0B3D2C] font-bold bg-[#EBF5F0] px-1.5 py-0.5 rounded-[2px]">15 Seats</span>
              </div>
              <div className="space-y-2 bg-slate-50 p-3 rounded-[4px] border border-slate-200/60">
                {coursesList.map((c, i) => (
                  <Link
                    key={i}
                    to={c.path}
                    onClick={closeAllMenus}
                    className="p-2.5 bg-white border border-slate-200 rounded-[3px] flex items-center justify-between shadow-2xs hover:border-[#0B3D2C]"
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <div className={`w-8 h-8 rounded-[3px] ${c.iconBg} flex items-center justify-center shrink-0`}>
                        <span className="material-symbols-outlined text-[17px]">{c.icon}</span>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-slate-900 leading-snug">{c.name}</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5 leading-tight">{c.desc}</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-slate-400 shrink-0">chevron_right</span>
                  </Link>
                ))}
                <Link
                  to="/courses"
                  onClick={closeAllMenus}
                  className="block text-center text-xs font-bold text-[#0B3D2C] pt-2 mt-1 border-t border-slate-200"
                >
                  View All 6 Programs Directory →
                </Link>
              </div>
            </div>

            {/* About Submenu Accordion */}
            <div>
              <div className="py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                About Riitu Institution
              </div>
              <div className="space-y-2 bg-slate-50 p-3 rounded-[4px] border border-slate-200/60">
                {aboutList.map((a, i) => (
                  <Link
                    key={i}
                    to={a.path}
                    onClick={closeAllMenus}
                    className="p-2.5 bg-white border border-slate-200 rounded-[3px] flex items-center justify-between shadow-2xs hover:border-[#0B3D2C]"
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <div className={`w-8 h-8 rounded-[3px] ${a.iconBg} flex items-center justify-center shrink-0`}>
                        <span className="material-symbols-outlined text-[17px]">{a.icon}</span>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-slate-900 leading-snug">{a.name}</span>
                        <span className="block text-[10px] text-slate-500 mt-0.5 leading-tight">{a.desc}</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-slate-400 shrink-0">chevron_right</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              onClick={closeAllMenus}
              className="block py-2 text-sm font-bold text-slate-800 border-b border-slate-100"
            >
              Contact &amp; Directions
            </Link>

            {/* Mobile CTAs */}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="#demo-booking"
                onClick={closeAllMenus}
                className="w-full py-3 bg-[#D49A18] hover:bg-[#B88210] text-white font-bold text-center text-xs rounded-[4px] shadow-sm transition-all"
              >
                Book Free Demo Class
              </a>
              <a
                href="tel:+919512112938"
                className="w-full py-3 border border-[#0B3D2C] text-[#0B3D2C] font-bold text-center text-xs rounded-[4px] hover:bg-[#EBF5F0] transition-all"
              >
                Call +91-9512112938
              </a>
            </div>

          </div>
        )}
      </nav>
    </header>
  );
}
