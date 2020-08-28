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
    }

    componentDidMount() {
      this.props.fetchTicker(this.props.match.params.tickerId);
      this.props.fetchTickerData(this.props.match.params.tickerId);
    }

    render() {
      if (this.props.ticker && this.props.data) {
          const ticker = this.props.ticker;
          const {image, market_data} = this.props.ticker;
          const color = market_data.price_change_percentage_7d >= 0 ? "#1ABC9C" : "#E74C3C"
          return (
            <div className="main-ticker-wrapper">
              < TickerParticles image={image} />
              <div className="ticker-widget">
                <TickerWidget ticker={ticker} />
              </div>
              <div className="ticker-info">
                <div className="ticker-chart-wrapper">
                  <TickerChart data={this.props.data} color={color}/>
                </div>
                <div className="ticker-statistics">
                  <TickerStatistics ticker={ticker} />
                  <TickerLinks ticker={ticker} />
                </div>
              </div>
              <div className="ticker-about">
                <h1>About {ticker.name}</h1>
                <p>{ReactHtmlParser(ticker.description.en)}</p>
              </div>
            </div>
          );
    } else {
        return null;
    }
  }
}

export default withRouter(Ticker);