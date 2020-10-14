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

export const fetchTickerChartData = tickerId => (
  axios.get(`api/cryptos/tickers/chart/${tickerId}`, tickerId)
);

export const fetchTickerNews = tickerId => (
  axios.get(`api/cryptos/tickers/news/${tickerId}`, tickerId)
);