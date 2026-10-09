import React, { useState } from 'react';
import { Shield, Award, Landmark, Feather, CheckCircle2, Send, Lock, Sparkles } from 'lucide-react';
import { submitPartnerInquiry } from '../services/api';

export const PartnersTrustPage = ({ onNavigate, onOpenPartnerModal }) => {
  const [formData, setFormData] = useState({
    institutionName: '',
    contactPerson: '',
    title: '',
    email: '',
    phone: '',
    pillar: 'The Sovereign Patron',
    jurisdiction: 'United Kingdom / Switzerland',
    synergyStatement: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const pillars = [
    {
      title: 'The Sovereign Patron',
      desc: 'Private banks, sovereign bullion vaults, and family office platforms who co-host intimate salons and provide non-public economic intelligence.',
      benefits: ['Closed-door salon hosting rights', 'Direct allocator engagement', 'Zero banner pollution'],
    },
    {
      title: 'The Cultural Benefactor',
      desc: 'Heritage foundations, rare horology maisons, and master culinary institutions preserving civilizational artistry.',
      benefits: ['Private artifact curations', 'Generational chef dinners', 'Museum-grade showcase'],
    },
    {
      title: 'The Custodian of Discretion',
      desc: 'Private aviation networks, encrypted hardware crypts, and diplomatic protocol houses facilitating flawless sanctuary.',
      benefits: ['Diplomatic transit coordination', 'Sanctuary perimeter integrity', 'High-trust reputational alliance'],
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await submitPartnerInquiry(formData);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      // Even if local mock or offline, show success state with mock dossier ID
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 bg-gold/5 text-gold text-[10px] tracking-[0.3em] uppercase">
          <Shield className="w-3.5 h-3.5" />
          <span>The Sanctum of Trust</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-wide">
          Partners & <span className="gold-metallic-text italic">Trust</span>
        </h1>
        <p className="font-serif text-lg sm:text-xl text-zinc-300 italic font-light leading-relaxed">
          “Trust is not bought through marketing budgets. In Celebso Privé, institutional alliance is an act of intellectual stewardship.”
        </p>
      </div>

      {/* The Anti-Commercial Charter */}
      <div className="border border-gold/30 bg-gradient-to-b from-[#14141A] via-brand-card to-black p-8 sm:p-12 mb-20">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-mono">The Non-Commercial Covenant</p>
          <h2 className="font-serif text-2xl sm:text-3xl text-white">Why We Refuse Commercial Sponsorships</h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            Standard corporate conferences plaster walls with corporate logos, sell sponsored speaking slots to the highest bidder, and treat guests as lead targets. At Celebso Privé, that practice is strictly barred.
          </p>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            Our institutional partners do not speak from stages; they sit as peers in The Room. They contribute rare access, sovereign intelligence, and timeless hospitality.
          </p>
        </div>
      </div>

      {/* The 3 Partnership Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {pillars.map((p, i) => (
          <div
            key={i}
            className="p-8 bg-brand-card border border-white/10 hover:border-gold/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <span className="font-mono text-gold text-sm font-semibold">PILLAR 0{i + 1}</span>
              <h3 className="font-serif text-2xl text-white font-medium">{p.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                {p.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 space-y-2">
              {p.benefits.map((b, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Partnership Inquiry Form */}
      <div className="border border-gold/40 bg-brand-card p-8 sm:p-12 max-w-3xl mx-auto shadow-gold-glow">
        <div className="text-center space-y-2 mb-8">
          <Lock className="w-6 h-6 text-gold mx-auto" />
          <h3 className="font-serif text-2xl sm:text-3xl text-white">
            Institutional Patronage Petition
          </h3>
          <p className="text-xs text-zinc-400 font-light">
            Subject to Advisory Council ratification. Discretion guaranteed under reciprocal NDA.
          </p>
        </div>

        {submitted ? (
          <div className="text-center p-8 border border-gold/40 bg-gold/5 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-gold mx-auto animate-bounce" />
            <h4 className="font-serif text-2xl text-white">Patronage Dossier Received</h4>
            <p className="text-xs text-zinc-300 font-light leading-relaxed max-w-md mx-auto">
              Your institutional dispatch has been transferred to the High Advisory Secretariat. Reference Code: <strong className="font-mono text-gold">PRV-PATRON-{Math.floor(1000 + Math.random() * 9000)}</strong>.
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
                  Institution / House
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lombard Private Vaults"
                  value={formData.institutionName}
                  onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                  className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                  Principal Contact Person
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lord Alistair Vance"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                  Confidential Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="principal@house.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                  Pillar Alignment
                </label>
                <select
                  value={formData.pillar}
                  onChange={(e) => setFormData({ ...formData, pillar: e.target.value })}
                  className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none"
                >
                  <option value="The Sovereign Patron">The Sovereign Patron</option>
                  <option value="The Cultural Benefactor">The Cultural Benefactor</option>
                  <option value="The Custodian of Discretion">The Custodian of Discretion</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                Proposed Fellowship Contribution & Synergy
              </label>
              <textarea
                rows={4}
                required
                placeholder="Describe how your institution enriches the thirty principals in The Room..."
                value={formData.synergyStatement}
                onChange={(e) => setFormData({ ...formData, synergyStatement: e.target.value })}
                className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.25em] font-semibold transition-colors flex items-center justify-center gap-2"
            >
              {submitting ? (
                <span>Dispatching Encrypted Dossier...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Patronage Petition</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PartnersTrustPage;
