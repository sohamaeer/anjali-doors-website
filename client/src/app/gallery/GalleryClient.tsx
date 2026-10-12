'use client';

import React, { useState } from 'react';
import { X, ZoomIn, Eye } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Fire Shaft Doors Installation',
    category: 'Fire Rated Doors',
    image: '/images/Fire-shaft-doors-680x410.jpeg',
    alt: '120-minute fire resistant shaft door installation in commercial high rise'
  },
  {
    id: '2',
    title: 'Emergency Staircase Exit Door',
    category: 'Fire Rated Doors',
    image: '/images/Exit-Doors-370x360.jpeg',
    alt: 'Certified fire rated emergency exit door with panic hardware crash bar'
  },
  {
    id: '3',
    title: 'Cleanroom Air Tight Door with Gasket',
    category: 'Cleanroom Doors',
    image: '/images/Air-tight-door-370x360.jpg',
    alt: 'Flush pharmaceutical cleanroom airtight door with double glazed viewing panel'
  },
  {
    id: '4',
    title: 'Acoustic Louvre Ventilation Door',
    category: 'Ventilation',
    image: '/images/Louvre-Doors-370x360.jpg',
    alt: 'Acoustic louvre steel door for generator room ventilation and soundproofing'
  },
  {
    id: '5',
    title: 'Multi-Utility Shaft Access Door',
    category: 'Shaft & Duct Doors',
    image: '/images/Shaft-Doors1-370x360.jpg',
    alt: 'Galvanized steel vertical utility shaft access door for commercial tower'
  },
  {
    id: '6',
    title: 'Flush Inspection Duct Door',
    category: 'Shaft & Duct Doors',
    image: '/images/Duct-doors-370x360.jpg',
    alt: 'Airtight flush inspection duct access door for HVAC mechanical rooms'
  },
  {
    id: '7',
    title: 'Podium Weatherproof Deck Door',
    category: 'Architectural Doors',
    image: '/images/Podium-doors-370x360.jpg',
    alt: 'Weatherproof exterior metal podium door for commercial parking structures'
  },
  {
    id: '8',
    title: 'Corporate Grand Lobby Door',
    category: 'Architectural Doors',
    image: '/images/Lobby-doors-370x360.jpg',
    alt: 'Architectural wood finished metal entrance doors for luxury corporate lobby'
  },
  {
    id: '9',
    title: 'Ventilated Meter Room Door',
    category: 'Shaft & Duct Doors',
    image: '/images/Meter-room-360x360.jpg',
    alt: 'Heavy duty ventilated steel door for electrical substation and meter room'
  },
  {
    id: '10',
    title: 'ELV Telecommunication Shaft Door',
    category: 'Shaft & Duct Doors',
    image: '/images/ELV-Shaft-door-370x360.jpeg',
    alt: 'ELV extra low voltage communication riser door with master key lock'
  },
  {
    id: '11',
    title: 'Heavy-Duty Security Safety Door',
    category: 'Security Doors',
    image: '/images/safety_7_114718-370x360.jpg',
    alt: 'High security residential metal door with polyurethane core insulation'
  },
  {
    id: '12',
    title: 'Automated Electric Sliding Gate',
    category: 'Automation',
    image: '/images/Electrical-gate-e1761034792358.jpg',
    alt: 'Motorized industrial sliding security gate with remote automation drive'
  },
  {
    id: '13',
    title: 'Industrial Steel Door Assembly',
    category: 'Steel Doors',
    image: '/images/Steel-Doors-680x410.jpg',
    alt: 'Heavy duty industrial hollow metal door assembly with heavy duty hinges'
  },
  {
    id: '14',
    title: 'Project Installation Gallery',
    category: 'Architectural Doors',
    image: '/images/gallery10-370x360.jpg',
    alt: 'Completed architectural metal door installation across commercial project'
  },
  {
    id: '15',
    title: 'High-Definition Laser Welding Center',
    category: 'Manufacturing',
    image: '/images/High-Definition-Laser-Welding-Machines.png',
    alt: 'Automated fiber laser welding center at Anjali Doors Boisar facility'
  },
  {
    id: '16',
    title: 'CNC Bending Press Line',
    category: 'Manufacturing',
    image: '/images/CNC-Bending-Machines.png',
    alt: 'Computerized multi-axis CNC bending machine for precise door frames'
  },
  {
    id: '17',
    title: 'High-Speed Fiber Laser Cutter',
    category: 'Manufacturing',
    image: '/images/Laser-Cutting-Machines.png',
    alt: 'Industrial fiber laser cutting machine for precision sheet metal doors'
  },
  {
    id: '18',
    title: 'Computerized PUFF Injection Station',
    category: 'Manufacturing',
    image: '/images/PUFF-Insulation-Machines.png',
    alt: 'High pressure polyurethane foam injection station for door acoustic infill'
  },
];

export default function GalleryClient() {
  const [selectedCat, setSelectedCat] = useState('All');
  const [lightboxImg, setLightboxImg] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Fire Rated Doors', 'Shaft & Duct Doors', 'Cleanroom Doors', 'Architectural Doors', 'Automation', 'Manufacturing'];

  const filtered = selectedCat === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCat);

  return (
    <div className="w-full">
      {/* Banner */}
      <section className="bg-[#00381f] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <img src="/images/banner.jpg" alt="Anjali Doors project portfolio" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e5a832] bg-[#e5a832]/20 px-3.5 py-1.5 rounded-full inline-block">
              VERIFIED PROJECT PORTFOLIO &amp; INSTALLATIONS
            </span>
            <h1
              style={{ color: '#ffffff' }}
              className="text-3xl sm:text-5xl font-black text-white !text-white mt-4 mb-4 leading-tight drop-shadow-md"
            >
              Product &amp; Project Gallery
            </h1>
            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
              Explore verified on-site installations, specialized cleanroom architectures, certified fire exits, and state-of-the-art manufacturing lines by Anjali Doors PVT. LTD.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                style={selectedCat === cat ? { color: '#ffffff' } : {}}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition touch-manipulation cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-[#00381f] text-white !text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImg(item)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#00381f]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                    <ZoomIn className="w-8 h-8 text-[#e5a832]" />
                  </div>
                  <div className="absolute top-3 left-3 bg-[#00381f] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    {item.category}
                  </div>
                </div>
                <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                  <h3 className="font-bold text-gray-900 text-sm group-hover:text-[#00381f] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[11px] text-gray-500 mt-1 block">Click to enlarge photo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 touch-manipulation"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="bg-[#00381f] text-white px-6 py-3 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-base text-white">{lightboxImg.title}</h4>
                <p className="text-xs text-[#e5a832]">{lightboxImg.category}</p>
              </div>
              <button
                onClick={() => setLightboxImg(null)}
                className="text-white hover:text-[#e5a832] p-1 rounded-lg hover:bg-white/10 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 flex items-center justify-center bg-gray-950">
              <img
                src={lightboxImg.image}
                alt={lightboxImg.alt}
                className="max-h-[70vh] max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
