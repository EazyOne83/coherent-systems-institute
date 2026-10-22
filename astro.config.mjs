// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  vite: {
    plugins: [
      tailwind({
        config: {
          content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
          theme: { extend: {} },
          plugins: [],
        }
      })
    ],
  },
  integrations: [mdx()],
});