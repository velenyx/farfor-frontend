import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@screens': path.resolve(__dirname, './src/screens'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@assets/*': path.resolve(__dirname, './src/assets/*'),
    },
  },
  plugins: [react()],
})
