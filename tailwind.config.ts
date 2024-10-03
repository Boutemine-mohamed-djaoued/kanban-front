import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        250: "clamp(0.80rem, calc(0.785rem + 0.04vw), 0.92rem)",
        300: "clamp(0.94rem, calc(0.92rem + 0.08vw), 0.98rem)",
        350: "clamp(1rem, calc(0.97rem + 0.17vw), 1.15rem)",
        400: "clamp(1.13rem, calc(1.06rem + 0.33vw), 1.31rem)",
        500: "clamp(1.35rem, calc(1.21rem + 0.69vw), 1.75rem)",
        600: "clamp(1.62rem, calc(1.37rem + 1.24vw), 2.33rem)",
        700: "clamp(1.94rem, calc(1.54rem + 2.03vw), 3.11rem)",
        800: "clamp(2.33rem, calc(1.7rem + 3.15vw), 4.14rem)",
        900: "clamp(2.8rem, calc(1.85rem + 4.74vw), 5.52rem)",
      },
      colors: {
        black: "#000112",
        "dark-grey": "#2B2C37",
        "very-dark-grey": "#20212C",
        "dark-lines": "#3E3F4E",
        "meduim-grey": "#828FA3",
        "light-lines": "#E4EBFA",
        "light-grey": "#F4F7FD",
        "my-accent": "#635FC7",
        "accent-hover": "#A8A4FF",
        red: "#EA5555",
        "red-hover": "#FF9898",
        white: "#FFFFFF",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
