// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './pages/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'topbar': '#364049'
            },
            fontFamily: {
                'righteous': ['Righteous', 'sans-serif'],
            }

        },
    },
    plugins: [],
}

export default config
