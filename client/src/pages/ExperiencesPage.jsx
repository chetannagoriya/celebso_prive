import React from 'react';
import { Compass, Sparkles, Feather, Wine, Flame, Plane, Moon, Shield, ArrowRight } from 'lucide-react';

import expPalace from '../assets/experiences/exp-palace.jpg';
import expAviation from '../assets/experiences/exp-aviation.jpg';
import expRooftop from '../assets/rooftop-gathering.jpg';
import expHorology from '../assets/experiences/exp-horology.jpg';
import expBanquet from '../assets/experiences/exp-banquet.jpg';
import expAlpine from '../assets/experiences/exp-alpine.jpg';

export const ExperiencesPage = ({ onNavigate, onRequestInvitation }) => {
  const experiences = [
    {
      id: 'palace-soiree',
      icon: Feather,
      title: 'Palace & Fortress Soirées',
      subtitle: 'Living Heritage & Ancestral Majesty',
      location: 'Jaipur, Udaipur & Jodhpur',
      image: expPalace,
      description: 'Step into 400-year-old corridors illuminated only by beeswax candles and royal mashals (torches). Private welcome by traditional royal trumpeters, rose-petal carpets, and access to private heritage wings usually sealed to the public.',
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
      location: 'Geneva · London · Dubai · New Delhi',
      image: expAviation,
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
      image: expRooftop,
      description: 'When the formal repast concludes and midnight arrives, true truth begins. Seated on open terraces and by roaring hearths with rare single malts, thirty principals debate macro risks, lineage dilemmas, and secret technological breakthroughs until dawn.',
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
      image: expHorology,
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
      location: 'Diwan-e-Khas & Dining Chambers',
      image: expBanquet,
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
      location: 'St. Moritz & Private Gulf Islands',
      image: expAlpine,
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
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-gold/30 bg-gold/5 text-gold text-[10px] tracking-[0.3em] uppercase">
          <Compass className="w-3.5 h-3.5" />
          <span>Curated Immersions</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight">
          Bespoke <span className="gold-gradient-text italic font-normal">Experiences</span>
        </h1>
        <p className="font-serif text-base sm:text-lg text-zinc-300 italic font-light leading-relaxed">
          “Every Celebso Privé immersion is a theatrical synthesis of sovereign heritage, rare culinary arts, and high-trust camaraderie.”
        </p>
        <div className="w-16 h-[1px] bg-gold/40 mx-auto pt-1"></div>
      </div>

      {/* Grid of Experiences with Visual Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {experiences.map((exp) => {
          const Icon = exp.icon;
          return (
            <div
              key={exp.id}
              className="bg-brand-card border border-white/10 hover:border-gold/50 transition-all duration-500 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Experience Cover Image */}
                <div className="relative h-52 w-full overflow-hidden border-b border-white/5 bg-black">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/20 to-black/30"></div>
                  <div className="absolute top-3.5 left-3.5">
                    <span className="text-[9px] font-mono tracking-widest text-gold bg-black/80 px-2.5 py-1 border border-gold/30 backdrop-blur-sm">
                      {exp.location}
                    </span>
                  </div>
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/80 border border-gold/40 flex items-center justify-center text-gold backdrop-blur-sm group-hover:border-gold group-hover:bg-gold/20 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-gold-light transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold/80 font-mono mt-1">
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
              </div>

              <div className="p-6 sm:p-7 pt-0">
                <div className="pt-4 border-t border-white/5">
                  <button
                    onClick={() => onNavigate('request-invitation')}
                    className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-gold hover:text-white py-2.5 transition-colors group/btn"
                  >
                    <span>Experience Ingress</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
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
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
            Commission a Bespoke Private Salon
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            Sovereign fellows may commission the Celebso Privé Secretariat to curate an exclusive thirty-seat salon for their personal dynasty, sovereign fund, or enterprise.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-3.5 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.22em] font-semibold whitespace-nowrap transition-colors shadow-gold-glow"
        >
          Commission Concierge
        </button>
      </div>
    </div>
  );
};

export default ExperiencesPage;
