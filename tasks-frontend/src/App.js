import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TasksProvider from './context/TasksProvider';
import RoutesComponent from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <TasksProvider>
      <div className='main-container'>
        <Router>
          <RoutesComponent />
        </Router>
      </div>
    </TasksProvider>
  );
}

export default App;
