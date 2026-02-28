import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Leaf } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data';

export default function Footer() {
  return (
    <footer className="bg-fcg-green text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-white">
                <Leaf size={20} strokeWidth={2.5} fill="currentColor" className="opacity-90" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none text-white">FCG</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/70">Landscaping</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Transforming outdoor spaces across Sydney with precision, craftsmanship, and structural excellence.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/fcglandscaping?igsh=MWN1eHp5dDdnbTg0OQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/FCGLANDSCAPING/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Our Projects</Link></li>
              <li><Link to="/service-areas" className="hover:text-white transition-colors">Service Areas</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm text-white/70">
              {SERVICES.slice(0, 6).map(service => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg mb-6">Contact Us</h3>
            <ul className="space-y-6 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 shrink-0 text-fcg-stone" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="hover:text-fcg-stone transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 shrink-0 text-fcg-stone" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-fcg-stone transition-colors">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-fcg-stone" />
                <div>
                  <p className="font-medium text-white">Service Area</p>
                  <p>{BUSINESS_INFO.serviceArea}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} FCG Landscaping. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
