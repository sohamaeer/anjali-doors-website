'use client';

import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';
import { SITE_INFO } from '@/data/siteData';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = '919823521791';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Anjali%20Doors,%20I%20am%20interested%20in%20your%20industrial%20and%20fire-rated%20doors.`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-2.5 sm:gap-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Back to top"
          className="w-9 h-9 sm:w-11 sm:h-11 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#00381f] transition-all transform hover:-translate-y-1"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Phone Call */}
      <a
        href={`tel:${SITE_INFO.phone}`}
        title="Call Anjali Doors Helpline"
        className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00381f] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#064e2c] transition-all transform hover:-translate-y-1 border-2 border-white"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>

      {/* WhatsApp Floating CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="w-11 h-11 sm:w-12 sm:h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#20ba5a] transition-all transform hover:scale-105 border-2 border-white"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
      </a>
    </div>
  );
}
