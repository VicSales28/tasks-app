import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HomePage from '../pages/Home';
import TasksProvider from '../context/TasksProvider';

describe('Task Overview Cards', () => {
  test('correctly renders status card on Home page', async () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <TasksProvider>
          <HomePage />
        </TasksProvider>
      </MemoryRouter>
    );
    const completedTasksCard = screen.getByTestId('completed-card');
    const pendingTasksCard = screen.getByTestId('pending-card');

    await (() => expect(completedTasksCard).toBeInTheDocument());
    await (() => expect(pendingTasksCard).toBeInTheDocument());
  });
});


