import React from 'react';
import { ArrowRight, Utensils, Users, Sparkles } from 'lucide-react';

export const BespokeSalons = ({ onRequestInvitation }) => {
  const salons = [
    {
      title: 'THE ROYAL BANQUET',
      tag: 'DINING · HERITAGE',
      description:
        'An extraordinary multi-course culinary journey orchestrated by royal chefs and heritage custodians under candlelit palace arches.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      icon: Utensils,
    },
    {
      title: 'THE ROUNDTABLE',
      tag: 'DISCOURSE · PRIVACY',
      description:
        'Chatham House discussions on sovereign capital, legacy, and multi-generational stewardship among global family office principals.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      icon: Users,
    },
    {
      title: 'THE IMPERIAL SOIRÉE',
      tag: 'CULTURE · ALLIANCE',
      description:
        'Unrushed fellowship amidst nocturnal grandeur, illuminated marble terraces, and timeless acoustic chamber concerts.',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80',
      icon: Sparkles,
    },
  ];

  return (
    <section id="salons" className="relative py-24 bg-[#08080A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column Description */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[1px] bg-gold"></span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-gold font-semibold">
                Three Gatherings
              </span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
              PILLARS OF <br />
              <span className="gold-gradient-text italic">CONVERGENCE</span>
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              Three interconnected experiences designed for deep dialogue, rare insights, and sovereign alliance.
            </p>
            <div className="pt-2">
              <button
                onClick={onRequestInvitation}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold hover:text-gold-light transition-colors group"
              >
                <span>Request Access to Salons</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right 3 Salon Cards */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
            {salons.map((salon, index) => {
              const Icon = salon.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-[#121216] border border-white/10 hover:border-gold/50 transition-all duration-500 overflow-hidden flex flex-col justify-between"
                >
                  {/* Image Header with Gradient */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={salon.image}
                      alt={salon.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/30"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-gold/40 flex items-center justify-center text-gold">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">
                        {salon.tag}
                      </span>
                      <h4 className="font-serif text-lg text-white font-normal mt-1 tracking-wide group-hover:text-gold-light transition-colors">
                        {salon.title}
                      </h4>
                      <p className="text-zinc-400 text-xs font-light mt-2 leading-relaxed">
                        {salon.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <button
                        onClick={onRequestInvitation}
                        className="text-[10px] uppercase tracking-[0.22em] text-zinc-300 group-hover:text-gold transition-colors flex items-center gap-1.5"
                      >
                        <span>Request Access</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BespokeSalons;
