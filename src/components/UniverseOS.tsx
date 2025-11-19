import React, { useEffect, useState } from 'react';
import { Sparkles, Target, TrendingUp, Zap, Clock, CheckCircle2, Plus, Activity, Flame } from 'lucide-react';
import { useTheme } from '../lib/theme-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export const UniverseOS: React.FC = () => {
  const { theme } = useTheme();
  const [energyLevel, setEnergyLevel] = useState<'high' | 'medium' | 'low'>('medium');
  const [coreIntention, setCoreIntention] = useState('Align with flow, embody lightness, manifest through movement');
  const [isEditingIntention, setIsEditingIntention] = useState(false);
  const [quickAction, setQuickAction] = useState('');
  const [completedActions, setCompletedActions] = useState<string[]>([]);
  
  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('universeOS');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.energyLevel) setEnergyLevel(data.energyLevel);
        if (data.coreIntention) setCoreIntention(data.coreIntention);
        if (data.completedActions) setCompletedActions(data.completedActions);
      } catch (e) {
        console.error('Failed to load data:', e);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('universeOS', JSON.stringify({
      energyLevel,
      coreIntention,
      completedActions
    }));
  }, [energyLevel, coreIntention, completedActions]);

  // Theme-specific colors
  const themeColors = {
    cosmic: { primary: '#D96AFF', secondary: '#B24BF3', gradient: 'from-[#D96AFF] via-[#B24BF3] to-[#7C3AED]' },
    data: { primary: '#3B82F6', secondary: '#60A5FA', gradient: 'from-[#3B82F6] via-[#60A5FA] to-[#1E40AF]' },
    xai: { primary: '#00F0FF', secondary: '#00C7FF', gradient: 'from-[#00F0FF] via-[#00C7FF] to-[#0EA5E9]' },
    vidgen: { primary: '#00FFFF', secondary: '#FF00FF', gradient: 'from-[#00FFFF] via-[#FF00FF] to-[#7C3AED]' },
  };

  const energyColors = {
    high: 'from-[#00C7FF] to-[#BFA36F]',
    medium: 'from-[#BFA36F] to-[#2E3A46]',
    low: 'from-[#2E3A46] to-[#8C7853]'
  };

  const todayActions = {
    high: ['Climbing session', 'Creative project work', 'Environment refresh', 'Manifestation ritual'],
    medium: ['Calligraphy practice', '30-min walk', 'Movie input', 'Inspiration collection'],
    low: ['Rest & restore', 'Gentle movement', 'Sensory care', 'Journal reflection']
  };

  const handleAddQuickAction = () => {
    if (quickAction.trim()) {
      setCompletedActions([...completedActions, quickAction]);
      setQuickAction('');
    }
  };

  const handleRemoveAction = (index: number) => {
    setCompletedActions(completedActions.filter((_, i) => i !== index));
  };

  // Current time
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: 'Completed Today', value: completedActions.length, icon: CheckCircle2, color: themeColors[theme].primary },
    { label: 'Current Energy', value: energyLevel.charAt(0).toUpperCase() + energyLevel.slice(1), icon: Zap, color: '#BFA36F' },
    { label: 'Active Intentions', value: '3', icon: Target, color: themeColors[theme].secondary },
    { label: 'Streak Days', value: '7', icon: Flame, color: '#FF6B6B' },
  ];

  return (
    <div className="min-h-screen p-6 md:p-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 glass-card animate-slide-in">
          <div className={`absolute inset-0 bg-gradient-to-br ${energyColors[energyLevel]} opacity-10`}></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00C7FF]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#BFA36F]/15 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                {theme === 'vidgen' ? (
                  <Zap className="w-10 h-10 neon-glow animate-pulse-glow" style={{ color: themeColors[theme].primary }} />
                ) : (
                  <Sparkles className="w-10 h-10 neon-glow animate-pulse-glow" style={{ color: themeColors[theme].primary }} />
                )}
                <span className="text-xs tracking-[0.2em] uppercase opacity-50">LIFEMATRICES V4.0</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-50">
                <Clock className="w-4 h-4" />
                <span>{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
            </div>
            <h1 className={`text-5xl md:text-8xl mb-6 leading-[0.95] tracking-tight bg-gradient-to-r ${themeColors[theme].gradient} bg-clip-text text-transparent`} style={{ fontWeight: 700 }}>
              Universe OS
            </h1>
            <p className="text-lg md:text-2xl opacity-60 max-w-3xl leading-relaxed" style={{ fontWeight: 400 }}>
              Your consciousness operating system · Daily alignment · Manifestation engine
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-in" style={{ animationDelay: '0.05s' }}>
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card group">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div className="text-3xl mb-2 metric-display" style={{ fontWeight: 700, color: stat.color }}>{stat.value}</div>
                <div className="text-xs opacity-50" style={{ fontWeight: 400 }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="today" className="w-full">
          <TabsList className="grid w-full grid-cols-3 glass-card p-1.5 rounded-xl">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="intention">Intention</TabsTrigger>
            <TabsTrigger value="pillars">Pillars</TabsTrigger>
          </TabsList>

          {/* Tab 1: Today's Dashboard */}
          <TabsContent value="today" className="space-y-6 mt-6">
            {/* Energy Scanner + Action Menu */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl mb-6" style={{ fontWeight: 600 }}>Today's Energy</h3>
                <div className="space-y-3">
                  {(['high', 'medium', 'low'] as const).map((level, idx) => (
                    <button
                      key={level}
                      onClick={() => setEnergyLevel(level)}
                      className={`w-full p-4 rounded-xl transition-all ${
                        energyLevel === level
                          ? 'bg-gradient-to-r from-[#00C7FF]/15 to-[#BFA36F]/10 border border-[#00C7FF]/50 shadow-lg shadow-[#00C7FF]/20'
                          : 'bg-white/[0.02] border border-white/10 hover:border-[#00C7FF]/30 hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="capitalize" style={{ fontWeight: 500 }}>{level} Energy</span>
                        {energyLevel === level && (
                          <div className="w-2 h-2 rounded-full bg-[#00C7FF] shadow-lg shadow-[#00C7FF]/50 animate-pulse"></div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 glass-card p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C7FF]/20 to-[#00C7FF]/5 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#00C7FF]" />
                  </div>
                  <h3 className="text-xl" style={{ fontWeight: 600 }}>Suggested Actions for {energyLevel} Energy</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {todayActions[energyLevel].map((action, idx) => (
                    <div
                      key={idx}
                      className="action-card group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C7FF]/60 group-hover:bg-[#00C7FF] group-hover:shadow-lg group-hover:shadow-[#00C7FF]/50 transition-all"></div>
                        <span style={{ fontWeight: 400 }}>{action}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Action Logger */}
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#BFA36F]/20 to-[#BFA36F]/5 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-[#BFA36F]" />
                </div>
                <div>
                  <h3 className="text-xl" style={{ fontWeight: 600 }}>Today's Completed Actions</h3>
                  <p className="text-sm opacity-50">Quick log what you've done</p>
                </div>
              </div>

              {/* Add Action */}
              <div className="flex gap-3 mb-6">
                <input
                  type="text"
                  placeholder="What did you do? e.g. 30min climbing, Morning walk..."
                  value={quickAction}
                  onChange={(e) => setQuickAction(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddQuickAction()}
                  className="input-premium flex-1"
                />
                <button
                  onClick={handleAddQuickAction}
                  className="px-6 py-3 rounded-xl border-2 transition-all hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${themeColors[theme].primary}15 0%, ${themeColors[theme].secondary}10 100%)`,
                    borderColor: themeColors[theme].primary + '40',
                    fontWeight: 500
                  }}
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              {/* Completed Actions List */}
              <div className="space-y-2">
                {completedActions.length === 0 ? (
                  <p className="text-sm opacity-40 text-center py-8">No actions logged yet today</p>
                ) : (
                  completedActions.map((action, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 flex items-center justify-between group hover:border-[#00C7FF]/30 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#00C7FF]" />
                        <span>{action}</span>
                      </div>
                      <button
                        onClick={() => handleRemoveAction(idx)}
                        className="opacity-0 group-hover:opacity-100 text-xs px-3 py-1 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-all"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </TabsContent>

          {/* Tab 2: Core Intention */}
          <TabsContent value="intention" className="space-y-6 mt-6">
            <div className="glass-card p-8 md:p-10 rounded-2xl border-gradient">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#BFA36F]/20 to-[#BFA36F]/5 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#BFA36F]" />
                </div>
                <h2 className="text-2xl" style={{ fontWeight: 600 }}>Core Intention</h2>
              </div>
              
              {isEditingIntention ? (
                <div className="space-y-4">
                  <textarea
                    value={coreIntention}
                    onChange={(e) => setCoreIntention(e.target.value)}
                    rows={3}
                    className="input-premium resize-none"
                  />
                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsEditingIntention(false)}
                      className="flex-1 py-3 rounded-xl border-2 transition-all hover:scale-[1.02]"
                      style={{
                        background: `linear-gradient(135deg, ${themeColors[theme].primary}20 0%, ${themeColors[theme].secondary}10 100%)`,
                        borderColor: themeColors[theme].primary,
                        fontWeight: 600
                      }}
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditingIntention(false)}
                      className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/30 transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-xl opacity-80 leading-relaxed mb-6" style={{ fontWeight: 400, letterSpacing: '-0.01em' }}>
                    {coreIntention}
                  </p>
                  <button
                    onClick={() => setIsEditingIntention(true)}
                    className="px-6 py-3 rounded-xl border border-white/10 hover:border-[#00C7FF]/30 hover:bg-white/5 transition-all text-sm"
                  >
                    Edit Intention
                  </button>
                </div>
              )}
            </div>

            {/* Intention Philosophy */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl mb-6" style={{ fontWeight: 600 }}>Intention Setting Framework</h3>
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#00C7FF] mb-2" style={{ fontWeight: 600 }}>Feel It, Don't Think It</div>
                  <p className="text-sm opacity-80">
                    Intentions work through feeling-states, not mental concepts. How does your desired reality feel?
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#BFA36F] mb-2" style={{ fontWeight: 600 }}>Present Tense Always</div>
                  <p className="text-sm opacity-80">
                    "I am aligned" not "I will be aligned". The universe only responds to present frequency.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#D96AFF] mb-2" style={{ fontWeight: 600 }}>Let Go of How</div>
                  <p className="text-sm opacity-80">
                    Set the what and why. Let reality arrange the how. Control kills flow.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tab 3: Three Pillars */}
          <TabsContent value="pillars" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-8 rounded-2xl text-center group hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C7FF]/15 to-[#BFA36F]/10 mx-auto mb-6 flex items-center justify-center group-hover:from-[#00C7FF]/25 group-hover:to-[#BFA36F]/15 transition-all">
                  <span className="text-3xl">🌊</span>
                </div>
                <h3 className="text-xl mb-3" style={{ fontWeight: 600 }}>Travel × Space</h3>
                <p className="text-sm opacity-60 leading-relaxed mb-4">Nomadic life · Energy geography · Refresh cycles</p>
                <div className="text-xs opacity-40">
                  Navigate to Space Maps →
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl text-center group hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C7FF]/15 to-[#BFA36F]/10 mx-auto mb-6 flex items-center justify-center group-hover:from-[#00C7FF]/25 group-hover:to-[#BFA36F]/15 transition-all">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl mb-3" style={{ fontWeight: 600 }}>Body × Movement</h3>
                <p className="text-sm opacity-60 leading-relaxed mb-4">Physical intelligence · Frequency alignment · Embodiment</p>
                <div className="text-xs opacity-40">
                  Navigate to Movement Hub →
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl text-center group hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C7FF]/15 to-[#BFA36F]/10 mx-auto mb-6 flex items-center justify-center group-hover:from-[#00C7FF]/25 group-hover:to-[#BFA36F]/15 transition-all">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-xl mb-3" style={{ fontWeight: 600 }}>Inspiration × Creation</h3>
                <p className="text-sm opacity-60 leading-relaxed mb-4">Aesthetic input · Creative output · Flow state</p>
                <div className="text-xs opacity-40">
                  Navigate to Inspiration Hub →
                </div>
              </div>
            </div>

            {/* Operating Principles */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl mb-6" style={{ fontWeight: 600 }}>Universe OS Operating Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#00C7FF] mb-2" style={{ fontWeight: 600 }}>✓ Alignment over Discipline</div>
                  <p className="text-sm opacity-70">Do what feels right in the moment, not what the calendar says</p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#BFA36F] mb-2" style={{ fontWeight: 600 }}>✓ Menu not Schedule</div>
                  <p className="text-sm opacity-70">Choose from options based on energy, don't force rigid plans</p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#D96AFF] mb-2" style={{ fontWeight: 600 }}>✓ Body as Antenna</div>
                  <p className="text-sm opacity-70">Physical state determines consciousness state determines reality</p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#00C7FF] mb-2" style={{ fontWeight: 600 }}>✓ Minimal Effective Action</div>
                  <p className="text-sm opacity-70">Small aligned moves {`>`} large misaligned efforts</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};