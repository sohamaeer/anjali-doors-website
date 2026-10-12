'use client';

import React, { useState } from 'react';
import {
  Factory,
  Cpu,
  CheckCircle2,
  Wrench,
  ShieldCheck,
  Building,
  Flame,
  ArrowRight
} from 'lucide-react';
import { MACHINERY, SITE_INFO } from '@/data/siteData';
import QuoteModal from '@/components/QuoteModal';

export default function InfrastructureClient() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Page Title Hero Banner */}
      <section className="bg-[#00381f] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <img src="/images/banner.jpg" alt="Anjali Doors high-tech manufacturing plant" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e5a832] bg-[#e5a832]/20 px-3.5 py-1.5 rounded-full inline-block">
              WORLD-CLASS PRODUCTION PLANT IN TARAPUR MIDC
            </span>
            <h1
              style={{ color: '#ffffff' }}
              className="text-3xl sm:text-5xl font-black text-white !text-white mt-4 mb-4 leading-tight drop-shadow-md"
            >
              Manufacturing &amp; Infrastructure
            </h1>
            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
              Located in the industrial belt of MIDC Tarapur (Palghar, Thane, Maharashtra), our facility spans state-of-the-art CNC sheet metal processing, computerized foam injection, and certified furnace testing capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00381f] bg-emerald-50 px-3.5 py-1.5 rounded-full">
                PRECISION SHEET METAL FABRICATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                High-Volume Precision Sheet Metal Engineering in Boisar MIDC
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                At Anjali Doors PVT. LTD., our production facility operates with cutting-edge machinery to guarantee consistent quality across every batch of fire-rated doors, rolling shutters, cleanroom partitions, and architectural frames.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our plant integrates CAD/CAM sheet metal unrolling, high-speed fiber laser cutting for tight tolerance hardware cutouts, high-tonnage multi-axis CNC bending, and robotic foam injection, achieving over 1,000 door sets monthly capacity with sub-millimeter precision.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#fbf9f4] rounded-xl border border-gray-200">
                  <p className="text-2xl font-black text-[#00381f]">1,000+ Units</p>
                  <p className="text-xs text-gray-600 mt-1 font-medium">Monthly Production Capacity</p>
                </div>
                <div className="p-4 bg-[#fbf9f4] rounded-xl border border-gray-200">
                  <p className="text-2xl font-black text-[#00381f]">Sub-Millimeter</p>
                  <p className="text-xs text-gray-600 mt-1 font-medium">Dimensional Tolerances</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#f2ede0]">
                <img
                  src="/images/CNC-Bending-Machines.png"
                  alt="Multi-axis CNC Bending Press Line at Anjali Doors Boisar Plant"
                  className="w-full h-auto object-cover bg-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery Showcase */}
      <section className="py-20 bg-[#fbf9f4]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00381f] bg-emerald-100 px-3.5 py-1.5 rounded-full">
              CORE MACHINERY &amp; EQUIPMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-3">
              Advanced Machinery Powering Every Door System
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Explore the specialized manufacturing equipment installed at our Tarapur MIDC facility for laser cutting, precision folding, and polyurethane core infill.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MACHINERY.map((mach) => (
              <div
                key={mach.id}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-5 p-2 flex items-center justify-center">
                    <img
                      src={mach.image}
                      alt={`${mach.name} at Anjali Doors Boisar MIDC manufacturing unit`}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#00381f] transition-colors">
                    {mach.name}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {mach.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 space-y-2">
                  {mach.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#00381f] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => setQuoteOpen(true)}
              style={{ color: '#ffffff' }}
              className="ct-btn !text-white font-semibold px-8 py-3.5 rounded-lg shadow transition"
            >
              <span className="!text-white" style={{ color: '#ffffff' }}>Plan Factory Visit &amp; Technical Consultation</span>
            </button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
