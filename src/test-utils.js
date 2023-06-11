import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { AppProviders } from 'Providers/AppProviders';

const AllTheProviders = ({ children }) => <AppProviders>{children}</AppProviders>;

AllTheProviders.propTypes = {
  children: PropTypes.element.isRequired,
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
