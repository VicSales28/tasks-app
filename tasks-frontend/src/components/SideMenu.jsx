import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/SideMenu.css';

class SideMenu extends Component {
  render() {
    return (
      <header
        className="d-flex flex-column flex-shrink-0 p-3 sidebar"
      >
        <p>
          <Link
            to="/home"
            data-testid="link-to-home"
            className="nav-link text-white"
          >
            Home
          </Link>
        </p>

        <p>
          <Link
            to="/tasks"
            data-testid="link-to-tasks"
            className="nav-link text-white"
          >
            Tasks
          </Link>
        </p>
      </header>
    );
  }
}

export default SideMenu;
