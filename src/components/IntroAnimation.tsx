import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    
    // Start exit animation slightly before unmounting
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    // Cleanup scroll lock after animation would definitely be done
    const cleanupTimer = setTimeout(() => {
        document.body.style.overflow = 'unset';
    }, 4500);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanupTimer);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  // Plant border animation variants
  const borderVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 0 },
    visible: (custom: number) => ({
      opacity: 0.1,
      scale: 1,
      rotate: custom,
      transition: { duration: 2, ease: "easeOut" }
    })
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-fcg-green overflow-hidden"
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Decorative Border Plants */}
      {/* Top Left Cluster */}
      <motion.div 
        className="absolute -top-16 -left-16 text-white"
        custom={45}
        variants={borderVariants}
        initial="hidden"
        animate="visible"
      >
         <Leaf size={300} strokeWidth={0.5} />
      </motion.div>
      <motion.div 
        className="absolute top-20 -left-8 text-white"
        initial={{ opacity: 0, x: -50, rotate: 15 }}
        animate={{ opacity: 0.05, x: 0, rotate: 15, transition: { delay: 0.5, duration: 1.5 } }}
      >
         <Leaf size={150} strokeWidth={0.5} />
      </motion.div>

      {/* Top Right Cluster */}
      <motion.div 
        className="absolute -top-16 -right-16 text-white"
        custom={-135}
        variants={borderVariants}
        initial="hidden"
        animate="visible"
      >
         <Leaf size={300} strokeWidth={0.5} />
      </motion.div>
       <motion.div 
        className="absolute top-20 -right-8 text-white"
        initial={{ opacity: 0, x: 50, rotate: -15 }}
        animate={{ opacity: 0.05, x: 0, rotate: -15, transition: { delay: 0.5, duration: 1.5 } }}
      >
         <Leaf size={150} strokeWidth={0.5} />
      </motion.div>

      {/* Bottom Left Cluster */}
      <motion.div 
        className="absolute -bottom-16 -left-16 text-white"
        custom={-45}
        variants={borderVariants}
        initial="hidden"
        animate="visible"
      >
         <Leaf size={300} strokeWidth={0.5} />
      </motion.div>

      {/* Bottom Right Cluster */}
      <motion.div 
        className="absolute -bottom-16 -right-16 text-white"
        custom={135}
        variants={borderVariants}
        initial="hidden"
        animate="visible"
      >
         <Leaf size={300} strokeWidth={0.5} />
      </motion.div>


      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center">
            {/* Icon */}
            <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-center shadow-2xl mb-8"
            >
                <Leaf className="text-white w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
            </motion.div>

            {/* Text Container */}
            <div className="text-center">
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        className="text-7xl md:text-9xl font-serif font-bold text-white tracking-tighter leading-none mb-2"
                    >
                        FCG
                    </motion.h1>
                </div>
                
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
                    className="h-[1px] bg-white/30 mx-auto mb-4"
                />

                <div className="overflow-hidden">
                    <motion.h2
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                        className="text-3xl md:text-5xl font-serif text-white tracking-[0.2em] uppercase"
                    >
                        Landscaping
                    </motion.h2>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}
