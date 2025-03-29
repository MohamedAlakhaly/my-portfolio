/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ffee",
        // primary: "#834ef5",
        // primary: "#543ee9",
        dark: "#0f0f0f"
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"]
      },
      boxShadow: {
        "3md": "0px 0px 30px -1px rgba(0, 255, 238, 0.3)",
        "3xl": "0px 0px 70px -15px rgba(0, 255, 238, 0.3)"
      }
    }
  },
  plugins: []
};
