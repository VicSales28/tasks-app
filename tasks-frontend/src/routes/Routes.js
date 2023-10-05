import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TasksPage from '../pages/Tasks';
import HomePage from '../pages/Home';
import NotFound from '../pages/NotFound';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
