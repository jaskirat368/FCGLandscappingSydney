import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function StickyCTA() {
  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:hidden"
    >
      <a 
        href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
        className="w-14 h-14 bg-fcg-green text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-fcg-green/90"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </a>
      <a 
        href={`mailto:${BUSINESS_INFO.email}`}
        className="w-14 h-14 bg-fcg-stone text-fcg-green rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-fcg-stone/90"
        aria-label="Get Quote"
      >
        <Mail size={24} />
      </a>
    </motion.div>
  );
}
