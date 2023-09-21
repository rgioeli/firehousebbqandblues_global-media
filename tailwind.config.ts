import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "four-column-menu": "1fr 1fr 1fr 1fr",
        "three-column-menu": "1fr 1fr 1fr",
        "two-column-menu": "1fr 1fr",
      },
      boxShadow: {
        "custom-shadow": "1px 1px 5px 1px rgba(0, 0, 0, 0.25)",
      },
      objectPosition: {
        "custom-between-top-and-middle": "right 60%",
      },
    },
  },
  plugins: [],
};
export default config;
