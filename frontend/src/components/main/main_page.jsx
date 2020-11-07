import React, { useEffect } from "react";
import SearchBar from '../search/search_bar';
import { useHistory } from 'react-router-dom';
import { fetchTickers } from '../../actions/crypto_actions'
import { useSelector, useDispatch } from 'react-redux'

const MainPage = () => {
  const history = useHistory();
  const tickers = useSelector(state => state.entities.cryptos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickers());
  },[]);

  return (
    <div className="main">
      <div className="main-left">
        <div className="welcome-message">
          <h1>Welcome to Crypto Tracker</h1>
          <p className="welcome-main">
            Platform which provides fast and reliable data about your favorite
            blockchain projects. The simplified overview of everything makes
            it easy to quickly navigate to the coins you have an interest in.
          </p>
          <div className="all-tickers">
            <button className="tickers-btn" onClick={() => history.push('/tickers')}>All Coins</button>
          </div>
        </div>
      </div>
      <div className="main-right">
        <img src={ "/images/not-main.png" } alt="" />
        <SearchBar tickers={tickers} />
      </div>
    </div>
  );
}

export default MainPage;

