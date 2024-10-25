/** @type {import('tailwindcss').Config} */
export default {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    content: [],
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
