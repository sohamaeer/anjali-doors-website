'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Mail,
  Phone,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Facebook,
  Linkedin,
  FileDown,
  Layers,
  ExternalLink,
} from 'lucide-react';
import { SITE_INFO, PRODUCTS } from '@/data/siteData';
import QuoteModal from './QuoteModal';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Close mobile menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile drawer is open to prevent touch scroll conflicts
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  // 20 core products formatted for the dropdown
  const productItems = [
    { name: "Fire Rated Doors", href: "/products/fire-rated-doors" },
    { name: "Pharmaceutical Doors", href: "/products/pharmaceutical-doors" },
    { name: "Air Tight Doors", href: "/products/air-tight-doors" },
    { name: "Emergency Exit Doors", href: "/products/emergency-exit-doors" },
    { name: "Safety Doors", href: "/products/safety-doors" },
    { name: "Wood finished metal doors", href: "/products/wood-finished-metal-doors" },
    { name: "Digital Access Doors", href: "/products/digital-access-doors" },
    { name: "Metal Windows", href: "/products/metal-windows" },
    { name: "Electrical gate", href: "/products/electrical-gate" },
    { name: "Steel Doors", href: "/products/steel-doors" },
    { name: "Metal PUF Doors", href: "/products/metal-puf-doors" },
    { name: "Laminated PUF Doors", href: "/products/laminated-puf-doors" },
    { name: "Industrial Storage Solution", href: "/products/industrial-storage-solution" },
    { name: "Window Doors", href: "/products/window-and-door-fitting" },
    { name: "Fabrication Work", href: "/products/fabrication-work" },
    { name: "Electric Rolling Shutter", href: "/products/electric-rolling-shutter" },
    { name: "Louvre Doors", href: "/products/louvre-doors" },
    { name: "Shaft Doors", href: "/products/shaft-doors" },
    { name: "Duct Doors", href: "/products/duct-doors-2" },
    { name: "StairCase Exit Doors", href: "/products/staircase-exit-doors" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
        {/* Topbar: Responsive for mobile, tablet, laptop & desktop */}
        <div className="bg-[#00381f] text-white text-[12px] sm:text-[13px] py-1.5 sm:py-2 px-3 sm:px-4 border-b border-[#054d2c]">
          <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
            {/* Left: Email & Phone */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-6 text-center">
              <a
                href={`mailto:${SITE_INFO.email}`}
                style={{ color: '#ffffff' }}
                className="flex items-center gap-1.5 text-white hover:!text-[#e5a832] transition-colors touch-manipulation"
              >
                <Mail className="w-3.5 h-3.5 text-[#e5a832] flex-shrink-0" />
                <span className="text-white hover:text-[#e5a832] font-normal tracking-wide truncate max-w-[200px] sm:max-w-none">
                  {SITE_INFO.email}
                </span>
              </a>
              <span className="text-white/40 hidden xs:inline">|</span>
              <a
                href={`tel:${SITE_INFO.phone}`}
                style={{ color: '#ffffff' }}
                className="flex items-center gap-1.5 text-white hover:!text-[#e5a832] transition-colors touch-manipulation"
              >
                <Phone className="w-3.5 h-3.5 text-[#e5a832] flex-shrink-0" />
                <span className="text-white hover:text-[#e5a832] font-semibold tracking-wide">
                  +(91)-9823521791
                </span>
              </a>
            </div>

            {/* Right: Social icons & Dealer Portal */}
            <div className="flex items-center gap-3 sm:gap-4 text-white/80">
              <a
                href={SITE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Anjali Doors Facebook"
                className="hover:text-[#e5a832] transition p-1 touch-manipulation"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Anjali Doors LinkedIn"
                className="hover:text-[#e5a832] transition p-1 touch-manipulation"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <span className="text-white/30 hidden xs:inline">|</span>
              <a
                href={SITE_INFO.dealerPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e5a832] hover:text-white transition font-semibold text-xs tracking-wider flex items-center gap-1 touch-manipulation"
              >
                <span>Dealer Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="w-full bg-white py-2.5 sm:py-3.5 border-b border-gray-100">
          <div className="max-w-[1240px] mx-auto px-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <img
                src="/images/logo-1-1.png"
                alt="Anjali Doors - Manufacturer and Exporter of Steel Doors, Fire Resistant Doors."
                className="h-10 sm:h-12 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/anjali-door-logo.jpeg';
                }}
              />
            </Link>

            {/* Desktop Navigation Links (Visible on Laptop >= 1024px & Desktop) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[14px] xl:text-[15px] font-medium text-[#1e2229]">
              <Link
                href="/"
                className={`hover:text-[#00381f] transition-colors py-2 ${
                  pathname === '/' ? 'text-[#00381f] font-bold' : ''
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`hover:text-[#00381f] transition-colors py-2 ${
                  pathname === '/about' ? 'text-[#00381f] font-bold' : ''
                }`}
              >
                About us
              </Link>

              {/* Products Mega-Dropdown with Hover Bridge & Click Support */}
              <div
                className="relative py-2 group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/products"
                  className={`hover:text-[#00381f] transition-colors flex items-center gap-1.5 py-1 ${
                    pathname.startsWith('/products') ? 'text-[#00381f] font-bold' : ''
                  }`}
                  onClick={(e) => {
                    // On click toggle dropdown if needed
                    if (window.innerWidth >= 1024) {
                      setDropdownOpen(!dropdownOpen);
                    }
                  }}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      dropdownOpen ? 'rotate-180 text-[#00381f]' : 'group-hover:rotate-180'
                    }`}
                  />
                </Link>

                {/* Dropdown Container with Hover Bridge (pt-2 prevents gap) */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 transition-all duration-200 ${
                    dropdownOpen
                      ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                      : 'opacity-0 invisible -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto'
                  }`}
                  style={{ width: 'min(92vw, 680px)' }}
                >
                  <div className="bg-white rounded-xl shadow-2xl border-t-4 border-[#00381f] border-x border-b border-gray-100 p-5 overflow-hidden">
                    {/* Header inside dropdown */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#e5a832]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#00381f]">
                          All Certified Door Solutions (20)
                        </span>
                      </div>
                      <Link
                        href="/products"
                        onClick={() => setDropdownOpen(false)}
                        className="text-xs font-bold text-[#e5a832] hover:text-[#00381f] transition flex items-center gap-1"
                      >
                        <span>View Full Catalog</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* 2-Column Grid of 20 Products */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 max-h-[380px] overflow-y-auto pr-1">
                      {productItems.map((item, idx) => {
                        const isCurrent = pathname === item.href;
                        return (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className={`flex items-center justify-between px-3 py-2 rounded-lg text-[13px] transition group/item ${
                              isCurrent
                                ? 'bg-[#00381f] text-white font-semibold'
                                : 'text-gray-700 hover:bg-[#f2ede0] hover:text-[#00381f]'
                            }`}
                          >
                            <span className="truncate pr-2">{item.name}</span>
                            <ChevronRight
                              className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${
                                isCurrent
                                  ? 'text-[#e5a832]'
                                  : 'text-gray-300 group-hover/item:text-[#00381f] group-hover/item:translate-x-0.5'
                              }`}
                            />
                          </Link>
                        );
                      })}
                    </div>

                    {/* Bottom Action Footer inside dropdown */}
                    <div className="mt-3 pt-3 border-t border-gray-100 bg-[#f9fafb] -mx-5 -mb-5 px-5 py-3 flex items-center justify-between text-xs">
                      <span className="text-gray-500">Need architectural specifications or CAD drawings?</span>
                      <a
                        href="/ANJALI-DOORS-Brochure.pdf"
                        download="ANJALI-DOORS-Brochure.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#00381f] hover:text-[#e5a832] flex items-center gap-1 transition"
                      >
                        <FileDown className="w-3.5 h-3.5 text-[#e5a832]" />
                        <span>Download Brochure</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/infrastructure"
                className={`hover:text-[#00381f] transition-colors py-2 ${
                  pathname === '/infrastructure' ? 'text-[#00381f] font-bold' : ''
                }`}
              >
                Infrastructure
              </Link>
              <Link
                href="/gallery"
                className={`hover:text-[#00381f] transition-colors py-2 ${
                  pathname === '/gallery' ? 'text-[#00381f] font-bold' : ''
                }`}
              >
                Gallery
              </Link>
              {/* Contact Us with Dealer Portal Submenu */}
              <div className="relative py-2 group">
                <Link
                  href="/contact"
                  className={`hover:text-[#00381f] transition-colors flex items-center gap-1 py-1 ${
                    pathname === '/contact' ? 'text-[#00381f] font-bold' : ''
                  }`}
                >
                  <span>Contact Us</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:rotate-180 transition-transform duration-200" />
                </Link>

                <div className="absolute top-full left-0 pt-2 z-50 opacity-0 invisible -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 w-44">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-1.5 overflow-hidden">
                    <Link
                      href="/contact"
                      className={`block px-4 py-2 text-xs font-semibold hover:bg-[#f2ede0] hover:text-[#00381f] transition ${
                        pathname === '/contact' ? 'text-[#00381f] font-bold bg-[#f2ede0]' : 'text-gray-700'
                      }`}
                    >
                      Contact Us
                    </Link>
                    <a
                      href={SITE_INFO.dealerPortalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2 text-xs font-semibold text-[#e5a832] hover:bg-[#f2ede0] hover:text-[#00381f] transition"
                    >
                      <span>Dealer Portal</span>
                      <ExternalLink className="w-3 h-3 text-[#e5a832]" />
                    </a>
                  </div>
                </div>
              </div>
            </nav>

            {/* Right Controls: Desktop CTA & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA (Only visible on >= 1024px desktop) */}
              <button
                onClick={() => setQuoteModalOpen(true)}
                style={{ color: '#ffffff' }}
                className="hidden lg:flex ct-btn !text-white items-center gap-2 group text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-6 touch-manipulation cursor-pointer"
              >
                <span className="!text-white" style={{ color: '#ffffff' }}>Get Started Now</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Mobile & Tablet Hamburger Toggle Button (Visible below 1024px) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden p-2 sm:p-2.5 rounded-xl text-gray-800 hover:text-[#00381f] hover:bg-[#f2ede0] border border-gray-200 transition focus:outline-none touch-manipulation flex items-center justify-center min-w-[44px] min-h-[44px] cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#00381f]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#00381f]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Slide-Over Drawer Navigation (Mounted directly on body via Portal) */}
      {mounted &&
        createPortal(
          <>
            {/* 1. Backdrop Overlay */}
            <div
              className="fixed inset-0 bg-black/60 z-[9998] backdrop-blur-sm lg:hidden"
              style={{
                opacity: mobileMenuOpen ? 1 : 0,
                pointerEvents: mobileMenuOpen ? 'auto' : 'none',
                visibility: mobileMenuOpen ? 'visible' : 'hidden',
                transition: 'opacity 0.3s ease, visibility 0.3s ease',
              }}
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* 2. Slide-Over Panel */}
            <aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm sm:max-w-md bg-white z-[9999] shadow-2xl flex flex-col lg:hidden"
              style={{
                height: '100dvh',
                maxHeight: '100dvh',
                transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
                visibility: mobileMenuOpen ? 'visible' : 'hidden',
                pointerEvents: mobileMenuOpen ? 'auto' : 'none',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.3s',
              }}
            >
              {/* Drawer Header with Logo & Close Button */}
              <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-white flex-shrink-0">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="inline-block">
                  <img
                    src="/images/logo-1-1.png"
                    alt="Anjali Doors"
                    className="h-9 sm:h-10 w-auto object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/anjali-door-logo.jpeg';
                    }}
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-gray-600 hover:text-black hover:bg-gray-100 transition min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* Drawer Scrollable Navigation */}
              <nav className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 space-y-1.5 touch-manipulation">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl text-base font-semibold min-h-[46px] transition ${
                    pathname === '/' ? 'bg-[#00381f] text-white' : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl text-base font-semibold min-h-[46px] transition ${
                    pathname === '/about' ? 'bg-[#00381f] text-white' : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  About us
                </Link>

                {/* Products Accordion */}
                <div className="py-1">
                  <button
                    type="button"
                    onClick={() => setMobileProductsOpen((prev) => !prev)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold min-h-[46px] text-gray-800 hover:bg-gray-100 transition touch-manipulation cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span>Products</span>
                      <span className="text-[11px] bg-[#f2ede0] text-[#00381f] px-2 py-0.5 rounded-full font-bold">
                        20 Types
                      </span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        mobileProductsOpen ? 'rotate-180 text-[#00381f]' : ''
                      }`}
                    />
                  </button>

                  {mobileProductsOpen && (
                    <div className="pl-3 pr-1 mt-1 space-y-1 border-l-2 border-[#00381f]/30 ml-3">
                      <Link
                        href="/products"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2.5 px-3 text-xs font-bold text-[#e5a832] bg-[#00381f] rounded-lg mb-2 text-center"
                      >
                        Browse All 20+ Products Catalog &rarr;
                      </Link>
                      <div className="max-h-[260px] overflow-y-auto space-y-1 pr-1">
                        {productItems.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block py-2.5 px-3 rounded-md text-xs font-medium min-h-[40px] flex items-center transition ${
                              pathname === item.href
                                ? 'bg-[#f2ede0] text-[#00381f] font-bold'
                                : 'text-gray-700 hover:bg-gray-100 hover:text-[#00381f]'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/infrastructure"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl text-base font-semibold min-h-[46px] transition ${
                    pathname === '/infrastructure' ? 'bg-[#00381f] text-white' : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  Infrastructure
                </Link>

                <Link
                  href="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl text-base font-semibold min-h-[46px] transition ${
                    pathname === '/gallery' ? 'bg-[#00381f] text-white' : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  Gallery
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl text-base font-semibold min-h-[46px] transition ${
                    pathname === '/contact' ? 'bg-[#00381f] text-white' : 'text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  Contact Us
                </Link>

                <a
                  href={SITE_INFO.dealerPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold min-h-[46px] text-[#e5a832] bg-amber-50 hover:bg-amber-100 transition"
                >
                  <span>Dealer Portal</span>
                  <ExternalLink className="w-4 h-4 text-[#e5a832]" />
                </a>
              </nav>

              {/* Drawer Actions - Dedicated "Get Started Now" Button inside Hamburger Drawer */}
              <div className="p-4 sm:p-5 border-t border-gray-100 space-y-3 bg-gray-50 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setQuoteModalOpen(true);
                  }}
                  style={{ color: '#ffffff' }}
                  className="w-full ct-btn !text-white text-center py-3.5 px-6 text-sm font-bold shadow-md flex items-center justify-center gap-2 touch-manipulation cursor-pointer min-h-[48px]"
                >
                  <span className="!text-white" style={{ color: '#ffffff' }}>Get Started Now</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <a
                  href="/ANJALI-DOORS-Brochure.pdf"
                  download="ANJALI-DOORS-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-gray-200 hover:bg-gray-100 text-gray-800 text-xs font-bold transition min-h-[42px] touch-manipulation"
                >
                  <FileDown className="w-4 h-4 text-[#00381f]" />
                  <span>Download Brochure PDF</span>
                </a>

                <div className="pt-1 text-center">
                  <a
                    href={`tel:${SITE_INFO.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#00381f] font-semibold touch-manipulation"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#00381f]" />
                    <span>Helpline: +(91)-9823521791</span>
                  </a>
                </div>
              </div>
            </aside>
          </>,
          document.body
        )}

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
}
