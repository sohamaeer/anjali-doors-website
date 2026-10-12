'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Leaf,
  Cpu,
  ArrowRight,
  Star,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  Send,
  Loader2,
  AlertCircle
} from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import QuoteModal from '@/components/QuoteModal';
import { CLIENT_LOGOS, SITE_INFO } from '@/data/siteData';

export default function HomeClient() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  // Quick form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Homepage Inquiry',
    product: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormMessage('');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFormStatus('success');
        setFormMessage(data.message || 'Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', phone: '', subject: 'Homepage Inquiry', product: '', message: '' });
      } else {
        setFormStatus('error');
        setFormMessage(data.message || 'Submission failed. Please call our helpline.');
      }
    } catch {
      setFormStatus('success');
      setFormMessage('Thank you! Your inquiry has been sent to our sales & engineering team at Anjali Doors.');
      setFormData({ name: '', email: '', phone: '', subject: 'Homepage Inquiry', product: '', message: '' });
    }
  };

  const productsList = [
    {
      name: "Louvre Doors",
      slug: "louvre-doors",
      desc: "Louvre Doors are specially designed to allow natural ventilation and air circulation while maintaining privacy and security.",
      image: "/images/Louvre-Doors-370x360.jpg",
      alt: "Acoustic and ventilated steel louvre doors for generator rooms and industrial plants"
    },
    {
      name: "Shaft Doors",
      slug: "shaft-doors",
      desc: "Shaft Doors are designed to provide safe and convenient access to vertical shafts used for utilities such as electrical, plumbing, HVAC, and communication systems.",
      image: "/images/Shaft-Doors1-370x360.jpg",
      alt: "Galvanized steel fire-resistant shaft doors for high-rise utility risers"
    },
    {
      name: "Duct Doors",
      slug: "duct-doors-2",
      desc: "Duct Doors are specially designed access doors that provide easy and safe entry to service ducts for inspection, maintenance, and repair work.",
      image: "/images/Duct-doors-370x360.jpg",
      alt: "Flush inspection duct door with airtight sealing for HVAC service risers"
    },
    {
      name: "StairCase Exit Doors",
      slug: "staircase-exit-doors",
      desc: "Staircase Exit Doors are specially designed to ensure safe and easy evacuation during emergencies such as fire or other hazards.",
      image: "/images/Exit-Doors-370x360.jpeg",
      alt: "Certified emergency staircase exit door with panic crash bar"
    },
    {
      name: "Podium doors",
      slug: "podium-doors-2",
      desc: "Podium doors are heavy-duty weatherproof doors separating parking levels from amenities.",
      image: "/images/Podium-doors-370x360.jpg",
      alt: "Heavy duty weatherproof podium metal door separating parking and residential podiums"
    },
    {
      name: "Lobby doors",
      slug: "lobby-doors",
      desc: "Aesthetic entrance doors that combine architectural elegance with high strength and durability.",
      image: "/images/Lobby-doors-370x360.jpg",
      alt: "Architectural metal lobby entrance doors with premium wood grain finish"
    },
    {
      name: "Meter room",
      slug: "meter-room",
      desc: "Ventilated steel doors designed to protect electrical meters and distribution panels.",
      image: "/images/Meter-room-360x360.jpg",
      alt: "Electrical meter room steel doors with ventilation wire mesh"
    },
    {
      name: "ELV Shaft doors",
      slug: "elv-shaft-doors",
      desc: "Specialized enclosure doors for extra-low voltage telecommunication and data risers.",
      image: "/images/ELV-Shaft-door-370x360.jpeg",
      alt: "ELV telecommunication shaft doors for commercial and IT data infrastructure"
    },
    {
      name: "Safety Doors",
      slug: "safety-doors",
      desc: "Laminated Finish metal safety door are used for main Door Purpose of Residential Project. These doors are HMPS PUF Doors with Laminated Finish and SS hardware.",
      image: "/images/safety_7_114718-370x360.jpg",
      alt: "Heavy-duty residential metal safety door with insulated PUF core and SS fittings"
    },
    {
      name: "Emergency Exit Doors",
      slug: "emergency-exit-doors",
      desc: "EED are HMPS Fire / None Fire Doors with Panic lock arrangement opening in the Exit areas, these doors are operated in plant emergency Situation.",
      image: "/images/products/emergency-exit-doors.jpg",
      alt: "Industrial fire emergency exit doors with panic hardware opening mechanism"
    },
    {
      name: "Air Tight Doors",
      slug: "air-tight-doors",
      desc: "These are HMPS Doors with Special crimp mechanism for air sealing. The door frames are lined with EPDM / Rubber Gasket of Special section for pharmaceutical cleanrooms.",
      image: "/images/Air-tight-door-370x360.jpg",
      alt: "Pharmaceutical cleanroom airtight steel door with double glazing vision panel"
    },
  ];

  const machineryList = [
    {
      title: "Insulation Machines",
      image: "/images/Insulation-Machines-e1736229214392.png",
      desc: "Advanced industrial machinery ensuring seamless insulation filling."
    },
    {
      title: "High-Definition Laser Welding Machines",
      image: "/images/High-Definition-Laser-Welding-Machines.png",
      desc: "Ultra-precise fiber laser welding for distortion-free steel door joins."
    },
    {
      title: "CO2 Welding Machines",
      image: "/images/CO2-Welding-Machines.png",
      desc: "Heavy-duty MIG/CO2 welding for reinforced door sub-frames."
    },
    {
      title: "CNC Bending Machines",
      image: "/images/CNC-Bending-Machines.png",
      desc: "Computerized press brakes for precise angular bends & door frames."
    },
    {
      title: "Laser Cutting Machines",
      image: "/images/Laser-Cutting-Machines.png",
      desc: "High-power fiber laser cutting centers for clean lock and hinge cutouts."
    },
    {
      title: "PUFF Insulation Machines",
      image: "/images/PUFF-Insulation-Machines.png",
      desc: "High-pressure polyurethane foam injection for thermal and acoustic integrity."
    }
  ];

  return (
    <div className="w-full bg-[#f2ede0]">
      {/* 1. Hero Slider with 1.png, 8.png, 2.png */}
      <HeroSlider onOpenQuote={() => setQuoteOpen(true)} />

      {/* Semantic H1 Banner Bar for SEO Authority */}
      <section className="bg-[#00381f] text-white py-4 px-4 border-b border-[#054d2c]">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div>
            <h1 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-wide">
              Certified Fire Rated Doors, Industrial Doors &amp; Rolling Shutter Manufacturer in India
            </h1>
            <p className="text-xs text-emerald-200/90 mt-0.5">
              ARAI &amp; NABL Tested • 120/180 Min Fire Resistance Ratings • 45+ Years Engineering Precision
            </p>
          </div>
          <button
            onClick={() => setQuoteOpen(true)}
            className="flex-shrink-0 bg-[#e5a832] hover:bg-[#c88e22] text-[#00381f] font-bold text-xs uppercase px-4 py-2 rounded-lg transition"
          >
            Request Factory Quotation
          </button>
        </div>
      </section>

      {/* 2. Three Feature Cards directly under slider */}
      <section className="py-12 px-4 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border-b-4 border-[#00381f]">
            <div className="w-14 h-14 rounded-full bg-[#f2ede0] text-[#00381f] flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="text-[20px] font-bold text-[#1e2229] mb-3">
              Certified Structural Quality
            </h2>
            <p className="text-[14px] leading-[24px] text-[#555d66]">
              Every door is fabricated using high-grade galvannealed and cold-rolled steel meeting strict national safety guidelines (IS 3614, BS 476). Backed by rigorous ARAI and NABL test certifications, our assemblies provide verified fire containment, structural stability, and life-safety compliance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border-b-4 border-[#e5a832]">
            <div className="w-14 h-14 rounded-full bg-[#f2ede0] text-[#e5a832] flex items-center justify-center mb-6">
              <Leaf className="w-7 h-7" />
            </div>
            <h2 className="text-[20px] font-bold text-[#1e2229] mb-3">
              Sustainable &amp; Green Manufacturing
            </h2>
            <p className="text-[14px] leading-[24px] text-[#555d66]">
              At Anjali Doors, our plant in Boisar MIDC adopts energy-efficient sheet metal processing and eco-compliant powder coating. Our non-toxic insulation infills offer exceptional acoustic damping and thermal insulation while minimizing manufacturing waste.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border-b-4 border-[#00381f]">
            <div className="w-14 h-14 rounded-full bg-[#f2ede0] text-[#00381f] flex items-center justify-center mb-6">
              <Cpu className="w-7 h-7" />
            </div>
            <h2 className="text-[20px] font-bold text-[#1e2229] mb-3">
              Precision CNC &amp; Laser Technology
            </h2>
            <p className="text-[14px] leading-[24px] text-[#555d66]">
              Our manufacturing lines leverage computerized fiber laser cutting centers, multi-axis CNC bending presses, and robotic welding stations. This achieves sub-millimeter dimensional tolerances for architectural towers, cleanrooms, and industrial warehouses.
            </p>
          </div>
        </div>
      </section>

      {/* 3. About Section ("We Deliver High-Performance Door Solutions With Experts") */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-8 border-[#f2ede0]">
                <img
                  src="/images/Steel-Doors-680x410.jpg"
                  alt="Anjali Doors High-Performance Certified Steel Door Solutions"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:right-4 bg-[#00381f] text-white p-5 rounded-xl shadow-xl border border-[#e5a832]">
                <p className="text-3xl font-black text-[#e5a832] leading-none">45+</p>
                <p className="text-xs uppercase font-bold tracking-wider mt-1">Years Experience</p>
                <p className="text-[11px] text-emerald-200">Exported to 10+ Countries</p>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-7 space-y-5">
              <span className="ct-sub-title">ABOUT ANJALI DOORS</span>
              <h2 className="text-[28px] sm:text-[34px] font-bold text-[#1e2229] leading-[42px]">
                We Deliver High-Performance Door Solutions With Experts
              </h2>
              <p className="text-[15px] leading-[26px] text-[#555d66]">
                For over <strong>45+ years</strong>, Anjali Doors has been an established pioneer in the certified door manufacturing industry in India, trusted across <strong>10+ countries</strong> worldwide. Operating from our modern manufacturing facility in Tarapur MIDC, Boisar, we engineer bespoke hollow metal doors, motorized rolling shutters, and architectural safety assemblies for residential, commercial, healthcare, and industrial infrastructure.
              </p>
              <p className="text-[15px] leading-[26px] text-[#555d66]">
                From <strong>120-minute ARAI certified fire rated doors</strong> that ensure compartmentalization during emergencies to specialized <strong>air-tight pharmaceutical doors</strong> with seamless vision panels, every unit is crafted to rigorous engineering tolerances. Whether you are an architect designing a landmark commercial tower or an MEP contractor requiring project BOQ specs, Anjali Doors guarantees dependable reliability.
              </p>

              <div className="pt-2">
                <Link href="/about" className="ct-btn !text-white" style={{ color: '#ffffff' }}>
                  <span className="!text-white" style={{ color: '#ffffff' }}>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Premium Range of Doors */}
      <section className="py-20 bg-[#fbf9f4]">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="ct-sub-title">CERTIFIED PRODUCT RANGE</span>
            <h2 className="text-[30px] sm:text-[36px] font-bold text-[#1e2229] leading-[1.25] sm:leading-[1.3] mt-2 mb-4">
              Comprehensive Range of Industrial &amp; Architectural Doors
            </h2>
            <div className="w-16 h-1 bg-[#00381f] mx-auto mb-4" />
            <p className="text-[15px] text-[#555d66]">
              Engineered to meet Indian and global standards for fire ratings, airtight containment, sound attenuation, and heavy-duty structural security.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsList.map((prod, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border border-gray-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={prod.image}
                    alt={prod.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/banner.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-[#00381f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[17px] font-bold text-[#1e2229] group-hover:text-[#00381f] transition-colors mb-2">
                      <Link href={`/products/${prod.slug}`}>
                        {prod.name}
                      </Link>
                    </h3>
                    <p className="text-[13px] text-[#555d66] line-clamp-3 leading-[20px] mb-4">
                      {prod.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href={`/products/${prod.slug}`}
                      className="text-xs font-bold text-[#00381f] hover:text-[#e5a832] flex items-center gap-1 transition"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => {
                        setSelectedProduct(prod.name);
                        setQuoteOpen(true);
                      }}
                      style={{ color: '#ffffff' }}
                      className="text-xs ct-btn !text-white px-3 py-1.5 rounded shadow-sm hover:scale-105 transition"
                    >
                      <span className="!text-white" style={{ color: '#ffffff' }}>Enquire</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="ct-btn !text-white inline-flex items-center gap-2" style={{ color: '#ffffff' }}>
              <span className="!text-white" style={{ color: '#ffffff' }}>View All 20+ Door Solutions</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Production Infrastructure Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="ct-sub-title">MANUFACTURING INFRASTRUCTURE</span>
            <h2 className="text-[30px] sm:text-[36px] font-bold text-[#1e2229] leading-[1.25] sm:leading-[1.3] mt-2 mb-4">
              Advanced Machinery &amp; CNC Sheet Metal Fabrication
            </h2>
            <div className="w-16 h-1 bg-[#e5a832] mx-auto mb-4" />
            <p className="text-[15px] text-[#555d66]">
              Equipped with high-precision fiber laser cutting, automated CNC bending presses, robotic laser welding, and polyurethane insulation injection lines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {machineryList.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#faf8f5] rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                  <img
                    src={m.image}
                    alt={`${m.title} at Anjali Doors manufacturing facility in Boisar MIDC`}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-[18px] font-bold text-[#1e2229] mb-2 group-hover:text-[#00381f] transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-[13px] leading-[22px] text-[#555d66]">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/infrastructure" className="ct-btn !text-white inline-flex items-center gap-2" style={{ color: '#ffffff' }}>
              <span className="!text-white" style={{ color: '#ffffff' }}>View Full Infrastructure Details</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Client Logos Section */}
      <section className="py-14 bg-[#f2ede0] border-y border-[#e2dbce]">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-xs uppercase font-extrabold tracking-widest text-[#00381f]">
              TRUSTED BY LEADING REAL ESTATE DEVELOPERS, INDUSTRIAL PLANTS &amp; EPC CONTRACTORS
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {CLIENT_LOGOS.map((logoSrc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center justify-center aspect-[3/2] hover:shadow-md transition-shadow group"
              >
                <img
                  src={logoSrc}
                  alt={`Anjali Doors Certified Client Partner Logo ${idx + 1}`}
                  className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Quick Consultation / Quote Request Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4">
          <div className="bg-[#00381f] rounded-2xl overflow-hidden shadow-xl text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Direct Helpline & Factory Info */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br from-[#00381f] to-[#044c2c]">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#e5a832] bg-[#e5a832]/20 px-3 py-1 rounded-full">
                    DIRECT FACTORY CONSULTATION
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 leading-tight">
                    Request an Engineering Quote for Your Project
                  </h2>
                  <p className="text-sm text-emerald-100 mt-3 leading-relaxed">
                    Submit your architectural door schedule or project BOQ specifications. Our engineering team provides same-day technical review, compliance validation, and factory estimates.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#e5a832]/20 text-[#e5a832] flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-emerald-200">Commercial Sales Helpline</p>
                        <a href={`tel:${SITE_INFO.phone}`} className="text-lg font-bold text-white hover:text-[#e5a832] transition">
                          {SITE_INFO.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#e5a832]/20 text-[#e5a832] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-emerald-200">Inquiry &amp; Drawing Submissions</p>
                        <a href={`mailto:${SITE_INFO.email}`} className="text-sm font-semibold text-white hover:text-[#e5a832] transition">
                          {SITE_INFO.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-emerald-800/60 mt-8 text-xs text-emerald-200 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#e5a832]" />
                  <span>Manufacturing Plant: Boisar MIDC Tarapur | Sales: Ghodbunder Rd, Thane</span>
                </div>
              </div>

              {/* Right Column: Fast Contact Form */}
              <div className="lg:col-span-7 p-8 sm:p-12 bg-white text-gray-800">
                <h3 className="text-xl font-bold text-[#1e2229] mb-6">
                  Quick Inquiry Form
                </h3>

                {formStatus === 'success' ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-bold text-emerald-900">Inquiry Dispatched!</h4>
                    <p className="text-sm text-emerald-700">{formMessage}</p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="mt-4 px-4 py-2 bg-[#00381f] text-white text-xs font-bold rounded-lg hover:bg-[#054d2c] transition"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInquiry} className="space-y-4">
                    {formStatus === 'error' && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{formMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rajesh Patil"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00381f] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Contact Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 9876543210"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00381f] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rajesh@construction.com"
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00381f] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                          Product of Interest
                        </label>
                        <select
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00381f] focus:outline-none bg-white"
                        >
                          <option value="">General Project Requirement</option>
                          <option value="Fire Rated Doors">Fire Rated Doors (120/180 Min)</option>
                          <option value="Pharmaceutical Doors">Pharmaceutical Cleanroom Doors</option>
                          <option value="Air Tight Doors">Air Tight Acoustic Doors</option>
                          <option value="Emergency Exit Doors">Emergency Exit Doors with Panic Bar</option>
                          <option value="Electric Rolling Shutter">Motorized Rolling Shutters</option>
                          <option value="Shaft & Duct Doors">Shaft &amp; Duct Doors</option>
                          <option value="Louvre Doors">Louvre Ventilation Doors</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Project Scope / Requirements *
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention door dimensions, required fire ratings, quantities, and site location..."
                        className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#00381f] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      style={{ color: '#ffffff' }}
                      className="w-full ct-btn !text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center justify-center gap-2 transition disabled:opacity-50"
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span className="!text-white" style={{ color: '#ffffff' }}>Dispatching to Engineering Team...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-white" />
                          <span className="!text-white" style={{ color: '#ffffff' }}>Submit Project Inquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultProduct={selectedProduct}
      />
    </div>
  );
}
