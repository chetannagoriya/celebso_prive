import React from 'react';
import { Users, ArrowRight } from 'lucide-react';
import guest1 from '../assets/guests/guest-1.jpg';
import guest2 from '../assets/guests/guest-2.jpg';
import guest3 from '../assets/guests/guest-3.jpg';
import guest4 from '../assets/guests/guest-4.jpg';
import guest5 from '../assets/guests/guest-5.jpg';
import guest6 from '../assets/guests/guest-6.jpg';
import guest7 from '../assets/guests/guest-7.jpg';
import guest8 from '../assets/guests/guest-8.jpg';
import guest9 from '../assets/guests/guest-9.jpg';
import guest10 from '../assets/guests/guest-10.jpg';
import guest11 from '../assets/guests/guest-11.jpg';
import guest12 from '../assets/guests/guest-12.jpg';

export const PastGuestsPage = ({ onNavigate, onRequestInvitation }) => {
  const guests = [
    { name: 'Amit Singal', org: 'Fluid Ventures', image: guest1 },
    { name: 'Sumit Srivastava', org: 'Startup Chaupal', image: guest2 },
    { name: 'Mr. Pankaj', org: 'Organic Funding', image: guest3 },
    { name: 'Vivek Chadha', org: 'AccelerateX', image: guest4 },
    { name: 'Mr. Radhesh', org: 'Shark Tank India', image: guest5 },
    { name: 'Mr. Rakesh', org: 'iStart', image: guest6 },
    { name: 'Mr. Shalabh', org: 'Marwari Catalysts', image: guest7 },
    { name: 'Mr. Jamil', org: 'iStart', image: guest8 },
    { name: 'Veer Singh', org: 'IDFC Bank', image: guest9 },
    { name: 'Avni Srivastava', org: 'Hackingly', image: guest10 },
    { name: 'Mr. Rajesh', org: 'Angel Investor', image: guest11 },
    { name: 'Mr. Sanju Sachdev', org: 'Organic Funding', image: guest12 },
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Top Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-gold/30 bg-gold/5 text-gold text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-medium">
          <Users className="w-3.5 h-3.5" />
          <span>The People Behind The Gatherings</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
          Past Guests & <span className="gold-gradient-text italic font-normal">Ecosystem Leaders</span>
        </h1>

        <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
          Founders, investors and ecosystem leaders who have joined the Celebso circle.
        </p>

        {/* Ornament Divider */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <div className="w-16 h-[1px] bg-gold/40"></div>
          <span className="text-gold text-xs">◇</span>
          <div className="w-16 h-[1px] bg-gold/40"></div>
        </div>

        {/* Counter & Category Pill */}
        <div className="flex items-center justify-center gap-4 text-xs pt-1">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-xl sm:text-2xl text-gold font-normal">12</span>
            <span className="text-[10px] tracking-widest uppercase text-zinc-400 font-mono">PROFILES</span>
          </div>
          <span className="text-zinc-700">|</span>
          <span className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-zinc-300 font-mono">
            FOUNDERS · INVESTORS · INDUSTRY LEADERS
          </span>
        </div>
      </div>

      {/* 12 Profile Cards Grid (2 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto mb-16">
        {guests.map((guest, idx) => (
          <div
            key={idx}
            className="bg-[#101014] border border-white/5 hover:border-gold/40 transition-all duration-300 rounded-lg p-3 sm:p-4 flex items-center gap-4 sm:gap-5 group"
          >
            {/* Guest Portrait */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-md overflow-hidden flex-shrink-0 border border-white/10 group-hover:border-gold/40 transition-colors bg-black/40">
              <img
                src={guest.image}
                alt={guest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Guest Details */}
            <div className="flex-1 min-w-0">
              <h4 className="font-serif text-base sm:text-lg text-white font-normal truncate group-hover:text-gold-light transition-colors">
                {guest.name}
              </h4>
              <div className="w-6 h-[1.5px] bg-gold/70 my-2"></div>
              <p className="text-xs sm:text-sm text-zinc-400 font-light truncate">
                {guest.org}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Box */}
      <div className="mt-16 p-8 sm:p-10 border border-gold/20 bg-[#101014] rounded-lg text-center space-y-4 max-w-5xl mx-auto">
        <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
          Every Gathering Creates New Connections
        </h3>
        <div className="flex items-center justify-center gap-3 py-1">
          <div className="w-12 h-[1px] bg-gold/40"></div>
          <span className="text-gold text-xs">◇</span>
          <div className="w-12 h-[1px] bg-gold/40"></div>
        </div>
        <p className="text-zinc-400 text-xs sm:text-sm font-light">
          A private circle for meaningful conversations and enduring relationships.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('gatherings')}
            className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#d6b066] text-[#0A0A0C] px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-gold-glow hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>EXPLORE UPCOMING GATHERINGS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PastGuestsPage;
