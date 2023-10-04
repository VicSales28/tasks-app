import React, { useState, useEffect } from 'react';

import { fetchTasks } from '../fetchFunctions/fetchTasks';
import TaskFilters from './TaskFilters';

const filterTasks = (tasks, filter) => {
  return tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    }
    return true;
  });
};

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (error) {
        setError("Error getting data from API. Please try again later");
      }
    };
    fetchData();
  }, []);

  const filteredTasks = filterTasks(tasks, filter);

  return (
    <div className="task-list">
      <h2>Task List</h2>

      <TaskFilters setFilter={setFilter} />

      {error && <div className="error-message">{error}</div>}

      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>
            {task.text} - {task.completed ? 'Completed' : 'Pending'}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default TaskList;
