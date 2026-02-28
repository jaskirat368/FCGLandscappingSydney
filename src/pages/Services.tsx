import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | FCG Landscaping Sydney</title>
        <meta name="description" content="Comprehensive landscaping services including design, construction, maintenance, greenwalls, paving, decking, and retaining walls across Sydney." />
      </Helmet>

      <div className="bg-fcg-green text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-2xl">Expert solutions for every aspect of your outdoor space.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <service.icon className="text-fcg-olive mb-4 w-10 h-10" />
                  <h3 className="text-2xl font-serif text-fcg-green mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.shortDesc}</p>
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-fcg-green font-medium hover:text-fcg-olive transition-colors mt-auto"
                  >
                    View Details <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
