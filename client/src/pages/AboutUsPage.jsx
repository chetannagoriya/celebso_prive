import React from 'react';
import { Crown, Shield, Landmark, Sparkles, Feather, Compass, HeartHandshake, ArrowRight } from 'lucide-react';

export const AboutUsPage = ({ onNavigate, onRequestInvitation }) => {
  const tenets = [
    {
      num: 'I',
      title: 'Silence Over Noise',
      desc: 'The loudest voice in the room is rarely the most consequential. True power moves quietly through private covenants rather than public spectacle.',
    },
    {
      num: 'II',
      title: 'Intimacy Over Scale',
      desc: 'Thirty curated minds seated in a non-hierarchical round will accomplish more in one candlelit evening than five thousand strangers at a trade expo.',
    },
    {
      num: 'III',
      title: 'Dynasty Over Quarters',
      desc: 'We measure outcomes across generations, not quarterly earnings calls. Sovereign capital must steward institutions built to survive centuries.',
    },
    {
      num: 'IV',
      title: 'Equal Sovereign Dignity',
      desc: 'There are no keynote stages, no VIP badges, and no sponsor booths inside the sanctum. Every fellow sits as an intellectual equal.',
    },
    {
      num: 'V',
      title: 'Sanctuary of Unfiltered Candor',
      desc: 'The codified Chatham House Rule frees participants to speak truth on global liquidity shifts, sovereign risk, and deep tech disruption.',
    },
    {
      num: 'VI',
      title: 'Living Heritage Custody',
      desc: 'We convene only in authentic heritage palaces, historic embassies, and mountain sanctuaries to keep ancestral culture alive.',
    },
    {
      num: 'VII',
      title: 'Inviolable Discretion',
      desc: 'Zero photography. Zero social media check-ins. Discretion is not merely a feature; it is our foundation.',
    },
  ];

  const milestones = [
    {
      year: '2023',
      title: 'The Jaipur Genesis',
      desc: 'First private salon convened in an ancestral fort courtyard with twelve founding family office principals and industrial patrons.',
    },
    {
      year: '2024',
      title: 'The GCC Conclave Expansion',
      desc: 'Establishment of the Emirates and Doha chapters, integrating sovereign wealth fund allocators and deep tech visionaries.',
    },
    {
      year: '2025',
      title: 'The European Sanctums',
      desc: 'Inauguration of the London Mayfair Assembly and the Zurich Private Desk, bridging Old World dynastic wealth with frontier innovation.',
    },
    {
      year: '2026',
      title: 'Global Sovereign Fellowship',
      desc: 'A unified global guild across five permanent chapters, stewarding over $10 Billion in collective capital.',
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 bg-gold/5 text-gold text-[10px] tracking-[0.3em] uppercase">
          <Crown className="w-3.5 h-3.5" />
          <span>The Origin & Ethos</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-wide">
          About <span className="gold-metallic-text italic">Celebso Privé</span>
        </h1>
        <p className="font-serif text-lg sm:text-xl text-zinc-300 italic font-light leading-relaxed">
          “Resurrecting the classical salon tradition of Europe and the royal durbars of ancient kings for the modern sovereign order.”
        </p>
      </div>

      {/* Genesis Story */}
      <div className="border border-gold/30 bg-gradient-to-b from-[#14141A] via-brand-card to-black p-8 sm:p-14 mb-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-[10px] uppercase tracking-[0.28em] text-gold font-mono text-center">
            The Genesis
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white text-center">
            Why Celebso Privé Was Born
          </h2>
          <div className="w-16 h-px bg-gold/50 mx-auto"></div>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            In an era of mass commercialization, modern business conferences have surrendered to transactional banality. Auditoriums echo with buzzwords, stages are sold to aggressive sponsors, and participants exchange business cards that lead nowhere.
          </p>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            CELEBSO PRIVÉ was created by a small circle of sovereign allocators and generational founders who demanded a complete return to dignity. We asked: What if there were a table where no one was pitching, where every person in the room possessed both immense gravity and intellectual generosity, and where the backdrop was a 400-year-old royal fortress illuminated by candlelight?
          </p>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            That table is now known simply as The Room.
          </p>
        </div>
      </div>

      {/* The Sovereign Manifesto (7 Tenets) */}
      <div className="mb-20 space-y-8">
        <div className="text-center space-y-2">
          <p className="text-[10px] uppercase tracking-[0.28em] text-gold font-medium">The Sovereign Code</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">The Seven Tenets</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tenets.map((t) => (
            <div
              key={t.num}
              className="p-8 bg-brand-card border border-white/10 hover:border-gold/40 transition-all space-y-3"
            >
              <span className="font-serif text-2xl text-gold font-semibold tracking-wider">
                {t.num}.
              </span>
              <h3 className="font-serif text-xl text-white font-medium">{t.title}</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Milestones */}
      <div className="p-8 sm:p-12 border border-gold/20 bg-brand-card/50 mb-20 space-y-8">
        <h3 className="font-serif text-2xl sm:text-3xl text-white text-center">
          The Journey of Convergence
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m) => (
            <div key={m.year} className="p-6 bg-black/40 border border-white/5 space-y-2">
              <span className="font-mono text-2xl text-gold font-semibold">{m.year}</span>
              <h4 className="font-serif text-lg text-white font-medium">{m.title}</h4>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Advisory Council Structure */}
      <div className="p-8 sm:p-12 border border-white/10 bg-brand-card space-y-6 mb-20">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <Shield className="w-8 h-8 text-gold mx-auto" />
          <h3 className="font-serif text-2xl sm:text-3xl text-white">The High Advisory Council</h3>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            The Council comprises nine senior fellows drawn equally from sovereign wealth administration, diplomatic heritage, and deep tech science. Their decisions regarding seat allocation and chapter curation are absolute and inviolable.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center p-12 border border-gold/40 bg-gradient-to-r from-black via-brand-card to-black space-y-5">
        <h3 className="font-serif text-3xl sm:text-4xl text-white">
          Begin Your Ingress Into The Fellowship
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-xl mx-auto leading-relaxed">
          Petitions are evaluated with complete confidentiality by the High Advisory Council.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onRequestInvitation}
            className="px-8 py-3.5 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.25em] font-semibold transition-colors"
          >
            Petition For Inclusion
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 border border-gold/60 text-gold hover:bg-gold hover:text-black text-xs uppercase tracking-[0.25em] font-medium transition-colors"
          >
            Connect With Concierge
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
