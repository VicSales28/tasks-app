import React from 'react';
import { render } from '@testing-library/react';

import TasksProvider from '../../context/TasksProvider';

export function renderWithContext(children) {
  return (
    render(
      <TasksProvider>
        { children }
      </TasksProvider>
    )
  )
};
