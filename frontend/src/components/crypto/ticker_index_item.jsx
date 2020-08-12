import React from "react";
import { withRouter } from "react-router";


class TickerIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, current_price , image, market_cap, total_volume} = this.props.ticker;
        return (
          <div className="ticker-index">
            <div className="ticker-index-left">
              <div className="ticker-image">
                <img src={image}></img>
              </div>
              <div className="ticker-name">{name}</div>
            </div>
            <div className="ticker-index-right">
              <div className="ticker-price">{current_price.toFixed(2)}</div>
              <div className="ticker-volume">{total_volume}</div>
              <div className="ticker-market-cap">{market_cap}</div>
            </div>
          </div>
        );
    }
}

export default withRouter(TickerIndexItem)