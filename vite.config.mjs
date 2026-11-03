import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        products: resolve(import.meta.dirname, 'products.html'),
        about: resolve(import.meta.dirname, 'about.html'),
        pay: resolve(import.meta.dirname, 'pay.html'),
        policies: resolve(import.meta.dirname, 'policies.html'),
      },
    },
  },
});
