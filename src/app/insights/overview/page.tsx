'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Dummy blog data
const blogPosts = [
  {
    title: 'Optimizing RPM Programs for Better Outcomes',
    category: 'Remote Patient Monitoring',
    date: 'Aug 10, 2025',
    thumbnail: '/assets/blog1.jpg',
    url: '/insights/rpm-outcomes',
  },
  {
    title: 'Understanding Patient Risk Scores',
    category: 'Analytics',
    date: 'Jul 28, 2025',
    thumbnail: '/assets/blog2.jpg',
    url: '/insights/patient-risk-scores',
  },
  {
    title: 'Revenue Insights from Remote Monitoring',
    category: 'Billing',
    date: 'Jul 15, 2025',
    thumbnail: '/assets/blog3.jpg',
    url: '/insights/rpm-revenue',
  },
  {
    title: 'Data-Driven Clinical Decisions',
    category: 'Clinical Analytics',
    date: 'Jun 30, 2025',
    thumbnail: '/assets/blog4.jpg',
    url: '/insights/data-driven-decisions',
  },
];

const InsightsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))];
  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/insights-hero.jpg"
            alt="RPM Software"
            fill
            className="object-cover blur-md filter grayscale"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div
            className={`max-w-4xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="inline-block bg-[#B187E8]/70 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 shadow-lg animate-pulse">
              Blogs, News and Insights
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white text-shadow-lg">
              <span className="text-[#B187E8] animate-pulse">Insights</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#2E1065] mb-6 text-center">
          Latest Insights
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#7C3AED] text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-[#A78BFA] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredPosts.map((post, index) => (
            <Link
              key={index}
              href={post.url}
              className="group block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-purple-700 font-medium mb-2">{post.category}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default InsightsPage;
