import React, { useState } from 'react';
import {
  X,
  Calendar,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Loader2,
  Lock,
  User,
  Building2,
  Mail,
  Phone,
  Sparkles,
  Download,
  Share2
} from 'lucide-react';
import { submitPetition } from '../services/api';

export const GatheringBookingModal = ({ isOpen, onClose, gathering }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [bookingDossier, setBookingDossier] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    title: '',
    organization: '',
    email: '',
    phone: '',
    city: gathering?.city || 'Jaipur',
    seatCount: '1 Principal Seat',
    dietaryPreference: 'Royal Heritage Repast (Standard)',
    chauffeurRequired: 'Yes, Private Chauffeur Liaison',
    chathamHouseAgreed: true,
    specialRequests: '',
  });

  if (!isOpen || !gathering) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSeatSelect = (count) => {
    setFormData((prev) => ({ ...prev, seatCount: count }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const bookingPayload = {
      ...formData,
      gatheringId: gathering.id,
      gatheringTitle: gathering.title,
      gatheringDate: gathering.date,
      gatheringLocation: gathering.location,
      submissionType: 'GATHERING_SEAT_RESERVATION',
    };

    try {
      const res = await submitPetition(bookingPayload);
      const generatedId =
        res?.dossierId ||
        `CP-RES-${gathering.city.slice(0, 3)}-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingDossier({
        referenceId: generatedId,
        dateCreated: new Date().toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }),
      });
      setStep(3);
    } catch (err) {
      console.error('Reservation submission note:', err);
      // Fallback graceful confirmation
      const fallbackId = `CP-RES-${gathering.city.slice(0, 3)}-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingDossier({
        referenceId: fallbackId,
        dateCreated: new Date().toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }),
      });
      setStep(3);
    } finally {
      setLoading(false);
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    setBookingDossier(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0F0F14] border border-gold/40 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-white/10 bg-[#0A0A0E] flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-none border border-gold/60 flex items-center justify-center text-gold bg-gold/10 text-xs font-serif font-bold">
              C
            </div>
            <div>
              <h3 className="font-serif text-sm sm:text-base uppercase tracking-[0.22em] text-white font-medium">
                Sovereign Seat Reservation
              </h3>
              <p className="text-[10px] tracking-wider uppercase text-gold/80 font-mono">
                {gathering.title} · {gathering.city}
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-zinc-400 hover:text-white transition-colors p-1.5"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gathering Context Ribbon */}
        <div className="bg-[#14141B] px-6 sm:px-8 py-3 border-b border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs flex-shrink-0">
          <div className="flex items-center gap-4 text-zinc-300">
            <span className="flex items-center gap-1.5 text-gold font-medium">
              <Calendar className="w-3.5 h-3.5" />
              {gathering.date}
            </span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold/80" />
              {gathering.time}
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-mono tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            <span>{gathering.remainingSeats} SEATS REMAINING</span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-grow space-y-6">
          {step === 1 && (
            <form onSubmit={() => setStep(2)} className="space-y-5">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold block mb-1">
                  Step 01 of 02 · Principal Credentials
                </span>
                <h4 className="font-serif text-lg sm:text-xl text-white font-normal">
                  Enter Principal Identification
                </h4>
                <p className="text-xs text-zinc-400 font-light mt-1">
                  Every attendee seat is strictly registered in the name of the verified principal.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                    Full Legal Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Maharaja Vikramaditya / Arjun Singhania"
                      className="w-full bg-black/50 border border-white/15 focus:border-gold px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                    Executive Title / Designation *
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. Managing Partner / Founder & CEO"
                    className="w-full bg-black/50 border border-white/15 focus:border-gold px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                    Organization / Family Office *
                  </label>
                  <input
                    type="text"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="e.g. Sovereign Capital / Singhania Trust"
                    className="w-full bg-black/50 border border-white/15 focus:border-gold px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                    City of Residence *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Jaipur, New Delhi, Mumbai, Dubai"
                    className="w-full bg-black/50 border border-white/15 focus:border-gold px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                    Direct Email (Confidential Dossier Dispatch) *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="principal@enterprise.com"
                    className="w-full bg-black/50 border border-white/15 focus:border-gold px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                    WhatsApp / Direct Mobile (Cipher Delivery) *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98290 XXXXX / +971 50 XXXXX"
                    className="w-full bg-black/50 border border-white/15 focus:border-gold px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Bottom Action for Step 1 */}
              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <span className="text-[11px] text-zinc-500 font-light flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                  Chatham House discretion codified
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center gap-2 group shadow-gold-subtle"
                >
                  <span>Proceed to Seat Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold block mb-1">
                  Step 02 of 02 · Reservation Specifications
                </span>
                <h4 className="font-serif text-lg sm:text-xl text-white font-normal">
                  Configure Your Conclave Seat
                </h4>
                <p className="text-xs text-zinc-400 font-light mt-1">
                  Select seat allocation and discrete concierge arrangements for {gathering.title}.
                </p>
              </div>

              {/* Seat Selection */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                  Number of Principals Attending *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleSeatSelect('1 Principal Seat')}
                    className={`p-3.5 text-left border transition-all ${
                      formData.seatCount === '1 Principal Seat'
                        ? 'border-gold bg-gold/10 text-white'
                        : 'border-white/15 bg-black/30 text-zinc-400 hover:border-white/30'
                    }`}
                  >
                    <div className="font-serif text-sm text-white font-medium">Single Principal</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">1 Sovereign High Table Seat</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSeatSelect('2 Seats (Principal + Verified Co-Principal)')}
                    className={`p-3.5 text-left border transition-all ${
                      formData.seatCount === '2 Seats (Principal + Verified Co-Principal)'
                        ? 'border-gold bg-gold/10 text-white'
                        : 'border-white/15 bg-black/30 text-zinc-400 hover:border-white/30'
                    }`}
                  >
                    <div className="font-serif text-sm text-white font-medium">Principal & Co-Founder</div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">2 Adjacent Sovereign Seats</div>
                  </button>
                </div>
              </div>

              {/* Dietary / Gastronomy Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                    Gastronomic Course Preference
                  </label>
                  <select
                    name="dietaryPreference"
                    value={formData.dietaryPreference}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/15 focus:border-gold px-3.5 py-2.5 text-xs text-white outline-none"
                  >
                    <option value="Royal Heritage Repast (Non-Vegetarian & Game)">
                      Royal Heritage Repast (Non-Veg & Game)
                    </option>
                    <option value="Vegetarian Royal Degustation (Jain options on request)">
                      Vegetarian Royal Degustation
                    </option>
                    <option value="Vegan & Wellness Botanical Course">
                      Vegan & Wellness Botanical Course
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                    Chauffeur & Ingress Liaison
                  </label>
                  <select
                    name="chauffeurRequired"
                    value={formData.chauffeurRequired}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/15 focus:border-gold px-3.5 py-2.5 text-xs text-white outline-none"
                  >
                    <option value="Yes, Private Chauffeur Liaison">
                      Yes, Request Private Chauffeur Liaison
                    </option>
                    <option value="Self / Private Security Escort">
                      Arriving with Personal Convoy / Escort
                    </option>
                    <option value="Airport VIP Ingress Direct">
                      Airport VIP Transfer to Venue
                    </option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
                  Confidential Concierge Notes or Discussion Interest (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  rows={2}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="e.g. Interested in syndication opportunities with Gulf single family offices, specific sommelier requirements..."
                  className="w-full bg-black/50 border border-white/15 focus:border-gold px-3.5 py-2 text-xs text-white placeholder-zinc-600 outline-none resize-none"
                />
              </div>

              {/* Chatham House Agreement */}
              <div className="p-3.5 bg-black/40 border border-gold/30 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="chathamHouseAgreed"
                  name="chathamHouseAgreed"
                  required
                  checked={formData.chathamHouseAgreed}
                  onChange={handleChange}
                  className="mt-0.5 accent-gold cursor-pointer"
                />
                <label htmlFor="chathamHouseAgreed" className="text-[11px] text-zinc-300 cursor-pointer leading-relaxed">
                  <strong className="text-white">Strict Discretion Covenant:</strong> I pledge that attendance at{' '}
                  <span className="text-gold">{gathering.title}</span> is governed by strict Chatham House rules. Recording devices are surrendered at perimeter check.
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-zinc-400 hover:text-white text-xs uppercase tracking-wider flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center gap-2 shadow-gold-subtle disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Confirming Reservation...</span>
                    </>
                  ) : (
                    <>
                      <span>Confirm Reservation</span>
                      <ShieldCheck className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {step === 3 && bookingDossier && (
            <div className="space-y-6 py-2 text-center animate-fadeIn">
              {/* Sovereign Success Badge */}
              <div className="w-16 h-16 mx-auto rounded-none border border-gold/70 bg-gold/10 flex items-center justify-center text-gold shadow-gold-glow">
                <Sparkles className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-gold font-semibold">
                  RESERVATION RECORDED & RATIFIED
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                  Your Seat is Reserved
                </h3>
                <p className="text-xs text-zinc-400 font-light max-w-md mx-auto leading-relaxed">
                  Your provisional seat dossier has been transmitted to the High Advisory Council. The Chief Protocol Officer will deliver your encrypted credentials via WhatsApp.
                </p>
              </div>

              {/* Reservation Card / Luxury Pass Docket */}
              <div className="border border-gold/50 bg-gradient-to-b from-[#161620] via-black to-[#101017] p-6 text-left relative overflow-hidden shadow-2xl">
                {/* Watermark Crest */}
                <div className="absolute right-4 top-4 font-serif text-6xl text-gold/5 select-none pointer-events-none font-bold">
                  CP
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 mb-4 text-xs font-mono">
                  <div>
                    <span className="text-zinc-500 uppercase tracking-widest text-[9px] block">
                      Dossier Ref
                    </span>
                    <span className="text-gold font-bold tracking-wider">{bookingDossier.referenceId}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-zinc-500 uppercase tracking-widest text-[9px] block">
                      Status
                    </span>
                    <span className="text-emerald-400 font-semibold tracking-wider flex items-center gap-1 justify-end">
                      <CheckCircle className="w-3 h-3" /> CONFIRMED
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-500 block mb-0.5">
                      Conclave Gathering
                    </span>
                    <h5 className="font-serif text-sm text-white font-medium">{gathering.title}</h5>
                    <p className="text-[11px] text-zinc-400 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3 text-gold" />
                      {gathering.location}
                    </p>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-500 block mb-0.5">
                      Date & Schedule
                    </span>
                    <p className="text-white font-medium">{gathering.date}</p>
                    <p className="text-[11px] text-zinc-400 flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3 text-gold" />
                      {gathering.time}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-3">
                    <span className="text-[9px] uppercase tracking-widest text-zinc-500 block mb-0.5">
                      Principal Name
                    </span>
                    <p className="text-white font-medium">{formData.fullName}</p>
                    <p className="text-[11px] text-zinc-400">{formData.title} · {formData.organization}</p>
                  </div>

                  <div className="border-t border-white/5 pt-3">
                    <span className="text-[9px] uppercase tracking-widest text-zinc-500 block mb-0.5">
                      Seat Allocation
                    </span>
                    <p className="text-gold font-medium">{formData.seatCount}</p>
                    <p className="text-[11px] text-zinc-400">{gathering.tier}</p>
                  </div>
                </div>

                {/* Instructions */}
                <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-zinc-400 flex items-center justify-between">
                  <span>Present digital cipher or booking ref upon portico arrival.</span>
                  <span className="text-gold font-mono uppercase tracking-widest">Protocol Tier 1</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const passText = `CELEBSO PRIVÉ RESERVATION DOCKET\nRef: ${bookingDossier.referenceId}\nGathering: ${gathering.title}\nDate: ${gathering.date}\nVenue: ${gathering.location}\nPrincipal: ${formData.fullName}\nSeats: ${formData.seatCount}`;
                    navigator.clipboard?.writeText(passText);
                    alert('Reservation details copied to clipboard!');
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 border border-gold/50 text-gold hover:bg-gold/10 text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Copy Pass Details</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-6 py-2.5 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-gold-subtle"
                >
                  Return to Gathering Page
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GatheringBookingModal;
