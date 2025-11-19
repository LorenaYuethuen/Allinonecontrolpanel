import React, { useState } from 'react';
import { Image, Music, Film, Palette, BookOpen, User, Plus } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useTheme } from '../lib/theme-context';

export const InspirationHub: React.FC = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const [newItem, setNewItem] = useState({
    category: 'visual',
    title: '',
    type: '',
    note: ''
  });

  // Theme-specific colors
  const themeColors = {
    cosmic: { primary: '#D96AFF', secondary: '#B24BF3' },
    data: { primary: '#3B82F6', secondary: '#60A5FA' },
    xai: { primary: '#00F0FF', secondary: '#00C7FF' },
    vidgen: { primary: '#00FFFF', secondary: '#FF00FF' },
  };

  const categories = [
    { id: 'all', label: 'All', icon: Palette },
    { id: 'visual', label: 'Visual', icon: Image },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'film', label: 'Film', icon: Film },
    { id: 'philosophy', label: 'Philosophy', icon: BookOpen },
    { id: 'people', label: 'People', icon: User },
  ];

  const [inspirationItems, setInspirationItems] = useState([
    {
      id: 1,
      category: 'visual',
      title: 'Misty Blue Gradient',
      type: 'Color Palette',
      note: 'Perfect for calm, flowing interfaces',
      colors: ['#2E3A46', '#00C7FF', '#BFA36F'],
    },
    {
      id: 2,
      category: 'film',
      title: 'Lost in Translation',
      type: 'Film',
      note: 'Loneliness as portal · Tokyo neon aesthetics · Liminal spaces',
      mood: 'Contemplative',
    },
    {
      id: 3,
      category: 'music',
      title: 'Nils Frahm - Says',
      type: 'Music',
      note: 'Building emotion · Repetition as meditation · Perfect for flow state',
      mood: 'Flow',
    },
    {
      id: 4,
      category: 'philosophy',
      title: 'Existentialism',
      type: 'Philosophy',
      note: 'Creating meaning through experience · Freedom as responsibility',
      thinker: 'Sartre, Camus',
    },
    {
      id: 5,
      category: 'visual',
      title: 'Brutalist Architecture',
      type: 'Photography',
      note: 'Raw concrete · Honest materiality · Geometric power',
      mood: 'Grounding',
    },
    {
      id: 6,
      category: 'people',
      title: 'Nomadic Creators',
      type: 'People',
      note: 'Living between cities · Creating while moving · Digital independence',
      archetype: 'Polymath',
    },
  ]);

  const filteredItems = activeCategory === 'all' 
    ? inspirationItems 
    : inspirationItems.filter(item => item.category === activeCategory);

  const handleAddItem = () => {
    if (newItem.title && newItem.note) {
      setInspirationItems([
        { id: Date.now(), ...newItem },
        ...inspirationItems
      ]);
      setNewItem({ category: 'visual', title: '', type: '', note: '' });
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="glass-card p-10 md:p-16 rounded-3xl relative overflow-hidden animate-slide-in">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3C1D5A]/15 via-[#D96AFF]/5 to-[#33F0FF]/8"></div>
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#D96AFF]/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-10 h-10 text-[#D96AFF] animate-pulse-glow" style={{ filter: 'drop-shadow(0 0 12px rgba(217, 106, 255, 0.6))' }} />
              <span className="text-xs tracking-[0.2em] uppercase opacity-50">CREATIVE INPUT</span>
            </div>
            <h1 className="text-5xl md:text-8xl mb-6 leading-[0.95] tracking-tight" style={{ fontWeight: 600 }}>Inspiration Hub</h1>
            <p className="text-lg md:text-2xl opacity-60 leading-relaxed" style={{ fontWeight: 400 }}>Aesthetic input · Moodboard · Creative fuel · Polymath stack</p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="grid w-full grid-cols-3 glass-card p-1.5 rounded-xl">
            <TabsTrigger value="browse">Browse</TabsTrigger>
            <TabsTrigger value="capture">Capture</TabsTrigger>
            <TabsTrigger value="theory">Theory</TabsTrigger>
          </TabsList>

          {/* Tab 1: Browse Inspiration */}
          <TabsContent value="browse" className="space-y-6 mt-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 animate-slide-in">
              {categories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-6 py-3 rounded-xl flex items-center gap-3 transition-all animate-scale-in ${
                      activeCategory === cat.id
                        ? 'bg-gradient-to-r from-[#00C7FF]/15 to-[#BFA36F]/10 border border-[#00C7FF]/50 shadow-lg shadow-[#00C7FF]/20'
                        : 'bg-white/[0.02] border border-white/10 hover:border-[#00C7FF]/30 hover:bg-white/[0.04]'
                    }`}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <Icon className="w-4 h-4" />
                    <span style={{ fontWeight: activeCategory === cat.id ? 500 : 400 }}>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Inspiration Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="glass-card p-6 rounded-xl hover:border-[#00C7FF]/40 transition-all cursor-pointer group card-lift animate-scale-in"
                  style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
                >
                  {/* Color Preview */}
                  {item.category === 'visual' && item.colors && (
                    <div className="flex gap-2 mb-6 -mx-2 -mt-2">
                      {item.colors.map((color, colorIdx) => (
                        <div
                          key={colorIdx}
                          className="w-full h-24 first:rounded-tl-xl last:rounded-tr-xl transition-all group-hover:h-28"
                          style={{ 
                            backgroundColor: color,
                            boxShadow: `0 4px 12px ${color}40`
                          }}
                        ></div>
                      ))}
                    </div>
                  )}

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-lg mb-1.5" style={{ fontWeight: 600 }}>{item.title}</h3>
                        <div className="text-sm opacity-50" style={{ fontWeight: 400 }}>{item.type}</div>
                      </div>
                      {(item.mood || item.archetype) && (
                        <span className="badge-premium flex-shrink-0">
                          {item.mood || item.archetype}
                        </span>
                      )}
                    </div>
                    <p className="text-sm opacity-70 leading-relaxed" style={{ fontWeight: 400 }}>{item.note}</p>
                    {item.thinker && (
                      <div className="text-xs opacity-40 pt-2 border-t border-white/5">Source: {item.thinker}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Tab 2: Capture New Inspiration */}
          <TabsContent value="capture" className="space-y-6 mt-6">
            <div className="glass-card p-8 rounded-2xl animate-slide-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D96AFF]/20 to-[#D96AFF]/5 flex items-center justify-center">
                  <Plus className="w-6 h-6 text-[#D96AFF]" />
                </div>
                <div>
                  <h3 className="text-2xl" style={{ fontWeight: 600 }}>Capture New Inspiration</h3>
                  <p className="text-sm opacity-50">Color · Sound · Image · Idea · Person · Moment</p>
                </div>
              </div>

              <div className="space-y-5">
                {/* Category Selection */}
                <div>
                  <label className="text-sm opacity-70 mb-3 block" style={{ fontWeight: 500 }}>Category</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {categories.filter(c => c.id !== 'all').map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setNewItem(prev => ({ ...prev, category: cat.id }))}
                          className={`p-4 rounded-xl flex items-center gap-3 transition-all ${
                            newItem.category === cat.id
                              ? 'border-2 shadow-lg'
                              : 'border border-white/10 hover:border-white/30'
                          }`}
                          style={{
                            borderColor: newItem.category === cat.id ? themeColors[theme].primary : undefined,
                            backgroundColor: newItem.category === cat.id ? `${themeColors[theme].primary}15` : 'rgba(255,255,255,0.02)'
                          }}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="text-sm">{cat.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="text-sm opacity-70 mb-3 block" style={{ fontWeight: 500 }}>Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Blade Runner 2049, Monet's Water Lilies..."
                    value={newItem.title}
                    onChange={(e) => setNewItem(prev => ({ ...prev, title: e.target.value }))}
                    className="input-premium"
                  />
                </div>

                {/* Type */}
                <div>
                  <label className="text-sm opacity-70 mb-3 block" style={{ fontWeight: 500 }}>Type (optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Film, Album, Book, Person..."
                    value={newItem.type}
                    onChange={(e) => setNewItem(prev => ({ ...prev, type: e.target.value }))}
                    className="input-premium"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="text-sm opacity-70 mb-3 block" style={{ fontWeight: 500 }}>Notes · Why it inspires you</label>
                  <textarea
                    rows={4}
                    placeholder="What makes this special? What frequency does it activate? How might you use it?"
                    value={newItem.note}
                    onChange={(e) => setNewItem(prev => ({ ...prev, note: e.target.value }))}
                    className="input-premium resize-none"
                  />
                </div>

                {/* Save Button */}
                <button
                  onClick={handleAddItem}
                  className="w-full py-4 rounded-xl border-2 transition-all hover:scale-[1.02] hover:shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${themeColors[theme].primary}20 0%, ${themeColors[theme].secondary}10 100%)`,
                    borderColor: themeColors[theme].primary,
                    boxShadow: `0 8px 32px ${themeColors[theme].primary}30`,
                    fontWeight: 600
                  }}
                >
                  Add to Library
                </button>
              </div>
            </div>
          </TabsContent>

          {/* Tab 3: Inspiration Flow Theory */}
          <TabsContent value="theory" className="space-y-6 mt-6">
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl mb-6" style={{ fontWeight: 600 }}>Input → Integration → Output</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl mb-3">📥</div>
                  <h3 className="text-xl mb-2">Input</h3>
                  <p className="text-sm opacity-70">
                    High-quality aesthetic experiences · Films, music, colors, spaces · Polymath mindset
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-3">⚗️</div>
                  <h3 className="text-xl mb-2">Integration</h3>
                  <p className="text-sm opacity-70">
                    Subconscious processing · Walking, movement, rest · Pattern recognition
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-3">📤</div>
                  <h3 className="text-xl mb-2">Output</h3>
                  <p className="text-sm opacity-70">
                    Creative work · New combinations · Original expression · Value creation
                  </p>
                </div>
              </div>
            </div>

            {/* Polymath Principles */}
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl mb-6" style={{ fontWeight: 600 }}>Polymath Principles</h2>
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#00C7FF] mb-2" style={{ fontWeight: 600 }}>Cross-Pollination</div>
                  <p className="text-sm opacity-80">
                    The best ideas come from combining concepts across domains. Film aesthetics + coding. Philosophy + design.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#BFA36F] mb-2" style={{ fontWeight: 600 }}>High Input Density</div>
                  <p className="text-sm opacity-80">
                    Consume more high-quality inputs than seems reasonable. Your subconscious will do the work.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="text-[#00C7FF] mb-2" style={{ fontWeight: 600 }}>Delayed Output</div>
                  <p className="text-sm opacity-80">
                    Creative breakthroughs often come 2-3 days after intense input. Trust the lag time.
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