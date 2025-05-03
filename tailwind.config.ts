import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //primary: "#FF0000", // 👈 your custom color
        primary:{
          DEFAULT:"#875bf9"
        },
        secondary:{
          DEFAULT:"#ee46bd"
        }
      },
    },
  },
  plugins: [],
}

export default config
