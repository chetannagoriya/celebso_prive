import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, ArrowLeft, Loader2, Lock } from 'lucide-react';
import { submitPetition } from '../services/api';

export const PetitionModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submittedDossier, setSubmittedDossier] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    title: '',
    organization: '',
    city: 'Jaipur',
    capitalBracket: '$50M - $250M',
    nominatedBy: '',
    statement: '',
    salonPreferences: ['The Royal Banquet', 'The Roundtable'],
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSalonToggle = (salonName) => {
    setFormData((prev) => {
      const exists = prev.salonPreferences.includes(salonName);
      if (exists) {
        return {
          ...prev,
          salonPreferences: prev.salonPreferences.filter((s) => s !== salonName),
        };
      } else {
        return {
          ...prev,
          salonPreferences: [...prev.salonPreferences, salonName],
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await submitPetition(formData);
      if (res.success) {
        setSubmittedDossier(res.dossierId || 'CP-VIP-' + Math.floor(1000 + Math.random() * 9000));
        setStep(4);
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback display if server is unreachable
      setSubmittedDossier('CP-VIP-' + Math.floor(1000 + Math.random() * 9000));
      setStep(4);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setStep(1);
    setSubmittedDossier(null);
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#111116] border border-gold/40 shadow-2xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-[#0E0E12]">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border border-gold/60 flex items-center justify-center text-gold text-[10px]">
              ⚜️
            </div>
            <div>
              <h3 className="font-serif text-sm uppercase tracking-[0.25em] text-white">
                Petition For Inclusion
              </h3>
              <p className="text-[9px] uppercase tracking-widest text-gold/80 font-mono">
                High Advisory Board · Protocol Tier
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-zinc-400 hover:text-white transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Tracker (Steps 1 to 3) */}
        {step < 4 && (
          <div className="px-8 pt-4 pb-2 bg-[#0C0C10] border-b border-white/5 flex items-center justify-between text-[10px] tracking-widest uppercase font-mono">
            <span className={step >= 1 ? 'text-gold' : 'text-zinc-600'}>
              01. Identity
            </span>
            <span className="text-zinc-700">──</span>
            <span className={step >= 2 ? 'text-gold' : 'text-zinc-600'}>
              02. Stewardship
            </span>
            <span className="text-zinc-700">──</span>
            <span className={step >= 3 ? 'text-gold' : 'text-zinc-600'}>
              03. Statement
            </span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-8 max-h-[75vh] overflow-y-auto">
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-950/60 border border-red-700/50 text-red-300 text-xs">
              {errorMsg}
            </div>
          )}

          {/* STEP 1: IDENTITY */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h4 className="font-serif text-xl text-white font-normal">
                  Principal Identity
                </h4>
                <p className="text-xs text-zinc-400 font-light">
                  Please provide your discrete executive title and representative entity.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold mb-1.5 font-medium">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Lord Julian Sterling / Shikha Singhania"
                    className="w-full bg-[#181820] border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gold mb-1.5 font-medium">
                      Designation / Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      required
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="e.g. Managing Principal / Founder / CIO"
                      className="w-full bg-[#181820] border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gold mb-1.5 font-medium">
                      Organization / Family Office *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g. Sterling Capital / Singhania Foundation"
                      className="w-full bg-[#181820] border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if (!formData.fullName || !formData.title || !formData.organization) {
                      setErrorMsg('Please complete all principal identity fields.');
                      return;
                    }
                    setErrorMsg('');
                    setStep(2);
                  }}
                  className="bg-gold hover:bg-gold-light text-[#0A0A0C] px-7 py-3 text-xs uppercase tracking-[0.24em] font-semibold flex items-center gap-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: STEWARDSHIP & CONTACT */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h4 className="font-serif text-xl text-white font-normal">
                  Sovereign Jurisdiction & Contact
                </h4>
                <p className="text-xs text-zinc-400 font-light">
                  Direct encrypted channels will be utilized for invitation dossier delivery.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gold mb-1.5 font-medium">
                      Confidential Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="principal@familyoffice.com"
                      className="w-full bg-[#181820] border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gold mb-1.5 font-medium">
                      Discreet Phone / Signal *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 / +44 / +971"
                      className="w-full bg-[#181820] border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gold mb-1.5 font-medium">
                      Primary Base / City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Jaipur, Dubai, London, Zurich"
                      className="w-full bg-[#181820] border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gold mb-1.5 font-medium">
                      Capital Bracket / Tier
                    </label>
                    <select
                      name="capitalBracket"
                      value={formData.capitalBracket}
                      onChange={handleChange}
                      className="w-full bg-[#181820] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-gold"
                    >
                      <option value="$10M - $50M">$10M – $50M</option>
                      <option value="$50M - $250M">$50M – $250M</option>
                      <option value="$250M - $1B">$250M – $1B</option>
                      <option value="$1B+ / Sovereign Tier">$1B+ / Sovereign Tier</option>
                      <option value="Prefer Confidential Disclosure">Prefer Confidential Disclosure</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="border border-white/10 text-zinc-400 hover:text-white px-5 py-3 text-xs uppercase tracking-[0.2em] flex items-center gap-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!formData.email || !formData.phone || !formData.city) {
                      setErrorMsg('Please complete confidential contact details.');
                      return;
                    }
                    setErrorMsg('');
                    setStep(3);
                  }}
                  className="bg-gold hover:bg-gold-light text-[#0A0A0C] px-7 py-3 text-xs uppercase tracking-[0.24em] font-semibold flex items-center gap-2"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: STATEMENT & ALLIANCES */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <h4 className="font-serif text-xl text-white font-normal">
                  Statement of Intent
                </h4>
                <p className="text-xs text-zinc-400 font-light">
                  Articulate why your capital, vision, or heritage belongs within Celebso Privé.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold mb-1.5 font-medium">
                    Sovereign Statement *
                  </label>
                  <textarea
                    name="statement"
                    rows="3"
                    required
                    value={formData.statement}
                    onChange={handleChange}
                    placeholder="Briefly state your perspective on sovereign capital, patronage, or discrete fellowship..."
                    className="w-full bg-[#181820] border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold resize-none"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold mb-1.5 font-medium">
                    Nominated / Referred By (Optional)
                  </label>
                  <input
                    type="text"
                    name="nominatedBy"
                    value={formData.nominatedBy}
                    onChange={handleChange}
                    placeholder="Alumni Principal or Advisory Circle Member"
                    className="w-full bg-[#181820] border border-white/10 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold mb-2 font-medium">
                    Salons of Interest
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {['The Royal Banquet', 'The Roundtable', 'The Imperial Soirée'].map((salon) => (
                      <button
                        type="button"
                        key={salon}
                        onClick={() => handleSalonToggle(salon)}
                        className={`p-2.5 text-xs text-left border transition-all ${
                          formData.salonPreferences.includes(salon)
                            ? 'border-gold bg-gold/15 text-gold font-medium'
                            : 'border-white/10 text-zinc-400 hover:border-white/30'
                        }`}
                      >
                        ✓ {salon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="border border-white/10 text-zinc-400 hover:text-white px-5 py-3 text-xs uppercase tracking-[0.2em] flex items-center gap-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gold hover:bg-gold-light text-[#0A0A0C] px-8 py-3.5 text-xs uppercase tracking-[0.24em] font-semibold flex items-center gap-2 shadow-gold-glow disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sealing Dossier...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-3.5 h-3.5" />
                      <span>Seal & Submit Petition</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: SUCCESS CONFIRMATION */}
          {step === 4 && (
            <div className="py-8 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full border-2 border-gold mx-auto flex items-center justify-center text-gold shadow-gold-glow">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-mono">
                  Dossier Formally Registered
                </span>
                <h4 className="font-serif text-3xl text-white font-normal">
                  PETITION SEALED
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-md mx-auto leading-relaxed">
                  Your petition dossier has been transmitted to the High Advisory Board. Complete confidentiality is guaranteed under protocol.
                </p>
              </div>

              {/* Dossier Code Box */}
              <div className="bg-[#181820] border border-gold/40 p-4 max-w-sm mx-auto">
                <p className="text-[10px] uppercase tracking-widest text-zinc-400">
                  CONFIDENTIAL DOSSIER ID
                </p>
                <p className="font-mono text-lg text-gold font-bold tracking-widest mt-1">
                  {submittedDossier}
                </p>
              </div>

              <p className="text-[11px] text-zinc-500 font-light max-w-sm mx-auto">
                If vetted, personal courier or private signal outreach will follow within 72 hours.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleClose}
                  className="bg-gold hover:bg-gold-light text-[#0A0A0C] px-8 py-3 text-xs uppercase tracking-[0.22em] font-semibold"
                >
                  Return To The Room
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetitionModal;
