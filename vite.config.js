import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true, // Ensure hot module replacement is enabled
    watch: {
      usePolling: true, // Can help in some environments (like WSL or certain containers)
    }
  }
})