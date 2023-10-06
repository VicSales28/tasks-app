import React, { useContext } from 'react';
import TasksContext from '../context/tasksContext';
import TaskFilters from './TaskFilters';

const TaskList = () => {
  const {
    error,
    setFilter,
    filteredTasks,
  } = useContext(TasksContext);

  return (
    <div className="task-list">
      <h2>Task List</h2>

      <TaskFilters setFilter={setFilter} />

      {error && <div className="error-message">{error}</div>}

      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} data-testid="task-item">
            {task.text} - {task.completed ? 'Completed' : 'Pending'}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default TaskList;
