import React, { useState } from 'react';
import { Activity, Heart, Moon, Zap, TrendingUp, Plus, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { useTheme } from '../lib/theme-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export const EnergyDashboard: React.FC = () => {
  const { theme } = useTheme();
  const [currentEnergy, setCurrentEnergy] = useState<'high' | 'medium' | 'low' | null>(null);
  const [todayLog, setTodayLog] = useState({
    sleepHours: '',
    movementMinutes: '',
    notes: ''
  });

  // Theme-specific colors
  const themeColors = {
    cosmic: { primary: '#D96AFF', secondary: '#B24BF3', gradient: 'from-[#D96AFF] via-[#B24BF3] to-[#7C3AED]' },
    data: { primary: '#3B82F6', secondary: '#60A5FA', gradient: 'from-[#3B82F6] via-[#60A5FA] to-[#1E40AF]' },
    xai: { primary: '#00F0FF', secondary: '#00C7FF', gradient: 'from-[#00F0FF] via-[#00C7FF] to-[#0EA5E9]' },
    vidgen: { primary: '#00FFFF', secondary: '#FF00FF', gradient: 'from-[#00FFFF] via-[#FF00FF] to-[#7C3AED]' },
  };
  
  const weeklyEnergy = [
    { day: 'Mon', energy: 65, sleep: 7, movement: 45 },
    { day: 'Tue', energy: 78, sleep: 8, movement: 60 },
    { day: 'Wed', energy: 55, sleep: 6, movement: 30 },
    { day: 'Thu', energy: 82, sleep: 8.5, movement: 75 },
    { day: 'Fri', energy: 70, sleep: 7.5, movement: 50 },
    { day: 'Sat', energy: 88, sleep: 9, movement: 90 },
    { day: 'Sun', energy: 75, sleep: 8, movement: 40 },
  ];

  const frequencyData = [
    { frequency: 'Grounding', value: 85 },
    { frequency: 'Flow', value: 70 },
    { frequency: 'Lightness', value: 65 },
    { frequency: 'Clearing', value: 75 },
    { frequency: 'Sync', value: 80 },
  ];

  const stats = [
    { label: 'Energy Level', value: '82%', icon: Zap, color: themeColors[theme].primary },
    { label: 'Sleep Quality', value: '8.2h', icon: Moon, color: '#BFA36F' },
    { label: 'Movement', value: '75min', icon: Activity, color: themeColors[theme].primary },
    { label: 'Recovery', value: '90%', icon: Heart, color: '#BFA36F' },
  ];

  const handleSaveLog = () => {
    console.log('Saving energy log:', todayLog, currentEnergy);
    // Reset form
    setTodayLog({ sleepHours: '', movementMinutes: '', notes: '' });
    setCurrentEnergy(null);
  };

  return (
    <div className="min-h-screen p-6 md:p-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="animate-slide-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ 
              background: themeColors[theme].primary, 
              boxShadow: `0 0 20px ${themeColors[theme].primary}` 
            }}></div>
            <span className="text-xs tracking-[0.2em] uppercase opacity-50">ENERGY TRACKING</span>
          </div>
          <h1 className={`text-5xl md:text-7xl mb-4 tracking-tight bg-gradient-to-r ${themeColors[theme].gradient} bg-clip-text text-transparent`} style={{ fontWeight: 700 }}>
            Energy Dashboard
          </h1>
          <p className="text-lg md:text-xl opacity-50 max-w-3xl" style={{ fontWeight: 400 }}>Your body as a universal antenna · Frequency mapping · Recovery cycles</p>
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 glass-card p-1.5 rounded-xl">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="daily">Daily Log</TabsTrigger>
            <TabsTrigger value="frequencies">Frequencies</TabsTrigger>
          </TabsList>

          {/* Tab 1: Overview */}
          <TabsContent value="overview" className="space-y-6 mt-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card animate-scale-in group" style={{ animationDelay: `${0.1 + idx * 0.05}s` }}>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
                    </div>
                    <div className="text-3xl md:text-4xl mb-2 metric-display" style={{ fontWeight: 700, color: stat.color }}>{stat.value}</div>
                    <div className="text-sm opacity-50" style={{ fontWeight: 400 }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Weekly Energy Tracking */}
              <div className="glass-card p-8 rounded-2xl animate-slide-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl" style={{ fontWeight: 600 }}>Weekly Energy Flow</h3>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: themeColors[theme].primary }}></div>
                      <span className="opacity-60">Energy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#BFA36F]"></div>
                      <span className="opacity-60">Movement</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-white/[0.02] to-transparent rounded-xl p-4 border border-white/5">
                  <ResponsiveContainer width="100%" height={280}>
                    <LineChart data={weeklyEnergy}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis 
                        dataKey="day" 
                        stroke="rgba(255,255,255,0.3)" 
                        style={{ fontSize: '12px' }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis 
                        stroke="rgba(255,255,255,0.3)" 
                        style={{ fontSize: '12px' }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'rgba(20, 20, 28, 0.95)',
                          border: `1px solid ${themeColors[theme].primary}33`,
                          borderRadius: '12px',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                        }}
                        labelStyle={{ color: '#FFFFFF', fontWeight: 500 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="energy" 
                        stroke={themeColors[theme].primary}
                        strokeWidth={3} 
                        dot={{ fill: themeColors[theme].primary, r: 6 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="movement" 
                        stroke="#BFA36F"
                        strokeWidth={2.5} 
                        dot={{ fill: '#BFA36F', r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Frequency Radar */}
              <div className="glass-card p-8 rounded-2xl animate-slide-in" style={{ animationDelay: '0.35s' }}>
                <h3 className="text-xl mb-6" style={{ fontWeight: 600 }}>Five Frequency System</h3>
                <div className="bg-gradient-to-br from-white/[0.02] to-transparent rounded-xl p-4 border border-white/5">
                  <ResponsiveContainer width="100%" height={280}>
                    <RadarChart data={frequencyData}>
                      <PolarGrid stroke="rgba(255,255,255,0.08)" />
                      <PolarAngleAxis 
                        dataKey="frequency" 
                        stroke="rgba(255,255,255,0.4)" 
                        style={{ fontSize: '13px', fontWeight: 500 }}
                      />
                      <PolarRadiusAxis 
                        stroke="rgba(255,255,255,0.2)" 
                        style={{ fontSize: '11px' }}
                      />
                      <Radar 
                        name="Frequency" 
                        dataKey="value" 
                        stroke={themeColors[theme].primary}
                        strokeWidth={2.5}
                        fill={themeColors[theme].primary}
                        fillOpacity={0.25} 
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tab 2: Daily Log */}
          <TabsContent value="daily" className="space-y-6 mt-6">
            <div className="glass-card p-8 rounded-2xl animate-slide-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <Calendar className="w-6 h-6" style={{ color: themeColors[theme].primary }} />
                </div>
                <div>
                  <h3 className="text-2xl" style={{ fontWeight: 600 }}>Today's Energy Log</h3>
                  <p className="text-sm opacity-50">Track your daily energy, sleep, and movement</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Energy Level Selector */}
                <div>
                  <label className="text-sm opacity-70 mb-3 block" style={{ fontWeight: 500 }}>
                    Current Energy Level
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { level: 'high', label: 'High Energy', emoji: '⚡', color: themeColors[theme].primary },
                      { level: 'medium', label: 'Medium', emoji: '○', color: '#BFA36F' },
                      { level: 'low', label: 'Low/Rest', emoji: '◌', color: 'rgba(255,255,255,0.3)' }
                    ].map((item) => (
                      <button
                        key={item.level}
                        onClick={() => setCurrentEnergy(item.level as any)}
                        className={`p-5 rounded-xl border-2 transition-all ${
                          currentEnergy === item.level
                            ? 'border-2 shadow-lg'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                        style={{
                          borderColor: currentEnergy === item.level ? item.color : undefined,
                          backgroundColor: currentEnergy === item.level ? `${item.color}15` : 'rgba(255,255,255,0.02)',
                          boxShadow: currentEnergy === item.level ? `0 8px 24px ${item.color}30` : undefined
                        }}
                      >
                        <div className="text-2xl mb-2">{item.emoji}</div>
                        <div className="text-sm" style={{ fontWeight: 500 }}>{item.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sleep Hours */}
                <div>
                  <label className="text-sm opacity-70 mb-3 block" style={{ fontWeight: 500 }}>
                    Sleep Hours
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    placeholder="8.0"
                    value={todayLog.sleepHours}
                    onChange={(e) => setTodayLog(prev => ({ ...prev, sleepHours: e.target.value }))}
                    className="input-premium"
                  />
                </div>

                {/* Movement Minutes */}
                <div>
                  <label className="text-sm opacity-70 mb-3 block" style={{ fontWeight: 500 }}>
                    Movement Minutes
                  </label>
                  <input
                    type="number"
                    placeholder="60"
                    value={todayLog.movementMinutes}
                    onChange={(e) => setTodayLog(prev => ({ ...prev, movementMinutes: e.target.value }))}
                    className="input-premium"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="text-sm opacity-70 mb-3 block" style={{ fontWeight: 500 }}>
                    Notes · Body Feedback
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How does your body feel? Any insights?"
                    value={todayLog.notes}
                    onChange={(e) => setTodayLog(prev => ({ ...prev, notes: e.target.value }))}
                    className="input-premium resize-none"
                  />
                </div>

                {/* Save Button */}
                <button
                  onClick={handleSaveLog}
                  className="w-full py-4 rounded-xl border-2 transition-all hover:scale-[1.02] hover:shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${themeColors[theme].primary}20 0%, ${themeColors[theme].secondary}10 100%)`,
                    borderColor: themeColors[theme].primary,
                    boxShadow: `0 8px 32px ${themeColors[theme].primary}30`,
                    fontWeight: 600
                  }}
                >
                  Save Today's Log
                </button>
              </div>
            </div>
          </TabsContent>

          {/* Tab 3: Frequencies */}
          <TabsContent value="frequencies" className="space-y-6 mt-6">
            <div className="glass-card p-8 rounded-2xl animate-slide-in">
              <h3 className="text-2xl mb-6" style={{ fontWeight: 600 }}>Energy State Protocols</h3>
              <p className="opacity-70 mb-8">Match your activities to your current energy state</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-[#00C7FF]/10 to-transparent border border-[#00C7FF]/20">
                  <div className="text-[#00C7FF] mb-2" style={{ fontWeight: 600 }}>⚡ High Energy</div>
                  <p className="text-sm opacity-70 mb-4">Expansion · Creation · Peak performance</p>
                  <ul className="text-sm space-y-2 opacity-80">
                    <li>• Climbing / Strength training</li>
                    <li>• Creative project work</li>
                    <li>• Environment optimization</li>
                    <li>• Social connection</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-[#BFA36F]/10 to-transparent border border-[#BFA36F]/20">
                  <div className="text-[#BFA36F] mb-2" style={{ fontWeight: 600 }}>○ Medium Energy</div>
                  <p className="text-sm opacity-70 mb-4">Integration · Input · Gentle flow</p>
                  <ul className="text-sm space-y-2 opacity-80">
                    <li>• Walking / Yoga</li>
                    <li>• Reading / Film</li>
                    <li>• Calligraphy / Writing</li>
                    <li>• Inspiration gathering</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-[#2E3A46]/30 to-transparent border border-white/10">
                  <div className="opacity-70 mb-2" style={{ fontWeight: 600 }}>◌ Low Energy</div>
                  <p className="text-sm opacity-70 mb-4">Restoration · Recovery · Deep rest</p>
                  <ul className="text-sm space-y-2 opacity-80">
                    <li>• Sleep / Nap</li>
                    <li>• Bath / Skincare</li>
                    <li>• Gentle stretching</li>
                    <li>• Sensory comfort</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};