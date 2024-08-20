import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    }),
    Components({
      dirs: ['src'],
      extensions: ['vue'],
      deep: true,
      dts: true
    })
  ],
  build: {
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
