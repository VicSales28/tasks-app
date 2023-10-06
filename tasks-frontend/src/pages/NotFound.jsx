import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const NotFound = () => {
  return (
    <>
    <Header />
    <div className="d-flex flex-column align-items-center mt-5 vh-100">
      <h1>Page Not Found!</h1>
      <Link to="/home" className="btn btn-primary mt-3">Go to Home</Link>
    </div>
    </>
  );
};

export default NotFound;
