import React, { useState } from 'react';
import { Camera, Sparkles, X, ZoomIn, ArrowRight, MapPin } from 'lucide-react';

import heroPalaceHd from '../assets/hero-palace-hd.jpg';
import heroGatherings from '../assets/hero-gatherings.jpg';
import theRoundtable from '../assets/the-roundtable.jpg';
import royalHospitality from '../assets/royal-hospitality.jpg';
import equestrianTradition from '../assets/equestrian-tradition.jpg';
import udaipurLakePalace from '../assets/udaipur-lake-palace.jpg';
import expAviation from '../assets/experiences/exp-aviation.jpg';
import expHorology from '../assets/experiences/exp-horology.jpg';
import expBanquet from '../assets/experiences/exp-banquet.jpg';
import expAlpine from '../assets/experiences/exp-alpine.jpg';
import rooftopGathering from '../assets/rooftop-gathering.jpg';
import cardBallroomHd from '../assets/card-ballroom-hd.jpg';

export const GalleryPage = ({ onNavigate, onRequestInvitation }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePhoto, setActivePhoto] = useState(null);

  const categories = [
    { id: 'all', label: 'All Chronicles' },
    { id: 'sanctuaries', label: 'Sanctuaries & Palaces' },
    { id: 'salons', label: 'Curated Salons' },
    { id: 'immersions', label: 'Bespoke Immersions' },
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Nocturnal Palace Soirée',
      category: 'sanctuaries',
      location: 'Umaid Bhawan Palace, Jodhpur',
      image: heroPalaceHd,
      desc: 'Historic courtyards illuminated by traditional torches and golden twilight for thirty sovereign fellows.',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      id: 2,
      title: 'Founders & Capital Circle',
      category: 'salons',
      location: 'Skyline Terrace, Mumbai',
      image: heroGatherings,
      desc: 'Founders, investors, and technology leaders in conversation over champagne.',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 3,
      title: 'The Non-Hierarchical Round',
      category: 'salons',
      location: 'The Room, Private Assembly',
      image: theRoundtable,
      desc: 'Chatham House discourse where titles give way to peer-level wisdom.',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 4,
      title: 'Coastal Twilight Repast',
      category: 'immersions',
      location: 'Private Sanctuary Beachfront',
      image: royalHospitality,
      desc: 'Open-air fireside dining under the stars with candlelit long-table geometry.',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 5,
      title: 'Equestrian Tradition & Polo',
      category: 'immersions',
      location: 'Royal Heritage Stables, Jaipur',
      image: equestrianTradition,
      desc: 'Private polo exhibition and heritage equestrian stewardship.',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 6,
      title: 'Island Palace Seclusion',
      category: 'sanctuaries',
      location: 'Taj Lake Palace, Udaipur',
      image: udaipurLakePalace,
      desc: 'Secluded water palace access restricted solely to approved attendees.',
      span: 'md:col-span-2 md:row-span-1',
    },
    {
      id: 7,
      title: 'Aviation Conduits & Tarmacs',
      category: 'immersions',
      location: 'Direct FBO Charter Conduits',
      image: expAviation,
      desc: 'Sleek Gulfstream long-range transit with private tarmac facilitation.',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 8,
      title: 'Haute Horology Atelier',
      category: 'immersions',
      location: 'Geneva Archival Vaults',
      image: expHorology,
      desc: 'Private handling of museum-grade tourbillon movements and grand complications.',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 9,
      title: 'Imperial State Banquet',
      category: 'salons',
      location: 'Diwan-e-Khas Chambers',
      image: expBanquet,
      desc: 'Seven-course gastronomic feats prepared by generational royal khansamas.',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 10,
      title: 'Winter Alpine Conclave',
      category: 'sanctuaries',
      location: 'Badrutt’s Palace, St. Moritz',
      image: expAlpine,
      desc: 'High-altitude thinking retreat amidst the Engadin snows and alpine calm.',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 11,
      title: 'Metropolitan Rooftop Salon',
      category: 'salons',
      location: 'Private Terrace, New Delhi',
      image: rooftopGathering,
      desc: 'Panoramic skyline discourse extending into midnight fireside conversations.',
      span: 'md:col-span-1 md:row-span-1',
    },
    {
      id: 12,
      title: 'Sovereign Ballroom Assembly',
      category: 'sanctuaries',
      location: 'Imperial Bastion, Jaipur',
      image: cardBallroomHd,
      desc: 'Crystal chandeliers and historic architecture welcoming leaders across India.',
      span: 'md:col-span-1 md:row-span-1',
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Top Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-gold/30 bg-gold/5 text-gold text-[10px] tracking-[0.3em] uppercase font-mono">
          <Camera className="w-3.5 h-3.5" />
          <span>The Sovereign Chronicle</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
          Visual <span className="gold-gradient-text italic font-normal">Gallery & Archives</span>
        </h1>

        <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
          An intimate glimpse into curated gatherings, sovereign palace sanctuaries, and the meaningful connections forged across the Celebso Privé circle.
        </p>

        <div className="flex items-center justify-center gap-3 pt-2">
          <div className="w-16 h-[1px] bg-gold/40"></div>
          <span className="text-gold text-xs">◇</span>
          <div className="w-16 h-[1px] bg-gold/40"></div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2 text-xs uppercase tracking-[0.2em] font-mono transition-all border ${
              activeCategory === cat.id
                ? 'border-gold bg-gold text-[#0A0A0C] font-semibold shadow-gold-glow'
                : 'border-white/10 hover:border-gold/40 text-zinc-400 hover:text-white bg-[#101014]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry / Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActivePhoto(item)}
            className="group relative h-72 rounded-none overflow-hidden border border-white/10 hover:border-gold/60 cursor-pointer transition-all duration-500 bg-[#0E0E12] flex flex-col justify-end p-5"
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>

            {/* Top Bar inside Card */}
            <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
              <span className="inline-flex items-center gap-1 text-[9px] font-mono uppercase tracking-widest text-gold bg-black/80 px-2.5 py-1 border border-gold/30 backdrop-blur-sm">
                <MapPin className="w-2.5 h-2.5 text-gold" />
                <span>{item.location}</span>
              </span>
              <div className="w-7 h-7 rounded-full bg-black/80 border border-gold/40 flex items-center justify-center text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Content Bottom */}
            <div className="relative z-10 space-y-1">
              <h4 className="font-serif text-base sm:text-lg text-white font-normal group-hover:text-gold-light transition-colors leading-snug">
                {item.title}
              </h4>
              <p className="text-[11px] text-zinc-300 font-light leading-relaxed line-clamp-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#101014] border border-gold/40 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/80 border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Photo */}
            <div className="relative max-h-[65vh] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full h-full object-contain max-h-[65vh]"
              />
            </div>

            {/* Caption */}
            <div className="p-6 sm:p-8 border-t border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-gold text-xs font-mono uppercase tracking-widest">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activePhoto.location}</span>
              </div>
              <h3 className="font-serif text-2xl text-white font-normal">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                {activePhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-20 p-8 sm:p-12 border border-gold/30 bg-gradient-to-r from-black via-[#111116] to-black text-center space-y-5">
        <Sparkles className="w-7 h-7 text-gold mx-auto" />
        <h3 className="font-serif text-2xl sm:text-4xl text-white font-normal">
          Experience The Sanctum In Person
        </h3>
        <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-xl mx-auto">
          Participation in Celebso Privé salons is by confidential invitation or principal recommendation only.
        </p>
        <div className="pt-2">
          <button
            onClick={onRequestInvitation}
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-[#0A0A0C] px-8 py-3.5 text-xs uppercase tracking-[0.24em] font-semibold transition-all shadow-gold-glow"
          >
            <span>Request An Invitation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
