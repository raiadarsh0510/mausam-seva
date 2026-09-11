// src/components/moes/PersonaDataViewer.jsx
import React, { useState, useMemo } from 'react';
import { 
  Database, Search, Filter, Users, CheckCircle2, AlertTriangle, 
  Radio, FileCode, Download, ShieldCheck, Tractor, HeartPulse, 
  Car, GraduationCap, Flame, Anchor, Plane, CalendarDays, 
  Layers, ArrowUpRight, Copy, Check
} from 'lucide-react';
import { PERSONA_SCHEMAS, ACTUAL_PERSONA_ENTRIES } from '../../data/personaEntriesData';

const PERSONA_ICONS = {
  farmer: Tractor,
  senior_health: HeartPulse,
  commuter: Car,
  student: GraduationCap,
  fitness: Flame,
  coastal: Anchor,
  traveler: Plane,
  event: CalendarDays
};

export function PersonaDataViewer({ lang = 'en' }) {
  const [selectedPersonaFilter, setSelectedPersonaFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDataView, setActiveDataView] = useState('entries'); // 'entries' | 'schemas' | 'json'
  const [copiedId, setCopiedId] = useState(null);
  const [selectedRawEntry, setSelectedRawEntry] = useState(null);

  // Filtered persona entries
  const filteredEntries = useMemo(() => {
    return ACTUAL_PERSONA_ENTRIES.filter(entry => {
      const matchesPersona = selectedPersonaFilter === 'all' || entry.personaId === selectedPersonaFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q || 
        entry.district.toLowerCase().includes(q) ||
        entry.state.toLowerCase().includes(q) ||
        entry.citizenQuery.toLowerCase().includes(q) ||
        entry.predictiveTrigger.toLowerCase().includes(q) ||
        entry.personaName.toLowerCase().includes(q) ||
        entry.entryId.toLowerCase().includes(q);
      return matchesPersona && matchesQuery;
    });
  }, [selectedPersonaFilter, searchQuery]);

  const handleCopyJson = (obj, id) => {
    navigator.clipboard.writeText(JSON.stringify(obj, null, 2));
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExportCSV = () => {
    const headers = ['Entry ID', 'Timestamp', 'Persona', 'District', 'State', 'Citizen Query', 'Predictive Trigger', 'Status'];
    const rows = filteredEntries.map(e => [
      e.entryId,
      `"${e.timestamp}"`,
      `"${e.personaName}"`,
      `"${e.district}"`,
      `"${e.state}"`,
      `"${e.citizenQuery.replace(/"/g, '""')}"`,
      `"${e.predictiveTrigger.replace(/"/g, '""')}"`,
      e.status
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `moes_persona_telemetry_entries_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Top Telemetry KPI Ribbon */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 bg-[#070F2B] border border-purple-500/30 shadow-md p-3.5 rounded-2xl border border-blue-900/60">
        <div className="p-2.5">
          <span className="text-[11px] text-sky-200 font-semibold block mb-0.5">
            {lang === 'hi' ? 'दैनिक सक्रिय प्रविष्टियाँ' : 'Daily Ingested Entries'}
          </span>
          <span className="text-xl sm:text-2xl font-black text-purple-300 font-mono">3.42 Million</span>
          <span className="text-[10px] text-emerald-400 block font-semibold mt-0.5">● 100% Ingestion Rate</span>
        </div>
        <div className="p-2.5">
          <span className="text-[11px] text-sky-200 font-semibold block mb-0.5">
            {lang === 'hi' ? 'सक्रिय पर्सोना श्रेणियां' : 'Active Persona Clusters'}
          </span>
          <span className="text-xl sm:text-2xl font-black text-white font-mono">8 Personas</span>
          <span className="text-[10px] text-sky-400 block font-semibold mt-0.5">Ages 10 to 80+ Yrs</span>
        </div>
        <div className="p-2.5">
          <span className="text-[11px] text-sky-200 font-semibold block mb-0.5">
            {lang === 'hi' ? 'सत्यापित ग्राउंड-ट्रूथ' : 'Ground-Truth Validated'}
          </span>
          <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">94.6% Match</span>
          <span className="text-[10px] text-sky-200 block font-semibold mt-0.5">Coupled with Radar</span>
        </div>
        <div className="p-2.5">
          <span className="text-[11px] text-sky-200 font-semibold block mb-0.5">
            {lang === 'hi' ? 'डेटा गोपनीयता मानक' : 'Privacy Anonymization'}
          </span>
          <span className="text-xl sm:text-2xl font-black text-purple-400 font-mono">DPDP 2023</span>
          <span className="text-[10px] text-purple-300 block font-semibold mt-0.5">500m Grid / Zero PII</span>
        </div>
      </div>

      {/* Navigation Sub-Tabs & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-blue-900/60">
        <div className="flex items-center gap-1.5 bg-[#070F2B] p-1 rounded-xl border border-blue-900/60">
          <button
            onClick={() => setActiveDataView('entries')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeDataView === 'entries'
                ? 'bg-gradient-to-r from-purple-600 to-sky-600 text-white shadow-sm font-black'
                : 'text-sky-200 hover:text-white'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'वास्तविक प्रविष्टियाँ (Live Stream)' : 'Actual Entries (Live Stream)'}</span>
            <span className="ml-1 text-[10px] px-1.5 py-0.2 rounded bg-[#0C1A30] text-sky-100 font-mono">
              {filteredEntries.length}
            </span>
          </button>

          <button
            onClick={() => setActiveDataView('schemas')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeDataView === 'schemas'
                ? 'bg-gradient-to-r from-purple-600 to-sky-600 text-white shadow-sm font-black'
                : 'text-sky-200 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'डेटा स्कीमा व मंत्रालय मैपिंग' : 'Schemas & Ministry Mapping'}</span>
          </button>

          <button
            onClick={() => setActiveDataView('json')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeDataView === 'json'
                ? 'bg-gradient-to-r from-purple-600 to-sky-600 text-white shadow-sm font-black'
                : 'text-sky-200 hover:text-white'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'कच्चा JSON एपीआई पेलोड' : 'Raw JSON Telemetry'}</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#132247] hover:bg-monsoon-700 text-white text-xs font-bold border border-purple-500/30 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: ACTUAL PERSONA ENTRIES STREAM */}
      {activeDataView === 'entries' && (
        <div className="space-y-4">
          {/* Persona Filter Chips & Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-sky-200 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'hi' ? 'जिले, प्रश्न या फसल/पैरामीटर से खोजें...' : 'Filter by district, query keyword, parameter...'}
                className="w-full bg-[#070F2B] border border-blue-900/60 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-monsoon-500 focus:outline-none focus:border-amber-500"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-200 hover:text-white text-xs font-mono"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Persona Quick Pill Filters */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <button
                onClick={() => setSelectedPersonaFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedPersonaFilter === 'all'
                    ? 'bg-monsoon-700 text-white'
                    : 'bg-[#070F2B] text-sky-200 hover:text-white border border-blue-900/60'
                }`}
              >
                {lang === 'hi' ? 'सभी पर्सोना (All)' : 'All Personas'} ({ACTUAL_PERSONA_ENTRIES.length})
              </button>

              {PERSONA_SCHEMAS.map(schema => {
                const isSelected = selectedPersonaFilter === schema.id;
                const IconComp = PERSONA_ICONS[schema.id] || Users;
                return (
                  <button
                    key={schema.id}
                    onClick={() => setSelectedPersonaFilter(schema.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                      isSelected
                        ? 'bg-amber-500/20 text-sky-300 border border-amber-500/40 font-black'
                        : 'bg-[#070F2B] text-sky-200 hover:text-white border border-blue-900/60'
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                    <span>{schema.name.split('/')[0].trim()}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Persona Entries List */}
          {filteredEntries.length === 0 ? (
            <div className="bg-[#070F2B] border border-blue-900/60 rounded-2xl p-8 text-center text-sky-200 text-xs">
              {lang === 'hi' 
                ? 'कोई प्रविष्टि नहीं मिली। कृपया फ़िल्टर बदलें।' 
                : 'No persona entries match the selected filter or query. Try resetting your search.'}
            </div>
          ) : (
            <div className="space-y-3">
              {filteredEntries.map((entry) => {
                const IconComp = PERSONA_ICONS[entry.personaId] || Users;
                return (
                  <div 
                    key={entry.entryId}
                    className="bg-[#070F2B] border border-blue-900/60 rounded-2xl p-4 sm:p-5 hover:border-purple-500/30 transition-all relative overflow-hidden"
                  >
                    {/* Left threat color bar indicator */}
                    <div 
                      className="absolute left-0 top-0 bottom-0 w-1.5"
                      style={{ backgroundColor: entry.threatColor }}
                    ></div>

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#0C1A30] border border-blue-900/60 flex items-center justify-center text-purple-300">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-white">{entry.personaName}</span>
                            <span className="font-mono text-[10px] text-sky-200 bg-[#0C1A30] px-2 py-0.5 rounded border border-blue-900/60">
                              {entry.entryId}
                            </span>
                            <span className="text-[10px] font-mono text-sky-200">
                              User: {entry.userAge}
                            </span>
                          </div>
                          <span className="text-[11px] text-sky-200">
                            📍 {entry.district}, {entry.state} • <span className="text-monsoon-500 font-mono">{entry.timestamp}</span>
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{entry.status}</span>
                        </span>
                        <button
                          onClick={() => handleCopyJson(entry, entry.entryId)}
                          className="text-[11px] font-mono px-2 py-1 rounded bg-[#0C1A30] hover:bg-[#132247] text-sky-100 border border-blue-900/60 flex items-center gap-1 transition-colors"
                          title="Copy Entry JSON"
                        >
                          {copiedId === entry.entryId ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>JSON</span>
                        </button>
                      </div>
                    </div>

                    {/* Citizen Verbatim Input */}
                    <div className="bg-[#0C1A30]/60 border border-blue-900/60/80 rounded-xl p-3 mb-3">
                      <div className="flex items-center justify-between text-[10px] text-sky-200 font-semibold mb-1">
                        <span>CITIZEN INGESTED QUERY / VOICE INPUT</span>
                        <span className="font-mono text-purple-300">{entry.inputChannel}</span>
                      </div>
                      <p className="text-xs text-amber-200/90 font-medium italic">
                        "{entry.citizenQuery}"
                      </p>
                    </div>

                    {/* Telemetry Sensor Payload Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                      {Object.entries(entry.telemetryData).map(([key, val], idx) => (
                        <div key={idx} className="bg-[#0C1A30]/40 border border-blue-900/60/60 rounded-lg p-2">
                          <span className="text-[10px] text-sky-200 block truncate uppercase font-semibold">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="text-xs font-mono font-bold text-white block mt-0.5">
                            {val}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Ground-Truth & MoES Inter-Ministerial Impact */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                      <div className="bg-emerald-950/30 border border-emerald-800/30 p-2.5 rounded-xl text-emerald-300">
                        <strong className="block text-[10px] uppercase tracking-wider text-emerald-400 mb-0.5">
                          ✓ Citizen Ground-Truth Feedback:
                        </strong>
                        <span>{entry.groundTruthReport}</span>
                      </div>

                      <div className="bg-sky-950/30 border border-sky-800/30 p-2.5 rounded-xl text-sky-200">
                        <strong className="block text-[10px] uppercase tracking-wider text-sky-400 mb-0.5">
                          🏛️ Inter-Ministerial Predictive Action:
                        </strong>
                        <span>{entry.predictiveTrigger}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* VIEW 2: PERSONA TELEMETRY SCHEMAS & MINISTRIES */}
      {activeDataView === 'schemas' && (
        <div className="space-y-4">
          <p className="text-xs text-sky-100">
            This telemetric ingestion schema governs how anonymized citizen interactions are categorized, scrubbed for PII under the <strong>Digital Personal Data Protection (DPDP) Act 2023</strong>, and routed to relevant central ministries (FCI, CEA, ICMR, MoRTH, INCOIS) for macro forecasting:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {PERSONA_SCHEMAS.map(schema => {
              const IconComp = PERSONA_ICONS[schema.id] || Users;
              return (
                <div key={schema.id} className="bg-[#070F2B] border border-blue-900/60 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#0C1A30] border border-blue-900/60 flex items-center justify-center text-purple-300">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{schema.name}</h4>
                        <span className="text-[11px] text-sky-200">{schema.targetDemographic}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-purple-300 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20 font-black">
                      {schema.sharePct}% National Share
                    </span>
                  </div>

                  <div className="text-xs space-y-2 pt-2 border-t border-blue-900/60">
                    <div className="flex items-center justify-between text-sky-200">
                      <span>Daily Volume Ingested:</span>
                      <span className="font-mono font-bold text-white">{schema.dailyVolume}</span>
                    </div>
                    <div className="flex items-center justify-between text-sky-200">
                      <span>Primary Ingestion Modality:</span>
                      <span className="text-sky-300 font-medium">{schema.inputModality}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] text-sky-200 uppercase font-semibold block mb-1.5">
                      Telemetry Parameters Collected:
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {schema.keyParameters.map((p, i) => (
                        <div key={i} className="bg-[#0C1A30]/60 px-2.5 py-1.5 rounded-lg border border-blue-900/60 text-[11px]">
                          <span className="text-white block font-medium truncate">{p.label}</span>
                          <span className="text-[10px] font-mono text-sky-200">Unit: {p.unit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs pt-2 border-t border-blue-900/60">
                    <div className="bg-sky-950/30 p-2.5 rounded-xl border border-sky-800/30 text-sky-200">
                      <strong className="text-[10px] text-sky-400 uppercase block mb-0.5">Central Ministry Partner:</strong>
                      <span>{schema.interMinisterialConsumer}</span>
                    </div>
                    <div className="bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-800/30 text-emerald-300">
                      <strong className="text-[10px] text-emerald-400 uppercase block mb-0.5">Macro Predictive Model:</strong>
                      <span>{schema.predictiveModel}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-sky-200 bg-[#0C1A30]/40 p-2 rounded-lg border border-blue-900/60">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>{schema.privacyCompliance}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 3: RAW JSON TELEMETRY INSPECTOR */}
      {activeDataView === 'json' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-sky-200">
            <span>
              Direct Government Machine-to-Machine Endpoint: <code className="text-purple-300 font-mono">GET /api/v1/moes/telemetry/persona-entries</code>
            </span>
            <button
              onClick={() => handleCopyJson(ACTUAL_PERSONA_ENTRIES, 'all')}
              className="flex items-center gap-1 px-3 py-1 rounded bg-[#132247] hover:bg-monsoon-700 text-white font-mono text-xs transition-colors"
            >
              {copiedId === 'all' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>Copy Full Array ({ACTUAL_PERSONA_ENTRIES.length} entries)</span>
            </button>
          </div>

          <pre className="bg-[#070F2B] border border-blue-900/60 rounded-2xl p-4 text-xs font-mono text-emerald-400 overflow-x-auto max-h-[500px] leading-relaxed select-all">
            {JSON.stringify(ACTUAL_PERSONA_ENTRIES, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
