import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config = {
  darkMode: "selector",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        'mobile': '300px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1600px'
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        dusk: {
          DEFAULT: '#574545',
          light: { inactive: '#574545', active: '#292121', 100: "#dddada", 200: "#bcb5b5", 300: "#9a8f8f", 400: "#796a6a", 500: "#574545", 600: "#463737", 700: "#342929", 800: "#231c1c", 900: "#110e0e" },
          dark: { inactive: '#ccc', active: '#fff', 100: "#f5f5f5", 200: "#ebebeb", 300: "#e0e0e0", 400: "#d6d6d6", 500: "#cccccc", 600: "#a3a3a3", 700: "#7a7a7a", 800: "#525252", 900: "#292929" }
        },
        glass: {
          DEFAULT: '#D5D3D699',
          light: '#D5D3D699',
          dark: '#0F0F0F91'
        },
        searchtray: {
          DEFAULT: '#EFECF090',
          light: '#EFECF090',
          dark: '#54535490'
        },
        background: {
          DEFAULT: '#E8E5E9',
          light: '#E8E5E9',
          dark: '#545354'
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config