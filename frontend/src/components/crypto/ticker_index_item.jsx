import React from "react";
import { withRouter } from "react-router-dom";
import TickerIndexItemChart from './ticker_inter_item_chart';
const numeral = require("numeral");

const TickerIndexItem = ({ 
  table, 
  ticker, 
  changeTable, 
  user, 
  fetchTickers, 
  createTable, 
  history 
}) => {

  const deleteTicker = () => {
    const filtered = table.tickers.filter(tick => tick.id !== ticker.id)
    table.tickers = filtered
    changeTable(table)
  }

  const handleAddTicker = () => {
    if (user.id) {
      if (table.user) table.tickers.push(ticker);
      else {
        table.tickers = [ticker];
        table.user = user.id;
      }
      createTable(table).then(fetchTickers());
    } else history.push('/login')
  }

  const handleClick = () => history.push(`/tickers/${ticker.id}`);

  const showAddRemoveInfo = () => {
    let hiddenText = document.getElementsByClassName(`hidden-info ${ticker.name}`)[0];
    hiddenText.className = 'hidden-info-show';
  }

  const hideAddRemoveInfo = () => {
    let hiddenText = document.getElementsByClassName('hidden-info-show')[0];
    hiddenText.className = `hidden-info ${ticker.name}`;
  }
      
  let toggle = true

  if (Object.values(table).length) {
    table.tickers.forEach(tick => {
      if (tick.id === ticker.id && user) toggle = false
    });
  };

  const button = toggle ? <i className="far fa-star" onClick={() => handleAddTicker()}></i> : <i className="fas fa-star" onClick={() => deleteTicker()}></i>;
  const textInfo = toggle ? "Add to favorites" : "Remove from favorites";
  const { name, current_price, image, market_cap, total_volume, price_change_percentage_24h, market_cap_rank, symbol, sparkline_in_7d } = ticker;
  const color = price_change_percentage_24h >= 0 ? "#1ABC9C" : "#E74C3C";

    return (
      <div className="ticker-index">
        <div className="ticker-index-left" >
          <div className="ticker-index-btn-wrapper" 
            onMouseEnter={showAddRemoveInfo}
            onMouseLeave={hideAddRemoveInfo}
          >
            <div className={`hidden-info ${name}`}>
              <p id="info-text-btn">{textInfo}</p>
            </div>
            {button}
          </div>
          <div className="ticker-index-market-cap-rank">{market_cap_rank}</div>
          <div className="ticker-image"><img src={image} alt=""></img></div>
          <div className="ticker-name" onClick={e => handleClick()} >{name}</div>
        </div>
        <div className="ticker-index-center">
          <div className="ticker-symbol">{symbol}</div>
        </div>
        <div className="ticker-index-right">
          <div className="ticker-price"> ${current_price.toFixed(2)} </div>
          <div className="ticker-volume"> {numeral(total_volume).format("($ 0.00 a)")} </div>
          <div className="ticker-market-cap"> {numeral(market_cap).format("($ 0.00 a)")} </div>
          <div className="ticker-index-chart-wrapper">
            <TickerIndexItemChart data={sparkline_in_7d.price} color={color}/>
          </div>
        </div>
      </div>
    );
}

export default withRouter(TickerIndexItem)