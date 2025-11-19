// Local Storage Helper for LIFEMATRICES V4.0
// Provides type-safe data persistence across sessions

export const storage = {
  // Energy Dashboard
  getEnergyData: () => {
    try {
      const data = localStorage.getItem('energyDashboard');
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },
  
  setEnergyData: (data: any) => {
    try {
      localStorage.setItem('energyDashboard', JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save energy data:', e);
    }
  },

  // Manifestation Engine
  getManifestationData: () => {
    try {
      const data = localStorage.getItem('manifestationEngine');
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },
  
  setManifestationData: (data: any) => {
    try {
      localStorage.setItem('manifestationEngine', JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save manifestation data:', e);
    }
  },

  // Movement Hub
  getMovementData: () => {
    try {
      const data = localStorage.getItem('movementHub');
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },
  
  setMovementData: (data: any) => {
    try {
      localStorage.setItem('movementHub', JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save movement data:', e);
    }
  },

  // Inspiration Hub
  getInspirationData: () => {
    try {
      const data = localStorage.getItem('inspirationHub');
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },
  
  setInspirationData: (data: any) => {
    try {
      localStorage.setItem('inspirationHub', JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save inspiration data:', e);
    }
  },

  // Space Maps
  getSpaceData: () => {
    try {
      const data = localStorage.getItem('spaceMaps');
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },
  
  setSpaceData: (data: any) => {
    try {
      localStorage.setItem('spaceMaps', JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save space data:', e);
    }
  },

  // Akashic Archives
  getAkashicData: () => {
    try {
      const data = localStorage.getItem('akashicArchives');
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },
  
  setAkashicData: (data: any) => {
    try {
      localStorage.setItem('akashicArchives', JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save akashic data:', e);
    }
  },

  // Clear all data
  clearAll: () => {
    if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
      localStorage.clear();
      window.location.reload();
    }
  },

  // Export all data
  exportAll: () => {
    const allData = {
      universeOS: localStorage.getItem('universeOS'),
      energyDashboard: localStorage.getItem('energyDashboard'),
      manifestationEngine: localStorage.getItem('manifestationEngine'),
      movementHub: localStorage.getItem('movementHub'),
      inspirationHub: localStorage.getItem('inspirationHub'),
      spaceMaps: localStorage.getItem('spaceMaps'),
      akashicArchives: localStorage.getItem('akashicArchives'),
      exportDate: new Date().toISOString()
    };

    const dataStr = JSON.stringify(allData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `lifematrices-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  },

  // Import data
  importData: (jsonString: string) => {
    try {
      const data = JSON.parse(jsonString);
      Object.keys(data).forEach(key => {
        if (key !== 'exportDate' && data[key]) {
          localStorage.setItem(key, data[key]);
        }
      });
      alert('Data imported successfully! Refreshing page...');
      window.location.reload();
    } catch (e) {
      alert('Failed to import data. Please check the file format.');
      console.error('Import error:', e);
    }
  }
};
