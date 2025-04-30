//No need of this file in tailwind v4 allt he variables are defined in globalcss
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // for Next.js /app directory
        "./pages/**/*.{js,ts,jsx,tsx}", // if using /pages
        "./components/**/*.{js,ts,jsx,tsx}", // your components
    ],
    theme: {
        extend: {
            fontFamily: {
                geist: ['var(--font-geist-sans)', 'sans-serif'],
                mono: ['var(--font-geist-mono)', 'monospace'],
                inter: ['var(--font-inter)', 'sans-serif'],
                righteous: ['var(--font-righteous)', 'cursive'],
            },
        },
    },
    plugins: [],
}
