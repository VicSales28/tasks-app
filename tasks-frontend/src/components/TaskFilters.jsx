import React from 'react';

const TaskFilters = ({ setFilter }) => {
  return (
    <div className="filter-buttons">

      <button
        data-testid="all-filter"
        onClick={() => setFilter('all')}
      >
        All Tasks
      </button>

      <button
        data-testid="completed-filter"
        onClick={() => setFilter('completed')}
      >
        Completed Tasks
      </button>

      <button
        data-testid="pending-filter"
        onClick={() => setFilter('pending')}
      >
        Pending Tasks
      </button>

    </div>
  );
};

export default TaskFilters;
