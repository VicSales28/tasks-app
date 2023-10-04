import React, { useState, useEffect } from 'react';

import { fetchTasks } from '../fetchFunctions/fetchTasks';

const TaskOverviewCards = () => {
  const [taskCount, setTaskCount] = useState({ completed: 0, pending: 0 });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = await fetchTasks();

        const completedTasks = tasks.filter(task => task.completed);
        const pendingTasks = tasks.filter(task => !task.completed);

        setTaskCount({ completed: completedTasks.length, pending: pendingTasks.length });
      } catch (error) {
        setError("Error getting data from API. Please try again later");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="task-overview-cards">
      <h2>Task Overview</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="overview-container">

        <div className="status-card">
          <h3>Completed Tasks</h3>
          <p>{taskCount.completed}</p>
        </div>

        <div className="status-card">
          <h3>Pending Tasks</h3>
          <p>{taskCount.pending}</p>
        </div>

      </div>
    </div>
  );
};

export default TaskOverviewCards;
