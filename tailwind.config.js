module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          grey: "#22333b",
          hoverGrey: '#2D434E',
          yellow: "#fbc720",
          shadedGrey: "#D4D4ED"
        },
      },
    },
    plugins: [],
  };