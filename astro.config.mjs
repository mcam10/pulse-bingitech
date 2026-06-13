// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pulse.bingitech.io',
  output: 'static',
  integrations: [sitemap()],
});
