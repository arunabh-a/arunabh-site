import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgContainer: "#3B3D65",
        secondary: "#2B2D45",
        accent: "#4B4D65",
        primary: "#1B1D35",
        highlight: "#6175F8",
      },
      fontFamily: {
        fredoka: "var(--font-fredoka)",
        euclid: "var(--font-euclid)",
      },
      animation: {
        pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        meteor: "meteor 5s linear infinite",
        "background-position-spin":
          "background-position-spin 3000ms infinite alternate",
      },
      keyframes: {
        pulse: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.3' },
          },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
        meteor: {
            "0%": {
              transform: "rotate(var(--angle)) translateX(0)",
              opacity: "1",
            },
            "70%": { opacity: "1" },
            "100%": {
              transform: "rotate(var(--angle)) translateX(-500px)",
              opacity: "0",
            },
          },
    },
  },
  plugins: [
    addVariablesForColors,require('tailwindcss-animate')
  ],
},
 } satisfies Config;

 function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );
   
    addBase({
      ":root": newVars,
    });
  }
