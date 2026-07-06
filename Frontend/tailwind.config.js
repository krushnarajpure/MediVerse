/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563EB",
          secondary: "#0F172A",
          accent: "#06B6D4",
          success: "#22C55E",
          warning: "#F59E0B",
          danger: "#EF4444",
          gold: "#FFD700",
        },

        glass: {
          light: "rgba(255,255,255,0.7)",
          dark: "rgba(15,23,42,0.75)",
        },

        medical: {
          blue: "#3B82F6",
          cyan: "#06B6D4",
          green: "#10B981",
          purple: "#8B5CF6",
          pink: "#EC4899",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },

      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
        xl4: "2.5rem",
      },

      backdropBlur: {
        xs: "2px",
        glass: "24px",
      },

      boxShadow: {
        glow: "0 0 30px rgba(37,99,235,.35)",

        glass:
          "0 8px 32px rgba(31,38,135,.18)",

        card:
          "0 12px 40px rgba(15,23,42,.10)",

        hover:
          "0 20px 50px rgba(37,99,235,.20)",

        gold:
          "0 0 35px rgba(255,215,0,.35)",

        success:
          "0 0 25px rgba(34,197,94,.35)",
      },

      backgroundImage: {
        hero:
          "linear-gradient(135deg,#2563EB 0%,#06B6D4 50%,#8B5CF6 100%)",

        premium:
          "linear-gradient(135deg,#0F172A,#1E293B,#2563EB)",

        medical:
          "linear-gradient(90deg,#3B82F6,#06B6D4)",

        gold:
          "linear-gradient(90deg,#FFD700,#F59E0B)",

        dark:
          "linear-gradient(180deg,#020617,#0F172A)",
      },

      animation: {
        float: "float 6s ease-in-out infinite",

        pulseSlow: "pulseSlow 3s infinite",

        shine: "shine 3s linear infinite",

        blob: "blob 8s infinite",

        fadeUp: "fadeUp .8s ease",

        slideLeft: "slideLeft .8s ease",

        slideRight: "slideRight .8s ease",

        zoom: "zoom .7s ease",

        heartbeat: "heartbeat 1.5s infinite",

        rotateSlow: "rotateSlow 20s linear infinite",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-18px)",
          },
        },

        pulseSlow: {
          "0%,100%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: ".9",
          },
        },

        shine: {
          "0%": {
            backgroundPosition: "-200%",
          },
          "100%": {
            backgroundPosition: "200%",
          },
        },

        blob: {
          "0%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px,-40px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px,20px) scale(.9)",
          },
          "100%": {
            transform: "translate(0px,0px) scale(1)",
          },
        },

        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        slideLeft: {
          from: {
            opacity: "0",
            transform: "translateX(-60px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },

        slideRight: {
          from: {
            opacity: "0",
            transform: "translateX(60px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },

        zoom: {
          from: {
            opacity: "0",
            transform: "scale(.8)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },

        heartbeat: {
          "0%,100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.12)",
          },
        },

        rotateSlow: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },

  plugins: [],
};