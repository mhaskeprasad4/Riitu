import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import GoogleReviewsBadge from '../components/GoogleReviewsBadge';
import { blogPosts, blogCategories } from '../data/blogPosts';

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesQuery =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = blogPosts[0];

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://riituinstitution.com/blog#blog',
    name: 'Riitu Institution CA & Commerce Insights Blog',
    description:
      'Authoritative articles, exam roadmaps, and career strategies for CA Foundation, CA Intermediate, 11th-12th Commerce, and school foundations by practicing Chartered Accountants in Kharghar Navi Mumbai.',
    url: 'https://riituinstitution.com/blog',
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'Riitu Institution',
      logo: {
        '@type': 'ImageObject',
        url: 'https://riituinstitution.com/assets/Riitu-Institution-Logo.png',
      },
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://riituinstitution.com/blog/${post.slug}`,
      datePublished: '2026-11-20',
      author: {
        '@type': 'Person',
        name: post.author,
      },
      description: post.metaDescription,
    })),
  };

  return (
    <main className="font-sans bg-white min-h-screen">
      <SEOHead
        title="CA Exam Preparation, Commerce & Career Insights Blog | Riitu Institution Kharghar"
        description="Expert CA Foundation & Intermediate study plans, Big 4 articleship advice, commerce curriculum guides, and exam paper presentation secrets from senior CAs in Kharghar Navi Mumbai."
        canonicalPath="/blog"
        schema={blogSchema}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]}
        keywords="CA coaching blog Kharghar, CA Foundation preparation guide, CA Intermediate study tips, Big 4 articleship interview tips, 11th 12th commerce coaching Navi Mumbai"
      />

      {/* Hero Header Section */}
      <section className="relative py-14 sm:py-18 bg-brand-deep text-white border-b border-white/10 overflow-hidden font-sans">
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-brand-emerald/15 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb row */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-400 font-sans">
            <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-gold font-bold">Blog &amp; Knowledge Base</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            {/* Header Badge */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="h-[32px] min-h-[32px] max-h-[32px] box-border leading-none inline-flex items-center gap-2 px-3 bg-brand-night/90 border border-brand-gold/40 text-brand-gold text-xs font-bold uppercase tracking-wider rounded-[3px] shadow-sm max-w-full">
                <span className="w-1.5 h-1.5 bg-brand-gold inline-block shrink-0"></span>
                <span className="truncate">Knowledge Hub &amp; Exam Strategy</span>
              </div>
              <GoogleReviewsBadge variant="dark" />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
              Expert CA &amp; Commerce <br />
              <span className="italic font-normal text-brand-gold">Insights from Senior Mentors</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Practical guides, syllabus strategies, Big 4 articleship advice, and exam presentation secrets authored 100% by practicing Chartered Accountants at Riitu Institution, Kharghar.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, paper, or keyword (e.g. CA Foundation, Big 4, Costing)..."
                className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-[3px] text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-gold transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-bold"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Category Filter Pills Bar */}
      <section className="sticky top-[60px] sm:top-[70px] z-30 bg-white/98 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-[3px] whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0B3D2C] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 bg-brand-surface border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Post Highlight (Shown only when viewing 'All' and no search query) */}
          {selectedCategory === 'All' && !searchQuery && (
            <div className="mb-14">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-[#D49A18] inline-block"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B3D2C]">
                  Featured Editorial Guide
                </span>
              </div>

              <div className="bg-white border-2 border-[#0B3D2C] rounded-[4px] shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
                <div className="lg:col-span-5 relative overflow-hidden bg-[#0D1B1E] h-full min-h-[260px] sm:min-h-[320px]">
                  <img
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-[#D49A18] text-[#0D1B1E] text-[10px] font-bold uppercase tracking-wider rounded-[2px] shadow-sm">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#0B3D2C] font-semibold">
                      <span className="material-symbols-outlined text-[15px]">schedule</span>
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 group-hover:text-[#0B3D2C] transition-colors leading-snug">
                    <Link to={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {featuredPost.summary}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={featuredPost.authorImage}
                        alt={featuredPost.author}
                        className="w-10 h-10 rounded-full object-cover border border-slate-300"
                        onError={(e) => {
                          e.target.src = '/assets/dvgjf-1.png';
                        }}
                      />
                      <div>
                        <strong className="block text-xs font-bold text-slate-900">{featuredPost.author}</strong>
                        <span className="text-[11px] text-slate-500">{featuredPost.authorRole}</span>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="btn-gold text-xs px-5 py-2.5 font-bold shadow-sm"
                    >
                      <span>Read Full Guide</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section Heading for All Articles */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                {selectedCategory === 'All' ? 'Latest Knowledge Articles' : `${selectedCategory} Articles`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                {searchQuery ? ` matching "${searchQuery}"` : ''}
              </p>
            </div>
          </div>

          {/* Articles Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white border border-slate-200 rounded-[4px] p-8 space-y-3">
              <span className="material-symbols-outlined text-4xl text-slate-400">search_off</span>
              <h3 className="text-lg font-serif font-bold text-slate-800">No articles found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                No articles matched your filter or search query. Try searching for a different keyword or view all categories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-3 px-4 py-2 bg-[#0B3D2C] text-white text-xs font-bold rounded-[3px]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border-2 border-slate-200 hover:border-[#0B3D2C] rounded-[4px] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    {/* Featured Image */}
                    <Link to={`/blog/${post.slug}`} className="block relative h-48 overflow-hidden bg-slate-900">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = '/assets/about-hero-whatsapp.jpeg';
                        }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-0.5 bg-white/95 text-[#0B3D2C] text-[10px] font-bold uppercase tracking-wider rounded-[2px] shadow-xs">
                          {post.category}
                        </span>
                      </div>
                    </Link>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6 space-y-3">
                      <div className="flex items-center gap-2.5 text-[11px] text-slate-500">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-[#0B3D2C] font-semibold">
                          <span className="material-symbols-outlined text-[14px]">schedule</span>
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 group-hover:text-[#0B3D2C] transition-colors leading-snug">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {post.summary}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-2">
                        {post.tags.slice(0, 2).map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-[2px]"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-7 h-7 rounded-full object-cover border border-slate-300 shrink-0"
                        onError={(e) => {
                          e.target.src = '/assets/dvgjf-1.png';
                        }}
                      />
                      <span className="text-xs font-bold text-slate-800 truncate">{post.author}</span>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-xs font-bold text-[#0B3D2C] hover:text-[#D49A18] flex items-center gap-1 shrink-0 transition-colors"
                    >
                      <span>Read</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Free Demo Banner CTA */}
      <section className="py-14 sm:py-18 bg-[#0D1B1E] text-white border-t border-white/10 font-sans">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D49A18]/20 border border-[#D49A18]/40 text-[#D49A18] text-xs font-bold uppercase tracking-wider rounded-[3px]">
            <span className="w-1.5 h-1.5 bg-[#D49A18] inline-block"></span>
            <span>Experience The Riitu Difference</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white leading-tight">
            Ready to Clear CA Foundation or Intermediate on Your First Attempt?
          </h2>

          <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto">
            Book a zero-fee Free 1-on-1 Demo Lecture at our Sector 12 Kharghar center. Experience our 15-student micro batch and get a personal diagnostic study roadmap.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#demo-booking" className="btn-gold text-xs sm:text-sm px-8 py-3.5 shadow-md">
              <span>Book Free Demo Lecture</span>
              <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
            </a>
            <a href="tel:+919512112938" className="btn-ghost-dark text-xs sm:text-sm px-6 py-3.5">
              <span className="material-symbols-outlined text-[17px]">call</span>
              <span>Call Senior CA Mentor (+91-9512112938)</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
