import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteFaviconsPlugin } from 'vite-plugin-favicon2'

export default defineConfig({
  plugins: [vue(), ViteFaviconsPlugin({ logo: './src/web-client/assets/favicon.png' })],
  build: {
    target: 'esnext',
    assetsInlineLimit: 0,
  },
  esbuild: {
    target: 'esnext',
  },
  css: {
    postcss: '.postcss.config.js',
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/web-client/styles/functions/_layout";@import "./src/web-client/styles/variables/_all"; `,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src/web-client',
      },
    ],
  },
})
