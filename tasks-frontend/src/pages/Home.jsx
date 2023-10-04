import React from 'react';
import TaskOverviewCards from '../components/TaskOverviewCards';

const Home = () => {
  return (
    <div className="homepage-container">
      <h1>Welcome to the Home Page!</h1>
      <TaskOverviewCards />
    </div>
  );
};

export default Home;
