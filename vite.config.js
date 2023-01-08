import path from 'path';
import {defineConfig} from 'vite';
import marko from '@marko/vite';
import Unocss from 'unocss/vite';
import {presetIcons} from '@unocss/preset-icons';

const unocss = Unocss({
  presets: [
    presetIcons({
      collections: {
        carbon: () =>
          import('@iconify-json/carbon/icons.json').then(i => i.default),
      },
    }),
  ],
});

export default defineConfig({
  plugins: [marko()],
  build: {sourcemap: true, emptyOutDir: false},
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
});
