import React from 'react';

class TableLoader extends React.Component {
    state = { };

    render() {
        return (
          <div className="table-loader-container">
            <img
              src={"images/loading.gif"}
              className="table-loader"
              alt=""
            />
          </div>
        );
    }
}

export default TableLoader;