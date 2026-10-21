import React from 'react';
import { Shield, ArrowUpRight } from 'lucide-react';

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
    <footer className="relative bg-[#070709] border-t border-white/[0.06] overflow-hidden text-zinc-400">
      {/* Ambient background gold glow like catalyst */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-14 md:pt-20 pb-8 md:pb-10">
        {/* Mobile Brand Block (Catalyst style: centered on mobile, hidden on lg) */}
        <div className="flex flex-col items-center text-center lg:hidden mb-10">
          <button
            onClick={() => handleLink('home')}
            className="flex flex-col items-center group mb-4 focus:outline-none"
          >
            <span className="font-serif text-2xl tracking-[0.25em] text-white group-hover:text-gold transition-colors font-medium">
              CELEBSO
            </span>
            <span className="font-serif text-[10px] tracking-[0.45em] text-gold uppercase -mt-0.5">
              PRIVÉ
            </span>
          </button>
          
          <p className="font-sans text-sm text-white/40 leading-relaxed max-w-xs mb-4 font-light">
            Where sovereign capital, timeless heritage, and discrete fellowship converge beyond the public gaze.
          </p>

          <p className="text-[10px] tracking-[0.22em] text-gold/70 uppercase font-mono mb-6">
            Jaipur · New Delhi · Udaipur · Gurgaon · Mumbai
          </p>

          {/* Social Icons (Mobile) */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 border border-white/10 rounded-full text-white/40 hover:text-gold hover:border-gold/40 hover:bg-white/[0.04] transition-all duration-300 group inline-flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin transition-transform duration-300 group-hover:scale-110">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2.5 border border-white/10 rounded-full text-white/40 hover:text-gold hover:border-gold/40 hover:bg-white/[0.04] transition-all duration-300 group inline-flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram transition-transform duration-300 group-hover:scale-110">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="p-2.5 border border-white/10 rounded-full text-white/40 hover:text-gold hover:border-gold/40 hover:bg-white/[0.04] transition-all duration-300 group inline-flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* 5-Column Grid Layout (Catalyst style: 1.3fr 1fr 1fr 1fr 1.2fr) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr] gap-8 lg:gap-8 mb-12 md:mb-16">
          {/* Col 1: Desktop Brand (hidden on mobile, flex on lg) */}
          <div className="hidden lg:flex flex-col items-start text-left">
            <button
              onClick={() => handleLink('home')}
              className="flex flex-col items-start group mb-5 focus:outline-none"
            >
              <span className="font-serif text-2xl tracking-[0.25em] text-white group-hover:text-gold transition-colors font-medium">
                CELEBSO
              </span>
              <span className="font-serif text-[10px] tracking-[0.45em] text-gold uppercase -mt-0.5">
                PRIVÉ
              </span>
            </button>

            <p className="font-sans text-sm text-white/40 leading-relaxed max-w-xs mb-4 font-light">
              Where sovereign capital, timeless heritage, and discrete fellowship converge beyond the public gaze.
            </p>

            <p className="text-[10px] tracking-[0.2em] text-gold/70 uppercase font-mono mb-6">
              Jaipur · New Delhi · Udaipur · Gurgaon · Mumbai
            </p>

            {/* Social Icons (Desktop) */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 border border-white/10 rounded-full text-white/40 hover:text-gold hover:border-gold/40 hover:bg-white/[0.04] transition-all duration-300 group inline-flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin transition-transform duration-300 group-hover:scale-110">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 border border-white/10 rounded-full text-white/40 hover:text-gold hover:border-gold/40 hover:bg-white/[0.04] transition-all duration-300 group inline-flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram transition-transform duration-300 group-hover:scale-110">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="p-2 border border-white/10 rounded-full text-white/40 hover:text-gold hover:border-gold/40 hover:bg-white/[0.04] transition-all duration-300 group inline-flex items-center justify-center"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Overview (The House) */}
          <div className="text-left">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans mb-5 md:mb-6">
              Overview
            </p>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleLink('home')}
                  className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 text-left font-light"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('the-prive')}
                  className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 text-left font-light"
                >
                  The Privé
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('the-room')}
                  className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 text-left font-light"
                >
                  The Room
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('about-us')}
                  className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 text-left font-light"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('ecosystem')}
                  className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 text-left font-light"
                >
                  Ecosystem Matrix
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Explore (Gatherings & Experiences) */}
          <div className="text-left">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans mb-5 md:mb-6">
              Explore
            </p>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleLink('gatherings')}
                  className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 text-left font-light"
                >
                  Gatherings Calendar
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('experiences')}
                  className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 text-left font-light"
                >
                  Bespoke Experiences
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('gallery')}
                  className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 text-left font-light"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('past-guests')}
                  className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 text-left font-light"
                >
                  Past Guests & Chronicles
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect (Alliances & Ingress) */}
          <div className="text-left">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans mb-5 md:mb-6">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleLink('request-invitation')}
                  className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 inline-flex items-center gap-1 group font-light text-left"
                >
                  <span>Request Invitation</span>
                  <ArrowUpRight className="w-3 h-3 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('partners-trust')}
                  className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 inline-flex items-center gap-1 group font-light text-left"
                >
                  <span>Partners & Trust</span>
                  <ArrowUpRight className="w-3 h-3 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 inline-flex items-center gap-1 group font-light text-left"
                >
                  <span>Contact Secretariats</span>
                </button>
              </li>
              {onOpenDashboard && (
                <li>
                  <button
                    onClick={onOpenDashboard}
                    className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 inline-flex items-center gap-1.5 group font-light text-left"
                  >
                    <Shield className="w-3.5 h-3.5 text-gold/70" />
                    <span>Advisory Portal</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 5: Legal & Privacy */}
          <div className="col-span-2 lg:col-span-1 mt-4 lg:mt-0 text-left">
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans mb-5 md:mb-6">
              Legal & Privacy
            </p>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleLink('privacy-policy')}
                  className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 text-left font-light"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('privacy-policy')}
                  className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 text-left font-light"
                >
                  Terms & Ingress
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('privacy-policy')}
                  className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 text-left font-light"
                >
                  Discretion & NDA
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('privacy-policy')}
                  className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 text-left font-light"
                >
                  Charter & Governance
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider line like catalyst */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 md:mb-8"></div>

        {/* Bottom Rights Bar like catalyst */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-white/30 font-sans tracking-wider text-center md:text-left order-2 md:order-1">
            © Created by Celebso Group, a Celebso Privé initiative. All rights reserved.
          </p>

          <div className="flex items-center gap-6 order-1 md:order-2">
            <button
              onClick={() => handleLink('privacy-policy')}
              className="text-[10px] text-white/30 hover:text-gold font-sans tracking-wider uppercase transition-colors duration-300"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleLink('contact')}
              className="text-[10px] text-white/30 hover:text-gold font-sans tracking-wider uppercase transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
