import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import ErrorBoundary from './components/ErrorBoundary';

import HomePage from './pages/HomePage';
import CAFoundationPage from './pages/CAFoundationPage';
import CAIntermediatePage from './pages/CAIntermediatePage';
import CommercePage from './pages/CommercePage';
import SchoolPage from './pages/SchoolPage';
import FacultyPage from './pages/FacultyPage';
import AboutUsPage from './pages/AboutUsPage';
import CoursesPage from './pages/CoursesPage';
import CollegePage from './pages/CollegePage';
import CsCmaPage from './pages/CsCmaPage';
import KhargharPage from './pages/KhargharPage';
import NaviMumbaiPage from './pages/NaviMumbaiPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white">
          <Navbar />
          <div className="flex-grow pb-16 lg:pb-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/ca-foundation" element={<CAFoundationPage />} />
              <Route path="/ca-intermediate" element={<CAIntermediatePage />} />
              <Route path="/commerce-11th-12th" element={<CommercePage />} />
              <Route path="/school-6th-10th" element={<SchoolPage />} />
              <Route path="/our-faculty" element={<FacultyPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/contact" element={<KhargharPage />} />
              <Route path="/college-bcom-bms" element={<CollegePage />} />
              <Route path="/cs-cma" element={<CsCmaPage />} />
              <Route path="/ca-coaching-kharghar" element={<KhargharPage />} />
              <Route path="/ca-classes-navi-mumbai" element={<NaviMumbaiPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>
          <Footer />
          <MobileBottomBar />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
