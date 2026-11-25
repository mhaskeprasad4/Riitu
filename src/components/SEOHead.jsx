import { useEffect } from 'react';

/**
 * Production SEO & Structured Data Head Manager
 * Dynamically updates document title, meta descriptions, canonical links,
 * OpenGraph/Twitter card tags, geo-targeting, and injects Schema.org JSON-LD.
 */
export default function SEOHead({
  title,
  description,
  canonicalPath = '',
  schema = null,
  breadcrumbs = null,
  ogType = 'website',
  ogImage = 'https://riituinstitution.com/assets/about-hero-whatsapp.jpeg',
  keywords = 'CA coaching Kharghar, CA Foundation classes Navi Mumbai, CA Intermediate classes Kharghar, 11th 12th commerce coaching Kharghar, best CA classes Mumbai, Riitu Institution Kharghar',
}) {
  const fullTitle = title.includes('Riitu Institution')
    ? title
    : `${title} | Riitu Institution CA Academy Kharghar`;
  const canonicalUrl = `https://riituinstitution.com${canonicalPath}`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // Helper to update or create a meta tag
    const setMeta = (attrName, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'author', 'Riitu Institution - CA Ritu Jain & CA Deepak Jain');
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. Geo Targeting for Hyper-Local Authority
    setMeta('name', 'geo.region', 'IN-MH');
    setMeta('name', 'geo.placename', 'Kharghar, Navi Mumbai');
    setMeta('name', 'geo.position', '19.0435;73.0694');
    setMeta('name', 'ICBM', '19.0435, 73.0694');

    // 4. OpenGraph Tags
    setMeta('property', 'og:site_name', 'Riitu Institution | CA Academy');
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:locale', 'en_IN');

    // 5. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // 6. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 7. Base EducationalOrganization + LocalBusiness Schema.org JSON-LD
    const extraNodes = [];

    // Google Search Central strictly requires at least 2 breadcrumb items for a valid trail
    if (breadcrumbs && breadcrumbs.length > 1) {
      extraNodes.push({
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: `https://riituinstitution.com${crumb.path}`,
        })),
      });
    }

    // Unpack page-specific schemas properly if they have '@graph'
    if (schema) {
      if (schema['@graph'] && Array.isArray(schema['@graph'])) {
        extraNodes.push(...schema['@graph']);
      } else if (Array.isArray(schema)) {
        extraNodes.push(...schema);
      } else {
        extraNodes.push(schema);
      }
    }

    const baseOrganizationSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          additionalType: 'https://schema.org/EducationalOrganization',
          '@id': 'https://riituinstitution.com/#organization',
          name: 'Riitu Institution - CA Academy',
          alternateName: 'Riitu Institution Kharghar',
          url: 'https://riituinstitution.com/',
          logo: {
            '@type': 'ImageObject',
            url: 'https://riituinstitution.com/assets/Riitu-Institution-Logo.png',
            caption: 'Riitu Institution CA Academy Logo',
          },
          image: 'https://riituinstitution.com/assets/about-hero-whatsapp.jpeg',
          description:
            'Navi Mumbai’s premier Chartered Accountancy and Commerce academy. Strictly 15 students per batch, taught 100% by practicing senior Chartered Accountants.',
          telephone: ['+91-9512112938', '+91-9512129471'],
          email: 'enquiry@riituinstitution.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Shop No. 13 & 14, Landmark CHS, Sector 12',
            addressLocality: 'Kharghar, Navi Mumbai',
            addressRegion: 'Maharashtra',
            postalCode: '410210',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 19.0435,
            longitude: 73.0694,
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '08:00',
              closes: '20:30',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: 'Sunday',
              opens: '09:00',
              closes: '14:00',
            },
          ],
          priceRange: '₹₹',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '185',
            bestRating: '5',
            worstRating: '1',
          },
          areaServed: [
            { '@type': 'AdministrativeArea', name: 'Kharghar' },
            { '@type': 'AdministrativeArea', name: 'Navi Mumbai' },
            { '@type': 'AdministrativeArea', name: 'Panvel' },
            { '@type': 'AdministrativeArea', name: 'CBD Belapur' },
            { '@type': 'AdministrativeArea', name: 'Nerul' },
            { '@type': 'AdministrativeArea', name: 'Seawoods' },
            { '@type': 'AdministrativeArea', name: 'Vashi' },
            { '@type': 'AdministrativeArea', name: 'Mumbai' },
          ],
        },
        ...extraNodes,
      ],
    };

    let scriptTag = document.getElementById('schema-structured-data');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(baseOrganizationSchema, null, 2);
  }, [fullTitle, description, canonicalUrl, keywords, ogType, ogImage, schema, breadcrumbs]);

  return null;
}
