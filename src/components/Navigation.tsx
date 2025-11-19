import React, { useState, useRef } from 'react';
import { Sparkles, Activity, Target, Dumbbell, Image, Map, BookOpen, Palette, Download, Upload, Trash2, MoreVertical } from 'lucide-react';
import { useTheme, ThemeType } from '../lib/theme-context';
import { storage } from '../lib/storage';

interface NavigationProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, setCurrentView }) => {
  const { theme, setTheme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const navItems = [
    { id: 'universe', label: 'Universe OS', icon: Sparkles },
    { id: 'energy', label: 'Energy', icon: Activity },
    { id: 'manifestation', label: 'Manifestation', icon: Target },
    { id: 'movement', label: 'Movement', icon: Dumbbell },
    { id: 'inspiration', label: 'Inspiration', icon: Image },
    { id: 'space', label: 'Space Maps', icon: Map },
    { id: 'akashic', label: 'Akashic', icon: BookOpen },
  ];

  const themes: { id: ThemeType; label: string; color: string; description: string }[] = [
    { id: 'cosmic', label: 'Cosmic Fluid', color: '#D96AFF', description: 'Purple Dream' },
    { id: 'data', label: 'Data Blue', color: '#3B82F6', description: 'Analytics Pro' },
    { id: 'xai', label: 'X-AI Dark', color: '#00F0FF', description: 'Cyberpunk' },
    { id: 'vidgen', label: 'VidGen', color: '#00FFFF', description: 'Ultra Neon' },
  ];

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        storage.importData(content);
      };
      reader.readAsText(file);
    }
    setShowMenu(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Sparkles className="w-7 h-7 text-[#00C7FF] neon-glow animate-pulse-glow" />
            <div>
              <div className="text-xl tracking-tight" style={{ fontWeight: 600 }}>LIFEMATRICES</div>
              <div className="text-[10px] tracking-[0.15em] uppercase opacity-40">V4.0 Universe OS</div>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`relative px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all ${
                    isActive
                      ? 'bg-gradient-to-br from-[#00C7FF]/15 to-[#00C7FF]/5 text-[#00C7FF]'
                      : 'hover:bg-white/[0.04] text-white/70 hover:text-white/90'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl border border-[#00C7FF]/30 shadow-lg shadow-[#00C7FF]/10"></div>
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="text-sm relative z-10" style={{ fontWeight: isActive ? 500 : 400 }}>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Theme Switcher & Menu */}
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 opacity-60" />
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as ThemeType)}
              className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 outline-none cursor-pointer text-sm hover:border-white/20 transition-all"
              style={{ fontWeight: 500 }}
            >
              {themes.map((t) => (
                <option key={t.id} value={t.id} style={{ background: '#1a1a23', color: t.color }}>
                  {t.label} · {t.description}
                </option>
              ))}
            </select>

            {/* Data Menu */}
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all"
                title="Data Management"
              >
                <MoreVertical className="w-5 h-5" />
              </button>

              {showMenu && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setShowMenu(false)}
                  />
                  <div className="absolute right-0 mt-2 w-56 rounded-xl glass-card border border-white/10 p-2 z-50 animate-slide-in">
                    <button
                      onClick={() => {
                        storage.exportAll();
                        setShowMenu(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/[0.08] transition-all text-left"
                    >
                      <Download className="w-4 h-4 text-[#00C7FF]" />
                      <div>
                        <div className="text-sm" style={{ fontWeight: 500 }}>Export Data</div>
                        <div className="text-xs opacity-50">Download backup</div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        fileInputRef.current?.click();
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/[0.08] transition-all text-left"
                    >
                      <Upload className="w-4 h-4 text-[#BFA36F]" />
                      <div>
                        <div className="text-sm" style={{ fontWeight: 500 }}>Import Data</div>
                        <div className="text-xs opacity-50">Restore backup</div>
                      </div>
                    </button>

                    <div className="h-px bg-white/10 my-2" />

                    <button
                      onClick={() => {
                        storage.clearAll();
                        setShowMenu(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/10 transition-all text-left text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                      <div>
                        <div className="text-sm" style={{ fontWeight: 500 }}>Clear All Data</div>
                        <div className="text-xs opacity-50">Reset everything</div>
                      </div>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden mt-4 flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`px-4 py-2.5 rounded-xl flex items-center gap-2 whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-gradient-to-br from-[#00C7FF]/15 to-[#00C7FF]/5 text-[#00C7FF] border border-[#00C7FF]/30'
                    : 'bg-white/[0.02] border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm" style={{ fontWeight: isActive ? 500 : 400 }}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hidden file input for import */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleImport}
        className="hidden"
      />
    </nav>
  );
};