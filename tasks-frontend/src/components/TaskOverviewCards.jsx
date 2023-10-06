import React, { useContext } from 'react';
import TasksContext from '../context/tasksContext';

const TaskOverviewCards = () => {
  const {
    error,
    taskCount,
  } = useContext(TasksContext);

  return (
    <div className="bg-light p-4 rounded shadow">

      <h2 className="dark-blue-text mb-4">Tasks Overview</h2>
      
      {error && <div className="text-danger">{error}</div>}
      <div className="status-card bg-success text-white p-4 mb-4" data-testid="completed-card">
        <h3 className="font-weight-bold mb-2">Completed Tasks</h3>
        <p className="font-weight-bold mb-0">{taskCount.completed}</p>
      </div>

      <div className="status-card bg-secondary text-white p-4" data-testid="pending-card">
        <h3 className="font-weight-bold mb-2">Pending Tasks</h3>
        <p className="font-weight-bold mb-0">{taskCount.pending}</p>
      </div>
    </div>
  );
};

export default TaskOverviewCards;
