/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
      },
      fontSize: {
        "5xl": "2.8rem",
        "6xl": "3.2rem",
      },
      lineHeight: {
        12: "3rem",
      },
      colors: {
        background: "#cfd2cd",
        "dark-background": "#191919",
        "main-bg": "#f2f2f2",
        "dark-main-bg": "#272729",
        "secondary-bg": "#dee2e6",
        "dark-secondary-bg": "#474749",
        "tertiary-bg": "#4361ee",
        "dark-tertiary-bg": "#f5cc00",
        "fourtiary-bg": "#f43f5e",
        "main-border": "#dee2e6",
        "dark-main-border": "#474749",
        "secondary-border": "#4361ee",
        "dark-secondary-border": "#f5cc00",
        "tertiary-border": "#f43f5e",
        "main-text": "#212529",
        "dark-main-text": "#f9fafb",
        "secondary-text": "#4361ee",
        "dark-secondary-text": "#f5cc00",
        "tertiary-text": "#f43f5e",
        "main-stroke": "#4361ee",
        "dark-main-stroke": "#f5cc00",
        "secondary-stroke": "#f43f5e",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9) translateY(20px)", opacity: "0" },
          "100%": { transform: "scale(1) translateY(0)", opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        lineSlide: {
          "0%": { transform: "scaleX(0)", opacity: "0" },
          "100%": { transform: "scaleX(1)", opacity: "1" },
        },
        lineGrow: {
          "0%": { width: "0%" },
          "100%": { width: "2.5rem" },
        },
        lineFadeSlide: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        lineExpand: {
          "0%": { transform: "scaleX(0.5) scaleY(0.5)", opacity: "0" },
          "100%": { transform: "scaleX(1) scaleY(1)", opacity: "1" },
        },
        drawForward: {
          "0%": { "stroke-dasharray": "0 1000", "stroke-dashoffset": "1000" },
          "100%": { "stroke-dasharray": "1000 1000", "stroke-dashoffset": "0" },
        },
        drawBackward: {
          "0%": { "stroke-dasharray": "0 1000", "stroke-dashoffset": "-1000" },
          "100%": { "stroke-dasharray": "1000 1000", "stroke-dashoffset": "0" },
        },
        highlight: {
          "0%": { width: "0%", opacity: "0" },
          "100%": { width: "11rem", opacity: "0.8" },
        },
      },
      animation: {
        "modal-fade": "fadeIn 0.3s ease-in-out",
        "modal-scale": "scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "modal-slide": "slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [scrollbar({ nocompatible: true })],
};
