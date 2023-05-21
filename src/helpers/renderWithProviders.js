import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import StudentsProvider from 'Providers/StudentsProvider';
import theme from 'assets/styles/theme';

export const renderWithProviders = (children) =>
  render(
    <ThemeProvider theme={theme}>
      <StudentsProvider>{children}</StudentsProvider>
    </ThemeProvider>
  );
