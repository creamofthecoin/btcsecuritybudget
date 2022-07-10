import { extendTheme, theme as base } from "@chakra-ui/react";
import components from "./components";
import scrollbar from "./scrollbar";
import styles from "./styles";

const theme = extendTheme({
  styles: {
    global: {
      ...styles,
      ...scrollbar,
    },
  },
  components,
  fonts: {
    heading: `'inter', ${base.fonts?.heading}, sans-serif`,
    body: `'inter', ${base.fonts?.body}, sans-serif`,
  },

  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
