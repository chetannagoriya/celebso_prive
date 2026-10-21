import React from 'react';

export const StatsBar = () => {
  return (
    <section className="relative py-24 sm:py-32 lg:py-36 bg-[#08080A] border-y border-white/5 overflow-hidden">
      {/* Subtle radial ambient warmth in background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.06)_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-7 sm:space-y-9">
        {/* Top Statement: Pure Elegant White Serif */}
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal text-white/95 leading-[1.28] tracking-wide max-w-4xl mx-auto drop-shadow-sm">
          The most meaningful connections happen in <br className="hidden sm:inline" />
          the right room.
        </h2>

        {/* Center Golden Accent Line */}
        <div className="flex items-center justify-center pt-1 pb-1">
          <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"></div>
        </div>

        {/* Bottom Statement: Italic Warm Gold Serif */}
        <p className="font-serif italic text-xl sm:text-3xl md:text-4xl lg:text-[42px] font-light text-[#C9A86E] leading-[1.32] tracking-wide max-w-4xl mx-auto drop-shadow-sm">
          When the right people come together, remarkable <br className="hidden sm:inline" />
          things emerge.
        </p>
      </div>
    </section>
  );
};

export default StatsBar;
