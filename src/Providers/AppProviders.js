import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/globalStyle';
import { AuthProvider } from 'hooks/useAuth';
import { ErrorProvider } from 'hooks/useError';

export const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ErrorProvider>
          <AuthProvider>
            <GlobalStyle />
            {children}
          </AuthProvider>
        </ErrorProvider>
      </ThemeProvider>
    </Router>
  );
};

AppProviders.propTypes = {
  children: PropTypes.element.isRequired,
};
