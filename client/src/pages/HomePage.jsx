import React from 'react';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import PrivateByDesign from '../components/PrivateByDesign';
import BespokeSalons from '../components/BespokeSalons';
import DimensionsConvergence from '../components/DimensionsConvergence';
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

      {/* Private By Design & Who Sits In The Room Section (Matching user mockup) */}
      <PrivateByDesign
        onNavigate={onNavigate}
        onRequestInvitation={onRequestInvitation}
        onOpenProcess={onOpenProcess}
      />

      {/* Three Bespoke Salons */}
      <BespokeSalons onRequestInvitation={onRequestInvitation} />

      {/* Dimensions of Convergence */}
      <DimensionsConvergence onOpenProcess={onOpenProcess} />

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
