import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from '../src/data/blogPosts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

const coreRoutes = [
  {
    path: '/',
    title: 'Riitu Institution | CA Foundation, Intermediate & Commerce Academy | Kharghar Navi Mumbai',
    description: 'Navi Mumbai premier cohort-based Chartered Accountancy and Commerce academy in Sector 12 Kharghar. Strictly 15 students per batch, taught 100% by practicing senior Chartered Accountants. 60%+ CA Inter clearance record.',
    h1: 'Navi Mumbai’s Premier Micro-Cohort CA & Commerce Academy',
    h2: 'Strictly 15 Students per Batch. 100% Taught by Practicing Senior Chartered Accountants.',
    bodyText: 'Riitu Institution is an elite commerce and Chartered Accountancy academy based in Sector 12, Kharghar, Navi Mumbai (2 minutes from Central Park Metro Station). Founded by CA Deepak Jain (ex-PwC, Disney Global CFO) and CA Ritu Jain (FCA), we deliver a verified 60%+ CA Intermediate clearance rate through daily handwritten test evaluation, real-world case studies, and individualized diagnostic mentorship.',
    faqs: [
      { q: 'Where is Riitu Institution located?', a: 'Shop No. 13 & 14, Landmark CHS, Plot No. 22/23, Sector 12, Kharghar, Navi Mumbai 410210 (2 mins walk from Central Park Metro Gate 2).' },
      { q: 'What is the batch size at Riitu Institution?', a: 'Every batch is strictly capped at 15 students to guarantee personalized doubt-solving and individual attention.' },
      { q: 'Who teaches at Riitu Institution?', a: 'All core subjects are taught 100% by qualified Fellow Chartered Accountants with Big 4 corporate experience (PwC, Deloitte, EY, Disney).' }
    ],
    courseSchema: null,
  },
  {
    path: '/ca-coaching-kharghar',
    title: 'Best CA Coaching in Kharghar Sector 12 | 15-Student Micro Batches | Riitu Institution',
    description: 'Premier Chartered Accountancy coaching in Sector 12 Kharghar, Navi Mumbai. 2 mins from Central Park Metro. 15 students per batch, 100% senior CA mentors, 60%+ pass rate.',
    h1: 'Best CA Coaching in Kharghar Sector 12, Navi Mumbai',
    h2: 'The Anti-Mass-Factory CA Academy: 15-Student Micro Cohorts with Senior FCA Mentors',
    bodyText: 'Located at Landmark CHS in Sector 12 Kharghar, Riitu Institution offers comprehensive coaching for CA Foundation, CA Intermediate (Both Groups), and 11th & 12th Commerce. Enjoy modern air-conditioned classrooms, exhaustive physical libraries, and 1:1 doubt-clearing sessions.',
    faqs: [
      { q: 'How far is Riitu Institution from Kharghar railway station?', a: 'Approximately 7 minutes by auto or 2 minutes walk from Central Park Metro Station Gate 2.' },
      { q: 'Do you offer a Free Demo lecture?', a: 'Yes, prospective students and parents can attend a 100% free live 2-hour classroom demo before paying any admission fees.' }
    ],
    courseSchema: null,
  },
  {
    path: '/ca-foundation',
    title: 'CA Foundation Coaching in Kharghar Navi Mumbai | 15-Student Micro Batch | Riitu Institution',
    description: 'Comprehensive CA Foundation coaching in Kharghar Navi Mumbai. 14-day science-to-commerce bridge course, 15-student batch cap, 100% senior CA faculty, daily mock test practice.',
    h1: 'CA Foundation Coaching in Kharghar Navi Mumbai',
    h2: '15-Student Micro Cohorts • 14-Day Science Bridge • 100% Fellow CA Mentorship',
    bodyText: 'Prepare for ICAI CA Foundation (January & May examinations) under the personal guidance of CA Ritu Jain and CA Deepak Jain. Master Paper 1 (Accounting), Paper 2 (Business Laws), Paper 3 (Quantitative Aptitude), and Paper 4 (Business Economics) with step-marking precision.',
    faqs: [
      { q: 'Can science students clear CA Foundation at Riitu Institution?', a: 'Yes, our proprietary 14-day Science-to-Commerce Bridge Course prepares science students in debit/credit logic and financial statements from scratch.' },
      { q: 'What is the passing criteria for CA Foundation?', a: 'Students need 40% in each individual paper and 50% aggregate across all 4 papers (200 out of 400 marks).' }
    ],
    courseSchema: {
      '@type': 'Course',
      name: 'CA Foundation Coaching Program',
      description: 'Comprehensive ICAI CA Foundation exam coaching with 14-day science bridge and 15-student micro batches in Kharghar Navi Mumbai.',
      provider: { '@type': 'EducationalOrganization', name: 'Riitu Institution', url: 'https://riituinstitution.com/' }
    }
  },
  {
    path: '/ca-intermediate',
    title: 'CA Intermediate Classes in Navi Mumbai & Kharghar | 60%+ Pass Rate | Riitu Institution',
    description: 'Rigorous CA Intermediate coaching in Navi Mumbai delivering a verified 60%+ first-attempt clearance record vs 18% national average. 15-student micro batches taught 100% by practicing senior Chartered Accountants from PwC, Deloitte & Disney.',
    h1: 'CA Intermediate Classes in Navi Mumbai & Kharghar (Group 1 & Group 2)',
    h2: 'Verified 60%+ Clearance Record vs 18% National Average • 15-Seat Batch Cap',
    bodyText: 'Master Advanced Accounting, Corporate & Other Laws, Taxation (DT & GST), Cost & Management Accounting, Auditing & Ethics, and FM & SM. Taught by Big 4 veterans with 15 full-length step-marked simulated mock tests and Big 4 articleship interview prep.',
    faqs: [
      { q: 'Should I prepare for Both Groups together in CA Intermediate?', a: 'Yes, Both Groups allow you to take advantage of ICAI set-off rules where surplus marks in Group 1 compensate for Group 2 deficits.' },
      { q: 'Why is Riitu Institution pass rate over 60%?', a: 'Strict 15-student batch ceilings, direct evaluation by practicing CAs, and weekly timed test series ensure early diagnostic intervention.' }
    ],
    courseSchema: {
      '@type': 'Course',
      name: 'CA Intermediate Both Groups Coaching Program',
      description: 'Elite CA Intermediate preparation for Group 1 and Group 2 with verified 60%+ clearance rate in Kharghar Navi Mumbai.',
      provider: { '@type': 'EducationalOrganization', name: 'Riitu Institution', url: 'https://riituinstitution.com/' }
    }
  },
  {
    path: '/commerce-11th-12th',
    title: '11th & 12th Commerce Classes in Kharghar Navi Mumbai | Board + CA Integrated',
    description: 'Top 11th & 12th Commerce coaching in Kharghar for CBSE, ISC & Maharashtra State Board. Dual-track integrated CA Foundation preparation, 95%+ board results.',
    h1: '11th & 12th Commerce Classes in Kharghar, Navi Mumbai',
    h2: 'Dual-Track Board Excellence + Integrated CA Foundation Preparation',
    bodyText: 'Master Book-Keeping, Economics, Organization of Commerce, and Commercial Mathematics. Save a full academic year by learning 12th board concepts alongside early CA Foundation foundations in our 15-student micro batches.',
    faqs: [
      { q: 'Which boards do you teach for 11th & 12th Commerce?', a: 'We teach Maharashtra State Board (HSC), CBSE, and ISC curriculums with dedicated study materials.' }
    ],
    courseSchema: {
      '@type': 'Course',
      name: '11th & 12th Commerce Integrated Program',
      description: 'Higher secondary commerce coaching integrated with early professional CA Foundation foundation.',
      provider: { '@type': 'EducationalOrganization', name: 'Riitu Institution', url: 'https://riituinstitution.com/' }
    }
  },
  {
    path: '/ca-classes-navi-mumbai',
    title: 'Best CA Classes in Navi Mumbai (Panvel to Vashi) | Riitu Institution',
    description: 'Premier Chartered Accountancy classes serving students across Navi Mumbai: Kharghar, Panvel, Belapur, Nerul, Seawoods, and Vashi. Direct metro connectivity and micro batches.',
    h1: 'Best CA Classes in Navi Mumbai (Panvel to Vashi)',
    h2: 'Serving Kharghar, Panvel, CBD Belapur, Nerul, Seawoods & Vashi',
    bodyText: 'Centrally located in Kharghar just 2 minutes from Central Park Metro, Riitu Institution is the top destination for commerce and CA students across Navi Mumbai seeking personalized 15-seat classroom coaching.',
    faqs: [],
    courseSchema: null
  },
  {
    path: '/courses',
    title: 'All CA & Commerce Academic Programs Directory 2026-27 | Riitu Institution Kharghar',
    description: 'Explore all micro-cohort programs: CA Foundation, CA Intermediate, 11th & 12th Commerce, CS Executive, CMA, and School Foundations in Kharghar Navi Mumbai.',
    h1: 'All Academic Coaching Programs 2026-27',
    h2: 'Explore Our Micro-Cohort Learning Programs Capped Strictly at 15 Students',
    bodyText: 'Compare curriculums, eligibility, faculty, and batch schedules across all professional finance, commerce, and school programs.',
    faqs: [],
    courseSchema: null
  },
  {
    path: '/cs-cma',
    title: 'CS Executive & CMA Coaching in Navi Mumbai | AIR 25 Mentors | Riitu Institution',
    description: 'Top Company Secretary (CS Executive) & Cost and Management Accountant (CMA) coaching in Kharghar Navi Mumbai. Mentored by All India Rankers.',
    h1: 'CS Executive & CMA Coaching in Navi Mumbai',
    h2: 'Specialized Corporate Law, Compliance & Cost Accounting Batches',
    bodyText: 'Comprehensive preparation for ICSI CS Executive and ICMAI CMA examinations featuring corporate governance, SEBI regulations, and cost audit methodologies.',
    faqs: [],
    courseSchema: null
  },
  {
    path: '/school-6th-10th',
    title: 'School Foundation Classes (Grades 6th-10th) in Kharghar | Maths & Science',
    description: 'Expert Maths, Science & English tuition for Classes 6 to 10 in Kharghar. CBSE, ICSE, SSC & IB curriculum. Directed by Canadian IB-trained mentors.',
    h1: 'School Foundations (Grades 6th to 10th) in Kharghar',
    h2: 'Strong Analytical Maths & Science Grounding for CBSE, ICSE, SSC & IB',
    bodyText: 'Build rock-solid logical foundations before Class 10 board exams with small batches of 10 to 12 students and inquiry-based pedagogy.',
    faqs: [],
    courseSchema: null
  },
  {
    path: '/college-bcom-bms',
    title: 'B.Com, BMS & BAF Coaching in Kharghar Navi Mumbai | Mumbai University Commerce',
    description: 'Specialized Mumbai University B.Com, BMS & BAF semester exam coaching in Kharghar. Financial Accounting, Costing, Direct/Indirect Taxes, and Auditing.',
    h1: 'B.Com, BMS & BAF Degree Coaching in Kharghar',
    h2: 'Mumbai University Commerce Semester Guidance Aligned with CA Prep',
    bodyText: 'Achieve university distinctions in Financial Accounts, Cost Accounting, Indirect Taxes (GST), and Auditing with flexible morning and evening batch timings.',
    faqs: [],
    courseSchema: null
  },
  {
    path: '/our-faculty',
    title: 'Our CA Faculty Mentors | Fellow Chartered Accountants (Ex-PwC, Deloitte, Disney)',
    description: 'Meet Riitu Institution faculty: 100% qualified Fellow Chartered Accountants with Big 4 corporate backgrounds. Led by CA Deepak Jain and CA Ritu Jain.',
    h1: 'Our Senior Chartered Accountant Mentors',
    h2: '100% Senior CAs from Big 4 Firms (PwC, Deloitte, EY, Disney) • Zero Interns',
    bodyText: 'Learn directly from practicing senior partners and global CFOs who bridge textbook theory with high-stakes boardroom realities.',
    faqs: [],
    courseSchema: null
  },
  {
    path: '/about-us',
    title: 'About Riitu Institution | Our Mission, Founders & Mentorship Philosophy',
    description: 'Discover the story behind Riitu Institution Kharghar. Founded in 2012 by CA Deepak Jain & CA Ritu Jain to revolt against mass 300-student coaching factories.',
    h1: 'About Riitu Institution: The Anti-Mass-Factory Story',
    h2: 'Why We Enforce a Strict 15-Student Ceiling per Cohort',
    bodyText: 'Founded in Sector 12 Kharghar, Riitu Institution was established to provide an authentic, high-accountability alternative to commercial coaching auditoriums.',
    faqs: [],
    courseSchema: null
  },
  {
    path: '/contact',
    title: 'Contact & Admissions Desk | Riitu Institution Sector 12 Kharghar',
    description: 'Visit our Sector 12 Kharghar campus (2 mins from Central Park Metro). Book a Free 1-on-1 Demo class or call +91-9512112938 for immediate admissions assistance.',
    h1: 'Contact & Admissions Helpline | Sector 12 Kharghar',
    h2: 'Visit Our Campus or Book a Free 1-on-1 Diagnostic Demo Lecture',
    bodyText: 'Address: Shop No. 13 & 14, Landmark CHS, Plot No. 22/23, Sector 12, Kharghar, Navi Mumbai 410210. Phone: +91-9512112938 / +91-9512129471. Email: enquiry@riituinstitution.com.',
    faqs: [],
    courseSchema: null
  },
  {
    path: '/blog',
    title: 'CA Exam Preparation, Commerce & Career Insights Blog | Riitu Institution Kharghar',
    description: 'Explore 12 comprehensive guides on CA Foundation roadmaps, CA Intermediate 60%+ pass blueprints, Big 4 articleship interview prep, and 14-day science bridge tips.',
    h1: 'CA & Commerce Academic Knowledge Hub',
    h2: '12 Comprehensive Preparation Blueprints, Exam Presentation Secrets & Career Guides',
    bodyText: 'In-depth research and actionable strategies written by Fellow Chartered Accountants to help students clear ICAI exams on their first attempt.',
    faqs: [],
    courseSchema: null
  }
];

function generateHtmlForRoute({
  routePath,
  title,
  description,
  h1,
  h2,
  bodyText,
  faqs = [],
  courseSchema = null,
  articleSchema = null,
  ogImage = 'https://riituinstitution.com/assets/about-hero-whatsapp.jpeg',
  ogType = 'website'
}) {
  const canonicalUrl = `https://riituinstitution.com${routePath === '/' ? '' : routePath}`;
  
  // Base Organization Schema
  const schemaGraph = [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': 'https://riituinstitution.com/#organization',
      name: 'Riitu Institution - CA Academy',
      alternateName: 'Riitu Institution Kharghar',
      url: 'https://riituinstitution.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://riituinstitution.com/assets/Riitu-Institution-Logo.png'
      },
      image: ogImage,
      telephone: ['+91-9512112938', '+91-9512129471'],
      email: 'enquiry@riituinstitution.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop No. 13 & 14, Landmark CHS, Sector 12',
        addressLocality: 'Kharghar, Navi Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '410210',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.0435,
        longitude: 73.0694
      },
      hasMap: 'https://maps.google.com/?q=Riitu+Institution+Sector+12+Kharghar',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '185'
      }
    }
  ];

  if (courseSchema) {
    schemaGraph.push(courseSchema);
  }

  if (faqs && faqs.length > 0) {
    schemaGraph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a
        }
      }))
    });
  }

  if (articleSchema) {
    schemaGraph.push(articleSchema);
  }

  const jsonLd = JSON.stringify({ '@context': 'https://schema.org', '@graph': schemaGraph });

  // Update title
  let html = template.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  // Update description
  html = html.replace(/<meta name="description" content="[\s\S]*?" \/>/i, `<meta name="description" content="${description}" />`);
  // Update canonical
  html = html.replace(/<link rel="canonical" href="[\s\S]*?" \/>/i, `<link rel="canonical" href="${canonicalUrl}" />`);

  // Inject OpenGraph & Twitter tags into head before </head>
  const socialTags = `
    <!-- Pre-rendered Social & Crawl Metadata -->
    <meta property="og:site_name" content="Riitu Institution | CA Academy" />
    <meta property="og:title" content="${title.replace(/"/g, '&quot;')}" />
    <meta property="og:description" content="${description.replace(/"/g, '&quot;')}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:locale" content="en_IN" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}" />
    <meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}" />
    <meta name="twitter:image" content="${ogImage}" />
    <script type="application/ld+json">${jsonLd}</script>
  </head>`;

  html = html.replace(/<\/head>/i, socialTags);

  // Inject semantic initial HTML snapshot inside <div id="root"></div>
  const initialHtml = `
    <div id="prerender-content" style="opacity:1;">
      <header style="max-width:1200px;margin:0 auto;padding:24px 16px;">
        <nav aria-label="Quick Nav" style="font-size:13px;color:#64748b;margin-bottom:12px;">
          <a href="/" style="color:#0b3d2c;font-weight:bold;text-decoration:none;">Riitu Institution</a> &gt; <span>${h1}</span>
        </nav>
        <h1 style="font-size:32px;font-weight:bold;color:#0f172a;line-height:1.2;margin-bottom:12px;">${h1}</h1>
        ${h2 ? `<h2 style="font-size:18px;font-weight:600;color:#0b3d2c;margin-bottom:16px;">${h2}</h2>` : ''}
        <p style="font-size:15px;color:#334155;line-height:1.6;margin-bottom:20px;">${bodyText}</p>
        <div style="margin-bottom:24px;">
          <a href="/contact" style="display:inline-block;background:#0b3d2c;color:#ffffff;padding:10px 20px;font-weight:bold;border-radius:4px;text-decoration:none;">Book Free Demo Class</a>
          <a href="tel:+919512112938" style="display:inline-block;margin-left:12px;color:#0b3d2c;font-weight:bold;text-decoration:underline;">Call +91-9512112938</a>
        </div>
      </header>
      ${faqs && faqs.length > 0 ? `
      <section style="max-width:1200px;margin:24px auto;padding:0 16px;">
        <h2 style="font-size:22px;font-weight:bold;color:#0f172a;margin-bottom:12px;">Frequently Asked Questions</h2>
        ${faqs.map(f => `
          <div style="margin-bottom:12px;padding:12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:4px;">
            <h3 style="font-size:15px;font-weight:bold;color:#0f172a;margin-bottom:6px;">${f.q}</h3>
            <p style="font-size:14px;color:#475569;line-height:1.5;">${f.a}</p>
          </div>
        `).join('')}
      </section>
      ` : ''}
    </div>
  `;

  html = html.replace('<div id="root"></div>', `<div id="root">${initialHtml}</div>`);
  return html;
}

let count = 0;

// 1. Process Core Routes
coreRoutes.forEach(route => {
  const html = generateHtmlForRoute({
    routePath: route.path,
    title: route.title,
    description: route.description,
    h1: route.h1,
    h2: route.h2,
    bodyText: route.bodyText,
    faqs: route.faqs,
    courseSchema: route.courseSchema
  });

  const outDir = route.path === '/' ? distDir : path.join(distDir, route.path.replace(/^\//, ''));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  count++;
  console.log(`[Pre-render] Generated static HTML for: ${route.path}`);
});

// 2. Process All 12 Blog Posts
blogPosts.forEach(post => {
  const blogRoutePath = `/blog/${post.slug}`;
  const outDir = path.join(distDir, 'blog', post.slug);
  fs.mkdirSync(outDir, { recursive: true });

  const articleSchema = {
    '@type': 'BlogPosting',
    '@id': `https://riituinstitution.com${blogRoutePath}#article`,
    headline: post.title,
    description: post.metaDescription,
    url: `https://riituinstitution.com${blogRoutePath}`,
    datePublished: '2026-11-20',
    dateModified: '2026-11-23',
    inLanguage: 'en-IN',
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://riituinstitution.com${blogRoutePath}` },
    image: `https://riituinstitution.com${post.featuredImage}`,
    author: { '@type': 'Person', name: post.author, jobTitle: post.authorRole },
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'Riitu Institution - CA Academy Kharghar',
      logo: { '@type': 'ImageObject', url: 'https://riituinstitution.com/assets/Riitu-Institution-Logo.png' }
    },
    keywords: post.tags.join(', ')
  };

  const articleBodyText = `${post.summary} Key takeaways: ${post.keyTakeaways.join(' • ')}`;

  const html = generateHtmlForRoute({
    routePath: blogRoutePath,
    title: `${post.metaTitle} | Riitu Institution`,
    description: post.metaDescription,
    h1: post.title,
    h2: `${post.category} • By ${post.author} (${post.authorRole}) • ${post.readTime}`,
    bodyText: articleBodyText,
    faqs: post.faqs || [],
    articleSchema,
    ogImage: `https://riituinstitution.com${post.featuredImage}`,
    ogType: 'article'
  });

  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  count++;
  console.log(`[Pre-render] Generated static HTML for: ${blogRoutePath}`);
});

console.log(`\n🎉 Successfully pre-rendered static HTML for all ${count} URLs!`);
