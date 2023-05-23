import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  base: '/todo-with-vue/',
  define: {
    'process.env': {},
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/style/variables";',
      },
    },
  },
});