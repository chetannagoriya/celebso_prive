import React from 'react';
import { Wine, Music, MessageCircle, Handshake } from 'lucide-react';
import experienceEstateImg from '../assets/experience-estate-sunset.jpg';
import barImg from '../assets/catalyst-bar.webp';

export const TheExperienceSection = () => {
  const experiences = [
    {
      icon: Wine,
      title: 'Hospitality',
      desc: 'Thoughtful hospitality designed to make guests feel welcomed and at ease in an elegant setting.',
    },
    {
      icon: Music,
      title: 'Atmosphere',
      desc: 'Light entertainment and fantastic ambiance creating the perfect atmosphere for celebration.',
    },
    {
      icon: MessageCircle,
      title: 'Conversation',
      desc: 'Natural conversations between industry peers in a relaxed and elegant environment.',
    },
    {
      icon: Handshake,
      title: 'Connection',
      desc: 'Building relationships with peers who understand the journey and the challenges.',
    },
  ];

  return (
    <section id="experience" className="relative py-20 lg:py-28 bg-[#09090C] border-t border-white/5 overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mb-7"></div>
          <p className="text-gold text-[11px] tracking-[0.45em] uppercase font-sans mb-5 font-medium">
            The Evening
          </p>
          <h2 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] font-light text-white mb-6 leading-tight tracking-tight">
            The Experience
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/45 max-w-xl mx-auto leading-relaxed font-light">
            Set within the ballroom environment of DLF Camellias, the evening is designed to feel rare, private, and deeply intentional.
          </p>
        </div>

        {/* 2 Side-by-side Cinematic Frames */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative overflow-hidden aspect-[4/3] bg-black/60 border border-white/10 shadow-2xl group">
            <img
              src={experienceEstateImg || '/experience-estate-sunset.jpg'}
              alt="The Camellias Estate and sunset arrival"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none"></div>
            <div className="absolute bottom-4 left-5 pointer-events-none">
              <span className="text-[9px] uppercase font-mono tracking-[0.22em] text-white/80">
                The Camellias Estate · Arrival
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden aspect-[4/3] bg-black/60 border border-white/10 shadow-2xl group">
            <img
              src={barImg || '/catalyst-bar.webp'}
              alt="Refined lounge and cocktail bar ambience"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none"></div>
            <div className="absolute bottom-4 left-5 pointer-events-none">
              <span className="text-[9px] uppercase font-mono tracking-[0.22em] text-white/80">
                Refined Bar & Cocktails
              </span>
            </div>
          </div>
        </div>

        {/* 4 Pillars with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-10 border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-gold/40 transition-all duration-500 relative group overflow-hidden text-center"
              >
                <div className="relative z-10 inline-flex items-center justify-center w-14 h-14 mb-8 border border-white/10 text-white/40 group-hover:border-gold/50 group-hover:text-gold transition-all duration-500 rounded-sm">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white/90 mb-4 relative z-10 font-light group-hover:text-gold transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="font-sans text-sm text-white/40 leading-relaxed relative z-10 font-light">
                  {exp.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TheExperienceSection;
