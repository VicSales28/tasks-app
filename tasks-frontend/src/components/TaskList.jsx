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
    <div className="bg-light p-4 rounded shadow col-md-9">
      <h2 className="text-primary mb-4">Task List</h2>

      <TaskFilters setFilter={setFilter} />

      {error && <div className="text-danger mb-4">{error}</div>}

      <ul className="list-unstyled">
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
