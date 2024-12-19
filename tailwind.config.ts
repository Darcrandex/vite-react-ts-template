import type { Config } from 'tailwindcss'
import { rose } from 'tailwindcss/colors'

export default {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: rose[500],
      },
    },
  },
  plugins: [],
} satisfies Config
