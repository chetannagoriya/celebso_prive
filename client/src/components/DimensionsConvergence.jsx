import React from 'react';
import { ArrowRight, Compass, Shield, Award, Castle, Feather } from 'lucide-react';
import equestrianImg from '../assets/equestrian-tradition.jpg';
import royalHospitalityImg from '../assets/royal-hospitality.jpg';

export const DimensionsConvergence = ({ onOpenProcess }) => {
  const dimensions = [
    {
      title: 'EQUESTRIAN TRADITION',
      subtitle: 'Royal Polo & Heritage Stables',
      image: equestrianImg || '/equestrian-tradition.jpg',
      icon: Award,
    },
    {
      title: 'ROYAL HOSPITALITY',
      subtitle: 'Imperial Custodian Service',
      image: royalHospitalityImg || '/royal-hospitality.jpg',
      icon: Castle,
    },
    {
      title: 'BESPOKE CRAFTSMANSHIP',
      subtitle: 'Archival Ateliers & Horology',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
      icon: Feather,
    },
    {
      title: 'TIMELESS ARCHITECTURE',
      subtitle: 'Sovereign Palaces & Bastions',
      image: 'https://images.unsplash.com/photo-1599837565318-67429bde7162?auto=format&fit=crop&w=600&q=80',
      icon: Compass,
    },
    {
      title: 'SOVEREIGN STEWARDSHIP',
      subtitle: 'Multi-Generational Alliances',
      image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=600&q=80',
      icon: Shield,
    },
  ];

  return (
    <section className="relative py-24 bg-[#0A0A0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column Description & Specs */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[1px] bg-gold"></span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-gold font-semibold">
                Curated Disciplines
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
              DIMENSIONS OF <br />
              <span className="gold-gradient-text italic">CONVERGENCE</span>
            </h3>

            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              Every detail of Celebso Privé is considered, from bespoke logistics to archival documentation and sovereign security.
            </p>

            {/* Spec list */}
            <div className="pt-2 space-y-3 border-y border-white/10 py-5 text-[11px] uppercase tracking-wider text-zinc-300">
              <div className="flex justify-between">
                <span className="text-zinc-500">ATTENDEES:</span>
                <span className="text-gold font-medium">BY INVITATION ONLY</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">FORMAT:</span>
                <span className="text-white">RETREAT & SALON</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">SECURITY:</span>
                <span className="text-white">DISCRETE PROTOCOL</span>
              </div>
            </div>

            <button
              onClick={onOpenProcess}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold hover:text-gold-light transition-colors group"
            >
              <span>View Protocol Details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right 5 Vertical Cards Grid */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
            {dimensions.map((dim, idx) => {
              const Icon = dim.icon;
              return (
                <div
                  key={idx}
                  className="group relative h-80 rounded-none overflow-hidden border border-white/10 hover:border-gold/60 transition-all duration-500 flex flex-col justify-end p-4"
                >
                  {/* Background Image */}
                  <img
                    src={dim.image}
                    alt={dim.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:opacity-90 transition-opacity"></div>

                  {/* Icon badge */}
                  <div className="relative z-10 w-7 h-7 rounded-full bg-black/60 border border-gold/40 flex items-center justify-center text-gold mb-3 group-hover:border-gold transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  {/* Title and subtitle */}
                  <div className="relative z-10">
                    <h5 className="font-serif text-xs font-semibold text-white tracking-wider leading-snug group-hover:text-gold-light transition-colors">
                      {dim.title}
                    </h5>
                    <p className="text-[10px] text-zinc-400 font-light mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {dim.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DimensionsConvergence;
