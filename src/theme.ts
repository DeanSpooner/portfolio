export const theme = {
  colors: {
    background: "#0a0a0a", // Very dark grey/black
    surface: "#1a1a1a", // Slightly lighter for cards/sections
    text: {
      primary: "#ffffff",
      secondary: "#a0a0a0",
      accent: "#646cff", // Vitt purple/blue ish
    },
    primary: "#646cff",
    secondary: "#535bf2",
    accent: "#ff0080", // Pop color
    border: "rgba(255, 255, 255, 0.1)",
  },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
      lineHeight: 1.3,
    },
    body: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "2rem",
    lg: "4rem",
    xl: "8rem",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    full: "9999px",
  },
  transitions: {
    default: "all 0.3s ease",
  },
};
