import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../data';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About FCG Landscaping | 14+ Years Experience Sydney</title>
        <meta name="description" content="Learn about FCG Landscaping's 14+ years of experience in delivering premium landscape design and construction across Sydney. Committed to quality and craftsmanship." />
      </Helmet>

      {/* Header */}
      <div className="bg-fcg-green text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">About FCG Landscaping</h1>
          <p className="text-xl text-white/80 max-w-2xl">Craftsmanship, Experience, and Structural Excellence.</p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-fcg-olive uppercase tracking-widest text-xs font-bold">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-serif text-fcg-green mt-3 mb-6">14+ Years of Landscape Excellence</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  FCG Landscaping has been transforming outdoor spaces across the Greater Sydney Metro Area for over 14 years. Founded on the principles of precision and integrity, we have established ourselves as a trusted name in high-end residential and commercial landscaping.
                </p>
                <p className="mb-6">
                  Our approach is simple: we listen, we plan, and we execute with meticulous attention to detail. Whether it's a complex structural retaining wall, a delicate vertical garden, or a complete backyard renovation, we bring the same level of professionalism and craftsmanship to every project.
                </p>
                <p>
                  We pride ourselves on our ability to handle projects of all scales, from intimate courtyard designs to large-scale strata and commercial installations. Our team is skilled, qualified, and passionate about creating outdoor environments that stand the test of time.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Residential & Commercial",
                  "Strata Management",
                  "Structural Landscaping",
                  "Custom Design",
                  "Quality Materials",
                  "Fully Insured"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-fcg-olive shrink-0" size={20} />
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://aicdn.picsart.com/d189918a-742b-43c2-b306-71e1482c2d7b.jpg" 
                  alt="Jamal Steer - Owner of FCG Landscaping" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-2/3 bg-fcg-stone p-8 rounded-xl shadow-lg hidden md:block">
                <h3 className="text-fcg-green font-serif text-xl mb-2">Hey there, I am Jamal Steer! Let's Work Together</h3>
                <p className="text-fcg-green/80 text-sm font-bold uppercase">- Owner & Director</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-fcg-stone/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-fcg-green mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-gray-600 mb-8">Contact us today for a consultation and let's bring your vision to life.</p>
          <Link 
            to="/contact"
            className="btn-primary"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
