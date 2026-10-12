'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Award, FileCheck, Flame, Scale, ArrowRight } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

export default function QualitySafetyPolicyPage() {
  return (
    <div className="w-full">
      {/* Banner */}
      <section className="bg-brand-green text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <img src="/images/banner.jpg" alt="Banner" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/20 px-3 py-1 rounded-full">
              CERTIFIED PROTOCOLS
            </span>
            <h1
              style={{ color: '#ffffff' }}
              className="text-3xl sm:text-5xl font-black text-white !text-white mt-3 mb-4 leading-tight drop-shadow-md"
            >
              Quality &amp; Safety Policy
            </h1>
            <p className="text-emerald-100 text-base sm:text-lg">
              At Anjali Enterprises, we are committed to manufacturing products that reflect uncompromising quality, reliability, and human life safety.
            </p>
          </div>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          {/* Intro Card */}
          <div className="bg-brand-creamLight p-8 rounded-2xl border border-brand-cream">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              Our Unwavering Quality Commitment
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              At <strong>Anjali Enterprises / Anjali Doors PVT. LTD.</strong>, quality is the bedrock of our manufacturing philosophy. Since 1978, our continuous drive has been to deliver steel doors, fire-resistant barriers, and perimeter security gates that perform flawlessly under the most demanding real-world conditions.
            </p>
          </div>

          {/* Core Quality Pillars */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
              Strict Quality Verification Checks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Exceptional Strength &amp; Durability</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Heavy-gauge galvannealed steel combined with internal structural stiffeners ensures our doors withstand extreme physical impacts, cycling tests, and static load demands.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-brand-gold flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Corrosion Resistance &amp; Long Lifespan</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Chemical degreasing, zinc phosphating, and oven-baked thermosetting powder coating protect against rust, chemical exposure, and coastal weathering.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-brand-green flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Dimensional Accuracy &amp; Fitting</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Multi-axis CNC bending and computerized shearing ensure tolerances within &plusmn;0.5mm, guaranteeing square door frames and frictionless swinging.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-brand-gold flex items-center justify-center flex-shrink-0">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">BS 476 &amp; IS 3614 Compliance</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    Certified for 60, 120, and 180 minutes of fire resistance by NABL-accredited and ARAI testing laboratories with official test certificates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Improvement Banner */}
          <div className="p-8 bg-brand-green text-white rounded-2xl">
            <h3 className="text-xl font-bold mb-3 text-brand-gold">Continuous Promise of Safety</h3>
            <p className="text-sm text-emerald-100 leading-relaxed">
              We prioritize user and property safety by using certified fire-resistant materials, advanced high-definition welding techniques, and micro-fine alignment. Every door, window, and gate from Anjali Doors is backed by complete mill inspection reports, ensuring you receive the highest standard of engineering reliability.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                style={{ color: '#002414' }}
                className="bg-brand-gold hover:bg-brand-gold-hover text-brand-green-dark font-bold px-6 py-2.5 rounded-lg text-sm transition"
              >
                Request Quality Inspection Certificates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
