import React from 'react';
import { Shield, Lock, Award, Quote, CheckCircle, Sparkles, Feather } from 'lucide-react';

export const PastGuestsPage = ({ onNavigate, onRequestInvitation }) => {
  const testimonials = [
    {
      archetype: 'Managing Principal, Multi-Century European Single Family Office',
      location: 'Geneva / London · $4.5B AUM',
      chapter: 'Jaipur Conclave Fellow',
      quote: 'In thirty years of stewarding dynastic capital, I have never attended a table so free of commercial noise. Over midnight fireside single malts at the fortress, we finalized a $200M cross-border industrial co-investment that no investment bank could have facilitated.',
      tag: 'Generational Capital',
    },
    {
      archetype: 'Founder & CEO, Sovereign AI Compute & Semiconductor Titan',
      location: 'San Francisco / Dubai · Frontier Infrastructure',
      chapter: 'Dubai Sky Citadel Fellow',
      quote: 'Tech conferences have devolved into stadium spectacles and sponsor pitches. Celebso Privé stripped everything away. Seated across from sovereign wealth allocators and sovereign energy ministers, we solved our 500-megawatt compute cluster partnership before dessert was cleared.',
      tag: 'Deep Tech & Compute',
    },
    {
      archetype: 'Fourth-Generation Industrialist & Heritage Trustee',
      location: 'Mumbai / London · Conglomerate & Maritime Assets',
      chapter: 'Jaipur Conclave Fellow',
      quote: 'The dignity of The Room is its defining virtue. Arriving through the torchlit gates into an intimate circle of thirty equals felt like stepping into an ancient council of states. The relationships formed here have stood unbroken.',
      tag: 'Industrial Dynasty',
    },
    {
      archetype: 'Senior Executive Director, Gulf Sovereign Wealth Fund',
      location: 'Abu Dhabi / Doha · Sovereign Allocator',
      chapter: 'Alpine Sovereign Retreat Fellow',
      quote: 'Zero press cameras. Zero LinkedIn posts. Absolute Chatham House sanctity. This is the only room globally where sovereign institutions can address geopolitical friction and capital allocation with uninhibited honesty.',
      tag: 'Sovereign Institutional',
    },
    {
      archetype: 'Master Horologist & Archival Antiquities Custodian',
      location: 'Zurich / Vienna · Private Museum Founder',
      chapter: 'London Mayfair Assembly Fellow',
      quote: 'Presenting unique 18th-century royal complications to thirty individuals who value artisanal permanence over hype was an unforgettable privilege. Celebso Privé treats culture not as decoration, but as the bedrock of civilization.',
      tag: 'Arts & Horology',
    },
    {
      archetype: 'Biotech & Longevity Sciences Pioneer',
      location: 'Oxford / Boston · Cellular Regeneration',
      chapter: 'St. Moritz Conclave Fellow',
      quote: 'When sovereign capital and long-horizon science meet without quarterly reporting pressures, true leaps happen. The intellectual caliber in The Room is second to none.',
      tag: 'Frontier Biology',
    },
  ];

  const virtues = [
    {
      title: 'Cryptographic Anonymity',
      desc: 'We never publish guest lists, attendance rosters, or commercial sponsor tags. A principal’s presence is known solely to the other twenty-nine fellows in the sanctum.',
    },
    {
      title: 'Faraday Protocol Perimeter',
      desc: 'All devices are surrendered at the outer gatehouse into physical Faraday pouches. Zero camera lenses or recording sensors ever breach The Room.',
    },
    {
      title: 'Lifelong Reciprocal Bond',
      desc: 'Fellows who have broken bread in The Room enter a discrete guild of mutual counsel and sovereign solidarity across global chapters.',
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 bg-gold/5 text-gold text-[10px] tracking-[0.3em] uppercase">
          <Award className="w-3.5 h-3.5" />
          <span>The Sovereign Chronicle</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-wide">
          Past <span className="gold-metallic-text italic">Guests</span>
        </h1>
        <p className="font-serif text-lg sm:text-xl text-zinc-300 italic font-light leading-relaxed">
          “In accordance with our inviolable code of discretion, attendee identities remain anonymized into sovereign archetypes.”
        </p>
      </div>

      {/* Discretion Covenant Banner */}
      <div className="p-8 border border-gold/30 bg-gradient-to-b from-brand-card via-[#111116] to-black mb-16 text-center space-y-3">
        <div className="flex items-center justify-center gap-2 text-gold text-xs uppercase tracking-[0.25em]">
          <Lock className="w-4 h-4" />
          <span>The Sovereign Discretion Covenant</span>
        </div>
        <p className="font-serif text-base sm:text-lg text-zinc-200 italic max-w-2xl mx-auto">
          “What transpires within the circle remains within the circle. Our past guests represent over $10 Billion in sovereign assets and enterprise value, yet their privacy remains inviolable.”
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-8 bg-brand-card border border-white/10 hover:border-gold/40 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Quote className="w-6 h-6 text-gold/40 group-hover:text-gold transition-colors" />
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-gold px-2 py-0.5 border border-gold/30 bg-gold/5">
                  {t.tag}
                </span>
              </div>

              <p className="font-serif text-sm sm:text-base text-zinc-200 italic font-light leading-relaxed">
                “{t.quote}”
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 space-y-1">
              <h4 className="font-serif text-base text-white font-medium">
                {t.archetype}
              </h4>
              <p className="text-[11px] text-zinc-400 font-mono tracking-wider">
                {t.location}
              </p>
              <p className="text-[10px] text-gold/80 font-mono uppercase tracking-widest pt-1">
                ✦ {t.chapter}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* The 3 Virtues of Fellowship */}
      <div className="p-8 sm:p-12 border border-gold/20 bg-brand-card/50 mb-20">
        <h3 className="font-serif text-2xl sm:text-3xl text-white mb-8 text-center">
          The Foundations of Fellow Discretion
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {virtues.map((v, idx) => (
            <div key={idx} className="space-y-3">
              <span className="font-mono text-gold text-lg font-semibold">0{idx + 1}</span>
              <h4 className="font-serif text-xl text-white font-medium">{v.title}</h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Ingress CTA */}
      <div className="text-center p-12 border border-gold/40 bg-gradient-to-r from-black via-brand-card to-black space-y-5">
        <Shield className="w-8 h-8 text-gold mx-auto" />
        <h3 className="font-serif text-3xl sm:text-4xl text-white">
          Enter The Sovereign Chronicle
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-xl mx-auto leading-relaxed">
          Join thirty sovereign minds in our upcoming winter salon. Each seat is ratified on intellectual and dynastic merit.
        </p>
        <button
          onClick={onRequestInvitation}
          className="px-8 py-3.5 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.25em] font-semibold transition-colors"
        >
          Petition For Fellowship Inclusion
        </button>
      </div>
    </div>
  );
};

export default PastGuestsPage;
