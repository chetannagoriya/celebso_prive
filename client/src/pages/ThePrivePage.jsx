import React from 'react';
import { Crown, Shield, Key, Compass, Globe, Sparkles, Feather, Lock, Check } from 'lucide-react';

export const ThePrivePage = ({ onNavigate, onRequestInvitation }) => {
  const pillars = [
    {
      icon: Crown,
      title: 'The Sovereign Patron',
      archetype: 'Single Family Offices & Sovereign Allocators',
      description: 'Principals stewarding generational capital ($100M+ AUM) who seek discrete intellectual sanctuary away from commercial intermediaries and financial brokers.',
      attributes: ['Multi-Century Horizon', 'Cross-Border Jurisdiction', 'Absolute Non-Solicitation'],
    },
    {
      icon: Key,
      title: 'The Legacy Architect',
      archetype: 'Industrial Dynasties & Enterprise Founders',
      description: 'Builders who have erected generational industries, conglomerates, and physical infrastructure across Asia, Europe, and the Middle East.',
      attributes: ['Real-Economy Sovereignty', 'Generational Succession', 'Geopolitical Resilience'],
    },
    {
      icon: Sparkles,
      title: 'The Frontier Luminary',
      archetype: 'Deep Tech, AI & Autonomous Frontier Minds',
      description: 'Visionaries engineering sovereign AI clusters, next-era quantum compute, space exploration, and longevity biology.',
      attributes: ['Technological Primacy', 'Sovereign Infrastructure', 'Civilizational Vision'],
    },
  ];

  const privileges = [
    {
      title: 'Unrestricted Chapter Access',
      desc: 'Guaranteed access to intimate 30-seat salons across Jaipur, Dubai, London, Zurich, and Doha.',
    },
    {
      title: 'The Discrete Concierge Conduit',
      desc: 'Bespoke peer introductions facilitated by the High Advisory Secretariat with zero friction or intermediaries.',
    },
    {
      title: 'Salon Curatorial Rights',
      desc: 'Privilege to propose and co-host closed-door salons in private estates, alpine chalets, or royal palaces.',
    },
    {
      title: 'Archival Vault Clearance',
      desc: 'Encrypted access to discrete intelligence briefs, macro analyses, and private co-investment syndications.',
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 bg-gold/5 text-gold text-[10px] tracking-[0.3em] uppercase">
          <Crown className="w-3.5 h-3.5" />
          <span>The Order of Fellowship</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-wide">
          The <span className="gold-metallic-text italic">Privé</span>
        </h1>
        <p className="font-serif text-lg sm:text-xl text-zinc-300 italic font-light leading-relaxed">
          “A discrete sanctuary of sovereign capital, timeless heritage, and profound fellowship — uncorrupted by publicity or commercial transactions.”
        </p>
      </div>

      {/* Manifesto Box */}
      <div className="relative border border-gold/30 bg-gradient-to-b from-brand-card via-[#111116] to-black p-8 sm:p-14 mb-20">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="font-serif text-2xl sm:text-3xl text-white font-light leading-snug">
            “True power does not shout. It gathers in quiet corridors, where words carry weight, trust is absolute, and fellowship is enduring.”
          </p>
          <div className="w-16 h-px bg-gold/50 mx-auto"></div>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            CELEBSO PRIVÉ was created in response to the vulgarity of modern corporate networking conferences. In an era where summits are filled with sponsor banners, transactional pitch decks, and indiscriminate crowds, the world’s most consequential minds have retreated into private sanctums.
          </p>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            The Privé is that sanctum: a curated fellowship where sovereign wealth allocators, tech pioneers, and royal dynasties convene under royal candlelight, bound by the Chatham House Rule and mutual reverence.
          </p>
        </div>
      </div>

      {/* The Three Orders */}
      <div className="mb-20 space-y-8">
        <div className="text-center space-y-2">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">The Fellowship Matrix</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">Three Orders of The Privé</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 sm:p-10 bg-brand-card border border-white/10 hover:border-gold/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold bg-gold/5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-white font-medium mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-gold/80 font-mono">
                      {item.archetype}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10 mt-8 space-y-2">
                  {item.attributes.map((attr, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-400">
                      <Check className="w-3.5 h-3.5 text-gold" />
                      <span>{attr}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Privileges Grid */}
      <div className="p-8 sm:p-12 border border-gold/20 bg-brand-card/50 mb-20">
        <h3 className="font-serif text-2xl sm:text-3xl text-white mb-8 text-center">
          Fellowship Privileges
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {privileges.map((p, i) => (
            <div key={i} className="flex gap-4">
              <span className="font-mono text-gold text-lg font-semibold">0{i + 1}</span>
              <div className="space-y-1">
                <h4 className="font-serif text-lg text-white font-medium">{p.title}</h4>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="text-center p-12 border border-gold/40 bg-gradient-to-r from-black via-brand-card to-black space-y-6">
        <Crown className="w-8 h-8 text-gold mx-auto" />
        <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          Petition for Privé Fellowship
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-xl mx-auto leading-relaxed">
          Fellowship is conferred strictly through nomination by two existing fellows or direct clearance by the High Advisory Council.
        </p>
        <button
          onClick={onRequestInvitation}
          className="px-8 py-3.5 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.25em] font-semibold transition-colors"
        >
          Submit Fellowship Dossier
        </button>
      </div>
    </div>
  );
};

export default ThePrivePage;
