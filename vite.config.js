import path from 'path';
import {defineConfig} from 'vite';
import marko from '@marko/vite';

export default defineConfig({
  plugins: [marko()],
  build: {sourcemap: true, emptyOutDir: false},
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {additionalData: `@import "./src/styles/all.scss";`},
    },
  },
});
