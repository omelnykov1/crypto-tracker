import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import TickerWidget from './ticker_components/ticker_widget';
import TickerStatistics from './ticker_components/ticker_statistics';
import TickerLinks from './ticker_components/ticker_links';
import TickerChart from './ticker_components/ticker_chart';
import ReactHtmlParser from "react-html-parser";
import TickerParticles from './ticker_components/ticker_particles';

const Ticker = ({ 
    fetchTicker, 
    fetchTickerData, 
    createTable,
    fetchTable, 
    changeTable, 
    table, 
    currentUser, 
    ticker, 
    data,
    match,
    history 
  }) => {

  useEffect(() => {
    fetchTicker(match.params.tickerId);
    fetchTickerData(match.params.tickerId);
    if (currentUser.id) fetchTable(currentUser.id);
  });

  const deleteTicker = () => {
    const filtered = table.tickers.filter(tick => tick.id !== ticker.id)
    table.tickers = filtered
    changeTable(table)
  }

  const handleAddTicker = () => {
    if (currentUser.id) {
      if (table.user) {
        table.tickers.push(ticker);
        changeTable(table).then(fetchTable(currentUser.id));
      } else {
        table.tickers = [ticker];
        table.user = currentUser.id;
        createTable(table)
      }
    } else history.push('/login')
  }

  const handleButton = () => {
    let toggle;
    if (table.tickers && ticker) {
      table.tickers.forEach((tick) => {
        if (ticker.name === tick.name) toggle = true;
      });
    }

    const button = toggle ? (
      <div className="wrapper" onClick={e => deleteTicker()}>
        <button>
          Remove from Favorites
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    ) : (
      <div className="add-wrapper" onClick={e => handleAddTicker()}>
        <button>
          Add to Favorites
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    );

    return button;
  }

  const colorHandler = () => ticker.market_data.price_change_percentage_7d >= 0 ? "#1ABC9C" : "#E74C3C";

  if (ticker && data) {
    return (
      <div className="main-ticker-wrapper">
        < TickerParticles image={ticker.image} />
        <div className="ticker-widget">
          <TickerWidget ticker={ticker} />
        </div>
        <div className="ticker-info">
          <div className="ticker-chart-wrapper">
            <TickerChart data={data} color={colorHandler()}/>
          </div>
          <div className="ticker-statistics">
            <TickerStatistics ticker={ticker} />
            <TickerLinks ticker={ticker} />
          </div>
        </div>
        <div className="ticker-about">
          <h1>About {ticker.name}</h1>
          <p>{ReactHtmlParser(ticker.description.en)}</p>
          {handleButton()}
        </div>
      </div>
    );
  } else return null;
}

export default withRouter(Ticker);