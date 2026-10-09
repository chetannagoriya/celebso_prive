import React from 'react';
import { Users, EyeOff, ShieldCheck, Flame, Compass, Lock, Sliders, CheckCircle } from 'lucide-react';

export const TheRoomPage = ({ onNavigate, onRequestInvitation }) => {
  const tenets = [
    {
      icon: Users,
      title: 'The Sacred 30-Seat Cap',
      desc: 'Psychologists call it the boundary of uninhibited trust. When a room exceeds thirty minds, performance replaces authenticity. At thirty, every voice is heard, every gaze is met, and alliances are forged for life.',
    },
    {
      icon: EyeOff,
      title: 'Zero Audiovisual Recording',
      desc: 'No cameras. No lanyards. No microphones. No social media check-ins. What is articulated inside The Room remains forever between the sandstone walls and the candles.',
    },
    {
      icon: ShieldCheck,
      title: 'Codified Chatham House Protocol',
      desc: 'Principals speak with ruthless candor on geopolitical risk, balance-sheet allocations, and succession dilemmas, shielded by absolute confidentiality.',
    },
    {
      icon: Flame,
      title: 'Ancestral Atmosphere',
      desc: 'We never convene in corporate hotel conference halls. The Room is always an authentic heritage palace, private diplomatic salon, or mountain citadel illuminated by real beeswax candlelight.',
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 bg-gold/5 text-gold text-[10px] tracking-[0.3em] uppercase">
          <Lock className="w-3.5 h-3.5" />
          <span>The Sanctum of Thirty</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-wide">
          The <span className="gold-metallic-text italic">Room</span>
        </h1>
        <p className="font-serif text-lg sm:text-xl text-zinc-300 italic font-light leading-relaxed">
          “An architectural and intellectual sanctuary where thirty sovereign minds gather without stages, scripts, or vanity.”
        </p>
      </div>

      {/* The 30 Seats Interactive Visualizer */}
      <div className="relative border border-gold/40 bg-gradient-to-b from-[#111116] via-brand-card to-black p-8 sm:p-14 mb-20 text-center shadow-gold-glow">
        <div className="max-w-2xl mx-auto space-y-4 mb-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-mono">The Physical Geometry of Intimacy</p>
          <h2 className="font-serif text-2xl sm:text-3xl text-white">The Non-Hierarchical Round</h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            In The Room, there is no head of the table, no keynote stage, and no back row. Thirty custom velvet and teak armchairs circle an ancestral courtyard or salon, placing sovereign capital, industrial leadership, and deep technology eye-to-eye.
          </p>
        </div>

        {/* Circular Seat Diagram Representation */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto my-8 flex items-center justify-center">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border border-gold/30"></div>
          <div className="absolute inset-6 rounded-full border border-dashed border-gold/20"></div>

          {/* Center Hearth */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-950 via-amber-800/40 to-black border border-gold/40 flex flex-col items-center justify-center p-2 z-10 shadow-gold-glow">
            <Flame className="w-6 h-6 text-gold animate-pulse mb-1" />
            <span className="text-[8px] uppercase tracking-[0.2em] text-gold font-semibold">The Hearth</span>
          </div>

          {/* 30 Discrete Points Representing Seats */}
          {[...Array(30)].map((_, i) => {
            const angle = (i * 360) / 30;
            const rad = (angle * Math.PI) / 180;
            const r = 120; // radius
            const x = Math.round(r * Math.cos(rad));
            const y = Math.round(r * Math.sin(rad));
            const isFilled = i < 18; // 18 confirmed seats
            return (
              <div
                key={i}
                className="absolute w-3.5 h-3.5 -ml-1.5 -mt-1.5 rounded-full transition-transform hover:scale-150 cursor-pointer group"
                style={{
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                }}
                title={`Seat ${i + 1}: ${isFilled ? 'Ratified Sovereign Fellow' : 'Available For Advisory Clearance'}`}
              >
                <div
                  className={`w-full h-full rounded-full border ${
                    isFilled
                      ? 'bg-gold border-gold shadow-[0_0_8px_rgba(197,160,89,0.8)]'
                      : 'bg-black/80 border-gold/40 hover:border-gold'
                  }`}
                />
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono pt-4 text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gold border border-gold"></span>
            <span>Ratified Fellows (18 Confirmed)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-black/80 border border-gold/40"></span>
            <span>Pending Advisory Clearance (12 Open)</span>
          </div>
        </div>
      </div>

      {/* The 4 Architectural Tenets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {tenets.map((t, i) => {
          const Icon = t.icon;
          return (
            <div
              key={i}
              className="p-8 sm:p-10 bg-brand-card border border-white/10 hover:border-gold/40 transition-all space-y-4"
            >
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold bg-gold/5">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-white font-medium">{t.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                {t.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Curation Mechanism */}
      <div className="p-8 sm:p-12 border border-gold/30 bg-brand-card/70 mb-20 space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium">Algorithmic Chemistry</p>
          <h3 className="font-serif text-3xl text-white">How Seats Are Curated</h3>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            The Advisory Board does not fill seats by seniority or sponsorship fees. Each room is composed as a symphonic orchestra of complementary sovereign actors:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-zinc-300">
          <div className="p-5 bg-black/50 border border-white/5 space-y-2">
            <p className="text-gold uppercase tracking-widest text-[11px] font-mono">40% Capital Allocators</p>
            <p className="text-zinc-400 font-light leading-relaxed">
              Family office principals and sovereign fund officers with multi-century horizons and capital liquidity.
            </p>
          </div>
          <div className="p-5 bg-black/50 border border-white/5 space-y-2">
            <p className="text-gold uppercase tracking-widest text-[11px] font-mono">35% Enterprise Architects</p>
            <p className="text-zinc-400 font-light leading-relaxed">
              Founders of physical conglomerates, AI computing titans, and critical global infrastructure operators.
            </p>
          </div>
          <div className="p-5 bg-black/50 border border-white/5 space-y-2">
            <p className="text-gold uppercase tracking-widest text-[11px] font-mono">25% Cultural Stewards</p>
            <p className="text-zinc-400 font-light leading-relaxed">
              Royal houses, heritage patrons, and collectors of rare civilizational art and ancient horology.
            </p>
          </div>
        </div>
      </div>

      {/* Petition CTA */}
      <div className="text-center p-12 border border-gold/40 bg-gradient-to-r from-black via-brand-card to-black space-y-5">
        <ShieldCheck className="w-8 h-8 text-gold mx-auto" />
        <h3 className="font-serif text-3xl sm:text-4xl text-white">
          Secure Your Seat In The Room
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-xl mx-auto leading-relaxed">
          The Advisory Board evaluates petitions on a rolling basis. All submissions are held in strict cryptographic confidence.
        </p>
        <button
          onClick={onRequestInvitation}
          className="px-8 py-3.5 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.25em] font-semibold transition-colors"
        >
          Petition For Seat Inclusion
        </button>
      </div>
    </div>
  );
};

export default TheRoomPage;
