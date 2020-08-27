import React from 'react';
import TickerIndexItem from './ticker_index_item';

class TickerIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tickers: [],
          toggle: true,
          clicked: false,
        }
        this.sort = this.sort.bind(this);
    }

    componentDidMount() {
      this.props.fetchTickers().then(action => this.setState({tickers: action.tickers}));
    }

    sort(input) {
      this.setState({clicked: true, toggle: !this.state.toggle});
      const tickers = this.state.toggle
        ? this.state.tickers.sort((a, b) => b[input] - a[input])
        : this.state.tickers.sort((a, b) => a[input] - b[input]);
      this.setState({tickers})
    } 

    render() { 
      if (this.props.tickers.length) {
        const tickers = this.state.clicked ? this.state.tickers : this.props.tickers;
        return (
          <div className="ticker-index-main">
            <div className="ticker-index-header">
              <h1>Top 100 Coins by Market Capitalization</h1>
            </div>
            <div className="ticker-index-labels">
              <div className="ticker-index-labels-left">
                <h1>Coin</h1>
              </div>
              <div className="ticker-index-labels-right">
                <h1
                  className="ticker-index-price"
                  onClick={() => this.sort("current_price")}
                >
                  Price
                </h1>
                <h1
                  className="ticker-index-volume"
                  onClick={() => this.sort("total_volume")}
                >
                  24h Volume
                </h1>
                <h1
                  className="ticker-index-market-cap"
                  onClick={() => this.sort("market_cap")}
                >
                  Mkt Cap
                </h1>
              </div>
            </div>
            <div className="tickers-list">
              <ol>
                {tickers.map((ticker) => (
                  <TickerIndexItem ticker={ticker} key={ticker.id} />
                ))}
              </ol>
            </div>
          </div>
        );
      } else {
        return null;
      }
    }
}

export default TickerIndex;


// https://api.coingecko.com/api/v3/search/trending - TRENDING!!!