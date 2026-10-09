import React from 'react';
import { Lock, FileText, ChevronRight } from 'lucide-react';

export const InvitationCTA = ({ onRequestInvitation, onOpenProcess }) => {
  return (
    <section id="membership" className="relative py-28 bg-[#09090C] border-t border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3">
          <span className="w-8 h-[1px] bg-gold/60"></span>
          <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.3em] uppercase text-gold">
            A Convergence Among Peers
          </span>
          <span className="w-8 h-[1px] bg-gold/60"></span>
        </div>

        {/* Title */}
        <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal leading-[1.1] tracking-tight">
          AN INVITATION. <br />
          <span className="gold-gradient-text italic">NOT A REGISTRATION.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-zinc-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
          Nomination is curated. If you believe your vision, capital, or enterprise belongs in these closed circles, petition the High Advisory Board for consideration.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={onRequestInvitation}
            className="w-full sm:w-auto bg-gold hover:bg-gold-light text-[#0A0A0C] px-9 py-4 text-xs uppercase tracking-[0.24em] font-semibold transition-all duration-300 shadow-gold-glow hover:scale-105"
          >
            Request Invitation
          </button>
          <button
            onClick={onOpenProcess}
            className="w-full sm:w-auto border border-gold/40 hover:border-gold text-zinc-300 hover:text-gold px-8 py-4 text-xs uppercase tracking-[0.24em] font-medium transition-colors bg-white/[0.02]"
          >
            How The Selection Process Works
          </button>
        </div>

        {/* Security / Confidentiality Note */}
        <div className="pt-6">
          <p className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-mono">
            INVITATION DOSSIER TRANSFERRED UPON VETTING · STRICT NON-DISCLOSURE PROTOCOL APPLIES
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvitationCTA;
