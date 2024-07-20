import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "pastel-gradient":
          "linear-gradient(to bottom right, rgba(208, 231, 255, 1) 0%, rgba(224, 215, 255, 1) 25%, rgba(208, 240, 231, 1) 50%, rgba(224, 215, 255, 1) 75%, rgba(208, 231, 255, 1) 100%)",
        "pastel-gradient-straight":
          "linear-gradient(to right, rgba(208, 231, 255, 1) 0%, rgba(224, 215, 255, 1) 25%, rgba(208, 240, 231, 1) 50%, rgba(224, 215, 255, 1) 75%, rgba(208, 231, 255, 1) 100%)",
      },
      colors: {
        blackish: "rgba(26, 26, 26, 1)",
        lightGreyText: "rgba(255, 255, 255, 0.87)",
        whitish: "rgba(245, 245, 245, 1)",
        offWhite: "rgba(230, 230, 230, 1)",
        cream: "rgba(255, 250, 220, 1)",
        primaryBlue: "rgba(208, 231, 255, 1)",
        primaryPurple: "rgba(224, 215, 255, 1)",
        primaryTeal: "rgba(208, 240, 231, 1)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        exo: ["Exo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
