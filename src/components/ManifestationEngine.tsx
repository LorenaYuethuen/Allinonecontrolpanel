import React, { useState } from 'react';
import { Sparkles, Plus, Check, Target } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useTheme } from '../lib/theme-context';

export const ManifestationEngine: React.FC = () => {
  const { theme } = useTheme();
  const [intention, setIntention] = useState('');
  const [manifestations, setManifestations] = useState([
    { id: 1, text: 'Nomadic lifestyle with complete freedom', status: 'active', synchronicities: 3 },
    { id: 2, text: 'Body as an instrument of consciousness', status: 'active', synchronicities: 7 },
    { id: 3, text: 'Creative income streams aligned with flow', status: 'emerging', synchronicities: 2 },
  ]);

  const [todayActions, setTodayActions] = useState([
    { id: 1, action: '20-minute movement', completed: true },
    { id: 2, action: 'Update Akashic log', completed: true },
    { id: 3, action: 'Inspiration input (film/music)', completed: false },
    { id: 4, action: 'Environment refresh', completed: false },
  ]);

  const [synchronicity, setSynchronicity] = useState({ event: '', signal: 'medium' });
  const [akashicEvents, setAkashicEvents] = useState([
    { date: 'Today, 10:34', event: 'Met photographer in café - discussing nomadic creative work', signal: 'High' },
    { date: 'Yesterday, 15:20', event: 'Found perfect climbing route - body frequency shift', signal: 'Medium' },
    { date: '2 days ago', event: 'Received unexpected income opportunity via DM', signal: 'High' },
  ]);

  // Theme-specific colors
  const themeColors = {
    cosmic: { primary: '#D96AFF', secondary: '#B24BF3' },
    data: { primary: '#3B82F6', secondary: '#60A5FA' },
    xai: { primary: '#00F0FF', secondary: '#00C7FF' },
    vidgen: { primary: '#00FFFF', secondary: '#FF00FF' },
  };

  const handleAddIntention = () => {
    if (intention.trim()) {
      setManifestations([...manifestations, {
        id: Date.now(),
        text: intention,
        status: 'emerging',
        synchronicities: 0
      }]);
      setIntention('');
    }
  };

  const handleAddSynchronicity = () => {
    if (synchronicity.event.trim()) {
      const now = new Date();
      const timeStr = `${now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, ${now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}`;
      setAkashicEvents([
        { date: timeStr, event: synchronicity.event, signal: synchronicity.signal === 'high' ? 'High' : 'Medium' },
        ...akashicEvents
      ]);
      setSynchronicity({ event: '', signal: 'medium' });
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="glass-card p-10 md:p-16 rounded-3xl relative overflow-hidden animate-slide-in">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3C1D5A]/20 via-[#D96AFF]/5 to-[#33F0FF]/10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D96AFF]/15 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#33F0FF]/10 to-transparent rounded-full blur-3xl" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-12 h-12 text-[#00C7FF] neon-glow animate-pulse-glow" />
              <span className="text-xs tracking-[0.2em] uppercase opacity-50">REALITY ENGINEERING</span>
            </div>
            <h1 className="text-5xl md:text-8xl mb-6 leading-[0.95] tracking-tight" style={{ fontWeight: 600 }}>
              Manifestation<br />Engine
            </h1>
            <p className="text-lg md:text-2xl opacity-60 max-w-2xl leading-relaxed" style={{ fontWeight: 400 }}>
              Intention → Alignment → Action → Reality rearranges itself
            </p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="intentions" className="w-full">
          <TabsList className="grid w-full grid-cols-3 glass-card p-1.5 rounded-xl">
            <TabsTrigger value="intentions">Intentions</TabsTrigger>
            <TabsTrigger value="actions">Today's Actions</TabsTrigger>
            <TabsTrigger value="synchronicities">Synchronicities</TabsTrigger>
          </TabsList>

          {/* Tab 1: Intentions */}
          <TabsContent value="intentions" className="space-y-6 mt-6">
            <div className="glass-card p-8 rounded-2xl animate-slide-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C7FF]/20 to-[#00C7FF]/5 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#00C7FF]" />
                </div>
                <div>
                  <h2 className="text-2xl" style={{ fontWeight: 600 }}>Active Intentions</h2>
                  <p className="text-sm opacity-50">Clear, feeling-based, aligned with frequency</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                {manifestations.map((manifest, idx) => (
                  <div
                    key={manifest.id}
                    className="p-6 rounded-xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/10 hover:border-[#00C7FF]/30 transition-all group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <p className="text-lg flex-1 leading-relaxed" style={{ fontWeight: 400 }}>{manifest.text}</p>
                      <span className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap ml-4 ${
                        manifest.status === 'active' 
                          ? 'badge-premium' 
                          : 'badge-secondary'
                      }`}>
                        {manifest.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm opacity-50 group-hover:opacity-70 transition-opacity">
                      <Sparkles className="w-4 h-4" />
                      <span>{manifest.synchronicities} synchronicities recorded</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add New Intention */}
              <div className="p-6 rounded-xl border-2 border-dashed border-white/10 hover:border-[#00C7FF]/40 transition-all bg-gradient-to-br from-white/[0.01] to-transparent">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C7FF]/20 to-[#00C7FF]/5 flex items-center justify-center flex-shrink-0">
                    <Plus className="w-5 h-5 text-[#00C7FF]" />
                  </div>
                  <input
                    type="text"
                    placeholder="Set new intention..."
                    value={intention}
                    onChange={(e) => setIntention(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddIntention()}
                    className="input-premium flex-1"
                  />
                </div>
                <button
                  onClick={handleAddIntention}
                  className="w-full py-3 rounded-xl border-2 transition-all hover:scale-[1.02]"
                  style={{
                    background: `linear-gradient(135deg, ${themeColors[theme].primary}15 0%, ${themeColors[theme].secondary}10 100%)`,
                    borderColor: themeColors[theme].primary + '40',
                    fontWeight: 500
                  }}
                >
                  Add Intention
                </button>
              </div>
            </div>

            {/* Manifestation Protocol */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl mb-6">3-Step Manifestation Protocol</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00C7FF]/20 to-[#BFA36F]/20 mx-auto mb-4 flex items-center justify-center text-2xl">
                    1
                  </div>
                  <h3 className="text-xl mb-2">Set Intention</h3>
                  <p className="text-sm opacity-70">Clear, feeling-based, aligned with frequency</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00C7FF]/20 to-[#BFA36F]/20 mx-auto mb-4 flex items-center justify-center text-2xl">
                    2
                  </div>
                  <h3 className="text-xl mb-2">Minimal Action</h3>
                  <p className="text-sm opacity-70">Tiny aligned moves · Body frequency · Environment shift</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00C7FF]/20 to-[#BFA36F]/20 mx-auto mb-4 flex items-center justify-center text-2xl">
                    3
                  </div>
                  <h3 className="text-xl mb-2">Record Signals</h3>
                  <p className="text-sm opacity-70">Synchronicities · Universe feedback · Reality shifts</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tab 2: Today's Actions */}
          <TabsContent value="actions" className="space-y-6 mt-6">
            <div className="glass-card p-8 rounded-2xl animate-slide-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#BFA36F]/20 to-[#BFA36F]/5 flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#BFA36F]" />
                </div>
                <div>
                  <h2 className="text-2xl" style={{ fontWeight: 600 }}>Today's Alignment Actions</h2>
                  <p className="text-sm opacity-50">Small moves that align you with intentions</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {todayActions.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setTodayActions(prev =>
                        prev.map(a => a.id === item.id ? { ...a, completed: !a.completed } : a)
                      );
                    }}
                    className={`w-full p-5 rounded-xl flex items-center gap-4 transition-all ${
                      item.completed
                        ? 'bg-gradient-to-r from-[#00C7FF]/10 to-[#00C7FF]/5 border border-[#00C7FF]/30 shadow-lg shadow-[#00C7FF]/10'
                        : 'bg-white/[0.02] border border-white/10 hover:border-[#00C7FF]/40 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                      item.completed 
                        ? 'border-[#00C7FF] bg-[#00C7FF] shadow-lg shadow-[#00C7FF]/50' 
                        : 'border-white/30 hover:border-[#00C7FF]/50'
                    }`}>
                      {item.completed && <Check className="w-4 h-4" />}
                    </div>
                    <span className={`flex-1 text-left ${item.completed ? 'line-through opacity-50' : 'opacity-90'}`} style={{ fontWeight: 400 }}>
                      {item.action}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Tab 3: Synchronicities */}
          <TabsContent value="synchronicities" className="space-y-6 mt-6">
            <div className="glass-card p-8 rounded-2xl animate-slide-in">
              <h2 className="text-2xl mb-2" style={{ fontWeight: 600 }}>Akashic Log · Synchronicities</h2>
              <p className="opacity-70 mb-6">Reality signals · Universe feedback · Probability line shifts</p>
              
              {/* Add New Synchronicity */}
              <div className="mb-6 p-6 rounded-xl border-2 border-dashed border-white/10 bg-white/[0.01]">
                <label className="text-sm opacity-70 mb-3 block" style={{ fontWeight: 500 }}>
                  Record New Synchronicity
                </label>
                <textarea
                  rows={3}
                  placeholder="What happened? Unexpected encounters, opportunities, meaningful coincidences..."
                  value={synchronicity.event}
                  onChange={(e) => setSynchronicity(prev => ({ ...prev, event: e.target.value }))}
                  className="input-premium resize-none mb-3"
                />
                <div className="flex gap-3">
                  <div className="flex gap-2">
                    {['high', 'medium'].map((sig) => (
                      <button
                        key={sig}
                        onClick={() => setSynchronicity(prev => ({ ...prev, signal: sig }))}
                        className={`px-4 py-2 rounded-lg text-sm transition-all ${
                          synchronicity.signal === sig
                            ? sig === 'high' 
                              ? 'bg-[#00C7FF]/20 text-[#00C7FF] border border-[#00C7FF]/50'
                              : 'bg-[#BFA36F]/20 text-[#BFA36F] border border-[#BFA36F]/50'
                            : 'bg-white/5 border border-white/10'
                        }`}
                      >
                        {sig === 'high' ? 'High Signal' : 'Medium Signal'}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleAddSynchronicity}
                    className="flex-1 py-2 rounded-lg border-2 transition-all hover:scale-[1.02]"
                    style={{
                      background: `linear-gradient(135deg, ${themeColors[theme].primary}15 0%, ${themeColors[theme].secondary}10 100%)`,
                      borderColor: themeColors[theme].primary + '40',
                      fontWeight: 500
                    }}
                  >
                    Save Event
                  </button>
                </div>
              </div>

              {/* Events List */}
              <div className="space-y-4">
                {akashicEvents.map((event, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm opacity-60">{event.date}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        event.signal === 'High' 
                          ? 'bg-[#00C7FF]/20 text-[#00C7FF]' 
                          : 'bg-[#BFA36F]/20 text-[#BFA36F]'
                      }`}>
                        {event.signal} Signal
                      </span>
                    </div>
                    <p className="opacity-90">{event.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};