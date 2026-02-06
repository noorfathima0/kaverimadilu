import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    host: true, // Listen on all network interfaces
    port: 5173, // Explicit port
    strictPort: true, // Don't try other ports if 5173 is busy
    cors: true, // Enable CORS
    // This allows ALL hosts including ngrok
    allowedHosts: true
  },
  preview: {
    host: true,
    port: 4173,
    strictPort: true,
    allowedHosts: true
  }
})
