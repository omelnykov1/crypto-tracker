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
        
        return this.props.tickers[0] ? (
          <div className="ticker-index-main">
            <h1>All Tickers</h1>
            <div>
              <ul>
                {
                    this.props.tickers.map((ticker) => (
                    < TickerIndexItem ticker={ticker} key={ticker.id} />
                    ))
                }
              </ul>
            </div>
          </div>
        ) : null
    }
}

export default TickerIndex;