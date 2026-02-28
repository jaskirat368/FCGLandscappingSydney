import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Legal() {
  return (
    <>
      <Helmet>
        <title>Legal Information | FCG Landscaping</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="bg-gray-50 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-serif text-fcg-green mb-8">Legal Information</h1>
          
          <div className="bg-white p-8 rounded-xl shadow-sm space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Privacy Policy</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                At FCG Landscaping, we are committed to protecting your privacy. We collect information only to provide our services and communicate with you regarding your project. We do not share your personal information with third parties without your consent, except as required by law or to facilitate the delivery of materials/subcontractors for your specific project.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Terms of Service</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                All quotes provided are estimates based on visual inspection and information provided. Final costs may vary due to unforeseen site conditions. A deposit is required to secure a booking date. Full terms and conditions will be provided with your official quote documentation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Disclaimer</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
