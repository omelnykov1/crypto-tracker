import React from "react";
import { withRouter } from "react-router";
const numeral = require("numeral");


class TickerIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        debugger
        this.props.history.push(`/tickers/${this.props.ticker.id}`);
    }

    render() {
        const { name, current_price, image, market_cap, total_volume } = this.props.ticker;
        return (
          <div className="ticker-index" onClick={this.handleClick}>
            <div className="ticker-index-left">
              <div className="ticker-image">
                <img src={image} alt=""></img>
              </div>
              <div className="ticker-name">{name}</div>
            </div>
            <div className="ticker-index-right">
              <div className="ticker-price">${current_price.toFixed(2)}</div>
              <div className="ticker-volume">
                {numeral(total_volume).format("($ 0.00 a)")}
              </div>
              <div className="ticker-market-cap">
                {numeral(market_cap).format("($ 0.00 a)")}
              </div>
            </div>
          </div>
        );
    }
}

export default withRouter(TickerIndexItem)