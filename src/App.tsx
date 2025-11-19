import React, { useState } from 'react';
import { ThemeProvider } from './lib/theme-context';
import { Navigation } from './components/Navigation';
import { UniverseOS } from './components/UniverseOS';
import { EnergyDashboard } from './components/EnergyDashboard';
import { ManifestationEngine } from './components/ManifestationEngine';
import { MovementHub } from './components/MovementHub';
import { InspirationHub } from './components/InspirationHub';
import { SpaceMaps } from './components/SpaceMaps';
import { AkashicArchives } from './components/AkashicArchives';

export default function App() {
  const [currentView, setCurrentView] = useState('universe');

  const renderView = () => {
    switch (currentView) {
      case 'universe':
        return <UniverseOS />;
      case 'energy':
        return <EnergyDashboard />;
      case 'manifestation':
        return <ManifestationEngine />;
      case 'movement':
        return <MovementHub />;
      case 'inspiration':
        return <InspirationHub />;
      case 'space':
        return <SpaceMaps />;
      case 'akashic':
        return <AkashicArchives />;
      default:
        return <UniverseOS />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen app-container">
        <Navigation currentView={currentView} setCurrentView={setCurrentView} />
        <div className="pt-24">
          {renderView()}
        </div>
      </div>
    </ThemeProvider>
  );
}
