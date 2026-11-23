import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export default function RelatedBlogGuides({
  slugs = [],
  title = 'Essential Academic Guides & Preparation Strategy',
  subtitle = 'Expert insights written by practicing senior Chartered Accountants to guide your exam journey.',
  badge = 'Exam Preparation Insights',
}) {
  const posts = slugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean);

  if (posts.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 bg-[#FBFBFA] border-t border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="h-[32px] min-h-[32px] max-h-[32px] box-border inline-flex items-center gap-2 px-3 bg-[#0B3D2C]/10 border border-[#0B3D2C]/20 text-[#0B3D2C] text-xs font-bold uppercase tracking-wider rounded-[3px] mb-3">
              <span className="w-1.5 h-1.5 bg-[#0B3D2C] inline-block"></span>
              <span>{badge}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-tight">
              {title}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B3D2C] hover:text-[#D49A18] transition-colors shrink-0"
          >
            <span>Explore All 12 Guides</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border-2 border-slate-200 rounded-[4px] p-5 sm:p-6 flex flex-col justify-between hover:border-[#0B3D2C] transition-all shadow-xs group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 bg-[#0B3D2C]/10 text-[#0B3D2C] text-[11px] font-bold uppercase tracking-wider rounded-[2px]">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{post.readTime}</span>
                </div>

                <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 group-hover:text-[#0B3D2C] transition-colors line-clamp-2 mb-2 leading-snug">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">By {post.author}</span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xs font-bold text-[#0B3D2C] group-hover:text-[#D49A18] flex items-center gap-1 transition-colors"
                >
                  <span>Read Guide</span>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
