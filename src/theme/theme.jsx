import { extendTheme } from "@chakra-ui/react";

const useBreakpoint = {
  styles: {
    global: {
      body: {
        background: 'red',
        h: "100vh",
        color: "white",
      }
    }
  }
};

const theme = extendTheme({ ...useBreakpoint })



export default theme;