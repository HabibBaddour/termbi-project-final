import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  base: '/termbi-project-final/',
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://training.tamkeen-dev.com/termc/public',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
