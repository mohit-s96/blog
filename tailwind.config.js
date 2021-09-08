module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.*"],
    options: {
      safelist: [/([a-zA-Z]-)*(\${[a-zA-Z]}(-2)?])/],
      blocklist: [/^debug-/],
      keyframes: true,
      fontFace: true,
    },
  },
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
        "brc-md": "20px",
        "brc-sm": "15px",
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
        xsm: "0.65rem",
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      width: {
        "btn-md": "8rem",
        "btn-sm": "5.5rem",
      },
      minWidth: {
        "btn-sm": "100px",
        "btn-md": "130px",
      },
      height: {
        "btn-sm": "40px",
        "btn-md": "55px",
      },
      inset: {
        sm: "-40px",
        md: "-55px",
      },
      borderWidth: {
        sm: "40px",
        "sm-2": "20px",
        md: "55px",
        "md-2": "27.5px",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
      }),
    },
  },
};
