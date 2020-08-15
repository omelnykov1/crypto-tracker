import React from 'react';

class TableItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTicker(this.props.ticker);
    }
}

export default TableItem;