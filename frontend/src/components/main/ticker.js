import React from "react";

class Ticker extends React.Component {
    constructor(props) {
        super(props);
        this.ticker = null
    }
    

    render() {
        const {ticker} = this.props;
        return (
          <div>
            <h1>{ticker.name}</h1>
          </div>
        );
    }
}

export default Ticker;