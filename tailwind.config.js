/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    safelist: ['peer-checked:translate-x-5'],
    theme: {
        extend: {
            screens: {
                xs: '400px',
            },
        },
    },
    plugins: [],
};
