import React, { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!project) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [project]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <>
      <Helmet>
        <title>{project.title} | FCG Landscaping Projects</title>
        <meta name="description" content={`Explore the ${project.title} by FCG Landscaping. A premium ${project.category} project in Sydney.`} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-fcg-green text-white pt-32 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/projects" className="inline-flex items-center text-white/70 hover:text-white font-medium mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-fcg-olive uppercase tracking-widest text-xs font-bold bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">{project.category}</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mt-6 mb-6">{project.title}</h1>
            <p className="text-xl text-white/80 max-w-3xl leading-relaxed">{project.description}</p>
          </motion.div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-fcg-green" />
            <img src={project.images[0]} alt="" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-serif text-fcg-green mb-6">Project Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Location</span>
                    <span className="text-gray-900 font-serif text-lg">{project.title.replace(' Project', '')}</span>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Service Type</span>
                    <span className="text-gray-900 font-serif text-lg">{project.category}</span>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Duration</span>
                    <span className="text-gray-900 font-serif text-lg">4-8 Weeks</span>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Year</span>
                    <span className="text-gray-900 font-serif text-lg">2024</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-serif text-2xl text-fcg-green mb-4">Key Features</h4>
                <ul className="space-y-4">
                  {[
                    "Custom Material Selection",
                    "Structural Engineering",
                    "Premium Planting Palette",
                    "Integrated Lighting",
                    "Drainage Solutions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-fcg-olive/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} className="text-fcg-olive" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Interactive Image Carousel */}
            <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl group bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} view ${currentImageIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Gradient Overlay for Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between p-4 z-20">
                <button 
                  onClick={(e) => { e.preventDefault(); prevImage(); }}
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center transition-all transform hover:scale-110 border border-white/30"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} />
                </button>
                <button 
                  onClick={(e) => { e.preventDefault(); nextImage(); }}
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center transition-all transform hover:scale-110 border border-white/30"
                  aria-label="Next image"
                >
                  <ChevronRight size={28} />
                </button>
              </div>

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
                      idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/60'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-serif text-fcg-green mb-6">Inspired by this project?</h3>
            <Link 
              to="/contact"
              className="btn-primary"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
