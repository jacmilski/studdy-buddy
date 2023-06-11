import React from 'react';
import { render, screen, fireEvent, waitFor } from 'test-utils';
import SearchBar from './SearchBar';

describe.skip('Search bar', () => {
  it('renders the component', () => {
    render(<SearchBar />);

    const title = screen.getByText(/Teacher/);
    const input = screen.getByPlaceholderText('Search');
    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');

    fireEvent.change(input, { target: { value: 'Reg' } });
    await screen.findByText(/Regina/);
  });
});
