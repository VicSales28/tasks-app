import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

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

export function withRouter(component, history) {
  return (
    <Router history={ history }>
      { component }
    </Router>
  );
}

export function renderWithRouter(
  component,
  {
    initialEntries = ['/'],
    history = createMemoryHistory({ initialEntries }),
  } = {},
) {
  return {
    ...render(withRouter(component, history)),
    history,
  };
}
