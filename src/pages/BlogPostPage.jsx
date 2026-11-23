import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import GoogleReviewsBadge from '../components/GoogleReviewsBadge';
import { blogPosts } from '../data/blogPosts';

/**
 * Parses markdown inline syntax: [Anchor](url) and **bold**
 * Renders internal links with <Link> and external links with <a target="_blank" rel="noopener"> (dofollow)
 */
function renderInlineContent(text) {
  if (!text) return null;
  const regex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;
  const parts = text.split(regex);
  return parts.map((part, index) => {
    if (!part) return null;
    if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      const closingBracket = part.indexOf('](');
      const label = part.slice(1, closingBracket);
      const href = part.slice(closingBracket + 2, -1);
      const isInternal = href.startsWith('/');
      if (isInternal) {
        return (
          <Link
            key={index}
            to={href}
            className="text-[#0B3D2C] font-semibold underline decoration-[#D49A18] decoration-2 underline-offset-2 hover:text-[#D49A18] hover:decoration-[#0B3D2C] transition-colors"
          >
            {label}
          </Link>
        );
      }
      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener"
          className="text-[#0B3D2C] font-semibold underline decoration-[#D49A18] decoration-2 underline-offset-2 hover:text-[#D49A18] hover:decoration-[#0B3D2C] transition-colors"
        >
          {label}
        </a>
      );
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-bold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function renderFormattedSectionContent(content) {
  if (!content) return null;
  const blocks = content.split('\n\n');
  return (
    <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
      {blocks.map((block, bIdx) => {
        const trimmed = block.trim();
        const lines = trimmed.split('\n');
        const isBulletList =
          lines.length > 0 &&
          lines.every(
            (l) =>
              l.trim().startsWith('•') ||
              l.trim().startsWith('-') ||
              /^\d+\.\s/.test(l.trim())
          );

        if (isBulletList) {
          return (
            <ul key={bIdx} className="space-y-2 pl-2 sm:pl-4">
              {lines.map((line, lIdx) => {
                const cleanLine = line.replace(/^[•\-\*]\s*|\d+\.\s*/, '').trim();
                return (
                  <li key={lIdx} className="flex items-start gap-2.5">
                    <span className="text-[#D49A18] font-bold text-base leading-none mt-1 shrink-0">•</span>
                    <span className="leading-relaxed">{renderInlineContent(cleanLine)}</span>
                  </li>
                );
              })}
            </ul>
          );
        }

        return (
          <p key={bIdx} className="leading-relaxed whitespace-pre-line">
            {renderInlineContent(block)}
          </p>
        );
      })}
    </div>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  // Schema.org BlogPosting + FAQPage + Breadcrumbs
  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `https://riituinstitution.com/blog/${post.slug}#article`,
        headline: post.title,
        description: post.metaDescription,
        url: `https://riituinstitution.com/blog/${post.slug}`,
        datePublished: '2026-11-20',
        dateModified: '2026-11-22',
        inLanguage: 'en-IN',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://riituinstitution.com/blog/${post.slug}`,
        },
        image: {
          '@type': 'ImageObject',
          url: `https://riituinstitution.com${post.featuredImage}`,
        },
        author: {
          '@type': 'Person',
          name: post.author,
          jobTitle: post.authorRole,
        },
        publisher: {
          '@type': 'EducationalOrganization',
          name: 'Riitu Institution - CA Academy Kharghar',
          logo: {
            '@type': 'ImageObject',
            url: 'https://riituinstitution.com/assets/Riitu-Institution-Logo.png',
          },
        },
        keywords: post.tags.join(', '),
      },
      ...(post.faqs && post.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              '@id': `https://riituinstitution.com/blog/${post.slug}#faq`,
              mainEntity: post.faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: f.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <main className="font-sans bg-white min-h-screen">
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonicalPath={`/blog/${post.slug}`}
        schema={articleSchema}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
        keywords={post.tags.join(', ')}
        ogType="article"
        ogImage={`https://riituinstitution.com${post.featuredImage}`}
      />

      {/* Article Header Hero */}
      <section className="relative py-12 sm:py-16 bg-brand-deep text-white border-b border-white/10 overflow-hidden font-sans">
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-brand-emerald/15 blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-400 font-sans">
            <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-brand-gold transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-300 font-bold truncate max-w-[200px] sm:max-w-none">{post.category}</span>
          </nav>

          {/* Meta Badges */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-5">
            <span className="px-2.5 py-1 bg-[#D49A18] text-[#0D1B1E] text-xs font-bold uppercase tracking-wider rounded-[2px] shadow-sm">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
              <span>{post.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-brand-gold font-semibold">
                <span className="material-symbols-outlined text-[15px]">schedule</span>
                {post.readTime}
              </span>
            </div>
            <GoogleReviewsBadge variant="dark" />
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-5">
            {post.title}
          </h1>

          {/* Summary Subhead */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {post.summary}
          </p>

          {/* Author Byline Card */}
          <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold"
                onError={(e) => {
                  e.target.src = '/assets/dvgjf-1.png';
                }}
              />
              <div>
                <strong className="block text-sm font-bold text-white">{post.author}</strong>
                <span className="text-xs text-slate-300">{post.authorRole}</span>
              </div>
            </div>

            <a
              href="#demo-booking"
              className="hidden sm:inline-flex btn-gold text-xs px-4 py-2 font-bold"
            >
              <span>Book Free Demo</span>
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </a>
          </div>

        </div>
      </section>

      {/* Main Article Content Container */}
      <section className="py-12 sm:py-16 bg-white font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Image Display */}
          <div className="mb-10 rounded-[4px] overflow-hidden border border-slate-200 shadow-sm max-h-[440px] bg-slate-900">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.src = '/assets/about-hero-whatsapp.jpeg';
              }}
            />
          </div>

          {/* AEO KEY TAKEAWAYS CALLOUT BOX */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="mb-10 p-5 sm:p-7 bg-[#FBFBFA] border-2 border-[#0B3D2C] border-l-8 border-l-[#D49A18] rounded-[4px] shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#D49A18] text-xl">key</span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0B3D2C]">
                  Key Takeaways &amp; Executive Summary
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {post.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#D49A18] font-bold text-base leading-none mt-0.5">•</span>
                    <span>{renderInlineContent(point)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Table of Contents */}
          <div className="mb-10 p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-[3px]">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              In this article:
            </span>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#0B3D2C] font-semibold">
              {post.sections.map((sec, idx) => (
                <li key={idx}>
                  <a
                    href={`#section-${idx}`}
                    className="hover:text-[#D49A18] hover:underline flex items-center gap-1.5"
                  >
                    <span className="text-slate-400 font-normal">{idx + 1}.</span>
                    <span>{sec.heading}</span>
                  </a>
                </li>
              ))}
              {post.faqs && post.faqs.length > 0 && (
                <li>
                  <a href="#faqs" className="hover:text-[#D49A18] hover:underline flex items-center gap-1.5">
                    <span className="text-slate-400 font-normal">{post.sections.length + 1}.</span>
                    <span>Frequently Asked Questions</span>
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Article Body Sections */}
          <div className="space-y-10 text-slate-800 leading-relaxed text-sm sm:text-base">
            {post.sections.map((sec, idx) => (
              <section key={idx} id={`section-${idx}`} className="space-y-4 pt-2">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 border-b border-slate-200 pb-2.5 leading-snug">
                  {sec.heading}
                </h2>

                {sec.content && renderFormattedSectionContent(sec.content)}

                {/* Render Comparison Table if present */}
                {sec.table && (
                  <div className="my-6 overflow-x-auto border-2 border-slate-200 rounded-[4px] shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm font-sans min-w-[520px]">
                      <thead className="bg-[#0B3D2C] text-white">
                        <tr>
                          {sec.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="py-3 px-4 font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {sec.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`py-3 px-4 ${
                                  cIdx === 0
                                    ? 'font-bold text-slate-900'
                                    : cIdx === 1
                                    ? 'text-[#0B3D2C] font-semibold'
                                    : 'text-slate-600'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* FAQ Accordion Section */}
          {post.faqs && post.faqs.length > 0 && (
            <div id="faqs" className="mt-14 pt-8 border-t border-slate-200 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-[#D49A18] inline-block"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B3D2C]">
                  Expert Clarifications
                </span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-3">
                {post.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-[4px] overflow-hidden bg-white shadow-2xs"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-[#0B3D2C] transition-colors"
                      >
                        <span>{faq.q}</span>
                        <span className="material-symbols-outlined text-lg text-slate-400 shrink-0">
                          {isOpen ? 'expand_less' : 'expand_more'}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-3 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Author Card Footer */}
          <div className="mt-12 p-6 sm:p-8 bg-[#F8FAF9] border-2 border-slate-200 rounded-[4px] flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#0B3D2C] shrink-0"
              onError={(e) => {
                e.target.src = '/assets/dvgjf-1.png';
              }}
            />
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-bold text-[#D49A18] uppercase tracking-wider">
                About the Author
              </span>
              <h4 className="text-base font-serif font-bold text-slate-900">
                {post.author}
              </h4>
              <p className="text-xs font-semibold text-[#0B3D2C]">
                {post.authorRole}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                Senior mentor at Riitu Institution, Kharghar. Dedicated to transforming commerce and CA education through 15-student micro batches, rigorous concept coaching, and zero outsourced teaching.
              </p>
            </div>
          </div>

          {/* Free Demo Class Callout Box */}
          <div
            id="demo-booking"
            className="mt-12 p-7 sm:p-9 bg-brand-deep text-white rounded-[4px] border border-white/10 shadow-xl space-y-4 text-center sm:text-left"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="inline-block px-2.5 py-0.5 bg-[#D49A18] text-[#0D1B1E] text-[10px] font-bold uppercase tracking-wider rounded-[2px]">
                  Zero-Fee Opportunity
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Experience The 15-Student Micro Batch First-Hand
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Attend a free 1-on-1 demo lecture at our Sector 12 Kharghar center. Discuss your study roadmap directly with CA Deepak Jain and CA Ritu Jain.
                </p>
              </div>

              <div className="shrink-0 flex flex-col gap-2.5 w-full sm:w-auto">
                <a href="/#demo-booking" className="btn-gold text-xs px-6 py-3 font-bold text-center justify-center">
                  <span>Book Free Demo Lecture</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
                <a
                  href="tel:+919512112938"
                  className="btn-ghost-dark text-xs px-4 py-2.5 text-center justify-center"
                >
                  <span className="material-symbols-outlined text-[15px]">call</span>
                  <span>+91-9512112938</span>
                </a>
              </div>
            </div>
          </div>

          {/* Related Articles Section */}
          <div className="mt-16 pt-10 border-t border-slate-200">
            <h3 className="text-xl font-serif font-bold text-slate-900 mb-6">
              Recommended Guides &amp; Articles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white border border-slate-200 rounded-[3px] p-4 shadow-2xs hover:border-[#0B3D2C] hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#D49A18] uppercase tracking-wider block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-serif font-bold text-slate-900 line-clamp-2 leading-snug">
                      <Link to={`/blog/${rel.slug}`} className="hover:text-[#0B3D2C]">
                        {rel.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
                      {rel.summary}
                    </p>
                  </div>

                  <Link
                    to={`/blog/${rel.slug}`}
                    className="text-xs font-bold text-[#0B3D2C] hover:text-[#D49A18] flex items-center gap-1 mt-4 pt-3 border-t border-slate-100"
                  >
                    <span>Read Article</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
