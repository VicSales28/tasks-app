// The logic used to build this component and the navigation 
// functionality between pages was based on this publication: 
// https://intellipaat.com/blog/pagination-in-react/

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <nav aria-label="Task Pagination">
      <ul className="pagination justify-content-center d-flex flex-wrap">
        {currentPage > 1 && (
          <li>
            <button className="btn btn-light" onClick={() => onPageChange(currentPage - 1)}>
              &laquo; Prev
            </button>
          </li>
        )}
        {getPageNumbers().map((page) => (
          <li key={page} className={`${currentPage === page ? 'active' : ''}`}>
            <button className="btn btn-light" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <button className="btn btn-light" onClick={() => onPageChange(currentPage + 1)}>
              Next &raquo;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
