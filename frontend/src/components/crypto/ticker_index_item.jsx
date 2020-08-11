import React from "react";
import { withRouter } from "react-router";


class TickerIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger
        return <div>
            <div>{this.props.ticker.name}</div>
        </div>;
    }
}

export default withRouter(TickerIndexItem)