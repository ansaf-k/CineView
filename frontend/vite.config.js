import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { withMT } from '@material-tailwind/react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    withMT(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
      },
    }
  }
})
