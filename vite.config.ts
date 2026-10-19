import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
    "registerType": "autoUpdate",
    "manifest": {
        "name": "FitFlow - Gym Tracker & Rest Intervals",
        "short_name": "FitFlow",
        "description": "Track sets, reps, and weights offline during workouts with built-in rest timers and exercise history logs.",
        "theme_color": "#EC4899",
        "background_color": "#ffffff",
        "display": "standalone",
        "icons": [
            {
                "src": "pwa-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "pwa-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ]
    }
})
  ]
});
