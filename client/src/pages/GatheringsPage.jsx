import React, { useState } from 'react';
import { Calendar, MapPin, Users, Shield, ArrowRight, Lock, Clock, Sparkles } from 'lucide-react';

export const GatheringsPage = ({ onNavigate, onRequestInvitation }) => {
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const gatherings = [
    {
      id: 'amber-fort',
      title: 'The Amber Fort Sovereign Conclave',
      chapter: 'JAIPUR, INDIA',
      location: 'Amber Palace & Private Heritage Chambers',
      date: 'December 18–20, 2026',
      status: 'Advisory Vetting Active',
      statusColor: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
      seats: 'Strict 30 Cap (18 Confirmed)',
      theme: 'Generational Sovereignty, Sovereign Capital Flows & Royal Heritage',
      description: 'An intimate 3-day convergence set inside a 400-year-old fort. Royal private escort, candlelit courtyards, unfiltered macro allocations, and midnight fireside salons.',
      isFlagship: true,
      itineraryHighlights: ['Torchlit Courtyard Arrival', 'The Sovereign Round (Liquidity & AI)', '7-Course Royal Repast', 'Midnight Terrace Salons'],
    },
    {
      id: 'dubai-citadel',
      title: 'The Emirates Sovereign Citadel',
      chapter: 'DUBAI & ABU DHABI',
      location: 'Private Sky Pavilion & Sovereign Island',
      date: 'February 22–24, 2027',
      status: 'Nominations Open',
      statusColor: 'text-gold border-gold/30 bg-gold/10',
      seats: 'Strict 24 Cap',
      theme: 'Sovereign AI Infrastructure, Cross-Border Capital & Desert Sanctuaries',
      description: 'High-level dialogue between GCC sovereign wealth principals, global AI titans, and legacy European family offices overlooking the Arabian Gulf.',
      isFlagship: false,
      itineraryHighlights: ['Private Sky Suite Reception', 'Frontier Compute & Energy Round', 'Desert Dune Starlight Majlis'],
    },
    {
      id: 'mayfair-assembly',
      title: 'The Mayfair Private Assembly',
      chapter: 'LONDON, UK',
      location: 'Historic Berkeley Square Private Chambers',
      date: 'April 14–16, 2027',
      status: 'Curated Roster Forming',
      statusColor: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
      seats: 'Strict 28 Cap',
      theme: 'Global Macro Rotations, Private Vaults & Dynastic Succession',
      description: 'Behind closed mahogany doors in Mayfair, senior allocators and dynastic heirs unpack geopolitical realignment, gold vaults, and offshore structuring.',
      isFlagship: false,
      itineraryHighlights: ['Curated Single Malt Tasting', 'Closed-Door Geopolitical Briefing', 'Candlelit Library Dinner'],
    },
    {
      id: 'alpine-retreat',
      title: 'The Alpine Sovereign Retreat',
      chapter: 'ST. MORITZ / ZURICH, SWITZERLAND',
      location: 'Private Engadin Mountain Sanctuary',
      date: 'June 25–28, 2027',
      status: 'Advance Inquiries',
      statusColor: 'text-purple-400 border-purple-400/30 bg-purple-400/10',
      seats: 'Strict 20 Cap',
      theme: 'Deep Tech, Cryptographic Sovereignty & Alpine Seclusion',
      description: 'High-altitude seclusion for principals shaping the future of autonomous systems, privacy computing, and long-horizon multi-century trusts.',
      isFlagship: false,
      itineraryHighlights: ['Helicopter Glacier Ingress', 'Fireside Deep Tech Conclave', 'Private Cellar Philosophy Salon'],
    },
    {
      id: 'pearl-dialogue',
      title: 'The Pearl Sovereign Dialogue',
      chapter: 'DOHA, QATAR',
      location: 'Private Coastal Palace',
      date: 'November 12–14, 2027',
      status: 'Advisory Review',
      statusColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
      seats: 'Strict 26 Cap',
      theme: 'Sovereign Wealth Synergy, Rare Artifacts & Cross-Continental Corridors',
      description: 'An elite round table exploring sovereign fund alliances between the Middle East, India, and the Western Hemisphere, coupled with private Islamic art collections.',
      isFlagship: false,
      itineraryHighlights: ['Private Yacht Arrival', 'Sovereign Fund Co-Investment Round', 'Moonlit Coastal Banqueting'],
    },
  ];

  const chapters = ['ALL', 'JAIPUR', 'DUBAI & ABU DHABI', 'LONDON', 'ST. MORITZ / ZURICH', 'DOHA'];

  const filteredGatherings = selectedFilter === 'ALL'
    ? gatherings
    : gatherings.filter((g) => g.chapter.includes(selectedFilter));

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 bg-gold/5 text-gold text-[10px] tracking-[0.3em] uppercase">
          <Sparkles className="w-3 h-3 text-gold" />
          <span>Curated Conclaves · Restricted Attendance</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-wide">
          Private <span className="gold-metallic-text italic">Gatherings</span>
        </h1>
        <p className="font-serif text-base sm:text-lg text-zinc-300 italic font-light max-w-2xl mx-auto">
          “Strictly capped at thirty principals. No cameras, no stages, and no transactional noise — only candid dialogue in timeless sanctums.”
        </p>
      </div>

      {/* Chapter Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
        {chapters.map((ch) => (
          <button
            key={ch}
            onClick={() => setSelectedFilter(ch)}
            className={`px-4 py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] transition-all duration-300 border ${
              selectedFilter === ch
                ? 'border-gold bg-gold text-black font-semibold shadow-gold-subtle'
                : 'border-white/10 bg-brand-card/50 text-zinc-400 hover:border-gold/40 hover:text-white'
            }`}
          >
            {ch}
          </button>
        ))}
      </div>

      {/* Gatherings List */}
      <div className="space-y-8">
        {filteredGatherings.map((gathering) => (
          <div
            key={gathering.id}
            className={`relative rounded-none border transition-all duration-500 overflow-hidden ${
              gathering.isFlagship
                ? 'border-gold/60 bg-gradient-to-r from-brand-card via-[#16161C] to-brand-card shadow-gold-glow'
                : 'border-white/10 bg-brand-card/60 hover:border-gold/30'
            }`}
          >
            {gathering.isFlagship && (
              <div className="absolute top-0 right-0 bg-gold text-black text-[9px] uppercase tracking-[0.25em] font-semibold px-4 py-1">
                Flagship Conclave
              </div>
            )}

            <div className="p-8 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Info */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`px-2.5 py-0.5 border text-[10px] uppercase tracking-[0.2em] font-mono ${gathering.statusColor}`}>
                      {gathering.status}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-zinc-400 tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      {gathering.chapter}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-zinc-400 tracking-wider">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      {gathering.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gold/90 tracking-wider">
                      <Users className="w-3.5 h-3.5 text-gold" />
                      {gathering.seats}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                    {gathering.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {gathering.description}
                  </p>

                  <div className="pt-2">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-gold/80 mb-2 font-medium">
                      Curated Salons & Itinerary Pillars:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {gathering.itineraryHighlights.map((hi, i) => (
                        <span
                          key={i}
                          className="text-[11px] tracking-wider px-3 py-1 bg-black/40 border border-white/5 text-zinc-300"
                        >
                          {hi}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Action Box */}
                <div className="lg:col-span-4 flex flex-col gap-3 lg:border-l lg:border-white/10 lg:pl-8">
                  <div className="p-4 bg-black/40 border border-white/5 space-y-2 mb-2">
                    <div className="flex items-center gap-2 text-gold text-xs tracking-widest uppercase">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Security & Protocol</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 font-light leading-relaxed">
                      Chatham House Rule codified. Private biometric badges and strict non-disclosure protocol prior to dispatch.
                    </p>
                  </div>

                  {gathering.isFlagship ? (
                    <button
                      onClick={() => onNavigate('gathering-detail')}
                      className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-black py-3 px-5 text-xs uppercase tracking-[0.22em] font-semibold transition-colors"
                    >
                      <span>Explore Gathering Detail</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => onNavigate('gathering-detail')}
                      className="w-full flex items-center justify-center gap-2 border border-gold/60 hover:border-gold text-gold hover:bg-gold hover:text-black py-3 px-5 text-xs uppercase tracking-[0.22em] font-medium transition-all"
                    >
                      <span>View Salon Schedule</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <button
                    onClick={onRequestInvitation}
                    className="w-full py-2.5 text-center text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-gold border border-white/10 hover:border-gold/30 transition-colors"
                  >
                    Petition To Attend
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Protocol Banner */}
      <div className="mt-16 p-8 border border-gold/20 bg-gradient-to-r from-black via-brand-card to-black flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-gold text-xs uppercase tracking-[0.25em]">
            <Lock className="w-4 h-4" />
            <span>Curatorial Sovereignty</span>
          </div>
          <p className="font-serif text-sm text-zinc-300 italic max-w-xl">
            Are you seeking to convene a bespoke private salon in your sovereign territory or ancestral estate?
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-black text-xs uppercase tracking-[0.22em] font-medium transition-colors whitespace-nowrap"
        >
          Dispatch Host Inquiry
        </button>
      </div>
    </div>
  );
};

export default GatheringsPage;
