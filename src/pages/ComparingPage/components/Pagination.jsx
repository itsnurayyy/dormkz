import React from "react";
import "./Pagination.scss";

const Pagination = ({ dormsPerPage, totalDorms, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDorms / dormsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
