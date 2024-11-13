/** @type {import('tailwindcss').Config} */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontFamily: {
      sans: ['"ArticulatCF-Normal", sans-serif'],
      display: ["ArticulatCF-Medium"],
      body: ['"ArticulatCF-Normal", sans-serif']
    },
    extend: {
      backgroundImage: {
        "hero-section": "url('/bg-moises-developer.svg')"
      }
    }
  },
  plugins: []
};
export default config;
