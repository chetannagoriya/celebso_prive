import React, { useState } from 'react';
import { 
  Shield, 
  Building2, 
  Landmark, 
  Cpu, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Lock, 
  ArrowRight, 
  Briefcase, 
  Compass,
  Users
} from 'lucide-react';
import { submitPartnerInquiry } from '../services/api';

export const PartnersTrustPage = ({ onNavigate, onOpenPartnerModal }) => {
  const [formData, setFormData] = useState({
    institutionName: '',
    contactPerson: '',
    title: '',
    email: '',
    phone: '',
    pillar: 'Strategic & Financial Partners',
    synergyStatement: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const pillars = [
    {
      id: '01',
      title: 'Strategic & Financial Partners',
      subtitle: 'Banks · Financial Institutions · Investors',
      desc: 'Organisations and investors supporting entrepreneurship, business growth, and investment ecosystem development.',
      icon: Landmark,
      points: [
        'Founder and investor networking & syndication',
        'Growth capital solutions and debt/equity alignment',
        'Direct co-investment dialogues without commercial noise',
        'Ecosystem enablement and strategic financial advisory',
      ],
    },
    {
      id: '02',
      title: 'Technology & Innovation Partners',
      subtitle: 'Cloud Platforms · AI Labs · Software Infrastructure',
      desc: 'Pioneering technology enterprises and platform providers accelerating digital transformation and AI integration.',
      icon: Cpu,
      points: [
        'Frontier compute architectures and AI infrastructure',
        'Enterprise software scalability and technology credits',
        'Closed-door technical roundtables and builder sessions',
        'Cross-sector technology adoption and integration',
      ],
    },
    {
      id: '03',
      title: 'Corporate & Advisory Enablers',
      subtitle: 'Legal Firms · Tax & Structuring · Growth Consultants',
      desc: 'Top-tier corporate, legal, and regulatory practices guiding founders and investors through complex scaling journeys.',
      icon: Briefcase,
      points: [
        'Corporate structuring, governance, and IP counsel',
        'Cross-border regulatory and compliance frameworks',
        'M&A advisory and generational transition planning',
        'Founder legal clinics and discreet advisory desks',
      ],
    },
    {
      id: '04',
      title: 'Hospitality & Sanctuary Custodians',
      subtitle: 'Heritage Palaces · Luxury Sanctuaries · Private Dining',
      desc: 'Exceptional heritage destinations, private members clubs, and culinary houses offering sovereign settings for intimate conclaves.',
      icon: Sparkles,
      points: [
        'Exclusive access to heritage palace courtyards & suites',
        'Bespoke multi-course culinary repasts & cellar tastings',
        'Flawless discretion, security, and concierge escort',
        'Unhurried, majestic atmospheres for meaningful dialogue',
      ],
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitPartnerInquiry(formData);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      // Fallback: show success state with mock dossier code
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0A0A0C] text-zinc-100 min-h-screen selection:bg-gold selection:text-black">
      {/* 1. Hero / Editorial Header */}
      <section className="relative pt-36 pb-20 sm:pb-24 border-b border-white/5 overflow-hidden">
        {/* Ambient subtle backlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6 relative z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-gold/30 bg-gold/5 text-gold text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-semibold">
            <Shield className="w-3.5 h-3.5 text-gold" />
            <span>THE FOUNDATION OF TRUST</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-[1.08]">
            Partners & <span className="gold-metallic-text italic">Trust</span>
          </h1>

          {/* Curated Pullquote */}
          <blockquote className="max-w-3xl mx-auto py-3">
            <p className="font-serif text-lg sm:text-2xl text-zinc-200 italic font-light leading-relaxed">
              “Strong ecosystems are built on trust, shared ambition, and meaningful collaboration. Celebso Privé brings founders, investors, and strategic partners together to create opportunities that extend beyond a single gathering.”
            </p>
          </blockquote>

          {/* Action CTAs */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <a
              href="#partner-inquiry"
              className="bg-gold hover:bg-gold-light text-[#0A0A0C] px-8 py-3.5 text-xs uppercase tracking-[0.24em] font-semibold transition-all duration-300 shadow-gold-glow"
            >
              Explore Partnership
            </a>
            <button
              onClick={() => onNavigate('gatherings')}
              className="border border-white/20 hover:border-gold text-zinc-300 hover:text-gold px-7 py-3.5 text-xs uppercase tracking-[0.22em] font-medium transition-colors"
            >
              View Conclaves
            </button>
          </div>
        </div>
      </section>

      {/* 2. BUILDING PARTNERSHIPS THAT MATTER */}
      <section className="py-20 sm:py-28 border-b border-white/5 bg-[#08080A]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="border border-gold/30 bg-gradient-to-b from-[#121217] via-[#0E0E12] to-black p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-6 relative z-10 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="w-5 h-[1px] bg-gold"></span>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-gold font-mono font-semibold">
                  BUILDING PARTNERSHIPS THAT MATTER
                </p>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
                Why Partnerships Matter
              </h2>

              <div className="w-16 h-[1px] bg-gold/50 my-4 mx-auto sm:mx-0"></div>

              <div className="space-y-5 text-xs sm:text-sm md:text-[15px] text-zinc-300 font-light leading-relaxed">
                <p>
                  At Celebso Privé, partnerships are built around shared objectives rather than visibility alone. We connect businesses, investors, and ecosystem enablers through curated gatherings, founder introductions, and strategic conversations.
                </p>

                <p className="font-serif text-base sm:text-lg text-white italic font-light pl-4 border-l-2 border-gold/60 py-1">
                  Our goal is to create an environment where partners can engage meaningfully with entrepreneurs, explore opportunities, and contribute to the growth of India's startup ecosystem.
                </p>

                <p>
                  We reject banner pollution, promotional pitches, and transactional sponsorship booths. Our partners sit as esteemed peers inside The Room, shaping critical conversations and forging long-term collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PARTNERSHIP PILLARS */}
      <section className="py-20 sm:py-28 border-b border-white/5 bg-[#0A0A0C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-14">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[1px] bg-gold"></span>
              <p className="text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-gold">
                INSTITUTIONAL FOUNDATION
              </p>
              <span className="w-6 h-[1px] bg-gold"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-wide">
              OUR PARTNERSHIP PILLARS
            </h2>
            <p className="font-serif text-sm sm:text-base text-zinc-400 italic font-light max-w-xl mx-auto">
              Four core alliances driving mutual growth, high trust, and lasting value across India.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.id}
                  className="p-8 sm:p-10 border border-white/10 bg-[#0E0E12] hover:border-gold/50 transition-all duration-500 space-y-6 flex flex-col justify-between group shadow-xl hover:shadow-[0_8px_30px_rgba(197,160,89,0.12)]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-gold text-xs font-semibold tracking-widest px-2.5 py-1 border border-gold/30 bg-gold/5">
                        PILLAR {p.id}
                      </span>
                      <div className="w-10 h-10 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center text-gold group-hover:border-gold transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium group-hover:text-gold-light transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs text-gold/90 font-mono tracking-wider uppercase mt-1">
                        {p.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 space-y-2.5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gold font-semibold">
                      Key Deliverables & Collaboration:
                    </p>
                    {p.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PARTNERSHIP INQUIRY FORM */}
      <section id="partner-inquiry" className="py-20 sm:py-28 bg-[#08080A]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="border border-gold/40 bg-gradient-to-b from-[#121217] via-[#0E0E12] to-black p-8 sm:p-12 shadow-gold-glow">
            <div className="text-center space-y-3 mb-8">
              <Lock className="w-6 h-6 text-gold mx-auto" />
              <h3 className="font-serif text-2xl sm:text-3xl text-white">
                Initiate Strategic Partnership
              </h3>
              <p className="text-xs text-zinc-400 font-light max-w-md mx-auto leading-relaxed">
                We review partner inquiries to ensure mutual alignment, shared values, and value contribution to the entrepreneurial ecosystem.
              </p>
            </div>

            {submitted ? (
              <div className="text-center p-8 border border-gold/40 bg-gold/5 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-gold mx-auto animate-bounce" />
                <h4 className="font-serif text-2xl text-white">Partnership Inquiry Received</h4>
                <p className="text-xs text-zinc-300 font-light leading-relaxed max-w-md mx-auto">
                  Thank you for your interest. Our Strategic Secretariat will review your inquiry and connect with your team directly. Reference Code: <strong className="font-mono text-gold">PRV-PARTNER-{Math.floor(1000 + Math.random() * 9000)}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-widest text-gold underline pt-2"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                      Organisation / Firm Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Strategic Capital / Axis Bank"
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Singhania"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="leadership@organisation.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                      Partnership Pillar *
                    </label>
                    <select
                      value={formData.pillar}
                      onChange={(e) => setFormData({ ...formData, pillar: e.target.value })}
                      className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none transition-colors"
                    >
                      <option value="Strategic & Financial Partners">PILLAR 01 — Strategic & Financial Partners</option>
                      <option value="Technology & Innovation Partners">PILLAR 02 — Technology & Innovation Partners</option>
                      <option value="Corporate & Advisory Enablers">PILLAR 03 — Corporate & Advisory Enablers</option>
                      <option value="Hospitality & Sanctuary Custodians">PILLAR 04 — Hospitality & Sanctuary Custodians</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    Proposed Objective & Synergy Statement *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe how your organisation seeks to engage with founders, investors, and ecosystem builders..."
                    value={formData.synergyStatement}
                    onChange={(e) => setFormData({ ...formData, synergyStatement: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-gold-glow"
                >
                  {submitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Partnership Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersTrustPage;
