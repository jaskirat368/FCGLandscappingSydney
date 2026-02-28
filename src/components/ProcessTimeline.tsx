import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MessageSquare, PenTool, Hammer, Flower2 } from 'lucide-react';
import { cn } from '../lib/utils';

const steps = [
  {
    id: 1,
    title: "Consultation",
    description: "We begin with an on-site meeting to understand your vision, lifestyle requirements, and site conditions. This is where we discuss budget, timeline, and initial ideas to ensure we're aligned from day one.",
    icon: MessageSquare,
  },
  {
    id: 2,
    title: "Design & Planning",
    description: "Our design team develops comprehensive plans, from concept sketches to detailed construction drawings. We select materials, plants, and finishes that complement your architecture and local environment.",
    icon: PenTool,
  },
  {
    id: 3,
    title: "Construction",
    description: "Our skilled craftsmen bring the design to life. We manage the entire build process, including earthworks, structural elements, paving, and planting, ensuring every detail meets our high standards.",
    icon: Hammer,
  },
  {
    id: 4,
    title: "Handover & Care",
    description: "Upon completion, we walk you through your new landscape and provide a detailed care guide. We also offer ongoing maintenance packages to ensure your garden continues to thrive and evolve beautifully.",
    icon: Flower2,
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Central Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2">
        <motion.div 
          style={{ height }} 
          className="w-full bg-fcg-green origin-top"
        />
      </div>

      <div className="space-y-12 md:space-y-24">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={cn(
              "relative flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center",
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            {/* Timeline Node */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-fcg-green rounded-full transform -translate-x-1/2 z-10 shadow-md md:mt-0 mt-1.5" />

            {/* Content Card */}
            <div className={cn(
              "ml-12 md:ml-0 w-full md:w-1/2",
              index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
            )}>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 relative group">
                {/* Number Watermark */}
                <span className="absolute -top-6 -right-4 text-8xl font-serif font-bold text-gray-50 opacity-50 select-none pointer-events-none group-hover:text-fcg-stone/20 transition-colors">
                  0{step.id}
                </span>
                
                <div className={cn(
                  "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-fcg-stone/20 text-fcg-green mb-4",
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                )}>
                  <step.icon size={24} />
                </div>
                
                <h3 className="text-2xl font-serif text-fcg-green mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Spacer for the other side */}
            <div className="hidden md:block w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
