import React from "react";
import { withRouter } from "react-router-dom";
const numeral = require("numeral");


class TickerIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleAddTicker = this.handleAddTicker.bind(this);
        this.deleteTicker = this.deleteTicker.bind(this);
    }

    deleteTicker() {
      const filtered = this.props.table.tickers.filter(ticker => ticker.id !== this.props.ticker.id)
      this.props.table.tickers = filtered
      this.props.changeTable(this.props.table)
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
      const button = toggle ? <i className="far fa-star" onClick={() => this.handleAddTicker()}></i> : <i className="fas fa-star" onClick={() => this.deleteTicker()}></i>;
      const { name, current_price, image, market_cap, total_volume, price_change_percentage_24h, market_cap_rank, symbol, id } = this.props.ticker;
      const color = price_change_percentage_24h >= 0 ? "#1ABC9C" : "#E74C3C";
        return (
          <div className="ticker-index">
            <div className="ticker-index-left" >
              <div className="ticker-index-btn-wrapper"> {button}</div>
              <div className="ticker-index-market-cap-rank">{market_cap_rank}</div>
              <div className="ticker-image"><img src={image} alt=""></img></div>
              <div className="ticker-name" onClick={this.handleClick} >{name}</div>
            </div>
            <div className="ticker-index-center">
              <div className="ticker-symbol">{symbol}</div>
            </div>
            <div className="ticker-index-right">
              <div className="ticker-price"> ${current_price.toFixed(2)} </div>
              <div className="ticker-24h-price-change" style={{color}}>{price_change_percentage_24h.toFixed(2)}%</div>
              <div className="ticker-volume"> {numeral(total_volume).format("($ 0.00 a)")} </div>
              <div className="ticker-market-cap"> {numeral(market_cap).format("($ 0.00 a)")} </div>
            </div>
          </div>
        );
    }
}

export default withRouter(TickerIndexItem)