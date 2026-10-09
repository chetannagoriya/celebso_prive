import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PetitionModal from './components/PetitionModal';
import PartnerModal from './components/PartnerModal';
import SelectionProcessModal from './components/SelectionProcessModal';
import AdvisoryDashboard from './components/AdvisoryDashboard';

// All 12 Pages
import HomePage from './pages/HomePage';
import GatheringsPage from './pages/GatheringsPage';
import GatheringDetailPage from './pages/GatheringDetailPage';
import ThePrivePage from './pages/ThePrivePage';
import TheRoomPage from './pages/TheRoomPage';
import ExperiencesPage from './pages/ExperiencesPage';
import EcosystemPage from './pages/EcosystemPage';
import PartnersTrustPage from './pages/PartnersTrustPage';
import RequestInvitationPage from './pages/RequestInvitationPage';
import ContactPage from './pages/ContactPage';
import PastGuestsPage from './pages/PastGuestsPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  // Sync page state with URL hash
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#', '').trim();
    const validPages = [
      'home',
      'gatherings',
      'gathering-detail',
      'the-prive',
      'the-room',
      'experiences',
      'ecosystem',
      'partners-trust',
      'request-invitation',
      'contact',
      'past-guests',
      'about-us',
    ];
    if (validPages.includes(hash)) return hash;
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash());
  const [isPetitionOpen, setIsPetitionOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [partnerPillar, setPartnerPillar] = useState('The Sovereign Patron');
  const [isProcessOpen, setIsProcessOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId === 'home' ? '' : `#${pageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPartner = (pillar) => {
    setPartnerPillar(pillar || 'The Sovereign Patron');
    setIsPartnerOpen(true);
  };

  // Render the requested page component
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigateTo}
            onRequestInvitation={() => setIsPetitionOpen(true)}
            onOpenPartner={handleOpenPartner}
            onOpenProcess={() => setIsProcessOpen(true)}
          />
        );
      case 'gatherings':
        return (
          <GatheringsPage
            onNavigate={navigateTo}
            onRequestInvitation={() => setIsPetitionOpen(true)}
          />
        );
      case 'gathering-detail':
        return (
          <GatheringDetailPage
            onNavigate={navigateTo}
            onRequestInvitation={() => setIsPetitionOpen(true)}
          />
        );
      case 'the-prive':
        return (
          <ThePrivePage
            onNavigate={navigateTo}
            onRequestInvitation={() => setIsPetitionOpen(true)}
          />
        );
      case 'the-room':
        return (
          <TheRoomPage
            onNavigate={navigateTo}
            onRequestInvitation={() => setIsPetitionOpen(true)}
          />
        );
      case 'experiences':
        return (
          <ExperiencesPage
            onNavigate={navigateTo}
            onRequestInvitation={() => setIsPetitionOpen(true)}
          />
        );
      case 'ecosystem':
        return (
          <EcosystemPage
            onNavigate={navigateTo}
            onRequestInvitation={() => setIsPetitionOpen(true)}
          />
        );
      case 'partners-trust':
        return (
          <PartnersTrustPage
            onNavigate={navigateTo}
            onOpenPartnerModal={handleOpenPartner}
          />
        );
      case 'request-invitation':
        return (
          <RequestInvitationPage
            onNavigate={navigateTo}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onNavigate={navigateTo}
            onOpenDashboard={() => setIsDashboardOpen(true)}
          />
        );
      case 'past-guests':
        return (
          <PastGuestsPage
            onNavigate={navigateTo}
            onRequestInvitation={() => setIsPetitionOpen(true)}
          />
        );
      case 'about-us':
        return (
          <AboutUsPage
            onNavigate={navigateTo}
            onRequestInvitation={() => setIsPetitionOpen(true)}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onRequestInvitation={() => setIsPetitionOpen(true)}
            onOpenPartner={handleOpenPartner}
            onOpenProcess={() => setIsProcessOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-zinc-100 font-sans selection:bg-gold selection:text-black flex flex-col justify-between">
      {/* Top Luxury Navbar:
          - Logo: CELEBSO PRIVÉ
          - Center: HOME, GATHERINGS, THE PRIVÉ, THE ROOM, ECOSYSTEM
          - Right: REQUEST INVITATION button & Circular Hamburger Menu
      */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onRequestInvitation={() => setIsPetitionOpen(true)}
        onOpenDashboard={() => setIsDashboardOpen(true)}
      />

      {/* Main Experience Flow for the selected Page */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Luxury Footer:
          - Prominently showcases the rest of the pages:
            GATHERING DETAIL, EXPERIENCES, PARTNERS & TRUST, REQUEST INVITATION, CONTACT, PAST GUESTS, ABOUT US
          - Full categorized directory of all 12 pages
          - Chapters & Discretion notice
      */}
      <Footer
        onNavigate={navigateTo}
        onRequestInvitation={() => setIsPetitionOpen(true)}
        onOpenDashboard={() => setIsDashboardOpen(true)}
      />

      {/* Modals & Portals */}
      <PetitionModal
        isOpen={isPetitionOpen}
        onClose={() => setIsPetitionOpen(false)}
      />

      <PartnerModal
        isOpen={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
        selectedPillar={partnerPillar}
      />

      <SelectionProcessModal
        isOpen={isProcessOpen}
        onClose={() => setIsProcessOpen(false)}
        onRequestInvitation={() => setIsPetitionOpen(true)}
      />

      <AdvisoryDashboard
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
      />
    </div>
  );
}

export default App;
