import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Tasks from '../pages/Tasks';
import TasksProvider from '../context/TasksProvider';

describe('Task Filters', () => {
  test('the path to the Tasks page should be /tasks', async () => {
    render(
      <MemoryRouter initialEntries={['/tasks']}>
        <TasksProvider>
          <Tasks />
        </TasksProvider>
      </MemoryRouter>);

    const allFilterBtn = screen.getByTestId('all-filter');
    const completedFilterBtn = screen.getByTestId('completed-filter');
    const pendingFilterBtn = screen.getByTestId('pending-filter');

    await (() => expect(allFilterBtn).toBeInTheDocument());
    await (() => expect(completedFilterBtn).toBeInTheDocument());
    await (() => expect(pendingFilterBtn).toBeInTheDocument());
  });
});

