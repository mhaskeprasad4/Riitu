import React from 'react';
import SEOHead from '../components/SEOHead';
import ProgramsGrid from '../components/ProgramsGrid';
import LiveCTASection from '../components/LiveCTASection';
import DemoBookingSection from '../components/DemoBookingSection';

export default function CoursesPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Academic Programs Directory', path: '/courses' },
  ];

  return (
    <main>
      <SEOHead
        title="All CA & Commerce Academic Programs Directory 2026-27 | Riitu Institution Kharghar"
        description="Explore CA Foundation, CA Intermediate, 11th & 12th Commerce, CS/CMA, and School Foundation batches in Kharghar Navi Mumbai. Strictly 15 students per batch. Book Free Demo."
        canonicalPath="/courses"
        breadcrumbs={breadcrumbs}
      />
      <ProgramsGrid />
      <LiveCTASection />
      <DemoBookingSection />
    </main>
  );
}
