import React from 'react';

import TaskList from '../components/TaskList';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

const Tasks = () => {
  return (
    <>      
    <Header />
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SideMenu />
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
