import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFFFF',
        'secondary': '#B2B2B2',
        'variant': '#1ED760',
        'active': '#232323',
        'container': '#121212',
        'card': '#181818',
        'primary-text': '#FFFFFF',
        'secondary-text': '#868686'
      }
    },
  },
  plugins: [],
}
export default config
