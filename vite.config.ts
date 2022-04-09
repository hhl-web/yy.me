import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue';
import styleImport, { VantResolve } from 'vite-plugin-style-import';
export default defineConfig({
  // server:{
  //   port: 3000,
  //   // 反向代理
  //   proxy: {
  //       '/url': {
  //           target: 'https://api.github.com/',
  //           changeOrigin: true,
  //           rewrite: path => path.replace(/^\/url/, '')
  //       }
  //   }
  // },
  plugins: [
    vue(), 
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
})

