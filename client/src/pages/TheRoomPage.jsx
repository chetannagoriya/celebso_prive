import React from 'react';
import { 
  Users, 
  EyeOff, 
  ShieldCheck, 
  Flame, 
  Compass, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';

export const TheRoomPage = ({ onNavigate, onRequestInvitation }) => {
  const principles = [
    {
      num: '01',
      title: 'The Intimate Gathering',
      desc: 'Small, curated gatherings create space for conversations that matter. Every participant gets the opportunity to share perspectives, learn from peers, and build meaningful relationships.',
      icon: Users,
    },
    {
      num: '02',
      title: 'Discretion by Design',
      desc: 'The focus stays on the conversation, not the camera. Photography, recordings, and media presence are strictly restricted, ensuring confidential, candid dialogue under Chatham House principles.',
      icon: EyeOff,
    },
    {
      num: '03',
      title: 'Equal Seat at the Table',
      desc: 'No keynote stages, no VIP hierarchies, and no audience rows. Whether managing multi-generational capital or scaling a breakthrough venture, every principal engages as an equal.',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'Long-Term Alignment',
      desc: 'Moving decisively beyond transactional exchanges. The Room is designed to cultivate enduring trust, strategic syndicates, and generational partnerships that extend across years.',
      icon: HeartHandshake,
    },
  ];

  const constituents = [
    {
      title: 'Founders & Builders',
      desc: 'Visionaries and operators building companies that matter across emerging and established industries.',
      share: 'Enterprise Builders',
    },
    {
      title: 'Investors & Capital Partners',
      desc: 'Angel investors, venture capital partners, and family offices deploying patient, strategic capital.',
      share: 'Capital Stewards',
    },
    {
      title: 'Technology & Industry Leaders',
      desc: 'Pioneers advancing artificial intelligence, enterprise platforms, and large-scale industrial execution.',
      share: 'Domain Pioneers',
    },
  ];

  return (
    <div className="bg-[#0A0A0C] text-zinc-100 min-h-screen selection:bg-gold selection:text-black">
      {/* 1. Hero / Editorial Header */}
      <section className="relative pt-36 pb-20 sm:pb-24 border-b border-white/5 overflow-hidden">
        {/* Subtle background ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6 relative z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-gold/30 bg-gold/5 text-gold text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-semibold">
            <Lock className="w-3.5 h-3.5 text-gold" />
            <span>THE SANCTUM OF THIRTY</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-[1.08]">
            The <span className="gold-metallic-text italic">Room</span>
          </h1>

          {/* Pullquote */}
          <blockquote className="max-w-3xl mx-auto py-3">
            <p className="font-serif text-lg sm:text-2xl text-zinc-200 italic font-light leading-relaxed">
              “An intimate setting where founders, investors, and business leaders come together to exchange ideas, build trust, and shape meaningful opportunities — beyond titles and transactions.”
            </p>
          </blockquote>

          {/* Action CTAs */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <button
              onClick={onRequestInvitation}
              className="bg-gold hover:bg-gold-light text-[#0A0A0C] px-8 py-3.5 text-xs uppercase tracking-[0.24em] font-semibold transition-all duration-300 shadow-gold-glow"
            >
              Request Seat Ingress
            </button>
            <button
              onClick={() => onNavigate('gatherings')}
              className="border border-white/20 hover:border-gold text-zinc-300 hover:text-gold px-7 py-3.5 text-xs uppercase tracking-[0.22em] font-medium transition-colors"
            >
              Explore Gatherings
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE PHYSICAL GEOMETRY OF CONNECTION */}
      <section className="py-20 sm:py-28 border-b border-white/5 bg-[#08080A]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="border border-gold/30 bg-gradient-to-b from-[#121217] via-[#0E0E12] to-black p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden text-center">
            {/* Ambient accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-2xl mx-auto space-y-4 mb-10 relative z-10">
              <div className="inline-flex items-center gap-2">
                <span className="w-5 h-[1px] bg-gold"></span>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-gold font-mono font-semibold">
                  THE PHYSICAL GEOMETRY OF CONNECTION
                </p>
                <span className="w-5 h-[1px] bg-gold"></span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
                The Non-Hierarchical Round
              </h2>

              <div className="w-16 h-[1px] bg-gold/50 mx-auto my-3"></div>

              <p className="text-xs sm:text-sm md:text-base text-zinc-300 font-light leading-relaxed">
                At The Room, there is no keynote stage and no back row. Every participant has a seat at the table. Founders, investors, technology leaders, and business visionaries come together in a setting designed for open dialogue, shared perspectives, and meaningful connections.
              </p>
            </div>

            {/* THE GATHERING CIRCLE Interactive Diagram */}
            <div className="space-y-4 pt-2">
              <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-gold/80">
                THE GATHERING CIRCLE
              </p>

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto my-6 flex items-center justify-center">
                {/* Outer concentric rings */}
                <div className="absolute inset-0 rounded-full border border-gold/30"></div>
                <div className="absolute inset-6 rounded-full border border-dashed border-gold/20"></div>

                {/* Center Core */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-950/80 via-black to-black border border-gold/40 flex flex-col items-center justify-center p-2 z-10 shadow-gold-glow">
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
                  const isConfirmed = i < 18; // 18 confirmed
                  return (
                    <div
                      key={i}
                      className="absolute w-3.5 h-3.5 -ml-1.5 -mt-1.5 rounded-full transition-transform hover:scale-150 cursor-pointer group"
                      style={{
                        top: `calc(50% + ${y}px)`,
                        left: `calc(50% + ${x}px)`,
                      }}
                      title={`Seat ${i + 1}: ${isConfirmed ? 'Confirmed Participant' : 'Invitation Pending'}`}
                    >
                      <div
                        className={`w-full h-full rounded-full border ${
                          isConfirmed
                            ? 'bg-gold border-gold shadow-[0_0_8px_rgba(197,160,89,0.8)]'
                            : 'bg-black/90 border-gold/40 hover:border-gold'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Legend & Note */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gold border border-gold shadow-sm"></span>
                    <span>Confirmed Participants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-black/90 border border-gold/50"></span>
                    <span>Invitations Pending</span>
                  </div>
                </div>

                <p className="text-[11px] font-serif text-zinc-500 italic">
                  * Final participant numbers vary by event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PRINCIPLES OF THE ROOM */}
      <section className="py-20 sm:py-28 border-b border-white/5 bg-[#0A0A0C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-14">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-gold"></span>
              <p className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-gold">
                FOUNDATIONAL PILLARS
              </p>
              <span className="w-6 h-[1px] bg-gold"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-wide">
              THE PRINCIPLES OF THE ROOM
            </h2>
            <p className="font-serif text-sm sm:text-base text-zinc-400 italic font-light max-w-xl mx-auto">
              How we protect authentic human connection, intellectual candor, and deep focus.
            </p>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.num}
                  className="p-8 sm:p-10 border border-white/10 bg-[#0E0E12] hover:border-gold/50 transition-all duration-500 space-y-5 group hover:-translate-y-1 shadow-lg hover:shadow-[0_8px_30px_rgba(197,160,89,0.1)] flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-gold text-xs font-semibold tracking-widest px-2.5 py-1 border border-gold/30 bg-gold/5">
                        {p.num}
                      </span>
                      <div className="w-10 h-10 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold group-hover:border-gold transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-gold-light transition-colors">
                      {p.num} — {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-gold transition-colors">
                    <span>Codified Protocol</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHO SITS AT THE TABLE */}
      <section className="py-20 sm:py-24 border-b border-white/5 bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-gold"></span>
              <p className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-gold">
                CURATED COMPOSITION
              </p>
              <span className="w-6 h-[1px] bg-gold"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Who Sits at the Table
            </h2>
            <p className="font-serif text-sm sm:text-base text-zinc-400 italic font-light max-w-xl mx-auto">
              Every room is thoughtfully composed to create meaningful dialogue, high-trust connections, and lasting partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {constituents.map((item, idx) => (
              <div key={idx} className="p-8 bg-[#0E0E12] border border-white/10 space-y-3 hover:border-gold/40 transition-colors">
                <span className="text-gold font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border border-gold/20 inline-block mb-1">
                  {item.share}
                </span>
                <h4 className="font-serif text-xl text-white font-medium">{item.title}</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Invitation CTA */}
      <section className="py-20 sm:py-28 bg-[#0A0A0C]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-gold"></span>
            <p className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-gold">
              RESERVE YOUR SEAT
            </p>
            <span className="w-6 h-[1px] bg-gold"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
            Secure Your Seat in The Room
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-zinc-300 font-light max-w-xl mx-auto leading-relaxed">
            Invitations to The Room are extended on a curated, rolling basis. We look forward to welcoming you into thoughtful dialogue.
          </p>

          <div className="pt-2">
            <button
              onClick={onRequestInvitation}
              className="bg-gold hover:bg-gold-light text-[#0A0A0C] px-10 py-4 text-xs uppercase tracking-[0.26em] font-semibold transition-all duration-300 shadow-gold-glow inline-flex items-center gap-3"
            >
              <span>REQUEST AN INVITATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheRoomPage;
