import React, { useState, useEffect } from 'react';
import { Activity, Plus, Trash2, Wifi, WifiOff } from 'lucide-react';

export function App() {
  const [items, setItems] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('workout-logger-pwa_items');
      return saved ? JSON.parse(saved) : ['Initial item 1', 'Initial item 2', 'Offline ready!'];
    } catch {
      return ['Default item'];
    }
  });
  const [input, setInput] = useState('');
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [activeTab, setActiveTab] = useState<'app' | 'info'>('app');

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('workout-logger-pwa_items', JSON.stringify(items));
  }, [items]);

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setItems([input.trim(), ...items]);
    setInput('');
  };

  const removeItem = (idx: number) => {
    setItems(items.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      <header className="border-b border-zinc-800 bg-zinc-900/60 backdrop-blur sticky top-0 z-10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-indigo-600/20 text-indigo-400 rounded-xl border border-indigo-500/30">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">FitFlow Gym</h1>
            <p className="text-xs text-zinc-450">06 • PWA Mobile Portfolio</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium">
            {isOnline ? (
              <>
                <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Online</span>
              </>
            ) : (
              <>
                <WifiOff className="w-3.5 h-3.5 text-rose-400" />
                <span className="text-rose-400">Offline</span>
              </>
            )}
          </div>
        </div>
      </header>

      <div className="flex border-b border-zinc-800 bg-zinc-900/40 px-4">
        <button
          onClick={() => setActiveTab('app')}
          className={`py-2.5 px-4 font-medium text-sm border-b-2 transition-colors ${activeTab === 'app' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-zinc-400 hover:text-zinc-200'}`}
        >
          Workspace
        </button>
        <button
          onClick={() => setActiveTab('info')}
          className={`py-2.5 px-4 font-medium text-sm border-b-2 transition-colors ${activeTab === 'info' ? 'border-indigo-500 text-indigo-400' : 'border-transparent text-zinc-400 hover:text-zinc-200'}`}
        >
          About PWA
        </button>
      </div>

      <main className="flex-1 max-w-md w-full mx-auto p-4 flex flex-col gap-4">
        {activeTab === 'app' ? (
          <>
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-xl">
              <h2 className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                <Plus className="w-4 h-4 text-indigo-400" /> Add New Entry
              </h2>
              <form onSubmit={addItem} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type something..."
                  className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-xl text-sm transition-colors shadow-lg shadow-indigo-600/20"
                >
                  Add
                </button>
              </form>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex-1 flex flex-col shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-semibold text-zinc-300">Items ({items.length})</h2>
                <button
                  onClick={() => setItems([])}
                  className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Clear All
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2 max-h-[350px]">
                {items.length === 0 ? (
                  <div className="text-center py-12 text-zinc-500 text-sm">
                    No items yet. Add one above!
                  </div>
                ) : (
                  items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between bg-zinc-950 border border-zinc-800/80 rounded-xl px-3 py-2.5 text-sm group hover:border-zinc-700 transition-all"
                    >
                      <span className="truncate pr-2">{item}</span>
                      <button
                        onClick={() => removeItem(idx)}
                        className="text-zinc-500 hover:text-rose-400 transition-colors p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4 shadow-xl">
            <h2 className="font-semibold text-zinc-200">About FitFlow Gym</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Gym workout logger, set tracker, and rest interval timer.
            </p>
            <div className="border-t border-zinc-800 pt-4 space-y-2 text-xs text-zinc-400">
              <div className="flex justify-between">
                <span>Architecture</span>
                <span className="text-zinc-200 font-medium">Vite + React + TS</span>
              </div>
              <div className="flex justify-between">
                <span>PWA Support</span>
                <span className="text-emerald-400 font-medium">Workbox Service Worker</span>
              </div>
              <div className="flex justify-between">
                <span>Storage</span>
                <span className="text-zinc-200 font-medium">LocalStorage / IndexedDB</span>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-zinc-800 py-3 text-center text-xs text-zinc-500">
        FitFlow Gym • Portfolio 2026 PWA Suite
      </footer>
    </div>
  );
}

export default App;
