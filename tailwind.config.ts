import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        main: "var(--text-main)",
        medium: "var(--text-medium)",
        light: "var(--text-light)",
        ultralight: "var(--text-ultralight)",
        primary: "rgb(var(--primary))"
      },
    },
  },
  plugins: [],
} satisfies Config;
