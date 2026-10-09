import React from 'react';
import { ArrowRight, ShieldCheck, EyeOff, Hourglass } from 'lucide-react';

export const PrivateByDesign = ({ onRequestInvitation, onOpenProcess }) => {
  const tenets = [
    {
      num: '01',
      title: 'STRICT VETTING',
      description:
        'Every participant is personally vetted by the High Advisory Board. No commercial solicitations, transactional pitches, or press presence are ever permitted.',
      icon: ShieldCheck,
    },
    {
      num: '02',
      title: 'CHATHAM HOUSE PROTOCOL',
      description:
        'Conversations within the room remain strictly within the room. Complete discretion ensures authentic vulnerability, truth, and genuine strategic alignment.',
      icon: EyeOff,
    },
    {
      num: '03',
      title: 'MEASURED & UNHURRIED',
      description:
        'Unlike frantic industrial conferences, our salons afford unhurried time across days for deep intellectual discourse and sovereign camaraderie.',
      icon: Hourglass,
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-[#08080A] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Grand Palace Archway Interior Image */}
          <div className="lg:col-span-5 relative group">
            <div className="relative overflow-hidden border border-gold/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85"
                alt="Grand palace arch overlooking royal dining room"
                className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md border border-white/10">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium">
                  Jaipur Sanctuary
                </p>
                <p className="font-serif text-sm text-zinc-200 italic mt-0.5">
                  Restricted Access · By High Advisory Clearance
                </p>
              </div>
            </div>
            {/* Subtle decorative gold line */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-gold/40 pointer-events-none"></div>
          </div>

          {/* Right Column: Ethos & Tenets */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="w-5 h-[1px] bg-gold"></span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">
                  Ethos
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.08] tracking-tight">
                PRIVATE BY <br />
                <span className="gold-gradient-text italic">DESIGN.</span>
              </h2>

              <blockquote className="border-l-2 border-gold/60 pl-5 py-2 my-4">
                <p className="font-serif text-lg sm:text-xl text-zinc-200 italic font-light leading-relaxed">
                  “The quality of the room matters infinitely more than the size of the crowd.”
                </p>
              </blockquote>
            </div>

            {/* Tenets List */}
            <div className="space-y-6 pt-2">
              {tenets.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-5 group">
                    <div className="flex-shrink-0">
                      <div className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:border-gold group-hover:bg-gold/10 transition-colors">
                        <span className="font-mono text-xs font-semibold">{item.num}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-sm uppercase tracking-wider text-white font-medium group-hover:text-gold-light transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Read the Ethos Button */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenProcess}
                className="bg-gold hover:bg-gold-light text-[#0A0A0C] px-7 py-3 text-xs uppercase tracking-[0.24em] font-semibold transition-all duration-300 shadow-gold-glow flex items-center gap-2"
              >
                <span>Read The Ethos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onRequestInvitation}
                className="border border-white/20 hover:border-gold text-zinc-300 hover:text-gold px-6 py-3 text-xs uppercase tracking-[0.22em] font-medium transition-colors"
              >
                Petition The Board
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateByDesign;
