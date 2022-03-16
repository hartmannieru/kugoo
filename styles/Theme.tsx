import React, {ReactNode} from "react";
import { ThemeProvider } from "styled-components";

type Props = {
  children?: ReactNode;
}

const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    red: '#ff0000',
    grey: {
      600: '#5D6C7B',
    }
  },
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme