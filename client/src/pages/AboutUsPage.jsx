import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Compass, 
  Users, 
  Target, 
  MessageSquare, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

export const AboutUsPage = ({ onNavigate, onRequestInvitation }) => {
  const principles = [
    {
      num: 'I',
      title: 'Meaning Over Noise',
      desc: 'We prioritise meaningful conversations and relevant introductions over visibility, crowded rooms, and superficial networking.',
    },
    {
      num: 'II',
      title: 'Intimacy Over Scale',
      desc: 'Smaller, thoughtfully curated gatherings create more opportunities for participants to engage, exchange ideas, and build relationships.',
    },
    {
      num: 'III',
      title: 'Long-Term Thinking',
      desc: 'We value relationships and collaborations that extend beyond a single event, supporting sustainable business growth and lasting partnerships.',
    },
    {
      num: 'IV',
      title: 'Equal Respect',
      desc: 'Every participant deserves to be heard and treated with respect, regardless of company size, title, or professional background.',
    },
    {
      num: 'V',
      title: 'Open & Constructive Dialogue',
      desc: 'We encourage honest discussions about entrepreneurship, investment, technology, business challenges, and emerging opportunities.',
    },
    {
      num: 'VI',
      title: 'A Community That Builds',
      desc: 'We bring together founders, investors, technology leaders, and ecosystem partners to encourage learning, collaboration, and mutual growth.',
    },
    {
      num: 'VII',
      title: 'Trust & Discretion',
      desc: 'We respect participants\' privacy and communicate clear expectations around photography, recordings, information sharing, and confidentiality at each gathering.',
    },
  ];

  const approaches = [
    {
      title: 'CURATED GATHERINGS',
      desc: 'Events designed around relevant participants and shared interests.',
      icon: Users,
    },
    {
      title: 'MEANINGFUL INTRODUCTIONS',
      desc: 'Opportunities to connect with founders, investors, and business leaders.',
      icon: Target,
    },
    {
      title: 'STRATEGIC CONVERSATIONS',
      desc: 'Discussions focused on growth, investment, technology, and collaboration.',
      icon: MessageSquare,
    },
    {
      title: 'LASTING RELATIONSHIPS',
      desc: 'A community built around trust, respect, and long-term thinking.',
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="bg-[#0A0A0C] text-zinc-100 min-h-screen selection:bg-gold selection:text-black">
      {/* 1. Hero / Editorial Header */}
      <section className="relative pt-36 pb-20 sm:pb-24 border-b border-white/5 overflow-hidden">
        {/* Subtle background ambient light */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6 relative z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-gold/30 bg-gold/5 text-gold text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-semibold">
            <Compass className="w-3.5 h-3.5 text-gold" />
            <span>THE ORIGIN & ETHOS</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-[1.08]">
            About <span className="gold-metallic-text italic">Celebso Privé</span>
          </h1>

          {/* Pullquote */}
          <blockquote className="max-w-3xl mx-auto py-3">
            <p className="font-serif text-lg sm:text-2xl text-zinc-200 italic font-light leading-relaxed">
              “Bringing ambitious founders, investors, and business leaders together through meaningful conversations, trusted relationships, and a shared vision for growth.”
            </p>
          </blockquote>

          {/* Action CTAs */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <button
              onClick={onRequestInvitation}
              className="bg-gold hover:bg-gold-light text-[#0A0A0C] px-8 py-3.5 text-xs uppercase tracking-[0.24em] font-semibold transition-all duration-300 shadow-gold-glow"
            >
              Request Invitation
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

      {/* 2. THE GENESIS: Why Celebso Privé Was Born */}
      <section className="py-20 sm:py-28 border-b border-white/5 bg-[#08080A]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="border border-gold/30 bg-gradient-to-b from-[#121217] via-[#0E0E12] to-black p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Ambient corner accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-6 relative z-10 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="w-5 h-[1px] bg-gold"></span>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-gold font-mono font-semibold">
                  THE GENESIS
                </p>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
                Why Celebso Privé Was Born
              </h2>

              <div className="w-16 h-[1px] bg-gold/50 my-4 mx-auto sm:mx-0"></div>

              <div className="space-y-5 text-xs sm:text-sm md:text-[15px] text-zinc-300 font-light leading-relaxed">
                <p>
                  Business networking is often built around crowded conferences, brief introductions, and transactional conversations. Yet some of the most valuable opportunities begin in smaller rooms, where people have the time to exchange ideas, understand challenges, and build genuine trust.
                </p>

                <p className="font-serif text-base sm:text-lg text-white italic font-light pl-4 border-l-2 border-gold/60 py-1">
                  Celebso Privé was created to make those connections possible.
                </p>

                <p>
                  Through curated founders’ circles, investor roundtables, and private business gatherings, Celebso Privé brings together entrepreneurs, investors, and industry leaders to explore opportunities, exchange perspectives, and strengthen India's entrepreneurial ecosystem.
                </p>

                <p className="text-zinc-200 font-medium pt-2">
                  The idea is simple: bring the right people together and give meaningful conversations room to grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CELEBSO CODE: The Seven Principles */}
      <section className="py-20 sm:py-28 border-b border-white/5 bg-[#0A0A0C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-14">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-gold"></span>
              <p className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-gold">
                THE CELEBSO CODE
              </p>
              <span className="w-6 h-[1px] bg-gold"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-wide">
              The Seven Principles
            </h2>
            <p className="font-serif text-sm sm:text-base text-zinc-400 italic font-light max-w-xl mx-auto">
              Foundational codes that guide every gathering, every room, and every relationship.
            </p>
          </div>

          {/* 7 Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {principles.map((p, idx) => (
              <div
                key={p.num}
                className={`p-8 border border-white/10 bg-[#0E0E12] hover:border-gold/50 transition-all duration-500 space-y-4 group hover:-translate-y-1 shadow-lg hover:shadow-[0_8px_30px_rgba(197,160,89,0.1)] ${
                  idx === 6 ? 'md:col-span-2 lg:col-span-3 lg:max-w-xl lg:mx-auto' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl text-gold font-normal tracking-wider">
                    {p.num}.
                  </span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                    Principle 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl text-white font-medium group-hover:text-gold-light transition-colors">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR VISION */}
      <section className="py-20 sm:py-24 border-b border-white/5 bg-[#08080A]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-gold"></span>
            <p className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-gold">
              OUR VISION
            </p>
            <span className="w-6 h-[1px] bg-gold"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
            Building Relationships That Move Business Forward
          </h2>

          <div className="space-y-4 text-xs sm:text-sm md:text-base text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
            <p>
              Celebso Privé aims to create a trusted environment where India's founders, investors, and business leaders can connect, discover opportunities, and build relationships that contribute to the next generation of businesses.
            </p>
            <p>
              Our focus extends beyond individual events. It is about strengthening the connections between entrepreneurship, capital, technology, and talent.
            </p>
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH */}
      <section className="py-20 sm:py-28 border-b border-white/5 bg-[#0A0A0C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-14">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-gold"></span>
              <p className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-gold">
                METHODOLOGY
              </p>
              <span className="w-6 h-[1px] bg-gold"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-wide">
              OUR APPROACH
            </h2>
            <p className="font-serif text-sm sm:text-base text-zinc-400 italic font-light max-w-xl mx-auto">
              How we construct high-trust environments for generational enterprise.
            </p>
          </div>

          {/* 4 Approach Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {approaches.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 border border-white/10 bg-[#0E0E12] hover:border-gold/50 transition-all duration-500 space-y-5 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold group-hover:border-gold group-hover:bg-gold/15 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-serif text-base sm:text-lg text-white font-medium tracking-wide group-hover:text-gold-light transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-gold transition-colors">
                    <span>Pillar 0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. THE NEXT CHAPTER (Call to Action) */}
      <section className="py-20 sm:py-28 bg-[#08080A]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[1px] bg-gold"></span>
            <p className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-gold">
              THE NEXT CHAPTER
            </p>
            <span className="w-6 h-[1px] bg-gold"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
            Every meaningful relationship begins with a conversation.
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-zinc-300 font-light max-w-xl mx-auto leading-relaxed">
            Join Celebso Privé to explore upcoming founders’ circles, investor roundtables, and curated business gatherings.
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

          {/* Tagline / Badge */}
          <div className="pt-10 border-t border-white/10 space-y-1">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-gold font-medium font-sans">
              CELEBSO PRIVÉ — A CELEBSO INITIATIVE
            </p>
            <p className="font-serif text-sm sm:text-base text-zinc-400 italic font-light">
              Building an Ecosystem, Not Just a Company.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
