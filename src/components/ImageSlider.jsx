import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: '/assets/ca-g-ohfudgfu.webp',
    tag: 'CA Foundation & Intermediate Batches',
    title: 'Concept-Based Professional CA Coaching',
    subtitle: 'Step-by-step problem dissection under practicing Chartered Accountants.',
  },
  {
    image: '/assets/banner-2222222-1-1.webp',
    tag: 'The 15-Student Micro Batch',
    title: 'Personalized Doubts Resolution & Daily Mentorship',
    subtitle: 'Where every student is known, assessed, and guided individually.',
  },
  {
    image: '/assets/banner-3.webp',
    tag: '11th & 12th Commerce Integrated',
    title: 'Board Exam Excellence + 70% CA Foundation Overlap',
    subtitle: 'Save a full academic year with our aligned commerce curriculum.',
  },
  {
    image: '/assets/banner-4.webp',
    tag: 'CS & CMA Professional Prep',
    title: 'Corporate Governance & Costing with AIR 25 Experts',
    subtitle: 'Deep statutory analysis and mock test frameworks for professional ranks.',
  },
  {
    image: '/assets/banner-5.webp',
    tag: '6th to 10th School Foundations',
    title: 'Maths & Science Directed by Namrata Gupta, M.Sc',
    subtitle: 'Gold Medalist experts building analytical problem-solving confidence.',
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="py-20 bg-brand-surface border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Slide Navigation Buttons */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lightgreen border border-emerald-300 text-brand-forest text-xs font-bold uppercase tracking-wider rounded-[3px] mb-2">
              <span className="w-1.5 h-1.5 bg-brand-forest inline-block"></span>
              <span>Campus Announcements &amp; Life</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Riitu Institution In Action
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Browse our campus updates, batch notices, and student success highlights.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2.5 bg-white border border-slate-300 hover:border-brand-forest hover:text-brand-forest text-slate-700 rounded-[3px] transition-colors shadow-sm"
              title="Previous Slide"
              aria-label="Previous Slide"
            >
              <span className="material-symbols-outlined text-xl">arrow_back</span>
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 bg-white border border-slate-300 hover:border-brand-forest hover:text-brand-forest text-slate-700 rounded-[3px] transition-colors shadow-sm"
              title="Next Slide"
              aria-label="Next Slide"
            >
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          className="relative overflow-hidden border border-slate-200 shadow-xl bg-white rounded-[4px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 relative group">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[280px] sm:h-[420px] lg:h-[500px] object-cover object-center"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 sm:p-8 text-white">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block mb-1">
                    {slide.tag}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-serif font-bold text-white leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 font-sans">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicators (Crisp Rectangular Bars, No Capsules) */}
          <div className="absolute bottom-4 right-6 z-20 flex items-center gap-2 bg-black/60 px-3 py-1.5 border border-white/20 rounded-[2px]">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-6 h-1.5 transition-colors rounded-[1px] ${
                  current === index ? 'bg-brand-gold' : 'bg-white/40'
                }`}
                title={`Go to slide ${index + 1}`}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
