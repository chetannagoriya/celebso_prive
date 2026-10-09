import React, { useState } from 'react';
import { Compass, Sparkles, Feather, Wine, Flame, Plane, Moon, Shield, ArrowRight } from 'lucide-react';

export const ExperiencesPage = ({ onNavigate, onRequestInvitation }) => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      id: 'palace-soiree',
      icon: Feather,
      title: 'Palace & Fortress Soirées',
      subtitle: 'Living Heritage & Ancestral Majesty',
      location: 'Jaipur, Udaipur & Jodhpur Fortresses',
      description: 'Step into 400-year-old corridors illuminated only by beeswax candles and royal mashals (torches). Private welcome by traditional royal royal trumpeters, rose-petal carpets, and access to private heritage wings usually sealed to the public.',
      details: [
        'Exclusive access to private Sheesh Mahal (Mirrored Chambers)',
        'Centuries-old royal classical ragas played on antique sitars',
        'Traditional turban tying and ceremonial brass welcoming',
      ],
    },
    {
      id: 'private-aviation',
      icon: Plane,
      title: 'Aviation Conduits & Private Tarmacs',
      subtitle: 'Seamless Cross-Continental Transit',
      location: 'Geneva · London · Dubai · New Delhi · Doha',
      description: 'Curated direct charter conduits coordinated with sovereign FBOs. Discrete tarmac transfers by private luxury convoys, luggage delivery directly to your palace suite, and diplomatic-grade itinerary handling.',
      details: [
        'Direct FBO tarmac clearances with private customs facilitation',
        'Coordinated private jet syndications between European & Middle East fellows',
        'Armored luxury escort fleets on standby around the clock',
      ],
    },
    {
      id: 'midnight-hearth',
      icon: Flame,
      title: 'Midnight Fireside Dialectics',
      subtitle: 'Uncensored Dialectics Under Starlit Skies',
      location: 'Desert Dunes & Rooftop Terraces',
      description: 'When the formal repast concludes and midnight arrives, true truth begins. Seated by roaring open hearths with rare single malts, thirty principals debate macro risks, lineage dilemmas, and secret technological breakthroughs until dawn.',
      details: [
        'Curated single malt selections dating back to 1968',
        'No pre-set agenda: pure spontaneous philosophical and geopolitical debate',
        'Uninterrupted starry desert tranquility away from city lights',
      ],
    },
    {
      id: 'haute-horology',
      icon: Sparkles,
      title: 'Haute Horology & Archival Treasures',
      subtitle: 'Private Viewings of Museum-Grade Masterpieces',
      location: 'Geneva Vaults & Royal Treasuries',
      description: 'Private viewings of historic timepieces, royal heirlooms, and rare astronomical complications, brought directly to the salon by private collectors and master horologists from Switzerland.',
      details: [
        'Hands-on examination of ultra-rare Patek Philippe, FP Journe, and historic Breguet pocket watches',
        'Private consultations with master watchmakers and gemologists',
        'Direct acquisition access without public auction bidding',
      ],
    },
    {
      id: 'imperial-banquet',
      icon: Wine,
      title: 'Imperial Repast & Rare Cellars',
      subtitle: 'Ancestral Gastronomy by Generational Royal Chefs',
      location: 'Diwan-e-Khas & Royal Dining Chambers',
      description: 'A 7-course feast prepared by generational khansamas (royal master chefs) whose ancestors served Rajput and Mughal emperors. Paired with first-growth Bordeaux and rare Burgundy Grand Crus from private cellars.',
      details: [
        'Secret royal recipes preserved across four centuries',
        'Sommelier-curated vertical tastings of Château Margaux & Domaine de la Romanée-Conti',
        'Hand-hammered gold and silver serviceware',
      ],
    },
    {
      id: 'alpine-sanctuary',
      icon: Moon,
      title: 'Alpine Sanctuaries & Island Conclaves',
      subtitle: 'High-Altitude & Island Seclusion',
      location: 'St. Moritz, Switzerland & Private Gulf Islands',
      description: 'Multi-day retreats secluded high in the Engadin snows or private coral atolls. Skiing accompanied by Olympic champions, private catamaran sailing, and secluded library roundtables with no outside world intrusion.',
      details: [
        'Complete perimeter security and aerial airspace surveillance',
        'Private thermal baths and fireside library lounges',
        'High-altitude alpine thinking sessions on multi-century trusts',
      ],
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 bg-gold/5 text-gold text-[10px] tracking-[0.3em] uppercase">
          <Compass className="w-3.5 h-3.5" />
          <span>Curated Immersions</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-wide">
          Bespoke <span className="gold-metallic-text italic">Experiences</span>
        </h1>
        <p className="font-serif text-lg sm:text-xl text-zinc-300 italic font-light leading-relaxed">
          “Every Celebso Privé immersion is a theatrical synthesis of sovereign heritage, rare culinary arts, and high-trust camaraderie.”
        </p>
      </div>

      {/* Grid of Experiences */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {experiences.map((exp) => {
          const Icon = exp.icon;
          return (
            <div
              key={exp.id}
              className="p-8 bg-brand-card border border-white/10 hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold bg-gold/5 group-hover:border-gold group-hover:bg-gold/10 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.22em] text-zinc-500 font-mono">
                    Privé Exclusive
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-white font-medium group-hover:text-gold-light transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold/80 font-mono mt-0.5">
                    {exp.subtitle}
                  </p>
                </div>

                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {exp.description}
                </p>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  {exp.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-zinc-300">
                      <span className="text-gold mt-0.5">•</span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5">
                <button
                  onClick={() => onNavigate('request-invitation')}
                  className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-gold hover:text-white py-2 transition-colors"
                >
                  <span>Experience Ingress</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Private Concierge Commission */}
      <div className="p-8 sm:p-12 border border-gold/40 bg-gradient-to-r from-[#111116] via-brand-card to-black flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-gold text-xs uppercase tracking-[0.25em]">
            <Shield className="w-4 h-4" />
            <span>Private Concierge Commission</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-white">
            Commission a Bespoke Private Salon
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            Sovereign fellows may commission the Celebso Privé Secretariat to curate an exclusive thirty-seat salon for their personal dynasty, sovereign fund, or enterprise.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-3.5 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.22em] font-semibold whitespace-nowrap transition-colors"
        >
          Commission Concierge
        </button>
      </div>
    </div>
  );
};

export default ExperiencesPage;
