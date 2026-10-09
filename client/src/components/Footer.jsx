import React from 'react';
import { ArrowRight, Shield, Lock, Sparkles, MapPin, ExternalLink } from 'lucide-react';

export const Footer = ({
  onNavigate,
  onRequestInvitation,
  onOpenDashboard,
}) => {
  const handleLink = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#070709] border-t border-gold/20 pt-20 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Prominent Banner for the Rest of the Pages as requested */}
        <div className="p-8 sm:p-10 border border-gold/30 bg-gradient-to-r from-black via-[#101015] to-black mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-gold text-[10px] tracking-[0.28em] uppercase font-mono mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Fellowship Directory & Exclusive Pages</span>
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-white">
                Explore The Complete Privé Sanctuary
              </h4>
            </div>
            <button
              onClick={() => handleLink('request-invitation')}
              className="px-6 py-3 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.22em] font-semibold transition-colors whitespace-nowrap"
            >
              Petition For Inclusion
            </button>
          </div>

          {/* Quick Access Pills to the remaining 7 pages */}
          <div className="pt-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-3 font-mono">
              The Fellow Pages:
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button
                onClick={() => handleLink('gathering-detail')}
                className="px-3.5 py-1.5 border border-gold/40 hover:border-gold bg-gold/5 text-gold text-xs uppercase tracking-wider transition-all"
              >
                ✦ Gathering Detail
              </button>
              <button
                onClick={() => handleLink('experiences')}
                className="px-3.5 py-1.5 border border-gold/40 hover:border-gold bg-gold/5 text-gold text-xs uppercase tracking-wider transition-all"
              >
                ✦ Experiences
              </button>
              <button
                onClick={() => handleLink('partners-trust')}
                className="px-3.5 py-1.5 border border-gold/40 hover:border-gold bg-gold/5 text-gold text-xs uppercase tracking-wider transition-all"
              >
                ✦ Partners & Trust
              </button>
              <button
                onClick={() => handleLink('request-invitation')}
                className="px-3.5 py-1.5 border border-gold/40 hover:border-gold bg-gold/5 text-gold text-xs uppercase tracking-wider transition-all"
              >
                ✦ Request Invitation
              </button>
              <button
                onClick={() => handleLink('contact')}
                className="px-3.5 py-1.5 border border-gold/40 hover:border-gold bg-gold/5 text-gold text-xs uppercase tracking-wider transition-all"
              >
                ✦ Contact
              </button>
              <button
                onClick={() => handleLink('past-guests')}
                className="px-3.5 py-1.5 border border-gold/40 hover:border-gold bg-gold/5 text-gold text-xs uppercase tracking-wider transition-all"
              >
                ✦ Past Guests
              </button>
              <button
                onClick={() => handleLink('about-us')}
                className="px-3.5 py-1.5 border border-gold/40 hover:border-gold bg-gold/5 text-gold text-xs uppercase tracking-wider transition-all"
              >
                ✦ About Us
              </button>
            </div>
          </div>
        </div>

        {/* Structured 4-Column Navigation Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/5">
          {/* Brand Info (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <button
              onClick={() => handleLink('home')}
              className="flex flex-col items-start group text-left focus:outline-none"
            >
              <span className="font-serif text-2xl tracking-[0.25em] text-white group-hover:text-gold-light transition-colors font-medium">
                CELEBSO
              </span>
              <span className="font-serif text-[11px] tracking-[0.4em] text-gold uppercase -mt-1 group-hover:text-gold-light transition-colors">
                PRIVÉ
              </span>
            </button>

            <p className="font-serif text-sm sm:text-base text-zinc-300 italic font-light leading-relaxed max-w-sm">
              “Where sovereign capital, timeless heritage, and discrete fellowship converge beyond the public gaze.”
            </p>

            <div className="pt-2">
              <p className="text-[10px] tracking-[0.25em] uppercase text-gold font-medium mb-1">
                Chapters & Salons
              </p>
              <p className="text-xs tracking-widest text-zinc-300 font-mono">
                JAIPUR · DUBAI / ABU DHABI · LONDON · ZURICH · DOHA
              </p>
            </div>
          </div>

          {/* Col 1: House & Sanctum */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-[10px] uppercase tracking-[0.28em] text-gold font-semibold">
              The House
            </h5>
            <ul className="space-y-2.5 text-xs tracking-wider">
              <li>
                <button
                  onClick={() => handleLink('home')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('the-prive')}
                  className="hover:text-gold transition-colors text-left"
                >
                  The Privé
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('the-room')}
                  className="hover:text-gold transition-colors text-left"
                >
                  The Room
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('about-us')}
                  className="hover:text-gold transition-colors text-left"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Gatherings & Salons */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-[10px] uppercase tracking-[0.28em] text-gold font-semibold">
              Gatherings & Salons
            </h5>
            <ul className="space-y-2.5 text-xs tracking-wider">
              <li>
                <button
                  onClick={() => handleLink('gatherings')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Gatherings Calendar
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('gathering-detail')}
                  className="hover:text-gold transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-gold">•</span>
                  <span>Gathering Detail (Amber Fort)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('experiences')}
                  className="hover:text-gold transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-gold">•</span>
                  <span>Bespoke Experiences</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('past-guests')}
                  className="hover:text-gold transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-gold">•</span>
                  <span>Past Guests & Chronicles</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Alliances & Ingress */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-[10px] uppercase tracking-[0.28em] text-gold font-semibold">
              Alliances & Ingress
            </h5>
            <ul className="space-y-2.5 text-xs tracking-wider">
              <li>
                <button
                  onClick={() => handleLink('ecosystem')}
                  className="hover:text-gold transition-colors text-left"
                >
                  Ecosystem Matrix
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('partners-trust')}
                  className="hover:text-gold transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-gold">•</span>
                  <span>Partners & Trust</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('request-invitation')}
                  className="hover:text-gold transition-colors text-left flex items-center gap-1.5 text-gold"
                >
                  <span className="text-gold">•</span>
                  <span>Request Invitation</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="hover:text-gold transition-colors text-left flex items-center gap-1.5"
                >
                  <span className="text-gold">•</span>
                  <span>Contact Secretariats</span>
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenDashboard}
                  className="hover:text-gold text-zinc-300 transition-colors text-left flex items-center gap-1.5 text-[11px]"
                >
                  <Shield className="w-3 h-3 text-gold" />
                  <span>Advisory Review Portal</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] tracking-wider text-zinc-500 gap-4">
          <p>© 2025–2026 CELEBSO PRIVÉ ALLIANCE LTD. ALL RIGHTS RESERVED.</p>
          <p className="text-center md:text-right">
            Strictly Private & Confidential · Entry subject to protocol clearance · concierge@celebso.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
