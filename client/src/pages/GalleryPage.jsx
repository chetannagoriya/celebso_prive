import React, { useState } from 'react';
import { Camera, Sparkles, X, ArrowRight } from 'lucide-react';

import gallery1 from '../assets/gallery/gallery-1.jpg';
import gallery2 from '../assets/gallery/gallery-2.jpg';
import gallery3 from '../assets/gallery/gallery-3.jpg';
import gallery4 from '../assets/gallery/gallery-4.jpg';
import gallery5 from '../assets/gallery/gallery-5.jpg';
import gallery6 from '../assets/gallery/gallery-6.jpg';
import gallery7 from '../assets/gallery/gallery-7.jpg';
import gallery8 from '../assets/gallery/gallery-8.jpg';
import gallery9 from '../assets/gallery/gallery-9.jpg';
import gallery10 from '../assets/gallery/gallery-10.jpg';
import gallery11 from '../assets/gallery/gallery-11.jpg';
import gallery12 from '../assets/gallery/gallery-12.jpg';

export const GalleryPage = ({ onNavigate, onRequestInvitation }) => {
  const [activePhoto, setActivePhoto] = useState(null);

  const galleryItems = [
    { id: 1, image: gallery1 },
    { id: 2, image: gallery2 },
    { id: 3, image: gallery3 },
    { id: 4, image: gallery4 },
    { id: 5, image: gallery5 },
    { id: 6, image: gallery6 },
    { id: 7, image: gallery7 },
    { id: 8, image: gallery8 },
    { id: 9, image: gallery9 },
    { id: 10, image: gallery10 },
    { id: 11, image: gallery11 },
    { id: 12, image: gallery12 },
  ];

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Top Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 border border-gold/30 bg-gold/5 text-gold text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-mono">
          <Camera className="w-3.5 h-3.5" />
          <span>The Sovereign Chronicle</span>
        </div>

        <h1 className="font-serif text-2xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
          Visual <span className="gold-gradient-text italic font-normal">Gallery & Archives</span>
        </h1>

        <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
          An intimate glimpse into curated gatherings, sovereign sanctuaries, and the meaningful connections forged across the Celebso Privé circle.
        </p>

        <div className="flex items-center justify-center gap-3 pt-2">
          <div className="w-12 sm:w-16 h-[1px] bg-gold/40"></div>
          <span className="text-gold text-xs">◇</span>
          <div className="w-12 sm:w-16 h-[1px] bg-gold/40"></div>
        </div>
      </div>

      {/* Clean Grid Gallery — Pure Images Without Text Overlay */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActivePhoto(item)}
            className="group relative aspect-[4/5] overflow-hidden border border-white/10 hover:border-gold/50 cursor-pointer transition-all duration-500 bg-[#0E0E12] shadow-2xl"
          >
            {/* Background Image with Smooth Zoom */}
            <img
              src={item.image}
              alt={`Celebso Privé Gallery ${item.id}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Clean Lightbox Modal — Pure Image View */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-transparent border border-gold/40 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 border border-gold/50 text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo without text */}
            <div className="relative max-h-[85vh] flex items-center justify-center bg-black">
              <img
                src={activePhoto.image}
                alt="Celebso Privé Gallery View"
                className="w-auto h-auto max-h-[85vh] max-w-full object-contain"
              />
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
