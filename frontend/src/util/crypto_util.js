import axios from 'axios';

export const fetchTicker = tickerId => (
  axios.get(`api/cryptos/tickers/${tickerId}`, tickerId)
);

export const fetchTickers = () => (
  axios.get("api/cryptos/tickers")
);

export const fetchTableTicker = tickerId => (
  axios.get('/api/cryptos/', {params: tickerId})
);