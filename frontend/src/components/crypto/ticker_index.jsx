import React, { useState, useEffect } from 'react';
import TickerIndexItem from './ticker_index_item';
import Pagination from "./pagination";
import { Loader } from '../util/loader';

const TickerIndex = props => {
  const [tickers, setTickers] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tickersPerPage, setTickersPerPage] = useState(20);
  const [loading, setLoading] = useState(true);

  const { fetchTickers, currentUser, fetchTable, fetchTickerData, createTable, table, changeTable } = props;

  useEffect(() => {
    const getTickers = async () => {
      const { tickers } = await fetchTickers();
      setTickers(tickers);
    };
    getTickers();
    if (currentUser.id) fetchTable(currentUser.id);
  }, [])

  const sort = (input) => {
    setClicked(true);
    setToggle(!toggle);
    const tickers = toggle ? 
      tickers.sort((a, b) => b[input] - a[input]) 
      : 
      tickers.sort((a, b) => a[input] - b[input]);
    setTickers(tickers);
  }
  
  const paginate = (n) => setCurrentPage(n);

  setTimeout(() => setLoading(false), 1600);
  const indexOfLastTicker = currentPage * tickersPerPage;
  const indexOfFirstTicker = indexOfLastTicker - tickersPerPage;
  const currentTickers = tickers.slice(indexOfFirstTicker,indexOfLastTicker);

  return !loading ? (
  <div className="tickers-main-page-wrapper" style={{marginTop: "6vw"}}>
    <div className="ticker-index-main">
      <div className="ticker-index-header">
        <h1>Top 100 Coins by Market Capitalization</h1>
      </div>
      <div className="ticker-index-labels">
        <div className="ticker-index-labels-left">
          <h1 className="ticker-num">#</h1>
          <h1 className="ticker-coin-index">Coin</h1>
        </div>
        <div className="ticker-index-labels-right">
          <h1
            className="ticker-index-price"
            onClick={() => sort("current_price")}
          >
            Price
          </h1>
          <h1
            className="ticker-index-volume"
            onClick={() => sort("total_volume")}
          >
            24h Volume
          </h1>
          <h1
            className="ticker-index-market-cap"
            onClick={() => sort("market_cap")}
          >
            Mkt Cap
          </h1>
          <h1 className="ticker-index-label-chart">Last 7 days</h1>
        </div>
      </div>
      <div className="tickers-list">
        <ol>
          {currentTickers.map((ticker) => (
            <TickerIndexItem
              ticker={ticker}
              key={ticker.id}
              changeTable={changeTable}
              table={table}
              fetchTickers={fetchTickers}
              fetchTickerData={fetchTickerData}
              user={currentUser}
              createTable={createTable}
            />
          ))}
        </ol>
      </div>
    </div>
    <div className="pagination">
      <Pagination
        tickersPerPage={tickersPerPage}
        totalTickers={tickers.length}
        paginate={paginate}
      />
    </div>
  </div>
) : < Loader loading={loading} />
}

export default TickerIndex;
