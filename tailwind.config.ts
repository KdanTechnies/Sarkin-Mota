// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        dark: "#0A0A0A",
        gold: "#D4AF37",
        "gold-light": "#F1D57A",
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
};