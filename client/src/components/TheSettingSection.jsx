import React from 'react';
import settingFoundersFrame from '../assets/setting-founders-frame.jpg';
import settingMixerImg from '../assets/setting-curated-mixer.jpg';
import settingToastImg from '../assets/setting-imperial-toast.jpg';

export const TheSettingSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#070709] border-t border-white/5 overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-end mb-12 lg:mb-16">
          <div>
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mb-7"></div>
            <p className="text-gold text-[11px] tracking-[0.45em] uppercase font-sans mb-5 font-medium">
              The Setting
            </p>
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] font-light text-white leading-[0.96] tracking-tight">
              Designed for <br />
              <span className="italic text-gold font-normal">consequence.</span>
            </h2>
          </div>

          <p className="font-sans text-base sm:text-lg text-white/50 leading-[1.85] max-w-xl lg:pb-4 font-light">
            Celebso Privé is a private series of celebrations hosted within one of the country's most exclusive settings. An evening of light entertainment, great company and fantastic ambiance — honoring the catalysts shaping India's future.
          </p>
        </div>

        {/* Cinematic Image Grid: 1 large on left + 2 stacked on right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-5 mb-8">
          {/* Big Featured Frame: Height matching right column on lg */}
          <div className="relative overflow-hidden aspect-[16/10] lg:aspect-auto lg:h-full bg-black/60 border border-white/10 shadow-2xl group">
            <img
              src={settingFoundersFrame || '/setting-founders-frame.jpg'}
              alt="Celebso Privé Founders Evening Stage Backdrop"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none"></div>
            <div className="absolute bottom-5 left-6 pointer-events-none">
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold/90">
                Founders Evening · Celebso Privé
              </span>
            </div>
          </div>

          {/* Right Column Stacked Frames */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            <div className="relative overflow-hidden aspect-[4/3] bg-black/60 border border-white/10 shadow-2xl group">
              <img
                src={settingMixerImg || '/setting-curated-mixer.jpg'}
                alt="Guest mixer and conversation"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none"></div>
              <div className="absolute bottom-4 left-5 pointer-events-none">
                <span className="text-[9px] uppercase font-mono tracking-[0.22em] text-white/80">
                  Curated Discourse & Mixer
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden aspect-[4/3] bg-black/60 border border-white/10 shadow-2xl group">
              <img
                src={settingToastImg || '/setting-imperial-toast.jpg'}
                alt="Evening toast and celebration"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none"></div>
              <div className="absolute bottom-4 left-5 pointer-events-none">
                <span className="text-[9px] uppercase font-mono tracking-[0.22em] text-white/80">
                  Imperial Toast & Conclave
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Luxury Numbered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 01 */}
          <div className="p-8 sm:p-10 border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-gold/40 transition-all duration-500 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <p className="relative z-10 text-gold/60 text-[11px] tracking-[0.35em] uppercase font-mono mb-6">
              01
            </p>
            <h3 className="relative z-10 font-serif text-2xl sm:text-3xl text-white/90 mb-4 group-hover:text-gold transition-colors duration-300">
              The Address
            </h3>
            <p className="relative z-10 font-sans text-sm text-white/45 leading-relaxed font-light">
              DLF Camellias sets an unmistakable tone: private, rare, composed and quietly powerful.
            </p>
          </div>

          {/* Card 02 */}
          <div className="p-8 sm:p-10 border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-gold/40 transition-all duration-500 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <p className="relative z-10 text-gold/60 text-[11px] tracking-[0.35em] uppercase font-mono mb-6">
              02
            </p>
            <h3 className="relative z-10 font-serif text-2xl sm:text-3xl text-white/90 mb-4 group-hover:text-gold transition-colors duration-300">
              The Room
            </h3>
            <p className="relative z-10 font-sans text-sm text-white/45 leading-relaxed font-light">
              Founders, investors, family office principals, business leaders and operators — each chosen for their contribution to the evening.
            </p>
          </div>

          {/* Card 03 */}
          <div className="p-8 sm:p-10 border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-gold/40 transition-all duration-500 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <p className="relative z-10 text-gold/60 text-[11px] tracking-[0.35em] uppercase font-mono mb-6">
              03
            </p>
            <h3 className="relative z-10 font-serif text-2xl sm:text-3xl text-white/90 mb-4 group-hover:text-gold transition-colors duration-300">
              The Evening
            </h3>
            <p className="relative z-10 font-sans text-sm text-white/45 leading-relaxed font-light">
              An evening of celebration, light entertainment and peer connection in an elegant setting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSettingSection;
