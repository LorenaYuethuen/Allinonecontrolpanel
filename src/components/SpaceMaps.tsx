import React, { useState } from 'react';
import { MapPin, Plane, Home, Mountain, Waves, Sun, Globe, Plus } from 'lucide-react';
import { useTheme } from '../lib/theme-context';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export const SpaceMaps: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [newDestination, setNewDestination] = useState({
    city: '',
    country: '',
    bestFor: '',
    budget: ''
  });

  // Theme-specific colors
  const themeColors = {
    cosmic: { primary: '#D96AFF', secondary: '#B24BF3', gradient: 'from-[#D96AFF] via-[#B24BF3] to-[#7C3AED]' },
    data: { primary: '#3B82F6', secondary: '#60A5FA', gradient: 'from-[#3B82F6] via-[#60A5FA] to-[#1E40AF]' },
    xai: { primary: '#00F0FF', secondary: '#00C7FF', gradient: 'from-[#00F0FF] via-[#00C7FF] to-[#0EA5E9]' },
    vidgen: { primary: '#00FFFF', secondary: '#FF00FF', gradient: 'from-[#00FFFF] via-[#FF00FF] to-[#7C3AED]' },
  };

  const [travelSpaces, setTravelSpaces] = useState([
    {
      id: 1,
      city: 'Chiang Mai',
      country: 'Thailand',
      type: 'Mountain',
      icon: Mountain,
      energy: 'Calm · Grounding · Creative community',
      bestFor: 'Deep work · Climbing · Digital nomad hub',
      budget: '$800-1200/month',
      visited: true,
      rating: 9,
      vibe: ['Mountains', 'Temples', 'Coffee', 'Climbing'],
    },
    {
      id: 2,
      city: 'Lisbon',
      country: 'Portugal',
      type: 'Ocean',
      icon: Waves,
      energy: 'Flow · Light · Aesthetic richness',
      bestFor: 'Inspiration · Architecture · Coastline',
      budget: '$1200-1800/month',
      visited: false,
      rating: 0,
      vibe: ['Ocean', 'Tiles', 'Light', 'Hills'],
    },
    {
      id: 3,
      city: 'Tokyo',
      country: 'Japan',
      type: 'Urban',
      icon: Sun,
      energy: 'High frequency · Precision · Neon aesthetics',
      bestFor: 'Sensory input · Culture · Food · Design',
      budget: '$1500-2500/month',
      visited: true,
      rating: 10,
      vibe: ['Neon', 'Minimal', 'Precision', 'Food'],
    },
  ]);

  const travelCycle = [
    { phase: 'Anchor', duration: '2-3 months', description: 'Deep roots · Routine · Community · Focus' },
    { phase: 'Refresh', duration: '2-4 weeks', description: 'New city · Break pattern · Energy shift' },
    { phase: 'Flow', duration: '1-2 months', description: 'Semi-nomadic · Explore · Light routine' },
  ];

  const handleAddDestination = () => {
    if (newDestination.city && newDestination.country) {
      setTravelSpaces([
        ...travelSpaces,
        {
          id: Date.now(),
          ...newDestination,
          type: 'Urban',
          icon: Sun,
          energy: 'To be discovered',
          visited: false,
          rating: 0,
          vibe: ['Explore', 'New']
        }
      ]);
      setNewDestination({ city: '', country: '', bestFor: '', budget: '' });
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="animate-slide-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full shadow-lg animate-pulse" style={{ background: themeColors[theme].primary, boxShadow: `0 0 20px ${themeColors[theme].primary}` }}></div>
            <span className="text-xs tracking-[0.2em] uppercase opacity-50">NOMADIC SYSTEM</span>
          </div>
          <h1 className={`text-5xl md:text-7xl mb-4 tracking-tight bg-gradient-to-r ${themeColors[theme].gradient} bg-clip-text text-transparent`} style={{ fontWeight: 700 }}>Space Maps</h1>
          <p className="text-lg md:text-xl opacity-50 max-w-3xl" style={{ fontWeight: 400 }}>Nomadic life design · Energy geography · Travel as frequency shift</p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full grid-cols-3 glass-card p-1.5 rounded-xl">
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="destinations">Destinations</TabsTrigger>
            <TabsTrigger value="cycle">Travel Cycle</TabsTrigger>
          </TabsList>

          {/* Tab 1: Current Location */}
          <TabsContent value="current" className="space-y-6 mt-6">
            <div className="glass-card p-8 md:p-10 rounded-2xl animate-slide-in">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <Globe className="w-7 h-7" style={{ color: themeColors[theme].primary }} />
                </div>
                <div>
                  <h2 className="text-2xl mb-1" style={{ fontWeight: 600 }}>Current Location</h2>
                  <p className="opacity-50 text-lg">Shanghai, China</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-sm opacity-50 mb-2" style={{ fontWeight: 400 }}>Time Here</div>
                  <div className="text-3xl metric-display" style={{ fontWeight: 600, color: themeColors[theme].primary }}>8 months</div>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-sm opacity-50 mb-2" style={{ fontWeight: 400 }}>Next Move</div>
                  <div className="text-3xl metric-display" style={{ fontWeight: 600, color: themeColors[theme].secondary }}>2-3 months</div>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-sm opacity-50 mb-2" style={{ fontWeight: 400 }}>Phase</div>
                  <div className="text-3xl" style={{ fontWeight: 600, color: themeColors[theme].primary }}>Anchor</div>
                </div>
              </div>
            </div>

            {/* Energy Geography */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl mb-6" style={{ fontWeight: 600 }}>Energy Geography</h2>
              <p className="opacity-80 mb-8">
                Different spaces activate different frequencies. Movement between them = energetic reset.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Mountain className="w-10 h-10 mx-auto mb-3 text-[#8C7853]" />
                  <h3 className="mb-2">Mountains</h3>
                  <p className="text-sm opacity-70">Grounding · Perspective · Solitude · Focus</p>
                </div>
                <div className="text-center">
                  <Waves className="w-10 h-10 mx-auto mb-3 text-[#00C7FF]" />
                  <h3 className="mb-2">Ocean</h3>
                  <p className="text-sm opacity-70">Flow · Vastness · Rhythm · Release</p>
                </div>
                <div className="text-center">
                  <Sun className="w-10 h-10 mx-auto mb-3 text-[#BFA36F]" />
                  <h3 className="mb-2">Urban</h3>
                  <p className="text-sm opacity-70">Stimulation · Density · Culture · Speed</p>
                </div>
                <div className="text-center">
                  <Home className="w-10 h-10 mx-auto mb-3 text-[#00C7FF]" />
                  <h3 className="mb-2">Anchor</h3>
                  <p className="text-sm opacity-70">Depth · Routine · Community · Roots</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tab 2: Destinations Database */}
          <TabsContent value="destinations" className="space-y-6 mt-6">
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl mb-6" style={{ fontWeight: 600 }}>Travel Database</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {travelSpaces.map((space) => {
                  const Icon = space.icon;
                  return (
                    <div
                      key={space.id}
                      onClick={() => setSelectedCity(space.city)}
                      className={`p-6 rounded-xl cursor-pointer transition-all ${
                        selectedCity === space.city
                          ? 'bg-gradient-to-br from-[#00C7FF]/10 to-transparent border-2 border-[#00C7FF]'
                          : 'bg-white/5 border border-white/10 hover:border-[#00C7FF]/50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Icon className="w-6 h-6 text-[#00C7FF]" />
                          <div>
                            <h3 className="text-xl">{space.city}</h3>
                            <p className="text-sm opacity-60">{space.country}</p>
                          </div>
                        </div>
                        {space.visited && (
                          <div className="flex items-center gap-1">
                            <span className="text-[#BFA36F]">★</span>
                            <span className="text-sm">{space.rating}/10</span>
                          </div>
                        )}
                      </div>

                      <p className="text-sm opacity-80 mb-3">{space.energy}</p>
                      
                      <div className="mb-3">
                        <div className="text-xs opacity-60 mb-1">Best for:</div>
                        <div className="text-sm">{space.bestFor}</div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {space.vibe.map((v, idx) => (
                          <span key={idx} className="px-2 py-1 rounded text-xs bg-white/10">
                            {v}
                          </span>
                        ))}
                      </div>

                      <div className="text-sm opacity-60">{space.budget}</div>
                    </div>
                  );
                })}
              </div>

              {/* Add New Destination */}
              <div className="p-6 rounded-xl border-2 border-dashed border-white/10 bg-white/[0.01]">
                <div className="flex items-center gap-4 mb-4">
                  <Plane className="w-8 h-8 text-[#00C7FF]" />
                  <h3 className="text-xl" style={{ fontWeight: 600 }}>Add New Destination</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="City"
                    value={newDestination.city}
                    onChange={(e) => setNewDestination(prev => ({ ...prev, city: e.target.value }))}
                    className="input-premium"
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    value={newDestination.country}
                    onChange={(e) => setNewDestination(prev => ({ ...prev, country: e.target.value }))}
                    className="input-premium"
                  />
                  <input
                    type="text"
                    placeholder="Best for..."
                    value={newDestination.bestFor}
                    onChange={(e) => setNewDestination(prev => ({ ...prev, bestFor: e.target.value }))}
                    className="input-premium"
                  />
                  <input
                    type="text"
                    placeholder="Budget (optional)"
                    value={newDestination.budget}
                    onChange={(e) => setNewDestination(prev => ({ ...prev, budget: e.target.value }))}
                    className="input-premium"
                  />
                </div>
                <button
                  onClick={handleAddDestination}
                  className="w-full py-3 rounded-xl border-2 transition-all hover:scale-[1.02]"
                  style={{
                    background: `linear-gradient(135deg, ${themeColors[theme].primary}15 0%, ${themeColors[theme].secondary}10 100%)`,
                    borderColor: themeColors[theme].primary + '40',
                    fontWeight: 500
                  }}
                >
                  Add Destination
                </button>
              </div>
            </div>
          </TabsContent>

          {/* Tab 3: Travel Cycle System */}
          <TabsContent value="cycle" className="space-y-6 mt-6">
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <Plane className="w-6 h-6" style={{ color: themeColors[theme].secondary }} />
                </div>
                <h2 className="text-2xl" style={{ fontWeight: 600 }}>Nomadic Cycle System</h2>
              </div>
              <p className="opacity-60 mb-8 text-lg" style={{ fontWeight: 400 }}>Movement as energy management · Not running, consciously shifting</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {travelCycle.map((cycle, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 hover:border-white/20 transition-all group card-lift"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-sm" style={{ fontWeight: 600, color: themeColors[theme].primary }}>
                        {idx + 1}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: '18px', color: themeColors[theme].primary }}>{cycle.phase}</div>
                    </div>
                    <div className="text-sm opacity-50 mb-3" style={{ fontWeight: 500 }}>{cycle.duration}</div>
                    <p className="text-sm opacity-70 leading-relaxed" style={{ fontWeight: 400 }}>{cycle.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Nomadic Philosophy */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl mb-6" style={{ fontWeight: 600 }}>Nomadic Philosophy</h2>
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#00C7FF] mb-2" style={{ fontWeight: 600 }}>Freedom through Structure</div>
                  <p className="text-sm opacity-80">
                    Anchor periods create depth. Refresh periods create perspective. Flow periods create discovery.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#BFA36F] mb-2" style={{ fontWeight: 600 }}>Environment as Tool</div>
                  <p className="text-sm opacity-80">
                    Different cities activate different frequencies. Use geography intentionally.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#00C7FF] mb-2" style={{ fontWeight: 600 }}>Minimalism Enables Movement</div>
                  <p className="text-sm opacity-80">
                    Less stuff = more freedom. Digital work = location independence. Light living = easy shifts.
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