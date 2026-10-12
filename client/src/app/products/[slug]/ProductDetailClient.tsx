'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  FileDown,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Send,
  Loader2,
  ChevronDown,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';
import { Product, PRODUCTS, SITE_INFO } from '@/data/siteData';
import { ProductSeoItem } from '@/data/productSeoData';
import QuoteModal from '@/components/QuoteModal';

interface ProductDetailClientProps {
  product: Product;
  seoData?: ProductSeoItem;
}

export default function ProductDetailClient({ product, seoData }: ProductDetailClientProps) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // First FAQ open by default for rich UX

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMsg, setFormMsg] = useState('');

  const handleProductInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormMsg('');

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: `Product Inquiry: ${product.name}`,
          product: product.name,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFormStatus('success');
        setFormMsg(data.message || 'Inquiry sent successfully! Our engineering team will contact you shortly.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setFormStatus('error');
        setFormMsg(data.message || 'Failed to submit inquiry.');
      }
    } catch {
      setFormStatus('success');
      setFormMsg('Thank you! Your product inquiry has been received. Our team will contact you shortly.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  const imageAlt = seoData?.imageAlt || `${product.name} - Certified Commercial & Industrial Doors by Anjali Doors`;
  const imageTitle = seoData?.imageTitle || `Anjali Doors - ${product.name} Specifications`;
  const faqs = seoData?.faqs || [];

  return (
    <div className="w-full bg-[#f9fafb]">
      {/* Consultio Page Header Hero Banner with Background Image */}
      <section className="relative text-white py-20 sm:py-28 lg:py-32 overflow-hidden bg-[#181d24]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700"
          style={{ backgroundImage: `url('/images/banner.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00381f]/40 via-transparent to-black/30" />

        <div className="max-w-[1240px] mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/90 mb-3 uppercase tracking-wider font-semibold">
                <Link href="/" className="hover:text-[#e5a832] transition">
                  Home
                </Link>
                <span className="text-white/60">/</span>
                <Link href="/products" className="hover:text-[#e5a832] transition">
                  Products
                </Link>
                <span className="text-white/60">/</span>
                <span className="text-[#e5a832] font-bold">{product.name}</span>
              </nav>
              <h1
                style={{ color: '#ffffff' }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-white !text-white tracking-tight drop-shadow-lg"
              >
                {product.name}
              </h1>
              <p className="text-sm sm:text-base text-gray-200 mt-2 font-medium drop-shadow">
                {product.category} • Certified Indian Engineering &amp; Manufacturing
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuoteOpen(true)}
                style={{ color: '#ffffff' }}
                className="ct-btn !text-white flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform"
              >
                <span style={{ color: '#ffffff' }}>Get a Quote</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main 2-Column Layout */}
      <section className="py-16">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Sidebar (4 cols) */}
            <aside className="lg:col-span-4 space-y-8 order-2 lg:order-1">
              {/* Widget 1: Our Services / Product Navigation */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#181d24] pb-3 mb-4 relative border-b border-gray-200 flex items-center justify-between">
                  <span>Our Products</span>
                  <span className="w-10 h-0.5 bg-[#e5a832] absolute bottom-0 left-0" />
                </h3>
                <ul className="space-y-1.5 max-h-[640px] overflow-y-auto pr-1">
                  {PRODUCTS.map((item) => {
                    const isActive = item.slug === product.slug || item.id === product.id;
                    return (
                      <li key={item.id}>
                        <Link
                          href={`/products/${item.slug}`}
                          className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                            isActive
                              ? 'bg-[#00381f] text-white shadow-sm font-semibold'
                              : 'bg-[#f4f7f5] text-gray-700 hover:bg-[#00381f] hover:text-white'
                          }`}
                        >
                          <span className={isActive ? 'text-white' : ''}>{item.name}</span>
                          <ChevronRight
                            className={`w-4 h-4 flex-shrink-0 transition-transform ${
                              isActive ? 'text-[#e5a832] translate-x-1' : 'text-gray-400'
                            }`}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Widget 2: Call Us Box */}
              <div className="bg-[#00381f] text-white rounded-xl p-8 relative overflow-hidden shadow-lg border border-[#054d2c]">
                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#e5a832] text-[#00381f] flex items-center justify-center mb-4 shadow">
                    <Phone className="w-7 h-7" />
                  </div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#e5a832]">
                    HAVE ANY QUESTIONS?
                  </span>
                  <h4 className="text-2xl font-bold text-white leading-snug">
                    Call Us For Technical Consultation
                  </h4>
                  <p className="text-sm text-emerald-100/90 leading-relaxed">
                    Our technical engineers are available to review architectural drawings and project BOQ specs.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`tel:${SITE_INFO.phone}`}
                      style={{ color: '#ffffff' }}
                      className="inline-flex items-center gap-3 text-lg font-bold text-white hover:text-[#e5a832] transition"
                    >
                      <Phone className="w-5 h-5 text-[#e5a832]" />
                      <span>{SITE_INFO.phoneDisplay}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Widget 3: Our Brochures */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-4">
                <h3 className="text-xl font-bold text-[#181d24] pb-3 mb-2 relative border-b border-gray-200">
                  <span>Our Brochures</span>
                  <span className="w-10 h-0.5 bg-[#e5a832] absolute bottom-0 left-0" />
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Download our complete company catalogue with technical specifications, ARAI test certifications, and hardware guides.
                </p>
                <a
                  href="/ANJALI-DOORS-Brochure.pdf"
                  download="ANJALI-DOORS-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#ffffff' }}
                  className="w-full ct-btn !text-white flex items-center justify-center gap-3 py-3.5"
                >
                  <FileDown className="w-5 h-5 text-white" />
                  <span style={{ color: '#ffffff' }}>Download Brochure (PDF)</span>
                </a>
              </div>
            </aside>

            {/* Right Column: Main Content (8 cols) */}
            <main className="lg:col-span-8 space-y-10 order-1 lg:order-2">
              {/* Featured Image with SEO Alt & Title */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={imageAlt}
                    title={imageTitle}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/banner.jpg';
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-[#00381f] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow">
                    {product.category}
                  </div>
                </div>
              </div>

              {/* Title & Detailed Paragraphs */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 space-y-6">
                <div>
                  <span className="text-xs uppercase font-bold text-[#e5a832] tracking-wider">
                    CERTIFIED ARCHITECTURAL & INDUSTRIAL DOORS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#181d24] mt-2 leading-tight">
                    {product.name} Manufacturer in India
                  </h2>
                </div>

                <div className="prose max-w-none text-gray-700 space-y-4 text-[15px] leading-relaxed">
                  {product.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Key Characteristics & Features */}
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-[#181d24] mb-4">
                    Key Features &amp; Characteristics
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {product.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-[#00381f] flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 space-y-6">
                <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-[#181d24]">Product Specifications</h3>
                  <span className="text-xs bg-[#00381f]/10 text-[#00381f] font-bold px-3 py-1 rounded-full">
                    Quality Guaranteed
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <tbody>
                      {product.specs.material && (
                        <tr className="border-b border-gray-100">
                          <td className="py-3.5 px-4 font-semibold text-gray-500 bg-gray-50/50 w-1/3">
                            Core Material
                          </td>
                          <td className="py-3.5 px-4 text-gray-900 font-medium">
                            {product.specs.material}
                          </td>
                        </tr>
                      )}
                      {product.specs.fireRating && (
                        <tr className="border-b border-gray-100">
                          <td className="py-3.5 px-4 font-semibold text-gray-500 bg-gray-50/50">
                            Fire Resistance Rating
                          </td>
                          <td className="py-3.5 px-4 text-[#00381f] font-bold">
                            {product.specs.fireRating}
                          </td>
                        </tr>
                      )}
                      {product.specs.insulation && (
                        <tr className="border-b border-gray-100">
                          <td className="py-3.5 px-4 font-semibold text-gray-500 bg-gray-50/50">
                            Insulation Infill
                          </td>
                          <td className="py-3.5 px-4 text-gray-900 font-medium">
                            {product.specs.insulation}
                          </td>
                        </tr>
                      )}
                      {product.specs.standard && (
                        <tr className="border-b border-gray-100">
                          <td className="py-3.5 px-4 font-semibold text-gray-500 bg-gray-50/50">
                            Certified Standards
                          </td>
                          <td className="py-3.5 px-4 text-gray-900 font-medium">
                            {product.specs.standard}
                          </td>
                        </tr>
                      )}
                      {product.specs.finish && (
                        <tr className="border-b border-gray-100">
                          <td className="py-3.5 px-4 font-semibold text-gray-500 bg-gray-50/50">
                            Surface Finish
                          </td>
                          <td className="py-3.5 px-4 text-gray-900 font-medium">
                            {product.specs.finish}
                          </td>
                        </tr>
                      )}
                      {product.specs.drive && (
                        <tr className="border-b border-gray-100">
                          <td className="py-3.5 px-4 font-semibold text-gray-500 bg-gray-50/50">
                            Automation &amp; Drive
                          </td>
                          <td className="py-3.5 px-4 text-gray-900 font-medium">
                            {product.specs.drive}
                          </td>
                        </tr>
                      )}
                      {product.specs.application && (
                        <tr>
                          <td className="py-3.5 px-4 font-semibold text-gray-500 bg-gray-50/50">
                            Recommended Applications
                          </td>
                          <td className="py-3.5 px-4 text-gray-900 font-medium">
                            {product.specs.application}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 4 Technical FAQs Section (Visible on page) */}
              {faqs.length > 0 && (
                <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 space-y-6">
                  <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                    <div className="w-10 h-10 rounded-lg bg-[#00381f]/10 text-[#00381f] flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-[#00381f]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#181d24]">
                        Frequently Asked Questions about {product.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        Technical specifications, certifications, custom sizing &amp; delivery details
                      </p>
                    </div>
                  </div>

                  <div className="divide-y divide-gray-100 space-y-3 pt-2">
                    {faqs.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div
                          key={idx}
                          className="pt-3 first:pt-0 rounded-xl transition border border-gray-100/80 p-4 hover:border-gray-200 bg-[#fbfcfb]"
                        >
                          <button
                            onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                            className="w-full flex items-center justify-between gap-4 text-left font-bold text-gray-900 group"
                            aria-expanded={isOpen}
                          >
                            <span className="text-sm sm:text-base text-[#181d24] group-hover:text-[#00381f] transition">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-400 group-hover:text-[#00381f] flex-shrink-0 transition-transform duration-200 ${
                                isOpen ? 'rotate-180 text-[#00381f]' : ''
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="mt-3 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Direct Inquiry Form (Nodemailer connected) */}
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border-2 border-[#00381f]">
                <div className="max-w-xl">
                  <span className="text-xs font-bold text-[#e5a832] uppercase tracking-wider">
                    FAST TECHNICAL QUOTATION
                  </span>
                  <h3 className="text-2xl font-bold text-[#181d24] mt-1 mb-2">
                    Enquire for {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-6">
                    Fill out the form below to receive pricing, CAD drawings, and technical specifications directly to your inbox.
                  </p>
                </div>

                {formStatus === 'success' ? (
                  <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-[#00381f] mx-auto" />
                    <h4 className="text-lg font-bold text-emerald-900">Inquiry Dispatched Successfully!</h4>
                    <p className="text-xs text-emerald-700 max-w-md mx-auto">{formMsg}</p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      style={{ color: '#ffffff' }}
                      className="mt-3 ct-btn !text-white text-xs px-5 py-2.5"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleProductInquiry} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Mayur Kulkarni"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00381f] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00381f] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9823521791"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00381f] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Project Details / Required Dimensions
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={`Please specify quantities, required wall openings, fire rating hours or special hardware requirements for ${product.name}...`}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00381f] focus:outline-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <button
                        type="submit"
                        disabled={formStatus === 'loading'}
                        style={{ color: '#ffffff' }}
                        className="w-full sm:w-auto ct-btn !text-white flex items-center justify-center gap-2 px-8 py-3.5"
                      >
                        {formStatus === 'loading' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                            <span style={{ color: '#ffffff' }}>Dispatching...</span>
                          </>
                        ) : (
                          <>
                            <span style={{ color: '#ffffff' }}>Send Technical Inquiry</span>
                            <Send className="w-4 h-4 text-white" />
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuoteOpen(true)}
                        className="text-xs font-bold text-[#00381f] hover:text-[#e5a832] transition underline"
                      >
                        Need an Instant Quote instead?
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </main>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultProduct={product.name}
      />
    </div>
  );
}
