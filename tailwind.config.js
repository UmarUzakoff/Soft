/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      inset: ["group-hover"],
    },
    safelist: [
      "animate-[fade-in_1s_ease-in-out]",
      "animate-[fade-in-down_1s_ease-in-out]",
    ],
    container: {
      center: true,
    },
  },
  plugins: [],
  variants: {
    extend: {
      inset: ["group-hover"],
    },
  },
};
