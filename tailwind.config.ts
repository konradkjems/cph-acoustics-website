import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // CPH Acoustics brand colors (from logo)
        primary: {
          DEFAULT: "#1B2B4A", // Navy Blue (logo text)
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#00E5CC", // Bright Cyan (logo gradient)
          secondary: "#00CED1", // Turquoise (logo gradient)
          tertiary: "#00B4D8", // Deep Cyan (logo gradient)
          foreground: "#1B2B4A", // Navy text on cyan
        },
        background: {
          DEFAULT: "#FFFFFF", // White
          alt: "#F9FAFB", // Off-white
        },
        foreground: "#1B2B4A", // Navy text
        muted: {
          DEFAULT: "#F1F5F9",
          foreground: "#64748B",
        },
        border: "#E2E8F0",
        
        // Semantic colors
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#00CED1", // Uses brand turquoise
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Satoshi", "Inter", "sans-serif"],
      },
      fontSize: {
        "7xl": "4.5rem",
        "8xl": "6rem",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "100": "25rem",
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "slide-in": "slideIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};

export default config;

