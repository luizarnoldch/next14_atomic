import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-image-1':"url('/1.jpg')",
        'landing-image-2':"url('/2.jpg')",
        'landing-image-3':"url('/3.jpg')",
      },
    },
  },
  plugins: [],
}
export default config