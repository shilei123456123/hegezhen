import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
    proxy: {
      // API代理配置 - 统一代理所有/api请求到目标域名
      '/api': {
        target: 'http://10.189.88.109:8000',
        //target: 'http://10.189.88.111:8000',
        //target: 'http://10.180.12.49',
        changeOrigin: true,
        // 不重写路径，保持完整路径发送到服务器
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
    