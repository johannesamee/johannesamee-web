import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import daisyui from "daisyui"

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    container: {},
    extend: {}
  },
  plugins: [
    typography,
    daisyui
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
} satisfies Config
