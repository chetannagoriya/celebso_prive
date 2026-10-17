import React, { useState } from 'react';
import { MapPin, Clock, ArrowRight, ChevronDown, Sparkles, Shield, Users, Check } from 'lucide-react';
import heroLakesideHd from '../assets/hero-lakeside-hd.jpg';
import { allGatherings } from '../data/gatheringsData';

export const GatheringsPage = ({ onNavigate, onRequestInvitation, onSelectGathering }) => {
  const [selectedFilter, setSelectedFilter] = useState('ALL GATHERINGS');
  const [sortBy, setSortBy] = useState('DATE_ASC');
  const [sortOpen, setSortOpen] = useState(false);

  const filterTabs = [
    'ALL GATHERINGS',
    'UPCOMING',
    'PAST',
    'JAIPUR',
    'DELHI',
    'UDAIPUR',
    'DUBAI',
  ];

  // Filtering: "ALL GATHERINGS" strictly displays ONLY upcoming gatherings (past excluded)
  const filtered = allGatherings.filter((item) => {
    if (selectedFilter === 'ALL GATHERINGS') return item.isUpcoming;
    if (selectedFilter === 'UPCOMING') return item.isUpcoming;
    if (selectedFilter === 'PAST') return !item.isUpcoming;
    if (selectedFilter === 'JAIPUR') return item.city === 'JAIPUR' && item.isUpcoming;
    if (selectedFilter === 'DELHI') return item.city === 'DELHI' && item.isUpcoming;
    if (selectedFilter === 'UDAIPUR') return item.city === 'UDAIPUR' && item.isUpcoming;
    if (selectedFilter === 'DUBAI') return item.city === 'DUBAI' && item.isUpcoming;
    return item.isUpcoming;
  });

  // Sorting
  const sortedGatherings = [...filtered].sort((a, b) => {
    if (sortBy === 'DATE_ASC') return a.dateSort.localeCompare(b.dateSort);
    if (sortBy === 'DATE_DESC') return b.dateSort.localeCompare(a.dateSort);
    if (sortBy === 'CITY') return a.city.localeCompare(b.city);
    return 0;
  });

  return (
    <div className="bg-[#0A0A0C] text-zinc-100 min-h-screen selection:bg-gold selection:text-black">
      {/* 1. Hero Section: Exact composition from mockup with 4K razor-sharp background */}
      <section className="relative min-h-[64vh] sm:min-h-[72vh] flex items-center justify-start overflow-hidden pt-32 pb-20">
        {/* 4K Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroLakesideHd || '/hero-lakeside-hd.jpg'}
            alt="Lakeside Palace illuminated terrace at night"
            className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
          />
          {/* Subtle multi-layer gradient masks: preserves vivid palace & candle reflections while ensuring sharp typography readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C]/95 via-[#0A0A0C]/75 to-black/35"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-black/75"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0A0A0C]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
          <div className="max-w-3xl space-y-5">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[1px] bg-gold"></span>
              <p className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.28em] uppercase text-gold">
                PRIVATE GATHERINGS
              </p>
            </div>

            {/* Main Headline (All caps, 3 lines, serif, high contrast) */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-wide leading-[1.12] drop-shadow-md">
              EXCEPTIONAL PEOPLE. <br />
              EXCEPTIONAL SETTINGS. <br />
              EXCEPTIONAL CONVERSATIONS.
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-xs sm:text-sm md:text-base text-zinc-200 font-light leading-relaxed max-w-xl pt-1 drop-shadow-sm">
              A collection of private evenings, intimate dinners and experiences created for the right people.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter Navigation Bar & Sort Dropdown */}
      <section className="border-y border-white/10 bg-[#0A0A0C]/95 backdrop-blur-md sticky top-16 sm:top-[72px] z-30 shadow-lg shadow-black/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-3.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Filter Tabs */}
          <div className="flex items-center gap-5 sm:gap-7 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedFilter(tab)}
                  className={`text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium transition-all duration-300 pb-1 whitespace-nowrap relative ${
                    isActive
                      ? 'text-gold font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span>{tab}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold shadow-[0_0_8px_rgba(197,160,89,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown */}
          <div className="relative self-end md:self-auto">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="border border-white/20 hover:border-gold/60 bg-black/60 text-zinc-300 hover:text-white px-4 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] flex items-center gap-2 transition-colors"
            >
              <span>SORT BY</span>
              <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>

            {sortOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#121217] border border-gold/30 shadow-2xl z-50 py-1.5 backdrop-blur-md">
                <button
                  onClick={() => { setSortBy('DATE_ASC'); setSortOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-[10px] uppercase tracking-wider transition-colors flex items-center justify-between ${
                    sortBy === 'DATE_ASC' ? 'text-gold bg-gold/10' : 'text-zinc-300 hover:text-gold hover:bg-black/40'
                  }`}
                >
                  <span>Date (Upcoming)</span>
                  {sortBy === 'DATE_ASC' && <Check className="w-3 h-3 text-gold" />}
                </button>
                <button
                  onClick={() => { setSortBy('DATE_DESC'); setSortOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-[10px] uppercase tracking-wider transition-colors flex items-center justify-between ${
                    sortBy === 'DATE_DESC' ? 'text-gold bg-gold/10' : 'text-zinc-300 hover:text-gold hover:bg-black/40'
                  }`}
                >
                  <span>Date (Newest First)</span>
                  {sortBy === 'DATE_DESC' && <Check className="w-3 h-3 text-gold" />}
                </button>
                <button
                  onClick={() => { setSortBy('CITY'); setSortOpen(false); }}
                  className={`w-full text-left px-4 py-2 text-[10px] uppercase tracking-wider transition-colors flex items-center justify-between ${
                    sortBy === 'CITY' ? 'text-gold bg-gold/10' : 'text-zinc-300 hover:text-gold hover:bg-black/40'
                  }`}
                >
                  <span>By Location</span>
                  {sortBy === 'CITY' && <Check className="w-3 h-3 text-gold" />}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Main Gatherings Content */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        {/* Centered Ornamental Section Divider */}
        <div className="flex items-center justify-center gap-4 mb-14 text-gold">
          <div className="w-8 sm:w-16 h-[1px] bg-gold/50"></div>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] font-serif text-gold font-medium">
            ✦ · ✦ &nbsp; {selectedFilter === 'PAST' ? 'ARCHIVED PAST CONCLAVES' : 'UPCOMING GATHERINGS'} &nbsp; ✦ · ✦
          </span>
          <div className="w-8 sm:w-16 h-[1px] bg-gold/50"></div>
        </div>

        {/* Gatherings Cards List */}
        <div className="space-y-8 sm:space-y-10">
          {sortedGatherings.length === 0 ? (
            <div className="text-center py-20 border border-white/10 bg-brand-card/40 p-8 space-y-4">
              <p className="font-serif text-2xl text-white">
                No salons found for "{selectedFilter}".
              </p>
              <p className="text-xs text-zinc-400 font-light">
                Explore our full calendar or petition the Advisory Secretariat to host a bespoke salon.
              </p>
              <button
                onClick={() => setSelectedFilter('ALL GATHERINGS')}
                className="mt-2 text-xs text-gold uppercase tracking-[0.22em] border-b border-gold/50 pb-0.5 hover:text-gold-light"
              >
                Reset to All Gatherings
              </button>
            </div>
          ) : (
            sortedGatherings.map((item) => (
              <div
                key={item.id}
                className="border border-white/10 bg-[#0E0E12] hover:border-gold/50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-[0_8px_35px_rgba(197,160,89,0.12)] group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Left Column: 4K Razor-sharp Image with Subtle Zoom Hover */}
                  <div className="lg:col-span-6 relative overflow-hidden min-h-[270px] sm:min-h-[340px] lg:min-h-[360px] bg-black">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-transparent to-transparent lg:hidden"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0E0E12]/80 hidden lg:block pointer-events-none"></div>
                  </div>

                  {/* Right Column: Details */}
                  <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      {/* Status Tag */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-gold font-semibold">
                          {item.tag}
                        </span>
                        <div className="text-[10px] font-mono tracking-wider uppercase">
                          {item.isUpcoming && item.remainingSeats ? (
                            <span className="text-amber-400 flex items-center gap-1.5 font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                              <span>{item.remainingSeats} SEATS LEFT</span>
                            </span>
                          ) : (
                            <span className="text-zinc-500">{item.capacity}</span>
                          )}
                        </div>
                      </div>

                      {/* Date */}
                      <p className="font-serif text-sm sm:text-base tracking-[0.16em] uppercase text-gold/90 font-medium">
                        {item.date}
                      </p>

                      {/* Title */}
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal tracking-wide leading-snug group-hover:text-gold-light transition-colors">
                        {item.title}
                      </h3>

                      {/* Meta Info: Location & Time */}
                      <div className="pt-2 space-y-2 text-zinc-300 text-xs sm:text-[13px] tracking-wider uppercase font-light">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                          <span>{item.location}</span>
                        </div>
                        {item.time && (
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                            <span>{item.time}</span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Row: Private Event Tag & Action Button */}
                    <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
                        <span>{item.eventType}</span>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3">
                        <button
                          onClick={() => {
                            if (onSelectGathering) onSelectGathering(item.id);
                            onNavigate('gathering-detail', item.id);
                          }}
                          className="border border-gold/70 hover:border-gold text-gold hover:bg-gold hover:text-black px-4 sm:px-6 py-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-medium transition-all duration-300 flex items-center gap-2 shadow-sm whitespace-nowrap group/btn"
                        >
                          <span>VIEW GATHERING</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 4. Luxury Call to Action Banner: "THE RIGHT ROOM IS RARE." */}
        <div className="mt-20 border border-gold/40 bg-gradient-to-r from-black via-[#111116] to-black p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-gold-glow">
          {/* Left: Royal Crest + Text */}
          <div className="flex items-center gap-5 sm:gap-6 text-center md:text-left flex-col md:flex-row">
            {/* Crest Emblem */}
            <div className="w-12 h-12 rounded-none border border-gold/60 flex items-center justify-center text-gold bg-gold/5 flex-shrink-0">
              <span className="font-serif text-xl tracking-widest font-semibold">C</span>
            </div>

            {/* Banner Headline */}
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal tracking-wide">
                THE RIGHT ROOM IS <span className="gold-gradient-text italic font-normal">RARE.</span>
              </h3>
              <p className="font-serif text-sm sm:text-base text-zinc-300 uppercase tracking-widest font-light mt-0.5">
                BE PART OF WHAT MATTERS.
              </p>
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={() => {
              if (onRequestInvitation) {
                onRequestInvitation();
              } else {
                onNavigate('request-invitation');
              }
            }}
            className="border border-gold/70 hover:border-gold text-gold hover:bg-gold hover:text-black px-6 sm:px-8 py-3 text-xs uppercase tracking-[0.24em] font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-sm hover:shadow-gold-subtle"
          >
            <span>REQUEST INVITATION</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default GatheringsPage;
