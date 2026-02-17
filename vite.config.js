import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use the repository name as base for GitHub Pages, but root for others (like Vercel)
  base: process.env.GITHUB_ACTIONS ? '/academic-portfolio/' : '/',
})
