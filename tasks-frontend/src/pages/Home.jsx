import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import TaskOverviewCards from '../components/TaskOverviewCards';
import Header from '../components/Header';

const HomePage = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <>
      <Header onToggleSideMenu={toggleSideMenu} />
      <div className="container-fluid">
        <div className="row">
          {isSideMenuOpen && (
            <div className="col-md-3">
              <SideMenu />
            </div>
          )}
          <div className={`col-md-${isSideMenuOpen ? '9' : '12'} mt-4`}>
            <h1>Welcome to the Home Page!</h1>
            <TaskOverviewCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
