import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../data';

export default function ServiceAreas() {
  const areas = [
    "Sydney CBD", "Eastern Suburbs", "Inner West", "North Shore", 
    "Northern Beaches", "Sutherland Shire", "Western Sydney", "Hills District"
  ];

  return (
    <>
      <Helmet>
        <title>Landscaping Services in Sydney | Service Areas FCG</title>
        <meta name="description" content="FCG Landscaping provides premium landscape design, construction, and maintenance services across the Greater Sydney Metro Area. Call 0416 113 839." />
      </Helmet>

      <div className="bg-fcg-green text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Service Areas</h1>
          <p className="text-xl text-white/80 max-w-2xl">Providing exceptional landscaping across Greater Sydney.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-fcg-green mb-6">Landscaping Services in Sydney</h2>
          <p className="text-gray-600 mb-6">
            FCG Landscaping is proud to serve the entire Greater Sydney Metro Area. We bring our expertise in landscape design, construction, and maintenance to residential and commercial properties throughout the region.
          </p>
          <p className="text-gray-600 mb-8">
            Whether you're in the Eastern Suburbs looking for a coastal garden design, or in the Hills District needing a structural retaining wall, our team has the local knowledge and experience to deliver outstanding results.
          </p>

          <h3 className="text-2xl font-serif text-fcg-green mb-6">Our Key Service Locations</h3>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {areas.map((area, index) => (
              <li key={index} className="flex items-center justify-center gap-2 text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="w-2 h-2 bg-fcg-olive rounded-full"></span>
                {area}
              </li>
            ))}
          </ul>

          <div className="bg-fcg-stone/20 p-8 rounded-2xl max-w-2xl mx-auto">
            <h4 className="font-bold text-fcg-green mb-2">Don't see your suburb?</h4>
            <p className="text-gray-600 text-sm mb-6">We cover a wide range of suburbs within the Greater Sydney area. Contact us to confirm if we service your location.</p>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
