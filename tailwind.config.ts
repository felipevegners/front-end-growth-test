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
      colors: {
        "mai-blue": "#1040ff",
        "mai-medium-blue": "#75A5FF",
        "mai-gray": "#858585",
        "mai-medium-gray": "#A8A8A8",
        "mai-dark-gray": "#212121",
        "mai-turqouise": "#0AFFA7"
      }
    }
  },
  plugins: []
};
export default config;
