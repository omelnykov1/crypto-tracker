import React, { Component } from 'react';
const numeral = require("numeral");

class TickerStatistics extends Component {
    constructor(props) {
        super(props)
    }

    colorPicker(inp) {
        return inp >= 0 ? "green" : "red";
    }

    render() {
        console.log(this.props.ticker)
        const {market_data, links, name, image} = this.props.ticker
        const athChangeColor = this.colorPicker(market_data.ath_change_percentage.usd.toFixed(2));
        const dayColor = this.colorPicker(market_data.price_change_percentage_24h.toFixed(2));
        const sevenDayColor = this.colorPicker(market_data.price_change_percentage_7d.toFixed(2));
        const thirtyDayColor = this.colorPicker(market_data.price_change_percentage_30d.toFixed(2));
        return (
          <div className="ticker-statistics-wrapper">
            <h1>Statistics</h1>
            <div className="ticker-statistics-table">
              <div className="ticker-statistics-table-left">
                <div>{name} Price</div>
                <div>All Time High</div>
                <div>All Time Low</div>
                <div>All Time High Change</div>
                <div>24 Hour Price Change</div>
                <div>7 Day Price Change</div>
                <div>30 Day Price Change</div>
                <div><img src={image.thumb} alt=""/></div>
                <div><i id="reddit" className="fab fa-reddit"></i></div>
                <div><i className="fab fa-github-alt"></i></div>
              </div>
              <div className="ticker-statistics-table-right">
                <div>{market_data.current_price.usd.toFixed(2)}</div>
                <div>{market_data.ath.usd.toFixed(2)}</div>
                <div>{market_data.atl.usd.toFixed(2)}</div>
                <div style={{ color: athChangeColor }}>
                  {market_data.ath_change_percentage.usd.toFixed(2)}%
                </div>
                <div style={{ color: dayColor }}>
                  {market_data.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div style={{ color: sevenDayColor }}>
                    {market_data.price_change_percentage_7d.toFixed(2)}%
                </div>
                <div style={{ color: thirtyDayColor }}>{market_data.price_change_percentage_30d.toFixed(2)}%</div>
                <div>
                  <a href={links.homepage[0]}>{links.homepage[0]}</a>
                </div>
                <div className="reddit-link">
                  <a href={links.subreddit_url}>Reddit</a>
                </div>
                <div className="git-link">
                  <a href={links.repos_url.github[0]}>Github</a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default TickerStatistics;