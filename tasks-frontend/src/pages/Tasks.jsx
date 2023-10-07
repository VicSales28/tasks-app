import React, { useState } from 'react';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import TaskList from '../components/TaskList';

const Tasks = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <>
      <Header onToggleSideMenu={toggleSideMenu} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            {isSideMenuOpen && <SideMenu />}
          </div>
          <div className="col-md-9">
            <TaskList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
