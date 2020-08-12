import React from 'react';

class Ticker extends React.Component {
    constructor(props) {
        super(props);
        debugger
    }

    componentDidMount() {
        this.props.fetchTicker(this.props.match.params.tickerId);
    }

    render() {
        return(
            <h1>Ticker</h1>
        )
    }
}

export default Ticker;