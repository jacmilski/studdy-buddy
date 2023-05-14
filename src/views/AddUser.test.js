import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe.skip('Form Field', () => {
  it('adds a new user to the list', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Felicjan' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByTestId('Consent'));

    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.getByText('Felicjan');
    expect(newUser).toBeInTheDocument();
  });

  it('prevents adding a new user if the consent is not checked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Felicjan' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });

    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Felicjan');
    expect(newUser).not.toBeInTheDocument();
  });
});
