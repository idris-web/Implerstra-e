import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'sq', 'ar'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
