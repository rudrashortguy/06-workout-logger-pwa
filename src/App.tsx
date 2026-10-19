import React, { useState } from 'react';
import { Sparkles, Wifi, ShieldCheck, RefreshCw, Terminal } from 'lucide-react';

export default function App() {
  const [actionDone, setActionDone] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-2" style={ backgroundColor: '#EC4899' }></div>

        <div className="flex items-center justify-between mb-6">
          <span className="text-5xl">💪</span>
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Wifi className="w-3.5 h-3.5" />
            <span>PWA Ready & Offline</span>
          </div>
        </div>

        <h1 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">FitFlow - Gym Tracker & Rest Intervals</h1>
        <p className="text-slate-600 mb-6 text-sm leading-relaxed">Track sets, reps, and weights offline during workouts with built-in rest timers and exercise history logs.</p>

        <div className="space-y-2.5 bg-slate-50 p-4 rounded-2xl mb-6 border border-slate-200/60">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Key Capabilities</div>
          <div className="flex items-center text-sm text-slate-700"><span className="mr-2 font-bold" style={ color: "#EC4899" }>✓</span> Exercise library & custom routines</div>
          <div className="flex items-center text-sm text-slate-700"><span className="mr-2 font-bold" style={ color: "#EC4899" }>✓</span> Rest timer with audio/vibration</div>
          <div className="flex items-center text-sm text-slate-700"><span className="mr-2 font-bold" style={ color: "#EC4899" }>✓</span> Previous set weight & rep recall</div>
          <div className="flex items-center text-sm text-slate-700"><span className="mr-2 font-bold" style={ color: "#EC4899" }>✓</span> Workout history analytics</div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => { setActionDone(true); setCount(c => c + 1); }}
            className="w-full py-3.5 px-6 rounded-2xl font-bold text-white shadow-lg transition-transform active:scale-95 flex items-center justify-center space-x-2"
            style={ backgroundColor: '#EC4899' }
          >
            <Sparkles className="w-5 h-5" />
            <span>{actionDone ? `Executed Action (${count})` : 'Launch PWA Workspace'}</span>
          </button>

          <div className="flex items-center justify-center space-x-4 text-xs text-slate-500 pt-2">
            <span className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1 text-indigo-500" /> Workbox Caching</span>
            <span className="flex items-center"><RefreshCw className="w-3.5 h-3.5 mr-1 text-blue-500" /> Vite + React 18</span>
          </div>
        </div>
      </div>

      <div className="mt-6 text-xs text-slate-400 font-mono">
        Portfolio PWA Suite 2026 • 06-workout-logger-pwa
      </div>
    </div>
  );
}
