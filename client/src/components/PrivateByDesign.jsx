import React from 'react';
import privateByDesignImg from '../assets/rooftop-gathering.jpg';

export const PrivateByDesign = ({ onNavigate, onRequestInvitation, onOpenProcess }) => {
  const handleDiscoverPrive = () => {
    if (typeof onNavigate === 'function') {
      onNavigate('the-prive');
    } else {
      window.location.hash = '#/the-prive';
    }
  };

  const handleMeetTheRoom = () => {
    if (typeof onNavigate === 'function') {
      onNavigate('the-room');
    } else {
      window.location.hash = '#/the-room';
    }
  };

  const roles = [
    {
      title: 'FOUNDERS',
      desc: 'Building companies that matter.',
    },
    {
      title: 'INVESTORS',
      desc: 'Backing the next generation of businesses.',
    },
    {
      title: 'FAMILY OFFICES',
      desc: 'Long-term capital and strategic influence.',
    },
    {
      title: 'BUSINESS LEADERS',
      desc: 'Shaping industries and markets.',
    },
    {
      title: 'OPERATORS',
      desc: 'Turning ideas into execution.',
    },
  ];

  return (
    <section id="private-by-design" className="relative py-20 lg:py-28 bg-[#070709] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-Column Unified Presentation matching exact design */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.65fr_1.15fr] items-stretch border border-white/10 shadow-2xl overflow-hidden">
          
          {/* Column 1: Ivory / Sandstone Cream Card */}
          <div className="bg-[#DFD5CA] text-[#1E1B18] p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[440px] lg:min-h-[500px]">
            <div>
              {/* Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[34px] font-normal tracking-tight text-[#1E1B18] leading-[1.15] uppercase">
                PRIVATE BY DESIGN.
              </h2>

              {/* Subtitle / Paragraph */}
              <p className="font-serif text-sm sm:text-base text-[#4A453F] font-light leading-relaxed mt-5">
                The quality of the room matters more than the size of the crowd.
              </p>

              {/* Divider */}
              <div className="w-12 h-[1px] bg-[#9C8F80] my-7 sm:my-8"></div>

              {/* 3 Core Tenets */}
              <div className="space-y-3.5">
                <p className="font-sans text-xs sm:text-[13px] tracking-[0.2em] font-semibold text-[#1F1C18] uppercase">
                  SMALL ROOMS.
                </p>
                <p className="font-sans text-xs sm:text-[13px] tracking-[0.2em] font-semibold text-[#1F1C18] uppercase">
                  EXCEPTIONAL PEOPLE.
                </p>
                <p className="font-sans text-xs sm:text-[13px] tracking-[0.2em] font-semibold text-[#1F1C18] uppercase">
                  MEANINGFUL CONVERSATIONS.
                </p>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-8 sm:pt-10">
              <button
                onClick={handleDiscoverPrive}
                className="inline-flex items-center justify-center gap-3 px-6 py-3 border border-[#8C7B68] text-[#1F1C18] hover:bg-[#1F1C18] hover:text-[#EDE5DA] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 group"
              >
                <span>DISCOVER THE PRIVÉ</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          {/* Column 2: Center Rooftop Gathering Photography */}
          <div className="relative overflow-hidden min-h-[340px] sm:min-h-[420px] lg:min-h-[500px] bg-black">
            <img
              src={privateByDesignImg || '/rooftop-gathering.jpg'}
              alt="Executive evening rooftop gathering overlooking panoramic city skyline with cocktails and candlelight"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle atmospheric vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"></div>
          </div>

          {/* Column 3: Deep Black Luxury Card */}
          <div className="bg-[#09090D] border-t lg:border-t-0 lg:border-l border-[#3D331D]/40 p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[440px] lg:min-h-[500px]">
            <div>
              {/* Heading */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[28px] font-normal tracking-wide text-[#CBA658] uppercase leading-[1.2]">
                WHO SITS <br />
                IN THE ROOM
              </h2>

              {/* 5 Roles List */}
              <div className="mt-7 space-y-4 sm:space-y-4.5">
                {roles.map((item, idx) => (
                  <div key={idx} className="group">
                    <h4 className="font-sans text-xs tracking-[0.22em] font-semibold text-[#EDE4D4] uppercase group-hover:text-gold-light transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#8E8B85] font-light leading-snug mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-8 sm:pt-10">
              <button
                onClick={handleMeetTheRoom}
                className="inline-flex items-center justify-center gap-3 px-6 py-3 border border-[#8B6F38] text-[#CBA658] hover:bg-[#CBA658] hover:text-[#09090D] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 group shadow-sm hover:shadow-gold-glow"
              >
                <span>MEET THE ROOM</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivateByDesign;
