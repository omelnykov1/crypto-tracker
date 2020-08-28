import React from "react";
import { withRouter } from "react-router-dom";
const numeral = require("numeral");


class TickerIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleAddTicker = this.handleAddTicker.bind(this);
    }

  

    handleAddTicker() {
      this.props.table.tickers.push(this.props.ticker);
      this.props.changeTable(this.props.table).then(this.props.fetchTickers());
    }

    handleClick() {
      this.props.history.push(`/tickers/${this.props.ticker.id}`);
    }

    render() {
      const { table } = this.props
      let toggle = true
      table.tickers.forEach(ticker => {
        if (ticker.id === this.props.ticker.id) {
          toggle = false
        }
      });
      console.log(toggle)
      const button = toggle ? <button className="add-ticker-table" onClick={() => this.handleAddTicker()}>Add to favorites</button> : null;
      const { name, current_price, image, market_cap, total_volume, price_change_percentage_24h } = this.props.ticker;
        return (
          <div className="ticker-index">
            <div className="ticker-index-left" onClick={this.handleClick}>
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
              {button}
            </div>
          </div>
        );
    }
}

export default withRouter(TickerIndexItem)