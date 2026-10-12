import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  Sparkles, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Compass, 
  Building2, 
  Layers,
  ChevronRight
} from 'lucide-react';

export const EcosystemPage = ({ onNavigate, onRequestInvitation }) => {
  const [activePillar, setActivePillar] = useState('01');

  const glanceItems = [
    {
      title: 'FOUNDER COMMUNITY',
      subtitle: 'Entrepreneurs and business builders',
      desc: 'Visionary founders scaling disruptive companies across high-growth sectors.',
      icon: Users,
      badge: 'BUILDERS',
    },
    {
      title: 'INVESTOR NETWORK',
      subtitle: 'Investors and capital partners',
      desc: 'Angels, VCs, private equity leaders, and family offices deploying strategic capital.',
      icon: TrendingUp,
      badge: 'CAPITAL',
    },
    {
      title: 'PRIVATE GATHERINGS',
      subtitle: 'Curated networking and roundtables',
      desc: 'Exclusive candlelit dinners, closed-door conclaves, and executive salons.',
      icon: Sparkles,
      badge: 'SALONS',
    },
    {
      title: 'TECHNOLOGY & INNOVATION',
      subtitle: 'AI, software, and emerging businesses',
      desc: 'Pioneers advancing artificial intelligence, deep tech, and modern enterprise software.',
      icon: Cpu,
      badge: 'INNOVATION',
    },
  ];

  const pillars = [
    {
      id: '01',
      title: 'Founders & Entrepreneurs',
      role: 'Startup founders, entrepreneurs, and business leaders building companies across emerging and established industries.',
      icon: Users,
      points: [
        'Founder-to-founder networking & peer alliances',
        'Business development and strategic collaboration',
        'Peer learning, tactical insights, and scaling masterclasses',
        'Cross-industry market expansion and founder fellowship',
      ],
      detail: 'A confidential sanctuary for enterprise builders to share uncensored operational truths, navigate capital rounds, and forge enduring commercial alliances away from the public eye.',
    },
    {
      id: '02',
      title: 'Investor Network',
      role: 'Venture capitalists, private equity allocators, angel syndicates, and family offices backing the next generation of industry titans.',
      icon: TrendingUp,
      points: [
        'Proprietary co-investment deal flow and syndication',
        'Direct founder-investor alignment without intermediaries',
        'Strategic capital allocation across early & growth stages',
        'Portfolio cross-pollination and joint enterprise creation',
      ],
      detail: 'Connecting high-conviction capital providers with visionary operators, fostering high-trust relationships that endure far beyond individual funding transactions.',
    },
    {
      id: '03',
      title: 'Private Gatherings',
      role: 'Bespoke dinners, executive retreats, and boardroom salons meticulously designed for unhurried, meaningful discourse.',
      icon: Sparkles,
      points: [
        'Strictly vetted, limited-capacity rooms (20–30 principals)',
        'Chatham House Rule protocol ensuring authentic discretion',
        'Curated seating arrangements designed for maximum synergy',
        'Historic heritage settings and exceptional culinary repasts',
      ],
      detail: 'We reject crowded exhibition halls. Every Celebso Privé gathering is an intimate evening where sovereign minds connect over meaningful conversations and trusted fellowship.',
    },
    {
      id: '04',
      title: 'Technology & Innovation',
      role: 'Pioneers and leaders driving artificial intelligence, enterprise platforms, deep tech, and next-generation infrastructure.',
      icon: Cpu,
      points: [
        'Artificial intelligence integration and frontier enterprise models',
        'Emerging tech adoption for legacy industry transformation',
        'Strategic partnerships between tech builders & capital stewards',
        'Sovereign compute, data governance, and scalable software pipelines',
      ],
      detail: 'Accelerating the convergence of modern technology architectures with India’s most ambitious business enterprises and capital networks.',
    },
  ];

  const currentPillar = pillars.find((p) => p.id === activePillar) || pillars[0];
  const CurrentIcon = currentPillar.icon;

  return (
    <div className="bg-[#0A0A0C] text-zinc-100 min-h-screen selection:bg-gold selection:text-black">
      {/* 1. Hero / Editorial Header */}
      <section className="relative pt-36 pb-20 sm:pb-24 border-b border-white/5 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-6 relative z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-gold/30 bg-gold/5 text-gold text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-semibold">
            <Compass className="w-3.5 h-3.5 text-gold" />
            <span>THE CELEBSO NETWORK</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-[1.08]">
            The <span className="gold-metallic-text italic">Ecosystem</span>
          </h1>

          {/* Curated Pullquote */}
          <blockquote className="max-w-3xl mx-auto py-2">
            <p className="font-serif text-lg sm:text-2xl text-zinc-200 italic font-light leading-relaxed">
              “An interconnected community of founders, investors, technology leaders, and business builders creating meaningful relationships and opportunities across India's entrepreneurial ecosystem.”
            </p>
          </blockquote>

          {/* Description Paragraph */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto pt-2">
            Celebso Privé brings together people who are building, funding, and shaping businesses. Through curated gatherings, founders’ circles, and investor roundtables, we create opportunities for trusted connections, strategic conversations, and long-term collaboration.
          </p>

          {/* Quick CTA button */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <button
              onClick={onRequestInvitation}
              className="bg-gold hover:bg-gold-light text-[#0A0A0C] px-8 py-3.5 text-xs uppercase tracking-[0.24em] font-semibold transition-all duration-300 shadow-gold-glow"
            >
              Request Invitation
            </button>
            <button
              onClick={() => onNavigate('gatherings')}
              className="border border-white/20 hover:border-gold text-zinc-300 hover:text-gold px-7 py-3.5 text-xs uppercase tracking-[0.22em] font-medium transition-colors"
            >
              Explore Gatherings
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE NETWORK AT A GLANCE */}
      <section className="py-20 sm:py-24 border-b border-white/5 bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
          {/* Section Heading */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-gold"></span>
              <p className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-gold">
                OVERVIEW
              </p>
              <span className="w-6 h-[1px] bg-gold"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-wide">
              THE NETWORK AT A GLANCE
            </h2>
            <p className="font-serif text-sm sm:text-base text-zinc-400 italic font-light max-w-xl mx-auto">
              Four interdependent dimensions powering meaningful strategic convergence.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {glanceItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 border border-white/10 bg-[#0E0E12] hover:border-gold/50 transition-all duration-500 flex flex-col justify-between space-y-6 group hover:-translate-y-1 shadow-lg hover:shadow-[0_8px_30px_rgba(197,160,89,0.12)]"
                >
                  <div className="space-y-5">
                    {/* Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold group-hover:border-gold group-hover:bg-gold/15 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gold/80 px-2 py-0.5 border border-gold/20">
                        {item.badge}
                      </span>
                    </div>

                    {/* Titles */}
                    <div className="space-y-1.5">
                      <h3 className="font-serif text-base sm:text-lg text-white font-medium tracking-wide group-hover:text-gold-light transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gold/90 font-sans tracking-wide uppercase font-medium">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Indicator Line */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-zinc-500 text-[10px] uppercase tracking-widest font-mono group-hover:text-gold transition-colors">
                    <span>Dimension 0{idx + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. EXPLORE THE FOUR PILLARS */}
      <section className="py-20 sm:py-28 border-b border-white/5 bg-[#0A0A0C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-14">
          {/* Section Heading */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-gold"></span>
              <p className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-gold">
                ARCHITECTURAL FOUNDATION
              </p>
              <span className="w-6 h-[1px] bg-gold"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-wide">
              EXPLORE THE FOUR PILLARS
            </h2>
            <p className="font-serif text-sm sm:text-base text-zinc-400 italic font-light max-w-xl mx-auto">
              Dive deep into the primary constituents who shape our sovereign salons.
            </p>
          </div>

          {/* Pillar Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = activePillar === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`p-5 sm:p-6 border text-left transition-all duration-300 space-y-3 ${
                    isSelected
                      ? 'border-gold bg-gold/10 shadow-gold-subtle'
                      : 'border-white/10 bg-[#0E0E12] hover:border-gold/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm sm:text-base text-gold font-medium">
                      {pillar.id}
                    </span>
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-gold' : 'text-zinc-500'}`} />
                  </div>
                  <h4 className="font-serif text-sm sm:text-base text-white font-medium line-clamp-1">
                    {pillar.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Selected Pillar Detailed Showcase Box */}
          <div className="border border-gold/40 bg-gradient-to-b from-[#121217] via-[#0D0D10] to-black p-8 sm:p-12 lg:p-14 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Pillar Title, Role & Points */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold bg-gold/10 flex-shrink-0">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold font-semibold">
                      PILLAR {currentPillar.id}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal tracking-wide">
                      {currentPillar.title}
                    </h3>
                  </div>
                </div>

                {/* Role Description */}
                <p className="font-serif text-sm sm:text-base text-zinc-200 italic font-light leading-relaxed border-l-2 border-gold/60 pl-4 py-1">
                  “{currentPillar.role}”
                </p>

                {/* Detail */}
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {currentPillar.detail}
                </p>

                {/* Key Points Checklist */}
                <div className="space-y-3 pt-2">
                  <h5 className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
                    Core Mandates & Deliverables:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {currentPillar.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Ingress Protocol Card */}
              <div className="lg:col-span-4 p-8 bg-black/70 border border-white/10 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Vetting & Ingress</span>
                  </div>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    Participation across this pillar is strictly peer-reviewed by the High Advisory Board to maintain room density and prevent commercial noise.
                  </p>
                  <div className="pt-2 border-t border-white/5 space-y-2 text-[11px] text-zinc-400">
                    <div className="flex justify-between">
                      <span>Room Cap:</span>
                      <span className="text-gold font-mono">Strict 25–30</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rule:</span>
                      <span className="text-zinc-200">Chatham House</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Format:</span>
                      <span className="text-zinc-200">Non-Transactional</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onRequestInvitation}
                  className="w-full py-3 bg-gold hover:bg-gold-light text-[#0A0A0C] text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-gold-glow flex items-center justify-center gap-2"
                >
                  <span>Inquire For Ingress</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Ecosystem Synergy Flywheel */}
      <section className="py-20 sm:py-24 bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
          <div className="text-center space-y-3">
            <p className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-gold">
              THE VALUE CYCLE
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              How the Network Operates
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-8 bg-[#0E0E12] border border-white/10 space-y-4">
              <span className="text-gold font-mono text-2xl font-light">01</span>
              <h4 className="font-serif text-xl text-white">Curated Discovery</h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Every member is personally vetted. No public advertisements or random solicitations are ever permitted.
              </p>
            </div>
            <div className="p-8 bg-[#0E0E12] border border-white/10 space-y-4">
              <span className="text-gold font-mono text-2xl font-light">02</span>
              <h4 className="font-serif text-xl text-white">Strategic Alignment</h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Intimate seating charts place complementary visionaries together for candid, high-conviction dialogues.
              </p>
            </div>
            <div className="p-8 bg-[#0E0E12] border border-white/10 space-y-4">
              <span className="text-gold font-mono text-2xl font-light">03</span>
              <h4 className="font-serif text-xl text-white">Long-Term Collaboration</h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Founders, investors, and enterprise builders forge partnerships, syndicates, and friendships that span decades.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcosystemPage;
