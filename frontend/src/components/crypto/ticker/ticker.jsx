import React from 'react';
import { withRouter } from 'react-router';
import TickerWidget from './ticker_components/ticker_widget';
import TickerStatistics from './ticker_components/ticker_statistics';
import TickerLinks from './ticker_components/ticker_links';
import TickerChart from './ticker_components/ticker_chart';
import ReactHtmlParser from "react-html-parser";
import TickerParticles from './ticker_components/ticker_particles';

class Ticker extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTicker = this.deleteTicker.bind(this);
    this.handleAddTicker = this.handleAddTicker.bind(this);
  }

  componentDidMount() {
    this.props.fetchTicker(this.props.match.params.tickerId);
    this.props.fetchTickerData(this.props.match.params.tickerId);
    if (this.props.currentUser.id) this.props.fetchTable(this.props.currentUser.id);
  }

  deleteTicker() {
    const filtered = this.props.table.tickers.filter(ticker => ticker.id !== this.props.ticker.id)
    this.props.table.tickers = filtered
    this.props.changeTable(this.props.table)
  }

  handleAddTicker() {
    if (this.props.currentUser.id) {
      if (this.props.table.user) {
        this.props.table.tickers.push(this.props.ticker);
        debugger
        this.props.changeTable(this.props.table).then(this.props.fetchTable(this.props.currentUser.id));
      } else {
        this.props.table.tickers = [this.props.ticker];
        this.props.table.user = this.props.currentUser.id;
        this.props.createTable(this.props.table)
      }
    } else {
      this.props.history.push('/login')
    }
  }

  handleButton() {
    let toggle;
    if (this.props.table.tickers && this.props.ticker) {
      this.props.table.tickers.forEach((tick) => {
        if (this.props.ticker.name === tick.name) toggle = true;
      });
    }

    const button = toggle ? (
      <div className="wrapper" onClick={this.deleteTicker}>
        <button>
          Remove from Favorites
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    ) : (
      <div className="add-wrapper" onClick={this.handleAddTicker}>
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

  colorHandler() {
    return this.props.ticker.market_data.price_change_percentage_7d >= 0
      ? "#1ABC9C"
      : "#E74C3C";
  }

  render() {
    if (this.props.ticker && this.props.data) {
      const { ticker }= this.props;
      return (
        <div className="main-ticker-wrapper">
          < TickerParticles image={ticker.image} />
          <div className="ticker-widget">
            <TickerWidget ticker={ticker} />
          </div>
          <div className="ticker-info">
            <div className="ticker-chart-wrapper">
              <TickerChart data={this.props.data} color={this.colorHandler()}/>
            </div>
            <div className="ticker-statistics">
              <TickerStatistics ticker={ticker} />
              <TickerLinks ticker={ticker} />
            </div>
          </div>
          <div className="ticker-about">
            <h1>About {ticker.name}</h1>
            <p>{ReactHtmlParser(ticker.description.en)}</p>
            {this.handleButton()}
          </div>
        </div>
      );
    } else {
        return null;
    }
  }
}

export default withRouter(Ticker);