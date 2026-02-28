import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProcessTimeline from '../components/ProcessTimeline';
import { BUSINESS_INFO, SERVICES, PROJECTS, REVIEWS } from '../data';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>FCG Landscaping Sydney | Premium Landscape Design & Construction</title>
        <meta name="description" content="Transforming outdoor spaces across Sydney with precision & craftsmanship. Expert landscape design, construction, greenwalls, and outdoor living solutions. Call 0416 113 839." />
      </Helmet>

      <Hero />

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-fcg-olive uppercase tracking-widest text-xs font-bold">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif text-fcg-green mt-3 mb-6">Comprehensive Landscaping Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we deliver high-end landscaping solutions tailored to your lifestyle and property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-50 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <service.icon className="text-white mb-4 w-8 h-8" />
                  <h3 className="text-2xl font-serif text-white mb-2">{service.title}</h3>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">{service.shortDesc}</p>
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-white font-medium text-sm hover:text-fcg-stone transition-colors"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="btn-secondary"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-fcg-stone/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-fcg-olive uppercase tracking-widest text-xs font-bold">Our Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-serif text-fcg-green mt-3">Featured Projects</h2>
            </div>
            <Link to="/projects" className="btn-secondary text-xs px-6 py-3">
              View Details <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <span className="text-fcg-olive text-xs font-bold uppercase tracking-widest">{project.category}</span>
                <h3 className="text-2xl font-serif text-fcg-green mt-2 group-hover:text-fcg-olive transition-colors">{project.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-fcg-green text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-fcg-stone uppercase tracking-widest text-xs font-bold">Why Choose FCG</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-3 mb-8">Precision, Integrity & Structural Excellence</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-fcg-stone" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">14+ Years Experience</h4>
                    <p className="text-white/70">A decade and a half of delivering high-end residential and commercial landscapes across Sydney.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-fcg-stone" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">Quality Materials Only</h4>
                    <p className="text-white/70">We never compromise on materials. We use premium timber, stone, and plants suited for longevity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-fcg-stone" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">End-to-End Management</h4>
                    <p className="text-white/70">From initial consultation and design to construction and ongoing maintenance, we handle it all.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-8 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=2070&auto=format&fit=crop" 
                  alt="FCG Landscaping Team at Work" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl max-w-xs hidden md:block">
                <p className="text-fcg-green font-serif text-lg italic">"Jamal and the team were outstanding! Extremely supportive, creative and responsive."</p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-xs font-bold text-gray-500 uppercase">Oliver Konakoff</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-fcg-olive uppercase tracking-widest text-xs font-bold">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-serif text-fcg-green mt-3">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              A transparent, collaborative approach ensuring your vision is realized with precision and care.
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-fcg-olive uppercase tracking-widest text-xs font-bold">Client Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif text-fcg-green mt-3">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.slice(0, 3).map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.text.length > 150 ? review.text.substring(0, 150) + '...' : review.text}"</p>
                <div className="font-bold text-fcg-green">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-fcg-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Bring Your Outdoor Vision to Life.</h2>
          <p className="text-xl text-white/80 mb-10">Book your consultation today and start the transformation.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="px-8 py-4 bg-white text-fcg-green rounded-lg font-medium text-lg hover:bg-gray-100 transition-all"
            >
              Call {BUSINESS_INFO.phone}
            </a>
            <Link 
              to="/contact"
              className="px-8 py-4 border border-white text-white rounded-lg font-medium text-lg hover:bg-white/10 transition-all"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
