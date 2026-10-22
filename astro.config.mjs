// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  vite: {
    plugins: [tailwind()],
  },
  integrations: [mdx()],
});
