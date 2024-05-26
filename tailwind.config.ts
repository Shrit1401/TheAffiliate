import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffff",

          secondary: "#292524",

          accent: "#1c1917",

          neutral: "#292524",

          "base-100": "#111111",

          info: "#075985",

          success: "#166534",

          warning: "#b45309",

          error: "#be123c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
} satisfies Config;

export default config;
