/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
        colors: {
            primary: {
                purple: '#303481',
                yellow: '#FFF200',
                dark: '#333156',
            },
            white: '#FFFFFF',
        },
        fontFamily: {
            sans: ['Quicksand', 'sans-serif'],
        }
    },
    plugins: [],
}
