import React from 'react';

const Pagination = ({ tickersPerPage, totalTickers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTickers / tickersPerPage); i++) {
    pageNumbers.push(i);
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((n) => (
          <li className="page-item" key={n}>
            <a href="" onClick={e => {
              e.preventDefault();
              paginate(n)
            }} className="page-link">
              <span className="page-num">{n}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;