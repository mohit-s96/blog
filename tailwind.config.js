module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        //light theme
        "primary-light": "#FFFFFF",
        "primary-text-light": "#000000",
        "secondary-text-light": "#6A6666",
        "primary-accent-light": "#6A279F",
        "primary-bg-light": "#EBECF1",
        //dark theme
        "primary-dark": "#0A0C14",
        "primary-text-dark": "#FFFFFF",
        "secondary-text-dark": "#FFFFFF",
        "primary-accent-dark": "#6A279F",
        "primary-bg-dark": "#0B0707",
      },
      borderRadius: {
        "brc-md": "28px",
        "brc-sm": "18px",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },

      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
};
