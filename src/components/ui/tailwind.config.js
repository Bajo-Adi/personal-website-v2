/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    theme: {
      extend: {
        animation: {
          'wave-pulse': 'wave-pulse 4s ease-in-out infinite',
        },
        keyframes: {
          'wave-pulse': {
            '0%, 100%': { opacity: 0.4 },
            '50%': { opacity: 0.7 },
          },
          gradient: {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        },
        animation: {
          gradient: "gradient var(--animation-duration, 8s) linear infinite",
        },
      },
    },
  }