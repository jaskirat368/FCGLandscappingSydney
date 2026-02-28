import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { ArrowRight, Star, CheckCircle2, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../data';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Parallax transform values
  const moveX = useTransform(springX, [-0.5, 0.5], ["-20px", "20px"]);
  const moveY = useTransform(springY, [-0.5, 0.5], ["-20px", "20px"]);
  const moveXReverse = useTransform(springX, [-0.5, 0.5], ["20px", "-20px"]);
  const moveYReverse = useTransform(springY, [-0.5, 0.5], ["20px", "-20px"]);

  // 3D Tilt Effect
  const rotateX = useTransform(springY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    // Normalize mouse position from -0.5 to 0.5
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen min-h-[800px] flex flex-col justify-center overflow-hidden perspective-1000"
    >
      {/* Background Layer - Parallax */}
      <motion.div 
        style={{ x: moveXReverse, y: moveYReverse, scale: 1.1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
          alt="Luxury Landscaped Garden Sydney" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating Particles/Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2], 
              scale: [1, 1.5, 1],
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity,
              delay: i * 2
            }}
            className="absolute rounded-full bg-white blur-xl opacity-20"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Main Content - 3D Tilt */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center pt-24 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            style={{ x: moveX, y: moveY, rotateX, rotateY }}
            className="lg:col-span-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 md:mb-8">
                <div className="h-[1px] w-12 bg-fcg-stone"></div>
                <span className="text-fcg-stone uppercase tracking-widest text-sm font-bold">Modern Architectural Outdoor Living</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.9] mb-8 drop-shadow-2xl tracking-tight">
                Crafting <br />
                <span className="italic text-fcg-stone/90 font-light">Living</span> Sanctuaries
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-10 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Transforming Sydney properties into award-winning outdoor spaces with precision engineering and horticultural excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
                <a 
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                  className="btn-primary min-w-[180px] shadow-2xl shadow-fcg-green/20"
                >
                  Call Now
                </a>
                <Link 
                  to="/contact"
                  className="btn-outline-white min-w-[180px] backdrop-blur-sm"
                >
                  Request A Quote
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Floating Card (Desktop Only) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ x: moveXReverse, y: moveYReverse, rotateX: rotateY, rotateY: rotateX }}
            className="hidden lg:block lg:col-span-4"
          >
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-fcg-green rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg animate-pulse">
                14+
                <span className="text-[10px] absolute bottom-4 uppercase tracking-widest">Years</span>
              </div>
              
              <h3 className="text-white font-serif text-2xl mb-6">Excellence in Design</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-fcg-stone flex items-center justify-center text-fcg-green">
                    <Star size={18} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-white font-bold">5-Star Rated</p>
                    <p className="text-white/60 text-xs">Houzz & Google Reviews</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-fcg-stone flex items-center justify-center text-fcg-green">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <p className="text-white font-bold">Licensed & Insured</p>
                    <p className="text-white/60 text-xs">Full Structural Warranty</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/80 text-sm italic">
                    "The attention to detail and craftsmanship is simply world-class."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <MousePointer2 size={16} />
      </motion.div>

      {/* Trust Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-xl border-t border-white/10 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-white/90">
            <div className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
              <div className="flex text-fcg-stone group-hover:scale-110 transition-transform">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="font-medium text-sm tracking-wide">5.0 Star Rated</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
              <CheckCircle2 size={18} className="text-fcg-stone group-hover:scale-110 transition-transform" />
              <span className="font-medium text-sm tracking-wide">14+ Years Experience</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
              <CheckCircle2 size={18} className="text-fcg-stone group-hover:scale-110 transition-transform" />
              <span className="font-medium text-sm tracking-wide">Greater Sydney Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
