import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      title: "How to Plan a Landscape Renovation in Sydney",
      excerpt: "A comprehensive guide to planning your dream garden, from budgeting to council approvals.",
      date: "October 15, 2025",
      category: "Planning"
    },
    {
      title: "Choosing the Right Decking Material",
      excerpt: "Timber vs. Composite: We break down the pros and cons to help you decide for your outdoor space.",
      date: "September 28, 2025",
      category: "Materials"
    },
    {
      title: "Benefits of Vertical Gardens",
      excerpt: "Maximize your greenery in small spaces and improve air quality with a stunning vertical garden.",
      date: "September 10, 2025",
      category: "Design"
    },
    {
      title: "Low-Maintenance Garden Ideas",
      excerpt: "Enjoy your garden more and work in it less with these smart plant choices and design tips.",
      date: "August 22, 2025",
      category: "Maintenance"
    },
    {
      title: "Retaining Wall Material Guide",
      excerpt: "From sandstone to concrete sleepers, find the right structural solution for your property.",
      date: "August 5, 2025",
      category: "Construction"
    },
    {
      title: "Irrigation Planning Basics",
      excerpt: "Ensure your garden thrives year-round with a properly designed and installed irrigation system.",
      date: "July 18, 2025",
      category: "Water Management"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Landscape Resources & Blog | FCG Landscaping Sydney</title>
        <meta name="description" content="Expert landscaping advice, tips, and guides for Sydney homeowners. Learn about design, materials, and maintenance from FCG Landscaping." />
      </Helmet>

      <div className="bg-fcg-green text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Resources</h1>
          <p className="text-xl text-white/80 max-w-2xl">Expert advice and insights for your outdoor projects.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-fcg-stone/30 flex items-center justify-center text-fcg-green/20">
                  {/* Placeholder for blog image */}
                  <span className="font-serif text-4xl font-bold opacity-20">FCG</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-fcg-olive uppercase tracking-widest">{post.category}</span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-serif text-fcg-green mb-3 hover:text-fcg-olive transition-colors cursor-pointer">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <Link to="#" className="text-fcg-green font-medium text-sm hover:underline">Read Article &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
