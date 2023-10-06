import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import TasksPage from '../pages/Tasks';
import TasksProvider from '../context/TasksProvider';

describe('Task Filters', () => {
  test('correctly renders filter buttons on Tasks page', async () => {
    render(
      <MemoryRouter initialEntries={['/tasks']}>
        <TasksProvider>
          <TasksPage />
        </TasksProvider>
      </MemoryRouter>
    );

    const allFilterBtn = screen.getByTestId('all-filter');
    const completedFilterBtn = screen.getByTestId('completed-filter');
    const pendingFilterBtn = screen.getByTestId('pending-filter');

    await (() => expect(allFilterBtn).toBeInTheDocument());
    await (() => expect(completedFilterBtn).toBeInTheDocument());
    await (() => expect(pendingFilterBtn).toBeInTheDocument());
  });

  test('renders only completed tasks when completed filter is selected', async () => {
    render(
      <MemoryRouter initialEntries={['/tasks']}>
        <TasksProvider>
          <TasksPage />
        </TasksProvider>
      </MemoryRouter>
    );

    const pendingFilterBtn = screen.getByTestId('pending-filter');

    fireEvent.click(pendingFilterBtn);

    await waitFor(() => {
      const pendingTasks = screen
        .getAllByTestId('task-item')
        .filter((taskItem) => taskItem.textContent.includes('Pending'));

      expect(pendingTasks.length).toBeGreaterThan(0);
    });

    await waitFor(() => {
      const completedTasks = screen
        .getAllByTestId('task-item')
        .filter((taskItem) => taskItem.textContent.includes('Completed'));

      expect(completedTasks.length).toBe(0);
    });
  });

  test('renders only pending tasks when pending filter is selected', async () => {
    render(
      <MemoryRouter initialEntries={['/tasks']}>
        <TasksProvider>
          <TasksPage />
        </TasksProvider>
      </MemoryRouter>
    );

    const completedFilterBtn = screen.getByTestId('completed-filter');

    fireEvent.click(completedFilterBtn);

    await waitFor(() => {
      const completedTasks = screen
        .getAllByTestId('task-item')
        .filter((taskItem) => taskItem.textContent.includes('Completed'));

      expect(completedTasks.length).toBeGreaterThan(0);
    });

    await waitFor(() => {
      const pendingTasks = screen
        .getAllByTestId('task-item')
        .filter((taskItem) => taskItem.textContent.includes('Pending'));

      expect(pendingTasks.length).toBe(0);
    });
  });
});

