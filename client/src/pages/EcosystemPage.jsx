import React, { useState } from 'react';
import { Network, Globe, Building2, Cpu, Landmark, Layers, ArrowRight, ShieldCheck, PieChart } from 'lucide-react';

export const EcosystemPage = ({ onNavigate, onRequestInvitation }) => {
  const [activeQuadrant, setActiveQuadrant] = useState('capital');

  const quadrants = {
    capital: {
      title: 'Sovereign Wealth Funds & Institutional Allocators',
      icon: Landmark,
      metric: '$10B+ Aggregate AUM',
      description: 'Senior principals and decision-makers from GCC sovereign investment funds, European pension trusts, and private family holding companies allocating institutional capital into generational assets.',
      keyAttributes: [
        'Multi-decade deployment horizons',
        'Direct co-investment appetite without intermediary fees',
        'Sovereign asset security and jurisdictional diversification',
      ],
    },
    dynasty: {
      title: 'Single Family Offices & Dynastic Estates',
      icon: Building2,
      metric: '3rd & 4th Generation Stewards',
      description: 'Founding families behind generational manufacturing, real estate, luxury conglomerates, and ancestral wealth looking to navigate estate succession, liquidity preservation, and next-gen governance.',
      keyAttributes: [
        'Inter-generational wealth continuity frameworks',
        'Direct family-to-family relationships across borders',
        'Preservation of lineage values and philanthropic foundations',
      ],
    },
    tech: {
      title: 'Frontier Compute & AI Infrastructure Titans',
      icon: Cpu,
      metric: 'Tier-1 Deep Tech Founders',
      description: 'Entrepreneurs building foundational artificial intelligence, semiconductor foundries, modular nuclear fission, autonomous robotics, and orbital logistics who require sovereign-scale backing.',
      keyAttributes: [
        'Frontier compute architectures and energy solutions',
        'Global regulatory and sovereignty alignment',
        'High-density strategic capital partnerships',
      ],
    },
    culture: {
      title: 'Royal Houses & Cultural Custodians',
      icon: Globe,
      metric: 'Historic Heritage Estates',
      description: 'Descendants of royal lineages, master horology collectors, art museum founders, and heritage conservationists ensuring ancient craftsmanship and architectural wonders endure.',
      keyAttributes: [
        'Private palace and monument preservation projects',
        'Custody of museum-grade antiquities and horology',
        'Cultural diplomacy and cross-civilizational patronage',
      ],
    },
  };

  const current = quadrants[activeQuadrant];
  const CurrentIcon = current.icon;

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 bg-gold/5 text-gold text-[10px] tracking-[0.3em] uppercase">
          <Network className="w-3.5 h-3.5" />
          <span>The Sovereign Web</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-wide">
          The <span className="gold-metallic-text italic">Ecosystem</span>
        </h1>
        <p className="font-serif text-lg sm:text-xl text-zinc-300 italic font-light leading-relaxed">
          “An interconnected matrix of sovereign allocators, frontier technology founders, and generational dynasties who move global capital in silence.”
        </p>
      </div>

      {/* High-Level Ecosystem Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 border border-gold/30 bg-brand-card mb-20">
        <div className="text-center space-y-1">
          <p className="font-mono text-3xl sm:text-4xl text-gold font-medium">$10B+</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Capital Represented</p>
        </div>
        <div className="text-center space-y-1">
          <p className="font-mono text-3xl sm:text-4xl text-gold font-medium">14</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Sovereign Jurisdictions</p>
        </div>
        <div className="text-center space-y-1">
          <p className="font-mono text-3xl sm:text-4xl text-gold font-medium">100%</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Peer Vetting Ratification</p>
        </div>
        <div className="text-center space-y-1">
          <p className="font-mono text-3xl sm:text-4xl text-gold font-medium">0</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Cameras or Public Leaks</p>
        </div>
      </div>

      {/* Interactive Quadrant Selector */}
      <div className="mb-20 space-y-8">
        <div className="text-center space-y-2">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium">Explore the Dimensions</p>
          <h2 className="font-serif text-3xl text-white">The Four Pillars of Convergence</h2>
        </div>

        {/* Quadrant Tab Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(quadrants).map(([key, item]) => {
            const Icon = item.icon;
            const isSelected = activeQuadrant === key;
            return (
              <button
                key={key}
                onClick={() => setActiveQuadrant(key)}
                className={`p-6 border text-left transition-all duration-300 space-y-3 ${
                  isSelected
                    ? 'border-gold bg-gold/10 shadow-gold-subtle'
                    : 'border-white/10 bg-brand-card hover:border-gold/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon className={`w-6 h-6 ${isSelected ? 'text-gold' : 'text-zinc-400'}`} />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-gold/70">
                    {item.metric}
                  </span>
                </div>
                <h4 className="font-serif text-base sm:text-lg text-white font-medium line-clamp-1">
                  {item.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Quadrant Detail Panel */}
        <div className="p-8 sm:p-12 border border-gold/40 bg-gradient-to-b from-brand-card via-[#121217] to-black">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold bg-gold/10">
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                    {current.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-mono">
                    {current.metric}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                {current.description}
              </p>

              <div className="pt-2 space-y-2">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium">
                  Core Synergy Mandates:
                </p>
                {current.keyAttributes.map((attr, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="text-gold font-mono">✦</span>
                    <span>{attr}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 p-6 bg-black/60 border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>Ecosystem Protocol</span>
              </div>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Interactions within the ecosystem are protected by mutual non-circumvention protocols and advisory facilitation.
              </p>
              <button
                onClick={onRequestInvitation}
                className="w-full py-2.5 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                Inquire For Ingress
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* The Synergy Flywheel */}
      <div className="p-8 sm:p-12 border border-white/10 bg-brand-card/50 space-y-8">
        <h3 className="font-serif text-2xl sm:text-3xl text-white text-center">
          The Sovereign Flywheel
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-zinc-300">
          <div className="p-6 bg-black/40 border border-white/5 space-y-3">
            <span className="text-gold font-mono text-lg">01</span>
            <h4 className="font-serif text-lg text-white">Direct Syndication</h4>
            <p className="text-zinc-400 font-light leading-relaxed">
              Family offices co-invest directly alongside sovereign allocators without the 2-and-20 structure or public fanfare.
            </p>
          </div>
          <div className="p-6 bg-black/40 border border-white/5 space-y-3">
            <span className="text-gold font-mono text-lg">02</span>
            <h4 className="font-serif text-lg text-white">Technological Alignment</h4>
            <p className="text-zinc-400 font-light leading-relaxed">
              Industrial conglomerates partner directly with sovereign AI builders to automate legacy enterprise pipelines.
            </p>
          </div>
          <div className="p-6 bg-black/40 border border-white/5 space-y-3">
            <span className="text-gold font-mono text-lg">03</span>
            <h4 className="font-serif text-lg text-white">Generational Continuity</h4>
            <p className="text-zinc-400 font-light leading-relaxed">
              Heirs and next-generation principals build lifelong friendships with peers in Switzerland, London, and the Gulf.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemPage;
