import React from 'react';
import { ArrowRight, Shield, HeartHandshake, Castle, Cpu, Gem } from 'lucide-react';

export const PartnerSection = ({ onOpenPartnerModal }) => {
  const pillars = [
    {
      step: 'PILLAR 01',
      title: 'The Patron',
      desc: 'Patrons who wish to host a bespoke salon or dedicate an inaugural chapter under our stewardship.',
      action: 'BECOME A PATRON',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
      icon: Shield,
    },
    {
      step: 'PILLAR 02',
      title: 'Foundations',
      desc: 'Family offices & private foundations funding cultural preservation and sovereign capital initiatives.',
      action: 'ENGAGE FOUNDATIONS',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80',
      icon: HeartHandshake,
    },
    {
      step: 'PILLAR 03',
      title: 'Hospitality',
      desc: 'Iconic palace properties & ultra-luxury retreats chosen as sanctuary settings.',
      action: 'OFFER A SANCTUARY',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      icon: Castle,
    },
    {
      step: 'PILLAR 04',
      title: 'Technology',
      desc: 'Next-generation infrastructure leaders addressing privacy, cryptography & institutional resilience.',
      action: 'EXPLORE ALIGNMENT',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
      icon: Cpu,
    },
    {
      step: 'PILLAR 05',
      title: 'Heritage & Maison',
      desc: 'Generations-old craft houses, bespoke ateliers, and fine horology & spirits maisons.',
      action: 'PARTNER WITH CRAFT',
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80',
      icon: Gem,
    },
  ];

  return (
    <section className="relative py-24 bg-[#0A0A0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[1px] bg-gold"></span>
            <span className="text-[10px] tracking-[0.28em] uppercase text-gold font-semibold">
              Institutional Alliances
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal leading-tight">
            PARTNER WITH <span className="gold-gradient-text italic">THE ROOM</span>
          </h2>

          <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
            We collaborate selectively with institutions and maison brands that share our devotion to discretion, sovereign craft, and untamed hospitality.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#111115] border border-white/5 hover:border-gold/40 flex flex-col justify-between group transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-36 w-full overflow-hidden border-b border-white/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-[#111115]/30 to-black/30"></div>
                    <div className="absolute top-3 left-3">
                      <span className="text-[9px] font-mono tracking-widest text-gold bg-black/70 px-2 py-0.5 border border-gold/30">
                        {item.step}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-black/70 border border-gold/30 flex items-center justify-center text-gold">
                      <Icon className="w-3 h-3" />
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="font-serif text-base text-white font-medium group-hover:text-gold-light transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-zinc-400 text-xs font-light mt-2.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-2">
                  <div className="pt-4 border-t border-white/5">
                    <button
                      onClick={() => onOpenPartnerModal(item.title)}
                      className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-zinc-300 group-hover:text-gold transition-colors"
                    >
                      <span>{item.action}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Institutional Alignment Banner */}
        <div className="bg-[#121217] border border-gold/20 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl text-white font-normal">
              Explore Institutional Alignment
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm font-light">
              Partner with the room to access the most discerning gathering of sovereign leadership.
            </p>
          </div>

          <button
            onClick={() => onOpenPartnerModal('General Institutional Alignment')}
            className="bg-gold hover:bg-gold-light text-[#0A0A0C] px-8 py-3 text-xs uppercase tracking-[0.24em] font-semibold transition-all duration-300 shadow-gold-glow flex-shrink-0"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
