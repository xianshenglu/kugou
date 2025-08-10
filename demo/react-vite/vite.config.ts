import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// https://vite.dev/config/
// todo: why __dirname is available when installed @types/node? we didn't specify the type in tsconfig.json
// todo: installing @types/node can fix the type issue for path and url, but it will also make __dirname works? which may be incorrect?
// todo: remove @types/node and check all the questions
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        path.resolve(__dirname, '../shared'),
        path.resolve(__dirname, './')
      ] // or path.resolve(__dirname, '../shared')
    }
  },
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../shared')
    }
  }
})
