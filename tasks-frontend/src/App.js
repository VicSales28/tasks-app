import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TasksPage from './pages/Tasks';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';

import "./App.css";

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
