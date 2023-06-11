import React from 'react';
import { render, screen, fireEvent, waitFor } from 'test-utils';
import Root from './Root';
import Dashboard from './Dashboard';

describe('Root component', () => {
  it('reders the Root component as unauthenticated user', () => {
    render(<Root />);
    screen.getByLabelText('login');
  });

  it('displayes error message when wrong credentials are passed', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'jacek' } });
    fireEvent.change(password, { target: { value: 'placek' } });

    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.findByText(/Oops/));
  });

  it('displayes authenticated application', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'jacek@placek.com' } });
    fireEvent.change(password, { target: { value: '1234' } });

    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.findByText(/Grady/));
  });
});
