import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
        'surface': '#fcf9f8',
        'surface-variant': '#e5e2e1',
        'surface-container': '#f0edec',
        'surface-container-low': '#f6f3f2',
        'surface-container-lowest': '#ffffff',
        'surface-container-highest': '#e5e2e1',
        'on-surface': '#1c1b1b',
        'on-surface-variant': '#3b4a3d',
        'primary': '#006d36',
        'primary-container': '#00e87a',
        'primary-fixed-dim': '#00e478',
        'on-primary-container': '#006230',
        'secondary': '#ab3500',
        'secondary-container': '#fc5a18',
        'inverse-surface': '#313030',
      },
      spacing: {
        'stack-lg': '120px',
        'stack-md': '64px',
        'stack-sm': '32px',
        'gutter': '32px',
        'margin-mobile': '20px',
        'container-max': '1280px',
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
