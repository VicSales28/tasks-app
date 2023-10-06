import React from 'react';
import SideMenu from '../components/SideMenu';
import TaskOverviewCards from '../components/TaskOverviewCards';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <>      
    <Header />
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SideMenu />
        </div>
        <div className="col-md-9 mt-4">
          <h1>Welcome to the Home Page!</h1>
          <TaskOverviewCards />
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;
