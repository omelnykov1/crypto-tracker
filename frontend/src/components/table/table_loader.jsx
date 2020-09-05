import React from 'react';

const TableLoader = props => {
  return props.loading ?
    (
      <div className="table-loader-container">
        <img
          src={"images/l.gif"}
          className="table-loader"
          alt=""
        />
      </div>
    ) : null;
}

export default TableLoader;