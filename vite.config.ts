import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['835d-2401-4900-8fca-d430-3924-dd61-1380-499b.ngrok-free.app'],
    port: 3000,
    host: true,
    open: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }

});