import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import IntroAnimation from './components/IntroAnimation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ServiceAreas from './pages/ServiceAreas';
import Blog from './pages/Blog';
import Legal from './pages/Legal';

import ProjectDetail from './pages/ProjectDetail';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          {showIntro && (
            <IntroAnimation onComplete={() => setShowIntro(false)} />
          )}
        </AnimatePresence>
        
        <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white selection:bg-fcg-olive selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/service-areas" element={<ServiceAreas />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacy" element={<Legal />} />
              <Route path="/terms" element={<Legal />} />
              <Route path="/disclaimer" element={<Legal />} />
            </Routes>
          </main>
          <Footer />
          <StickyCTA />
          <Analytics />
        </div>
      </Router>
    </HelmetProvider>
  );
}
