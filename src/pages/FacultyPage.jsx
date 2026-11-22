import React from 'react';
import SEOHead from '../components/SEOHead';
import FacultySection from '../components/FacultySection';
import LiveCTASection from '../components/LiveCTASection';
import DemoBookingSection from '../components/DemoBookingSection';

export default function FacultyPage() {
  const facultySchema = [
    {
      '@type': 'Person',
      name: 'CA Ritu Jain',
      jobTitle: 'Founder & Academic Director',
      alumniOf: 'ICAI',
      worksFor: {
        '@type': 'EducationalOrganization',
        name: 'Riitu Institution',
      },
      description:
        'Qualified Chartered Accountant with Master’s degree in Commerce and 15+ years of teaching experience in Accounts and Taxation.',
    },
    {
      '@type': 'Person',
      name: 'CA Deepak Jain',
      jobTitle: 'Co-Founder & Director',
      alumniOf: 'ICAI',
      worksFor: {
        '@type': 'EducationalOrganization',
        name: 'Riitu Institution',
      },
      description:
        'Chartered Accountant with 20+ years corporate leadership at PwC, Disney, and Star India as Head of Strategy and Global CFO. Mentors Economics, Costing, and Financial Management.',
    },
    {
      '@type': 'Person',
      name: 'CA Nikita Innani',
      jobTitle: 'Commerce & Professional Courses Faculty',
      alumniOf: 'ICAI',
      description:
        'Qualified Chartered Accountant with EY Indirect Tax (GST) background and 5+ years experience in CA/CMA coaching.',
    },
    {
      '@type': 'Person',
      name: 'CA Vinaya Gundecha',
      jobTitle: 'Commerce Faculty',
      alumniOf: 'ICAI',
      description:
        'Qualified Chartered Accountant with 6+ years experience in commerce subjects including Accounts, Business Studies, and Economics.',
    },
    {
      '@type': 'Person',
      name: 'CA Sushmita Manda',
      jobTitle: 'CA Intermediate Faculty',
      alumniOf: 'ICAI',
      description:
        'Chartered Accountant with 5+ years experience in Big 4 Risk & Compliance services, teaching GST, Law, Audit, and EIS-SM.',
    },
    {
      '@type': 'Person',
      name: 'Namrata Gupta',
      jobTitle: 'Academic Mentor – School Foundations',
      description:
        'B.Sc Computer Science from Mumbai University, mentoring Grades 6-10 in Mathematics, Science, and English across State, CBSE, ICSE, IB, and Cambridge curricula.',
    },
    {
      '@type': 'Person',
      name: 'CA Prerna Gangwal',
      jobTitle: 'Commerce Faculty',
      description:
        'Commerce faculty with 7+ years teaching experience in Business Studies, Economics, and Accounts with exam-oriented structured drills.',
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
