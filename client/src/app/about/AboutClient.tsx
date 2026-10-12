'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Users,
  Target,
  Eye,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Factory,
  Globe2,
  Building2,
  Layers
} from 'lucide-react';
import QuoteModal from '@/components/QuoteModal';
import { SITE_INFO } from '@/data/siteData';

export default function AboutClient() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Page Title Hero Banner */}
      <section className="bg-[#00381f] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img
            src="/images/banner.jpg"
            alt="Anjali Doors manufacturing plant background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e5a832] bg-[#e5a832]/20 px-3.5 py-1.5 rounded-full inline-block">
              ESTABLISHED IN 1978 • 45+ YEARS OF ENGINEERING
            </span>
            <h1
              style={{ color: '#ffffff' }}
              className="text-3xl sm:text-5xl font-black text-white !text-white mt-4 mb-4 leading-tight drop-shadow-md"
            >
              About Anjali Doors PVT. LTD.
            </h1>
            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed font-normal">
              India's Premier Manufacturer &amp; Exporter of Certified Fire Rated Doors, Industrial Steel Doors, and High-Performance Access Systems for Over 4 Decades.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column with Legacy Badge */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#f2ede0]">
                <img
                  src="/images/Steel-Doors-680x410.jpg"
                  alt="Anjali Doors Industrial Steel Door Manufacturing Heritage"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#00381f] text-white p-6 rounded-2xl shadow-xl border-2 border-[#e5a832] hidden sm:block">
                <p className="text-3xl font-black text-[#e5a832]">1978</p>
                <p className="text-xs font-bold uppercase tracking-wider">Year Founded</p>
                <p className="text-xs text-emerald-200 mt-1 font-semibold">45+ Years Legacy</p>
              </div>
            </div>

            {/* Content Column with Natural Keyword Integration */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00381f] bg-emerald-50 px-3.5 py-1.5 rounded-full">
                OUR STORY &amp; HERITAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Engineering Protection, Structural Durability &amp; Architectural Excellence
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Established in 1978, <strong>Anjali Doors PVT. LTD.</strong> has grown to become an established, trusted door manufacturing company in India. Operating from our advanced manufacturing facility in <strong>MIDC Tarapur, Palghar Thane, Maharashtra</strong>, we specialize in certified hollow metal doors, 120-minute fire-rated doors, cleanroom access solutions, and heavy-duty motorized rolling shutters.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our manufacturing excellence combines certified metallurgy, CNC sheet metal fabrication, computerized fiber laser cutting, and robotic welding. Every door assembly meets rigorous national and international criteria, including <strong>IS 3614 and BS 476</strong>, verified through continuous testing at accredited laboratories including <strong>ARAI and NABL</strong>.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#fbf9f4] rounded-xl border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Globe2 className="w-5 h-5 text-[#00381f]" />
                    <p className="text-2xl font-black text-[#00381f]">10+ Countries</p>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">Global Export Footprint</p>
                </div>
                <div className="p-4 bg-[#fbf9f4] rounded-xl border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-5 h-5 text-[#00381f]" />
                    <p className="text-2xl font-black text-[#00381f]">5000+ Projects</p>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">Successfully Completed Installations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 bg-[#fbf9f4]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#00381f] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#00381f] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To design and manufacture superior fire-rated and industrial door systems that provide absolute safety to life and property, while offering architectural beauty, eco-friendly efficiency, and custom craftsmanship that exceed international standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-[#e5a832] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#e5a832] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be the foremost global partner for commercial developers, industrial conglomerates, and healthcare providers, renowned for pioneering safety innovations, precision automation, and uncompromising quality assurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance & Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00381f] bg-emerald-50 px-3.5 py-1.5 rounded-full">
              CERTIFIED COMPLIANCE &amp; ACCREDITATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
              Quality Assurance at Anjali Doors PVT. LTD.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              At Anjali Doors PVT. LTD., quality is our core priority. Every single door assembly undergoes stringent metallurgical checks, dimensional inspection, and mechanical load testing to deliver uncompromising safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-gray-200 bg-[#fbf9f4]">
              <ShieldCheck className="w-8 h-8 text-[#00381f] mb-3" />
              <h4 className="text-lg font-bold text-gray-900">ARAI &amp; NABL Accredited Testing</h4>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Tested by premier national testing agencies ensuring certified performance under high-temperature furnace conditions up to 180 minutes.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 bg-[#fbf9f4]">
              <Award className="w-8 h-8 text-[#e5a832] mb-3" />
              <h4 className="text-lg font-bold text-gray-900">BS 476 &amp; IS 3614 Compliance</h4>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Constructed adhering rigorously to Bureau of Indian Standards and British fire safety criteria with complete traceability.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 bg-[#fbf9f4]">
              <Factory className="w-8 h-8 text-[#00381f] mb-3" />
              <h4 className="text-lg font-bold text-gray-900">In-House Quality Sign-Offs</h4>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Each shipment is accompanied by batch test certificates, mill test reports, and quality sign-offs ensuring lasting durability.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setQuoteOpen(true)}
              style={{ color: '#ffffff' }}
              className="ct-btn !text-white font-semibold px-8 py-3.5 rounded-lg shadow transition"
            >
              <span className="!text-white" style={{ color: '#ffffff' }}>Consult with Our Engineering Team</span>
            </button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
