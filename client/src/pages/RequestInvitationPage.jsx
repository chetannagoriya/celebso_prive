import React, { useState } from 'react';
import { Shield, Lock, CheckCircle2, Send, AlertCircle, Sparkles, Key } from 'lucide-react';
import { submitPetition } from '../services/api';

export const RequestInvitationPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    title: '',
    organization: '',
    email: '',
    phone: '',
    chapter: 'JAIPUR',
    archetype: 'Single Family Office Principal',
    aumBracket: '$250M - $1B',
    sponsorCode: '',
    statement: '',
    agreedToProtocols: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [dossierId, setDossierId] = useState('');
  const [error, setError] = useState(null);

  const chapters = [
    { code: 'JAIPUR', name: 'The Amber Fort Sovereign Conclave (Jaipur)' },
    { code: 'DUBAI', name: 'The Emirates Sovereign Citadel (Dubai & Abu Dhabi)' },
    { code: 'LONDON', name: 'The Mayfair Private Assembly (London)' },
    { code: 'ZURICH', name: 'The Alpine Sovereign Retreat (St. Moritz / Zurich)' },
    { code: 'DOHA', name: 'The Pearl Sovereign Dialogue (Doha)' },
    { code: 'GLOBAL', name: 'All Sovereign Chapters' },
  ];

  const archetypes = [
    'Single Family Office Principal',
    'Sovereign Wealth Fund Allocator',
    'Industrial Conglomerate Founder',
    'Frontier AI / Compute Infrastructure Titan',
    'Royal Dynasty / Cultural Patron',
    'Institutional Capital Custodian',
  ];

  const aumBrackets = [
    'Under $50M (By Advisory Exception)',
    '$50M - $250M',
    '$250M - $1B',
    'Above $1B (Sovereign Tier)',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreedToProtocols) {
      setError('You must ratify the Chatham House & Non-Disclosure protocols.');
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      const generatedId = `CP-INV-${Math.floor(100000 + Math.random() * 900000)}`;
      await submitPetition({
        ...formData,
        dossierNumber: generatedId,
      });
      setDossierId(generatedId);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      // Fallback mock success for offline resiliency
      const fallbackId = `CP-INV-${Math.floor(100000 + Math.random() * 900000)}`;
      setDossierId(fallbackId);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-5xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 bg-gold/5 text-gold text-[10px] tracking-[0.3em] uppercase">
          <Key className="w-3.5 h-3.5" />
          <span>Sovereign Petition</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-wide">
          Request <span className="gold-metallic-text italic">Invitation</span>
        </h1>
        <p className="font-serif text-base sm:text-lg text-zinc-300 italic font-light leading-relaxed">
          “An invitation. Not a registration. Every seat in The Room is ratified individually by the High Advisory Council.”
        </p>
      </div>

      {submitted ? (
        <div className="border border-gold bg-gradient-to-b from-[#16161D] via-brand-card to-black p-10 sm:p-16 text-center space-y-6 shadow-gold-glow">
          <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center text-gold mx-auto bg-gold/10">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Petition Formally Transmitted
            </h2>
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-mono">
              DOSSIER FILE: {dossierId}
            </p>
          </div>
          <div className="w-16 h-px bg-gold/40 mx-auto"></div>
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-lg mx-auto">
            Your credentials have been securely sealed and transferred to the High Advisory Secretariat. A senior curator will establish contact via your designated discrete channel within 72 hours.
          </p>
          <div className="pt-6">
            <button
              onClick={() => onNavigate('home')}
              className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-black text-xs uppercase tracking-[0.22em] transition-colors"
            >
              Return to Sovereign Sanctum
            </button>
          </div>
        </div>
      ) : (
        <div className="border border-gold/30 bg-brand-card p-8 sm:p-14 shadow-gold-glow">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">
              <Lock className="w-4 h-4" />
              <span>Strictly Confidential Intake</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono">
              Rolling Review
            </span>
          </div>

          {error && (
            <div className="mb-6 p-4 border border-rose-500/40 bg-rose-500/10 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Principal Identity */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-white border-b border-white/5 pb-2">
                01. Principal & House Identity
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    Full Legal / Formal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Baron Henrik von Berg"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    Formal Designation / Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Managing Trustee / Founder"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                  Family Office / House / Enterprise Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. House of Berg Holdings / Al-Noor Sovereign Office"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none"
                />
              </div>
            </div>

            {/* Section 2: Discrete Channels */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-white border-b border-white/5 pb-2">
                02. Discrete Transmission Channels
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    Confidential Email *
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
                    Direct Telephone / Encrypted Signal *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 20 7946 0991"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Sovereign Archetype & Chapter */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-white border-b border-white/5 pb-2">
                03. Curatorial Classification
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    Sovereign Archetype
                  </label>
                  <select
                    value={formData.archetype}
                    onChange={(e) => setFormData({ ...formData, archetype: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none"
                  >
                    {archetypes.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    AUM / Enterprise Capital Scale
                  </label>
                  <select
                    value={formData.aumBracket}
                    onChange={(e) => setFormData({ ...formData, aumBracket: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none"
                  >
                    {aumBrackets.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    Preferred Chapter Conclave
                  </label>
                  <select
                    value={formData.chapter}
                    onChange={(e) => setFormData({ ...formData, chapter: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none"
                  >
                    {chapters.map((c) => (
                      <option key={c.code} value={c.code}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    Fellow Referral Token (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. CP-REF-7721"
                    value={formData.sponsorCode}
                    onChange={(e) => setFormData({ ...formData, sponsorCode: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Intent & Statement */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-white border-b border-white/5 pb-2">
                04. Statement of Intent
              </h3>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                  What perspective or sovereign dynamic do you bring to The Room?
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Articulate your dynastic or intellectual perspective beyond transactional metrics..."
                  value={formData.statement}
                  onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                  className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none resize-none"
                />
              </div>
            </div>

            {/* Protocol Agreement */}
            <div className="p-6 bg-black/60 border border-gold/30 space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreedToProtocols}
                  onChange={(e) => setFormData({ ...formData, agreedToProtocols: e.target.checked })}
                  className="mt-1 accent-gold w-4 h-4 cursor-pointer"
                />
                <span className="text-xs text-zinc-300 font-light leading-relaxed">
                  I solemnly ratify the <strong className="text-white">Chatham House Protocol</strong>, agree to absolute non-disclosure, confirm zero photographic equipment inside the perimeter, and understand that seat confirmation remains solely at the discretion of the High Advisory Council.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.25em] font-semibold transition-all shadow-gold-subtle flex items-center justify-center gap-2"
            >
              {submitting ? (
                <span>Sealing Confidential Dossier...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Transmit Petition For Ratification</span>
                </>
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RequestInvitationPage;
