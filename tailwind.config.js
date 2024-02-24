/** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['EC-Regular', ]
            }
        },
            colors: {
                bgDiv: '#1f2042',
                blue: '#6175F8',
                button: '#7DA6F5',
                black: '#000000',
                white: '#ffffff',
                altBg: '#030320',
            },
    },
    plugins: [
    ],
}

