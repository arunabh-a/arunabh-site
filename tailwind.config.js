/** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend:{},
            colors: {
                bgDiv: '#1f2042',
                blue: '#6175F8',
                button: '#7DA6F5',
                black: '#000000',
                white: '#ffffff',
                altBg: '#030320',
                text: '#afb1d9',
                background: '#020212',
                primary: '#3a3c64',
                secondary: '#2a2c51',
                accent: '#6377f8',               
                
            },
    },
    plugins: [
    ],
}

