import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsSection, { query } from './NewsSection';

const mock = new MockAdapter(axios);

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('displays error when articles were not loaded', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    renderWithProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  // coś tu nie halo
  it('displays the articles', async () => {
    const articlesData = {
      data: {
        allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
      },
    };

    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, articlesData);
    renderWithProviders(<NewsSection />);
    await screen.findAllByText(/Test/);
  });
});
