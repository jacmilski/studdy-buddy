import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';

export const renderWithThemeProvider = (children) => render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
