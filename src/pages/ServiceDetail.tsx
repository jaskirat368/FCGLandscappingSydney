import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | FCG Landscaping Sydney</title>
        <meta name="description" content={`${service.shortDesc} Professional ${service.title} services in Sydney by FCG Landscaping.`} />
      </Helmet>

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/services" className="text-white/80 hover:text-white mb-4 inline-block text-sm uppercase tracking-widest font-medium">
              &larr; Back to Services
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">{service.title}</h1>
            <p className="text-xl text-white/90 max-w-2xl">{service.shortDesc}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif text-fcg-green mb-6">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {service.fullDesc}
              </p>

              <h3 className="text-2xl font-serif text-fcg-green mb-6">Our Approach</h3>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-fcg-stone/30 flex items-center justify-center shrink-0 text-fcg-green font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Consultation & Assessment</h4>
                    <p className="text-gray-600">We start by understanding your specific needs and assessing the site conditions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-fcg-stone/30 flex items-center justify-center shrink-0 text-fcg-green font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Custom Solution Design</h4>
                    <p className="text-gray-600">Developing a tailored plan that addresses functionality, aesthetics, and longevity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-fcg-stone/30 flex items-center justify-center shrink-0 text-fcg-green font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Expert Execution</h4>
                    <p className="text-gray-600">Our skilled team implements the solution using high-quality materials and proven techniques.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-serif text-fcg-green mb-6">Why Choose FCG for {service.title}?</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Premium Materials",
                  "Structural Integrity",
                  "Experienced Team",
                  "Attention to Detail",
                  "On-Time Completion",
                  "Clean Site Policy"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 size={18} className="text-fcg-olive" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="bg-fcg-stone/20 p-8 rounded-2xl sticky top-24">
                <h3 className="text-2xl font-serif text-fcg-green mb-4">Ready to Start?</h3>
                <p className="text-gray-600 mb-6">Contact us today to discuss your {service.title.toLowerCase()} needs.</p>
                
                <div className="space-y-4">
                  <a 
                    href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
                    className="w-full btn-primary gap-2"
                  >
                    <Phone size={18} />
                    Call {BUSINESS_INFO.phone}
                  </a>
                  <Link 
                    to="/contact"
                    className="w-full btn-secondary gap-2"
                  >
                    Request Quote
                  </Link>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-4">Service Areas</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    We provide {service.title.toLowerCase()} services across the entire {BUSINESS_INFO.serviceArea}.
                  </p>
                  <Link to="/service-areas" className="text-fcg-olive text-sm font-medium hover:underline">
                    View Service Map &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
