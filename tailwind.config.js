module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        deep_orange_50: "#ffe5e6",
        bluegray_50: "#ebeeee",
        red_700: "#da1e28",
        light_green_A700: "#29d000",
        indigo_A200: "#5d5fef",
        gray_50: "#f9f8f9",
        black_900: "#000000",
        light_blue_A700: "#008cff",
        deep_purple_A200: "#7b61ff",
        gray_700_11: "#55555511",
        gray_700: "#66666f",
        gray_301: "#e0e0e0",
        gray_400: "#c0c7cb",
        gray_202: "#eaeaea",
        indigo_50: "#e4e8eb",
        gray_900: "#000e2c",
        blue_600: "#2b83e9",
        orange_800: "#eb6200",
        bluegray_100: "#cdcdcd",
        amber_100: "#f6efab",
        gray_200: "#e5e8eb",
        gray_201: "#eaebeb",
        gray_300: "#dce0e2",
        blue_50: "#e5f3ff",
        gray_100: "#eff6fb",
        blue_51: "#e6f0fc",
        bluegray_900: "#12344d",
        orange_50: "#fff0e5",
        bluegray_500: "#73828c",
        light_green_50: "#f0ffe5",
        blue_300: "#5da0ee",
        blue_100: "#c1dbf9",
        blue_200: "#8fbef3",
        white_A700: "#ffffff",
        bluegray_901: "#2d2f30",
      },
      borderRadius: {
        radius3: "3px",
        radius4: "4px",
        radius20: "20px",
        radius50: "50%",
      },
      borderWidth: { bw05: "0.5px" },
      fontFamily: {
        segoeui: "Segoe UI",
        sourcesanspro: "Source Sans Pro",
        actor: "Actor",
        inder: "Inder",
        inter: "Inter",
      },
      boxShadow: { bs: "0px 0px  10px 4px #55555511" },
      letterSpacing: { ls1: "1px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};