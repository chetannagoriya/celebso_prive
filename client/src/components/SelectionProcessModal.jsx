import React from 'react';
import { X, Shield, FileCheck, Key, Lock, ArrowRight } from 'lucide-react';

export const SelectionProcessModal = ({ isOpen, onClose, onRequestInvitation }) => {
  if (!isOpen) return null;

  const steps = [
    {
      num: '01',
      title: 'Formal Petition Submission',
      desc: 'The prospective candidate or referring member submits a discrete dossier detailing principal stewardship, family office standing, or institutional leadership.',
      icon: FileCheck,
    },
    {
      num: '02',
      title: 'Advisory Board Review & Vetting',
      desc: 'The High Advisory Board convenes in closed session to verify credentials, ensure complete absence of commercial conflict, and preserve peer parity.',
      icon: Shield,
    },
    {
      num: '03',
      title: 'Chatham House Protocol & NDA Execution',
      desc: 'Upon preliminary clearance, strict mutual confidentiality agreements are executed before the itinerary, private venues, and guest roster details are revealed.',
      icon: Lock,
    },
    {
      num: '04',
      title: 'Dossier Transfer & Key Allocation',
      desc: 'The Golden Dossier and commemorative sanctuary key are hand-delivered via discrete concierge courier for the inaugural gathering.',
      icon: Key,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#111116] border border-gold/40 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-[#0E0E12]">
          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.25em] text-white">
              Admissions Protocol
            </h3>
            <p className="text-[9px] uppercase tracking-widest text-gold font-mono">
              The Four Stages of Selection
            </p>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            Celebso Privé maintains an unyielding commitment to intimacy and sovereign discretion. Attendance is strictly limited to 40 principals per gathering.
          </p>

          <div className="space-y-4">
            {steps.map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={i}
                  className="p-4 bg-[#181820] border border-white/5 flex gap-4 items-start"
                >
                  <div className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-gold flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-gold font-semibold">
                        STAGE {st.num}
                      </span>
                      <h4 className="font-serif text-sm text-white font-medium">
                        {st.title}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-between items-center">
            <span className="text-[10px] font-mono text-zinc-500 uppercase">
              Strict Non-Disclosure Guaranteed
            </span>
            <button
              onClick={() => {
                onClose();
                onRequestInvitation();
              }}
              className="bg-gold hover:bg-gold-light text-[#0A0A0C] px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold flex items-center gap-2"
            >
              <span>Begin Petition</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionProcessModal;
