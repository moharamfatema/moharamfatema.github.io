/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
        colors: {
            background: {
                dark: '#0A0E1A',
                darker: '#00030F',
            },
            purple:{
                '100': '#F5F0FF',
                '200': '#E6D8FF',
                '300': '#D6C1FF',
                '400': '#B794F4',
                '500': '#9F7AEA',
                '600': '#805AD5',
                '700': '#6B46C1',
                '800': '#553C9A',
                '900': '#44337A',
                
            },
            white: '#FFFFFF',
            black: '#000000',
        },
        fontFamily: {
            sans: ['Open sans', 'sans-serif'],
        }
    },
    plugins: [],
}
