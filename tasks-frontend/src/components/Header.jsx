import React from 'react';

const Header = ({ onToggleSideMenu }) => {
  return (
    <header className='bg-primary text-white p-4 text-center w-100 d-flex justify-content-between'>
      <button className="btn btn-outline-light sandwich-button" onClick={onToggleSideMenu}>
        ☰
      </button>
      <h1>Tasks App</h1>
    </header>
  );
};

export default Header;
