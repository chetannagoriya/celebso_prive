import React from 'react';
import eveningImg from '../assets/people-night-to-remember.jpg';

export const ThePeopleSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#070709] border-t border-white/5 overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        {/* Top Split Grid: Header & Narrative + Featured Image */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center mb-12 lg:mb-16">
          <div>
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mb-7"></div>
            <p className="text-gold text-[11px] tracking-[0.45em] uppercase font-sans mb-5 font-medium">
              The People
            </p>
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] font-light text-white leading-[0.95] tracking-tight mb-7">
              A night to <br />
              <span className="italic text-gold font-normal">remember.</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-white/50 leading-[1.85] max-w-lg font-light">
              Industry peers coming together for an evening of celebration, light entertainment and meaningful connection in an unforgettable setting.
            </p>
          </div>

          <div className="relative overflow-hidden aspect-[5/4] bg-black/60 border border-white/10 shadow-2xl group">
            <img
              src={eveningImg || '/people-night-to-remember.jpg'}
              alt="An evening to remember at Celebso Privé"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none"></div>
            <div className="absolute bottom-5 left-6 pointer-events-none">
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold/90">
                Atmosphere & Peer Dialogue
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pillars / Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 01: Celebration */}
          <div className="p-8 sm:p-10 border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-gold/40 transition-all duration-500 relative group overflow-hidden">
            <div className="relative z-10 w-8 h-[1px] bg-gold/40 mb-8 group-hover:w-16 group-hover:bg-gold transition-all duration-700"></div>
            <h3 className="relative z-10 font-serif text-2xl sm:text-3xl text-white/90 mb-4 group-hover:text-gold transition-colors duration-300">
              Celebration
            </h3>
            <p className="relative z-10 font-sans text-sm text-white/45 leading-relaxed font-light">
              An evening honoring the catalysts shaping India's future with light entertainment and fantastic ambiance.
            </p>
          </div>

          {/* Card 02: Peer Connection */}
          <div className="p-8 sm:p-10 border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-gold/40 transition-all duration-500 relative group overflow-hidden">
            <div className="relative z-10 w-8 h-[1px] bg-gold/40 mb-8 group-hover:w-16 group-hover:bg-gold transition-all duration-700"></div>
            <h3 className="relative z-10 font-serif text-2xl sm:text-3xl text-white/90 mb-4 group-hover:text-gold transition-colors duration-300">
              Peer Connection
            </h3>
            <p className="relative z-10 font-sans text-sm text-white/45 leading-relaxed font-light">
              Industry peers coming together in an elegant setting to share perspectives and build relationships.
            </p>
          </div>

          {/* Card 03: Unforgettable Experience */}
          <div className="p-8 sm:p-10 border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-gold/40 transition-all duration-500 relative group overflow-hidden">
            <div className="relative z-10 w-8 h-[1px] bg-gold/40 mb-8 group-hover:w-16 group-hover:bg-gold transition-all duration-700"></div>
            <h3 className="relative z-10 font-serif text-2xl sm:text-3xl text-white/90 mb-4 group-hover:text-gold transition-colors duration-300">
              Unforgettable Experience
            </h3>
            <p className="relative z-10 font-sans text-sm text-white/45 leading-relaxed font-light">
              Every detail crafted to create a memorable night — from the setting and service to the flow of the evening.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThePeopleSection;
