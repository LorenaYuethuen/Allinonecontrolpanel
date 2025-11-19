import React, { useState } from 'react';
import { Calendar, Sparkles, TrendingUp, BookOpen } from 'lucide-react';
import { useTheme } from '../lib/theme-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export const AkashicArchives: React.FC = () => {
  const { theme } = useTheme();
  const [selectedEntry, setSelectedEntry] = useState<number | null>(null);
  const [todayLog, setTodayLog] = useState({
    energy: '',
    actions: '',
    synchronicities: '',
    bodyFeedback: ''
  });

  // Theme-specific colors
  const themeColors = {
    cosmic: { primary: '#D96AFF', secondary: '#B24BF3', gradient: 'from-[#D96AFF] via-[#B24BF3] to-[#7C3AED]' },
    data: { primary: '#3B82F6', secondary: '#60A5FA', gradient: 'from-[#3B82F6] via-[#60A5FA] to-[#1E40AF]' },
    xai: { primary: '#00F0FF', secondary: '#00C7FF', gradient: 'from-[#00F0FF] via-[#00C7FF] to-[#0EA5E9]' },
    vidgen: { primary: '#00FFFF', secondary: '#FF00FF', gradient: 'from-[#00FFFF] via-[#FF00FF] to-[#7C3AED]' },
  };

  const [entries, setEntries] = useState([
    {
      id: 1,
      date: 'Nov 18, 2025',
      energy: 'High',
      actions: ['90min climbing', 'Akashic log', 'Environment refresh'],
      synchronicities: ['Met photographer discussing nomadic work', 'Found perfect new climbing route'],
      bodyFeedback: 'Strong, grounded, clear-minded',
      inspiration: 'Brutalist architecture photos',
      nextCalling: 'Research Lisbon climbing gyms',
    },
    {
      id: 2,
      date: 'Nov 17, 2025',
      energy: 'Medium',
      actions: ['45min swimming', '30min walk', 'Film: Lost in Translation'],
      synchronicities: ['Unexpected income DM', 'Someone mentioned exactly what I was thinking'],
      bodyFeedback: 'Fluid, relaxed, slightly tired',
      inspiration: 'Neon color palettes from film',
      nextCalling: 'Explore flow-state projects',
    },
    {
      id: 3,
      date: 'Nov 16, 2025',
      energy: 'Low',
      actions: ['Rest day', 'Gentle stretching', 'Journaling'],
      synchronicities: ['Clarity about next move emerged during rest'],
      bodyFeedback: 'Needed recovery, nervous system reset',
      inspiration: 'Silence and spaciousness',
      nextCalling: 'Trust the low energy phase',
    },
  ]);

  const handleSaveLog = () => {
    if (todayLog.energy && todayLog.actions) {
      const now = new Date();
      const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      setEntries([
        {
          id: Date.now(),
          date: dateStr,
          ...todayLog,
          actions: todayLog.actions.split(',').map(a => a.trim()),
          synchronicities: todayLog.synchronicities ? todayLog.synchronicities.split('\n').filter(s => s.trim()) : [],
          inspiration: '',
          nextCalling: ''
        },
        ...entries
      ]);
      setTodayLog({ energy: '', actions: '', synchronicities: '', bodyFeedback: '' });
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="glass-card p-10 md:p-16 rounded-3xl relative overflow-hidden animate-slide-in">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3C1D5A]/15 via-[#D96AFF]/5 to-[#33F0FF]/8"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br opacity-30 rounded-full blur-3xl animate-float" style={{ background: `radial-gradient(circle, ${themeColors[theme].primary}40 0%, transparent 70%)` }}></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr opacity-20 rounded-full blur-3xl" style={{ background: `radial-gradient(circle, ${themeColors[theme].secondary}30 0%, transparent 70%)`, animationDelay: '1s' }}></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-12 h-12 neon-glow animate-pulse-glow" style={{ color: themeColors[theme].primary }} />
              <span className="text-xs tracking-[0.2em] uppercase opacity-50">REALITY DATABASE</span>
            </div>
            <h1 className={`text-5xl md:text-8xl mb-6 leading-[0.95] tracking-tight bg-gradient-to-r ${themeColors[theme].gradient} bg-clip-text text-transparent`} style={{ fontWeight: 700 }}>
              Akashic<br />Archives
            </h1>
            <p className="text-lg md:text-2xl opacity-60 max-w-3xl leading-relaxed" style={{ fontWeight: 400 }}>
              Your reality database · Synchronicity log · Pattern recognition · Universe feedback
            </p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="today" className="w-full">
          <TabsList className="grid w-full grid-cols-3 glass-card p-1.5 rounded-xl">
            <TabsTrigger value="today">Today's Log</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
          </TabsList>

          {/* Tab 1: Today's Log */}
          <TabsContent value="today" className="space-y-6 mt-6">
            <div className="glass-card p-8 rounded-2xl animate-slide-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <Calendar className="w-6 h-6" style={{ color: themeColors[theme].primary }} />
                </div>
                <div>
                  <h2 className="text-2xl" style={{ fontWeight: 600 }}>Today's Log</h2>
                  <p className="text-sm opacity-50">Capture your reality · Track synchronicities</p>
                </div>
              </div>
              
              <div className="space-y-5">
                <div>
                  <label className="text-sm opacity-50 mb-3 block" style={{ fontWeight: 500 }}>Energy Level</label>
                  <div className="flex gap-3">
                    {['High', 'Medium', 'Low'].map((level) => (
                      <button
                        key={level}
                        onClick={() => setTodayLog(prev => ({ ...prev, energy: level }))}
                        className={`flex-1 px-6 py-4 rounded-xl border-2 transition-all ${
                          todayLog.energy === level
                            ? 'shadow-lg'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                        style={{
                          borderColor: todayLog.energy === level ? themeColors[theme].primary : undefined,
                          backgroundColor: todayLog.energy === level ? `${themeColors[theme].primary}15` : 'rgba(255,255,255,0.02)',
                          fontWeight: 500
                        }}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm opacity-50 mb-3 block" style={{ fontWeight: 500 }}>Actions Taken</label>
                  <input
                    type="text"
                    placeholder="e.g. Climbing, Walking, Film input... (comma separated)"
                    value={todayLog.actions}
                    onChange={(e) => setTodayLog(prev => ({ ...prev, actions: e.target.value }))}
                    className="input-premium"
                  />
                </div>

                <div>
                  <label className="text-sm opacity-50 mb-3 block" style={{ fontWeight: 500 }}>Synchronicities / Universe Signals</label>
                  <textarea
                    placeholder="Any unexpected events, meaningful coincidences, reality shifts... (one per line)"
                    rows={4}
                    value={todayLog.synchronicities}
                    onChange={(e) => setTodayLog(prev => ({ ...prev, synchronicities: e.target.value }))}
                    className="input-premium resize-none"
                  />
                </div>

                <div>
                  <label className="text-sm opacity-50 mb-3 block" style={{ fontWeight: 500 }}>Body Feedback</label>
                  <input
                    type="text"
                    placeholder="How does your body feel? Energy state?"
                    value={todayLog.bodyFeedback}
                    onChange={(e) => setTodayLog(prev => ({ ...prev, bodyFeedback: e.target.value }))}
                    className="input-premium"
                  />
                </div>

                <button
                  onClick={handleSaveLog}
                  className="w-full py-4 rounded-xl bg-gradient-to-r border-2 transition-all hover:scale-[1.02] hover:shadow-2xl"
                  style={{ 
                    background: `linear-gradient(135deg, ${themeColors[theme].primary}20 0%, ${themeColors[theme].secondary}10 100%)`,
                    borderColor: themeColors[theme].primary,
                    boxShadow: `0 8px 32px ${themeColors[theme].primary}30`,
                    fontWeight: 600
                  }}
                >
                  Save Entry
                </button>
              </div>
            </div>
          </TabsContent>

          {/* Tab 2: History */}
          <TabsContent value="history" className="space-y-6 mt-6">
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl mb-6" style={{ fontWeight: 600 }}>Recent Entries</h2>
              <div className="space-y-4">
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    onClick={() => setSelectedEntry(entry.id === selectedEntry ? null : entry.id)}
                    className={`p-6 rounded-xl cursor-pointer transition-all ${
                      selectedEntry === entry.id
                        ? 'bg-gradient-to-br from-[#00C7FF]/10 to-transparent border-2 border-[#00C7FF]'
                        : 'bg-white/5 border border-white/10 hover:border-[#00C7FF]/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-[#00C7FF]" />
                        <span className="opacity-70">{entry.date}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        entry.energy === 'High' 
                          ? 'bg-[#00C7FF]/20 text-[#00C7FF]' 
                          : entry.energy === 'Medium'
                          ? 'bg-[#BFA36F]/20 text-[#BFA36F]'
                          : 'bg-white/10 text-white/60'
                      }`}>
                        {entry.energy} Energy
                      </span>
                    </div>

                    {selectedEntry === entry.id && (
                      <div className="space-y-4 mt-4 pt-4 border-t border-white/10">
                        <div>
                          <div className="text-sm text-[#00C7FF] mb-2" style={{ fontWeight: 500 }}>Actions</div>
                          <div className="space-y-1">
                            {entry.actions.map((action, idx) => (
                              <div key={idx} className="text-sm opacity-80">• {action}</div>
                            ))}
                          </div>
                        </div>

                        {entry.synchronicities.length > 0 && (
                          <div>
                            <div className="text-sm text-[#00C7FF] mb-2" style={{ fontWeight: 500 }}>Synchronicities</div>
                            <div className="space-y-1">
                              {entry.synchronicities.map((sync, idx) => (
                                <div key={idx} className="text-sm opacity-80">✦ {sync}</div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div>
                          <div className="text-sm text-[#00C7FF] mb-2" style={{ fontWeight: 500 }}>Body Feedback</div>
                          <p className="text-sm opacity-80">{entry.bodyFeedback}</p>
                        </div>

                        {entry.inspiration && (
                          <div>
                            <div className="text-sm text-[#00C7FF] mb-2" style={{ fontWeight: 500 }}>Inspiration</div>
                            <p className="text-sm opacity-80">{entry.inspiration}</p>
                          </div>
                        )}

                        {entry.nextCalling && (
                          <div>
                            <div className="text-sm text-[#BFA36F] mb-2" style={{ fontWeight: 500 }}>Next Calling</div>
                            <p className="text-sm opacity-80">{entry.nextCalling}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Tab 3: Pattern Recognition */}
          <TabsContent value="patterns" className="space-y-6 mt-6">
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-[#00C7FF]" />
                <h2 className="text-2xl" style={{ fontWeight: 600 }}>Pattern Recognition</h2>
              </div>
              <p className="opacity-70 mb-6">Patterns emerging from your Akashic logs</p>
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#00C7FF] mb-2" style={{ fontWeight: 600 }}>Movement → Manifestation</div>
                  <p className="text-sm opacity-80">
                    High correlation: Days with 60+ minutes of movement = More synchronicities and opportunities
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#BFA36F] mb-2" style={{ fontWeight: 600 }}>Rest → Clarity</div>
                  <p className="text-sm opacity-80">
                    Low energy days followed by insights within 24-48 hours
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#00C7FF] mb-2" style={{ fontWeight: 600 }}>Inspiration Input → Creative Output</div>
                  <p className="text-sm opacity-80">
                    Film/music/visual input correlates with creative breakthrough 2-3 days later
                  </p>
                </div>
              </div>
            </div>

            {/* Akashic Philosophy */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl mb-6" style={{ fontWeight: 600 }}>Akashic Philosophy</h2>
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#D96AFF] mb-2" style={{ fontWeight: 600 }}>Reality as Feedback Loop</div>
                  <p className="text-sm opacity-80">
                    External world constantly responds to your frequency. Synchronicities are reality confirming alignment.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#00C7FF] mb-2" style={{ fontWeight: 600 }}>Body Knows First</div>
                  <p className="text-sm opacity-80">
                    Your body receives signals before your mind. Track body feedback to catch early warnings and confirmations.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#BFA36F] mb-2" style={{ fontWeight: 600 }}>Patterns Over Time</div>
                  <p className="text-sm opacity-80">
                    The magic is in the patterns. Daily logs reveal your unique operating system over weeks and months.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};