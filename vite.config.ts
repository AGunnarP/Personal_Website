import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  server:{

    proxy: {
            // Forward all requests from localhost:5173/api/* to localhost:3000/api/*
            "/api": "http://159.203.83.92:3000",
            "/auth" : "http://159.203.83.92:3000"
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
