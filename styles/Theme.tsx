import { rgba } from 'polished';
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

type Props = {
  children?: ReactNode;
};

const theme = {
  colors: {
    primary: '#6F73EE',
    background: '#F4F7FB',
    border: '#EAEBED',
    black: '#282739',
    white: '#ffffff',
    red: '#ff0000',
    grey: {
      200: '#EAEBED',
      600: '#5D6C7B',
    },
    greyrgba: {
      600: rgba('#5D6C7B', 0.15),
    },
  },
  radius: {
    blog: 10,
    empty: 10,
  },
  breakpoints: {
    md: '992px',
    sm: '768px',
    x: '576px',
  },
};

const Theme = ({ children }: Props) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
