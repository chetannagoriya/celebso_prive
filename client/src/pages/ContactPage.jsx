import React, { useState } from 'react';
import { Mail, MapPin, Phone, Shield, Lock, Send, Clock, CheckCircle2 } from 'lucide-react';

export const ContactPage = ({ onNavigate, onOpenDashboard }) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    subject: 'Salon Ingress & Inquiry',
    chapter: 'Jaipur Chapter',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const desks = [
    {
      city: 'JAIPUR',
      country: 'India',
      location: 'Royal Rambagh Corridor, Jaipur 302005',
      desk: 'Flagship Heritage Secretariat',
      email: 'jaipur.concierge@celebso.com',
      hotline: '+91 141 238 5700',
    },
    {
      city: 'DUBAI & ABU DHABI',
      country: 'United Arab Emirates',
      location: 'DIFC Gate Precinct 4, Dubai',
      desk: 'GCC Sovereign Capital Desk',
      email: 'emirates.concierge@celebso.com',
      hotline: '+971 4 362 7000',
    },
    {
      city: 'LONDON',
      country: 'United Kingdom',
      location: 'Berkeley Square, Mayfair, London W1J',
      desk: 'European Family Office Secretariat',
      email: 'london.concierge@celebso.com',
      hotline: '+44 20 7946 0120',
    },
    {
      city: 'ZURICH',
      country: 'Switzerland',
      location: 'Bahnhofstrasse 45, 8001 Zurich',
      desk: 'Alpine Custody & Private Desk',
      email: 'zurich.concierge@celebso.com',
      hotline: '+41 44 221 3400',
    },
    {
      city: 'DOHA',
      country: 'Qatar',
      location: 'The Pearl-Qatar, Tower 22, Doha',
      desk: 'Gulf Sovereign Relations',
      email: 'doha.concierge@celebso.com',
      hotline: '+974 4499 8000',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 800);
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold/30 bg-gold/5 text-gold text-[10px] tracking-[0.3em] uppercase">
          <Shield className="w-3.5 h-3.5" />
          <span>Private Concierge</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-wide">
          Discrete <span className="gold-metallic-text italic">Contact</span>
        </h1>
        <p className="font-serif text-lg sm:text-xl text-zinc-300 italic font-light leading-relaxed">
          “Direct encrypted communiqués to the High Advisory Secretariat and our global chapter desks.”
        </p>
      </div>

      {/* Global Chapter Desks Grid */}
      <div className="mb-20 space-y-6">
        <div className="text-center space-y-2">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium">Permanent Secretariats</p>
          <h2 className="font-serif text-3xl text-white">Global Chapter Desks</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {desks.map((d, i) => (
            <div
              key={i}
              className="p-8 bg-brand-card border border-white/10 hover:border-gold/40 transition-all space-y-4"
            >
              <div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-gold font-mono block mb-1">
                  {d.desk}
                </span>
                <h3 className="font-serif text-2xl text-white font-medium">
                  {d.city}
                </h3>
                <p className="text-xs text-zinc-400 font-light">{d.country}</p>
              </div>

              <div className="space-y-2 pt-3 border-t border-white/10 text-xs text-zinc-300 font-light">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span>{d.location}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span className="font-mono text-zinc-400">{d.email}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span className="font-mono text-zinc-400">{d.hotline}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Encrypted Communiqué Form & Advisory Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Form */}
        <div className="lg:col-span-8 p-8 sm:p-12 border border-gold/40 bg-brand-card shadow-gold-glow">
          <div className="space-y-2 mb-8">
            <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-[0.2em]">
              <Lock className="w-4 h-4" />
              <span>Encrypted Communiqué Dispatch</span>
            </div>
            <h3 className="font-serif text-2xl text-white">Transmit Encrypted Message</h3>
            <p className="text-xs text-zinc-400 font-light">
              Directly routed to the Chief Curator and Executive Concierge.
            </p>
          </div>

          {sent ? (
            <div className="text-center p-8 border border-gold/30 bg-gold/5 space-y-4">
              <CheckCircle2 className="w-10 h-10 text-gold mx-auto" />
              <h4 className="font-serif text-2xl text-white">Communiqué Sealed & Dispatched</h4>
              <p className="text-xs text-zinc-300 font-light leading-relaxed max-w-md mx-auto">
                Your dispatch has been assigned reference <strong className="font-mono text-gold">DISPATCH-{Math.floor(10000 + Math.random() * 90000)}</strong>. A private response will be delivered by courier or encrypted mail within 24 hours.
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-xs uppercase tracking-widest text-gold underline pt-2"
              >
                Send Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lord / Lady / Dr. / Principal"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    Confidential Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="principal@house.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    Direct Chapter
                  </label>
                  <select
                    value={formData.chapter}
                    onChange={(e) => setFormData({ ...formData, chapter: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none"
                  >
                    <option value="Jaipur Chapter">Jaipur Chapter (Flagship)</option>
                    <option value="Dubai Chapter">Dubai / Abu Dhabi Desk</option>
                    <option value="London Chapter">London Mayfair Desk</option>
                    <option value="Zurich Chapter">Zurich Private Desk</option>
                    <option value="Doha Chapter">Doha Sovereign Desk</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    Subject Matter
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none"
                  >
                    <option value="Salon Ingress & Inquiry">Salon Ingress & Inquiry</option>
                    <option value="Commission Bespoke Conclave">Commission Bespoke Conclave</option>
                    <option value="Advisory Council Communication">Advisory Council Communication</option>
                    <option value="Media / Discretion Protocol">Discretion Protocol Clarification</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                  Discrete Communiqué
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Detail your message to the Secretariat..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/60 border border-white/10 focus:border-gold px-4 py-3 text-xs text-white outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 bg-gold hover:bg-gold-light text-black text-xs uppercase tracking-[0.25em] font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {sending ? (
                  <span>Encrypting & Transmitting...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit Encrypted Communiqué</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Right Info Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-8 border border-white/10 bg-brand-card space-y-4">
            <h4 className="font-serif text-xl text-white">Protocol Verification</h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              For high-security diplomatic communications or physical dispatch via diplomatic pouch, contact our Zurich repository desk.
            </p>
            <div className="pt-2 text-xs font-mono text-gold space-y-1">
              <p>PGP FINGERPRINT:</p>
              <p className="text-[10px] text-zinc-500 break-all">
                4B2A 99F1 8C72 331E 90B4 A190 FF02 C891 7A2B
              </p>
            </div>
          </div>

          <div className="p-8 border border-gold/30 bg-gradient-to-b from-brand-card to-black space-y-4">
            <h4 className="font-serif text-xl text-white">Advisory Dossier Portal</h4>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              High Advisory Board members holding cryptographic physical keys may access the review portal directly.
            </p>
            <button
              onClick={onOpenDashboard}
              className="w-full py-3 border border-gold/60 text-gold hover:bg-gold hover:text-black text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Access Advisory Portal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
