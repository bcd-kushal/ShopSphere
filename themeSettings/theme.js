// Importing MUI Packages to create theme and font from NEXT FONT and colors
import { createTheme } from "@mui/material"
import { Outfit } from "next/font/google"

// Creating outfit font
const outfit = Outfit({ weight: ["300", "400", "500", "700"], subsets: ["latin"], display: "swap" })

// Creating and exporting Color Palette
export const colors = { grey: { 100: "#e0e0e0", 200: "#c2c2c2", 300: "#a3a3a3", 400: "#858585", 500: "#666666", 600: "#525252", 700: "#3d3d3d", 800: "#292929", 900: "#141414" }, 
                        primary: { 100: "#d0d1d5", 200: "#a1a4ab", 300: "#727681", 400: "#1F2A40", 500: "#141b2d", 600: "#101624", 700: "#0c101b", 800: "#080b12", 900: "#040509" }, 
                        greenAccent: { 100: "#dbf5ee", 200: "#b7ebde", 300: "#94e2cd", 400: "#70d8bd", 500: "#4cceac", 600: "#3da58a", 700: "#2e7c67", 800: "#1e5245", 900: "#0f2922" }, 
                        redAccent: { 100: "#f8dcdb", 200: "#f1b9b7", 300: "#e99592", 400: "#e2726e", 500: "#db4f4a", 600: "#af3f3b", 700: "#832f2c", 800: "#58201e", 900: "#2c100f" }, 
                        blueAccent: { 100: "#e1e2fe", 200: "#c3c6fd", 300: "#a4a9fc", 400: "#868dfb", 500: "#6870fa", 600: "#535ac8", 700: "#3e4396", 800: "#2a2d64", 900: "#151632" } }

// Creating and exporting dark theme
export const theme = createTheme({ 
    palette: { 
        mode: "dark", 
        primary: { main: colors.primary[500] }, 
        secondary: { main: colors.greenAccent[500] }, 
        neutral: { dark: colors.grey[700], main: colors.grey[500], light: colors.grey[100] }, 
        background: { default: colors.primary[500] } 
    }, 
    typography: { 
        fontFamily: outfit.style.fontFamily, 
        fontSize: 12, 
        h1: { fontFamily: outfit.style.fontFamily, fontSize: 40 }, 
        h2: { fontFamily: outfit.style.fontFamily, fontSize: 32 }, 
        h3: { fontFamily: outfit.style.fontFamily, fontSize: 24 }, 
        h4: { fontFamily: outfit.style.fontFamily, fontSize: 20 }, 
        h5: { fontFamily: outfit.style.fontFamily, fontSize: 16 }, 
        h6: { fontFamily: outfit.style.fontFamily, fontSize: 14 } 
    } 
})