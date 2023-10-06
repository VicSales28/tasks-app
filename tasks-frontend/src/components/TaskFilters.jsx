import React from 'react';

const TaskFilters = ({ setFilter }) => {
  return (
    <div className="filter-buttons mb-4">

      <button
        className="btn btn-primary"
        data-testid="all-filter"
        onClick={() => setFilter('all')}
      >
        All Tasks
      </button>

      <button
        className="btn btn-success"
        data-testid="completed-filter"
        onClick={() => setFilter('completed')}
      >
        Completed Tasks
      </button>

      <button
        className="btn btn-warning"
        data-testid="pending-filter"
        onClick={() => setFilter('pending')}
      >
        Pending Tasks
      </button>

    </div>
  );
};

export default TaskFilters;
