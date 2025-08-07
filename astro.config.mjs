import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'http://localhost:4321',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    mdx({
      // Auto-import components
      extendMarkdownConfig: false,
      optimize: true,
    })
  ],
  // Astro v5 features
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    optimizeDeps: {
      exclude: []
    }
  }
});