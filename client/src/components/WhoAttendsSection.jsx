import React from 'react';
import roomImg from '../assets/room-fireplace-conclave.jpg';

export const WhoAttendsSection = ({ onNavigate }) => {
  const categories = [
    {
      id: 'founders',
      title: 'Founders',
      desc: "Visionaries building the next generation of companies that will define India's economic landscape.",
    },
    {
      id: 'investors',
      title: 'Investors',
      desc: 'VCs, angels and growth investors deploying capital with conviction and foresight.',
    },
    {
      id: 'family-offices',
      title: 'Family Offices',
      desc: 'Principals and CIOs managing multi-generational wealth with a long-term perspective.',
    },
    {
      id: 'operators',
      title: 'Operators',
      desc: 'Seasoned leaders scaling organizations with operational excellence and strategic vision.',
    },
    {
      id: 'business-leaders',
      title: 'Business Leaders',
      desc: "CEOs and executives driving transformation across India's largest enterprises.",
    },
  ];

  const handleClick = (id) => {
    if (onNavigate) {
      onNavigate('the-room');
    }
  };

  return (
    <section id="room" className="relative py-14 sm:py-20 lg:py-28 bg-[#070709] border-t border-white/5 overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[170px] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-16">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mb-5 sm:mb-7"></div>
          <p className="text-gold text-[10px] sm:text-[11px] tracking-[0.35em] sm:tracking-[0.45em] uppercase font-sans mb-4 sm:mb-5 font-medium">
            Who Attends
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[5.5rem] font-light text-white leading-tight tracking-tight">
            The Room
          </h2>
        </div>

        {/* Featured Split Hero: Left Statement Card + Right Ballroom Image */}
        <div className="mb-8 grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-5 items-stretch">
          <div className="p-6 sm:p-12 border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent flex flex-col justify-end min-h-[220px] sm:min-h-[300px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            <p className="relative z-10 text-gold text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.35em] uppercase font-mono mb-4 sm:mb-6 font-medium">
              Honoring Catalysts
            </p>
            <p className="relative z-10 font-serif text-2xl sm:text-4xl text-white/90 leading-snug font-light">
              An evening celebrating the people shaping India's future.
            </p>
          </div>

          <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] bg-black/60 border border-white/10 shadow-2xl group">
            <img
              src={roomImg || '/room-fireplace-conclave.jpg'}
              alt="The Room conclave and fireside dialogue"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none"></div>
            <div className="absolute bottom-4 left-5 sm:bottom-5 sm:left-6 pointer-events-none">
              <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-[0.25em] text-gold/90">
                The Room · Fireside Dialogue
              </span>
            </div>
          </div>
        </div>

        {/* 5 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleClick(cat.id)}
              className="p-6 sm:p-10 border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent hover:border-gold/40 transition-all duration-500 relative group overflow-hidden cursor-pointer block"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <h3 className="font-serif text-2xl sm:text-[1.75rem] text-white/90 mb-4 group-hover:text-gold transition-colors duration-300 relative z-10 font-light">
                {cat.title}
              </h3>
              
              <p className="font-sans text-sm text-white/45 leading-relaxed relative z-10 font-light">
                {cat.desc}
              </p>

              <div className="mt-7 flex items-center gap-2 text-gold/60 group-hover:text-gold text-[10px] tracking-[0.22em] uppercase font-mono opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 relative z-10">
                <span>Learn more</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoAttendsSection;
