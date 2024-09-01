import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "600px",
        // md: "768px",
        lg: "1000px",
      },
    },
    screens: {
      sm: "375px",
      md: "600px",
      // md: "768px",
      lg: "1200px",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
