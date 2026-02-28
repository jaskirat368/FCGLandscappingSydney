import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You | FCG Landscaping Sydney</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-20 px-4">
        <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl text-center border border-gray-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle2 className="text-fcg-green w-10 h-10" />
          </div>
          
          <h1 className="text-3xl font-serif text-fcg-green mb-4">Quote Request Sent!</h1>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            Thank you for contacting FCG Landscaping. We have received your details and will be in touch shortly to discuss your project.
          </p>
          
          <Link 
            to="/"
            className="btn-primary w-full justify-center"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
}
