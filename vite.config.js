import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using relative base paths makes the project compatible with both root domains (Vercel)
  // and subdirectories (GitHub Pages) without needing separate configurations.
  base: './',
})
