import React, { useState } from 'react';
import { ArrowRight, Calendar, MapPin, Sparkles, Clock } from 'lucide-react';

export const PalaceGathering = ({ onSelectSchedule }) => {
  const [activeStep, setActiveStep] = useState(0);

  const itinerary = [
    {
      time: '19:00 HRS',
      title: 'Arrivals & Royal Reception',
      detail: 'Private arrival through royal torchlit palace gates with archival chamber acoustics and welcome libations.',
    },
    {
      time: '19:45 HRS',
      title: 'Fireside Keynote & Curated Discourse',
      detail: 'High-level unscripted provocation on sovereign capital allocation and timeless stewardship.',
    },
    {
      time: '20:45 HRS',
      title: 'The Imperial Feast & Private Vintage Tasting',
      detail: 'A private seven-course feast orchestrated by royal household chefs, paired with rare single-cask vintages.',
    },
    {
      time: '22:00 HRS',
      title: 'Salon Discussions & Discrete Introductions',
      detail: 'Intimate breakout discussions conducted strictly under Chatham House Rule protocols.',
    },
    {
      time: '00:00 HRS',
      title: 'Midnight Soirée Under the Stars',
      detail: 'Starlight fellowship in the illuminated marble courtyards with ambient instrumental acoustics.',
    },
  ];

  return (
    <section id="the-room" className="relative py-24 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Ivory Luxury Card */}
          <div className="lg:col-span-4 bg-[#F7F4EB] text-[#1E1C1A] p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1px] bg-[#9E7B35]"></span>
                <span className="text-[10px] tracking-[0.28em] uppercase font-semibold text-[#8B6B2B]">
                  Historic Setting
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-tight tracking-wide text-[#141312]">
                AN EVENING OF <br />
                <span className="italic font-light">CULTURE, CUISINE & COGNITION</span>
              </h3>

              <div className="pt-6 space-y-4 border-t border-[#D9D3C3] text-xs tracking-wider uppercase font-medium text-[#48453F]">
                <div className="flex items-center gap-3">
                  <Calendar className="w-3.5 h-3.5 text-[#8B6B2B]" />
                  <span>DATE: NOVEMBER 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-3.5 h-3.5 text-[#8B6B2B]" />
                  <span>LOCATION: JAIPUR, RAJASTHAN</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#8B6B2B]" />
                  <span>DRESS CODE: BLACK TIE / HERITAGE</span>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <button
                onClick={onSelectSchedule}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#141312] hover:text-[#8B6B2B] transition-colors group-hover:translate-x-1 duration-300"
              >
                <span>View Full Schedule</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#8B6B2B]" />
              </button>
            </div>
          </div>

          {/* Center Column: Palace Dinner Image */}
          <div className="lg:col-span-4 relative min-h-[380px] lg:min-h-full overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85"
              alt="Palace Long Table Dinner with candlelit arches"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">
                Sanctuary Courtyard
              </p>
              <p className="font-serif text-lg text-white font-light">
                The Imperial Dining Vault
              </p>
            </div>
          </div>

          {/* Right Column: Dark Itinerary */}
          <div className="lg:col-span-4 bg-[#111115] border border-white/5 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-[1px] bg-gold"></span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-medium">
                  Protocol Timeline
                </span>
              </div>
              <h4 className="font-serif text-2xl text-white font-normal tracking-wide mb-6">
                AN EVENING AT THE PALACE
              </h4>

              <div className="space-y-5">
                {itinerary.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`cursor-pointer transition-all duration-300 pl-3 border-l-2 ${
                      activeStep === index
                        ? 'border-gold bg-white/[0.02] py-1'
                        : 'border-white/10 hover:border-gold/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono tracking-wider text-gold font-medium">
                        {item.time}
                      </span>
                      {activeStep === index && (
                        <span className="text-[9px] uppercase tracking-widest text-gold/70">
                          Highlighted
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm font-serif text-zinc-100 mt-0.5">
                      {item.title}
                    </p>
                    {activeStep === index && (
                      <p className="text-[11px] text-zinc-400 font-light mt-1.5 leading-relaxed">
                        {item.detail}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onSelectSchedule}
                className="w-full py-3 border border-gold/40 hover:border-gold text-gold hover:bg-gold/10 text-xs uppercase tracking-[0.24em] font-medium transition-all duration-300 text-center"
              >
                Full Itinerary Dossier
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PalaceGathering;
