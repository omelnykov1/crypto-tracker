import React from 'react';
import TickerIndexItem from './ticker_index_item';

class TickerIndex extends React.Component {
    constructor(props) {
        super(props);
        debugger
    }

    componentDidMount() {
        debugger
        this.props.fetchTickers();
    }

    render() {
        debugger
        
        return this.props.tickers.length ? (
          <div className="ticker-index-main">
            <div className="ticker-index-header">
              <h1>Top 100 Coins by Market Capitalization</h1>
            </div>
            <div className="ticker-index-labels">
              <div className="ticker-index-labels-left">
                <h1>Coin</h1>
                {/* <h1>ID</h1> */}
              </div>
              <div className="ticker-index-labels-right">
                <h1>Price</h1>
                <h1>Volume</h1>
                <h1>Mkt Cap</h1>
              </div>
            </div>
            <div className="tickers-list">
              <ol>
                {this.props.tickers.map((ticker) => (
                  <TickerIndexItem ticker={ticker} key={ticker.id} />
                ))}
              </ol>
            </div>
          </div>
        ) : null;
    }
}

export default TickerIndex;


// https://api.coingecko.com/api/v3/search/trending - TRENDING!!!