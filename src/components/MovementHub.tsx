import React, { useState } from 'react';
import { Mountain, Waves, Wind, Dumbbell, Heart, Plus } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useTheme } from '../lib/theme-context';

export const MovementHub: React.FC = () => {
  const { theme } = useTheme();
  const [selectedFrequency, setSelectedFrequency] = useState<string | null>(null);
  const [todaySession, setTodaySession] = useState({
    activity: '',
    duration: '',
    frequency: '',
    intensity: 'medium'
  });

  // Theme-specific colors
  const themeColors = {
    cosmic: { primary: '#D96AFF', secondary: '#B24BF3' },
    data: { primary: '#3B82F6', secondary: '#60A5FA' },
    xai: { primary: '#00F0FF', secondary: '#00C7FF' },
    vidgen: { primary: '#00FFFF', secondary: '#FF00FF' },
  };

  const frequencies = [
    {
      name: 'Grounding',
      icon: Mountain,
      color: '#8C7853',
      activities: ['Strength training', 'Climbing', 'Heavy compound lifts', 'Core work'],
      effect: 'Embodiment · Presence · Physical power · Root frequency',
    },
    {
      name: 'Flow',
      icon: Waves,
      color: '#00C7FF',
      activities: ['Swimming', 'Dancing', 'Yoga flow', 'Martial arts'],
      effect: 'Fluidity · Grace · Effortless movement · Water frequency',
    },
    {
      name: 'Lightness',
      icon: Wind,
      color: '#BFA36F',
      activities: ['Walking', 'Light cardio', 'Stretching', 'Mobility work'],
      effect: 'Ease · Spaciousness · Mental clarity · Air frequency',
    },
    {
      name: 'Clearing',
      icon: Dumbbell,
      color: '#00C7FF',
      activities: ['HIIT', 'Running', 'Intense climbing', 'Cardio'],
      effect: 'Energy release · Emotional clearing · Breakthrough · Fire frequency',
    },
    {
      name: 'Sync',
      icon: Heart,
      color: '#BFA36F',
      activities: ['Breath work', 'Tai chi', 'Qigong', 'Meditative movement'],
      effect: 'Mind-body alignment · Nervous system regulation · Coherence',
    },
  ];

  const [recentSessions, setRecentSessions] = useState([
    { date: 'Today', activity: 'Climbing', duration: '90min', frequency: 'Grounding', intensity: 'High' },
    { date: 'Yesterday', activity: 'Swimming', duration: '45min', frequency: 'Flow', intensity: 'Medium' },
    { date: '2 days ago', activity: 'Walking', duration: '30min', frequency: 'Lightness', intensity: 'Low' },
  ]);

  const handleSaveSession = () => {
    if (todaySession.activity && todaySession.duration) {
      setRecentSessions([
        { date: 'Today', ...todaySession },
        ...recentSessions
      ]);
      setTodaySession({ activity: '', duration: '', frequency: '', intensity: 'medium' });
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="animate-slide-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#BFA36F] shadow-lg shadow-[#BFA36F]/50 animate-pulse"></div>
            <span className="text-xs tracking-[0.2em] uppercase opacity-50">BODY ENGINE</span>
          </div>
          <h1 className="text-5xl md:text-7xl mb-4 tracking-tight" style={{ fontWeight: 600 }}>Movement Hub</h1>
          <p className="text-lg md:text-xl opacity-50 max-w-3xl" style={{ fontWeight: 400 }}>Body as universal antenna · Five frequency system · Physical intelligence</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="today" className="w-full">
          <TabsList className="grid w-full grid-cols-3 glass-card p-1.5 rounded-xl">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="frequencies">Frequencies</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          {/* Tab 1: Today's Movement */}
          <TabsContent value="today" className="space-y-6 mt-6">
            {/* Current Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="stat-card animate-scale-in">
                <div className="relative z-10">
                  <div className="text-4xl mb-2 metric-display text-[#00C7FF]" style={{ fontWeight: 600 }}>90</div>
                  <div className="text-sm opacity-50" style={{ fontWeight: 400 }}>Minutes Today</div>
                </div>
              </div>
              <div className="stat-card animate-scale-in" style={{ animationDelay: '0.05s' }}>
                <div className="relative z-10">
                  <div className="text-4xl mb-2 metric-display text-[#BFA36F]" style={{ fontWeight: 600 }}>5/7</div>
                  <div className="text-sm opacity-50" style={{ fontWeight: 400 }}>Days This Week</div>
                </div>
              </div>
              <div className="stat-card animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="relative z-10">
                  <div className="text-4xl mb-2">⚡</div>
                  <div className="text-sm opacity-50" style={{ fontWeight: 400 }}>High Energy</div>
                </div>
              </div>
              <div className="stat-card animate-scale-in" style={{ animationDelay: '0.15s' }}>
                <div className="relative z-10">
                  <div className="text-2xl mb-2 text-[#8C7853]" style={{ fontWeight: 600 }}>Grounding</div>
                  <div className="text-sm opacity-50" style={{ fontWeight: 400 }}>Active Frequency</div>
                </div>
              </div>
            </div>

            {/* Log Today's Session */}
            <div className="glass-card p-8 rounded-2xl animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C7FF]/20 to-[#00C7FF]/5 flex items-center justify-center">
                  <Plus className="w-6 h-6 text-[#00C7FF]" />
                </div>
                <div>
                  <h3 className="text-2xl" style={{ fontWeight: 600 }}>Log Movement Session</h3>
                  <p className="text-sm opacity-50">Track today's physical practice</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm opacity-70 mb-2 block" style={{ fontWeight: 500 }}>Activity</label>
                    <input
                      type="text"
                      placeholder="e.g. Climbing, Swimming, Yoga..."
                      value={todaySession.activity}
                      onChange={(e) => setTodaySession(prev => ({ ...prev, activity: e.target.value }))}
                      className="input-premium"
                    />
                  </div>
                  <div>
                    <label className="text-sm opacity-70 mb-2 block" style={{ fontWeight: 500 }}>Duration</label>
                    <input
                      type="text"
                      placeholder="e.g. 60min, 1.5h..."
                      value={todaySession.duration}
                      onChange={(e) => setTodaySession(prev => ({ ...prev, duration: e.target.value }))}
                      className="input-premium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm opacity-70 mb-3 block" style={{ fontWeight: 500 }}>Frequency Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {frequencies.map((freq) => (
                      <button
                        key={freq.name}
                        onClick={() => setTodaySession(prev => ({ ...prev, frequency: freq.name }))}
                        className={`p-3 rounded-lg text-sm transition-all ${
                          todaySession.frequency === freq.name
                            ? 'border-2 shadow-lg'
                            : 'border border-white/10 hover:border-white/30'
                        }`}
                        style={{
                          borderColor: todaySession.frequency === freq.name ? freq.color : undefined,
                          backgroundColor: todaySession.frequency === freq.name ? `${freq.color}15` : 'rgba(255,255,255,0.02)'
                        }}
                      >
                        {freq.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm opacity-70 mb-3 block" style={{ fontWeight: 500 }}>Intensity</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['low', 'medium', 'high'].map((level) => (
                      <button
                        key={level}
                        onClick={() => setTodaySession(prev => ({ ...prev, intensity: level }))}
                        className={`p-4 rounded-xl border-2 transition-all capitalize ${
                          todaySession.intensity === level
                            ? 'border-2 shadow-lg'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                        style={{
                          borderColor: todaySession.intensity === level ? themeColors[theme].primary : undefined,
                          backgroundColor: todaySession.intensity === level ? `${themeColors[theme].primary}15` : 'rgba(255,255,255,0.02)'
                        }}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleSaveSession}
                  className="w-full py-4 rounded-xl border-2 transition-all hover:scale-[1.02] hover:shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${themeColors[theme].primary}20 0%, ${themeColors[theme].secondary}10 100%)`,
                    borderColor: themeColors[theme].primary,
                    boxShadow: `0 8px 32px ${themeColors[theme].primary}30`,
                    fontWeight: 600
                  }}
                >
                  Save Session
                </button>
              </div>
            </div>
          </TabsContent>

          {/* Tab 2: Frequencies */}
          <TabsContent value="frequencies" className="space-y-6 mt-6">
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl mb-4" style={{ fontWeight: 600 }}>Five Frequency System</h2>
              <p className="opacity-70 mb-8">Each movement type activates a different consciousness frequency</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {frequencies.map((freq, idx) => {
                  const Icon = freq.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedFrequency(freq.name)}
                      className={`p-6 rounded-xl transition-all ${
                        selectedFrequency === freq.name
                          ? 'bg-gradient-to-br from-white/10 to-white/5 border-2 border-[#00C7FF]'
                          : 'bg-white/5 border border-white/10 hover:border-[#00C7FF]/50'
                      }`}
                    >
                      <Icon className="w-8 h-8 mb-3 mx-auto" style={{ color: freq.color }} />
                      <div className="mb-2">{freq.name}</div>
                      <div className="text-xs opacity-60">{freq.activities[0]}</div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Frequency Details */}
              {selectedFrequency && (
                <div className="p-6 rounded-xl bg-gradient-to-br from-[#00C7FF]/10 to-transparent border border-[#00C7FF]/30 animate-slide-in">
                  {frequencies
                    .filter((f) => f.name === selectedFrequency)
                    .map((freq, idx) => (
                      <div key={idx}>
                        <h3 className="text-xl mb-3" style={{ fontWeight: 600 }}>{freq.name} Frequency</h3>
                        <p className="opacity-80 mb-4">{freq.effect}</p>
                        <div className="space-y-2">
                          <div className="text-sm opacity-70 mb-2" style={{ fontWeight: 500 }}>Activities:</div>
                          {freq.activities.map((activity, i) => (
                            <div key={i} className="text-sm opacity-90">
                              <span className="text-[#00C7FF] mr-2">•</span>
                              {activity}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Body-Consciousness Loop */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl mb-6" style={{ fontWeight: 600 }}>Body → Consciousness Loop</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">💫</div>
                  <h3 className="mb-2">Movement</h3>
                  <p className="text-sm opacity-70">Physical action shifts energy</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="mb-2">Frequency</h3>
                  <p className="text-sm opacity-70">Body enters aligned state</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">✨</div>
                  <h3 className="mb-2">Consciousness</h3>
                  <p className="text-sm opacity-70">Mental clarity emerges</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🌊</div>
                  <h3 className="mb-2">Reality</h3>
                  <p className="text-sm opacity-70">External world responds</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tab 3: History */}
          <TabsContent value="history" className="space-y-6 mt-6">
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl mb-6" style={{ fontWeight: 600 }}>Recent Sessions</h2>
              <div className="space-y-3">
                {recentSessions.map((session, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="opacity-60">{session.date}</span>
                        <span className="text-[#00C7FF]">·</span>
                        <span>{session.activity}</span>
                      </div>
                      <div className="text-sm opacity-60">
                        {session.duration} · {session.frequency} frequency
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs ${
                      session.intensity === 'High' || session.intensity === 'high'
                        ? 'bg-[#00C7FF]/20 text-[#00C7FF]' 
                        : session.intensity === 'Medium' || session.intensity === 'medium'
                        ? 'bg-[#BFA36F]/20 text-[#BFA36F]'
                        : 'bg-white/10 text-white/60'
                    }`}>
                      {session.intensity}
                    </div>
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