import React from 'react';
import { Key, Clock, Landmark, ShieldCheck, Compass } from 'lucide-react';

export const StatsBar = () => {
  const stats = [
    {
      icon: Key,
      primary: '40',
      secondary: 'SEATS ONLY',
    },
    {
      icon: Clock,
      primary: '4+ HOURS',
      secondary: 'DEEP ENGAGEMENT',
    },
    {
      icon: Landmark,
      primary: 'HERITAGE VENUE',
      secondary: 'PALACE AMBIENCE',
    },
    {
      icon: ShieldCheck,
      primary: '100%',
      secondary: 'DISCRETE & PRIVATE',
    },
    {
      icon: Compass,
      primary: 'GLOBAL NETWORK',
      secondary: 'SELECT ALUMNI',
    },
  ];

  return (
    <section className="relative bg-[#08080A] border-y border-gold/15 py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Headline */}
          <div className="lg:col-span-4 space-y-2 border-l-2 border-gold/60 pl-5">
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight tracking-wide">
              NOT ANOTHER <br />
              <span className="text-gold italic">NETWORKING EVENT.</span>
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              Curated for those whose presence cannot be bought, only invited.
            </p>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-4 items-center">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-3 sm:p-2 rounded group transition-all duration-300 hover:bg-white/[0.02]"
                >
                  <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-3 group-hover:border-gold group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-4 h-4 text-gold stroke-[1.5]" />
                  </div>
                  <span className="font-serif text-sm sm:text-base font-semibold text-white tracking-wider">
                    {item.primary}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 mt-1 font-medium">
                    {item.secondary}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
