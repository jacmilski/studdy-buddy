import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';

const AllTheProviders = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

AllTheProviders.propTypes = {
  children: PropTypes.element.isRequired,
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
