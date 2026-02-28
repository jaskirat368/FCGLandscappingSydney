import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact FCG Landscaping | Landscape Consultation Sydney</title>
        <meta name="description" content="Contact FCG Landscaping for a consultation. Call 0416 113 839 or email 1classgrass@gmail.com. Serving the Greater Sydney Metro Area." />
      </Helmet>

      <div className="bg-fcg-green text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl">Start your landscape transformation today.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-serif text-fcg-green mb-8">Get In Touch</h2>
              <p className="text-gray-600 mb-10">
                Whether you have a specific project in mind or need expert advice on where to start, we're here to help. Contact us to schedule an on-site consultation.
              </p>

              <div className="space-y-8 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-fcg-stone/30 flex items-center justify-center shrink-0 text-fcg-green">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                    <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="text-lg text-fcg-olive hover:underline">
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri: 7am - 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-fcg-stone/30 flex items-center justify-center shrink-0 text-fcg-green">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-lg text-fcg-olive hover:underline">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-fcg-stone/30 flex items-center justify-center shrink-0 text-fcg-green">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Service Area</h3>
                    <p className="text-gray-600">{BUSINESS_INFO.serviceArea}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-fcg-stone/30 flex items-center justify-center shrink-0 text-fcg-green">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">By Appointment</p>
                  </div>
                </div>
              </div>

              {/* Social Promos */}
              <div className="mt-12 space-y-4">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/fcglandscaping?igsh=MWN1eHp5dDdnbTg0OQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-[2px] transition-transform hover:scale-[1.02] duration-300"
                >
                  <div className="bg-white rounded-[14px] p-6 h-full flex items-center justify-between group-hover:bg-opacity-95 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-tr from-[#FFDC80] via-[#F77737] to-[#C13584] text-white p-3 rounded-full shadow-md">
                        <Instagram size={28} />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-gray-900">Follow Our Journey</h3>
                        <p className="text-sm text-gray-500">See our latest projects on Instagram</p>
                      </div>
                    </div>
                    <ArrowRight className="text-gray-400 group-hover:text-[#C13584] group-hover:translate-x-1 transition-all" />
                  </div>
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/FCGLANDSCAPING/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group block relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1877F2] to-[#0056b3] p-[2px] transition-transform hover:scale-[1.02] duration-300"
                >
                  <div className="bg-white rounded-[14px] p-6 h-full flex items-center justify-between group-hover:bg-opacity-95 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#1877F2] text-white p-3 rounded-full shadow-md">
                        <Facebook size={28} />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-gray-900">Join Our Community</h3>
                        <p className="text-sm text-gray-500">Connect with us on Facebook</p>
                      </div>
                    </div>
                    <ArrowRight className="text-gray-400 group-hover:text-[#1877F2] group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif text-fcg-green mb-6">Request a Quote</h3>
              <form 
                action="https://formsubmit.co/jaskiratforbusiness@gmail.com" 
                method="POST" 
                className="space-y-6"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={`${window.location.origin}/thank-you`} />
                <input type="hidden" name="_subject" value="New Quote Request from FCG Landscaping" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" id="firstName" name="first_name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fcg-green focus:border-transparent outline-none transition-all" placeholder="John" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" id="lastName" name="last_name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fcg-green focus:border-transparent outline-none transition-all" placeholder="Doe" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fcg-green focus:border-transparent outline-none transition-all" placeholder="john@example.com" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fcg-green focus:border-transparent outline-none transition-all" placeholder="0400 000 000" required />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                  <input type="text" id="service" name="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fcg-green focus:border-transparent outline-none transition-all bg-white" placeholder="e.g. Landscape Design, Construction..." required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                  <textarea id="message" name="project_details" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-fcg-green focus:border-transparent outline-none transition-all" placeholder="Tell us about your project..." required></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
