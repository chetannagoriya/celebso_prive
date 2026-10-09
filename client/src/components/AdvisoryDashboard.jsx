import React, { useState, useEffect } from 'react';
import {
  X,
  Shield,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Archive,
  RefreshCw,
  Building,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
} from 'lucide-react';
import { fetchPetitions, updatePetition, fetchStats, fetchPartners } from '../services/api';

export const AdvisoryDashboard = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('petitions');
  const [petitions, setPetitions] = useState([]);
  const [partners, setPartners] = useState([]);
  const [stats, setStats] = useState({ total: 0, underReview: 0, accepted: 0, waitlisted: 0 });
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen, statusFilter]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [petRes, statsRes, partRes] = await Promise.all([
        fetchPetitions({ status: statusFilter }),
        fetchStats(),
        fetchPartners(),
      ]);

      if (petRes?.data) setPetitions(petRes.data);
      if (statsRes?.stats) setStats(statsRes.stats);
      if (partRes?.data) setPartners(partRes.data);
    } catch (err) {
      console.error('Advisory dashboard fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await updatePetition(id, { status: newStatus });
      setPetitions((prev) =>
        prev.map((item) => (item._id === id ? { ...item, status: newStatus } : item))
      );
      if (selectedItem?._id === id) {
        setSelectedItem((prev) => ({ ...prev, status: newStatus }));
      }
      loadData();
    } catch (err) {
      console.error('Update status error:', err);
    }
  };

  if (!isOpen) return null;

  const filteredPetitions = petitions.filter((p) => {
    const term = searchTerm.toLowerCase();
    return (
      p.fullName?.toLowerCase().includes(term) ||
      p.organization?.toLowerCase().includes(term) ||
      p.city?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-6xl h-[88vh] bg-[#0E0E12] border border-gold/40 shadow-2xl flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="px-8 py-5 border-b border-white/10 bg-[#0A0A0E] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center text-gold">
              <Shield className="w-4 h-4 text-gold" />
            </div>
            <div>
              <h2 className="font-serif text-base sm:text-lg uppercase tracking-[0.22em] text-white">
                High Advisory Board · Vetting Portal
              </h2>
              <p className="text-[10px] font-mono tracking-widest text-gold/80">
                Restricted Protocol Console · Confidential Principal Dossiers
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              className="p-2 text-zinc-400 hover:text-gold transition-colors"
              title="Refresh Records"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button onClick={onClose} className="p-2 text-zinc-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sub-Header Stats & Tabs */}
        <div className="px-8 py-4 bg-[#121217] border-b border-white/5 flex flex-wrap items-center justify-between gap-4">
          {/* Tabs */}
          <div className="flex gap-2 text-xs uppercase tracking-wider font-medium">
            <button
              onClick={() => setActiveTab('petitions')}
              className={`px-4 py-2 border transition-colors ${
                activeTab === 'petitions'
                  ? 'border-gold bg-gold/15 text-gold'
                  : 'border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              Candidate Petitions ({stats.total || filteredPetitions.length})
            </button>
            <button
              onClick={() => setActiveTab('partners')}
              className={`px-4 py-2 border transition-colors ${
                activeTab === 'partners'
                  ? 'border-gold bg-gold/15 text-gold'
                  : 'border-white/10 text-zinc-400 hover:text-white'
              }`}
            >
              Institutional Alignment ({partners.length})
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Review: {stats.underReview || 0}</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Accepted: {stats.accepted || 0}</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-zinc-500"></span>
              <span>Waitlist: {stats.waitlisted || 0}</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Main List */}
          <div className="flex-1 flex flex-col border-r border-white/5 overflow-hidden">
            {/* Search and Filter Toolbar */}
            {activeTab === 'petitions' && (
              <div className="p-4 bg-[#14141A] border-b border-white/5 flex flex-wrap gap-3 items-center justify-between">
                <div className="relative flex-1 min-w-[240px]">
                  <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search principal name, organization, or city..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#1A1A22] border border-white/10 pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Filter className="w-3.5 h-3.5 text-gold" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-[#1A1A22] border border-white/10 text-xs text-zinc-300 px-3 py-2 focus:outline-none focus:border-gold"
                  >
                    <option value="ALL">All Statuses</option>
                    <option value="UNDER_REVIEW">Under Review</option>
                    <option value="ACCEPTED">Accepted</option>
                    <option value="WAITLISTED">Waitlisted</option>
                  </select>
                </div>
              </div>
            )}

            {/* List Table / Cards */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {activeTab === 'petitions' ? (
                filteredPetitions.length === 0 ? (
                  <div className="py-16 text-center text-zinc-500 text-xs">
                    No dossiers found matching filter criteria.
                  </div>
                ) : (
                  filteredPetitions.map((item) => (
                    <div
                      key={item._id}
                      onClick={() => setSelectedItem(item)}
                      className={`p-4 border transition-all cursor-pointer ${
                        selectedItem?._id === item._id
                          ? 'border-gold bg-[#1A1A24]'
                          : 'border-white/5 bg-[#121217] hover:border-gold/30'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-serif text-sm font-semibold text-white">
                              {item.fullName}
                            </span>
                            <span className="text-[10px] font-mono text-gold px-1.5 py-0.5 bg-gold/10 border border-gold/20">
                              {item.title}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-400 mt-1 flex items-center gap-2">
                            <span>{item.organization}</span>
                            <span>•</span>
                            <span className="text-zinc-500">{item.city}</span>
                          </p>
                        </div>

                        {/* Status Badge */}
                        <span
                          className={`text-[9px] font-mono uppercase px-2 py-1 tracking-wider border ${
                            item.status === 'ACCEPTED'
                              ? 'bg-emerald-950/60 border-emerald-600 text-emerald-300'
                              : item.status === 'WAITLISTED'
                              ? 'bg-zinc-800 border-zinc-600 text-zinc-300'
                              : 'bg-amber-950/60 border-amber-600 text-amber-300'
                          }`}
                        >
                          {item.status?.replace('_', ' ')}
                        </span>
                      </div>
                    </div>
                  ))
                )
              ) : (
                /* Institutional Partners List */
                partners.map((prt) => (
                  <div
                    key={prt._id}
                    className="p-4 border border-white/5 bg-[#121217] space-y-2"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-gold">
                          {prt.pillar}
                        </span>
                        <h4 className="font-serif text-sm text-white font-medium">
                          {prt.institutionName}
                        </h4>
                        <p className="text-xs text-zinc-400">
                          Rep: {prt.contactPerson} ({prt.email})
                        </p>
                      </div>
                      <span className="text-[9px] font-mono bg-white/5 px-2 py-1 text-zinc-300">
                        {prt.status}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 font-light border-t border-white/5 pt-2">
                      {prt.proposalSummary}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Dossier Detail Inspector Pane (Right Side) */}
          <div className="hidden md:flex w-96 bg-[#0B0B0E] flex-col overflow-y-auto p-6 space-y-6">
            {selectedItem ? (
              <>
                <div className="space-y-1 pb-4 border-b border-white/10">
                  <span className="text-[10px] font-mono text-gold tracking-widest uppercase">
                    Dossier REF: {selectedItem._id}
                  </span>
                  <h3 className="font-serif text-lg text-white font-medium">
                    {selectedItem.fullName}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light">
                    {selectedItem.title} · {selectedItem.organization}
                  </p>
                </div>

                {/* Specifics */}
                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Mail className="w-3.5 h-3.5 text-gold" />
                    <span>{selectedItem.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Phone className="w-3.5 h-3.5 text-gold" />
                    <span>{selectedItem.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span>Base: {selectedItem.city}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <TrendingUp className="w-3.5 h-3.5 text-gold" />
                    <span>Capital Tier: {selectedItem.capitalBracket}</span>
                  </div>
                </div>

                {/* Salons Interested */}
                {selectedItem.salonPreferences?.length > 0 && (
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] uppercase font-mono text-zinc-500">
                      Salon Convergence Choices:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedItem.salonPreferences.map((s, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 text-zinc-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Statement of Intent */}
                <div className="space-y-2 bg-[#121217] p-4 border border-white/5">
                  <span className="text-[10px] uppercase font-mono text-gold tracking-wider">
                    Sovereign Statement
                  </span>
                  <p className="text-xs text-zinc-300 italic font-serif leading-relaxed">
                    "{selectedItem.statement}"
                  </p>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <span className="text-[10px] uppercase font-mono text-zinc-500">
                    Advisory Board Ruling
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleStatusUpdate(selectedItem._id, 'ACCEPTED')}
                      className="bg-emerald-600 hover:bg-emerald-500 text-black py-2 text-[10px] uppercase tracking-wider font-bold transition-colors"
                    >
                      Approve & Admit
                    </button>
                    <button
                      onClick={() => handleStatusUpdate(selectedItem._id, 'WAITLISTED')}
                      className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 py-2 text-[10px] uppercase tracking-wider font-medium transition-colors"
                    >
                      Waitlist
                    </button>
                  </div>
                  <button
                    onClick={() => handleStatusUpdate(selectedItem._id, 'ARCHIVED')}
                    className="w-full border border-zinc-700 hover:border-red-500 hover:text-red-400 text-zinc-400 py-1.5 text-[10px] uppercase tracking-wider transition-colors"
                  >
                    Archive Dossier
                  </button>
                </div>
              </>
            ) : (
              <div className="h-full flex items-center justify-center text-center text-zinc-600 text-xs">
                Select a candidate dossier on the left to inspect credentials.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryDashboard;
