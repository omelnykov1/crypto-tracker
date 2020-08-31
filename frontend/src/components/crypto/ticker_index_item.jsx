import React from "react";
import { withRouter } from "react-router-dom";
import TickerIndexItemChart from './ticker_inter_item_chart';
const numeral = require("numeral");


class TickerIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleAddTicker = this.handleAddTicker.bind(this);
        this.deleteTicker = this.deleteTicker.bind(this);
        this.hideAddRemoveInfo = this.hideAddRemoveInfo.bind(this);
        this.showAddRemoveInfo = this.showAddRemoveInfo.bind(this);
    }

    deleteTicker() {
      const filtered = this.props.table.tickers.filter(ticker => ticker.id !== this.props.ticker.id)
      this.props.table.tickers = filtered
      this.props.changeTable(this.props.table)
    }

    handleAddTicker() {
      if (this.props.user.id) {
        if (this.props.table.user) {
          this.props.table.tickers.push(this.props.ticker);
          this.props.changeTable(this.props.table).then(this.props.fetchTickers());
        } else {
          this.props.table.tickers = [this.props.ticker];
          this.props.table.user = this.props.user.id;
          this.props.createTable(this.props.table).then(this.props.fetchTickers());
        }
      } else {
        this.props.history.push('/login')
      }
    }

    handleClick() {
      this.props.history.push(`/tickers/${this.props.ticker.id}`);
    }

    showAddRemoveInfo() {
      let hiddenText = document.getElementsByClassName(`hidden-info ${this.props.ticker.name}`)[0];
      hiddenText.className = 'hidden-info-show';
    }

    hideAddRemoveInfo() {
      let hiddenText = document.getElementsByClassName('hidden-info-show')[0];
      hiddenText.className = `hidden-info ${this.props.ticker.name}`;
    }

    render() {
      
      let toggle = true
      const { table } = this.props
      if (Object.values(table).length) {
        table.tickers.forEach(ticker => {
          if (ticker.id === this.props.ticker.id && this.props.user) {
            toggle = false
          }
        });
      }
      const button = toggle ? <i className="far fa-star" onClick={() => this.handleAddTicker()}></i> : <i className="fas fa-star" onClick={() => this.deleteTicker()}></i>;
      const textInfo = toggle ? "Add to favorites" : "Remove from favorites"
      const { name, current_price, image, market_cap, total_volume, price_change_percentage_24h, market_cap_rank, symbol, sparkline_in_7d } = this.props.ticker;
      const color = price_change_percentage_24h >= 0 ? "#1ABC9C" : "#E74C3C";
        return (
          <div className="ticker-index">
            <div className="ticker-index-left" >
              <div className="ticker-index-btn-wrapper" 
                onMouseEnter={this.showAddRemoveInfo}
                onMouseLeave={this.hideAddRemoveInfo}
              >
                <div className={`hidden-info ${name}`}>
                  <p id="info-text-btn">{textInfo}</p>
                </div>
                {button}
              </div>
              <div className="ticker-index-market-cap-rank">{market_cap_rank}</div>
              <div className="ticker-image"><img src={image} alt=""></img></div>
              <div className="ticker-name" onClick={this.handleClick} >{name}</div>
            </div>
            <div className="ticker-index-center">
              <div className="ticker-symbol">{symbol}</div>
            </div>
            <div className="ticker-index-right">
              <div className="ticker-price"> ${current_price.toFixed(2)} </div>
              {/* <div className="ticker-24h-price-change" style={{color}}>{price_change_percentage_24h.toFixed(2)}%</div> */}
              <div className="ticker-volume"> {numeral(total_volume).format("($ 0.00 a)")} </div>
              <div className="ticker-market-cap"> {numeral(market_cap).format("($ 0.00 a)")} </div>
              <div className="ticker-index-chart-wrapper">
                <TickerIndexItemChart data={sparkline_in_7d.price} color={color}/>
              </div>
            </div>
          </div>
        );
    }
}

export default withRouter(TickerIndexItem)