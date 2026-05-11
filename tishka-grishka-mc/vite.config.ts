import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api/wb': {
        target: 'https://card.wb.ru',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/wb/, ''),
        // Важно: некоторые эндпоинты требуют заголовки
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }
    }
  }
})

