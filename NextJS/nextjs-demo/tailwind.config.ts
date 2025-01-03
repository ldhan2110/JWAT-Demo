import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],        // Tell Tailwind which files will be applied
  theme: {     
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        michaeljackson: "black"
      },
      margin: {
        "15xl": "15px"
      }
    },
  },
  plugins: [],
};
export default config;
