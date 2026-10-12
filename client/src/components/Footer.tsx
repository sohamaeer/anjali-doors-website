'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, CheckCircle2, Facebook, Linkedin } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } catch {
      // ignore
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#181d24] text-[#a0a8b3] pt-16 pb-8 border-t-4 border-[#00381f]">
      <div className="max-w-[1240px] mx-auto px-4">
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#262c36]">
          {/* Column 1: Logo & Company Info (span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="bg-white p-2 rounded-lg inline-block">
                <img
                  src="/images/logo-1-1.png"
                  alt="Anjali Doors"
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/anjali-door-logo.jpeg';
                  }}
                />
              </div>
            </Link>
            <p className="text-[14px] leading-[24px] text-[#8e98a5]">
              At Anjali Enterprises, we specialize in crafting premium steel doors, fire-resistant solutions, and industrial storage systems. With cutting-edge technology and a customer-centric approach, we deliver unmatched quality and reliability to clients worldwide.
            </p>
            <div className="space-y-3 text-[14px] pt-1">
              <div className="flex items-start gap-3 text-[#a0a8b3]">
                <MapPin className="w-4 h-4 text-[#e5a832] flex-shrink-0 mt-1" />
                <span>G-3/11, MIDC Tarapur, District Palghar Thane, Maharashtra - 401 506, India</span>
              </div>
              <div className="flex items-center gap-3 text-[#a0a8b3]">
                <Mail className="w-4 h-4 text-[#e5a832] flex-shrink-0" />
                <a href={`mailto:${SITE_INFO.email}`} className="hover:text-white transition">
                  {SITE_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-[#a0a8b3]">
                <Phone className="w-4 h-4 text-[#e5a832] flex-shrink-0" />
                <a href={`tel:${SITE_INFO.phone}`} className="hover:text-white transition font-medium">
                  +91 9823521791
                </a>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={SITE_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Anjali Doors Facebook Profile"
                  className="w-9 h-9 rounded-full bg-[#202630] hover:bg-[#00381f] text-white flex items-center justify-center transition border border-[#2d3542] hover:border-[#e5a832]"
                >
                  <Facebook className="w-4 h-4 text-[#e5a832]" />
                </a>
                <a
                  href={SITE_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Anjali Doors LinkedIn Profile"
                  className="w-9 h-9 rounded-full bg-[#202630] hover:bg-[#00381f] text-white flex items-center justify-center transition border border-[#2d3542] hover:border-[#e5a832]"
                >
                  <Linkedin className="w-4 h-4 text-[#e5a832]" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Links (span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white text-[18px] font-bold pb-2 relative inline-block border-b-2 border-[#00381f]">
              Links
            </h3>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link href="/" className="hover:text-[#e5a832] transition flex items-center gap-1.5 text-[#a0a8b3]">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#e5a832] transition flex items-center gap-1.5 text-[#a0a8b3]">
                  <span>About us</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#e5a832] transition flex items-center gap-1.5 text-[#a0a8b3]">
                  <span>Product</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#e5a832] transition flex items-center gap-1.5 text-[#a0a8b3]">
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="hover:text-[#e5a832] transition flex items-center gap-1.5 text-[#a0a8b3]">
                  <span>Infrastructure</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#e5a832] transition flex items-center gap-1.5 text-[#a0a8b3]">
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <a
                  href={SITE_INFO.dealerPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e5a832] transition flex items-center gap-1.5 text-[#e5a832] font-semibold"
                >
                  <span>Dealer Portal</span>
                  <span className="text-xs">&rarr;</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Policy (span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white text-[18px] font-bold pb-2 relative inline-block border-b-2 border-[#00381f]">
              Policy
            </h3>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link href="/quality-safety-policy" className="hover:text-[#e5a832] transition text-[#a0a8b3]">
                  Quality &amp; Safety Policy
                </Link>
              </li>
              <li>
                <Link href="/quality-safety-policy" className="hover:text-[#e5a832] transition text-[#a0a8b3]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/quality-safety-policy" className="hover:text-[#e5a832] transition text-[#a0a8b3]">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/quality-safety-policy" className="hover:text-[#e5a832] transition text-[#a0a8b3]">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white text-[18px] font-bold pb-2 relative inline-block border-b-2 border-[#00381f]">
              Newsletter
            </h3>
            <p className="text-[14px] text-[#8e98a5] leading-[22px]">
              Send us a newsletter to get update
            </p>

            {status === 'success' ? (
              <div className="p-3 bg-[#00381f]/40 border border-[#00381f] rounded-lg text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Thank you! You are now subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="relative mt-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-[#202630] border border-[#2d3542] rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00381f]"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-10 bg-[#00381f] hover:bg-[#064e2c] text-white rounded-full flex items-center justify-center transition"
                  title="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#717a87]">
          <p>
            Copyright &copy; 2025. All Rights Reserved. Anjali Doors PVT. LTD. | Developed By{' '}
            <a
              href={SITE_INFO.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e5a832] hover:text-white hover:underline font-medium transition-colors"
            >
              Integral Web Solution
            </a>
          </p>
          <div className="flex items-center gap-3">
            <span>Built with React &amp; Next.js</span>
            <span>•</span>
            <span className="text-[#e5a832]">ARAI &amp; NABL Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
