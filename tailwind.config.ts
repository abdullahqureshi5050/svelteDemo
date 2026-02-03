import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED', // purple
        dark: '#0F0F0F',
        light: '#FFFFFF',
        muted: '#A1A1AA',
      },
    },
  },
  plugins: [],
};

export default config;
