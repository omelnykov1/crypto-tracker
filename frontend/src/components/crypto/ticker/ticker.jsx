import React, { useEffect, useState } from 'react';
import TickerWidget from './ticker_components/ticker_widget';
import TickerStatistics from './ticker_components/ticker_statistics';
import TickerLinks from './ticker_components/ticker_links';
import ReactHtmlParser from "react-html-parser";
import TickerParticles from './ticker_components/ticker_particles';
import TickerChart from './ticker_components/ticker_charts/ticker_chart';
import TickerNews from './ticker_components/ticker_news/ticker_news';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { removeFromFavoritesButton, addToFavoritesButton } from './ticker_util/ticker_button'

const Ticker = ({ 
    fetchTicker, 
    fetchTickerData, 
    fetchTickerNews,
    createTable,
    fetchTable, 
    changeTable, 
    table, 
    currentUser, 
    ticker, 
    data,
    news
  }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const [chartNum, setChartNum] = useState(1);
  const [title, setTitle] = useState('1 Day Chart');

  useEffect(() => {
    const { tickerId } = match.params;
    fetchTicker(tickerId);
    fetchTickerData(tickerId);
    fetchTickerNews(tickerId)
    if (currentUser && currentUser.id) fetchTable(currentUser.id);
  },[currentUser, fetchTicker, fetchTable, fetchTickerData, fetchTickerNews, match.params]);

  const deleteTicker = () => {
    const filtered = table.tickers.filter(tick => tick.id !== ticker.id)
    table.tickers = filtered
    changeTable(table)
  }

  const handleAddTicker = () => {
    if (currentUser && currentUser.id) {
      if (table.user) {
        table.tickers.push(ticker);
        changeTable(table).then(fetchTable(currentUser.id));
      } else {
        table.tickers = [ticker];
        table.user = currentUser.id;
        createTable(table)
      }
    } else history.push('/login');
  }

  const isFavorite = (table && table.tickers && ticker) ? table.tickers.some((tick) => (ticker.name === tick.name)) : null;
  const button = isFavorite ? removeFromFavoritesButton(deleteTicker) : addToFavoritesButton(handleAddTicker);
  const getPriceColor = price => price >= 0 ? "#1ABC9C" : "#E74C3C";
  const oneDayColor = ticker ? getPriceColor(ticker.market_data.price_change_percentage_24h) : null;
  const sevenDayColor = ticker ? getPriceColor(ticker.market_data.price_change_percentage_7d) : null;
  const thirtyDayColor = ticker ? getPriceColor(ticker.market_data.price_change_percentage_30d) : null;
  const colors = { oneDayColor, sevenDayColor, thirtyDayColor};

  if (ticker && data && news) {
    return (
      <div className="main-ticker-wrapper">
        <TickerParticles image={ticker.image} />
        <div className="ticker-widget"><TickerWidget ticker={ticker} /></div>
        <div className="ticker-info">
          <div className="ticker-chart-wrapper">
            <label className="dropdown">
              <div className="dd-button">{title}</div>
              <input type="checkbox" className="dd-input" id="test"/>
              <ul className="dd-menu">
                <li onClick={() => {
                  setChartNum(1)
                  setTitle('1 Day Chart')
                }}>1 Day Chart</li>
                <li onClick={() => {
                  setChartNum(7)
                  setTitle('7 Days Chart')
                }}>7 Days Chart</li>
                <li onClick={() => {
                  setChartNum(30)
                  setTitle('30 Days Chart')
                }}>30 Days Chart</li>
              </ul>
            </label>
            <TickerChart data={data} colors={colors} chartNum={chartNum}/>
          </div>
          <div className="ticker-statistics">
            <TickerStatistics ticker={ticker} />
            <TickerLinks ticker={ticker} />
          </div>
        </div>
        <div className="ticker-footer">
          <div className="ticker-about">
            <h1>About {ticker.name}</h1>
            <p>{ReactHtmlParser(ticker.description.en)}</p>
          {button}
          </div>
          <div className="ticker-news">
            <TickerNews news={news} />
          </div>
        </div>
      </div>
    );
  } else return null;
}

export default Ticker;