import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor:{
        "mat-gray":"#e9e9e9"
      },
      boxShadow:{
       "3xl":"box-shadow: 0px 15px 10px -15px #FF0000",
       "4xl":'0 35px 60px -15px rgba(0, 0, 0, 0.3)',
       "5xl":'0px 5px 5px #e9e9e9;'
      },
      colors:{
        'regal-blue': '#243c5a',
      },

    },
  },
  plugins: [],
};
export default config;
