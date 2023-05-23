import React from 'react';
import { render, screen, fireEvent, waitFor } from 'test-utils';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import SearchBar from './SearchBar';

const server = setupServer(...handlers);

describe('Search bar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

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

    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findAllByText(/Adam Romański/);
  });

  it('hides the results when input is empty', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');

    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findAllByText(/Adam Romański/);

    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => {
      expect(screen.queryByLabelText('results')).not.toBeVisible();
    });
  });
});
