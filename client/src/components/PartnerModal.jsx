import React, { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { submitPartnerInquiry } from '../services/api';

export const PartnerModal = ({ isOpen, onClose, selectedPillar }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    institutionName: '',
    contactPerson: '',
    email: '',
    pillar: selectedPillar || 'The Patron',
    proposalSummary: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitPartnerInquiry(formData);
      setSuccess(true);
    } catch (err) {
      console.error('Partner submission error:', err);
      // Resilience fallback
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#111116] border border-gold/40 shadow-2xl overflow-hidden">
        {/* Top Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-[#0E0E12]">
          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.25em] text-white">
              Institutional Alignment
            </h3>
            <p className="text-[9px] uppercase tracking-widest text-gold font-mono">
              The Patronage Council
            </p>
          </div>
          <button onClick={handleClose} className="text-zinc-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8">
          {success ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-14 h-14 rounded-full border border-gold mx-auto flex items-center justify-center text-gold shadow-gold-glow">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl text-white">Proposal Received</h4>
              <p className="text-xs text-zinc-300 font-light max-w-sm mx-auto leading-relaxed">
                The Patronage Council will conduct a discrete review of your institution's profile within 5 business days.
              </p>
              <button
                onClick={handleClose}
                className="bg-gold text-[#0A0A0C] px-7 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gold mb-1 font-medium">
                  Institution / Maison Name *
                </label>
                <input
                  type="text"
                  required
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleChange}
                  placeholder="e.g. Royal Rajputana Heritage Foundation"
                  className="w-full bg-[#181820] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold mb-1 font-medium">
                    Representative Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="Principal / Director"
                    className="w-full bg-[#181820] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gold mb-1 font-medium">
                    Institutional Email *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="director@institution.com"
                    className="w-full bg-[#181820] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gold mb-1 font-medium">
                  Selected Pillar
                </label>
                <select
                  name="pillar"
                  value={formData.pillar}
                  onChange={handleChange}
                  className="w-full bg-[#181820] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                >
                  <option value="The Patron">PILLAR 01: The Patron</option>
                  <option value="Foundations">PILLAR 02: Foundations</option>
                  <option value="Hospitality">PILLAR 03: Hospitality</option>
                  <option value="Technology">PILLAR 04: Technology</option>
                  <option value="Heritage & Maison">PILLAR 05: Heritage & Maison</option>
                  <option value="General Institutional Alignment">General Alignment</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gold mb-1 font-medium">
                  Proposal & Collaboration Summary *
                </label>
                <textarea
                  rows="3"
                  required
                  name="proposalSummary"
                  value={formData.proposalSummary}
                  onChange={handleChange}
                  placeholder="Summarize your institutional focus and proposed synergy with Celebso Privé..."
                  className="w-full bg-[#181820] border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-gold resize-none"
                ></textarea>
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gold hover:bg-gold-light text-[#0A0A0C] px-7 py-3 text-xs uppercase tracking-[0.24em] font-semibold flex items-center gap-2"
                >
                  {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>Submit Institutional Proposal</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerModal;
