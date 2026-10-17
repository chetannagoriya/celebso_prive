import React, { useState } from 'react';
import { Shield, Lock, FileText, CheckCircle, ArrowLeft, Mail } from 'lucide-react';

export const PrivacyPolicyPage = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('privacy');

  const tabs = [
    { id: 'privacy', label: '1. Privacy Policy' },
    { id: 'terms', label: '2. Terms & Conditions' },
    { id: 'refund', label: '3. Cancellation & Refunds' },
    { id: 'disclaimer', label: '4. No Guarantee Disclaimer' },
    { id: 'parking', label: '5. Parking & Venue' },
    { id: 'photo', label: '6. Photography & Confidentiality' },
    { id: 'conduct', label: '7. Guest Code of Conduct' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-5xl mx-auto">
      {/* Back button */}
      <div className="mb-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </button>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 bg-gold/5 text-gold text-[10px] tracking-[0.3em] uppercase">
          <Shield className="w-3.5 h-3.5" />
          <span>Official Governance & Compliance</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-white font-normal tracking-tight">
          Privacy Policy & <span className="gold-gradient-text italic font-normal">Terms</span>
        </h1>

        <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
          Celebso Private Events · Organized by <span className="text-zinc-200">ANTELLAY LABS</span>
        </p>

        <div className="pt-2 text-[11px] font-mono text-zinc-500 uppercase tracking-widest flex items-center justify-center gap-4">
          <span>Effective Date: 10 October 2026</span>
          <span>·</span>
          <span>Contact: info@celebso.com</span>
        </div>
      </div>

      {/* Policy Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-white/10 no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-mono whitespace-nowrap transition-all border ${
              activeTab === tab.id
                ? 'border-gold bg-gold/10 text-gold font-medium'
                : 'border-white/5 hover:border-white/20 text-zinc-400 hover:text-zinc-200 bg-[#111116]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Policy Content Card */}
      <div className="bg-[#101014] border border-white/10 p-6 sm:p-10 text-zinc-300 font-light text-xs sm:text-sm leading-relaxed space-y-8">
        {activeTab === 'privacy' && (
          <div className="space-y-7">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-white font-normal mb-2">
                1. Privacy Policy
              </h2>
              <p className="text-xs text-gold/80 font-mono tracking-wider">
                Effective Date: 10 October 2026 · Organizer: ANTELLAY LABS · Contact: info@celebso.com
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">1. Introduction</h3>
              <p>
                Celebso Private Events (“Celebso”, “we”, “our” or “us”) organizes curated, invitation-only gatherings for founders, entrepreneurs, investors, family offices, business leaders, partners and selected guests. This policy explains how we collect, use, store, protect and share personal information when you visit our website, apply for an invitation, register for an event or communicate with our team.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">2. Information We Collect</h3>
              <p>
                Depending on your interaction with Celebso, we may collect identity and professional information (name, title, company, designation and business background); contact details (email, phone and professional profiles); invitation and RSVP information; attendance and check-in records; event preferences voluntarily provided; technical information such as IP address, browser, device and website usage logs where collected; and event photographs or videos, subject to event rules and applicable consent requirements. Please do not submit another person's private information without appropriate permission.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">3. How We Use Information</h3>
              <p>
                We may use information to review invitations, curate guest lists, verify registrations, manage event access, send confirmations and event updates, coordinate with venues and security personnel, facilitate professional networking, respond to enquiries, protect event safety, and meet legal obligations or prevent fraud.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">4. Private Guest Lists</h3>
              <p>
                Guest names, company affiliations, contact information and attendance details may be treated as confidential. We do not publish the complete guest list by default. Selected professional information may be shared with other attendees when necessary for event coordination or networking, subject to the event's stated practices and applicable permissions. We cannot guarantee that every attendee will maintain confidentiality.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">5. Sharing Information</h3>
              <p>
                We may share limited information with venues and authorized security personnel, event management and technical service providers, communication or payment providers where applicable, sponsors or partners where necessary and appropriately disclosed, and authorities when required by law or necessary to protect legal rights and safety. We do not sell personal information as a business model.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">6. Security and Retention</h3>
              <p>
                We use reasonable organizational and technical safeguards to protect information. Information is retained only as reasonably necessary for event administration, legitimate business purposes, dispute resolution and legal compliance. No electronic storage or transmission system can be guaranteed completely secure.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">7. Cookies and Third-Party Services</h3>
              <p>
                Our website may use essential cookies, analytics, embedded content or third-party services. Those providers may process information under their own policies. Non-essential tracking will be handled in accordance with applicable requirements.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">8. Privacy Requests</h3>
              <p>
                Subject to applicable law, you may request access to, correction of or deletion of your personal information, or raise a concern about its use. We may verify your identity and may retain certain information for legitimate legal or administrative reasons.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">9. Children's Information</h3>
              <p>
                Our events are intended for adult professional participants unless a specific event expressly provides otherwise. We do not knowingly collect children's personal information for ordinary professional events.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">10. Changes and Contact</h3>
              <p>
                We may update this policy and publish a revised date. For privacy requests, contact <span className="text-gold font-medium">info@celebso.com</span>. Organizer: ANTELLAY LABS.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="space-y-7">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-white font-normal mb-2">
                2. Terms & Conditions
              </h2>
              <p className="text-xs text-gold/80 font-mono tracking-wider">
                Organizer: ANTELLAY LABS · Governing Law: Laws of India
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">1. Acceptance</h3>
              <p>
                These terms govern access to and participation in events organized by Celebso Private Events. Applying for an invitation, accepting an invitation, registering or attending indicates acceptance of these terms and any event-specific rules communicated to you.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">2. Invitation-Only Access</h3>
              <p>
                Submitting an application or registering interest does not guarantee an invitation or entry. Invitations are personal and non-transferable unless approved in writing. Entry may require registration confirmation or identification and is subject to the approved guest list, venue capacity, security requirements and event rules. Unauthorized guests, unapproved plus-ones and walk-ins may be refused entry.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">3. Event Changes</h3>
              <p>
                Dates, times, venues, speakers, sponsors, catering, activities and schedules may change due to operational requirements or circumstances beyond reasonable control. Reasonable efforts will be made to notify registered guests of material changes. An invitation does not guarantee the attendance of any particular person, company or sponsor unless confirmed in writing.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">4. No Guarantee of Business Outcomes</h3>
              <p>
                Participation does not guarantee investment, funding, fundraising success, meetings with specific investors, introductions, partnerships, contracts, employment, customers, revenue growth or other commercial outcomes. Each participant is responsible for due diligence, negotiations, business decisions and agreements. Celebso is not a party to transactions between attendees unless separately agreed in writing.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">5. Guest Conduct</h3>
              <p>
                Guests must treat others respectfully, follow venue and lawful staff instructions, respect personal boundaries, avoid harassment, discrimination, threats, violence, fraud and disruptive conduct, represent their identity and role honestly, and avoid unauthorized solicitation or misuse of guest information. Access may be restricted or a participant asked to leave for serious or repeated misconduct, subject to applicable law.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">6. Confidentiality</h3>
              <p>
                If a confidentiality protocol or Chatham House Rule is expressly announced, participants may use information received but must not reveal the identity or affiliation of the speaker or other participants without permission, unless disclosure is legally required. This does not create legal privilege or guarantee compliance by every attendee.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">7. Photography and Recording</h3>
              <p>
                Photography, video, audio recording, livestreaming and publication may be restricted. Follow event-specific instructions. Do not record private conversations or publish identifiable images, quotations or professional details of other attendees without required permission.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">8. Fees and Payments</h3>
              <p>
                If an event has a registration, sponsorship or other fee, the applicable amount, inclusions, payment deadline, cancellation terms and refund conditions will be communicated before payment. Complimentary invitations do not create payment obligations unless separately agreed.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">9. Venue, Parking and Belongings</h3>
              <p>
                Guests must follow venue access, parking, dress code, security and property rules. Parking may be limited, chargeable or operated by a third party. Guests should secure their belongings and vehicles. Liability is determined under applicable law; nothing here excludes liability that cannot legally be excluded.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">10. Third Parties and Intellectual Property</h3>
              <p>
                Third-party venues and service providers may have separate terms. Celebso branding, logos and original materials belong to or are used under authorization by relevant rights holders. Reproduction or commercial use requires permission. Guests retain rights in their own materials, subject to rights granted to others and applicable law.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">11. Force Majeure</h3>
              <p>
                An event may be modified, postponed or cancelled due to circumstances beyond reasonable control, including severe weather, public emergencies, venue closure, government restrictions, safety risks or major service disruptions. Refund or rescheduling options will be communicated in accordance with the event policy and applicable law.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">12. Governing Law and Contact</h3>
              <p>
                These terms are governed by the laws of India. Disputes will be addressed through good-faith discussions where practicable and otherwise through courts or dispute-resolution mechanisms having jurisdiction under applicable law. Contact: info@celebso.com. Organizer: ANTELLAY LABS.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'refund' && (
          <div className="space-y-7">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-white font-normal mb-2">
                3. Cancellation, Refund & Rescheduling Policy
              </h2>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">1. Scope</h3>
              <p>This policy applies to event registrations, paid reservations and other event payments administered by Celebso. Event-specific terms disclosed before payment apply to the extent consistent with applicable law.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">2. Guest Cancellation</h3>
              <p>Guests who cannot attend should notify Celebso promptly. For paid events, refund eligibility, cancellation deadlines and any permitted charges will be disclosed before payment. A cancellation request does not automatically create a refund entitlement outside the disclosed terms or applicable law. For complimentary events, cancel RSVPs promptly so the place may be offered to another approved guest.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">3. Non-Transferable Invitations</h3>
              <p>Invitations are personal. A guest may not transfer an invitation, reservation or paid place without prior written approval. An unapproved substitute may be refused entry.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">4. Organizer Cancellation</h3>
              <p>If Celebso cancels an event, guests will be notified using the contact details provided. For paid registrations, available refund or rescheduling options will be communicated and eligible refunds processed in accordance with the booking terms and applicable law.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">5. Rescheduling or Venue Changes</h3>
              <p>If the event date, time, venue or format changes, reasonable efforts will be made to notify guests. Communications will explain applicable options, including refund or transfer arrangements, consistent with the booking terms and law.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">6. Requesting Cancellation</h3>
              <p>Email info@celebso.com with the subject 'Event Cancellation / Refund Request'. Include your name, event name, registration reference, sufficient information to identify the payment and the reason for your request. Do not send passwords, PINs or full card details.</p>
            </div>
          </div>
        )}

        {activeTab === 'disclaimer' && (
          <div className="space-y-7">
            <h2 className="font-serif text-xl sm:text-2xl text-white font-normal mb-2">
              4. No Guarantee Disclaimer
            </h2>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">No Guaranteed Results</h3>
              <p>Celebso Private Events organizes curated gatherings intended to encourage professional networking, knowledge-sharing and potential business connections. Participation does not guarantee any particular result.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">No Promise of Funding or Access</h3>
              <p>Celebso does not promise or guarantee funding, investment, loans, meetings with particular investors or family offices, introductions, partnerships, employment, sales, customers, minimum returns, revenue or business growth. Guest lists, speakers, sponsors and schedules may change.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">Independent Decisions</h3>
              <p>Introductions and interactions depend on the choice and availability of participants. Celebso does not guarantee every statement, business proposal or investment opportunity made by an attendee. Participants should conduct their own due diligence and seek appropriate professional advice before entering financial, legal or commercial arrangements.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">No Investment Offer</h3>
              <p>Attendance is not an offer or solicitation to invest in any company or fund. Nothing in this disclaimer limits rights or obligations that cannot lawfully be excluded.</p>
            </div>
          </div>
        )}

        {activeTab === 'parking' && (
          <div className="space-y-7">
            <h2 className="font-serif text-xl sm:text-2xl text-white font-normal mb-2">
              5. Parking & Venue Policy
            </h2>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">1. Availability & Charges</h3>
              <p>Parking depends on the venue and event. It is not guaranteed unless expressly confirmed in writing. Check the invitation for designated entry points, valet availability and charges. Parking, valet and vehicle-related services may be chargeable.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">2. Vehicle Security</h3>
              <p>Follow venue parking and security instructions, lock your vehicle and avoid leaving valuables in plain sight. If parking is operated by a venue or third party, its terms may apply. Responsibility for loss or damage is determined under applicable law.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">3. Arrival & Access</h3>
              <p>Park only in authorized spaces and do not block emergency exits. Allow sufficient time for registration and security checks. Entry remains subject to the approved guest list and venue requirements.</p>
            </div>
          </div>
        )}

        {activeTab === 'photo' && (
          <div className="space-y-7">
            <h2 className="font-serif text-xl sm:text-2xl text-white font-normal mb-2">
              6. Photography, Recording & Confidentiality Policy
            </h2>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">1. No Unauthorized Recording</h3>
              <p>Unless expressly permitted by the organizer, guests must not make audio or video recordings, livestreams or recordings of private conversations.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">2. Photography Rules</h3>
              <p>Photography may be permitted only in designated areas or under instructions communicated by the organizer. Before taking or publishing identifiable photographs or videos of other guests, obtain permission required by event rules and applicable law. Attendance does not automatically authorize publication of another guest's image.</p>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">3. Confidential Information & Chatham House Rule</h3>
              <p>Do not publish or circulate private guest lists, personal contact details, private messages or confidential business discussions without appropriate authorization. Where the Chatham House Rule is expressly announced, participants may use information received but must not reveal speaker or participant identities or affiliations without permission.</p>
            </div>
          </div>
        )}

        {activeTab === 'conduct' && (
          <div className="space-y-7">
            <h2 className="font-serif text-xl sm:text-2xl text-white font-normal mb-2">
              7. Guest Code of Conduct
            </h2>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">Guest Expectations</h3>
              <p>
                Guests must respect other participants, organizers, speakers and venue staff; honour the private nature of the event; obtain permission before sharing contact details or confidential information; follow photography, recording and confidentiality instructions; avoid harassment, discrimination, intimidation, violence, fraud and disruptive conduct; represent identity and professional role honestly; follow venue dress code and security instructions; avoid unapproved guests and disruptive solicitation; and conduct commercial discussions responsibly.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-base sm:text-lg text-white font-medium">Reporting Concerns & Acknowledgement</h3>
              <p>
                Guests should report safety, privacy or conduct concerns to the event team at info@celebso.com. Where reasonably necessary for safety, security or event integrity, Celebso may issue a warning, restrict access, decline an invitation or ask a participant to leave, subject to applicable law. By attending, guests agree to respect this Code of Conduct.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer Contact Callout */}
      <div className="mt-12 p-6 border border-white/5 bg-[#121216] rounded-none flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-gold" />
          <span>Privacy & Governance Desk: info@celebso.com</span>
        </div>
        <span>Organized by ANTELLAY LABS</span>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
