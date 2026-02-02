import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  server:{

    proxy: {

      '/api': 'http://localhost:3000/api'
    }

  },
  plugins: [react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    })],
  resolve: {
    alias: {
      '@frontend': path.resolve(__dirname, 'src/frontend'),
      '@backend': path.resolve(__dirname, 'src/backend'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
})
