import React from 'react';

const TickerStatistics = ({ ticker }) => {
    const { market_data, name } = ticker;
    const { 
      ath_change_percentage, 
      price_change_percentage_24h, 
      price_change_percentage_7d, 
      price_change_percentage_30d 
    } = market_data;
    const colorPicker = price => price >= 0 ? "green" : "red";
    const athChangeColor = colorPicker(ath_change_percentage.usd);
    const dayColor = colorPicker(price_change_percentage_24h);
    const sevenDayColor = colorPicker(price_change_percentage_7d);
    const thirtyDayColor = colorPicker(price_change_percentage_30d);

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
            <div>${market_data.current_price.usd.toFixed(2)}</div>
            <div>${market_data.ath.usd.toFixed(2)}</div>
            <div>${market_data.atl.usd.toFixed(2)}</div>
            <div style={{ color: athChangeColor }}>{ath_change_percentage.usd.toFixed(2)}%</div>
            <div style={{ color: dayColor }}>{price_change_percentage_24h.toFixed(2)}%</div>
            <div style={{ color: sevenDayColor }}>{price_change_percentage_7d.toFixed(2)}%</div>
            <div style={{ color: thirtyDayColor }}>{price_change_percentage_30d.toFixed(2)}%</div>
          </div>
        </div>
      </div>
    );
}

export default TickerStatistics;