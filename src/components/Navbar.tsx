import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Leaf, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed w-full z-50 transition-all duration-500 ease-in-out',
          scrolled 
            ? 'py-4' 
            : 'py-6'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group relative z-50">
              <div className={cn(
                "w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 border-2 shadow-sm",
                scrolled 
                  ? "bg-fcg-green border-fcg-green text-white shadow-lg" 
                  : "bg-white/10 border-white/30 backdrop-blur-md text-white group-hover:bg-white/20"
              )}>
                <Leaf size={22} strokeWidth={2} fill="currentColor" className="opacity-90" />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "font-serif font-bold text-xl leading-none tracking-tight transition-colors duration-300",
                  scrolled ? "text-fcg-green drop-shadow-sm" : "text-white drop-shadow-md"
                )}>FCG</span>
                <span className={cn(
                  "text-[10px] uppercase tracking-[0.25em] font-semibold transition-colors duration-300",
                  scrolled ? "text-fcg-olive" : "text-white/90 drop-shadow-md"
                )}>Landscaping</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <div className={cn(
                "flex items-center gap-8 px-8 py-2.5 rounded-full transition-all duration-500",
                scrolled 
                  ? "bg-white/90 backdrop-blur-md shadow-lg border border-gray-200/50" 
                  : "bg-black/20 backdrop-blur-sm border border-white/10"
              )}>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      "text-xs font-bold uppercase tracking-widest transition-all duration-300 relative group py-2",
                      scrolled ? "text-fcg-green hover:text-fcg-olive" : "text-white/90 hover:text-white"
                    )}
                  >
                    {link.name}
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full",
                      scrolled ? "bg-fcg-olive" : "bg-white"
                    )} />
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                className={cn(
                  "px-6 py-3 text-xs flex items-center gap-2 transition-all duration-300",
                  scrolled ? "btn-primary shadow-lg" : "btn-secondary border-none shadow-lg"
                )}
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors relative z-50",
                isOpen 
                  ? "text-white hover:bg-white/10" 
                  : (scrolled ? "text-fcg-green bg-white/90 shadow-md hover:bg-white" : "text-white hover:bg-white/10")
              )}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-fcg-green lg:hidden flex flex-col overflow-hidden"
          >
            {/* Decorative Background */}
            <div className="absolute -bottom-20 -right-20 text-white/5 pointer-events-none">
              <Leaf size={300} strokeWidth={0.5} />
            </div>
            
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />

            {/* Header Spacer */}
            <div className="h-24" />

            {/* Links Container */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-6 overflow-y-auto relative z-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-6"
                  >
                    <span className="text-white/30 text-sm font-mono font-light">0{index + 1}</span>
                    <span className="text-4xl sm:text-5xl font-serif text-white group-hover:text-fcg-olive transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-8 border-t border-white/10 bg-black/10 backdrop-blur-sm relative z-10"
            >
              <div className="flex flex-col gap-4">
                  <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="text-white/80 hover:text-white flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <Phone size={18} />
                      </div>
                      <span className="text-lg font-medium">{BUSINESS_INFO.phone}</span>
                  </a>
                   <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full text-center justify-center mt-2 bg-white text-fcg-green hover:bg-gray-100 border-none"
                  >
                    Request a Quote
                  </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
