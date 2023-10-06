import React, { useContext } from 'react';
import TasksContext from '../context/tasksContext';

const TaskOverviewCards = () => {
  const {
    error,
    taskCount,
  } = useContext(TasksContext);

  return (
    <div className="task-overview-cards">
      <h2>Task Overview</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="overview-container">

      <div className="status-card" data-testid="completed-card">
          <h3>Completed Tasks</h3>
          <p>{taskCount.completed}</p>
      </div>

        <div className="status-card" data-testid="pending-card">
          <h3>Pending Tasks</h3>
          <p>{taskCount.pending}</p>
        </div>

      </div>
    </div>
  );
};

export default TaskOverviewCards;
