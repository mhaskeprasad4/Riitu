import React from 'react';
import SEOHead from '../components/SEOHead';
import FacultySection from '../components/FacultySection';
import LiveCTASection from '../components/LiveCTASection';
import DemoBookingSection from '../components/DemoBookingSection';

export default function FacultyPage() {
  const facultySchema = [
    {
      '@type': 'Person',
      name: 'CA Deepak Jain',
      jobTitle: 'Co-Founder & Senior CA Faculty',
      alumniOf: 'ICAI',
      worksFor: {
        '@type': 'EducationalOrganization',
        name: 'Riitu Institution',
      },
      description:
        'Fellow Chartered Accountant with 12+ years experience in PwC Statutory Audit and Deloitte Advisory, mentoring CA Foundation and CA Intermediate students.',
    },
    {
      '@type': 'Person',
      name: 'CA Ritu Jain',
      jobTitle: 'Co-Founder & Senior CA Faculty',
      alumniOf: 'ICAI',
      worksFor: {
        '@type': 'EducationalOrganization',
        name: 'Riitu Institution',
      },
      description:
        'Fellow Chartered Accountant with extensive corporate advisory experience at EY Tax Consulting and The Walt Disney Company.',
    },
    {
      '@type': 'Person',
      name: 'Namrata Gupta',
      jobTitle: 'Academic Director - School Foundations',
      description:
        'M.Sc Gold Medalist with IB curriculum exposure in Canada, leading school foundation programs in Mathematics and Science for Grades 6 to 10.',
    },
  ];

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Our Faculty Mentors', path: '/our-faculty' },
  ];

  return (
    <main>
      <SEOHead
        title="Our CA Faculty Mentors | Fellow Chartered Accountants (Ex-PwC, Deloitte, Disney)"
        description="Meet the core mentors at Riitu Institution: CA Deepak Jain, CA Ritu Jain, and Namrata Gupta. 100% Fellow CAs with Big 4 corporate pedigree and zero outsourced interns."
        canonicalPath="/our-faculty"
        schema={facultySchema}
        breadcrumbs={breadcrumbs}
      />
      <FacultySection />
      <LiveCTASection />
      <DemoBookingSection />
    </main>
  );
}
