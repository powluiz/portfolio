import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@language': path.resolve(__dirname, './src/language'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  plugins: [react()],
})
