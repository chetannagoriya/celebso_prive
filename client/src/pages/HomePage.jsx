import React from 'react';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import PrivateByDesign from '../components/PrivateByDesign';
import TheSettingSection from '../components/TheSettingSection';
import ThePeopleSection from '../components/ThePeopleSection';
import WhoAttendsSection from '../components/WhoAttendsSection';
import TheExperienceSection from '../components/TheExperienceSection';
import TheEveningSection from '../components/TheEveningSection';

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

      {/* The Setting: Designed for consequence (From thecatalystcollective.in) */}
      <TheSettingSection />

      {/* The People: A night to remember */}
      <ThePeopleSection />

      {/* Who Attends: The Room */}
      <WhoAttendsSection onNavigate={onNavigate} />

      {/* The Evening: The Experience */}
      <TheExperienceSection />

      {/* Details: The Evening */}
      <TheEveningSection />
    </div>
  );
};

export default HomePage;
