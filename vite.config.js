import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures all asset paths are relative
  build: {
    outDir: 'build', // Match the expected Forge output folder
  }
})
