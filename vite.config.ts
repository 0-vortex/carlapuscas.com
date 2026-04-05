import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import contentCollections from '@content-collections/vite'
import path from 'node:path'

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    tanstackStart({ srcDirectory: 'src' }),
    react(),
    tailwindcss(),
    contentCollections(),
  ],
})
