/* eslint-disable no-restricted-globals */
import React from 'react';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';
import FormField from './FormField';

describe('Form Field', () => {
  it('renders the component', () => {
    renderWithThemeProvider(<FormField label="Name" name="name" id="name" />);
  });
});
