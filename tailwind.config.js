/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                '1366': '1366px',
            },
            fontFamily: {
                poppins: ["var(--font-poppins)", "sans-serif"],
                spartan: ['Spartan', 'sans-serif'],
            },
        },
    },
    container: {
        center: true,
        padding: {
            DEFAULT: '1rem',
            sm: '1.5rem',
            lg: '2rem',
            xl: '5rem',
        },
    },
    plugins: [],
};