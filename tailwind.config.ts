import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#072d4a",
          base: "#055383",
          light: "#b9e4fe",
          lighter: "#f0f9ff",
        },
        yellow: "#ffcd2c",
        green: "#1a563c",
        blue: "#055383",
        strong: "#171717",
        sub: "#5c5c5c",
        soft: "#a4a4a4",
        "bg-soft": "#f5f5f5",
        "stroke-soft": "#ebebeb",
        "stroke-sub": "#d1d1d1",
        "stroke-gray": "#dedede",
      },
      fontFamily: {
        header: ["var(--font-raleway)", "system-ui", "sans-serif"],
        body: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
