import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import heroPalaceImg from '../assets/hero-palace.jpg';

export const Hero = ({ onRequestInvitation, onExploreSalons }) => {
  return (
    <section className="relative min-h-[96vh] flex items-center justify-start overflow-hidden pt-28 pb-20">
      {/* Opulent Royal Palace Dusk/Night Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroPalaceImg || '/hero-palace.jpg'}
          alt="Royal Palace illuminated at twilight with grand sovereign courtyard gathering"
          className="w-full h-full object-cover object-center scale-105 transform duration-1000 ease-out"
        />
        {/* Layered luxury gradient masks: ensures high typography contrast on left while keeping palace facade visible on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-[#0A0A0C]/75 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0A0A0C]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-7">
          {/* Eyebrow / Subtitle */}
          <div className="inline-flex items-center gap-2.5">
            <span className="w-6 h-[1px] bg-gold"></span>
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-gold">
              Private Inaugural Gathering
            </span>
            <span className="w-6 h-[1px] bg-gold"></span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-white tracking-tight">
            THE RIGHT ROOM <br />
            <span className="gold-gradient-text italic font-normal">
              CHANGES EVERYTHING.
            </span>
          </h1>

          {/* Body Paragraph */}
          <p className="text-zinc-200 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl drop-shadow-sm">
            Where sovereign capital, timeless heritage, and discrete fellowship converge beyond the public gaze.
          </p>

          {/* Date & Location Pill */}
          <div className="pt-1">
            <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-gold font-medium">
              JAIPUR · NOVEMBER 14–16, 2025
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <button
              onClick={onRequestInvitation}
              className="bg-gold hover:bg-gold-light text-[#0A0A0C] px-8 py-3.5 text-xs uppercase tracking-[0.24em] font-semibold transition-all duration-300 shadow-gold-glow text-center hover:scale-[1.02] active:scale-[0.98]"
            >
              Request Invitation
            </button>
            <button
              onClick={onExploreSalons}
              className="border border-gold/40 hover:border-gold text-zinc-200 hover:text-gold px-7 py-3.5 text-xs uppercase tracking-[0.24em] font-medium transition-all duration-300 backdrop-blur-sm bg-black/40 text-center"
            >
              Explore The Salon
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

      {/* Royal Sanctuary Badge (Bottom Right) */}
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2 z-10 text-zinc-400/80 text-[10px] tracking-widest uppercase font-mono bg-black/40 px-3 py-1.5 border border-white/5 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
        <span>The Sovereign Palace Sanctuary</span>
      </div>
    </section>
  );
};

export default Hero;
