import React from 'react';

const TaskFilters = ({ setFilter }) => {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter('all')}>All Tasks</button>
      <button onClick={() => setFilter('completed')}>Completed Tasks</button>
      <button onClick={() => setFilter('pending')}>Pending Tasks</button>
    </div>
  );
};

export default TaskFilters;
