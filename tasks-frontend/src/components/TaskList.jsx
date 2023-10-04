import React, { useState, useEffect } from 'react';

import { fetchTasks } from '../fetchFunctions/fetchTasks';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
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

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {error && <div className="error-message">{error}</div>}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text} - {task.completed ? 'Completed' : 'Outstanding'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
