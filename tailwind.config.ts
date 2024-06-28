import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

import themes from 'daisyui/src/theming/themes';

export default {
  mode: 'jit',
  purge: [
    './.vercel/**/*.html',
    './src/**/*.{js,ts,svelte}',
    './src/**/**/*.{js,ts,svelte}',
  ],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    container: {},
    extend: {
      fontFamily: {
        'sans': ['Manrope Variable'],
        'mono': ['Fira Code Variable']
      },
      colors: {
        'accent-content': {
          DEFAULT: "#56949f",
          hover: "#286983",
        },
      }
    }
  },
  plugins: [
    typography,
    daisyui
  ],
  daisyui: {
    themes: [
      {
        cupcakexrosepine: {
          ...themes["cupcake"],
          "primary": '#dfdad9',
          "primary-content": "#575279",
          "secondary": "#f4ede8",
          "secondary-content": "#ea9d34",
          "accent": "#f2e0e1",
          "accent-content": {
            DEFAULT: "#286983",
            hover: "#56949f",
          },
          "neutral": "#d7827e",
          "neutral-content": "#575279",
          "base-100": "#fffaf3",
          "base-200": "#d9d4ce",
          "base-300": "#bab5b0",
          "base-content": "#525279",
          "info": "#907aa9",
          "info-content": "#f4ede8",
          "success": "#56949f",
          "success-content": "#f4ede8",
          "warning": "#b4637a",
          "warning-content": "#f4ede8",
          "error": "#b4637a",
          "error-content": "#f4ede8",
        },
      },
      "light", "dark", "cupcake"
    ],
  },
} satisfies Config
