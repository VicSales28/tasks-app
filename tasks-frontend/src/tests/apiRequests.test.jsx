import React from 'react';
import { waitFor } from '@testing-library/react';

import fetchTasksMock from './mocks/fetchTasks.mock';
import { renderWithContext } from './helpers/renderWith';

import App from '../App';

describe('API Integration', () => {
  // Replace global fetch() with fetchTasksMock() implementation
  beforeEach(() => {
    global.fetch = jest.fn(fetchTasksMock);
  });

  test('should make a request to the API when <App /> is rendered', async () => {
    // Render the App component within the context
    renderWithContext(<App />);

    await waitFor(() => expect(fetch).toHaveBeenCalled());
    await waitFor(() => expect(fetch).toHaveBeenCalledWith('http://localhost:8080/api/tasks/'));
  });
});

