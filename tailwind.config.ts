import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Scan semua file di folder src
  ],
  theme: {
    extend: {
      fontFamily: {
        // Hubungkan variable CSS dari layout ke nama class tailwind
        caveat: ["var(--font-caveat)", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
