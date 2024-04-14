import { extendTheme } from "@chakra-ui/react";

/**
 * Colors thanks to manish on schemecolor
 * Fool No more Color shceme
 * Candy Shoppe Color Scheme
 */

export const theme = extendTheme({
  colors: {
    pink: {
      base: "#FD9DC4",
      50: "#ffe4f1",
      100: "#fdb4d2",
      200: "#fa83b4",
      300: "#f85496",
    },
    lemon: {
      base: "#FFF8C7",
      50: "#fffce0",
      100: "#fff5b3",
      200: "#ffef83",
      300: "#ffe953",
    },
    blue: {
      base: "#10C9B8",
      50: "#d9fffd",
      100: "#b0faf4",
      200: "#84f7ec",
      300: "#56f2e4",
    },
    cream: {
      base: "#EADCB5",
      50: "#faf6e6",
      100: "#eee3c3",
      200: "#e2d09f",
      300: "#d7bd78",
    },
    chestnut: {
      base: "#966953",
      50: "#ffeee7",
      100: "#e9d4ca",
      200: "#d4b8ab",
      300: "#c09d8b",
      400: "#ad816b",
      500: "#946752",
      600: "#74503f",
      700: "#54382b",
      800: "#342118"
    },
  },
  styles: {
    global: {
      'body': {
        backgroundColor: 'chestnut.50',
      }
    }
  },
  fonts: {
    heading: `'custom-heading', sans-serif`
  }
})