import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        about: resolve(rootDir, 'about.html'),
        services: resolve(rootDir, 'services.html'),
        skills: resolve(rootDir, 'skills.html'),
        projects: resolve(rootDir, 'projects.html'),
        experience: resolve(rootDir, 'experience.html'),
        users: resolve(rootDir, 'users.html'),
      },
    },
  },
})
