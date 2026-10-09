import React from 'react';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import PalaceGathering from '../components/PalaceGathering';
import BespokeSalons from '../components/BespokeSalons';
import DimensionsConvergence from '../components/DimensionsConvergence';
import PrivateByDesign from '../components/PrivateByDesign';
import PartnerSection from '../components/PartnerSection';
import InvitationCTA from '../components/InvitationCTA';

export const HomePage = ({ onNavigate, onRequestInvitation, onOpenPartner, onOpenProcess }) => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        onRequestInvitation={onRequestInvitation}
        onExploreSalons={() => onNavigate('gatherings')}
      />

      {/* Stats Bar */}
      <StatsBar />

      {/* Flagship Palace Gathering Preview */}
      <div className="relative">
        <PalaceGathering onSelectSchedule={() => onNavigate('gathering-detail')} />
        <div className="text-center pb-12 -mt-6">
          <button
            onClick={() => onNavigate('gathering-detail')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold hover:text-gold-light border-b border-gold/40 pb-1 transition-colors"
          >
            <span>View Complete Amber Fort Salon Dossier & Itinerary</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Three Bespoke Salons */}
      <BespokeSalons onRequestInvitation={onRequestInvitation} />

      {/* Dimensions of Convergence */}
      <DimensionsConvergence onOpenProcess={onOpenProcess} />

      {/* Private By Design Protocol */}
      <PrivateByDesign
        onRequestInvitation={onRequestInvitation}
        onOpenProcess={onOpenProcess}
      />

      {/* Partner Section */}
      <PartnerSection onOpenPartnerModal={onOpenPartner} />

      {/* Grand Invitation CTA */}
      <InvitationCTA
        onRequestInvitation={onRequestInvitation}
        onOpenProcess={onOpenProcess}
      />
    </div>
  );
};

export default HomePage;
