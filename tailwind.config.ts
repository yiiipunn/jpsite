import { defaultConfig } from "next/dist/server/config-shared";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:  { 
      backgroundImage: {
        'hero-pattern': "url('/jf.mp4')",
      },
      fontFamily : {
        sans:["Cormorant+Garamond"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      
    },
  },
  plugins: [],
};
export default config
