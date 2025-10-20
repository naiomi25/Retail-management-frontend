import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      '@mui/material',
      '@mui/material/styles',
      '@mui/icons-material',
      '@mui/x-date-pickers',
      '@emotion/react',
      '@emotion/styled',
      '@mui/joy',
      '@mui/joy/styles',
    ],
  },
  resolve: {
    alias: [
      { find: '@emotion/react', replacement: path.resolve(__dirname, 'node_modules/@emotion/react') },
      { find: '@emotion/styled', replacement: path.resolve(__dirname, 'node_modules/@emotion/styled') },
    ],
  },
  ssr: {
    noExternal: [
      '@mui/material',
      '@mui/material/styles',
      '@mui/system',
      '@emotion/react',
      '@emotion/styled',
      '@mui/joy',
      '@mui/joy/styles'
    ]
  }
})
