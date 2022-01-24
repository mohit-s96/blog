const {
  ACCENT_LOW_OPA,
  PRIMARY_ACCENT_DARK,
  PRIMARY_ACCENT_LIGHT,
  PRIMARY_BG_DARK,
  PRIMARY_BG_LIGHT,
  PRIMARY_DARK,
  PRIMARY_LIGHT,
  PRIMARY_TEXT_DARK,
  PRIMARY_TEXT_LIGHT,
  SECONDARY_TEXT_DARK,
  SECONDARY_TEXT_LIGHT,
  LIGHT_GRAY,
} = require("./constants");
module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: {
    content: ["./src/**/*.tsx"],
  },
  theme: {
    extend: {
      colors: {
        //light theme
        "primary-light": PRIMARY_LIGHT,
        "primary-text-light": PRIMARY_TEXT_LIGHT,
        "secondary-text-light": SECONDARY_TEXT_LIGHT,
        "primary-accent-light": PRIMARY_ACCENT_LIGHT,
        "primary-bg-light": PRIMARY_BG_LIGHT,
        //dark theme
        "primary-dark": PRIMARY_DARK,
        "primary-text-dark": PRIMARY_TEXT_DARK,
        "secondary-text-dark": SECONDARY_TEXT_DARK,
        "primary-accent-dark": PRIMARY_ACCENT_DARK,
        "primary-bg-dark": PRIMARY_BG_DARK,

        "light-gray": LIGHT_GRAY,

        //opacity low
        "accent-low-opa": ACCENT_LOW_OPA,
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
        "avat-img-sm": "1.5rem",
        "avat-img-md": "3.0rem",
        "avat-img-lg": "4.5rem",
        "card-lg-vert": "23%",
        "card-lg-horiz": "71%",
      },
      minWidth: {
        "btn-sm": "60px",
        "btn-md": "80px",
      },
      height: {
        "btn-sm": "30px",
        "btn-md": "40px",
      },
      inset: {
        sm: "-30px",
        md: "-40px",
        neg: "-1rem",
      },
      padding: {
        one: "1px",
      },
      borderWidth: {
        sm: "30px",
        "sm-2": "15px",
        md: "40px",
        "md-2": "20px",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
      }),
    },
  },
};
