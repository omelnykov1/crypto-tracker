import React from 'react';

class TableLoader extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        if (!this.props.loading) return null;
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