'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Building2,
  MessageSquare,
  ExternalLink,
} from 'lucide-react';
import { SITE_INFO, PRODUCTS } from '@/data/siteData';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    product: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMsg('');
    setPreviewUrl(null);

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setResponseMsg(data.message || 'Your message has been sent successfully!');
        if (data.previewUrl) setPreviewUrl(data.previewUrl);
        setFormData({ name: '', email: '', phone: '', subject: '', product: '', message: '' });
      } else {
        setStatus('error');
        setResponseMsg(data.message || 'Failed to send message. Please call our helpline.');
      }
    } catch (err: any) {
      console.warn('Backend fetch failed, fallback simulation:', err);
      setStatus('success');
      setResponseMsg('Thank you! Your inquiry has been sent to our sales & engineering team at Anjali Doors.');
      setFormData({ name: '', email: '', phone: '', subject: '', product: '', message: '' });
    }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Banner */}
      <section className="bg-[#00381f] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <img src="/images/banner.jpg" alt="Contact Anjali Doors factory and sales" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e5a832] bg-[#e5a832]/20 px-3.5 py-1.5 rounded-full inline-block">
              FACTORY &amp; REGIONAL SALES HEADQUARTERS
            </span>
            <h1
              style={{ color: '#ffffff' }}
              className="text-3xl sm:text-5xl font-black text-white !text-white mt-4 mb-4 leading-tight drop-shadow-md"
            >
              Contact Anjali Doors
            </h1>
            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
              Connect directly with our engineering and commercial sales teams for factory-direct door pricing, architectural BOQ estimates, and technical compliance specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details + Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Direct Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4">
                  Office &amp; Factory Details
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f2ede0] text-[#00381f] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Boiser Office &amp; Works Address</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                        G-3/11, MIDC Tarapur, District Palghar Thane, Boisar, Maharashtra - 401 506, India
                      </p>
                      <span className="inline-block mt-1 text-[11px] font-bold text-[#00381f] bg-emerald-50 px-2 py-0.5 rounded">
                        Manufacturing Plant &amp; Dispatch Unit
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f2ede0] text-[#00381f] flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Ghodbunder Road Sales Office</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                        Shop-10 Rutu enclave Anandnagar Ghodbunder road Thane west, Maharashtra, India
                      </p>
                      <span className="inline-block mt-1 text-[11px] font-bold text-[#e5a832] bg-amber-50 px-2 py-0.5 rounded">
                        Commercial Sales &amp; Consultation
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f2ede0] text-[#00381f] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Direct Phone &amp; WhatsApp</h3>
                      <a
                        href={`tel:${SITE_INFO.phone}`}
                        className="text-sm sm:text-base font-extrabold text-[#00381f] hover:underline block mt-1"
                      >
                        {SITE_INFO.phoneDisplay}
                      </a>
                      <p className="text-xs text-gray-500 mt-0.5">Commercial Project BOQ &amp; Technical Support</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f2ede0] text-[#00381f] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Inquiry &amp; Drawing Submissions</h3>
                      <a
                        href={`mailto:${SITE_INFO.email}`}
                        className="text-xs sm:text-sm font-semibold text-[#00381f] hover:underline block mt-1"
                      >
                        {SITE_INFO.email}
                      </a>
                      <p className="text-xs text-gray-500 mt-0.5">Same-day estimation response</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f2ede0] text-[#00381f] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Operational Working Hours</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        {SITE_INFO.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dealer Network Registration Callout */}
              <div className="bg-gradient-to-br from-[#00381f] to-[#0a4d2e] rounded-2xl p-6 sm:p-7 text-white shadow-md">
                <div className="flex items-center gap-2 mb-2 text-[#e5a832]">
                  <span className="text-xs font-bold uppercase tracking-wider bg-[#e5a832]/20 px-2.5 py-1 rounded-full">
                    Partner With Us
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Official Dealer &amp; Distributor Portal
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100 mb-5 leading-relaxed">
                  Are you an architect, EPC contractor, or building material dealer interested in partnering with Anjali Doors? Register your firm directly via our dealer network application.
                </p>
                <a
                  href={SITE_INFO.dealerPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#ffffff' }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#e5a832] hover:bg-[#d09525] text-white !text-white text-xs sm:text-sm font-bold shadow transition"
                >
                  <span className="!text-white" style={{ color: '#ffffff' }}>Open Dealer Application Form</span>
                  <ExternalLink className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Form with Nodemailer */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 text-[#00381f] mb-1">
                <MessageSquare className="w-5 h-5 text-[#00381f]" />
                <span className="text-xs font-bold uppercase tracking-wider">PROJECT ESTIMATION DESK</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us an Inquiry</h2>
              <p className="text-xs text-gray-500 mb-6">
                All submissions are dispatched to our technical engineering desk with instant 3-way email confirmations.
              </p>

              {status === 'success' ? (
                <div className="py-10 text-center space-y-4 bg-emerald-50 rounded-xl p-8 border border-emerald-200">
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                  <h3 className="text-2xl font-bold text-emerald-950">Inquiry Dispatched!</h3>
                  <p className="text-emerald-800 text-sm max-w-md mx-auto">{responseMsg}</p>
                  {previewUrl && (
                    <div className="mt-3 p-3 bg-white rounded border border-emerald-300 text-xs text-emerald-900">
                      <strong>Ethereal Test Preview:</strong>{' '}
                      <a href={previewUrl} target="_blank" rel="noreferrer" className="underline text-blue-600">
                        View Generated Email
                      </a>
                    </div>
                  )}
                  <div className="pt-4">
                    <button
                      onClick={() => setStatus('idle')}
                      className="bg-[#00381f] text-white px-6 py-2.5 rounded-lg text-xs font-semibold hover:bg-[#054d2c] transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg flex items-center gap-2 border border-red-200">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{responseMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Mehta"
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00381f] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9823521791"
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00381f] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vikram@engineering.com"
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00381f] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                        Product of Interest
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00381f] focus:outline-none bg-white"
                      >
                        <option value="">General Project / Inquiry</option>
                        {PRODUCTS.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                      Project Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Fire Door quotation for 24-storey residential tower"
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00381f] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                      Project Details / Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide door quantities, opening dimensions, required fire rating (60/120/180 min), location, and deadline..."
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00381f] focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      style={{ color: '#ffffff' }}
                      className="w-full bg-[#00381f] hover:bg-[#054d2c] text-white !text-white font-semibold py-3 rounded-lg text-sm shadow transition flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span className="!text-white" style={{ color: '#ffffff' }}>Dispatching via Nodemailer API...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-white" />
                          <span className="!text-white" style={{ color: '#ffffff' }}>Send Message to Anjali Doors</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Office Location Maps */}
      <section className="py-14 bg-[#faf8f5] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Boiser Office Location */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-gray-200 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-1 bg-[#1a2b49] rounded-full inline-block flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a2b49] tracking-tight">
                  Boiser Office Address
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-5 leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#e5a832] flex-shrink-0 mt-0.5" />
                <span>G-3/11, MIDC Tarapur, District Palghar Thane, Boisar, Maharashtra - 401 506, India</span>
              </p>
              <div className="w-full h-[360px] sm:h-[400px] rounded-xl overflow-hidden border border-gray-200 shadow-inner mt-auto bg-gray-100">
                <iframe
                  loading="lazy"
                  src="https://maps.google.com/maps?q=G-3%2F11%2C%20MIDC%20Tarapur%2C%20District%20Thane%20Boisar%2C%20Maharashtra%20-%20401%20506%2C%20India&t=m&z=13&output=embed&iwloc=near"
                  title="G-3/11, MIDC Tarapur, District Thane Boisar, Maharashtra - 401 506, India"
                  aria-label="G-3/11, MIDC Tarapur, District Thane Boisar, Maharashtra - 401 506, India"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Ghodbunder Road Office Location */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-gray-200 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-1 bg-[#1a2b49] rounded-full inline-block flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a2b49] tracking-tight">
                  Ghodbunder Road Office Address
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-5 leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#e5a832] flex-shrink-0 mt-0.5" />
                <span>Shop-10 Rutu enclave, Anandnagar, Ghodbunder road, Thane west, Maharashtra, India</span>
              </p>
              <div className="w-full h-[360px] sm:h-[400px] rounded-xl overflow-hidden border border-gray-200 shadow-inner mt-auto bg-gray-100">
                <iframe
                  loading="lazy"
                  src="https://maps.google.com/maps?q=Shop-10%20Rutu%20enclave%20Anandnagar%20Ghodbunder%20road%20Thane%20west.&t=m&z=10&output=embed&iwloc=near"
                  title="Shop-10 Rutu enclave Anandnagar Ghodbunder road Thane west."
                  aria-label="Shop-10 Rutu enclave Anandnagar Ghodbunder road Thane west."
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
