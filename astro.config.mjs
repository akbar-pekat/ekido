// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://ekidocreative.com', // Ganti dengan URL website Anda
  integrations: [
    sitemap(),
    robotsTxt(),
  ],
});
