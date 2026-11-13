import React from 'react';
import { Calendar, MapPin, Shirt, Lock } from 'lucide-react';

export const TheEveningSection = () => {
  const details = [
    {
      icon: Calendar,
      label: 'Date',
      value: '22 November',
      sub: 'Private Evening',
    },
    {
      icon: MapPin,
      label: 'Venue',
      value: 'Novotel Hotel',
      sub: 'New Delhi',
    },
    {
      icon: Shirt,
      label: 'Dress Code',
      value: 'Gala Attire',
      sub: 'Elegant, Expressive',
    },
    {
      icon: Lock,
      label: 'Access',
      value: 'Curated Access',
      sub: 'By Invitation',
    },
  ];

  return (
    <section id="event-info" className="relative py-20 lg:py-24 bg-[#070709] border-t border-white/5 overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[320px] bg-gold/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mb-7"></div>
          <p className="text-gold text-[11px] tracking-[0.45em] uppercase font-sans mb-5 font-medium">
            Details
          </p>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] font-light text-white leading-tight tracking-tight">
            The Evening
          </h2>
        </div>

        {/* 4 Details Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {details.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-gold/40 transition-all duration-500 relative group overflow-hidden text-center flex flex-col items-center justify-between min-h-[220px]"
              >
                {/* Top Subtle Hover Accent */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10 inline-flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 mb-5 border border-white/10 text-white/40 group-hover:border-gold/40 group-hover:text-gold transition-all duration-500 rounded-sm">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
                </div>

                <div>
                  <p className="relative z-10 text-gold/60 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-mono mb-2 font-medium">
                    {item.label}
                  </p>
                  <h3 className="relative z-10 font-serif text-lg sm:text-2xl text-white/95 mb-1 font-light">
                    {item.value}
                  </h3>
                  <p className="relative z-10 font-sans text-[11px] sm:text-xs text-white/35 font-light">
                    {item.sub}
                  </p>
                </div>

                {/* Bottom Expansion Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold/40 group-hover:w-1/2 transition-all duration-700"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Gala Dress Code Note */}
        <p className="mt-10 text-center font-sans text-xs sm:text-sm text-white/40 leading-relaxed max-w-lg mx-auto font-light">
          Think elevated gala dressing — polished, expressive and colorful. Black is welcome, but not required.
        </p>
      </div>
    </section>
  );
};

export default TheEveningSection;
