import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    dark: {
      900: "#1a202c",
      800: "#2d3748",
      700: "#4a5568",
    },
  },
});

export default theme;

