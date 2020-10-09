import React from 'react';
import { withRouter } from 'react-router-dom';

const SearchItem = props => {
  const handleClick = () => props.history.push(`/tickers/${this.props.ticker.id}`);

  const { name, current_price, image, price_change_percentage_24h, market_cap_rank} = props.ticker;
  const priceChange = price_change_percentage_24h ? price_change_percentage_24h : 4.58;
  const color = priceChange > 0 ? "#1ABC9C" : "#E74C3C";
  
  return (
    <div className="ticker-search-item" onMouseDown={handleClick}>
      <div className="ticker-search-left">
        <img src={image} alt=""/>
        <div className="ticker-search-market-cap">{market_cap_rank}</div>
        <div className="ticker-search-name">{name}</div>
      </div>
      <div className="ticker-search-right">
        <div className="ticker-search-price">${current_price.toFixed(2)}</div>
        <div className="ticker-search-price-change"style={{color}}>{priceChange.toFixed(2)}%</div>
      </div>  
    </div>
  )
}

export default withRouter(SearchItem);