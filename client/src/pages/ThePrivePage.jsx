import React from 'react';
import { 
  Crown, 
  Users, 
  TrendingUp, 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Lock 
} from 'lucide-react';

export const ThePrivePage = ({ onNavigate, onRequestInvitation }) => {
  const circles = [
    {
      id: '01',
      title: "The Founders' Circle",
      archetype: 'Startup Founders & Enterprise Builders',
      desc: 'Visionary entrepreneurs scaling ambitious companies across emerging technology, consumer brands, enterprise SaaS, and established industries.',
      icon: Users,
      attributes: [
        'Founder-to-founder strategic alliances',
        'Confidential peer problem-solving & uncensored lessons',
        'Direct business development and market expansion',
      ],
    },
    {
      id: '02',
      title: "The Investors' Circle",
      archetype: 'Venture Capital, Angels & Family Offices',
      desc: 'High-conviction capital allocators backing the next generation of industry leaders through patient, strategic funding and syndication.',
      icon: TrendingUp,
      attributes: [
        'Proprietary co-investment deal flow',
        'Direct founder dialogues without pitch decks or intermediaries',
        'Long-term capital alignment and ecosystem support',
      ],
    },
    {
      id: '03',
      title: 'The Strategic Leaders Circle',
      archetype: 'Industry Titans & Corporate Visionaries',
      desc: 'Accomplished business leaders, conglomerate executives, and domain pioneers shaping markets and driving cross-sector collaboration.',
      icon: Building2,
      attributes: [
        'Cross-industry market opportunities & partnerships',
        'Executive governance, M&A, and scaling insights',
        'Lifelong fellowship with India’s foremost operators',
      ],
    },
  ];

  const privileges = [
    {
      title: 'Curated Conclave Access',
      desc: 'Guaranteed invitations to intimate 25–30 seat conclaves and private dinners across Jaipur, Delhi, Udaipur, and Dubai.',
    },
    {
      title: 'High-Trust Direct Introductions',
      desc: 'Peer-to-peer connections facilitated with discretion, ensuring meaningful engagement without commercial friction.',
    },
    {
      title: 'Chatham House Discretion',
      desc: 'Complete privacy with strict no-media protocols, freeing principals to engage with authenticity and candor.',
    },
    {
      title: 'Long-Term Collaboration Hub',
      desc: 'Ongoing opportunities for co-investment, strategic partnerships, joint ventures, and trusted founder alliances.',
    },
  ];

  return (
    <div className="bg-[#0A0A0C] text-zinc-100 min-h-screen selection:bg-gold selection:text-black">
      {/* 1. Hero / Editorial Header */}
      <section className="relative pt-36 pb-20 sm:pb-24 border-b border-white/5 overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6 relative z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-gold/30 bg-gold/5 text-gold text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-semibold">
            <Crown className="w-3.5 h-3.5 text-gold" />
            <span>THE ORDER OF FELLOWSHIP</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-[1.08]">
            The <span className="gold-metallic-text italic">Privé</span>
          </h1>

          {/* Pullquote */}
          <blockquote className="max-w-3xl mx-auto py-3">
            <p className="font-serif text-lg sm:text-2xl text-zinc-200 italic font-light leading-relaxed">
              “A discreet sanctuary for ambitious founders, visionary investors, and distinguished business leaders — united by trust, meaningful connections, and a shared vision for the future.”
            </p>
          </blockquote>

          {/* Action CTAs */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <button
              onClick={onRequestInvitation}
              className="bg-gold hover:bg-gold-light text-[#0A0A0C] px-8 py-3.5 text-xs uppercase tracking-[0.24em] font-semibold transition-all duration-300 shadow-gold-glow"
            >
              Request Fellowship
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

      {/* 2. THE PHILOSOPHY */}
      <section className="py-20 sm:py-28 border-b border-white/5 bg-[#08080A]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="border border-gold/30 bg-gradient-to-b from-[#121217] via-[#0E0E12] to-black p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-6 relative z-10 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="w-5 h-[1px] bg-gold"></span>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-gold font-mono font-semibold">
                  THE PHILOSOPHY
                </p>
              </div>

              <blockquote className="py-2">
                <p className="font-serif text-2xl sm:text-3xl text-white font-light leading-snug">
                  “True growth does not happen in crowded rooms. It begins where the right people meet, ideas are exchanged, and lasting relationships take shape.”
                </p>
              </blockquote>

              <div className="w-16 h-[1px] bg-gold/50 my-4 mx-auto sm:mx-0"></div>

              <div className="space-y-5 text-xs sm:text-sm md:text-[15px] text-zinc-300 font-light leading-relaxed">
                <p>
                  Celebso Privé was created to bring a more thoughtful approach to business networking. In a world of crowded conferences and transactional introductions, we curate private gatherings where founders, investors, and industry leaders can connect beyond the ordinary.
                </p>

                <p>
                  The Privé is a community built around meaningful conversations, trusted relationships, and opportunities for collaboration — bringing together India's entrepreneurial talent, investment community, and next-generation business leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE FELLOWSHIP MATRIX: Three Circles of The Privé */}
      <section className="py-20 sm:py-28 border-b border-white/5 bg-[#0A0A0C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-14">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-gold"></span>
              <p className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-gold">
                THE FELLOWSHIP MATRIX
              </p>
              <span className="w-6 h-[1px] bg-gold"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-wide">
              Three Circles of The Privé
            </h2>
            <p className="font-serif text-sm sm:text-base text-zinc-400 italic font-light max-w-xl mx-auto">
              Three interconnected spheres of leadership driving innovation, capital, and sustainable growth.
            </p>
          </div>

          {/* 3 Circles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {circles.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="p-8 sm:p-10 border border-white/10 bg-[#0E0E12] hover:border-gold/50 transition-all duration-500 space-y-6 flex flex-col justify-between group shadow-xl hover:shadow-[0_8px_30px_rgba(197,160,89,0.12)]"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-gold text-xs font-semibold tracking-widest px-2.5 py-1 border border-gold/30 bg-gold/5">
                        CIRCLE {item.id}
                      </span>
                      <div className="w-10 h-10 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold group-hover:border-gold transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl text-white font-medium group-hover:text-gold-light transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gold/90 font-mono tracking-wider uppercase mt-1">
                        {item.archetype}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 space-y-2.5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gold font-semibold">
                      Core Synergies:
                    </p>
                    {item.attributes.map((attr, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                        <span>{attr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FELLOWSHIP PRIVILEGES */}
      <section className="py-20 sm:py-24 border-b border-white/5 bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-gold"></span>
              <p className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-gold">
                PRIVILEGES OF MEMBERSHIP
              </p>
              <span className="w-6 h-[1px] bg-gold"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Fellowship Privileges
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {privileges.map((p, i) => (
              <div key={i} className="p-8 bg-[#0E0E12] border border-white/10 space-y-3 hover:border-gold/40 transition-colors">
                <span className="font-mono text-gold text-lg font-semibold">0{i + 1}</span>
                <h4 className="font-serif text-lg sm:text-xl text-white font-medium">{p.title}</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Call to Action */}
      <section className="py-20 sm:py-28 bg-[#0A0A0C]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-gold"></span>
            <p className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-gold">
              BECOME A FELLOW
            </p>
            <span className="w-6 h-[1px] bg-gold"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
            Petition for Privé Fellowship
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-zinc-300 font-light max-w-xl mx-auto leading-relaxed">
            Fellowship is curated through personal peer invitations and High Advisory clearance to ensure mutual respect and high-trust alignment.
          </p>

          <div className="pt-2">
            <button
              onClick={onRequestInvitation}
              className="bg-gold hover:bg-gold-light text-[#0A0A0C] px-10 py-4 text-xs uppercase tracking-[0.26em] font-semibold transition-all duration-300 shadow-gold-glow inline-flex items-center gap-3"
            >
              <span>SUBMIT FELLOWSHIP DOSSIER</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThePrivePage;
