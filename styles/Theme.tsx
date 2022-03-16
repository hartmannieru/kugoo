import React, {ReactNode} from "react";
import { ThemeProvider } from "styled-components";

type Props = {
  children?: ReactNode;
}

const theme = {
  colors: {
    black: '#282739',
    white: '#ffffff',
    red: '#ff0000',
    grey: {
      600: '#5D6C7B',
    }
  },
  breakpoints: {
    md: '992px',
    sm: '768px',
    x: '576px'
  }
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme