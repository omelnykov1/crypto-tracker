import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableItem from './table_item';
import { withRouter } from 'react-router-dom';
import { Loader } from '../util/loader';
import TableParticles from './table_particles';

const Table = ({ fetchTable,changeTable }) => {
  const currentUser = useSelector(state => state.session.user);
  const table = useSelector(state => state.entities.table[Object.keys(state.entities.table)[0]] ? state.entities.table[Object.keys(state.entities.table)[0]] : {});

  const [user] = useState(currentUser.id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTable(user);
  }, [user, fetchTable]);

  const renderTickers = () => {
    if (table.tickers) {
      return table.tickers.map(ticker => (
        <TableItem 
          ticker={ticker} 
          key={ticker.id} 
          table={table}
          changeTable={changeTable}
        />
      ));
    } 
  }

  const getIcons = () => {
    if (table.tickers) {
      const images = table.tickers.map(ticker => ticker.image)
      const image = images[Math.floor(Math.random() * images.length)];
      return image;
    }
  }


  setTimeout(() => setLoading(false), 1700);

  return loading ? < Loader loading={loading} /> : (
    <div className="table-container">
      < TableParticles image={getIcons()} />
      <div className="table-wrapper">
        <h1>Favorite Tickers</h1>
        <div className="table-labels">
          <div className="table-labels-left"><span>Name</span></div>
          <div className="table-labels-right">
            <span>Current Price</span>
            <span>#</span>
            <span>Total ROI</span>
            <span>All Time High</span>
          </div>
        </div>
        {renderTickers()}
      </div>
    </div>
  )
}

export default withRouter(Table);