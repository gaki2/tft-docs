import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './reset';

type ThemeProviderProps = React.PropsWithChildren;

export const TFT_ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
