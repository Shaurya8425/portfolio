const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  darkmode: "class",
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        card: "rgb(var(--card))",
      }
    }
  }
};
export default config;