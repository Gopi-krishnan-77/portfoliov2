import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Wrap `hover:` in @media (hover: hover) so taps on iOS don't leave hover styles stuck on
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        green: '#00E87A',
        orange: '#FF5C1A',
        dark: '#0F0F0F',
        cream: '#FAFAF8',
        grey: '#E8E4DF',
        'dark-green': '#0A2318',
        'light-green': '#C8F5E0',
        // Body copy on light backgrounds
        muted: '#3b4a3d',
        // Secondary / caption copy
        subtle: '#6b7b6c',
        // Darker green that passes contrast on light backgrounds
        'green-ink': '#006d36',
        // Darker orange for text/pills on light backgrounds (bright orange fails contrast there)
        'orange-ink': '#B83A0A',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        heading: ['var(--font-nunito)', 'Nunito Sans', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
