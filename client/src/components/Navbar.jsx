import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Lock, ArrowRight, Sparkles, Crown } from 'lucide-react';

export const Navbar = ({
  currentPage = 'home',
  onNavigate,
  onRequestInvitation,
  onOpenDashboard,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // The 5 main navigation links for the header, as requested:
  const headerNavItems = [
    { id: 'home', label: 'HOME' },
    { id: 'gatherings', label: 'GATHERINGS' },
    { id: 'the-prive', label: 'THE PRIVÉ' },
    { id: 'the-room', label: 'THE ROOM' },
    { id: 'ecosystem', label: 'ECOSYSTEM' },
  ];

  // All 12 pages for the drawer menu
  const allPages = [
    { id: 'home', label: 'HOME', category: 'The Sanctum', desc: 'Sovereign fellowship & heritage convergence' },
    { id: 'gatherings', label: 'GATHERINGS', category: 'Conclaves', desc: 'Curated conclaves across historic sanctums' },
    { id: 'gathering-detail', label: 'GATHERING DETAIL', category: 'Conclaves', desc: 'Flagship Amber Fort conclave dossier & schedule' },
    { id: 'the-prive', label: 'THE PRIVÉ', category: 'The Sanctum', desc: 'The order of sovereign fellowship' },
    { id: 'the-room', label: 'THE ROOM', category: 'The Sanctum', desc: 'The 30-seat non-hierarchical round' },
    { id: 'experiences', label: 'EXPERIENCES', category: 'Conclaves', desc: 'Palace soirees, midnight hearths & private jets' },
    { id: 'ecosystem', label: 'ECOSYSTEM', category: 'Alliances', desc: 'Sovereign wealth funds & deep tech network' },
    { id: 'partners-trust', label: 'PARTNERS & TRUST', category: 'Alliances', desc: 'Institutional patronage & anti-sponsorship ethos' },
    { id: 'request-invitation', label: 'REQUEST INVITATION', category: 'Access', desc: 'Confidential petition for seat inclusion' },
    { id: 'contact', label: 'CONTACT', category: 'Access', desc: 'Global chapter desks & encrypted dispatch' },
    { id: 'past-guests', label: 'PAST GUESTS', category: 'The Sanctum', desc: 'Anonymized sovereign chronicles & testimonials' },
    { id: 'about-us', label: 'ABOUT US', category: 'The Sanctum', desc: 'Genesis, sovereign manifesto & seven tenets' },
  ];

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0A0C]/95 backdrop-blur-md border-b border-gold/15 py-4 shadow-lg shadow-black/50'
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo - Exact styling from image */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex flex-col items-center sm:items-start text-left group focus:outline-none"
          >
            <span className="font-serif text-lg sm:text-2xl tracking-[0.22em] text-[#ECEAE4] group-hover:text-gold-light transition-colors font-medium">
              CELEBSO
            </span>
            <span className="font-serif text-[9px] sm:text-[10px] tracking-[0.38em] text-gold uppercase -mt-0.5 group-hover:text-gold-light transition-colors">
              PRIVÉ
            </span>
          </button>

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            {headerNavItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-[11px] xl:text-[12px] uppercase tracking-[0.22em] transition-all duration-300 font-medium py-1 ${
                    isActive
                      ? 'text-gold'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold rounded-full shadow-[0_0_8px_rgba(197,160,89,0.8)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Request Invitation + Circular Hamburger */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Request Invitation Button (Gold Border Outline as in screenshot) */}
            <button
              onClick={() => {
                if (onRequestInvitation) {
                  onRequestInvitation();
                } else {
                  handleNavClick('request-invitation');
                }
              }}
              className="relative group border border-gold/75 hover:border-gold px-3.5 sm:px-5 py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-gold font-medium transition-all duration-300 hover:bg-gold hover:text-black shadow-sm hover:shadow-gold-subtle whitespace-nowrap"
            >
              Request Invitation
            </button>

            {/* Circular Hamburger Menu Button (Circle with gold border as in screenshot) */}
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold/75 hover:border-gold flex items-center justify-center text-gold hover:bg-gold/15 transition-all duration-300 focus:outline-none"
              aria-label="Toggle navigation drawer"
              title="Full Sovereign Navigation & All 12 Pages"
            >
              {drawerOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full Sovereign Navigation Drawer (Lists all 12 Pages & Chapters) */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="fixed inset-y-0 right-0 w-full max-w-xl bg-[#0D0D11] border-l border-gold/25 p-6 sm:p-10 overflow-y-auto flex flex-col justify-between shadow-2xl">
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex flex-col">
                  <span className="font-serif text-xl tracking-[0.25em] text-white">
                    CELEBSO
                  </span>
                  <span className="font-serif text-[10px] tracking-[0.35em] text-gold uppercase">
                    PRIVÉ · ALL 12 PAGES
                  </span>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="w-9 h-9 rounded-full border border-white/20 hover:border-gold flex items-center justify-center text-zinc-400 hover:text-gold transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Grid of 12 Pages */}
              <div className="py-8 space-y-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 font-mono">
                  Sovereign Architecture Directory
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {allPages.map((page, index) => {
                    const isActive = currentPage === page.id;
                    return (
                      <button
                        key={page.id}
                        onClick={() => handleNavClick(page.id)}
                        className={`p-3.5 border text-left transition-all duration-300 flex flex-col justify-between group ${
                          isActive
                            ? 'border-gold bg-gold/10'
                            : 'border-white/5 bg-black/40 hover:border-gold/40 hover:bg-black/80'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] font-mono text-gold/60">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="text-[8px] uppercase tracking-wider text-zinc-400 font-mono">
                            {page.category}
                          </span>
                        </div>
                        <h4
                          className={`font-serif text-sm tracking-wider font-medium group-hover:text-gold transition-colors ${
                            isActive ? 'text-gold' : 'text-white'
                          }`}
                        >
                          {page.label}
                        </h4>
                        <p className="text-[10px] text-zinc-400 font-light mt-0.5 line-clamp-1">
                          {page.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span className="uppercase tracking-widest text-[10px] text-gold">Chapters:</span>
                <span className="font-mono text-[10px]">JAIPUR · DUBAI · LONDON · ZURICH · DOHA</span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setDrawerOpen(false);
                    if (onOpenDashboard) onOpenDashboard();
                  }}
                  className="flex-1 py-2.5 border border-white/20 hover:border-gold text-zinc-300 hover:text-gold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors"
                >
                  <Shield className="w-3.5 h-3.5 text-gold" />
                  <span>Advisory Portal</span>
                </button>
                <button
                  onClick={() => {
                    setDrawerOpen(false);
                    if (onRequestInvitation) {
                      onRequestInvitation();
                    } else {
                      handleNavClick('request-invitation');
                    }
                  }}
                  className="flex-1 py-2.5 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                >
                  Request Invitation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
