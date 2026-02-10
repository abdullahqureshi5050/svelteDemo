import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED', // purple
        dark: {
          DEFAULT: '#0F0F0F',
          100: '#1A1A1A',
          200: '#333333',
        },
        ili: 'yellow',
        light: '#FFFFFF',
        muted: '#A1A1AA',
      },
    },
  },
  plugins: [],
};

export default config;
