import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#011627',
  foreground: '#d6deeb',
  link: '#b361e8',
  linkVisited: '#c792ea',
  linkActive: '#a239e6',
  spacing: {
    xl: '30px',
    lg: '20px',
    md: '12px',
    sm: '8px',
  },
  screens: {
    desktop: '1024px',
    tablet: '720px',
    phablet: '480px',
  },
};

export default function StyledTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
