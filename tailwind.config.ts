import type { Config } from "tailwindcss";
const colours = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
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
  plugins: [require("daisyui"), addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
