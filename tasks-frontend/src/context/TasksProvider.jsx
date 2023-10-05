import React, { useState, useEffect } from 'react';

import fetchTasks from '../fetchFunctions/fetchTasks';
import TasksContext from './tasksContext';

function TasksProvider({ children }) {
  // Tasks-frontend state management
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState(null);
  const [taskCount, setTaskCount] = useState({ completed: 0, pending: 0 });

  // Get data from Tasks-backend 
  const getTasks = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (error) {
      setError("Error getting data from API. Please try again later");
    }
  };

  // This callback will be executed similarly to componentDidMount
  useEffect(() => {
    getTasks();
  }, []);

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    }
    return true;
  });

  // It updates the number of completed and pending tasks whenever the tasks state is modified
  useEffect(() => {
    const completedTasks = tasks.filter(task => task.completed);
    const pendingTasks = tasks.filter(task => !task.completed);
    setTaskCount({ completed: completedTasks.length, pending: pendingTasks.length });
  }, [tasks]);

  const value = {
    error,
    setError,
    filter,
    filteredTasks,
    setFilter,
    setTasks,
    tasks,
    taskCount,
};

  return (
    <TasksContext.Provider value={ value }>
      { children }
    </TasksContext.Provider>
  );
};

export default TasksProvider;
