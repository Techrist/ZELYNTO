import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use '/' for Vercel, '/REPO/' for GitHub Pages subdirectory
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
