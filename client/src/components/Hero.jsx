import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import heroGatheringImg from '../assets/hero-gatherings.jpg';

export const Hero = ({ onRequestInvitation, onExploreSalons }) => {
  return (
    <section className="relative min-h-[96vh] flex items-center justify-start overflow-hidden pt-28 pb-20">
      {/* High-Resolution Curated Gathering Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroGatheringImg || '/hero-gatherings.jpg'}
          alt="Celebso Privé founders, investors and business leaders gathering"
          className="w-full h-full object-cover object-[70%_center] md:object-[75%_center]"
          style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.04) brightness(0.98)' }}
        />
        {/* Refined gradient mask: Deep contrast on left for typography, crystal clarity on right for the gathering */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/85 via-40% to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent via-20% to-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-7">
          {/* Eyebrow / Subtitle */}
          <div className="inline-flex items-center gap-2.5">
            <span className="w-6 h-[1px] bg-gold"></span>
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-gold">
              The Celebso Privé Network
            </span>
            <span className="w-6 h-[1px] bg-gold"></span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-white tracking-tight drop-shadow-lg">
            THE RIGHT ROOM <br />
            <span className="gold-gradient-text italic font-normal">
              CHANGES EVERYTHING.
            </span>
          </h1>

          {/* Body Paragraph */}
          <p className="text-zinc-200 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl drop-shadow-md">
            An interconnected community of founders, investors, and business leaders building trusted relationships, strategic conversations, and long-term opportunities across India's entrepreneurial ecosystem.
          </p>

          {/* Pillars / Format Pill */}
          <div className="pt-1">
            <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-gold font-medium drop-shadow-sm">
              FOUNDERS' CIRCLES · INVESTOR ROUNDTABLES · PRIVATE GATHERINGS
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <button
              onClick={onRequestInvitation}
              className="bg-gold hover:bg-gold-light text-[#0A0A0C] px-8 py-3.5 text-xs uppercase tracking-[0.24em] font-semibold transition-all duration-300 shadow-gold-glow text-center hover:scale-[1.02] active:scale-[0.98]"
            >
              Request An Invitation
            </button>
            <button
              onClick={onExploreSalons}
              className="border border-gold/50 hover:border-gold text-zinc-100 hover:text-gold px-7 py-3.5 text-xs uppercase tracking-[0.24em] font-medium transition-all duration-300 backdrop-blur-md bg-black/40 text-center"
            >
              Explore The Ecosystem
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-3 z-10 text-zinc-400">
        <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-400">
          Scroll to explore
        </span>
        <div className="w-8 h-[1px] bg-zinc-600"></div>
        <ChevronDown className="w-3.5 h-3.5 text-gold animate-bounce" />
      </div>

      {/* Brand Badge (Bottom Right) */}
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2 z-10 text-zinc-300 text-[10px] tracking-widest uppercase font-mono bg-black/60 px-3.5 py-1.5 border border-gold/30 backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
        <span>Building An Ecosystem, Not Just A Network</span>
      </div>
    </section>
  );
};

export default Hero;
