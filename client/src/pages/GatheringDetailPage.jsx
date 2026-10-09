import React, { useState } from 'react';
import { Calendar, MapPin, Users, Shield, Clock, ArrowLeft, CheckCircle2, Lock, Award, Compass } from 'lucide-react';

export const GatheringDetailPage = ({ onNavigate, onRequestInvitation }) => {
  const [activeTab, setActiveTab] = useState('itinerary');

  const itinerary = [
    {
      time: '17:30',
      title: 'Private Royal Escort & Courtyard Ingress',
      location: 'The Grand Arch of Amber Fort',
      details: 'Arrive via discrete luxury convoy. Escorted through private ceremonial gates lit with ancestral brass lanterns and royal torches. Biometric protocol check and issuance of physical sovereign cipher.',
    },
    {
      time: '18:30',
      title: 'Sunset Libations & Sheesh Mahal Reception',
      location: 'Chamber of Mirrors (Exclusive Access)',
      details: 'Rare vintage single malts and botanical elixirs served amid mirrored mosaics. Private discourse as dusk settles over the Aravalli hills. Chamber closed to all external visitors.',
    },
    {
      time: '19:45',
      title: 'The Sovereign Round: Global Macro & Frontier Capital',
      location: 'The Inner Council Pavilion',
      details: 'Thirty principals seated in a non-hierarchical round. Key discourse on sovereign capital shifts, multi-century family office resilience, and autonomous AI infrastructure.',
    },
    {
      time: '21:15',
      title: '7-Course Royal Heritage Repast',
      location: 'Diwan-e-Khas (Private Royal Banquet Hall)',
      details: 'Ancestral culinary recipes prepared by generational royal chefs, paired with Premier Grand Cru vintages curated by our master sommelier. Classical sitar and acoustic instruments in the background.',
    },
    {
      time: '23:00',
      title: 'The Midnight Salon: Fireside Dialectics & Rare Vaults',
      location: 'Rooftop Starlight Terrace',
      details: 'Uninhibited, raw dialogues by the open hearth under desert stars. Private viewing of museum-grade vintage watches and historic manuscripts provided by private collectors.',
    },
    {
      time: '01:00',
      title: 'Discrete Nocturnal Conclave Concludes',
      location: 'Private Chauffeur Conduits',
      details: 'Chauffeur transfers to private villas and palace suites. Sealed encrypted transcripts dispatched to personal crypts.',
    },
  ];

  const pillars = [
    {
      num: '01',
      title: 'Sovereign Capital & Liquidity Corridors',
      desc: 'Cross-border syndication between Gulf sovereign funds, European single family offices, and Indian industrial dynasties.',
    },
    {
      num: '02',
      title: 'Frontier Compute & Energy Independence',
      desc: 'Investments in next-gen semiconductor foundries, nuclear micro-reactors, and sovereign AI clusters.',
    },
    {
      num: '03',
      title: 'Dynastic Governance & 100-Year Trusts',
      desc: 'Preserving sovereign wealth across 4 generations: jurisdiction neutrality, private vaults, and lineage succession.',
    },
    {
      num: '04',
      title: 'Cultural Patronage & Rare Asset Custody',
      desc: 'Direct allocation into timeless artifacts, heritage restorations, and sovereign philanthropy beyond public philanthropy.',
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Back button */}
      <div className="mb-8">
        <button
          onClick={() => onNavigate('gatherings')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-400 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Gatherings</span>
        </button>
      </div>

      {/* Main Dossier Header */}
      <div className="relative border border-gold/40 bg-gradient-to-b from-[#14141A] via-brand-card to-black p-8 sm:p-12 mb-12 shadow-gold-glow">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/50 bg-gold/10 text-gold text-[10px] tracking-[0.25em] uppercase font-mono">
            <Lock className="w-3 h-3" />
            <span>CONFIDENTIAL DOSSIER · GATHERING NO. 08</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-amber-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>18 OF 30 SEATS CONFIRMED</span>
          </div>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal mb-4">
          The Amber Fort <span className="gold-metallic-text italic">Sovereign Conclave</span>
        </h1>

        <p className="font-serif text-lg sm:text-xl text-zinc-300 italic font-light max-w-3xl leading-relaxed mb-8">
          “An evening of sovereign convergence within the 400-year-old sandstone ramparts of Jaipur, where global allocators, dynasty stewards, and tech visionaries meet without cameras.”
        </p>

        {/* Quick Meta Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10 text-xs">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium mb-1">Chapter</p>
            <p className="text-white font-medium flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              Jaipur, Rajasthan
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium mb-1">Date</p>
            <p className="text-white font-medium flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold" />
              December 18–20, 2026
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium mb-1">Capacity</p>
            <p className="text-white font-medium flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-gold" />
              Strict 30 Principals Cap
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium mb-1">Protocol</p>
            <p className="text-white font-medium flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-gold" />
              Chatham House Codified
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-white/10 mb-10">
        <button
          onClick={() => setActiveTab('itinerary')}
          className={`pb-4 px-6 text-xs uppercase tracking-[0.25em] font-medium border-b-2 transition-all ${
            activeTab === 'itinerary'
              ? 'border-gold text-gold'
              : 'border-transparent text-zinc-400 hover:text-white'
          }`}
        >
          Curated Itinerary
        </button>
        <button
          onClick={() => setActiveTab('pillars')}
          className={`pb-4 px-6 text-xs uppercase tracking-[0.25em] font-medium border-b-2 transition-all ${
            activeTab === 'pillars'
              ? 'border-gold text-gold'
              : 'border-transparent text-zinc-400 hover:text-white'
          }`}
        >
          Discussion Pillars
        </button>
        <button
          onClick={() => setActiveTab('protocols')}
          className={`pb-4 px-6 text-xs uppercase tracking-[0.25em] font-medium border-b-2 transition-all ${
            activeTab === 'protocols'
              ? 'border-gold text-gold'
              : 'border-transparent text-zinc-400 hover:text-white'
          }`}
        >
          Security & Protocols
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'itinerary' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {itinerary.map((item, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 bg-brand-card/80 border border-white/10 hover:border-gold/30 transition-all flex flex-col md:flex-row gap-6 md:items-start"
              >
                <div className="flex md:flex-col items-center md:items-start gap-3 md:w-36 flex-shrink-0">
                  <span className="font-mono text-xl sm:text-2xl text-gold font-semibold tracking-wider">
                    {item.time}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-mono bg-black/40 px-2 py-0.5 border border-white/5">
                    Stage {index + 1}
                  </span>
                </div>
                <div className="space-y-2 flex-grow">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gold/80 flex items-center gap-1.5 font-mono">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed pt-1">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'pillars' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="p-8 bg-brand-card border border-white/10 hover:border-gold/40 transition-all space-y-4"
            >
              <span className="font-mono text-3xl text-gold/40 font-semibold">{p.num}</span>
              <h3 className="font-serif text-2xl text-white font-medium">{p.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'protocols' && (
        <div className="p-8 sm:p-10 bg-brand-card border border-gold/30 space-y-8">
          <div className="space-y-3">
            <h3 className="font-serif text-2xl text-white font-medium">
              The Seven Sanctum Protocols
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              Attendance at Celebso Privé connotes strict adherence to the centuries-old diplomatic tradition of sovereign discretion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-zinc-300">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Zero Photographic Apparatus</strong>
                All smartphones, recording equipment, and cameras are sequestered in Faraday pouches at the perimeter.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Codified Chatham House Rule</strong>
                Participants are free to use the information received, but neither the identity nor the affiliation of the speaker may be disclosed.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Strict Non-Solicitation</strong>
                The salon is a sanctuary of intellectual dialectic, not a pitch market. Commercial deck presentations are strictly forbidden.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Peer Vetting Ratification</strong>
                Every guest is vetted by at least two High Advisory Council fellows prior to issuance of invitation.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Footer */}
      <div className="mt-12 p-8 border border-gold/40 bg-black/60 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-serif text-xl text-white">Petition for Seat Inclusion</h4>
          <p className="text-xs text-zinc-400 font-light">
            Twelve seats remain available for the Amber Fort Winter Solstice Conclave.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => onNavigate('request-invitation')}
            className="px-6 py-3 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.22em] font-semibold transition-colors whitespace-nowrap"
          >
            Submit Formal Petition
          </button>
        </div>
      </div>
    </div>
  );
};

export default GatheringDetailPage;
