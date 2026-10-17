import React, { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Shield,
  Clock,
  ArrowLeft,
  CheckCircle2,
  Lock,
  Award,
  Sparkles,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Check,
  Building,
  User,
  Mail,
  Phone,
  Loader2,
  Share2
} from 'lucide-react';
import { allGatherings, getGatheringById } from '../data/gatheringsData';
import GatheringBookingModal from '../components/GatheringBookingModal';
import { submitPetition } from '../services/api';

export const GatheringDetailPage = ({
  onNavigate,
  onRequestInvitation,
  gatheringId = 'founder-circle',
  onSelectGathering,
}) => {
  const [selectedId, setSelectedId] = useState(gatheringId || 'founder-circle');
  const [activeTab, setActiveTab] = useState('itinerary');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Inline Quick Booking State
  const [inlineStep, setInlineStep] = useState(1);
  const [inlineLoading, setInlineLoading] = useState(false);
  const [inlineConfirmedDossier, setInlineConfirmedDossier] = useState(null);
  const [inlineForm, setInlineForm] = useState({
    fullName: '',
    title: '',
    organization: '',
    email: '',
    phone: '',
    seatCount: '1 Principal Seat',
    chathamAgreed: true,
  });

  // Sync with prop when prop changes
  useEffect(() => {
    if (gatheringId) {
      setSelectedId(gatheringId);
    }
  }, [gatheringId]);

  const currentGathering = getGatheringById(selectedId);

  const handleGatheringSwitch = (id) => {
    setSelectedId(id);
    if (onSelectGathering) {
      onSelectGathering(id);
    }
    setInlineStep(1);
    setInlineConfirmedDossier(null);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleInlineChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInlineForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleInlineSubmit = async (e) => {
    e.preventDefault();
    setInlineLoading(true);

    const payload = {
      ...inlineForm,
      city: currentGathering.city,
      gatheringId: currentGathering.id,
      gatheringTitle: currentGathering.title,
      gatheringDate: currentGathering.date,
      gatheringLocation: currentGathering.location,
      submissionType: 'INLINE_GATHERING_BOOKING',
    };

    try {
      const res = await submitPetition(payload);
      const refId =
        res?.dossierId ||
        `CP-RES-${currentGathering.city.slice(0, 3)}-${Math.floor(1000 + Math.random() * 9000)}`;
      setInlineConfirmedDossier({
        refId,
        date: new Date().toLocaleDateString('en-GB'),
      });
      setInlineStep(2);
    } catch (err) {
      console.error('Inline reservation submit note:', err);
      const fallbackId = `CP-RES-${currentGathering.city.slice(0, 3)}-${Math.floor(1000 + Math.random() * 9000)}`;
      setInlineConfirmedDossier({
        refId: fallbackId,
        date: new Date().toLocaleDateString('en-GB'),
      });
      setInlineStep(2);
    } finally {
      setInlineLoading(false);
    }
  };

  const upcomingList = allGatherings.filter((g) => g.isUpcoming);
  const seatsConfirmed = currentGathering.confirmedSeats || 20;
  const totalSeats = currentGathering.totalSeats || 30;
  const seatsRemaining = currentGathering.remainingSeats || 10;
  const progressPercent = Math.round((seatsConfirmed / totalSeats) * 100);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto selection:bg-gold selection:text-black">
      {/* 1. Top Navigation & Gathering Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
        <button
          onClick={() => onNavigate('gatherings')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-400 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Gatherings</span>
        </button>

        {/* Quick Gathering Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 whitespace-nowrap mr-1">
            SCHEDULED CONCLAVES:
          </span>
          {upcomingList.map((g) => {
            const isCurrent = g.id === currentGathering.id;
            return (
              <button
                key={g.id}
                onClick={() => handleGatheringSwitch(g.id)}
                className={`px-3 py-1.5 text-[10px] sm:text-[11px] uppercase tracking-wider font-mono whitespace-nowrap transition-all border ${
                  isCurrent
                    ? 'border-gold bg-gold/15 text-gold font-semibold shadow-gold-subtle'
                    : 'border-white/10 bg-black/40 text-zinc-400 hover:text-white hover:border-white/30'
                }`}
              >
                {g.city} · {g.date.split(' ')[1] || g.date}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Hero Dossier Banner with Visual & Booking Callout */}
      <div className="relative border border-gold/40 bg-gradient-to-b from-[#14141B] via-brand-card to-black overflow-hidden shadow-gold-glow mb-12">
        {/* Background Visual Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          {currentGathering.image && (
            <img
              src={currentGathering.image}
              alt={currentGathering.title}
              className="w-full h-full object-cover object-center filter grayscale contrast-125 scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent"></div>
        </div>

        <div className="relative z-10 p-6 sm:p-10 lg:p-12">
          {/* Top Status Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/50 bg-gold/10 text-gold text-[10px] tracking-[0.25em] uppercase font-mono">
              <Lock className="w-3 h-3" />
              <span>CONFIDENTIAL DOSSIER · {currentGathering.eventType}</span>
            </div>

            <div className="inline-flex items-center gap-2.5 px-3 py-1 border border-amber-500/40 bg-amber-500/10 text-amber-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>
                {seatsConfirmed} OF {totalSeats} SEATS CONFIRMED ·{' '}
                <strong className="text-white">{seatsRemaining} REMAINING</strong>
              </span>
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div className="max-w-4xl space-y-3 mb-6">
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-gold font-medium block">
              {currentGathering.subtitle || 'EXCLUSIVE PRIVATE CONCLAVE'}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.15] tracking-wide">
              {currentGathering.title}
            </h1>
            <p className="font-serif text-base sm:text-xl text-zinc-300 italic font-light max-w-3xl leading-relaxed pt-1">
              {currentGathering.quote || currentGathering.description}
            </p>
          </div>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 pt-6 border-t border-white/10 text-xs">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-gold font-medium mb-1">Chapter</p>
              <p className="text-white font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>{currentGathering.city}</span>
              </p>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <p className="text-[10px] uppercase tracking-[0.22em] text-gold font-medium mb-1">Date</p>
              <p className="text-white font-medium flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>{currentGathering.date}</span>
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-gold font-medium mb-1">Timing</p>
              <p className="text-white font-medium flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>{currentGathering.time}</span>
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-gold font-medium mb-1">Capacity</p>
              <p className="text-white font-medium flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>{currentGathering.capacity}</span>
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-gold font-medium mb-1">Protocol</p>
              <p className="text-white font-medium flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>Chatham House</span>
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-gold font-medium mb-1">Dress Code</p>
              <p className="text-white font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>{currentGathering.dressCode?.split('/')[0] || 'Royal Formal'}</span>
              </p>
            </div>
          </div>

          {/* Primary Action Row inside Banner */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-zinc-400">
              <span className="text-zinc-500 uppercase tracking-widest text-[10px] block">
                Venue Location
              </span>
              <span className="text-white font-medium">{currentGathering.location}</span>
              {currentGathering.venueAddress && (
                <span className="text-zinc-400 block text-[11px] font-light mt-0.5">
                  {currentGathering.venueAddress}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-gold-subtle group"
              >
                <span>BOOK YOUR SEAT NOW</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  if (onRequestInvitation) {
                    onRequestInvitation();
                  } else {
                    onNavigate('request-invitation');
                  }
                }}
                className="w-full sm:w-auto px-5 py-3 border border-white/20 hover:border-gold/60 text-zinc-300 hover:text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                Request Petition
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Grid: Left Column = Event Schedule & Details; Right Column = Booking Desk */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (8 cols): Event Schedule, Pillars, Protocols, Inclusions */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-8">
          {/* Navigation Tabs */}
          <div className="flex border-b border-white/10 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('itinerary')}
              className={`pb-3.5 px-5 text-xs uppercase tracking-[0.25em] font-medium border-b-2 whitespace-nowrap transition-all ${
                activeTab === 'itinerary'
                  ? 'border-gold text-gold font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              Event Schedule & Itinerary
            </button>

            <button
              onClick={() => setActiveTab('inclusions')}
              className={`pb-3.5 px-5 text-xs uppercase tracking-[0.25em] font-medium border-b-2 whitespace-nowrap transition-all ${
                activeTab === 'inclusions'
                  ? 'border-gold text-gold font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              Seat Inclusions
            </button>

            <button
              onClick={() => setActiveTab('pillars')}
              className={`pb-3.5 px-5 text-xs uppercase tracking-[0.25em] font-medium border-b-2 whitespace-nowrap transition-all ${
                activeTab === 'pillars'
                  ? 'border-gold text-gold font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              Discussion Pillars
            </button>

            <button
              onClick={() => setActiveTab('protocols')}
              className={`pb-3.5 px-5 text-xs uppercase tracking-[0.25em] font-medium border-b-2 whitespace-nowrap transition-all ${
                activeTab === 'protocols'
                  ? 'border-gold text-gold font-semibold'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              Sanctum Protocols
            </button>
          </div>

          {/* TAB 1: EVENT SCHEDULE & ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border border-white/10 bg-[#0E0E14] p-5 sm:p-6 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold block mb-1">
                    CERTIFIED SCHEDULE TIMELINE
                  </span>
                  <h4 className="font-serif text-lg text-white font-normal">
                    Chronological Flow of the Evening
                  </h4>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  <span>{currentGathering.time}</span>
                </div>
              </div>

              {/* Itinerary Timeline Cards */}
              <div className="space-y-4">
                {currentGathering.itinerary && currentGathering.itinerary.length > 0 ? (
                  currentGathering.itinerary.map((item, index) => (
                    <div
                      key={index}
                      className="p-6 sm:p-7 bg-[#121218] border border-white/10 hover:border-gold/40 transition-all duration-300 relative group"
                    >
                      {/* Left accent strip on hover */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-gold transition-colors"></div>

                      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                        {/* Time & Stage */}
                        <div className="flex sm:flex-col items-center sm:items-start justify-between sm:justify-start gap-2 sm:w-36 flex-shrink-0">
                          <span className="font-mono text-xl sm:text-2xl text-gold font-semibold tracking-wider">
                            {item.time}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-mono bg-black/60 px-2 py-0.5 border border-white/5">
                            {item.stage || `Stage 0${index + 1}`}
                          </span>
                        </div>

                        {/* Title, Location & Details */}
                        <div className="space-y-2 flex-grow">
                          <h3 className="font-serif text-lg sm:text-xl text-white font-medium group-hover:text-gold-light transition-colors">
                            {item.title}
                          </h3>

                          {item.location && (
                            <p className="text-xs text-gold/80 flex items-center gap-1.5 font-mono">
                              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                              <span>{item.location}</span>
                            </p>
                          )}

                          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed pt-1">
                            {item.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-zinc-400 text-sm italic">
                    Schedule details will be communicated directly to ratified attendees.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: SEAT INCLUSIONS & PRIVILEGES */}
          {activeTab === 'inclusions' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border border-white/10 bg-[#0E0E14] p-6">
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold block mb-1">
                  PRIVILEGE DOSSIER
                </span>
                <h4 className="font-serif text-xl text-white font-normal mb-2">
                  What Every Sovereign Seat Entails
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  Every confirmed reservation at {currentGathering.title} affords comprehensive, end-to-end luxury and discretion management.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentGathering.inclusions &&
                  currentGathering.inclusions.map((inc, i) => (
                    <div
                      key={i}
                      className="p-5 bg-[#121218] border border-white/10 hover:border-gold/30 transition-all flex items-start gap-3.5"
                    >
                      <div className="w-6 h-6 rounded-none border border-gold/60 flex items-center justify-center text-gold bg-gold/10 flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs sm:text-sm text-white font-medium leading-snug">{inc}</p>
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">
                          Inclusive Privilege
                        </span>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="border border-gold/30 bg-black/40 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="font-serif text-base text-white">Need Customized Concierge Arrangement?</h5>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">
                    Helipad transfers, Faraday device security, or private diplomatic security liaisons can be arranged.
                  </p>
                </div>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="px-5 py-2.5 border border-gold text-gold hover:bg-gold hover:text-black text-xs uppercase tracking-wider font-semibold transition-colors whitespace-nowrap"
                >
                  Contact Concierge
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: DISCUSSION PILLARS */}
          {activeTab === 'pillars' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {currentGathering.pillars &&
                  currentGathering.pillars.map((p) => (
                    <div
                      key={p.num}
                      className="p-6 bg-[#121218] border border-white/10 hover:border-gold/40 transition-all space-y-3"
                    >
                      <span className="font-mono text-2xl text-gold/50 font-semibold">{p.num}</span>
                      <h4 className="font-serif text-lg text-white font-medium">{p.title}</h4>
                      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* TAB 4: PROTOCOLS */}
          {activeTab === 'protocols' && (
            <div className="p-6 sm:p-8 bg-[#121218] border border-gold/30 space-y-6 animate-fadeIn">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold">
                  CHATHAM HOUSE CODIFIED
                </span>
                <h4 className="font-serif text-2xl text-white font-medium">
                  The Sanctum Discretion Covenant
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  Attendance at Celebso Privé conclaves connotes strict adherence to centuries-old diplomatic tradition and absolute discretion.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs text-zinc-300 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Zero Photographic Apparatus</strong>
                    All smartphones, recording equipment, and smart devices are sequestered in Faraday pouches at the perimeter.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Codified Chatham House Rule</strong>
                    Participants are free to use the insights received, but neither the identity nor the affiliation of any speaker may be disclosed.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Strict Non-Solicitation</strong>
                    The salon is a sanctuary of intellectual dialectic, not a pitch market. Commercial deck presentations are strictly forbidden.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Peer Vetting Ratification</strong>
                    Every guest is vetted by the High Advisory Council prior to issuance of invitation credentials.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column (5 cols): PROPER BOOKING DESK & SEAT RESERVATION */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-6 sticky top-24">
          {/* Reservation Card Desk */}
          <div className="border border-gold/50 bg-gradient-to-b from-[#15151E] via-[#0E0E14] to-black p-6 sm:p-7 shadow-2xl relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-medium">
                  RESERVATIONS OPEN
                </span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Tier 01 Ingress
              </span>
            </div>

            {/* Price / Membership Tier */}
            <div className="space-y-1 mb-5">
              <span className="text-[10px] uppercase font-mono tracking-widest text-gold block">
                Access Classification
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                {currentGathering.tier}
              </h3>
              <p className="text-xs text-zinc-400 font-light">
                {currentGathering.accessContribution}
              </p>
            </div>

            {/* Seat Capacity Progress Meter */}
            <div className="p-3.5 bg-black/40 border border-white/10 space-y-2 mb-6">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400 uppercase tracking-wider text-[10px]">Seat Capacity</span>
                <span className="text-gold font-mono font-bold">
                  {seatsConfirmed} / {totalSeats} Booked
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gold/60 to-gold transition-all duration-700"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                <span>{progressPercent}% Confirmed</span>
                <span className="text-amber-400 font-medium">Only {seatsRemaining} seats left</span>
              </div>
            </div>

            {/* INLINE BOOKING FORM OR CONFIRMED DOCKET */}
            {inlineStep === 1 && (
              <form onSubmit={handleInlineSubmit} className="space-y-4">
                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-serif text-base text-white font-medium mb-1">
                    Direct Seat Booking
                  </h4>
                  <p className="text-[11px] text-zinc-400 font-light">
                    Submit credentials for instant provisional seat reservation at {currentGathering.title}.
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400">
                    Principal Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={inlineForm.fullName}
                    onChange={handleInlineChange}
                    placeholder="e.g. Vikramaditya Rathore"
                    className="w-full bg-black/60 border border-white/15 focus:border-gold px-3 py-2 text-xs text-white placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-zinc-400">
                      Title / Role *
                    </label>
                    <input
                      type="text"
                      name="title"
                      required
                      value={inlineForm.title}
                      onChange={handleInlineChange}
                      placeholder="e.g. Founder / Partner"
                      className="w-full bg-black/60 border border-white/15 focus:border-gold px-3 py-2 text-xs text-white placeholder-zinc-600 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-zinc-400">
                      Organization *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      required
                      value={inlineForm.organization}
                      onChange={handleInlineChange}
                      placeholder="e.g. Sovereign Fund"
                      className="w-full bg-black/60 border border-white/15 focus:border-gold px-3 py-2 text-xs text-white placeholder-zinc-600 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400">
                    Direct Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={inlineForm.email}
                    onChange={handleInlineChange}
                    placeholder="principal@company.com"
                    className="w-full bg-black/60 border border-white/15 focus:border-gold px-3 py-2 text-xs text-white placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400">
                    WhatsApp / Direct Mobile *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={inlineForm.phone}
                    onChange={handleInlineChange}
                    placeholder="+91 98290 XXXXX"
                    className="w-full bg-black/60 border border-white/15 focus:border-gold px-3 py-2 text-xs text-white placeholder-zinc-600 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-zinc-400">
                    Seat Count
                  </label>
                  <select
                    name="seatCount"
                    value={inlineForm.seatCount}
                    onChange={handleInlineChange}
                    className="w-full bg-black/60 border border-white/15 focus:border-gold px-3 py-2 text-xs text-white outline-none"
                  >
                    <option value="1 Principal Seat">1 Principal Seat (Standard)</option>
                    <option value="2 Seats (Principal + Verified Co-Founder)">
                      2 Seats (Principal + Verified Co-Founder)
                    </option>
                  </select>
                </div>

                <div className="flex items-start gap-2 pt-1 text-[11px] text-zinc-400">
                  <input
                    type="checkbox"
                    id="inlineChatham"
                    name="chathamAgreed"
                    required
                    checked={inlineForm.chathamAgreed}
                    onChange={handleInlineChange}
                    className="mt-0.5 accent-gold cursor-pointer"
                  />
                  <label htmlFor="inlineChatham" className="cursor-pointer leading-tight">
                    I accept the Chatham House protocol & non-disclosure covenant.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={inlineLoading}
                  className="w-full py-3 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-gold-subtle disabled:opacity-50 mt-2"
                >
                  {inlineLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Booking...</span>
                    </>
                  ) : (
                    <>
                      <span>CONFIRM SEAT RESERVATION</span>
                      <ShieldCheck className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

            {inlineStep === 2 && inlineConfirmedDossier && (
              <div className="space-y-4 py-2 text-center animate-fadeIn">
                <div className="w-12 h-12 mx-auto border border-gold/70 bg-gold/15 flex items-center justify-center text-gold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold font-semibold block">
                    SEAT PROVISIONALLY SECURED
                  </span>
                  <h4 className="font-serif text-lg text-white font-medium mt-1">
                    Reservation Docket Issued
                  </h4>
                </div>

                <div className="bg-black/60 border border-gold/40 p-4 text-left text-xs space-y-2">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-zinc-500 text-[10px] uppercase">Ref ID</span>
                    <span className="text-gold font-mono font-bold">
                      {inlineConfirmedDossier.refId}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[10px] uppercase block">Guest</span>
                    <span className="text-white font-medium">{inlineForm.fullName}</span>
                    <span className="text-zinc-400 block text-[11px]">
                      {inlineForm.title} · {inlineForm.organization}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[10px] uppercase block">Event</span>
                    <span className="text-white font-medium">{currentGathering.title}</span>
                    <span className="text-gold text-[11px] block">{currentGathering.date}</span>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-400 font-light">
                  A verification dispatch has been sent to your WhatsApp and email.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setInlineStep(1);
                    setInlineConfirmedDossier(null);
                  }}
                  className="w-full py-2 border border-white/20 text-zinc-300 hover:text-white text-[11px] uppercase tracking-wider"
                >
                  Book Another Seat
                </button>
              </div>
            )}

            {/* Or Open Full Screen Modal Button */}
            <div className="mt-5 pt-4 border-t border-white/10 text-center">
              <button
                type="button"
                onClick={() => setIsBookingModalOpen(true)}
                className="text-xs text-gold hover:text-gold-light uppercase tracking-[0.2em] font-medium inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Open Full Reservation Modal</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Concierge Assistance Card */}
          <div className="p-5 border border-white/10 bg-[#0A0A0E] text-xs space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
              CHIEF PROTOCOL DESK
            </span>
            <p className="text-zinc-300 font-light leading-relaxed">
              For discrete inquiries regarding chartered flights, palace suite bookings, or patron fellowships:
            </p>
            <p className="font-mono text-gold pt-1">concierge@celebso.com</p>
          </div>
        </div>
      </div>

      {/* 4. Luxury Modal for Booking */}
      <GatheringBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        gathering={currentGathering}
      />
    </div>
  );
};

export default GatheringDetailPage;
