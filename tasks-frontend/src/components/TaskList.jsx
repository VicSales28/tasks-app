import React, { useContext, useState } from 'react';
import TasksContext from '../context/tasksContext';
import TaskFilters from './TaskFilters';
import Pagination from './Pagination';

const TaskList = () => {
  const {
    error,
    setFilter,
    filteredTasks,
  } = useContext(TasksContext);

  const tasksPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-light p-4 rounded shadow col-md-9">
      <h2 className="text-primary mb-4">Task List</h2>

      <TaskFilters setFilter={setFilter} />

      {error && <div className="text-danger mb-4">{error}</div>}

      <ul className="list-group mb-4">
        {currentTasks.map(task => (
          <li key={task.id} className="list-group-item" data-testid="task-item">
            {task.text} - {task.completed ? 'Completed' : 'Pending'}
          </li>
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TaskList;
