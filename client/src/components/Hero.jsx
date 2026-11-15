import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroStageBackdrop from '../assets/hero-stage-backdrop.jpg';

export const Hero = ({ onRequestInvitation }) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-[92vh] flex items-center justify-start overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-20 bg-[#0A0A0C]">
      {/* Background: Exact stage backdrop composition from uploaded stage photo */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroStageBackdrop || '/hero-stage-backdrop.jpg'}
          alt="Celebso Privé Founders Evening Stage Backdrop"
          className="w-full h-full object-cover object-[right_20%] md:object-[right_25%] lg:object-[right_top]"
          style={{
            imageRendering: '-webkit-optimize-contrast',
            filter: 'contrast(1.04) brightness(1.0)',
          }}
        />

        {/* Responsive gradient overlay: Ensures 100% readability on left while keeping stage & text crystal clear on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/90 via-35% md:via-42% to-transparent pointer-events-none hidden md:block"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#0A0A0C]/85 to-[#0A0A0C]/50 md:hidden pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent via-12% to-transparent pointer-events-none"></div>
      </div>

      {/* Main Content Area: Left-aligned typography exactly matching mockup */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-5 sm:space-y-7">
          {/* Eyebrow */}
          <div className="inline-block">
            <p className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.24em] sm:tracking-[0.26em] uppercase text-[#C5A880] drop-shadow-sm">
              THE CELEBSO PRIVÉ NETWORK
            </p>
          </div>

          {/* Main Headline (All caps, classic serif, 2 lines with periods) */}
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-normal leading-[1.16] text-white tracking-wide drop-shadow-md">
            THE RIGHT ROOM. <br />
            CHANGES EVERYTHING.
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-lg lg:max-w-xl pt-1 drop-shadow-sm">
            An exclusive network of founders, investors and business leaders building trusted relationships, strategic conversations and meaningful opportunities.
          </p>

          {/* Action Button: Pill-shaped golden outline button matching mockup */}
          <div className="pt-2 sm:pt-4">
            <button
              onClick={onRequestInvitation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 rounded-full border border-[#C5A880]/80 hover:border-gold text-[#E5C378] hover:text-white bg-black/50 hover:bg-gold/10 text-xs sm:text-[13px] uppercase tracking-[0.22em] font-medium transition-all duration-300 shadow-sm hover:shadow-gold-subtle group text-center"
            >
              <span>REQUEST AN INVITATION</span>
              <ArrowRight className="w-4 h-4 text-[#E5C378] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
