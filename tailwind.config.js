/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
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
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        wander: {
            '0%, 100%': {
              transform: 'translate(0%, 0%)',
              animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
            },
            '10%': {
              transform: 'translate(-15%, -15%)',
              animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
              
            },
            '20%, 29%': {
              transform: 'translate(-30%, 0%)',
              animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
            },
            '40%': {
              transform: 'translate(-15%, -15%) rotateY(180deg)',
              animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
            },
            '50%': {
              transform: 'translate(0%, 0%) rotateY(180deg)',
              animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
            },
            '60%': {
              transform: 'translate(15%, -15%) rotateY(180deg)',
              animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
            },
            '70%, 79%': {
              transform: 'translate(30%, 0%) rotateY(180deg)',
              animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
            },
            '90%': {
              transform: 'translate(15%, -15%)',
              animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
            },
        }

      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "wander": "wander 3s infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}