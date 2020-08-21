import React from 'react';

const TickerStatistics = props => {

    const colorPicker = inp => inp >= 0 ? "green" : "red";

    const {market_data, name } = props.ticker
    const athChangeColor = colorPicker(market_data.ath_change_percentage.usd.toFixed(2));
    const dayColor = colorPicker(market_data.price_change_percentage_24h.toFixed(2));
    const sevenDayColor = colorPicker(market_data.price_change_percentage_7d.toFixed(2));
    const thirtyDayColor = colorPicker(market_data.price_change_percentage_30d.toFixed(2));
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
          </div>
        </div>
      </div>
    );
}

export default TickerStatistics;