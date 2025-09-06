import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [
    react(),
    federation({
      name: 'main_app',
      remotes: {
        music_library: 'music_library@https://frontend-musicapp-656t.vercel.app/remoteEntry.js'
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
})