import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Update base if deploying to subdirectory (e.g., /repo-name/)
  base: process.env.GITHUB_PAGES ? '/zelynto/' : '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
