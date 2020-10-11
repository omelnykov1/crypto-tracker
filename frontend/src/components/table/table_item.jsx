import React from 'react';
import { useHistory } from "react-router-dom";

const TableItem = ({ table, changeTable, ticker }) => {
  const history = useHistory();

  const deleteTicker = () => {
    const filtered = table.tickers.filter(tick => tick.id !== ticker.id)
    table.tickers = filtered
    filtered.length ? changeTable(table) : changeTable(table).then(history.push('/tickers'));
  };
  
  const handleClick = () => history.push(`/tickers/${ticker.id}`);

  const {ath, current_price,name,image, market_cap_rank, atl_change_percentage} = ticker;
  const price = current_price < 0.01 ? current_price.toFixed(3) : current_price.toFixed(2);

  return (
    <div className="table-item-container">
      <div className="table-item-left" onClick={e => handleClick()}>
        <img src={image} alt="" />
        <span>{name}</span>
      </div>
      <div className="table-item-right">
        <div className="table-current-price">${price}</div>
        <div className="table-market-cap-rank">{market_cap_rank}</div>
        <div className="table-roi">{atl_change_percentage.toFixed(2)}%</div>
        <div className="table-ath">${ath.toFixed(2)}</div>
        <i onClick={() => deleteTicker()} className="fas fa-star"/>
      </div>
    </div>
  );
}

export default TableItem;