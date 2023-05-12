import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import UsersProvider from 'Providers/UsersProvider';
import theme from 'assets/styles/theme';

export const renderWithProviders = (children) =>
  render(
    <ThemeProvider theme={theme}>
      <UsersProvider>{children}</UsersProvider>
    </ThemeProvider>
  );
