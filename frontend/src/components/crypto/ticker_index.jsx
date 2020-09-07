import React from 'react';
import TickerIndexItem from './ticker_index_item';
import Pagination from "./pagination";
import { Loader } from '../util/loader';

class TickerIndex extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        tickers: [],
        toggle: true,
        clicked: false,
        currentPage: 1,
        tickersPerPage: 20
      };
      this.sort = this.sort.bind(this);
      this.handlePageChange = this.handlePageChange.bind(this);
      this.paginate = this.paginate.bind(this);
  }

  componentDidMount() {
    this.props.fetchTickers().then(action => this.setState({tickers: action.tickers}));
    if (this.props.currentUser.id) this.props.fetchTable(this.props.currentUser.id);
  }

  handlePageChange(pageNumber) {
    this.setState({currentPage: pageNumber});
  }

  sort(input) {
    this.setState({clicked: true, toggle: !this.state.toggle});
    const tickers = this.state.toggle
      ? this.state.tickers.sort((a, b) => b[input] - a[input])
      : this.state.tickers.sort((a, b) => a[input] - b[input]);
    this.setState({tickers});
  }
  
  paginate(n) {
    this.setState({currentPage: n})
  } 

  render() { 
    const isLoading = !this.state.tickers.length;
    if (this.state.tickers.length) {
      const { currentPage, tickersPerPage, tickers } = this.state;
      const indexOfLastTicker = currentPage * tickersPerPage;
      const indexOfFirstTicker = indexOfLastTicker - tickersPerPage;
      const currentTickers = this.state.tickers.slice(indexOfFirstTicker,indexOfLastTicker);
      const {changeTable, table} = this.props
      return (
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
                    fetchTickers={this.props.fetchTickers}
                    fetchTickerData={this.props.fetchTickerData}
                    user={this.props.currentUser}
                    createTable={this.props.createTable}
                  />
                ))}
              </ol>
            </div>
          </div>
          <div className="pagination">
            <Pagination
              tickersPerPage={tickersPerPage}
              totalTickers={tickers.length}
              paginate={this.paginate}
            />
          </div>
        </div>
      );
    } else {
      return < Loader loading={isLoading} />
    }
  }
}

export default TickerIndex;
