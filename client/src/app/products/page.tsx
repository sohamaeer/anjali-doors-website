'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, ShieldCheck, Check, FileDown, Phone } from 'lucide-react';
import { PRODUCTS, SITE_INFO } from '@/data/siteData';
import QuoteModal from '@/components/QuoteModal';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState('');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(PRODUCTS.map((p) => p.category)));
    return ['All', ...cats];
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleOpenQuote = (name: string) => {
    setActiveProduct(name);
    setQuoteModalOpen(true);
  };

  return (
    <div className="w-full bg-[#f9fafb]">
      {/* Consultio Page Header Hero Banner with Background Image */}
      <section className="relative text-white py-20 sm:py-28 lg:py-32 overflow-hidden bg-[#181d24]">
        {/* Hero Banner Background Image matching anjalidoor.com */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700"
          style={{ backgroundImage: `url('/images/banner.jpg')` }}
        />
        {/* Clean semi-transparent overlay matching Consultio (banner is 100% visible) */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00381f]/40 via-transparent to-black/30" />

        <div className="max-w-[1240px] mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-white/80 mb-3 uppercase tracking-wider font-medium">
              <Link href="/" className="hover:text-[#e5a832] transition">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#e5a832] font-semibold">Our Products</span>
            </nav>
            <h1
              style={{ color: '#ffffff' }}
              className="text-3xl sm:text-5xl font-black text-white !text-white tracking-tight mt-2 mb-4 leading-tight drop-shadow-md"
            >
              Our Certified Range of Doors &amp; Solutions
            </h1>
            <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed">
              Explore India's leading range of ARAI-certified fire resistant doors, cleanroom pharmaceutical doors, heavy industrial rolling shutters, and customized architectural metal doors.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Filters */}
      <section className="py-14 min-h-screen">
        <div className="max-w-[1240px] mx-auto px-4">
          {/* Search & Filter Bar */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 mb-10 space-y-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search door types, specs, or applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-[#00381f] focus:outline-none"
                />
              </div>

              {/* Counter & Brochure Download Link */}
              <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
                <span>Showing {filteredProducts.length} of {PRODUCTS.length} Door Solutions</span>
                <span className="hidden sm:inline text-gray-300">|</span>
                <a
                  href="/ANJALI-DOORS-Brochure.pdf"
                  download="ANJALI-DOORS-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 text-[#00381f] hover:text-[#e5a832] transition font-bold"
                >
                  <FileDown className="w-4 h-4 text-[#e5a832]" />
                  <span>Download Catalog PDF</span>
                </a>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-gray-100">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={isActive ? { color: '#ffffff' } : {}}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-[#00381f] text-white !text-white shadow-sm'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl p-16 text-center border border-gray-200">
              <p className="text-gray-500 text-base">No door solutions match your search criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-4 text-sm font-bold text-[#00381f] hover:text-[#e5a832] underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-gray-100">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/banner.jpg';
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-[#00381f] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow">
                      {prod.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#181d24] group-hover:text-[#00381f] transition-colors leading-snug">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-gray-600 mt-2.5 leading-relaxed line-clamp-3">
                        {prod.shortDesc}
                      </p>

                      {/* Feature Bullet Points */}
                      <div className="mt-4 space-y-1.5 border-t border-gray-100 pt-3">
                        {prod.features.slice(0, 2).map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                            <Check className="w-3.5 h-3.5 text-[#00381f] flex-shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-6 mt-5 border-t border-gray-100 flex items-center justify-between gap-3">
                      <Link
                        href={`/products/${prod.slug}`}
                        className="text-xs font-bold text-[#00381f] hover:text-[#e5a832] flex items-center gap-1 transition"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={() => handleOpenQuote(prod.name)}
                        style={{ color: '#ffffff' }}
                        className="ct-btn !text-white text-xs font-semibold px-4 py-2 rounded-lg transition"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom CTA Banner */}
          <div className="mt-16 bg-[#00381f] text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg border border-[#054d2c]">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <span className="text-xs uppercase font-bold text-[#e5a832] tracking-wider">
                CUSTOM SIZES &amp; FABRICATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Need Custom Architectural Door Solutions?
              </h3>
              <p className="text-sm text-emerald-100 leading-relaxed">
                We manufacture bespoke fire doors, shaft panels, and industrial gates according to custom architectural drawings and project BOQs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`tel:${SITE_INFO.phone}`}
                style={{ color: '#ffffff' }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg border-2 border-white/30 hover:border-white font-bold text-sm text-white flex items-center justify-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-[#e5a832]" />
                <span>Call +91 9823521791</span>
              </a>
              <button
                onClick={() => handleOpenQuote('Custom Door Project')}
                style={{ color: '#ffffff' }}
                className="w-full sm:w-auto ct-btn !text-white px-6 py-3.5 text-sm"
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultProduct={activeProduct}
      />
    </div>
  );
}
