/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "sans-serif"],
      },
      colors: {
        background: "#191919",
        "main-bg": "#272729",
        "secondary-bg": "#474749",
        "tertiary-bg": "#f3c623",
        "main-border": "#474749",
        "main-text": "#dcdce4",
        "secondary-text": "#f3c623",
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
      },
      animation: {
        "modal-fade": "fadeIn 0.3s ease-in-out",
        "modal-scale": "scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "modal-slide": "slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
