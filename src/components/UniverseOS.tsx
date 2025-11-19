import React from 'react';
import { Sparkles, Target, TrendingUp, Zap } from 'lucide-react';
import { useTheme } from '../lib/theme-context';

export const UniverseOS: React.FC = () => {
  const { theme } = useTheme();
  const [energyLevel, setEnergyLevel] = React.useState<'high' | 'medium' | 'low'>('medium');
  const [coreIntention, setCoreIntention] = React.useState('Align with flow, embody lightness, manifest through movement');

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
            <div className="flex items-center gap-3 mb-6">
              {theme === 'vidgen' ? (
                <Zap className="w-10 h-10 neon-glow animate-pulse-glow" style={{ color: themeColors[theme].primary }} />
              ) : (
                <Sparkles className="w-10 h-10 neon-glow animate-pulse-glow" style={{ color: themeColors[theme].primary }} />
              )}
              <span className="text-xs tracking-[0.2em] uppercase opacity-50">LIFEMATRICES V4.0</span>
            </div>
            <h1 className={`text-5xl md:text-8xl mb-6 leading-[0.95] tracking-tight bg-gradient-to-r ${themeColors[theme].gradient} bg-clip-text text-transparent`} style={{ fontWeight: 700 }}>
              Universe OS
            </h1>
            <p className="text-lg md:text-2xl opacity-60 max-w-3xl leading-relaxed" style={{ fontWeight: 400 }}>
              Your consciousness operating system · Daily alignment · Manifestation engine
            </p>
          </div>
        </div>

        {/* Core Intention */}
        <div className="glass-card p-8 md:p-10 rounded-2xl border-gradient animate-slide-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#BFA36F]/20 to-[#BFA36F]/5 flex items-center justify-center">
              <Target className="w-6 h-6 text-[#BFA36F]" />
            </div>
            <h2 className="text-2xl" style={{ fontWeight: 600 }}>Core Intention</h2>
          </div>
          <p className="text-xl opacity-80 leading-relaxed" style={{ fontWeight: 400, letterSpacing: '-0.01em' }}>
            {coreIntention}
          </p>
        </div>

        {/* Energy Scanner */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl mb-6" style={{ fontWeight: 600 }}>Today's Energy</h3>
            <div className="space-y-3">
              {(['high', 'medium', 'low'] as const).map((level, idx) => (
                <button
                  key={level}
                  onClick={() => setEnergyLevel(level)}
                  style={{ animationDelay: `${0.3 + idx * 0.05}s` }}
                  className={`w-full p-4 rounded-xl transition-all animate-scale-in ${
                    energyLevel === level
                      ? 'bg-gradient-to-r from-[#00C7FF]/15 to-[#BFA36F]/10 border border-[#00C7FF]/50 shadow-lg shadow-[#00C7FF]/20'
                      : 'bg-white/[0.02] border border-white/10 hover:border-[#00C7FF]/30 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="capitalize" style={{ fontWeight: 500 }}>{level} Energy</span>
                    {energyLevel === level && (
                      <div className="w-2 h-2 rounded-full bg-[#00C7FF] shadow-lg shadow-[#00C7FF]/50"></div>
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
              <h3 className="text-xl" style={{ fontWeight: 600 }}>Today's Action Menu</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {todayActions[energyLevel].map((action, idx) => (
                <div
                  key={idx}
                  style={{ animationDelay: `${0.35 + idx * 0.05}s` }}
                  className="action-card animate-scale-in group"
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

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-in" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card p-8 rounded-2xl text-center group hover:scale-[1.02] transition-all duration-300">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C7FF]/15 to-[#BFA36F]/10 mx-auto mb-6 flex items-center justify-center group-hover:from-[#00C7FF]/25 group-hover:to-[#BFA36F]/15 transition-all">
              <span className="text-3xl">🌊</span>
            </div>
            <h3 className="text-xl mb-3" style={{ fontWeight: 600 }}>Travel × Space</h3>
            <p className="text-sm opacity-60 leading-relaxed">Nomadic life · Energy geography · Refresh cycles</p>
          </div>

          <div className="glass-card p-8 rounded-2xl text-center group hover:scale-[1.02] transition-all duration-300">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C7FF]/15 to-[#BFA36F]/10 mx-auto mb-6 flex items-center justify-center group-hover:from-[#00C7FF]/25 group-hover:to-[#BFA36F]/15 transition-all">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl mb-3" style={{ fontWeight: 600 }}>Body × Movement</h3>
            <p className="text-sm opacity-60 leading-relaxed">Physical intelligence · Frequency alignment · Embodiment</p>
          </div>

          <div className="glass-card p-8 rounded-2xl text-center group hover:scale-[1.02] transition-all duration-300">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C7FF]/15 to-[#BFA36F]/10 mx-auto mb-6 flex items-center justify-center group-hover:from-[#00C7FF]/25 group-hover:to-[#BFA36F]/15 transition-all">
              <span className="text-3xl">✨</span>
            </div>
            <h3 className="text-xl mb-3" style={{ fontWeight: 600 }}>Inspiration × Creation</h3>
            <p className="text-sm opacity-60 leading-relaxed">Aesthetic input · Creative output · Flow state</p>
          </div>
        </div>
      </div>
    </div>
  );
};
