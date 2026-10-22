export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  future: {
    arbitraryProperties: true,
  },
};